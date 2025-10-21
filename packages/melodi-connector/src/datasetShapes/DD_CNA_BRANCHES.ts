/** Activité des branches de l'économie 
  Données annuelles sur l'activité des branches qui est retracée par les comptes de production et d'exploitation. Le compte de production décrit la relation entre la production et la consommation intermédiaire nécessaire à cette production. Il a pour solde la valeur ajoutée brute qui mesure la richesse créée lors du processus de production.

Le compte d'exploitation décrit comment la valeur ajoutée brute couvre la rémunération versée aux salariés et les impôts sur la production. Il a pour solde l'excédent brut d'exploitation et le revenu mixte brut qui mesurent le profit d'exploitation des branches.

Le rapprochement de la valeur ajoutée brute et des effectifs des branches permet de calculer la productivité apparente du travail. Celui des salaires et traitements et des effectifs (ou du nombre d'heures travaillées) permet de calculer le salaire moyen par tête (ou le salaire horaire moyen).

L'emploi (STO=EMP) est mesuré en effectifs ( personnes physiques avec UNIT_MEASURE=PS ou en équivalent temps plein FT) ou en nombre d'heures travaillées (UNIT_MEASURE=HW). 

Ce jeu de données donne le chiffre clé du Tableau de Bord de l’Économie Française sur la répartition de la valeur ajoutée par branche  https://www.insee.fr/fr/outil-interactif/5367857/details/10_ECC/11_ECO/11B_Figure2

Les données annuelles sur l'activité des branches suivent les concepts et méthodes des comptes nationaux en base 2020 (première publication fin mai 2024) et sont inclues dans les jeux de données annuelles à forte valeur (HVD). 
 Annual data on the activity of industries as reflected in the production and operating accounts. The production account describes the relationship between output and the intermediate consumption required to produce it. The result is gross value added, which measures the wealth created during the production process.

The operating account describes how gross value added covers the remuneration paid to employees and taxes on production. The balance is the gross operating surplus and gross mixed income, which measure the operating profit of the industries.

Apparent labour productivity can be calculated by reconciling gross value added with the number of employees in the industry. By comparing wages and salaries with the number of employees (or the number of hours worked), we can calculate the average wage per head (or the average hourly wage).

Employment (STO=EMP) is measured in terms of headcount (physical persons with UNIT_MEASURE=PS or full-time equivalents FT) or the number of hours worked (UNIT_MEASURE=HW). 

This data set provides the key figure in the Tableau de Bord de l'Économie Française on the breakdown of value added by branch https://www.insee.fr/fr/outil-interactif/5367857/details/10_ECC/11_ECO/11B_Figure2

Annual data on branch activity are included in the annual high value data sets (HVD). 
 */export type DDCNABRANCHESShape = 
{
  dimensions: DDCNABRANCHESDimensions;
  attributes: DDCNABRANCHESAttributes;
  measures: DDCNABRANCHESMeasures;
}

