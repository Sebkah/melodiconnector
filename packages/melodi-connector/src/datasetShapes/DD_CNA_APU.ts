/** Comptes des administrations publiques 
  Le secteur institutionnel des administrations publiques se décompose en trois sous-secteurs : l'administration publique centrale (S1311), les administrations publiques locales (S1313), et les administrations de sécurité sociale (S1314). Les données propres aux administrations publiques comprennent la dette et le déficit public au sens de Maastricht, les dépenses et recettes des administrations publiques, ainsi que les dépenses des administrations publiques ventilées par fonctions (nomenclature internationale COFOG - Classification of the Functions of Government). 
 The general government sector is broken down into three sub-sectors: central government (S1311), local government (S1313) and social security funds (S1314). The data specific to general government includes the public debt and deficit in the Maastricht sense, general government expenditure and revenue, as well as general government expenditure broken down by function (international nomenclature COFOG - Classification of the Functions of Government). 
 */export type DDCNAAPUShape = 
{
  dimensions: DDCNAAPUDimensions;
  attributes: DDCNAAPUAttributes;
  measures: DDCNAAPUMeasures;
}

export const TRANSFORMATION_codes = {
 /** Aucune */ 
 "Aucune_N": "N",
 /** Croissance annuelle  */ 
 "Croissance_annuelle__GY": "GY",
 /** Croissance annuelle de l’indice */ 
 "Croissance_annuelle_de_l’indice_GY_IX": "GY_IX",
} as const;
export type TRANSFORMATION_code_values = (typeof TRANSFORMATION_codes)[keyof typeof TRANSFORMATION_codes]; 
export const PRICES_codes = {
 /** En valeur aux prix courants */ 
 "En_valeur_aux_prix_courants_V": "V",
 /** Au coût de remplacement */ 
 "Au_coût_de_remplacement_U": "U",
} as const;
export type PRICES_code_values = (typeof PRICES_codes)[keyof typeof PRICES_codes]; 
export const MATURITY_codes = {
 /** Non applicable */ 
 "Non_applicable__Z": "_Z",
 /** Maturité à l’origine de long terme (Plus d’un an ou non précisé) */ 
 "Maturité_à_l’origine_de_long_terme_(Plus_d’un_an_ou_non_précisé)_L": "L",
 /** Maturité à l’origine courte (jusqu’à 1 an) */ 
 "Maturité_à_l’origine_courte_(jusqu’à_1_an)_S": "S",
} as const;
export type MATURITY_code_values = (typeof MATURITY_codes)[keyof typeof MATURITY_codes]; 
export const VALUATION_codes = {
 /** Evaluation standard */ 
 "Evaluation_standard_S": "S",
 /** Valeur de rédemption */ 
 "Valeur_de_rédemption_R": "R",
} as const;
export type VALUATION_code_values = (typeof VALUATION_codes)[keyof typeof VALUATION_codes]; 
export const EXPENDITURE_codes = {
 /** Total */ 
 "Total__Z": "_Z",
 /**     10.5 - Chômage */ 
 "_10.5_-_Chômage_GF1005": "GF1005",
 /**     10.3 - Survivants */ 
 "_10.3_-_Survivants_GF1003": "GF1003",
 /**     10.2 - Vieillesse */ 
 "_10.2_-_Vieillesse_GF1002": "GF1002",
} as const;
export type EXPENDITURE_code_values = (typeof EXPENDITURE_codes)[keyof typeof EXPENDITURE_codes]; 
export const STO_codes = {
 /** Dépense de consommation finale */ 
 "Dépense_de_consommation_finale_P3": "P3",
 /** Dépense de consommation individuelle */ 
 "Dépense_de_consommation_individuelle_P31": "P31",
 /** Dépense de consommation collective */ 
 "Dépense_de_consommation_collective_P32": "P32",
 /** Acquisition nette d’actifs non financiers */ 
 "Acquisition_nette_d’actifs_non_financiers_P5L": "P5L",
 /** Production marchande */ 
 "Production_marchande_P11": "P11",
 /** Formation brute de capital fixe */ 
 "Formation_brute_de_capital_fixe_P51G": "P51G",
 /** Impôts sur la production et les importations */ 
 "Impôts_sur_la_production_et_les_importations_D2": "D2",
 /** Autres impôts sur la production */ 
 "Autres_impôts_sur_la_production_D29": "D29",
 /** Production pour usage final propre */ 
 "Production_pour_usage_final_propre_P12": "P12",
 /** Autres acquisitions moins cessions d’actifs non financiers */ 
 "Autres_acquisitions_moins_cessions_d’actifs_non_financiers_P5K": "P5K",
 /** Intérêts */ 
 "Intérêts_D41": "D41",
 /** Subventions */ 
 "Subventions_D3": "D3",
 /** Paiements au titre de la production non marchande */ 
 "Paiements_au_titre_de_la_production_non_marchande_P131": "P131",
 /** Intérêts bruts de correction SIFIM */ 
 "Intérêts_bruts_de_correction_SIFIM_D41G": "D41G",
 /** Rémunération des salariés */ 
 "Rémunération_des_salariés_D1": "D1",
 /** Impôts courants sur le revenu, le patrimoine, etc. */ 
 "Impôts_courants_sur_le_revenu,_le_patrimoine,_etc._D5": "D5",
 /** Autres subventions sur la production */ 
 "Autres_subventions_sur_la_production_D39": "D39",
 /** Consommation intermédiaire */ 
 "Consommation_intermédiaire_P2": "P2",
 /** Cotisations sociales nettes */ 
 "Cotisations_sociales_nettes_D61": "D61",
 /** Cotisations sociales imputées à la charge des employeurs */ 
 "Cotisations_sociales_imputées_à_la_charge_des_employeurs_D122": "D122",
 /** Transferts courants entre administrations publiques */ 
 "Transferts_courants_entre_administrations_publiques_D73": "D73",
 /** Revenus de la propriété */ 
 "Revenus_de_la_propriété_D4": "D4",
 /** Transferts de recettes fiscales */ 
 "Transferts_de_recettes_fiscales_D733": "D733",
 /** Impôts en capital à recevoir */ 
 "Impôts_en_capital_à_recevoir_D91R": "D91R",
 /** Total des recettes des administrations publiquesen pourcentage du PIB */ 
 "Total_des_recettes_des_administrations_publiquesen_pourcentage_du_PIB__OTR_PPIB": "_OTR_PPIB",
 /** Total des recettes des administrations publiques */ 
 "Total_des_recettes_des_administrations_publiques_OTR": "OTR",
 /** Autres revenus de la propriété (D42 + D43 + D44 + D45) */ 
 "Autres_revenus_de_la_propriété_(D42_+_D43_+_D44_+_D45)_D4N": "D4N",
 /** Cotisations sociales imputées à la charge des employeurs */ 
 "Cotisations_sociales_imputées_à_la_charge_des_employeurs_D612": "D612",
 /** Transferts en capital pour admissions en non valeur à recevoir */ 
 "Transferts_en_capital_pour_admissions_en_non_valeur_à_recevoir_D995R": "D995R",
 /** Capitalisation de la production pour emploi final propre */ 
 "Capitalisation_de_la_production_pour_emploi_final_propre_P51G_CPEFP": "P51G_CPEFP",
 /** Total des crédits d’impôts à payer */ 
 "Total_des_crédits_d’impôts_à_payer_PTC": "PTC",
 /** Prestations sociales autres que transferts sociaux en nature */ 
 "Prestations_sociales_autres_que_transferts_sociaux_en_nature_D62": "D62",
 /** Total des dépenses des administrations publiques */ 
 "Total_des_dépenses_des_administrations_publiques_OTE": "OTE",
 /** Total des dépenses des administrations publiques en pourcentage du PIB */ 
 "Total_des_dépenses_des_administrations_publiques_en_pourcentage_du_PIB__OTE_PPIB": "_OTE_PPIB",
 /** Épargne brute */ 
 "Épargne_brute_B8G": "B8G",
 /** Crédits d’impôts enregistrées en recette */ 
 "Crédits_d’impôts_enregistrées_en_recette_PTR": "PTR",
 /** Autres transferts courants */ 
 "Autres_transferts_courants_D7HAPU": "D7HAPU",
 /** Capacité (+) ou besoin (-) de financement */ 
 "Capacité_(+)_ou_besoin_(-)_de_financement_B9": "B9",
 /** Transferts sociaux en nature – production marchande achetée */ 
 "Transferts_sociaux_en_nature_–_production_marchande_achetée_D632": "D632",
 /** Ensemble des prélèvements obligatoires */ 
 "Ensemble_des_prélèvements_obligatoires_PROB": "PROB",
 /** Dépenses de fonctionnement */ 
 "Dépenses_de_fonctionnement_TEF": "TEF",
 /** Prestations et autres transferts */ 
 "Prestations_et_autres_transferts_OPAT": "OPAT",
 /** Dépenses hors éléments imputés */ 
 "Dépenses_hors_éléments_imputés_TEHI": "TEHI",
 /** Autres transferts */ 
 "Autres_transferts_TRAT": "TRAT",
 /** Clôture du bilan/positions/flux */ 
 "Clôture_du_bilan/positions/flux_LE": "LE",
 /** Recettes hors éléments imputés */ 
 "Recettes_hors_éléments_imputés_TRHI": "TRHI",
 /** Impôts et cotisations sociales */ 
 "Impôts_et_cotisations_sociales_TRICS": "TRICS",
 /** Clôture du bilan/positions/flux, en pourcentage du PIB */ 
 "Clôture_du_bilan/positions/flux,_en_pourcentage_du_PIB__GD_PPIB": "_GD_PPIB",
 /** Recettes de production */ 
 "Recettes_de_production_TRP": "TRP",
 /** Production */ 
 "Production_P1": "P1",
 /** Déficit au sens de Maastricht en points de PIB */ 
 "Déficit_au_sens_de_Maastricht_en_points_de_PIB__MA_PPIB": "_MA_PPIB",
 /** Déficit au sens de Maastricht */ 
 "Déficit_au_sens_de_Maastricht_MA": "MA",
 /** Dette nette en pourcentage du PIB */ 
 "Dette_nette_en_pourcentage_du_PIB__DETNET_PPIB": "_DETNET_PPIB",
 /** Formation brute de capital/Formation nette de capital */ 
 "Formation_brute_de_capital/Formation_nette_de_capital_P5": "P5",
 /** Salaires et traitements bruts */ 
 "Salaires_et_traitements_bruts_D11": "D11",
 /** Production non marchande */ 
 "Production_non_marchande_P13": "P13",
 /** Impôts sur les produits */ 
 "Impôts_sur_les_produits_D21": "D21",
 /** Valeur ajoutée brute */ 
 "Valeur_ajoutée_brute_B1G": "B1G",
 /** Taxes de type TVA */ 
 "Taxes_de_type_TVA_D211": "D211",
 /** Cotisations sociales à la charge des employeurs */ 
 "Cotisations_sociales_à_la_charge_des_employeurs_D12": "D12",
 /** Consommation de capital fixe */ 
 "Consommation_de_capital_fixe_P51C": "P51C",
 /** Impôts et droits sur les importations, à l’exclusion de la TVA */ 
 "Impôts_et_droits_sur_les_importations,_à_l’exclusion_de_la_TVA_D212": "D212",
 /** Impôts sur les produits, à l‘exclusion de la TVA et des impôts sur les importations */ 
 "Impôts_sur_les_produits,_à_l‘exclusion_de_la_TVA_et_des_impôts_sur_les_importations_D214": "D214",
 /** Acquisitions moins cessions d’actifs non produits */ 
 "Acquisitions_moins_cessions_d’actifs_non_produits_NP": "NP",
 /** Subventions sur les produits */ 
 "Subventions_sur_les_produits_D31": "D31",
 /** Loyers */ 
 "Loyers_D45": "D45",
 /** Impôts sur le revenu */ 
 "Impôts_sur_le_revenu_D51": "D51",
 /** Autres impôts courants */ 
 "Autres_impôts_courants_D59": "D59",
 /** Revenus distribués des sociétés */ 
 "Revenus_distribués_des_sociétés_D42": "D42",
 /** Cotisations sociales effectives obligatoires à la charge des salariés */ 
 "Cotisations_sociales_effectives_obligatoires_à_la_charge_des_salariés_D613CE": "D613CE",
 /** Bénéfices réinvestis d’investissements directs étrangers */ 
 "Bénéfices_réinvestis_d’investissements_directs_étrangers_D43": "D43",
 /** Revenus d’investissements */ 
 "Revenus_d’investissements_D44": "D44",
 /** Cotisations sociales effectives à la charge des travailleurs indépendants */ 
 "Cotisations_sociales_effectives_à_la_charge_des_travailleurs_indépendants_D613CS": "D613CS",
 /** Autres transferts courants */ 
 "Autres_transferts_courants_D7": "D7",
 /** Primes nettes d’assurance-dommages */ 
 "Primes_nettes_d’assurance-dommages_D71": "D71",
 /** Cotisations sociales effectives à la charge des employeurs */ 
 "Cotisations_sociales_effectives_à_la_charge_des_employeurs_D611": "D611",
 /** Coopération internationale courante */ 
 "Coopération_internationale_courante_D74": "D74",
 /** Indemnités d’assurance-dommages */ 
 "Indemnités_d’assurance-dommages_D72": "D72",
 /** Cotisations sociales effectives à la charge des ménages */ 
 "Cotisations_sociales_effectives_à_la_charge_des_ménages_D613": "D613",
 /** Aides à l’investissement à payer */ 
 "Aides_à_l’investissement_à_payer_D92P": "D92P",
 /** Transferts courants divers */ 
 "Transferts_courants_divers_D75": "D75",
 /** Valeur ajoutée nette de CCF */ 
 "Valeur_ajoutée_nette_de_CCF_B1N": "B1N",
 /** Excédent d’exploitation net de CCF */ 
 "Excédent_d’exploitation_net_de_CCF_B2N": "B2N",
 /** Ressources propres de l’UE fondées sur la TVA et le RNB */ 
 "Ressources_propres_de_l’UE_fondées_sur_la_TVA_et_le_RNB_D76": "D76",
 /** Solde des revenus primaires net de CCF */ 
 "Solde_des_revenus_primaires_net_de_CCF_B5N": "B5N",
 /** Revenu disponible net de CCF */ 
 "Revenu_disponible_net_de_CCF_B6N": "B6N",
 /** Épargne brute net de CCF */ 
 "Épargne_brute_net_de_CCF_B8N": "B8N",
 /** Production pour usage final propre, coût imputable à la rémunération des salariés (finalité GFSM) */ 
 "Production_pour_usage_final_propre,_coût_imputable_à_la_rémunération_des_salariés_(finalité_GFSM)_P12_GFSM_D1": "P12_GFSM_D1",
 /** Ajustement pour variation des droits à pension */ 
 "Ajustement_pour_variation_des_droits_à_pension_D8": "D8",
 /** Impôts sur le revenu ou les bénéfices des sociétés, y compris les gains de détention (D51b + D51c2) */ 
 "Impôts_sur_le_revenu_ou_les_bénéfices_des_sociétés,_y_compris_les_gains_de_détention_(D51b_+_D51c2)_D51O": "D51O",
 /** Impôts sur le revenu des personnes physiques ou des ménages, y compris les gains de détention (D51a + D51c1) */ 
 "Impôts_sur_le_revenu_des_personnes_physiques_ou_des_ménages,_y_compris_les_gains_de_détention_(D51a_+_D51c1)_D51M": "D51M",
 /** Transferts en capital pour admissions en non valeur */ 
 "Transferts_en_capital_pour_admissions_en_non_valeur_D995": "D995",
 /** Transferts en capital */ 
 "Transferts_en_capital_D9": "D9",
 /** Aides à l’investissement */ 
 "Aides_à_l’investissement_D92": "D92",
 /** Impôts en capital */ 
 "Impôts_en_capital_D91": "D91",
 /** Production pour usage final propre, coût imputable à la consommation de capital fixe (finalité GFSM) */ 
 "Production_pour_usage_final_propre,_coût_imputable_à_la_consommation_de_capital_fixe_(finalité_GFSM)_P12_GFSM_P51C": "P12_GFSM_P51C",
 /** Prestations sociales en espèces et en nature de produits marchands */ 
 "Prestations_sociales_en_espèces_et_en_nature_de_produits_marchands_D6M": "D6M",
 /** Autres transferts en capital */ 
 "Autres_transferts_en_capital_D99": "D99",
 /** Production pour usage final propre, coût imputable à la consommation intermédiaire (finalité GFSM) */ 
 "Production_pour_usage_final_propre,_coût_imputable_à_la_consommation_intermédiaire_(finalité_GFSM)_P12_GFSM_P2": "P12_GFSM_P2",
 /** Partie des crédits d’impôts qui excède les créances des contribuables */ 
 "Partie_des_crédits_d’impôts_qui_excède_les_créances_des_contribuables_TC": "TC",
 /** Autres transferts en capital et aides à l’investissement à recevoir */ 
 "Autres_transferts_en_capital_et_aides_à_l’investissement_à_recevoir_D9N": "D9N",
 /** Variation stocks + Acquis, moins cessions objets valeur (OPP52+OPP53) */ 
 "Variation_stocks_+_Acquis,_moins_cessions_objets_valeur_(OPP52+OPP53)_P5M": "P5M",
 /** Subventions sur les produits à payer */ 
 "Subventions_sur_les_produits_à_payer_D31P": "D31P",
 /** Autres subventions sur la production à payer */ 
 "Autres_subventions_sur_la_production_à_payer_D39P": "D39P",
 /** Autre production non marchande */ 
 "Autre_production_non_marchande_P132": "P132",
 /** Subventions à recevoir */ 
 "Subventions_à_recevoir_D3R": "D3R",
 /** Production marchande, production pour emploi final propre et paiements au titre de la production non marchande */ 
 "Production_marchande,_production_pour_emploi_final_propre_et_paiements_au_titre_de_la_production_non_marchande_P1O": "P1O",
 /** Subventions à payer (signe positif, pour la déclaration dans la présentation des SFP) */ 
 "Subventions_à_payer_(signe_positif,_pour_la_déclaration_dans_la_présentation_des_SFP)_D3P": "D3P",
 /** Suppléments de cotisations sociales à la charge des ménages */ 
 "Suppléments_de_cotisations_sociales_à_la_charge_des_ménages_D614": "D614",
 /** Autres subventions sur la production à recevoir */ 
 "Autres_subventions_sur_la_production_à_recevoir_D39R": "D39R",
 /** Rémunération du service des régimes d’assurance sociale */ 
 "Rémunération_du_service_des_régimes_d’assurance_sociale_D61SC": "D61SC",
 /** Production marchande et production pour usage final propre */ 
 "Production_marchande_et_production_pour_usage_final_propre_P1M": "P1M",
} as const;
export type STO_code_values = (typeof STO_codes)[keyof typeof STO_codes]; 
export const CONSOLIDATION_codes = {
 /** Non consolidé */ 
 "Non_consolidé_N": "N",
 /** Consolidé */ 
 "Consolidé_C": "C",
 /** Partiellement consolidé ou agrégat contenant à la fois des valeurs consolidées et non consolidées */ 
 "Partiellement_consolidé_ou_agrégat_contenant_à_la_fois_des_valeurs_consolidées_et_non_consolidées_P": "P",
 /** FC_INTRA_INTER */ 
 "FC_INTRA_INTER_FC_INTRA_INTER": "FC_INTRA_INTER",
 /** Données consolidées intra et inter */ 
 "Données_consolidées_intra_et_inter_CC": "CC",
 /** FC_INTRA */ 
 "FC_INTRA_FC_INTRA": "FC_INTRA",
 /** Consolidant */ 
 "Consolidant_CI": "CI",
} as const;
export type CONSOLIDATION_code_values = (typeof CONSOLIDATION_codes)[keyof typeof CONSOLIDATION_codes]; 
export const ACCOUNTING_ENTRY_codes = {
 /** Emploi ou débit */ 
 "Emploi_ou_débit_D": "D",
 /** Ressource ou crédit */ 
 "Ressource_ou_crédit_C": "C",
 /** Non applicable */ 
 "Non_applicable__Z": "_Z",
 /** Solde */ 
 "Solde_B": "B",
} as const;
export type ACCOUNTING_ENTRY_code_values = (typeof ACCOUNTING_ENTRY_codes)[keyof typeof ACCOUNTING_ENTRY_codes]; 
export const PRODUCT_codes = {
 /** Total */ 
 "Total__T": "_T",
} as const;
export type PRODUCT_code_values = (typeof PRODUCT_codes)[keyof typeof PRODUCT_codes]; 
export const FREQ_codes = {
 /** Annuel */ 
 "Annuel_A": "A",
} as const;
export type FREQ_code_values = (typeof FREQ_codes)[keyof typeof FREQ_codes]; 
export const REF_SECTOR_codes = {
 /** Administrations publiques */ 
 "Administrations_publiques_S13": "S13",
 /** Administration centrale (à l’exclusion de la sécurité sociale) */ 
 "Administration_centrale_(à_l’exclusion_de_la_sécurité_sociale)_S1311": "S1311",
 /** État */ 
 "État_S13111": "S13111",
 /** Organismes divers d’administration centrale */ 
 "Organismes_divers_d’administration_centrale_S13112": "S13112",
 /** Administrations locales (à l’exclusion de la sécurité sociale) */ 
 "Administrations_locales_(à_l’exclusion_de_la_sécurité_sociale)_S1313": "S1313",
 /** Administrations de sécurité sociale */ 
 "Administrations_de_sécurité_sociale_S1314": "S1314",
 /** Administration d’états fédérés (à l’exclusion de la sécurité sociale) */ 
 "Administration_d’états_fédérés_(à_l’exclusion_de_la_sécurité_sociale)_S1312": "S1312",
 /** Organismes divers d’administration locale */ 
 "Organismes_divers_d’administration_locale_S13132": "S13132",
 /** Régimes d’assurances sociales */ 
 "Régimes_d’assurances_sociales_S13141": "S13141",
 /** Organismes dépendants des assurances sociales */ 
 "Organismes_dépendants_des_assurances_sociales_S13142": "S13142",
 /** Institutions de l’Union Européenne */ 
 "Institutions_de_l’Union_Européenne_SZU": "SZU",
 /** Collectivités locales */ 
 "Collectivités_locales_S13131": "S13131",
 /** Administrations publiques et institutions et organes de l’Union européenne */ 
 "Administrations_publiques_et_institutions_et_organes_de_l’Union_européenne_SZV": "SZV",
} as const;
export type REF_SECTOR_code_values = (typeof REF_SECTOR_codes)[keyof typeof REF_SECTOR_codes]; 
export const COUNTERPART_AREA_codes = {
 /** Monde */ 
 "Monde_W0": "W0",
 /** Institutions de l’Union Européenne */ 
 "Institutions_de_l’Union_Européenne_4Y": "4Y",
} as const;
export type COUNTERPART_AREA_code_values = (typeof COUNTERPART_AREA_codes)[keyof typeof COUNTERPART_AREA_codes]; 
export const UNIT_MEASURE_codes = {
 /** Devise nationale (Euros) */ 
 "Devise_nationale_(Euros)_XDC": "XDC",
 /** Pourcentage */ 
 "Pourcentage_PT": "PT",
 /** Indice */ 
 "Indice_IX": "IX",
} as const;
export type UNIT_MEASURE_code_values = (typeof UNIT_MEASURE_codes)[keyof typeof UNIT_MEASURE_codes]; 
export const COUNTERPART_SECTOR_codes = {
 /** Économie totale */ 
 "Économie_totale_S1": "S1",
 /** Institutions de l’Union Européenne */ 
 "Institutions_de_l’Union_Européenne_S212": "S212",
 /** Reste du monde */ 
 "Reste_du_monde_S2": "S2",
 /** Administration d’états fédérés (à l’exclusion de la sécurité sociale) */ 
 "Administration_d’états_fédérés_(à_l’exclusion_de_la_sécurité_sociale)_S1312": "S1312",
 /** Administrations locales (à l’exclusion de la sécurité sociale) */ 
 "Administrations_locales_(à_l’exclusion_de_la_sécurité_sociale)_S1313": "S1313",
 /** Administration centrale (à l’exclusion de la sécurité sociale) */ 
 "Administration_centrale_(à_l’exclusion_de_la_sécurité_sociale)_S1311": "S1311",
 /** Administrations de sécurité sociale */ 
 "Administrations_de_sécurité_sociale_S1314": "S1314",
} as const;
export type COUNTERPART_SECTOR_code_values = (typeof COUNTERPART_SECTOR_codes)[keyof typeof COUNTERPART_SECTOR_codes]; 
export const INSTR_ASSET_codes = {
 /** Total */ 
 "Total__Z": "_Z",
 /** Titres de créance à court et long terme */ 
 "Titres_de_créance_à_court_et_long_terme_F31_32": "F31_32",
 /** Titres de créance à long terme */ 
 "Titres_de_créance_à_long_terme_F32": "F32",
 /** Autres actifs liquides */ 
 "Autres_actifs_liquides_F511X52": "F511X52",
 /** Dette au sens de Maastricht */ 
 "Dette_au_sens_de_Maastricht_GD": "GD",
 /** Dépôts hors intérêts courus non échus */ 
 "Dépôts_hors_intérêts_courus_non_échus_F2N": "F2N",
 /** Crédits à court terme */ 
 "Crédits_à_court_terme_F41": "F41",
 /** Dette nette */ 
 "Dette_nette_DETNET": "DETNET",
 /** Crédits à long terme */ 
 "Crédits_à_long_terme_F42": "F42",
 /** Titres de créance à court terme */ 
 "Titres_de_créance_à_court_terme_F31": "F31",
} as const;
export type INSTR_ASSET_code_values = (typeof INSTR_ASSET_codes)[keyof typeof INSTR_ASSET_codes]; 
export const ACTIVITY_codes = {
 /** Total */ 
 "Total__T": "_T",
} as const;
export type ACTIVITY_code_values = (typeof ACTIVITY_codes)[keyof typeof ACTIVITY_codes]; 
export const OBS_STATUS_codes = {
 /** Valeur provisoire */ 
 "Valeur_provisoire_P": "P",
 /** Normale */ 
 "Normale_A": "A",
 /** Valeur manquante : les données n’existent pas (sans objet : so) */ 
 "Valeur_manquante_:_les_données_n’existent_pas_(sans_objet_:_so)_M": "M",
 /** Valeur manquante : les données existent mais ne sont pas collectées (non disponible : nd) */ 
 "Valeur_manquante_:_les_données_existent_mais_ne_sont_pas_collectées_(non_disponible_:_nd)_L": "L",
} as const;
export type OBS_STATUS_code_values = (typeof OBS_STATUS_codes)[keyof typeof OBS_STATUS_codes]; 
export const CONF_STATUS_codes = {
 /** Diffusable */ 
 "Diffusable_F": "F",
} as const;
export type CONF_STATUS_code_values = (typeof CONF_STATUS_codes)[keyof typeof CONF_STATUS_codes]; 
export const OBS_STATUS_FR_codes = {
 /** Provisoire */ 
 "Provisoire_PROV": "PROV",
 /** Semi-définitif */ 
 "Semi-définitif_SD": "SD",
 /** Définitif */ 
 "Définitif_D": "D",
} as const;
export type OBS_STATUS_FR_code_values = (typeof OBS_STATUS_FR_codes)[keyof typeof OBS_STATUS_FR_codes]; 
export interface DDCNAAPUDimensions {
  /** Possible values: 
 * N - Aucune 

 * GY - Croissance annuelle  

 * GY_IX - Croissance annuelle de l’indice 
 */
    TRANSFORMATION: TRANSFORMATION_code_values ;
  /** Possible values: 
 * V - En valeur aux prix courants 

 * U - Au coût de remplacement 
 */
    PRICES: PRICES_code_values ;
  /** Possible values: 
 * _Z - Non applicable 

 * L - Maturité à l’origine de long terme (Plus d’un an ou non précisé) 

 * S - Maturité à l’origine courte (jusqu’à 1 an) 
 */
    MATURITY: MATURITY_code_values ;
  /** Possible values: 
 * S - Evaluation standard 

 * R - Valeur de rédemption 
 */
    VALUATION: VALUATION_code_values ;
  /** Possible values: 
 * _Z - Total 

 * GF1005 -     10.5 - Chômage 

 * GF1003 -     10.3 - Survivants 

 * GF1002 -     10.2 - Vieillesse 
 */
    EXPENDITURE: EXPENDITURE_code_values ;
  /** Possible values: 
 * P3 - Dépense de consommation finale 

 * P31 - Dépense de consommation individuelle 

 * P32 - Dépense de consommation collective 

 * P5L - Acquisition nette d’actifs non financiers 

 * P11 - Production marchande 

 * P51G - Formation brute de capital fixe 

 * D2 - Impôts sur la production et les importations 

 * D29 - Autres impôts sur la production 

 * P12 - Production pour usage final propre 

 * P5K - Autres acquisitions moins cessions d’actifs non financiers 

 * D41 - Intérêts 

 * D3 - Subventions 

 * P131 - Paiements au titre de la production non marchande 

 * D41G - Intérêts bruts de correction SIFIM 

 * D1 - Rémunération des salariés 

 * D5 - Impôts courants sur le revenu, le patrimoine, etc. 

 * D39 - Autres subventions sur la production 

 * P2 - Consommation intermédiaire 

 * D61 - Cotisations sociales nettes 

 * D122 - Cotisations sociales imputées à la charge des employeurs 

 * D73 - Transferts courants entre administrations publiques 

 * D4 - Revenus de la propriété 

 * D733 - Transferts de recettes fiscales 

 * D91R - Impôts en capital à recevoir 

 * _OTR_PPIB - Total des recettes des administrations publiquesen pourcentage du PIB 

 * OTR - Total des recettes des administrations publiques 

 * D4N - Autres revenus de la propriété (D42 + D43 + D44 + D45) 

 * D612 - Cotisations sociales imputées à la charge des employeurs 

 * D995R - Transferts en capital pour admissions en non valeur à recevoir 

 * P51G_CPEFP - Capitalisation de la production pour emploi final propre 

 * PTC - Total des crédits d’impôts à payer 

 * D62 - Prestations sociales autres que transferts sociaux en nature 

 * OTE - Total des dépenses des administrations publiques 

 * _OTE_PPIB - Total des dépenses des administrations publiques en pourcentage du PIB 

 * B8G - Épargne brute 

 * PTR - Crédits d’impôts enregistrées en recette 

 * D7HAPU - Autres transferts courants 

 * B9 - Capacité (+) ou besoin (-) de financement 

 * D632 - Transferts sociaux en nature – production marchande achetée 

 * PROB - Ensemble des prélèvements obligatoires 

 * TEF - Dépenses de fonctionnement 

 * OPAT - Prestations et autres transferts 

 * TEHI - Dépenses hors éléments imputés 

 * TRAT - Autres transferts 

 * LE - Clôture du bilan/positions/flux 

 * TRHI - Recettes hors éléments imputés 

 * TRICS - Impôts et cotisations sociales 

 * _GD_PPIB - Clôture du bilan/positions/flux, en pourcentage du PIB 

 * TRP - Recettes de production 

 * P1 - Production 

 * _MA_PPIB - Déficit au sens de Maastricht en points de PIB 

 * MA - Déficit au sens de Maastricht 

 * _DETNET_PPIB - Dette nette en pourcentage du PIB 

 * P5 - Formation brute de capital/Formation nette de capital 

 * D11 - Salaires et traitements bruts 

 * P13 - Production non marchande 

 * D21 - Impôts sur les produits 

 * B1G - Valeur ajoutée brute 

 * D211 - Taxes de type TVA 

 * D12 - Cotisations sociales à la charge des employeurs 

 * P51C - Consommation de capital fixe 

 * D212 - Impôts et droits sur les importations, à l’exclusion de la TVA 

 * D214 - Impôts sur les produits, à l‘exclusion de la TVA et des impôts sur les importations 

 * NP - Acquisitions moins cessions d’actifs non produits 

 * D31 - Subventions sur les produits 

 * D45 - Loyers 

 * D51 - Impôts sur le revenu 

 * D59 - Autres impôts courants 

 * D42 - Revenus distribués des sociétés 

 * D613CE - Cotisations sociales effectives obligatoires à la charge des salariés 

 * D43 - Bénéfices réinvestis d’investissements directs étrangers 

 * D44 - Revenus d’investissements 

 * D613CS - Cotisations sociales effectives à la charge des travailleurs indépendants 

 * D7 - Autres transferts courants 

 * D71 - Primes nettes d’assurance-dommages 

 * D611 - Cotisations sociales effectives à la charge des employeurs 

 * D74 - Coopération internationale courante 

 * D72 - Indemnités d’assurance-dommages 

 * D613 - Cotisations sociales effectives à la charge des ménages 

 * D92P - Aides à l’investissement à payer 

 * D75 - Transferts courants divers 

 * B1N - Valeur ajoutée nette de CCF 

 * B2N - Excédent d’exploitation net de CCF 

 * D76 - Ressources propres de l’UE fondées sur la TVA et le RNB 

 * B5N - Solde des revenus primaires net de CCF 

 * B6N - Revenu disponible net de CCF 

 * B8N - Épargne brute net de CCF 

 * P12_GFSM_D1 - Production pour usage final propre, coût imputable à la rémunération des salariés (finalité GFSM) 

 * D8 - Ajustement pour variation des droits à pension 

 * D51O - Impôts sur le revenu ou les bénéfices des sociétés, y compris les gains de détention (D51b + D51c2) 

 * D51M - Impôts sur le revenu des personnes physiques ou des ménages, y compris les gains de détention (D51a + D51c1) 

 * D995 - Transferts en capital pour admissions en non valeur 

 * D9 - Transferts en capital 

 * D92 - Aides à l’investissement 

 * D91 - Impôts en capital 

 * P12_GFSM_P51C - Production pour usage final propre, coût imputable à la consommation de capital fixe (finalité GFSM) 

 * D6M - Prestations sociales en espèces et en nature de produits marchands 

 * D99 - Autres transferts en capital 

 * P12_GFSM_P2 - Production pour usage final propre, coût imputable à la consommation intermédiaire (finalité GFSM) 

 * TC - Partie des crédits d’impôts qui excède les créances des contribuables 

 * D9N - Autres transferts en capital et aides à l’investissement à recevoir 

 * P5M - Variation stocks + Acquis, moins cessions objets valeur (OPP52+OPP53) 

 * D31P - Subventions sur les produits à payer 

 * D39P - Autres subventions sur la production à payer 

 * P132 - Autre production non marchande 

 * D3R - Subventions à recevoir 

 * P1O - Production marchande, production pour emploi final propre et paiements au titre de la production non marchande 

 * D3P - Subventions à payer (signe positif, pour la déclaration dans la présentation des SFP) 

 * D614 - Suppléments de cotisations sociales à la charge des ménages 

 * D39R - Autres subventions sur la production à recevoir 

 * D61SC - Rémunération du service des régimes d’assurance sociale 

 * P1M - Production marchande et production pour usage final propre 
 */
    STO: STO_code_values ;
  /** Possible values: 
 * N - Non consolidé 

 * C - Consolidé 

 * P - Partiellement consolidé ou agrégat contenant à la fois des valeurs consolidées et non consolidées 

 * FC_INTRA_INTER - FC_INTRA_INTER 

 * CC - Données consolidées intra et inter 

 * FC_INTRA - FC_INTRA 

 * CI - Consolidant 
 */
    CONSOLIDATION: CONSOLIDATION_code_values ;
  /** Possible values: 
 * D - Emploi ou débit 

 * C - Ressource ou crédit 

 * _Z - Non applicable 

 * B - Solde 
 */
    ACCOUNTING_ENTRY: ACCOUNTING_ENTRY_code_values ;
  /** Possible values: 
 * _T - Total 
 */
    PRODUCT: PRODUCT_code_values ;
  /** Possible values: 
 * A - Annuel 
 */
    FREQ: FREQ_code_values ;
  /** Possible values: 
 * S13 - Administrations publiques 

 * S1311 - Administration centrale (à l’exclusion de la sécurité sociale) 

 * S13111 - État 

 * S13112 - Organismes divers d’administration centrale 

 * S1313 - Administrations locales (à l’exclusion de la sécurité sociale) 

 * S1314 - Administrations de sécurité sociale 

 * S1312 - Administration d’états fédérés (à l’exclusion de la sécurité sociale) 

 * S13132 - Organismes divers d’administration locale 

 * S13141 - Régimes d’assurances sociales 

 * S13142 - Organismes dépendants des assurances sociales 

 * SZU - Institutions de l’Union Européenne 

 * S13131 - Collectivités locales 

 * SZV - Administrations publiques et institutions et organes de l’Union européenne 
 */
    REF_SECTOR: REF_SECTOR_code_values ;
    TIME_PERIOD:        number;
  /** Possible values: 
 * W0 - Monde 

 * 4Y - Institutions de l’Union Européenne 
 */
    COUNTERPART_AREA: COUNTERPART_AREA_code_values ;
  /** Possible values: 
 * XDC - Devise nationale (Euros) 

 * PT - Pourcentage 

 * IX - Indice 
 */
    UNIT_MEASURE: UNIT_MEASURE_code_values ;
  /** Possible values: 
 * S1 - Économie totale 

 * S212 - Institutions de l’Union Européenne 

 * S2 - Reste du monde 

 * S1312 - Administration d’états fédérés (à l’exclusion de la sécurité sociale) 

 * S1313 - Administrations locales (à l’exclusion de la sécurité sociale) 

 * S1311 - Administration centrale (à l’exclusion de la sécurité sociale) 

 * S1314 - Administrations de sécurité sociale 
 */
    COUNTERPART_SECTOR: COUNTERPART_SECTOR_code_values ;
  /** Possible values: 
 * _Z - Total 

 * F31_32 - Titres de créance à court et long terme 

 * F32 - Titres de créance à long terme 

 * F511X52 - Autres actifs liquides 

 * GD - Dette au sens de Maastricht 

 * F2N - Dépôts hors intérêts courus non échus 

 * F41 - Crédits à court terme 

 * DETNET - Dette nette 

 * F42 - Crédits à long terme 

 * F31 - Titres de créance à court terme 
 */
    INSTR_ASSET: INSTR_ASSET_code_values ;
  /** Possible values: 
 * _T - Total 
 */
    ACTIVITY: ACTIVITY_code_values ;
}

export interface DDCNAAPUAttributes {
  /** Possible values: 
 * P - Valeur provisoire 

 * A - Normale 

 * M - Valeur manquante : les données n’existent pas (sans objet : so) 

 * L - Valeur manquante : les données existent mais ne sont pas collectées (non disponible : nd) 
 */
    OBS_STATUS: OBS_STATUS_code_values ;
    LAST_UPDATE:       null;
    TABLE_IDENTIFIER:  null;
    DECIMALS:          number;
    UNIT_MULT:         number;
    REF_PERIOD_DETAIL: null;
  /** Possible values: 
 * F - Diffusable 
 */
    CONF_STATUS: CONF_STATUS_code_values ;
  /** Possible values: 
 * PROV - Provisoire 

 * SD - Semi-définitif 

 * D - Définitif 
 */
    OBS_STATUS_FR: OBS_STATUS_FR_code_values ;
    REF_YEAR_PRICE:    null;
}

export interface DDCNAAPUMeasures {
    OBS_VALUE_NIVEAU: ObsValueNiveau;
}

export interface ObsValueNiveau {
}
