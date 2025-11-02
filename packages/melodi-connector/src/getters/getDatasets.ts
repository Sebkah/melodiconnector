import { CatalogEntry, Language } from "../types/queryResponse/catalogResponse";

import { DatasetIdentifier } from "../types/datasetShapes/datasetsMaps";
import {
  Filter,
  QueryResponse,
  QueryResponseFiltered,
} from "../types/generalTypes";

type QueryOption<ID extends DatasetIdentifier> = {
  filter?: Filter<ID>;
  fetchOptions?: FetchOptions;
};
type FetchOptions = {
  maxResult?: number;
  page?: number;
};
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

const getDimensionParamsFromFilter = <ID extends DatasetIdentifier>(
  filter: Filter<ID> | undefined
) => {
  if (!filter) return new URLSearchParams();

  const params = new URLSearchParams();
  for (const [dimension, values] of Object.entries(filter)) {
    for (const value of values) {
      params.append(`${dimension}`, String(value));
    }
  }
  return params;
};

export async function fetchDataQuery<D extends DatasetIdentifier>(
  id: D
): Promise<QueryResponse<D>>;
export async function fetchDataQuery<
  D extends DatasetIdentifier,
  F extends Filter<D>,
>(
  id: D,
  options: QueryOption<D> & { filter: F }
): Promise<QueryResponseFiltered<D, F>>;
export async function fetchDataQuery<D extends DatasetIdentifier>(
  id: D,
  options: QueryOption<D>
): Promise<QueryResponse<D>>;
export async function fetchDataQuery<
  D extends DatasetIdentifier,
  F extends Filter<D>,
>(
  id: D,
  options?: QueryOption<D>
): Promise<QueryResponse<D> | QueryResponseFiltered<D, F>> {
  const fetchOptions = options?.fetchOptions;

  if (options && options.filter) {
    const params = getDimensionParamsFromFilter(options.filter);

    const response = await fetch(
      `https://api.insee.fr/melodi/data/${id}?page=${fetchOptions?.page ?? 1}&totalCount=true&maxResult=${fetchOptions?.maxResult ?? 10000}&${params.toString()}`
    );
    const data: QueryResponseFiltered<D, F> = await response.json();
    return data;
  }
  const response = await fetch(
    `https://api.insee.fr/melodi/data/${id}?page=${fetchOptions?.page ?? 1}&totalCount=true&maxResult=${fetchOptions?.maxResult ?? 10000}`
  );
  const data: QueryResponse<D> = await response.json();
  return data;
}

export async function fetchDataQueryAll<D extends DatasetIdentifier>(
  id: D
): Promise<QueryResponse<D>["observations"]>;
export async function fetchDataQueryAll<
  D extends DatasetIdentifier,
  F extends Filter<D>,
>(
  id: D,
  options: QueryOption<D> & { filter: F }
): Promise<QueryResponseFiltered<D, F>["observations"]>;
export async function fetchDataQueryAll<D extends DatasetIdentifier>(
  id: D,
  options: QueryOption<D>
): Promise<QueryResponse<D>["observations"]>;
export async function fetchDataQueryAll<D extends DatasetIdentifier>(
  id: D,
  options?: QueryOption<D>
): Promise<QueryResponse<D>["observations"]> {
  const fetchOptions = {
    maxResult: options?.fetchOptions?.maxResult ?? 10000,
    page: 1,
  };
  const allObservations: any[] = [];

  if (options && options.filter) {
    while (true) {
      const data = await fetchDataQuery<D>(id, {
        filter: options.filter,
        fetchOptions,
      } as QueryOption<D>);
      allObservations.push(...data.observations);
      if (!data.paging.next) break;
      fetchOptions.page++;
    }
    return allObservations;
  }

  while (true) {
    const data = await fetchDataQuery<D>(id, {
      fetchOptions,
    });
    allObservations.push(...data.observations);
    if (!data.paging.next) break;
    fetchOptions.page++;
  }
  return allObservations;
}

