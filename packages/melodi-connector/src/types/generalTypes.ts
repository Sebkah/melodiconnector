import {
  DatasetCodeMap,
  DatasetIdentifier,
  DatasetShape,
  DatasetShapeMap,
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

export type QueryResponse<D extends DatasetIdentifier> = {
  identifier: string;
  iri: string;
  title: Record<SupportedLanguages, string>;
  publisher: {
    id: string;
    label: Translated[];
  };
  paging: Paging;
  observations: DatasetShape<D>[];
};

export type QueryResponseNoType = {
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
  [K in DimensionOrAttributeKey<ID>]: K extends keyof DatasetShapeMap[ID]["dimensions"] // If the key is from dimensions, use dimension value array type
    ? ReadonlyArray<DatasetShapeMap[ID]["dimensions"][K]>
    : // If the key is from attributes, use attribute value array type
      K extends keyof DatasetShapeMap[ID]["attributes"]
      ? ReadonlyArray<DatasetShapeMap[ID]["attributes"][K]>
      : never;
}>;

// TODO: we need to improve the nomenclature, because i don't even understant what's what anymore
// Code should maybe be DatasetCodeMap
export type Code<D extends DatasetIdentifier> =
  // Either a map of dimension codes
  // codeOfDataset = {
  //   "DIMENSION_KEY_1": {
  //       "codeLabelA": "codeValueA",
  //       "codeLabelB": "codeValueB",
  //       ...
  //    },
  //   "DIMENSION_KEY_2": {
  //       "codeLabelA": "codeValueA",
  //       "codeLabelB": "codeValueB",
  //       ...
  //    },
  //    ...
  //}
  | {
      [K in keyof DatasetShapeMap[D]["dimensions"]]: ReadonlyArray<
        DatasetShapeMap[D]["dimensions"][K]
      >;
    }
  | {
      [K in keyof DatasetShapeMap[D]["attributes"]]: ReadonlyArray<
        DatasetShapeMap[D]["attributes"][K]
      >;
    };

export type QueryResponseFiltered<
  D extends DatasetIdentifier,
  F extends Filter<D>,
> = {
  observations: Array<{
    attributes: {
      [K in keyof DatasetShape<D>["attributes"]]: K extends keyof F
        ? F[K] extends ReadonlyArray<infer U>
          ? U
          : DatasetShape<D>["attributes"][K]
        : DatasetShape<D>["attributes"][K];
    };
    dimensions: {
      [K in keyof DatasetShape<D>["dimensions"]]: K extends keyof F
        ? F[K] extends ReadonlyArray<infer U>
          ? U
          : DatasetShape<D>["dimensions"][K]
        : DatasetShape<D>["dimensions"][K];
    };
    measure: number;
  }>;
  paging: Paging;
};

export type GenericObservation = {
  measure: number;
  dimensions: Record<string, string>;
  measures: {
    OBS_VALUE_NIVEAU?: {
      value: number;
    };
  };
  attributes: Record<string, string>;
};


