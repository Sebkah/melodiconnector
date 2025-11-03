import { CatalogEntry, Language } from "../types/queryResponse/catalogResponse";

import { DatasetIdentifier } from "../types/datasetShapes/datasetsMaps";
import {
  Filter,
  QueryResponse,
  QueryResponseFiltered,
} from "../types/generalTypes";
import { parseData, parseNumbers } from "../utils/parseData";

type QueryOption<ID extends DatasetIdentifier> = {
  filter?: Filter<ID>;
  fetchOptions?: FetchOptions;
};
type FetchOptions = {
  maxResult?: number;
  page?: number;
};
type OmitPaging<T> = Omit<T, "paging">;
/**
 * Fetches the complete catalog of all available datasets from the INSEE Melodi API.
 *
 * @returns {Promise<CatalogEntry[]>} An array of catalog entries containing metadata about all available datasets.
 *
 * @example
 * const catalog = await getDatasetCatalog();
 * console.log(catalog.map(entry => entry.identifier));
 */
export const getDatasetCatalog = async () => {
  const response = await fetch("https://api.insee.fr/melodi/catalog/all");
  const data: CatalogEntry[] = await response.json();
  return data;
};

/**
 * Fetches metadata for a specific dataset from the INSEE Melodi API catalog.
 *
 * @template D - The dataset identifier type
 * @param {D} id - The unique identifier of the dataset to retrieve metadata for
 * @returns {Promise<CatalogEntry>} Metadata about the specified dataset including dimensions, attributes, and description.
 *
 * @example
 * const metadata = await getDatasetInfo('DS_BPE');
 * console.log(metadata.title);
 */
export const getDatasetInfo = async (id: DatasetIdentifier) => {
  const response = await fetch(`https://api.insee.fr/melodi/catalog/${id}`);
  const data: CatalogEntry = await response.json();
  return data;
};

/**
 * Converts a filter object into URLSearchParams for the Melodi API query string.
 * Each dimension key is mapped to multiple URL parameters with the same name but different values.
 *
 * @template ID - The dataset identifier type
 * @param {Filter<ID> | undefined} filter - The filter object with dimensions and their allowed values, or undefined for no filtering
 * @returns {URLSearchParams} URL parameters ready to be appended to a query string
 *
 * @example
 * const filter = { region: ['75', '92'], year: ['2020', '2021'] };
 * const params = buildFilterParams(filter);
 * // Result: "region=75&region=92&year=2020&year=2021"
 */
