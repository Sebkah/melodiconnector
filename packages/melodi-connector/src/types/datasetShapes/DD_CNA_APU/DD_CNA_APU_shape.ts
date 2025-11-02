// This file is auto-generated. Do not edit directly.

import { DDCNAAPUDimensions } from "./DD_CNA_APU_types";
import { DDCNAAPUAttributes } from "./DD_CNA_APU_types";

/**
 * Comptes des administrations publiques 

 * General government accounts 

 Français 

 Le secteur institutionnel des administrations publiques se décompose en trois sous-secteurs : l'administration publique centrale (S1311), les administrations publiques locales (S1313), et les administrations de sécurité sociale (S1314). Les données propres aux administrations publiques comprennent la dette et le déficit public au sens de Maastricht, les dépenses et recettes des administrations publiques, ainsi que les dépenses des administrations publiques ventilées par fonctions (nomenclature internationale COFOG - Classification of the Functions of Government).

 English 

The general government sector is broken down into three sub-sectors: central government (S1311), local government (S1313) and social security funds (S1314). The data specific to general government includes the public debt and deficit in the Maastricht sense, general government expenditure and revenue, as well as general government expenditure broken down by function (international nomenclature COFOG - Classification of the Functions of Government).

 */
export type DDCNAAPU_Shape = 
{
/** Dimensions of the entry (eg: zoning, activity) */
   dimensions: DDCNAAPUDimensions;
/** Attributes of the entry (eg: metadatas)*/
   attributes: DDCNAAPUAttributes;
/** Actual value of the entry */
   measure: number
}

