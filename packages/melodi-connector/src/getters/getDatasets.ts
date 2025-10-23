import { DartTargetLanguage } from "quicktype-core";
import { CatalogEntry, Language } from "../types/catalogTypes";
import { DatasetIdentifier, QueryResponse } from "../types/generalTypes";
import { allDatasetIdentifiers } from "../datasetShapes/datasetShapes";
import { loadConfig } from "../data/downloadFullData";
import { mkdir, mkdirSync, writeFile, writeFileSync } from "fs";

export const getDatasetCatalog = async () => {
  const response = await fetch("https://api.insee.fr/melodi/catalog/all");
  const data: CatalogEntry[] = await response.json();
  return data;
};

export const getDatasetInfo = async (id: DatasetIdentifier) => {
  const response = await fetch(`https://api.insee.fr/melodi/catalog/${id}`);
  const data: CatalogEntry = await response.json();
  return data;
};

export async function getDataset<ID extends DatasetIdentifier>(
  id: ID
): Promise<QueryResponse<DatasetIdentifier>> {
  const response = await fetch(`https://api.insee.fr/melodi/data/${id}`);
  const data: QueryResponse<DatasetIdentifier> = await response.json();
  return data;
}

type Label = {
  [key in Language]: string;
};

type DatasetRangeResponse = {
  code: DatasetIdentifier;
  label: {
    [key in Language]: string;
  };
  range: [
    {
      concept: {
        code: string;
        label: Label;
      };
      values: {
        code: string;
        label: Label;
        measureType?: {
          code: string;
          libelle: Label;
          ordreRmes: number;
          uri: string;
          total: boolean;
          id: string;
        };
      }[];
    },
  ];
};

async function getDatasetRange<ID extends DatasetIdentifier>(id: ID) {
  const response = await fetch(`https://api.insee.fr/melodi/range/${id}`);
  const data = (await response.json()) as DatasetRangeResponse;
  return data;
}

async function collectRanges() {
  /*   const catalogInfo = await getDatasetInfo("DD_CNA_APU");
  console.log(catalogInfo);
  const data = await getDataset("DD_CNA_AGREGATS");
  */
  // Load the config
  const config = await loadConfig();
  const extractPath = `${config.dataExportPath}/datasetRanges`;
  mkdirSync(extractPath, { recursive: true });

  let i = 0;
  for (const id of allDatasetIdentifiers) {
    // Create directory if it doesn't exist
    if (i > 3) break;
    const rangeData = await getDatasetRange("DD_CNA_AGREGATS");
    const filePath = `${extractPath}/${id}_range.json`;

    writeFileSync(filePath, JSON.stringify(rangeData, null, 2), "utf-8");
    i++;
  }
}
collectRanges();
