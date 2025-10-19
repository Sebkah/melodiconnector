import { DartTargetLanguage } from "quicktype-core";
import { CatalogEntry, Product } from "./types/catalogTypes";
import {
  DatasetIdentifier,
  DatasetShape,
  QueryResponse,
} from "./types/generalTypes";

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

async function getDataset<ID extends DatasetIdentifier>(
  id: ID
): Promise<QueryResponse<DatasetIdentifier>> {
  const response = await fetch(`https://api.insee.fr/melodi/data/${id}`);
  const data: QueryResponse<DatasetIdentifier> = await response.json();
  return data;
}

async function test() {
  const data = await getDataset("DD_CNA_AGREGATS");

  console.log(data);
}
test();