export const TRANSFORMATION_codes = {
 /** Aucune */ 
 "Aucune_N": "N",
 /** Croissance annuelle  */ 
 "Croissance_annuelle__GY": "GY",
} as const;
export type TRANSFORMATION_code_values = (typeof TRANSFORMATION_codes)[keyof typeof TRANSFORMATION_codes]; 
export const PRICES_codes = {
 /** En valeur aux prix courants */ 
 "En_valeur_aux_prix_courants_V": "V",
 /** Déflateur */ 
 "Déflateur_D": "D",
 /** Aux prix de l’année précédente */ 
 "Aux_prix_de_l’année_précédente_Y": "Y",
 /** En volume aux prix de l’année précédente chaînés */ 
 "En_volume_aux_prix_de_l’année_précédente_chaînés_L": "L",
 /** Non applicable */ 
 "Non_applicable__Z": "_Z",
 /** Au coût de remplacement */ 
 "Au_coût_de_remplacement_U": "U",
 /** Au coût de remplacement de l’année précédente */ 
 "Au_coût_de_remplacement_de_l’année_précédente_O": "O",
 /** En volume aux prix de l’année précédente (fin d’année) chaînés */ 
 "En_volume_aux_prix_de_l’année_précédente_(fin_d’année)_chaînés_LFA": "LFA",
} as const;
export type PRICES_code_values = (typeof PRICES_codes)[keyof typeof PRICES_codes]; 
export const EXPENDITURE_codes = {
 /** Total */ 
 "Total__Z": "_Z",
} as const;
export type EXPENDITURE_code_values = (typeof EXPENDITURE_codes)[keyof typeof EXPENDITURE_codes]; 
export const STO_codes = {
 /** Production */ 
 "Production_P1": "P1",
 /** Consommation intermédiaire */ 
 "Consommation_intermédiaire_P2": "P2",
 /** Rémunération des salariés */ 
 "Rémunération_des_salariés_D1": "D1",
 /** Salaires et traitements bruts */ 
 "Salaires_et_traitements_bruts_D11": "D11",
 /** Valeur ajoutée brute */ 
 "Valeur_ajoutée_brute_B1G": "B1G",
 /** Excédent brut d’exploitation et revenu mixte brut */ 
 "Excédent_brut_d’exploitation_et_revenu_mixte_brut_B2A3G": "B2A3G",
 /** Excédent brut d’exploitation */ 
 "Excédent_brut_d’exploitation_B2G": "B2G",
 /** Formation brute de capital fixe */ 
 "Formation_brute_de_capital_fixe_P51G": "P51G",
 /** Impôts sur la production et les importations */ 
 "Impôts_sur_la_production_et_les_importations_D2": "D2",
 /** Impôts sur les produits */ 
 "Impôts_sur_les_produits_D21": "D21",
 /** Subventions */ 
 "Subventions_D3": "D3",
 /** Subventions sur les produits */ 
 "Subventions_sur_les_produits_D31": "D31",
 /** Produit intérieur brut */ 
 "Produit_intérieur_brut_B1GQ": "B1GQ",
 /** Emploi total (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) */ 
 "Emploi_total_(peut_être_en_personnes_physiques,_équivalent_temps_plein_ou_en_heures_travaillées)_EMP": "EMP",
 /** Productivité horaire du travail (pht) */ 
 "Productivité_horaire_du_travail_(pht)__PHT": "_PHT",
 /** Emploi des travailleurs indépendants dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) */ 
 "Emploi_des_travailleurs_indépendants_dans_les_unités_de_production_résidentes_(peut_être_en_personnes_physiques,_équivalent_temps_plein_ou_en_heures_travaillées)_SELF": "SELF",
 /** Emploi des salariés dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) */ 
 "Emploi_des_salariés_dans_les_unités_de_production_résidentes_(peut_être_en_personnes_physiques,_équivalent_temps_plein_ou_en_heures_travaillées)_SAL": "SAL",
 /** Emploi déclaré des salariés dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) */ 
 "Emploi_déclaré_des_salariés_dans_les_unités_de_production_résidentes_(peut_être_en_personnes_physiques,_équivalent_temps_plein_ou_en_heures_travaillées)_SALD": "SALD",
 /** Cotisations sociales à la charge des employeurs */ 
 "Cotisations_sociales_à_la_charge_des_employeurs_D12": "D12",
 /** Impôts sur production et importations, moins subventions (D2+D3) */ 
 "Impôts_sur_production_et_importations,_moins_subventions_(D2+D3)_D2X3": "D2X3",
 /** Clôture du bilan/positions/flux */ 
 "Clôture_du_bilan/positions/flux_LE": "LE",
 /** Impôts moins subventions sur les produits (D21+D31) */ 
 "Impôts_moins_subventions_sur_les_produits_(D21+D31)_D21X31": "D21X31",
 /** Consommation de capital fixe */ 
 "Consommation_de_capital_fixe_P51C": "P51C",
 /** Autres impôts sur la production moins autres subventions sur la production */ 
 "Autres_impôts_sur_la_production_moins_autres_subventions_sur_la_production_D29X39": "D29X39",
 /** Excédent d’exploitation/revenu mixte net de CCF */ 
 "Excédent_d’exploitation/revenu_mixte_net_de_CCF_B2A3N": "B2A3N",
 /** Divergence statistique */ 
 "Divergence_statistique_YA2": "YA2",
 /** Divergence statistique (approche par la production) */ 
 "Divergence_statistique_(approche_par_la_production)_YA1": "YA1",
} as const;
export type STO_code_values = (typeof STO_codes)[keyof typeof STO_codes]; 
export const ACCOUNTING_ENTRY_codes = {
 /** Ressource ou crédit */ 
 "Ressource_ou_crédit_C": "C",
 /** Emploi ou débit */ 
 "Emploi_ou_débit_D": "D",
 /** Solde */ 
 "Solde_B": "B",
 /** Non applicable */ 
 "Non_applicable__Z": "_Z",
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
 /** Économie totale */ 
 "Économie_totale_S1": "S1",
 /** Sociétés et entreprises individuelles non financières */ 
 "Sociétés_et_entreprises_individuelles_non_financières_S11X14AA": "S11X14AA",
 /** Sociétés non financières */ 
 "Sociétés_non_financières_S11": "S11",
 /** Sociétés financières */ 
 "Sociétés_financières_S12": "S12",
 /** Administrations publiques */ 
 "Administrations_publiques_S13": "S13",
 /** Ménages */ 
 "Ménages_S14": "S14",
 /** Institutions sans but lucratif au services des ménages */ 
 "Institutions_sans_but_lucratif_au_services_des_ménages_S15": "S15",
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
 /** Ménages et institutions sans but lucratif au services des ménages */ 
 "Ménages_et_institutions_sans_but_lucratif_au_services_des_ménages_S1M": "S1M",
 /** Sociétés et entreprises individuelles financières */ 
 "Sociétés_et_entreprises_individuelles_financières_S12X14AF": "S12X14AF",
 /** Ménages hors entrepreneurs individuels */ 
 "Ménages_hors_entrepreneurs_individuels_S14B": "S14B",
 /** Sociétés financières : services principalement financiers, hors assurance */ 
 "Sociétés_financières_:_services_principalement_financiers,_hors_assurance_S12K64": "S12K64",
 /** Sociétés financières : services principalement d’auxiliaires financiers */ 
 "Sociétés_financières_:_services_principalement_d’auxiliaires_financiers_S12K66": "S12K66",
 /** Sociétés financières : services principalement d’assurance */ 
 "Sociétés_financières_:_services_principalement_d’assurance_S12K65": "S12K65",
 /** Entreprises individuelles non financières */ 
 "Entreprises_individuelles_non_financières_S14AA": "S14AA",
 /** Biens et services */ 
 "Biens_et_services_SBS": "SBS",
 /** Total des secteurs résidents */ 
 "Total_des_secteurs_résidents_S10": "S10",
 /** Non sectorisé */ 
 "Non_sectorisé_S1N": "S1N",
 /** Administrations publiques et institutions et organes de l’Union européenne */ 
 "Administrations_publiques_et_institutions_et_organes_de_l’Union_européenne_SZV": "SZV",
 /** Administration d’états fédérés (à l’exclusion de la sécurité sociale) */ 
 "Administration_d’états_fédérés_(à_l’exclusion_de_la_sécurité_sociale)_S1312": "S1312",
 /** Institutions de l’Union Européenne */ 
 "Institutions_de_l’Union_Européenne_SZU": "SZU",
} as const;
export type REF_SECTOR_code_values = (typeof REF_SECTOR_codes)[keyof typeof REF_SECTOR_codes]; 
export const COUNTERPART_AREA_codes = {
 /** Monde */ 
 "Monde_W0": "W0",
 /** Territoire national */ 
 "Territoire_national_W2": "W2",
 /** Intérieur vis-à-vis du monde plus reste du monde vis-à-vis de l'intérieur */ 
 "Intérieur_vis-à-vis_du_monde_plus_reste_du_monde_vis-à-vis_de_lintérieur_W08": "W08",
} as const;
export type COUNTERPART_AREA_code_values = (typeof COUNTERPART_AREA_codes)[keyof typeof COUNTERPART_AREA_codes]; 
export const UNIT_MEASURE_codes = {
 /** Devise nationale (Euros) */ 
 "Devise_nationale_(Euros)_XDC": "XDC",
 /** Pourcentage */ 
 "Pourcentage_PT": "PT",
 /** Personnes */ 
 "Personnes_PS": "PS",
 /** Équivalent temps plein */ 
 "Équivalent_temps_plein_FT": "FT",
 /** Heures travaillées */ 
 "Heures_travaillées_HW": "HW",
 /** Durée annuelle travaillée */ 
 "Durée_annuelle_travaillée_DAT": "DAT",
} as const;
export type UNIT_MEASURE_code_values = (typeof UNIT_MEASURE_codes)[keyof typeof UNIT_MEASURE_codes]; 
export const INSTR_ASSET_codes = {
 /** Total */ 
 "Total__Z": "_Z",
 /** Actifs fixes par type d’actifs (brut) */ 
 "Actifs_fixes_par_type_d’actifs_(brut)_N11G": "N11G",
} as const;
export type INSTR_ASSET_code_values = (typeof INSTR_ASSET_codes)[keyof typeof INSTR_ASSET_codes]; 
export const ACTIVITY_codes = {
 /** Agriculture, sylviculture et pêche */ 
 "Agriculture,_sylviculture_et_pêche_A": "A",
 /** Pêche et aquaculture */ 
 "Pêche_et_aquaculture_A03": "A03",
 /** Industrie manufacturière, industries extractives et autres */ 
 "Industrie_manufacturière,_industries_extractives_et_autres_BTE": "BTE",
 /** Industries extractives, énergie, eau, gestion des déchets et dépollution */ 
 "Industries_extractives,_énergie,_eau,_gestion_des_déchets_et_dépollution_B_D_E": "B_D_E",
 /** Culture et production animale, chasse et services annexes */ 
 "Culture_et_production_animale,_chasse_et_services_annexes_A01": "A01",
 /** Extraction d'hydrocarbures */ 
 "Extraction_dhydrocarbures_B06": "B06",
 /** Fabrication de denrées alimentaires, de boissons et de produits à base de tabac */ 
 "Fabrication_de_denrées_alimentaires,_de_boissons_et_de_produits_à_base_de_tabac_C10T12": "C10T12",
 /** Sylviculture et exploitation forestière */ 
 "Sylviculture_et_exploitation_forestière_A02": "A02",
 /** Industries extractives */ 
 "Industries_extractives_B": "B",
 /** Extraction de minerais métalliques */ 
 "Extraction_de_minerais_métalliques_B07": "B07",
 /** Autres industries manufacturières (C15, C23, C27, C31, C32, C33) */ 
 "Autres_industries_manufacturières_(C15,_C23,_C27,_C31,_C32,_C33)_C_OTH": "C_OTH",
 /** Autres industries extractives */ 
 "Autres_industries_extractives_B08": "B08",
 /** Fabrication de textiles, industries de l'habillement, industrie du cuir et de la chaussure */ 
 "Fabrication_de_textiles,_industries_de_lhabillement,_industrie_du_cuir_et_de_la_chaussure_C13T15": "C13T15",
 /** Industries alimentaires */ 
 "Industries_alimentaires_C10": "C10",
 /** Fabrication de textiles */ 
 "Fabrication_de_textiles_C13": "C13",
 /** Services de soutien aux industries extractives */ 
 "Services_de_soutien_aux_industries_extractives_B09": "B09",
 /** Extraction de houille et de lignite */ 
 "Extraction_de_houille_et_de_lignite_B05": "B05",
 /** Industrie de l'habillement */ 
 "Industrie_de_lhabillement_C14": "C14",
 /** Fabrication de boissons */ 
 "Fabrication_de_boissons_C11": "C11",
 /** Travail du bois, industries du papier et imprimerie */ 
 "Travail_du_bois,_industries_du_papier_et_imprimerie_C16T18": "C16T18",
 /** Industrie du cuir et de la chaussure */ 
 "Industrie_du_cuir_et_de_la_chaussure_C15": "C15",
 /** Fabrication de produits à base de tabac */ 
 "Fabrication_de_produits_à_base_de_tabac_C12": "C12",
 /** Travail du bois et fabrication d'articles en bois et en liège, à l'exception des meubles ; fabrication d'articles en vannerie et sparterie */ 
 "Travail_du_bois_et_fabrication_darticles_en_bois_et_en_liège,_à_lexception_des_meubles_;_fabrication_darticles_en_vannerie_et_sparterie_C16": "C16",
 /** Industrie du papier et du carton */ 
 "Industrie_du_papier_et_du_carton_C17": "C17",
 /** Imprimerie et reproduction d'enregistrements */ 
 "Imprimerie_et_reproduction_denregistrements_C18": "C18",
 /** Cokéfaction et raffinage */ 
 "Cokéfaction_et_raffinage_C19": "C19",
 /** Industrie chimique */ 
 "Industrie_chimique_C20": "C20",
 /** Industrie pharmaceutique */ 
 "Industrie_pharmaceutique_C21": "C21",
 /** Fabrication d'autres produits minéraux non métalliques */ 
 "Fabrication_dautres_produits_minéraux_non_métalliques_C23": "C23",
 /** Fabrication de produits en caoutchouc et en plastique ainsi que d'autres produits minéraux non métalliques */ 
 "Fabrication_de_produits_en_caoutchouc_et_en_plastique_ainsi_que_dautres_produits_minéraux_non_métalliques_C22_23": "C22_23",
 /** Métallurgie et fabrication de produits métalliques à l'exception des machines et des équipements */ 
 "Métallurgie_et_fabrication_de_produits_métalliques_à_lexception_des_machines_et_des_équipements_C24_25": "C24_25",
 /** Fabrication de produits métalliques, à l'exception des machines et des équipements */ 
 "Fabrication_de_produits_métalliques,_à_lexception_des_machines_et_des_équipements_C25": "C25",
 /** Fabrication de produits informatiques, électroniques et optiques, d'équipements électriques, et de machines et équipements n.c.a. */ 
 "Fabrication_de_produits_informatiques,_électroniques_et_optiques,_déquipements_électriques,_et_de_machines_et_équipements_n.c.a._C26T28": "C26T28",
 /** Fabrication de produits informatiques, électroniques et optiques */ 
 "Fabrication_de_produits_informatiques,_électroniques_et_optiques_C26": "C26",
 /** Fabrication de produits en caoutchouc et en plastique */ 
 "Fabrication_de_produits_en_caoutchouc_et_en_plastique_C22": "C22",
 /** Fabrication d'équipements électriques */ 
 "Fabrication_déquipements_électriques_C27": "C27",
 /** Fabrication de machines et équipements n.c.a. */ 
 "Fabrication_de_machines_et_équipements_n.c.a._C28": "C28",
 /** Métallurgie */ 
 "Métallurgie_C24": "C24",
 /** Fabrication de matériels de transport */ 
 "Fabrication_de_matériels_de_transport_C29_30": "C29_30",
 /** Industrie automobile */ 
 "Industrie_automobile_C29": "C29",
 /** Fabrication d'autres matériels de transport */ 
 "Fabrication_dautres_matériels_de_transport_C30": "C30",
 /** Autres industries manufacturières ; réparation et installation de machines et d'équipements */ 
 "Autres_industries_manufacturières_;_réparation_et_installation_de_machines_et_déquipements_C31T33": "C31T33",
 /** Autres industries manufacturières */ 
 "Autres_industries_manufacturières_C32": "C32",
 /** Réparation et installation de machines et d'équipements */ 
 "Réparation_et_installation_de_machines_et_déquipements_C33": "C33",
 /** Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné */ 
 "Production_et_distribution_délectricité,_de_gaz,_de_vapeur_et_dair_conditionné_D35": "D35",
 /** Fabrication de meubles */ 
 "Fabrication_de_meubles_C31": "C31",
 /** Production et distribution d'eau ; assainissement, gestion des déchets et dépollution */ 
 "Production_et_distribution_deau_;_assainissement,_gestion_des_déchets_et_dépollution_E": "E",
 /** Captage, traitement et distribution d'eau */ 
 "Captage,_traitement_et_distribution_deau_E36": "E36",
 /** Collecte et traitement des eaux usées */ 
 "Collecte_et_traitement_des_eaux_usées_E37": "E37",
 /** Collecte, traitement et élimination des déchets ; récupération */ 
 "Collecte,_traitement_et_élimination_des_déchets_;_récupération_E38": "E38",
 /** Dépollution et autres services de gestion des déchets */ 
 "Dépollution_et_autres_services_de_gestion_des_déchets_E39": "E39",
 /** Construction */ 
 "Construction_F": "F",
 /** Génie civil */ 
 "Génie_civil_F42": "F42",
 /** Travaux de construction spécialisés */ 
 "Travaux_de_construction_spécialisés_F43": "F43",
 /** Services principalement marchands */ 
 "Services_principalement_marchands_GTN_RTU": "GTN_RTU",
 /** Construction de bâtiments */ 
 "Construction_de_bâtiments_F41": "F41",
 /** Commerce de gros et de détail, transports, hébergement et restauration */ 
 "Commerce_de_gros_et_de_détail,_transports,_hébergement_et_restauration_GTI": "GTI",
 /** Commerce ; réparation d'automobiles et de motocycles */ 
 "Commerce_;_réparation_dautomobiles_et_de_motocycles_G": "G",
 /** Commerce et réparation d'automobiles et de motocycles */ 
 "Commerce_et_réparation_dautomobiles_et_de_motocycles_G45": "G45",
 /** Commerce de gros, à l'exception des automobiles et des motocycles */ 
 "Commerce_de_gros,_à_lexception_des_automobiles_et_des_motocycles_G46": "G46",
 /** Commerce de détail, à l'exception des automobiles et des motocycles */ 
 "Commerce_de_détail,_à_lexception_des_automobiles_et_des_motocycles_G47": "G47",
 /** Transports et entreposage */ 
 "Transports_et_entreposage_H": "H",
 /** Transports terrestres et transport par conduites */ 
 "Transports_terrestres_et_transport_par_conduites_H49": "H49",
 /** Transports par eau */ 
 "Transports_par_eau_H50": "H50",
 /** Transports aériens */ 
 "Transports_aériens_H51": "H51",
 /** Activités de poste et de courrier */ 
 "Activités_de_poste_et_de_courrier_H53": "H53",
 /** Hébergement et restauration */ 
 "Hébergement_et_restauration_I": "I",
 /** Entreposage et services auxiliaires des transports */ 
 "Entreposage_et_services_auxiliaires_des_transports_H52": "H52",
 /** Hébergement */ 
 "Hébergement_I55": "I55",
 /** Restauration */ 
 "Restauration_I56": "I56",
 /** Information et communication */ 
 "Information_et_communication_J": "J",
 /** Édition, audiovisuel et diffusion */ 
 "Édition,_audiovisuel_et_diffusion_J58T60": "J58T60",
 /** Édition */ 
 "Édition_J58": "J58",
 /** Production de films cinématographiques, de vidéo et de programmes de télévision ; enregistrement sonore et édition musicale */ 
 "Production_de_films_cinématographiques,_de_vidéo_et_de_programmes_de_télévision_;_enregistrement_sonore_et_édition_musicale_J59": "J59",
 /** Programmation et diffusion */ 
 "Programmation_et_diffusion_J60": "J60",
 /** Télécommunications */ 
 "Télécommunications_J61": "J61",
 /** Programmation, conseil et autres activités informatiques ; services d'information */ 
 "Programmation,_conseil_et_autres_activités_informatiques_;_services_dinformation_J62_63": "J62_63",
 /** Services d'information */ 
 "Services_dinformation_J63": "J63",
 /** Assurance */ 
 "Assurance_K65": "K65",
 /** Activités auxiliaires de services financiers et d'assurance */ 
 "Activités_auxiliaires_de_services_financiers_et_dassurance_K66": "K66",
 /** Activités financières et d'assurance */ 
 "Activités_financières_et_dassurance_K": "K",
 /** Programmation, conseil et autres activités informatiques */ 
 "Programmation,_conseil_et_autres_activités_informatiques_J62": "J62",
 /** Activités immobilières */ 
 "Activités_immobilières_L": "L",
 /** Activités immobilières */ 
 "Activités_immobilières_L68": "L68",
 /** Activités spécialisées, scientifiques et techniques et activités de services administratifs et de soutien */ 
 "Activités_spécialisées,_scientifiques_et_techniques_et_activités_de_services_administratifs_et_de_soutien_M_N": "M_N",
 /** Activités juridiques, comptables, de gestion, d'architecture, d'ingénierie, de contrôle et d'analyses techniques */ 
 "Activités_juridiques,_comptables,_de_gestion,_darchitecture,_dingénierie,_de_contrôle_et_danalyses_techniques_M69T71": "M69T71",
 /** Activités juridiques et comptables */ 
 "Activités_juridiques_et_comptables_M69": "M69",
 /** Activités des sièges sociaux ; conseil de gestion */ 
 "Activités_des_sièges_sociaux_;_conseil_de_gestion_M70": "M70",
 /** Activités des services financiers, hors assurance et caisses de retraite */ 
 "Activités_des_services_financiers,_hors_assurance_et_caisses_de_retraite_K64": "K64",
 /** Activités d'architecture et d'ingénierie ; activités de contrôle et analyses techniques */ 
 "Activités_darchitecture_et_dingénierie_;_activités_de_contrôle_et_analyses_techniques_M71": "M71",
 /** Recherche-développement scientifique */ 
 "Recherche-développement_scientifique_M72": "M72",
 /** Publicité et études de marché ; autres activités spécialisées, scientifiques et techniques ; activités vétérinaires */ 
 "Publicité_et_études_de_marché_;_autres_activités_spécialisées,_scientifiques_et_techniques_;_activités_vétérinaires_M73T75": "M73T75",
 /** Autres activités spécialisées, scientifiques et techniques */ 
 "Autres_activités_spécialisées,_scientifiques_et_techniques_M74": "M74",
 /** Activités vétérinaires */ 
 "Activités_vétérinaires_M75": "M75",
 /** Activités de services administratifs et de soutien */ 
 "Activités_de_services_administratifs_et_de_soutien_N": "N",
 /** Publicité et études de marché */ 
 "Publicité_et_études_de_marché_M73": "M73",
 /** Activités de location et location-bail */ 
 "Activités_de_location_et_location-bail_N77": "N77",
 /** Activités liées à l'emploi */ 
 "Activités_liées_à_lemploi_N78": "N78",
 /** Activités des agences de voyage, voyagistes, services de réservation et activités connexes */ 
 "Activités_des_agences_de_voyage,_voyagistes,_services_de_réservation_et_activités_connexes_N79": "N79",
 /** Enquêtes et sécurité */ 
 "Enquêtes_et_sécurité_N80": "N80",
 /** Services relatifs aux bâtiments et aménagement paysager */ 
 "Services_relatifs_aux_bâtiments_et_aménagement_paysager_N81": "N81",
 /** Activités administratives et autres activités de soutien aux entreprises */ 
 "Activités_administratives_et_autres_activités_de_soutien_aux_entreprises_N82": "N82",
 /** Arts, divertissement et loisirs ; autres activités de services ; activités des ménages, des organismes et organisations extraterritoriaux */ 
 "Arts,_divertissement_et_loisirs_;_autres_activités_de_services_;_activités_des_ménages,_des_organismes_et_organisations_extraterritoriaux_RTU": "RTU",
 /** Arts, spectacles et activités récréatives */ 
 "Arts,_spectacles_et_activités_récréatives_R": "R",
 /** Activités créatives, artistiques et de spectacle */ 
 "Activités_créatives,_artistiques_et_de_spectacle_R90": "R90",
 /** Bibliothèques, archives, musées et autres activités culturelles */ 
 "Bibliothèques,_archives,_musées_et_autres_activités_culturelles_R91": "R91",
 /** Organisation de jeux de hasard et d'argent */ 
 "Organisation_de_jeux_de_hasard_et_dargent_R92": "R92",
 /** Activités sportives, récréatives et de loisirs */ 
 "Activités_sportives,_récréatives_et_de_loisirs_R93": "R93",
 /** Autres activités de services */ 
 "Autres_activités_de_services_S": "S",
 /** Activités des ménages en tant qu'employeurs ; activités indifférenciées des ménages en tant que producteurs de biens et services pour usage propre */ 
 "Activités_des_ménages_en_tant_quemployeurs_;_activités_indifférenciées_des_ménages_en_tant_que_producteurs_de_biens_et_services_pour_usage_propre_T": "T",
 /** Activités des organisations associatives */ 
 "Activités_des_organisations_associatives_S94": "S94",
 /** Activités des ménages en tant qu'employeurs de personnel domestique */ 
 "Activités_des_ménages_en_tant_quemployeurs_de_personnel_domestique_T97": "T97",
 /** Réparation d'ordinateurs et de biens personnels et domestiques */ 
 "Réparation_dordinateurs_et_de_biens_personnels_et_domestiques_S95": "S95",
 /** Administration publique, défense, enseignement, santé humaine et action sociale */ 
 "Administration_publique,_défense,_enseignement,_santé_humaine_et_action_sociale_OTQ": "OTQ",
 /** Autres services personnels */ 
 "Autres_services_personnels_S96": "S96",
 /** Administration publique et défense ; sécurité sociale obligatoire */ 
 "Administration_publique_et_défense_;_sécurité_sociale_obligatoire_O84": "O84",
 /** Enseignement */ 
 "Enseignement_P85": "P85",
 /** Activités pour la santé humaine */ 
 "Activités_pour_la_santé_humaine_Q86": "Q86",
 /** Hébergement médico-social et social et action sociale sans hébergement */ 
 "Hébergement_médico-social_et_social_et_action_sociale_sans_hébergement_Q87_88": "Q87_88",
 /** Hébergement médico-social et social */ 
 "Hébergement_médico-social_et_social_Q87": "Q87",
 /** Action sociale sans hébergement */ 
 "Action_sociale_sans_hébergement_Q88": "Q88",
 /** Industrie manufacturière */ 
 "Industrie_manufacturière_C": "C",
 /** Autres industries manufacturières n.c.a. */ 
 "Autres_industries_manufacturières_n.c.a._C31_32": "C31_32",
 /** Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné */ 
 "Production_et_distribution_délectricité,_de_gaz,_de_vapeur_et_dair_conditionné_D": "D",
 /** Collecte et traitement des eaux usées, traitement des déchets et dépollution */ 
 "Collecte_et_traitement_des_eaux_usées,_traitement_des_déchets_et_dépollution_E37T39": "E37T39",
 /** Production de films cinématographiques, de vidéo et de programmes de télévision ; enregistrement sonore et édition musicale ; programmation et diffusion */ 
 "Production_de_films_cinématographiques,_de_vidéo_et_de_programmes_de_télévision_;_enregistrement_sonore_et_édition_musicale_;_programmation_et_diffusion_J59_60": "J59_60",
 /** Activités spécialisées, scientifiques et techniques */ 
 "Activités_spécialisées,_scientifiques_et_techniques_M": "M",
 /** Activités juridiques et comptables ; conseil de gestion ; activités des sièges sociaux */ 
 "Activités_juridiques_et_comptables_;_conseil_de_gestion_;_activités_des_sièges_sociaux_M69_70": "M69_70",
 /** Autres activités spécialisées, scientifiques et techniques ; activités vétérinaires */ 
 "Autres_activités_spécialisées,_scientifiques_et_techniques_;_activités_vétérinaires_M74_75": "M74_75",
 /** Enquêtes et sécurité ; services relatifs aux bâtiments et aménagement paysager ; autres activités de soutien */ 
 "Enquêtes_et_sécurité_;_services_relatifs_aux_bâtiments_et_aménagement_paysager_;_autres_activités_de_soutien_N80T82": "N80T82",
 /** Arts, divertissement et musées */ 
 "Arts,_divertissement_et_musées_R90T92": "R90T92",
 /** Administration publique */ 
 "Administration_publique_O": "O",
 /** Enseignement */ 
 "Enseignement_P": "P",
 /** Santé humaine et action sociale */ 
 "Santé_humaine_et_action_sociale_Q": "Q",
 /** Loyers imputés des logements occupés par leur propriétaire */ 
 "Loyers_imputés_des_logements_occupés_par_leur_propriétaire_L68A": "L68A",
 /** Activités extra-territoriales */ 
 "Activités_extra-territoriales_U": "U",
 /** Activités des organisations et organismes extraterritoriaux */ 
 "Activités_des_organisations_et_organismes_extraterritoriaux_U99": "U99",
 /** Transformation et conservation de la viande et préparation de produits à base de viande */ 
 "Transformation_et_conservation_de_la_viande_et_préparation_de_produits_à_base_de_viande_138G_C10A": "138G_C10A",
 /** Transformation et conservation de poisson, de crustacés et de mollusques */ 
 "Transformation_et_conservation_de_poisson,_de_crustacés_et_de_mollusques_138G_C10B": "138G_C10B",
 /** Transformation et conservation de fruits et légumes */ 
 "Transformation_et_conservation_de_fruits_et_légumes_138G_C10C": "138G_C10C",
 /** Fabrication d’huiles et graisses végétales et animales */ 
 "Fabrication_d’huiles_et_graisses_végétales_et_animales_138G_C10D": "138G_C10D",
 /** Fabrication de produits laitiers */ 
 "Fabrication_de_produits_laitiers_138G_C10E": "138G_C10E",
 /** Travail des grains ; fabrication de produits amylacés */ 
 "Travail_des_grains_;_fabrication_de_produits_amylacés_138G_C10F": "138G_C10F",
 /** Fabrication de produits de boulangerie-pâtisserie et de pâtes alimentaires */ 
 "Fabrication_de_produits_de_boulangerie-pâtisserie_et_de_pâtes_alimentaires_138G_C10G": "138G_C10G",
 /** Fabrication d'autres produits alimentaires */ 
 "Fabrication_dautres_produits_alimentaires_138G_C10H": "138G_C10H",
 /** Fabrication d'aliments pour animaux */ 
 "Fabrication_daliments_pour_animaux_138G_C10K": "138G_C10K",
 /** Fabrication de boissons */ 
 "Fabrication_de_boissons_138G_C11Z": "138G_C11Z",
 /** Fabrication de produits à base de tabac */ 
 "Fabrication_de_produits_à_base_de_tabac_138G_C12Z": "138G_C12Z",
 /** Total */ 
 "Total__T": "_T",
} as const;
export type ACTIVITY_code_values = (typeof ACTIVITY_codes)[keyof typeof ACTIVITY_codes]; 
export const OBS_STATUS_codes = {
 /** Valeur provisoire */ 
 "Valeur_provisoire_P": "P",
 /** Normale */ 
 "Normale_A": "A",
 /** Valeur manquante : les données existent mais ne sont pas collectées (non disponible : nd) */ 
 "Valeur_manquante_:_les_données_existent_mais_ne_sont_pas_collectées_(non_disponible_:_nd)_L": "L",
 /** Valeur manquante : les données n’existent pas (sans objet : so) */ 
 "Valeur_manquante_:_les_données_n’existent_pas_(sans_objet_:_so)_M": "M",
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
export interface DDCNABRANCHESDimensions {
  /** Possible values: 
 * N - Aucune 

 * GY - Croissance annuelle  
 */
    TRANSFORMATION: TRANSFORMATION_code_values ;
  /** Possible values: 
 * V - En valeur aux prix courants 

 * D - Déflateur 

 * Y - Aux prix de l’année précédente 

 * L - En volume aux prix de l’année précédente chaînés 

 * _Z - Non applicable 

 * U - Au coût de remplacement 

 * O - Au coût de remplacement de l’année précédente 

 * LFA - En volume aux prix de l’année précédente (fin d’année) chaînés 
 */
    PRICES: PRICES_code_values ;
  /** Possible values: 
 * _Z - Total 
 */
    EXPENDITURE: EXPENDITURE_code_values ;
  /** Possible values: 
 * P1 - Production 

 * P2 - Consommation intermédiaire 

 * D1 - Rémunération des salariés 

 * D11 - Salaires et traitements bruts 

 * B1G - Valeur ajoutée brute 

 * B2A3G - Excédent brut d’exploitation et revenu mixte brut 

 * B2G - Excédent brut d’exploitation 

 * P51G - Formation brute de capital fixe 

 * D2 - Impôts sur la production et les importations 

 * D21 - Impôts sur les produits 

 * D3 - Subventions 

 * D31 - Subventions sur les produits 

 * B1GQ - Produit intérieur brut 

 * EMP - Emploi total (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) 

 * _PHT - Productivité horaire du travail (pht) 

 * SELF - Emploi des travailleurs indépendants dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) 

 * SAL - Emploi des salariés dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) 

 * SALD - Emploi déclaré des salariés dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) 

 * D12 - Cotisations sociales à la charge des employeurs 

 * D2X3 - Impôts sur production et importations, moins subventions (D2+D3) 

 * LE - Clôture du bilan/positions/flux 

 * D21X31 - Impôts moins subventions sur les produits (D21+D31) 

 * P51C - Consommation de capital fixe 

 * D29X39 - Autres impôts sur la production moins autres subventions sur la production 

 * B2A3N - Excédent d’exploitation/revenu mixte net de CCF 

 * YA2 - Divergence statistique 

 * YA1 - Divergence statistique (approche par la production) 
 */
    STO: STO_code_values ;
  /** Possible values: 
 * C - Ressource ou crédit 

 * D - Emploi ou débit 

 * B - Solde 

 * _Z - Non applicable 
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
 * S1 - Économie totale 

 * S11X14AA - Sociétés et entreprises individuelles non financières 

 * S11 - Sociétés non financières 

 * S12 - Sociétés financières 

 * S13 - Administrations publiques 

 * S14 - Ménages 

 * S15 - Institutions sans but lucratif au services des ménages 

 * S1311 - Administration centrale (à l’exclusion de la sécurité sociale) 

 * S13111 - État 

 * S13112 - Organismes divers d’administration centrale 

 * S1313 - Administrations locales (à l’exclusion de la sécurité sociale) 

 * S1314 - Administrations de sécurité sociale 

 * S1M - Ménages et institutions sans but lucratif au services des ménages 

 * S12X14AF - Sociétés et entreprises individuelles financières 

 * S14B - Ménages hors entrepreneurs individuels 

 * S12K64 - Sociétés financières : services principalement financiers, hors assurance 

 * S12K66 - Sociétés financières : services principalement d’auxiliaires financiers 

 * S12K65 - Sociétés financières : services principalement d’assurance 

 * S14AA - Entreprises individuelles non financières 

 * SBS - Biens et services 

 * S10 - Total des secteurs résidents 

 * S1N - Non sectorisé 

 * SZV - Administrations publiques et institutions et organes de l’Union européenne 

 * S1312 - Administration d’états fédérés (à l’exclusion de la sécurité sociale) 

 * SZU - Institutions de l’Union Européenne 
 */
    REF_SECTOR: REF_SECTOR_code_values ;
    TIME_PERIOD:      number;
  /** Possible values: 
 * W0 - Monde 

 * W2 - Territoire national 

 * W08 - Intérieur vis-à-vis du monde plus reste du monde vis-à-vis de l'intérieur 
 */
    COUNTERPART_AREA: COUNTERPART_AREA_code_values ;
  /** Possible values: 
 * XDC - Devise nationale (Euros) 

 * PT - Pourcentage 

 * PS - Personnes 

 * FT - Équivalent temps plein 

 * HW - Heures travaillées 

 * DAT - Durée annuelle travaillée 
 */
    UNIT_MEASURE: UNIT_MEASURE_code_values ;
  /** Possible values: 
 * _Z - Total 

 * N11G - Actifs fixes par type d’actifs (brut) 
 */
    INSTR_ASSET: INSTR_ASSET_code_values ;
  /** Possible values: 
 * A - Agriculture, sylviculture et pêche 

 * A03 - Pêche et aquaculture 

 * BTE - Industrie manufacturière, industries extractives et autres 

 * B_D_E - Industries extractives, énergie, eau, gestion des déchets et dépollution 

 * A01 - Culture et production animale, chasse et services annexes 

 * B06 - Extraction d'hydrocarbures 

 * C10T12 - Fabrication de denrées alimentaires, de boissons et de produits à base de tabac 

 * A02 - Sylviculture et exploitation forestière 

 * B - Industries extractives 

 * B07 - Extraction de minerais métalliques 

 * C_OTH - Autres industries manufacturières (C15, C23, C27, C31, C32, C33) 

 * B08 - Autres industries extractives 

 * C13T15 - Fabrication de textiles, industries de l'habillement, industrie du cuir et de la chaussure 

 * C10 - Industries alimentaires 

 * C13 - Fabrication de textiles 

 * B09 - Services de soutien aux industries extractives 

 * B05 - Extraction de houille et de lignite 

 * C14 - Industrie de l'habillement 

 * C11 - Fabrication de boissons 

 * C16T18 - Travail du bois, industries du papier et imprimerie 

 * C15 - Industrie du cuir et de la chaussure 

 * C12 - Fabrication de produits à base de tabac 

 * C16 - Travail du bois et fabrication d'articles en bois et en liège, à l'exception des meubles ; fabrication d'articles en vannerie et sparterie 

 * C17 - Industrie du papier et du carton 

 * C18 - Imprimerie et reproduction d'enregistrements 

 * C19 - Cokéfaction et raffinage 

 * C20 - Industrie chimique 

 * C21 - Industrie pharmaceutique 

 * C23 - Fabrication d'autres produits minéraux non métalliques 

 * C22_23 - Fabrication de produits en caoutchouc et en plastique ainsi que d'autres produits minéraux non métalliques 

 * C24_25 - Métallurgie et fabrication de produits métalliques à l'exception des machines et des équipements 

 * C25 - Fabrication de produits métalliques, à l'exception des machines et des équipements 

 * C26T28 - Fabrication de produits informatiques, électroniques et optiques, d'équipements électriques, et de machines et équipements n.c.a. 

 * C26 - Fabrication de produits informatiques, électroniques et optiques 

 * C22 - Fabrication de produits en caoutchouc et en plastique 

 * C27 - Fabrication d'équipements électriques 

 * C28 - Fabrication de machines et équipements n.c.a. 

 * C24 - Métallurgie 

 * C29_30 - Fabrication de matériels de transport 

 * C29 - Industrie automobile 

 * C30 - Fabrication d'autres matériels de transport 

 * C31T33 - Autres industries manufacturières ; réparation et installation de machines et d'équipements 

 * C32 - Autres industries manufacturières 

 * C33 - Réparation et installation de machines et d'équipements 

 * D35 - Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné 

 * C31 - Fabrication de meubles 

 * E - Production et distribution d'eau ; assainissement, gestion des déchets et dépollution 

 * E36 - Captage, traitement et distribution d'eau 

 * E37 - Collecte et traitement des eaux usées 

 * E38 - Collecte, traitement et élimination des déchets ; récupération 

 * E39 - Dépollution et autres services de gestion des déchets 

 * F - Construction 

 * F42 - Génie civil 

 * F43 - Travaux de construction spécialisés 

 * GTN_RTU - Services principalement marchands 

 * F41 - Construction de bâtiments 

 * GTI - Commerce de gros et de détail, transports, hébergement et restauration 

 * G - Commerce ; réparation d'automobiles et de motocycles 

 * G45 - Commerce et réparation d'automobiles et de motocycles 

 * G46 - Commerce de gros, à l'exception des automobiles et des motocycles 

 * G47 - Commerce de détail, à l'exception des automobiles et des motocycles 

 * H - Transports et entreposage 

 * H49 - Transports terrestres et transport par conduites 

 * H50 - Transports par eau 

 * H51 - Transports aériens 

 * H53 - Activités de poste et de courrier 

 * I - Hébergement et restauration 

 * H52 - Entreposage et services auxiliaires des transports 

 * I55 - Hébergement 

 * I56 - Restauration 

 * J - Information et communication 

 * J58T60 - Édition, audiovisuel et diffusion 

 * J58 - Édition 

 * J59 - Production de films cinématographiques, de vidéo et de programmes de télévision ; enregistrement sonore et édition musicale 

 * J60 - Programmation et diffusion 

 * J61 - Télécommunications 

 * J62_63 - Programmation, conseil et autres activités informatiques ; services d'information 

 * J63 - Services d'information 

 * K65 - Assurance 

 * K66 - Activités auxiliaires de services financiers et d'assurance 

 * K - Activités financières et d'assurance 

 * J62 - Programmation, conseil et autres activités informatiques 

 * L - Activités immobilières 

 * L68 - Activités immobilières 

 * M_N - Activités spécialisées, scientifiques et techniques et activités de services administratifs et de soutien 

 * M69T71 - Activités juridiques, comptables, de gestion, d'architecture, d'ingénierie, de contrôle et d'analyses techniques 

 * M69 - Activités juridiques et comptables 

 * M70 - Activités des sièges sociaux ; conseil de gestion 

 * K64 - Activités des services financiers, hors assurance et caisses de retraite 

 * M71 - Activités d'architecture et d'ingénierie ; activités de contrôle et analyses techniques 

 * M72 - Recherche-développement scientifique 

 * M73T75 - Publicité et études de marché ; autres activités spécialisées, scientifiques et techniques ; activités vétérinaires 

 * M74 - Autres activités spécialisées, scientifiques et techniques 

 * M75 - Activités vétérinaires 

 * N - Activités de services administratifs et de soutien 

 * M73 - Publicité et études de marché 

 * N77 - Activités de location et location-bail 

 * N78 - Activités liées à l'emploi 

 * N79 - Activités des agences de voyage, voyagistes, services de réservation et activités connexes 

 * N80 - Enquêtes et sécurité 

 * N81 - Services relatifs aux bâtiments et aménagement paysager 

 * N82 - Activités administratives et autres activités de soutien aux entreprises 

 * RTU - Arts, divertissement et loisirs ; autres activités de services ; activités des ménages, des organismes et organisations extraterritoriaux 

 * R - Arts, spectacles et activités récréatives 

 * R90 - Activités créatives, artistiques et de spectacle 

 * R91 - Bibliothèques, archives, musées et autres activités culturelles 

 * R92 - Organisation de jeux de hasard et d'argent 

 * R93 - Activités sportives, récréatives et de loisirs 

 * S - Autres activités de services 

 * T - Activités des ménages en tant qu'employeurs ; activités indifférenciées des ménages en tant que producteurs de biens et services pour usage propre 

 * S94 - Activités des organisations associatives 

 * T97 - Activités des ménages en tant qu'employeurs de personnel domestique 

 * S95 - Réparation d'ordinateurs et de biens personnels et domestiques 

 * OTQ - Administration publique, défense, enseignement, santé humaine et action sociale 

 * S96 - Autres services personnels 

 * O84 - Administration publique et défense ; sécurité sociale obligatoire 

 * P85 - Enseignement 

 * Q86 - Activités pour la santé humaine 

 * Q87_88 - Hébergement médico-social et social et action sociale sans hébergement 

 * Q87 - Hébergement médico-social et social 

 * Q88 - Action sociale sans hébergement 

 * C - Industrie manufacturière 

 * C31_32 - Autres industries manufacturières n.c.a. 

 * D - Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné 

 * E37T39 - Collecte et traitement des eaux usées, traitement des déchets et dépollution 

 * J59_60 - Production de films cinématographiques, de vidéo et de programmes de télévision ; enregistrement sonore et édition musicale ; programmation et diffusion 

 * M - Activités spécialisées, scientifiques et techniques 

 * M69_70 - Activités juridiques et comptables ; conseil de gestion ; activités des sièges sociaux 

 * M74_75 - Autres activités spécialisées, scientifiques et techniques ; activités vétérinaires 

 * N80T82 - Enquêtes et sécurité ; services relatifs aux bâtiments et aménagement paysager ; autres activités de soutien 

 * R90T92 - Arts, divertissement et musées 

 * O - Administration publique 

 * P - Enseignement 

 * Q - Santé humaine et action sociale 

 * L68A - Loyers imputés des logements occupés par leur propriétaire 

 * U - Activités extra-territoriales 

 * U99 - Activités des organisations et organismes extraterritoriaux 

 * 138G_C10A - Transformation et conservation de la viande et préparation de produits à base de viande 

 * 138G_C10B - Transformation et conservation de poisson, de crustacés et de mollusques 

 * 138G_C10C - Transformation et conservation de fruits et légumes 

 * 138G_C10D - Fabrication d’huiles et graisses végétales et animales 

 * 138G_C10E - Fabrication de produits laitiers 

 * 138G_C10F - Travail des grains ; fabrication de produits amylacés 

 * 138G_C10G - Fabrication de produits de boulangerie-pâtisserie et de pâtes alimentaires 

 * 138G_C10H - Fabrication d'autres produits alimentaires 

 * 138G_C10K - Fabrication d'aliments pour animaux 

 * 138G_C11Z - Fabrication de boissons 

 * 138G_C12Z - Fabrication de produits à base de tabac 

 * _T - Total 
 */
    ACTIVITY: ACTIVITY_code_values ;
}

export interface DDCNABRANCHESAttributes {
  /** Possible values: 
 * P - Valeur provisoire 

 * A - Normale 

 * L - Valeur manquante : les données existent mais ne sont pas collectées (non disponible : nd) 

 * M - Valeur manquante : les données n’existent pas (sans objet : so) 
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

export interface DDCNABRANCHESMeasures {
    OBS_VALUE_NIVEAU: ObsValueNiveau;
}

export interface ObsValueNiveau {
    value: number;
}
