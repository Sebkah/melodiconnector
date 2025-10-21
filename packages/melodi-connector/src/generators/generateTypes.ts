import {
  appendFileSync,
  existsSync,
  mkdirSync,
  unlinkSync,
  writeFileSync,
  readFileSync,
} from "node:fs";
import AdmZip from "adm-zip";
import Papa from "papaparse";
import {
  quicktype,
  InputData,
  jsonInputForTargetLanguage,
} from "quicktype-core";
import { CatalogEntry } from "../types/catalogTypes";

import {
  DatasetIdentifier,
  QueryResponseNoType as QueryResponseUnknownDataset,
} from "../types/generalTypes";
import { traverseObjectOrArray } from "../utils/traverseObjectOrArray";
import {
  downloadAndExtractZip,
  extractMetaData,
  MetadataRecord,
} from "../data/downloadFullData";

function clearOrCreateFile(fileName: string) {
  if (existsSync(fileName)) {
    unlinkSync(fileName);
  } else {
    writeFileSync(fileName, "", null);
  }
}
async function fetchCatalog(): Promise<{
  ids: DatasetIdentifier[];
  descriptions: string[];
}> {
  const catalogUrl = "https://api.insee.fr/melodi/catalog/all";
  const response = await fetch(catalogUrl);
  const data: CatalogEntry[] = await response.json();

  const ids = data.map((entry) => entry.identifier);
  const descriptions = data.map(
    (entry) =>
      `/** ${entry.title[0]!.content} \n  ${entry.description[0]!.content} \n ${entry.description[1]!.content} \n */`
  );

  return { ids, descriptions } as {
    ids: DatasetIdentifier[];
    descriptions: string[];
  };
}

