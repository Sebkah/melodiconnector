/** Comptes des administrations publiques 
  Le secteur institutionnel des administrations publiques se décompose en trois sous-secteurs : l'administration publique centrale (S1311), les administrations publiques locales (S1313), et les administrations de sécurité sociale (S1314). Les données propres aux administrations publiques comprennent la dette et le déficit public au sens de Maastricht, les dépenses et recettes des administrations publiques, ainsi que les dépenses des administrations publiques ventilées par fonctions (nomenclature internationale COFOG - Classification of the Functions of Government). 
 The general government sector is broken down into three sub-sectors: central government (S1311), local government (S1313) and social security funds (S1314). The data specific to general government includes the public debt and deficit in the Maastricht sense, general government expenditure and revenue, as well as general government expenditure broken down by function (international nomenclature COFOG - Classification of the Functions of Government). 
 */export type DDCNAAPUShape = 
{
  dimensions: DDCNAAPUDimensions;
  attributes: DDCNAAPUAttributes;
  measures: DDCNAAPUMeasures;
}

export interface DDCNAAPUDimensions {
    TRANSFORMATION:     string;
    PRICES:             string;
    MATURITY:           string;
    VALUATION:          string;
    EXPENDITURE:        string;
    STO:                string;
    CONSOLIDATION:      string;
    ACCOUNTING_ENTRY:   string;
    PRODUCT:            string;
    FREQ:               string;
    REF_SECTOR:         string;
    TIME_PERIOD:        number;
    COUNTERPART_AREA:   string;
    UNIT_MEASURE:       string;
    COUNTERPART_SECTOR: string;
    INSTR_ASSET:        string;
    ACTIVITY:           string;
}

export interface DDCNAAPUAttributes {
    OBS_STATUS:        string;
    LAST_UPDATE:       null;
    TABLE_IDENTIFIER:  null;
    DECIMALS:          number;
    UNIT_MULT:         number;
    REF_PERIOD_DETAIL: null;
    CONF_STATUS:       string;
    OBS_STATUS_FR:     string;
    REF_YEAR_PRICE:    null;
}

export interface DDCNAAPUMeasures {
    OBS_VALUE_NIVEAU: ObsValueNiveau;
}

export interface ObsValueNiveau {
}
