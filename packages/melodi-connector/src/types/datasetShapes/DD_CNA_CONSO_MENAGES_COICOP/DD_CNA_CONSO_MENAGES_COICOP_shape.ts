// This file is auto-generated. Do not edit directly.

import { DDCNACONSOMENAGESCOICOPDimensions } from "./DD_CNA_CONSO_MENAGES_COICOP_types";
import { DDCNACONSOMENAGESCOICOPAttributes } from "./DD_CNA_CONSO_MENAGES_COICOP_types";

/**
 * Consommation des ménages par fonction 

 * Households consumption by fonction 

 Français 

 Données annuelles de consommation finale effective des ménages par fonction selon la nomenclature COICOP (Classification of Individual Consumption by Purpose). 

La consommation finale effective des ménages inclut tous les biens et les services consommés par les ménages résidents pour la satisfaction directe de leurs besoins individuels, que ces biens et services aient fait l'objet d'une dépense directe des ménages ou qu'ils aient été financés par des administrations publiques ou des ISBLSM.


 English 

Annual data on actual household final consumption by function according to the COICOP nomenclature (Classification of Individual Consumption by Purpose). 

Actual final consumption of households includes all goods and services consumed by resident households for the direct satisfaction of their individual needs, whether these goods and services have been the subject of direct expenditure by households or have been financed by public administrations or NPISHs.


 */
export type DDCNACONSOMENAGESCOICOP_Shape = 
{
/** Dimensions of the entry (eg: zoning, activity) */
   dimensions: DDCNACONSOMENAGESCOICOPDimensions;
/** Attributes of the entry (eg: metadatas)*/
   attributes: DDCNACONSOMENAGESCOICOPAttributes;
/** Actual value of the entry */
   measure: number
}

