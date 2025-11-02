import { existsSync } from "fs";
import { outputFileSync, readJSONSync } from "fs-extra/esm";
import { QueryResponseNoType } from "../../types/generalTypes";
import { AllDatasetIdentifier } from "../../types/queryResponse/datasetIdentifiers";

type FetchOptions = {
  id: AllDatasetIdentifier;
  updateCache?: boolean;
  maxResult?: number;
};

const fetchDataset = async ({ id, maxResult }: FetchOptions) => {
  // TODO: fetch the full dataset to ensure all possible values are included
  const response = await fetch(
    `https://api.insee.fr/melodi/data/${id}?maxResult=${maxResult ?? 1}`
  );
  const data: QueryResponseNoType = await response.json();
  if (data.observations.length === 0) {
    throw new Error(
      `Dataset ${id} has no observations. Error : ${JSON.stringify(data)}`
    );
  }

  return data;
};

const fetchAndCacheDataset = async (fetchOptions: FetchOptions) => {
  const data = await fetchDataset(fetchOptions);
  // Cache the dataset locally
  outputFileSync(
    `src/data/datasets/${fetchOptions.id}_sample.json`,
    JSON.stringify(data, null, 2)
  );
  return data;
};

export const getDatasetFromCache = async (fetchOptions: FetchOptions) => {
  if (
    existsSync(`src/data/datasets/${fetchOptions.id}_sample.json`) &&
    !fetchOptions.updateCache
  ) {
    const data = readJSONSync(
      `src/data/datasets/${fetchOptions.id}_sample.json`
    );
    return data as QueryResponseNoType;
  } else {
    const data = await fetchAndCacheDataset(fetchOptions);
    return data as QueryResponseNoType;
  }
};
