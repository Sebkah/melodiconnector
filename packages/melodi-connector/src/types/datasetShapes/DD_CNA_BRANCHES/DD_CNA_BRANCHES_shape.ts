// This file is auto-generated. Do not edit directly.

import { DDCNABRANCHESDimensions } from "./DD_CNA_BRANCHES_types";
import { DDCNABRANCHESAttributes } from "./DD_CNA_BRANCHES_types";

/**
 * Activité des branches de l'économie 

 * Production and generation of income by industry 

 Français 

 Données annuelles sur l'activité des branches qui est retracée par les comptes de production et d'exploitation. Le compte de production décrit la relation entre la production et la consommation intermédiaire nécessaire à cette production. Il a pour solde la valeur ajoutée brute qui mesure la richesse créée lors du processus de production.

Le compte d'exploitation décrit comment la valeur ajoutée brute couvre la rémunération versée aux salariés et les impôts sur la production. Il a pour solde l'excédent brut d'exploitation et le revenu mixte brut qui mesurent le profit d'exploitation des branches.

Le rapprochement de la valeur ajoutée brute et des effectifs des branches permet de calculer la productivité apparente du travail. Celui des salaires et traitements et des effectifs (ou du nombre d'heures travaillées) permet de calculer le salaire moyen par tête (ou le salaire horaire moyen).

L'emploi (STO=EMP) est mesuré en effectifs ( personnes physiques avec UNIT_MEASURE=PS ou en équivalent temps plein FT) ou en nombre d'heures travaillées (UNIT_MEASURE=HW). 

Ce jeu de données donne le chiffre clé du Tableau de Bord de l’Économie Française sur la répartition de la valeur ajoutée par branche  https://www.insee.fr/fr/outil-interactif/5367857/details/10_ECC/11_ECO/11B_Figure2

Les données annuelles sur l'activité des branches suivent les concepts et méthodes des comptes nationaux en base 2020 (première publication fin mai 2024) et sont inclues dans les jeux de données annuelles à forte valeur (HVD).

 English 

Annual data on the activity of industries as reflected in the production and operating accounts. The production account describes the relationship between output and the intermediate consumption required to produce it. The result is gross value added, which measures the wealth created during the production process.

The operating account describes how gross value added covers the remuneration paid to employees and taxes on production. The balance is the gross operating surplus and gross mixed income, which measure the operating profit of the industries.

Apparent labour productivity can be calculated by reconciling gross value added with the number of employees in the industry. By comparing wages and salaries with the number of employees (or the number of hours worked), we can calculate the average wage per head (or the average hourly wage).

Employment (STO=EMP) is measured in terms of headcount (physical persons with UNIT_MEASURE=PS or full-time equivalents FT) or the number of hours worked (UNIT_MEASURE=HW). 

This data set provides the key figure in the Tableau de Bord de l'Économie Française on the breakdown of value added by branch https://www.insee.fr/fr/outil-interactif/5367857/details/10_ECC/11_ECO/11B_Figure2

Annual data on branch activity are included in the annual high value data sets (HVD).

 */
export type DDCNABRANCHES_Shape = 
{
/** Dimensions of the entry (eg: zoning, activity) */
   dimensions: DDCNABRANCHESDimensions;
/** Attributes of the entry (eg: metadatas)*/
   attributes: DDCNABRANCHESAttributes;
/** Actual value of the entry */
   measure: number
}

