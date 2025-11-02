// This file is auto-generated. Do not edit directly.

import { DDCNAAGREGATSDimensions } from "./DD_CNA_AGREGATS_types";
import { DDCNAAGREGATSAttributes } from "./DD_CNA_AGREGATS_types";

/**
 * Produit Intérieur Brut (PIB) et grands agrégats économiques 

 * Gross domestic product (GDP) and main economic aggregates 

 Français 

 Le produit intérieur brut (PIB) est le principal agrégat mesurant l'activité économique. Il correspond à la somme des valeurs ajoutées brutes nouvellement créées par les unités productrices résidentes une année donnée, évaluées au prix du marché. Il donne une mesure des richesses nouvelles créées chaque année par le système productif et permet des comparaisons internationales. Le produit intérieur brut est publié à prix courants et en volume aux prix de l'année précédente chaînés. Son évolution en volume (c'est-à-dire hors effet de prix) mesure la croissance économique.

Les grands agrégats économiques associés au PIB sont le revenu national brut (RNB), la capacité ou le besoin de financement de la Nation, les grandes composantes de l'équilibre entre les éléments de l'offre (PIB, importations) et de la demande (consommation, investissement, exportations), la ventilation des facteurs de production (emploi, stock de capital) par secteurs institutionnels (entreprises, ménages, administrations publiques considérés comme producteurs de richesses) et la valeur ajoutée brute qu'ils génèrent.

Les données annuelles des grands agrégats économiques associés au PIB suivent les concepts et méthodes des comptes nationaux en base 2020 (première publication fin mai 2024) et font partie des données à forte valeur désignées par Eurostat (HVD). 

 English 

Gross domestic product (GDP) is the main aggregate measuring economic activity. It corresponds to the sum of gross value added newly created by resident producer units in a given year, valued at market prices. It provides a measure of the new wealth created each year by the productive system and enables international comparisons. Gross domestic product is published at current prices and in volume terms at the previous year's chain-linked prices. Its change in volume (i.e. excluding the price effect) measures economic growth.

The main economic aggregates associated with GDP are gross national income (GNI), the nation's net lending or borrowing, the main components of the balance between supply (GDP, imports) and demand (consumption, investment, exports), the breakdown of factors of production (employment, capital stock) by institutional sector (companies, households, general government considered as wealth producers) and the gross value added they generate.

The annual data for the major economic aggregates associated with GDP are part of the high-value data designated by Eurostat (HVD).

 */
export type DDCNAAGREGATS_Shape = 
{
/** Dimensions of the entry (eg: zoning, activity) */
   dimensions: DDCNAAGREGATSDimensions;
/** Attributes of the entry (eg: metadatas)*/
   attributes: DDCNAAGREGATSAttributes;
/** Actual value of the entry */
   measure: number
}

