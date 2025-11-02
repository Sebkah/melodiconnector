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

export type Filter<D extends DatasetIdentifier> = Partial<{
  [K in keyof DatasetShapeMap[D]["dimensions"]]: ReadonlyArray<
    DatasetShapeMap[D]["dimensions"][K]
  >;
}> &
  Partial<{
    [K in keyof DatasetShapeMap[D]["attributes"]]: ReadonlyArray<
      DatasetShapeMap[D]["attributes"][K]
    >;
  }>;

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

export declare function getDataset<ID extends DatasetIdentifier>(
  id: ID
): { observations: Array<DatasetShape<ID>>; codes: DatasetCodeMap<ID> };
