import { outputFileSync, outputJSONSync } from "fs-extra/esm";
import { CatalogEntry } from "../types/queryResponse/catalogResponse";
import {
  jsonInputForTargetLanguage,
  JSONSchemaInput,
  FetchingJSONSchemaStore,
  InputData,
  quicktype,
} from "quicktype-core";
import { DatasetIdentifier } from "../types/generalTypes";
import { allDatasetIdentifiers } from "../datasetShapes/datasetShapes";
import { existsSync } from "fs";
import { readJsonSync } from "fs-extra/esm";
import { wait } from "../utils/wait";
import {
  fetchAndCacheDatasetsRanges,
  getDatasetRangeFromCache,
} from "./fetchers/rangesFetcher";

// I. Generate catalog response types
export async function fetchCatalog() {
  const catalogUrl = "https://api.insee.fr/melodi/catalog/all";
  const response = await fetch(catalogUrl);
  const data = await response.json();
  return data as CatalogEntry[];
}
const generateCatalogResponseTypes = async (catalogData: CatalogEntry[]) => {
  const jsonInput = jsonInputForTargetLanguage("typescript");

  const catalogDataStrings = catalogData.map((entry) => JSON.stringify(entry));

  await jsonInput.addSource({
    name: "CatalogEntry",
    samples: catalogDataStrings,
  });

  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());

  const inputData = new InputData();

  inputData.addInput(jsonInput);

  const result = await quicktype({
    inputData,
    lang: "typescript",
    rendererOptions: {
      "just-types": "true",
    },
  });

  // Write the generated types to file
  const fileContent = result.lines.join("\n");
  outputFileSync("src/types/catalog/catalogResponseTypes.ts", fileContent);

  // Write the catalog entries to file
  for (const entry of catalogData)
    outputJSONSync(
      `src/data/catalog/${entry.identifier}_catalog.json`,
      entry,
      { spaces: 2 }
    );
};

// II. Generate dataset identifiers
const generateDatasetIdentifiers = async (catalogData: CatalogEntry[]) => {
  const datasetIdentifiers = catalogData.map((entry) => entry.identifier);

  let header = "";
  header += `// This file is auto-generated. Do not edit directly.\n`;

  let identifiersContent = "";
  identifiersContent += "export const allDatasetIdentifiers = [\n";
  identifiersContent += datasetIdentifiers.map((id) => `  "${id}",`).join("\n");
  identifiersContent += `\n] as const;\n\n`;

  outputFileSync(
    "src/types/catalog/datasetIdentifiers.ts",
    header + identifiersContent
  );
};

const generateDatasetRangeResponseTypes = async () => {
  let samples: string[] = [];

  // Check cached files
  for (const id of allDatasetIdentifiers) {
    const data = await getDatasetRangeFromCache(id as DatasetIdentifier);
    const dataJSON = JSON.stringify(data);
    samples.push(dataJSON);
  }

  const jsonInput = jsonInputForTargetLanguage("typescript");
  await jsonInput.addSource({
    name: "DatasetRangeResponse",
    samples: samples,
  });
  const inputData = new InputData();
  inputData.addInput(jsonInput);
  const result = await quicktype({
    inputData,
    lang: "typescript",
    inferEnums: false,
    inferMaps: false,

    rendererOptions: {
      "just-types": "true",
    },
  });

  // Write the generated types to file
  const fileContent = result.lines.join("\n");
  outputFileSync(
    "src/types/queryResponseTypes/datasetRangeResponseTypes.ts",
    fileContent
  );
};

export const generateResponseTypes = async () => {
  const catalogData = await fetchCatalog();
  /*   await generateDatasetIdentifiers(catalogData); */
  await generateCatalogResponseTypes(catalogData);
  /*   await fetchAndCacheDatasetsRanges(); */
  /*   await generateDatasetRangeResponseTypes(); */
};

generateResponseTypes().catch((error) => {
  console.error("Error generating catalog types:", error);
  process.exit(1);
});
