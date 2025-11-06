import { get } from "http";
import { datasetInfoMap } from "./catalog/datasetIdentifiers";
import {
  DatasetIdentifier,
  DatasetShapeOf,
  DatasetShapeMap,
  datasetCodeDictionaries,
  DatasetCodeDictionaryOf,
} from "./datasetShapes/datasetsMaps";
import { SupportedLanguages, Translated } from "./utils";

type Paging = {
  first: string;
  previous: string;
  next: string;
  last: string;
  isLast: boolean;
  count: number;
};

export type QueryResponse<ID extends DatasetIdentifier> = {
  identifier: string;
  iri: string;
  title: Record<SupportedLanguages, string>;
  publisher: {
    id: string;
    label: Translated[];
  };
  paging: Paging;
  observations: DatasetShapeOf<ID>[];
};

export type GenericQueryResponse = {
  identifier: string;
  title: Record<SupportedLanguages, string>;
  publisher: {
    id: string;
    label: Translated[];
  };
  paging: Paging;
  observations: GenericObservation[];
};

type DimensionOrAttributeKey<ID extends DatasetIdentifier> =
  | keyof DatasetShapeMap[ID]["dimensions"]
  | keyof DatasetShapeMap[ID]["attributes"];

export type Filter<ID extends DatasetIdentifier> = Partial<{
  // filter = {
  //   "DIMENSION_KEY_1": ["valueA"],
  //   "DIMENSION_KEY_2": ["valueA", "valueB"],
  //   "ATTRIBUTE_KEY": ["valueA", "valueB", "valueC"],
  //   "...": [...]
  //  }
  // The keys can be from either dimensions or attributes
  [K in
    | keyof DatasetShapeMap[ID]["dimensions"]
    | keyof DatasetShapeMap[ID]["attributes"]]: K extends keyof DatasetShapeMap[ID]["dimensions"] // If the key is from dimensions, use dimension value array type
    ? ReadonlyArray<DatasetShapeMap[ID]["dimensions"][K]>
    : // If the key is from attributes, use attribute value array type
      K extends keyof DatasetShapeMap[ID]["attributes"]
      ? ReadonlyArray<DatasetShapeMap[ID]["attributes"][K]>
      : never;
}> &
  Partial<{
    // XXX: Are we sure all the values returned in an observation are mentioned in the code dictionary ?
    [K in CodeDictionaryDimensionKeyOf<ID>]: ReadonlyArray<
      CodeDictionaryDimensionValueOf<
        ID,
        K
      >[keyof CodeDictionaryDimensionValueOf<ID, K>]
    >;
  }>;

export type QueryResponseFiltered<
  ID extends DatasetIdentifier,
  F extends Filter<ID>,
> = {
  observations: Array<{
    attributes: {
      [K in keyof DatasetShapeOf<ID>["attributes"]]: K extends keyof F
        ? F[K] extends ReadonlyArray<infer U>
          ? U
          : DatasetShapeOf<ID>["attributes"][K]
        : DatasetShapeOf<ID>["attributes"][K];
    };
    dimensions: {
      [K in keyof DatasetShapeOf<ID>["dimensions"]]: K extends keyof F
        ? F[K] extends ReadonlyArray<infer U>
          ? U
          : DatasetShapeOf<ID>["dimensions"][K]
        : DatasetShapeOf<ID>["dimensions"][K];
    };
    measure: number;
  }>;
  paging: Paging;
};

export type GenericObservation = {
  measure: number;
  dimensions: Record<string, string>;
  // XXX: this is before parsing measures properly
  measures: {
    OBS_VALUE_NIVEAU?: {
      value: number;
    };
  };
  attributes: Record<string, string>;
};

export type CodeDictionaryDimensionKeyOf<ID extends DatasetIdentifier> =
  keyof DatasetCodeDictionaryOf<ID>;

export type CodeDictionaryDimensionValueOf<
  ID extends DatasetIdentifier,
  D extends CodeDictionaryDimensionKeyOf<ID>,
> = DatasetCodeDictionaryOf<ID>[D];

// XXX: I put all these functions to try to help with typing inference, because I was having problems in the visualizer example
// but is it the right solution ?
// Are the types just not well designed ?
// It works well enough for not generic usage
// Unions seem to cause problems with inference in some situations
export function getFilterArrayForDimension<
  ID extends DatasetIdentifier,
  D extends CodeDictionaryDimensionKeyOf<ID>,
>(filter: Filter<ID>, dimension: keyof Filter<ID>) {
  return filter[dimension] as
    | ReadonlyArray<
        CodeDictionaryDimensionValueOf<
          ID,
          D
        >[keyof CodeDictionaryDimensionValueOf<ID, D>]
      >
    | undefined;
}

// Create a typed filter helper that simply returns the passed object and preserves its type.
// Declare a single generic F so callers can have TypeScript infer the precise filter shape.
// This fixes the previous errors where `F` was referenced but not declared and `ID` was unused.
export function createFilter<
  ID extends DatasetIdentifier,
  F extends Filter<ID>,
>(filter: F, _id: ID): F {
  return filter;
}
export const getDatasetIdentifiers = () => {
  return Object.keys(datasetCodeDictionaries) as DatasetIdentifier[];
};

export const getDatasetCodeDictionary = <ID extends DatasetIdentifier>(
  id: ID
): DatasetCodeDictionaryOf<ID> => {
  return datasetCodeDictionaries[id];
};

export const getCodesOfDatasetDimension = <
  ID extends DatasetIdentifier,
  D extends CodeDictionaryDimensionKeyOf<ID>,
>(
  id: ID,
  dimensionKey: D
) => {
  const codeDictionary = getDatasetCodeDictionary(id);

  return codeDictionary[dimensionKey] as CodeDictionaryDimensionValueOf<ID, D>;
};

export const getDatasetCodeDictionaryDimensions = <
  ID extends DatasetIdentifier,
>(
  id: ID
): CodeDictionaryDimensionKeyOf<ID>[] => {
  return Object.keys(
    datasetCodeDictionaries[id]
  ) as CodeDictionaryDimensionKeyOf<ID>[];
};

export const getDatasetInfo = (id: DatasetIdentifier) => {
  return datasetInfoMap[id];
};

export const getAllDatasetInfos = () => {
  return datasetInfoMap;
};
