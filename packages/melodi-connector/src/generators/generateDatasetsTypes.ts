import {
  InputData,
  jsonInputForTargetLanguage,
  quicktype,
} from "quicktype-core";
import { GenericObservation, QueryResponseNoType } from "../types/generalTypes";
import {
  allDatasetIdentifiers,
  AllDatasetIdentifier,
} from "../types/queryResponse/datasetIdentifiers";

import { wait } from "../utils/wait";

import { getDatasetFromCache } from "./fetchers/datasetFetcher";
import { outputFileSync, outputJSONSync, readJsonSync } from "fs-extra/esm";
import { CatalogEntry } from "../types/queryResponse/catalogResponse";
import { DatasetRangeResponse } from "../types/queryResponse/datasetRangeResponse";
import { parseData } from "../utils/parseData";

const generateDatasetTypes = async (id: AllDatasetIdentifier) => {
  const data = await getDatasetFromCache({
    id,
    maxResult: 9000,
    updateCache: false,
  });

  parseData(data.observations);

  const dimensions = data.observations.map((obs) => obs.dimensions);
  const attributes = data.observations.map((obs) => obs.attributes);

  const dimensionsJSON = JSON.stringify(dimensions);
  const attributesJSON = JSON.stringify(attributes);

  const jsonInput = jsonInputForTargetLanguage("ts");

  await jsonInput.addSource({
    name: `${id}Dimensions`,
    samples: [dimensionsJSON],
  });
  await jsonInput.addSource({
    name: `${id}Attributes`,
    samples: [attributesJSON],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  const types = await quicktype({
    inputData,
    lang: "ts",
    inferEnums: false,
    rendererOptions: {
      "just-types": "true",
    },
  });

  // Get the description of the dataset from the catalog
  const { description, title }: CatalogEntry = readJsonSync(
    `src/data/catalog/${id}_catalog.json`
  );

  let descriptionDoc = "";
  if (description) {
    descriptionDoc += "/**\n";
    descriptionDoc += ` * ${title[0].content} \n\n`;
    descriptionDoc += ` * ${title[1].content} \n\n`;
    descriptionDoc += " Français \n\n ";
    descriptionDoc += `${description[0].content}\n\n`;
    descriptionDoc += " English \n\n";
    descriptionDoc += `${description[1].content}\n\n`;
    descriptionDoc += " */\n";
  }

  // Quicktype removes underscores from type names, so we need to do the same here
  const idWithoutUnderscores = id.replace(/_/g, "");

  let mainType = "";
  mainType += `export type ${idWithoutUnderscores}_Shape = \n{\n`;
  mainType += "/** Dimensions of the entry (eg: zoning, activity) */\n ";
  mainType += `  dimensions: ${idWithoutUnderscores}Dimensions;\n`;
  mainType += "/** Attributes of the entry (eg: metadatas)*/\n ";
  mainType += `  attributes: ${idWithoutUnderscores}Attributes;\n`;
  mainType += "/** Actual value of the entry */\n ";
  mainType += `  measure: number\n`;
  mainType += `}\n\n`;

  let imports = "";
  imports += `import { ${idWithoutUnderscores}Dimensions } from "./${id}_types";\n`;
  imports += `import { ${idWithoutUnderscores}Attributes } from "./${id}_types";\n`;
  // Import codes

  // Write the generated types to file
  let fileContent = "";
  fileContent += `// This file is auto-generated. Do not edit directly.\n\n`;
  fileContent += imports;
  fileContent += "\n";
  fileContent += descriptionDoc;
  fileContent += mainType;

  // Write main type file
  outputFileSync(`src/types/datasetShapes/${id}/${id}_shape.ts`, fileContent);

  // Generate dataset codes file and get concept codes
  const ranges = await generateDatasetCodes(id);
  if (!ranges) {
    console.log(
      `No concept codes for dataset ${id}, skipping codes insertion.`
    );
    return;
  }

  // Insert the code types where necessary
  types.lines = types.lines.map((line) => {
    // Find the corresponding concept code
    const range = ranges.find((range) =>
      line.includes(`${range.concept.code}:`)
    );
    if (range) {
      const { values, concept } = range;
      const { label, code } = concept;
      let codeTypeLine = "";
      // Insert code values in doc
      codeTypeLine += `/** Possible values for : ${label.fr}\t/\t${label.en} : \n`;
      values.forEach(({ label, code }) => {
        // If it is a number, just put the number
        if (!isNaN(Number(code))) {
          codeTypeLine += `- ${Number(code)}`;
          return;
        }

        codeTypeLine += ` * - ${label.fr}\t/\t${label.en} : ${code}\n`;
      });
      codeTypeLine += ` */\n`;

      // Insert code type
      codeTypeLine += `\t${code}: ${id}_Codes["${code}"][keyof ${id}_Codes["${code}"]];\n`;
      return codeTypeLine;
    }
    return line;
  });

  // Write Dimensions, Attributes, Measures types file
  let typeFileContent = "";
  // Import codes
  typeFileContent += `import { ${id}_Codes } from "./${id}_codes";\n\n`;

  typeFileContent += types.lines.join("\n");
  outputFileSync(
    `src/types/datasetShapes/${id}/${id}_types.ts`,
    typeFileContent
  );
};

// Generate the possible codes for each dimension for the ranges
const generateDatasetCodes = async (id: AllDatasetIdentifier) => {
  // Get the range
  const { range }: DatasetRangeResponse = readJsonSync(
    `src/data/datasetRanges/${id}_range.json`
  );

  if (!range) {
    console.log(`No range data for dataset ${id}`);
    return;
  }

  let fileContent = "";
  fileContent += `// This file is auto-generated. Do not edit directly.\n\n`;
  fileContent += `export const ${id}_codes = {\n`;

  // Object
  for (const r of range) {
    fileContent += ` /** ${r.concept.label.fr} */\n`;
    fileContent += ` ${r.concept.code}: {\n`;
    for (const value of r.values) {
      // Parse number codes as numbers
      const code = isNaN(Number(value.code))
        ? `"${value.code}"`
        : Number(value.code);

      fileContent += ` /** ${value.label.en} */\n`;
      fileContent += `  "${value.label.fr}_${value.code}": ${code},\n`;
    }
    fileContent += ` },\n`;
  }
  fileContent += `} as const;\n`;

  // Type from the object
  fileContent += `\n\nexport type ${id}_Codes = typeof ${id}_codes;\n`;

  outputFileSync(`src/types/datasetShapes/${id}/${id}_codes.ts`, fileContent);

  // Return a list of concept codes
  return range;
};

export const generateAllDatasetsTypes = async () => {
  let count = 0;

  let datasetsMapImports = "";

  // ID to shape map init
  let datasetIDtoShapeMap = "";
  datasetIDtoShapeMap += `\n\nexport type DatasetShapeMap = {\n`;

  // ID to codes map init
  let datasetIDtoCodesMap = "";
  datasetIDtoCodesMap += `\n\nexport const datasetCodes = {\n`;

  for (const id of allDatasetIdentifiers) {
    // Temporary limit for testing
    if (count > 3) break;
    const idWithoutUnderscores = id.replace(/_/g, "");

    if (count > 28) {
      await wait(2100); // wait 2 seconds to avoid rate limiting
    }
    await generateDatasetTypes(id);

    //Import shape
    datasetsMapImports += `import { ${idWithoutUnderscores}_Shape } from "./${id}/${id}_shape";\n`;
    // Import codes
    datasetsMapImports += `import { ${id}_codes } from "./${id}/${id}_codes";\n`;

    //ID to shape map
    datasetIDtoShapeMap += `  "${id}": Prettify<${idWithoutUnderscores}_Shape>;\n`;
    // ID to codes map
    datasetIDtoCodesMap += `  "${id}": ${id}_codes,\n`;

    count++;
  }
  datasetIDtoShapeMap += `}\n`;
  datasetIDtoCodesMap += `} as const;\n`;

  // Write the full map file
  let fullMapFileContent = "";
  fullMapFileContent += `// This file is auto-generated. Do not edit directly.\n\n`;
  fullMapFileContent += `import { Prettify } from "../utils";\n`;
  fullMapFileContent += datasetsMapImports;
  fullMapFileContent += datasetIDtoShapeMap;
  fullMapFileContent += datasetIDtoCodesMap;

  // DatasetIdentifier type
  fullMapFileContent +=
    "export type DatasetIdentifier = Prettify<keyof DatasetShapeMap>;\n";

  // DatasetCode map type
  fullMapFileContent += `export type DatasetCodeMap<ID extends DatasetIdentifier> = Prettify<(typeof datasetCodes)[ID]>;\n`;

  // DatasetShape type helper
  fullMapFileContent += `export type DatasetShape<ID extends DatasetIdentifier> = Prettify<DatasetShapeMap[ID]>;\n`;

  outputFileSync(`src/types/datasetShapes/datasetsMaps.ts`, fullMapFileContent);
};

generateAllDatasetsTypes().catch((error) => {
  console.error("Error generating dataset types:", error);
});
