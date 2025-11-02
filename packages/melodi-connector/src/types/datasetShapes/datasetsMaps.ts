// This file is auto-generated. Do not edit directly.

import { Prettify } from "../utils.js";
import { DDCNAAGREGATS_Shape } from "./DD_CNA_AGREGATS/DD_CNA_AGREGATS_shape.js";
import { DD_CNA_AGREGATS_codes } from "./DD_CNA_AGREGATS/DD_CNA_AGREGATS_codes.js";
import { DDCNAAPU_Shape } from "./DD_CNA_APU/DD_CNA_APU_shape.js";
import { DD_CNA_APU_codes } from "./DD_CNA_APU/DD_CNA_APU_codes.js";
import { DDCNABRANCHES_Shape } from "./DD_CNA_BRANCHES/DD_CNA_BRANCHES_shape.js";
import { DD_CNA_BRANCHES_codes } from "./DD_CNA_BRANCHES/DD_CNA_BRANCHES_codes.js";
import { DDCNACONSOMENAGESCOICOP_Shape } from "./DD_CNA_CONSO_MENAGES_COICOP/DD_CNA_CONSO_MENAGES_COICOP_shape.js";
import { DD_CNA_CONSO_MENAGES_COICOP_codes } from "./DD_CNA_CONSO_MENAGES_COICOP/DD_CNA_CONSO_MENAGES_COICOP_codes.js";


export type DatasetShapeMap = {
  "DD_CNA_AGREGATS": Prettify<DDCNAAGREGATS_Shape>;
  "DD_CNA_APU": Prettify<DDCNAAPU_Shape>;
  "DD_CNA_BRANCHES": Prettify<DDCNABRANCHES_Shape>;
  "DD_CNA_CONSO_MENAGES_COICOP": Prettify<DDCNACONSOMENAGESCOICOP_Shape>;
}


export const datasetCodes = {
  "DD_CNA_AGREGATS": DD_CNA_AGREGATS_codes,
  "DD_CNA_APU": DD_CNA_APU_codes,
  "DD_CNA_BRANCHES": DD_CNA_BRANCHES_codes,
  "DD_CNA_CONSO_MENAGES_COICOP": DD_CNA_CONSO_MENAGES_COICOP_codes,
} as const;
export type DatasetIdentifier = Prettify<keyof DatasetShapeMap>; 
export type DatasetCodeMap<ID extends DatasetIdentifier> = Prettify< (typeof datasetCodes)[ID] >;
export type DatasetShape<ID extends DatasetIdentifier> = Prettify<DatasetShapeMap[ID]>;