const buildFilterParams = <ID extends DatasetIdentifier>(
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

/**
 * TODO: simplify overloads and parameters
 * Queries a single page of data from a dataset in the INSEE Melodi API.
 * This is a low-level function that returns paginated results with metadata.
 *
 *
 *
 * Use {@link queryDataset} for automatic pagination across all pages.
 *
 * @template D - The dataset identifier type
 * @template F - The filter type (inferred when a filter is provided)
 *
 * @param {D} id - The unique identifier of the dataset to query
 * @param {QueryOption<D>} [options] - Optional query parameters
 * @param {Filter<D>} [options.filter] - Dimension/attribute filters to narrow results
 * @param {number} [options.fetchOptions.page=1] - The page number to retrieve (1-indexed)
 * @param {number} [options.fetchOptions.maxResult=10000] - Maximum observations per page
 *
 * @returns {Promise<QueryResponse<D>>} A single page of observations with metadata and paging info
 * @returns {Promise<QueryResponseFiltered<D, F>>} When a filter is provided, narrowed results with paging info
 *
 * @example
 * // Get first page without filter
 * const page1 = await queryDatasetPage('DS_BPE');
 *
 * @example
 * // Get second page with filter and custom size
 * const filtered = await queryDatasetPage('DS_BPE', {
 *   filter: { region: ['75'] },
 *   fetchOptions: { page: 2, maxResult: 100 }
 * });
 */
export async function queryDatasetPage<D extends DatasetIdentifier>(
  id: D
): Promise<QueryResponse<D>>;
export async function queryDatasetPage<
  D extends DatasetIdentifier,
  F extends Filter<D>,
>(
  id: D,
  options: QueryOption<D> & { filter: F }
): Promise<QueryResponseFiltered<D, F>>;
export async function queryDatasetPage<D extends DatasetIdentifier>(
  id: D,
  options: QueryOption<D>
): Promise<QueryResponse<D>>;
export async function queryDatasetPage<
  D extends DatasetIdentifier,
  F extends Filter<D>,
>(
  id: D,
  options?: QueryOption<D>
): Promise<QueryResponse<D> | QueryResponseFiltered<D, F>> {
  const page = options?.fetchOptions?.page ?? 1;
  const maxResult = options?.fetchOptions?.maxResult ?? 10000;
  const params = buildFilterParams(options?.filter);

  const queryString = `page=${page}&totalCount=true&maxResult=${maxResult}&${params.toString()}`;
  const response = await fetch(
    `https://api.insee.fr/melodi/data/${id}?${queryString}`
  );

  const data = await response.json();

  parseData(data.observations);

  return data;
}

export function queryDatasetCount<D extends DatasetIdentifier>(
  id: D,
  filter?: Filter<D>
): Promise<number> {
  const params = buildFilterParams(filter);
  const queryString = `page=1&totalCount=true&maxResult=0&${params.toString()}`;

  return fetch(`https://api.insee.fr/melodi/data/${id}?${queryString}`)
    .then((response) => response.json())
    .then((data) => data.paging.count);
}

/**
 * Queries all observations from a dataset, automatically handling pagination.
 * Returns the complete dataset metadata with all observations combined from all pages.
 *
 * This is the high-level API for dataset queries. For manual pagination control, use {@link queryDatasetPage}.
 *
 * @template D - The dataset identifier type
 * @template F - The filter type (inferred when a filter is provided)
 *
 * @param {D} id - The unique identifier of the dataset to query
 * @param {Filter<D>} [filter] - Dimension/attribute filters to narrow results
 *
 * @returns {Promise<OmitPaging<QueryResponse<D>>>} Complete dataset with identifier, metadata, and all observations (no paging info)
 * @returns {Promise<OmitPaging<QueryResponseFiltered<D, F>>>} When a filter is provided, narrowed complete dataset
 *
 * @remarks
 * - Automatically handles pagination to retrieve all observations
 * - Combines observations from all pages into a single array
 * - Preserves dataset metadata (identifier, title, publisher, iri)
 * - The paging field is omitted since all data is already fetched
 * - Pagination happens transparently with default page size (10000)
 *
 * @example
 * // Get all observations without filter
 * const fullDataset = await queryDataset('DS_BPE');
 * console.log(`Total observations: ${fullDataset.observations.length}`);
 *
 * @example
 * // Get filtered observations
 * const filtered = await queryDataset('DS_BPE', { region: ['75', '92'] });
 */
export async function queryDataset<D extends DatasetIdentifier>(
  id: D
): Promise<OmitPaging<QueryResponse<D>>>;
export async function queryDataset<
  D extends DatasetIdentifier,
  F extends Filter<D>,
>(id: D, filter: F): Promise<OmitPaging<QueryResponseFiltered<D, F>>>;
export async function queryDataset<D extends DatasetIdentifier>(
  id: D,
  filter?: Filter<D>
): Promise<any> {
  const fetchOptions = {
    maxResult: 10000,
    page: 1,
  };
  const allObservations: any[] = [];

  // Fetch first page to get metadata
  const firstData = await queryDatasetPage<D>(id, {
    filter,
    fetchOptions,
  });
  const { paging, observations, ...metadata } = firstData;
  allObservations.push(...observations);

  // Fetch remaining pages
  while (paging.next) {
    fetchOptions.page++;
    const data = await queryDatasetPage<D>(id, {
      filter,
      fetchOptions,
    });
    allObservations.push(...data.observations);
  }

  return {
    ...metadata,
    observations: allObservations,
  };
}