//XXX: refactor those
async function generateTypesForDataset(
  id: string,
  description: string,
  metadata: MetadataRecord | null,
  i: number
): Promise<{ mapEntry: string; importStatement: string } | null> {
  let res;
  try {
    res = await fetch(`https://api.insee.fr/melodi/data/${id}?maxResult=1000`);
  } catch (error) {
    console.log(`Failed to fetch dataset: ${id}, skipping...`);
    return null;
  }

  const data: QueryResponseUnknownDataset = await res.json();

  let fail = false;
  if (!data.observations || data.observations.length === 0) {
    console.log(`No observations for dataset: ${id}`);
    console.log(data);
    fail = true;
  }

  // Replace number strings with numbers in the sample JSON
  traverseObjectOrArray(data, (value, path, setValue) => {
    if (typeof value === "string" && value.trim() !== "") {
      const num = Number(value);
      if (!isNaN(num) && /^-?[\d.]+$/.test(value)) {
        setValue(num);
      }
    }
  });

  const dataJson = JSON.stringify(data);

  let header = "";

  const dimensions = data.observations.map((obs) => obs.dimensions);
  const attributes = data.observations.map((obs) => obs.attributes);
  const measures = data.observations.map((obs) => obs.measures);

  const dimensionsJSON = JSON.stringify(dimensions);
  const attributesJSON = JSON.stringify(attributes);
  const measuresJSON = JSON.stringify(measures);

  const jsonInput = jsonInputForTargetLanguage("ts");

  await jsonInput.addSource({
    name: `${id}_Dimensions`,
    samples: [dimensionsJSON],
  });
  await jsonInput.addSource({
    name: `${id}_Attributes`,
    samples: [attributesJSON],
  });
  await jsonInput.addSource({
    name: `${id}_Measures`,
    samples: [measuresJSON],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  const types = await quicktype({
    inputData,
    lang: "ts",
    inferEnums: false,
    inferIntegerStrings: true,
    inferBooleanStrings: true,
    alphabetizeProperties: false,
    rendererOptions: {
      "just-types": "true",
      "keep-property-name": "true",
    },
  });

  // Add JSDoc metadata comments to type lines
  const modifiedTypeLines: string[] = [];
  for (const line of types.lines) {
    const match = line.match(/^\s*(\w+):\s*string;/);
    let modifiedLine = line;
    if (match) {
      const prop = match[1]!;
      if (metadata && prop in metadata) {
        const meta = metadata[prop]!;
        const options = Object.keys(meta)
          .map((key) => `* ${key} - ${meta[key]} \n`)
          .join("\n ");
        modifiedTypeLines.push(`  /** Possible values: \n ${options} */`);

        // Add the meta object at the top
        header += `export const ${prop}_codes = {`;

        /// XXX: handle string and numbers differently

        Object.keys(meta).forEach((key) => {
          // remove spaces and "'"
          const valueWithoutSpaces = meta[key]!.replace(/\s+/g, "_").replace(
            /'/g,
            ""
          );

          header += `\n /** ${meta[key]} */ \n "${valueWithoutSpaces}_${key}": "${key}",`;
        });
        header += `\n} as const;\n`;

        // Add typeof code object
        header += `export type ${prop}_code_values = (typeof ${prop}_codes)[keyof typeof ${prop}_codes]; \n`;

        // Replace the type with the union type
        // XXX enable a more relaxed type
        modifiedLine = modifiedLine.replace(
          /:\s*string;/,
          `: ${prop}_code_values ;`
        );
      }
    }
    modifiedTypeLines.push(modifiedLine);
  }

  const idWithoutUnderscores = id.replace(/_/g, "");

  let mainType = `export type ${idWithoutUnderscores}Shape = \n{\n`;
  mainType += `  dimensions: ${idWithoutUnderscores}Dimensions;\n`;
  mainType += `  attributes: ${idWithoutUnderscores}Attributes;\n`;
  mainType += `  measures: ${idWithoutUnderscores}Measures;\n`;
  mainType += `}\n\n`;
  mainType += header;

  let fileContent = description + mainType + modifiedTypeLines.join(`\n`);

  const fileName = `src/datasetShapes/${id}.ts`;
  const jsonFileName = `src/datasetShapes/${id}_sample.json`;

  clearOrCreateFile(fileName);
  appendFileSync(fileName, fileContent, null);

  /*   clearOrCreateFile(jsonFileName);
  appendFileSync(jsonFileName, dataJson, null); */

  const mapEntry = `  "${id}": ${idWithoutUnderscores}Shape,\n`;
  const importStatement = `import { ${idWithoutUnderscores}Shape } from "./${id}";\n`;

  await new Promise((resolve) => setTimeout(resolve, 2500));
  console.log(`Generated types for dataset: ${id}`);
  if (fail) {
    console.log(
      `  Note: There were issues generating types for dataset: ${id}`
    );
  }

  return { mapEntry, importStatement };
}

async function generateDatasetsShapes(limit?: number) {
  const { ids, descriptions } = await fetchCatalog();

  let mapHeader = ``;
  let mapContent = `export type DatasetShapeMap = {\n`;

  for (let i = 0; i < ids.length; i++) {
    if (limit && i >= limit) {
      break;
    }
    const id = ids[i]!;
    const description = descriptions[i]!;

    const metadata = await extractMetaData(id);

    await new Promise((resolve) => setTimeout(resolve, 500)); // rate limiting

    const result = await generateTypesForDataset(id, description, metadata, i);
    if (result) {
      mapContent += result.mapEntry;
      mapHeader += result.importStatement;
    }
  }

  mapContent += `};\n`;

  mapContent += `\nexport const allDatasetIdentifiers = [\n`;
  for (const id of ids) {
    mapContent += `  "${id}",\n`;
  }
  mapContent += `] as const;\n`;

  const fullMapContent = mapHeader + mapContent;

  const mapFileName = `src/datasetShapes/datasetShapes.ts`;
  clearOrCreateFile(mapFileName);
  appendFileSync(mapFileName, fullMapContent, null);
}

generateDatasetsShapes(3);
