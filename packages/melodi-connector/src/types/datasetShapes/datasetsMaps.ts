// This file is auto-generated. Do not edit directly.

import { Prettify } from "../utils";
import { DDCNAAGREGATS_Shape } from "./DD_CNA_AGREGATS/DD_CNA_AGREGATS_shape";
import { DD_CNA_AGREGATS_codeDictionary } from "./DD_CNA_AGREGATS/DD_CNA_AGREGATS_codeDictionary";
import { DDCNAAPU_Shape } from "./DD_CNA_APU/DD_CNA_APU_shape";
import { DD_CNA_APU_codeDictionary } from "./DD_CNA_APU/DD_CNA_APU_codeDictionary";
import { DDCNABRANCHES_Shape } from "./DD_CNA_BRANCHES/DD_CNA_BRANCHES_shape";
import { DD_CNA_BRANCHES_codeDictionary } from "./DD_CNA_BRANCHES/DD_CNA_BRANCHES_codeDictionary";
import { DDCNACONSOMENAGESCOICOP_Shape } from "./DD_CNA_CONSO_MENAGES_COICOP/DD_CNA_CONSO_MENAGES_COICOP_shape";
import { DD_CNA_CONSO_MENAGES_COICOP_codeDictionary } from "./DD_CNA_CONSO_MENAGES_COICOP/DD_CNA_CONSO_MENAGES_COICOP_codeDictionary";

export type DatasetShapeMap = {
  DD_CNA_AGREGATS: DDCNAAGREGATS_Shape;
  DD_CNA_APU: DDCNAAPU_Shape;
  DD_CNA_BRANCHES: DDCNABRANCHES_Shape;
  DD_CNA_CONSO_MENAGES_COICOP: DDCNACONSOMENAGESCOICOP_Shape;
};

export const datasetCodeDictionaries = {
  DD_CNA_AGREGATS: DD_CNA_AGREGATS_codeDictionary,
  DD_CNA_APU: DD_CNA_APU_codeDictionary,
  DD_CNA_BRANCHES: DD_CNA_BRANCHES_codeDictionary,
  DD_CNA_CONSO_MENAGES_COICOP: DD_CNA_CONSO_MENAGES_COICOP_codeDictionary,
} as const;
export type DatasetIdentifier = keyof DatasetShapeMap;
export type DatasetCodeDictionaryOf<ID extends DatasetIdentifier> =
  (typeof datasetCodeDictionaries)[ID];

export type DatasetShapeOf<ID extends DatasetIdentifier> = DatasetShapeMap[ID];
