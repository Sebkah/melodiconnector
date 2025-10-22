import { get } from "node:http";
import type { DatasetShapeMap } from "../datasetShapes/datasetShapes.js";

export const supportedLanguages = ["fr", "en"] as const;
export type SupportedLanguages = (typeof supportedLanguages)[number];
export type Translated = {
  lang: SupportedLanguages;
  content: string;
};

export type QueryResponse<D extends DatasetIdentifier> = {
  identifier: string;
  iri: string;
  title: Record<SupportedLanguages, string>;
  publisher: {
    id: string;
    label: Translated[];
  };
  paging: {
    first: string;
    previous: string;
    next: string;
    last: string;
    isLast: boolean;
    count: number;
  };
  observations: DatasetShape<D>[];
};

export type QueryResponseNoType = {
  identifier: string;
  title: Record<SupportedLanguages, string>;
  publisher: {
    id: string;
    label: Translated[];
  };
  paging: {
    first: string;
    previous: string;
    next: string;
    last: string;
    isLast: boolean;
    count: number;
  };
  observations: GenericObservation[];
};

export type GenericObservation = {
  dimensions: Record<string, string>;
  measures: number;
  attributes: Record<string, string>;
};

export type DatasetIdentifier = keyof DatasetShapeMap;

export type DatasetShape<ID extends DatasetIdentifier> = DatasetShapeMap[ID];

export declare function getDataset<ID extends DatasetIdentifier>(
  id: ID
): Array<DatasetShape<ID>>;

const data = getDataset("DD_CNA_AGREGATS");
//TODO: dataset could return an object with all the codes used in the dataset
