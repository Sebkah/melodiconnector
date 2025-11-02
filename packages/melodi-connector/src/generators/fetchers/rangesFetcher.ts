import { existsSync } from "fs";
import { outputFileSync, readJsonSync } from "fs-extra/esm";
import { allDatasetIdentifiers } from "../../datasetShapes/datasetShapes";

import { wait } from "../../utils/wait";
import { AllDatasetIdentifier } from "../../types/queryResponse/datasetIdentifiers";

// III. Generate dataset range response types
export async function fetchDatasetRange(id: AllDatasetIdentifier) {
  const response = await fetch(`https://api.insee.fr/melodi/range/${id}`);
  const data = await response.json();
  return data;
}

export const fetchAndCacheDatasetRange = async (id: AllDatasetIdentifier) => {
  const data = await fetchDatasetRange(id as AllDatasetIdentifier);
  // Write the range to file
  outputFileSync(
    `src/data/datasetRanges/${id}_range.json`,
    JSON.stringify(data, null, 2)
  );

  return data;
};

export const fetchAndCacheDatasetsRanges = async () => {
  let count = 0;
  for (const id of allDatasetIdentifiers) {
    if (count > 28) {
      await wait(2100); // wait 2 seconds to avoid rate limiting
    }
    await fetchAndCacheDatasetRange(id as AllDatasetIdentifier);

    count++;
  }
};

export const getDatasetRangeFromCache = async (id: AllDatasetIdentifier) => {
  if (existsSync(`src/data/datasetRanges/${id}_range.json`)) {
    const data = readJsonSync(`src/data/datasetRanges/${id}_range.json`);
    return data;
  } else {
    const data = await fetchAndCacheDatasetRange(id as AllDatasetIdentifier);
    return data;
  }
};
