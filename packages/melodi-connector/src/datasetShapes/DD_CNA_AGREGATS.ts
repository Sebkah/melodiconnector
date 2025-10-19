/** Produit Intérieur Brut (PIB) et grands agrégats économiques 
  Le produit intérieur brut (PIB) est le principal agrégat mesurant l'activité économique. Il correspond à la somme des valeurs ajoutées brutes nouvellement créées par les unités productrices résidentes une année donnée, évaluées au prix du marché. Il donne une mesure des richesses nouvelles créées chaque année par le système productif et permet des comparaisons internationales. Le produit intérieur brut est publié à prix courants et en volume aux prix de l'année précédente chaînés. Son évolution en volume (c'est-à-dire hors effet de prix) mesure la croissance économique.

Les grands agrégats économiques associés au PIB sont le revenu national brut (RNB), la capacité ou le besoin de financement de la Nation, les grandes composantes de l'équilibre entre les éléments de l'offre (PIB, importations) et de la demande (consommation, investissement, exportations), la ventilation des facteurs de production (emploi, stock de capital) par secteurs institutionnels (entreprises, ménages, administrations publiques considérés comme producteurs de richesses) et la valeur ajoutée brute qu'ils génèrent.

Les données annuelles des grands agrégats économiques associés au PIB suivent les concepts et méthodes des comptes nationaux en base 2020 (première publication fin mai 2024) et font partie des données à forte valeur désignées par Eurostat (HVD).  
 Gross domestic product (GDP) is the main aggregate measuring economic activity. It corresponds to the sum of gross value added newly created by resident producer units in a given year, valued at market prices. It provides a measure of the new wealth created each year by the productive system and enables international comparisons. Gross domestic product is published at current prices and in volume terms at the previous year's chain-linked prices. Its change in volume (i.e. excluding the price effect) measures economic growth.

The main economic aggregates associated with GDP are gross national income (GNI), the nation's net lending or borrowing, the main components of the balance between supply (GDP, imports) and demand (consumption, investment, exports), the breakdown of factors of production (employment, capital stock) by institutional sector (companies, households, general government considered as wealth producers) and the gross value added they generate.

The annual data for the major economic aggregates associated with GDP are part of the high-value data designated by Eurostat (HVD). 
 */export type DDCNAAGREGATSShape = 
{
  dimensions: DDCNAAGREGATSDimensions;
  attributes: DDCNAAGREGATSAttributes;
  measures: DDCNAAGREGATSMeasures;
}

export const TRANSFORMATION_codes = {
 /** Aucune */ 
 "Aucune_N": "N",
 /** Croissance annuelle de l’indice */ 
 "Croissance_annuelle_de_l’indice_GY_IX": "GY_IX",
 /** Croissance annuelle  */ 
 "Croissance_annuelle__GY": "GY",
 /** Evolution de l’indice en base 100 sur l’année de référence */ 
 "Evolution_de_l’indice_en_base_100_sur_l’année_de_référence_GR_IX": "GR_IX",
 /** Ecart annuel  */ 
 "Ecart_annuel__DY": "DY",
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
 /** Cantines, cafétérias et réfectoires (S) */ 
 "Cantines,_cafétérias_et_réfectoires_(S)_CP1112": "CP1112",
 /** Logement, eau, gaz, électricité et autres combustibles */ 
 "Logement,_eau,_gaz,_électricité_et_autres_combustibles_CP04": "CP04",
 /** Assurances (hors assurance-vie) et services financiers */ 
 "Assurances_(hors_assurance-vie)_et_services_financiers_CP121P_122": "CP121P_122",
 /** Services d’information et de communication */ 
 "Services_d’information_et_de_communication_CP083": "CP083",
 /** Dépense de consommation des ménages */ 
 "Dépense_de_consommation_des_ménages_CPDEP": "CPDEP",
 /** Dépense de consommation finale pré-engagée */ 
 "Dépense_de_consommation_finale_pré-engagée_CPDPE": "CPDPE",
 /** Dépense de consommation autre que pré-engagée */ 
 "Dépense_de_consommation_autre_que_pré-engagée_CPHDPE": "CPHDPE",
} as const;
export type EXPENDITURE_code_values = (typeof EXPENDITURE_codes)[keyof typeof EXPENDITURE_codes]; 
export const STO_codes = {
 /** Production */ 
 "Production_P1": "P1",
 /** Consommation intermédiaire */ 
 "Consommation_intermédiaire_P2": "P2",
 /** Rémunération des salariés */ 
 "Rémunération_des_salariés_D1": "D1",
 /** Valeur ajoutée brute */ 
 "Valeur_ajoutée_brute_B1G": "B1G",
 /** Salaires et traitements bruts */ 
 "Salaires_et_traitements_bruts_D11": "D11",
 /** Excédent brut d’exploitation et revenu mixte brut */ 
 "Excédent_brut_d’exploitation_et_revenu_mixte_brut_B2A3G": "B2A3G",
 /** Dépense de consommation individuelle */ 
 "Dépense_de_consommation_individuelle_P31": "P31",
 /** Excédent brut d’exploitation */ 
 "Excédent_brut_d’exploitation_B2G": "B2G",
 /** Dépense de consommation collective */ 
 "Dépense_de_consommation_collective_P32": "P32",
 /** Consommation finale effective */ 
 "Consommation_finale_effective_P4": "P4",
 /** Formation brute de capital fixe */ 
 "Formation_brute_de_capital_fixe_P51G": "P51G",
 /** Variation des stocks */ 
 "Variation_des_stocks_P52": "P52",
 /** Taux de couverture */ 
 "Taux_de_couverture__TC": "_TC",
 /** Exportations de biens et services */ 
 "Exportations_de_biens_et_services_P6": "P6",
 /** Importations de biens et services */ 
 "Importations_de_biens_et_services_P7": "P7",
 /** Solde des échanges extérieurs de biens et services */ 
 "Solde_des_échanges_extérieurs_de_biens_et_services_B11": "B11",
 /** Dépense de consommation finale */ 
 "Dépense_de_consommation_finale_P3": "P3",
 /** Taux d’investissement */ 
 "Taux_d’investissement__TI": "_TI",
 /** Acquisitions moins cessions d’objets de valeur */ 
 "Acquisitions_moins_cessions_d’objets_de_valeur_P53": "P53",
 /** Rémunérations des salariés / valeur ajoutée brute */ 
 "Rémunérations_des_salariés_/_valeur_ajoutée_brute__REM": "_REM",
 /** Cotisations sociales effectives à la charge des employeurs */ 
 "Cotisations_sociales_effectives_à_la_charge_des_employeurs_D121": "D121",
 /** Impôts sur les produits */ 
 "Impôts_sur_les_produits_D21": "D21",
 /** Cotisations sociales imputées à la charge des employeurs */ 
 "Cotisations_sociales_imputées_à_la_charge_des_employeurs_D122": "D122",
 /** Impôts sur la production / valeur ajoutée brute */ 
 "Impôts_sur_la_production_/_valeur_ajoutée_brute__IMP": "_IMP",
 /** Autres impôts sur la production */ 
 "Autres_impôts_sur_la_production_D29": "D29",
 /** Impôts sur les salaires et la main d’œuvre */ 
 "Impôts_sur_les_salaires_et_la_main_d’œuvre_D291": "D291",
 /** Impôts sur la production et les importations */ 
 "Impôts_sur_la_production_et_les_importations_D2": "D2",
 /** Impôts divers sur la production */ 
 "Impôts_divers_sur_la_production_D292": "D292",
 /** Subventions */ 
 "Subventions_D3": "D3",
 /** Subventions sur les produits */ 
 "Subventions_sur_les_produits_D31": "D31",
 /** Autres subventions sur la production */ 
 "Autres_subventions_sur_la_production_D39": "D39",
 /** Total des emplois  */ 
 "Total_des_emplois__TS_CE": "TS_CE",
 /** Total des charges */ 
 "Total_des_charges_TC_CE": "TC_CE",
 /** Total des ressources */ 
 "Total_des_ressources_TU_CE": "TU_CE",
 /** Produit intérieur brut */ 
 "Produit_intérieur_brut_B1GQ": "B1GQ",
 /** Part de la valeur ajoutée des ei dans la valeur ajoutée totale des enf */ 
 "Part_de_la_valeur_ajoutée_des_ei_dans_la_valeur_ajoutée_totale_des_enf__PART_VAENF": "_PART_VAENF",
 /** Taux de marge */ 
 "Taux_de_marge__TM1": "_TM1",
 /** Revenu mixte brut */ 
 "Revenu_mixte_brut_B3G": "B3G",
 /** Revenu mixte brut des ei / excédent brut d’exploitation et revenu mixte brut des enf */ 
 "Revenu_mixte_brut_des_ei_/_excédent_brut_d’exploitation_et_revenu_mixte_brut_des_enf__REVENU": "_REVENU",
 /** Taux de marge */ 
 "Taux_de_marge__TM2": "_TM2",
 /** Revenu national brut */ 
 "Revenu_national_brut_B5GQ": "B5GQ",
 /** Revenu national brut par habitant */ 
 "Revenu_national_brut_par_habitant__RNB_HABITANT": "_RNB_HABITANT",
 /** Revenu national disponible brut */ 
 "Revenu_national_disponible_brut_B6GQ": "B6GQ",
 /** Taux d’autofinancement */ 
 "Taux_d’autofinancement__TAF": "_TAF",
 /** Taux d’épargne des entreprises */ 
 "Taux_d’épargne_des_entreprises__TX_EE": "_TX_EE",
 /** Capacité (+) ou besoin (-) de financement */ 
 "Capacité_(+)_ou_besoin_(-)_de_financement_B9": "B9",
 /** Part des cantines dans le revenu disponible brut */ 
 "Part_des_cantines_dans_le_revenu_disponible_brut__CANTINE_REVENU": "_CANTINE_REVENU",
 /** Part de la dépense liée au logement dans le revenu disponible brut */ 
 "Part_de_la_dépense_liée_au_logement_dans_le_revenu_disponible_brut__DEP_LOGT_REVENU": "_DEP_LOGT_REVENU",
 /** Part des assurances (hors assurance-vie) et services financiers dans le revenu disponible brut */ 
 "Part_des_assurances_(hors_assurance-vie)_et_services_financiers_dans_le_revenu_disponible_brut__ASSUR_REVENU": "_ASSUR_REVENU",
 /** Part des services de télévision et de télécommunications dans le revenu disponible brut */ 
 "Part_des_services_de_télévision_et_de_télécommunications_dans_le_revenu_disponible_brut__TELE_REVENU": "_TELE_REVENU",
 /** Part de la dépense pré-engagée dans le revenu disponible brut */ 
 "Part_de_la_dépense_pré-engagée_dans_le_revenu_disponible_brut__DEP_REVENU": "_DEP_REVENU",
 /** Part de la dépense pré-engagée dans la dépense de consommation finale des ménages */ 
 "Part_de_la_dépense_pré-engagée_dans_la_dépense_de_consommation_finale_des_ménages__DEP_CONSO": "_DEP_CONSO",
 /** Coefficient budgétaire */ 
 "Coefficient_budgétaire__COEFF_BUDG": "_COEFF_BUDG",
 /** Coefficient budgétaire */ 
 "Coefficient_budgétaire__COEFF_BUDG_P31": "_COEFF_BUDG_P31",
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
 /** Production marchande, production pour emploi final propre et paiements au titre de la production non marchande */ 
 "Production_marchande,_production_pour_emploi_final_propre_et_paiements_au_titre_de_la_production_non_marchande_P1O": "P1O",
 /** Production marchande et production pour usage final propre */ 
 "Production_marchande_et_production_pour_usage_final_propre_P1M": "P1M",
 /** Paiements au titre de la production non marchande */ 
 "Paiements_au_titre_de_la_production_non_marchande_P131": "P131",
 /** Autre production non marchande */ 
 "Autre_production_non_marchande_P132": "P132",
 /** Variation stocks + Acquis, moins cessions objets valeur (OPP52+OPP53) */ 
 "Variation_stocks_+_Acquis,_moins_cessions_objets_valeur_(OPP52+OPP53)_P5M": "P5M",
 /** Impôts en capital */ 
 "Impôts_en_capital_D91": "D91",
 /** Contribution à l’évolution du PIB de la dépense de consommation finale */ 
 "Contribution_à_l’évolution_du_PIB_de_la_dépense_de_consommation_finale_CONTRIB_PIB_P3": "CONTRIB_PIB_P3",
 /** Contribution à l’évolution du PIB de la dépense de consommation individuelle */ 
 "Contribution_à_l’évolution_du_PIB_de_la_dépense_de_consommation_individuelle_CONTRIB_PIB_P31": "CONTRIB_PIB_P31",
 /** Contribution à l’évolution du PIB de la dépense de consommation collective */ 
 "Contribution_à_l’évolution_du_PIB_de_la_dépense_de_consommation_collective_CONTRIB_PIB_P32": "CONTRIB_PIB_P32",
 /** Formation brute de capital/Formation nette de capital */ 
 "Formation_brute_de_capital/Formation_nette_de_capital_P5": "P5",
 /** Contribution à l’évolution du PIB de la FBCF */ 
 "Contribution_à_l’évolution_du_PIB_de_la_FBCF_CONTRIB_PIB_P51G": "CONTRIB_PIB_P51G",
 /** Contribution à l’évolution du PIB de la variation des stocks */ 
 "Contribution_à_l’évolution_du_PIB_de_la_variation_des_stocks_CONTRIB_PIB_P52": "CONTRIB_PIB_P52",
 /** Contribution à l’évolution du PIB des acquisitions moins cessions d’objets de valeur */ 
 "Contribution_à_l’évolution_du_PIB_des_acquisitions_moins_cessions_d’objets_de_valeur_CONTRIB_PIB_P53": "CONTRIB_PIB_P53",
 /** Contribution à l’évolution du PIB du solde des exportations */ 
 "Contribution_à_l’évolution_du_PIB_du_solde_des_exportations_CONTRIB_PIB_P6": "CONTRIB_PIB_P6",
 /** Contribution à l’évolution du PIB du solde des importations */ 
 "Contribution_à_l’évolution_du_PIB_du_solde_des_importations_CONTRIB_PIB_P7": "CONTRIB_PIB_P7",
 /** Total de la demande intérieure en produits */ 
 "Total_de_la_demande_intérieure_en_produits_DINT": "DINT",
 /** Demande intérieure hors stocks */ 
 "Demande_intérieure_hors_stocks_DINT_S": "DINT_S",
 /** Total des emplois finaux */ 
 "Total_des_emplois_finaux_TFU": "TFU",
 /** Total ressources prix de base */ 
 "Total_ressources_prix_de_base_TSBP": "TSBP",
 /** Cotisations sociales à la charge des employeurs */ 
 "Cotisations_sociales_à_la_charge_des_employeurs_D12": "D12",
 /** Impôts sur production et importations, moins subventions (D2+D3) */ 
 "Impôts_sur_production_et_importations,_moins_subventions_(D2+D3)_D2X3": "D2X3",
 /** PIB par habitant */ 
 "PIB_par_habitant__PIB_HABITANT": "_PIB_HABITANT",
 /** Variation du PIB */ 
 "Variation_du_PIB_CONTRIB_PIB_B1GQ": "CONTRIB_PIB_B1GQ",
 /** Revenu national brut en termes réels */ 
 "Revenu_national_brut_en_termes_réels__RNB_REEL": "_RNB_REEL",
 /** Contribution à l’évolution du PIB du solde des échanges extérieurs */ 
 "Contribution_à_l’évolution_du_PIB_du_solde_des_échanges_extérieurs_CONTRIB_PIB_B11": "CONTRIB_PIB_B11",
 /** Revenu national brut en termes réels par habitant */ 
 "Revenu_national_brut_en_termes_réels_par_habitant__RNB_REEL_HABITANT": "_RNB_REEL_HABITANT",
 /** Formation brute de capital/Formation nette de capital en autres changements de volume et ajustements */ 
 "Formation_brute_de_capital/Formation_nette_de_capital_en_autres_changements_de_volume_et_ajustements_KA_P5": "KA_P5",
 /** Formation brute de capital/Formation nette de capital en gains/pertes nominaux de détention */ 
 "Formation_brute_de_capital/Formation_nette_de_capital_en_gains/pertes_nominaux_de_détention_K7_P5": "K7_P5",
 /** Formation brute de capital fixe en gains/pertes nominaux de détention */ 
 "Formation_brute_de_capital_fixe_en_gains/pertes_nominaux_de_détention_K7_P51G": "K7_P51G",
 /** Variation des stocks en autres changements de volume et ajustements */ 
 "Variation_des_stocks_en_autres_changements_de_volume_et_ajustements_KA_P52": "KA_P52",
 /** Variation des stocks en gains/pertes nominaux de détention */ 
 "Variation_des_stocks_en_gains/pertes_nominaux_de_détention_K7_P52": "K7_P52",
 /** Acquisitions moins cessions d’objets de valeur en gains/pertes nominaux de détention */ 
 "Acquisitions_moins_cessions_d’objets_de_valeur_en_gains/pertes_nominaux_de_détention_K7_P53": "K7_P53",
 /** Clôture du bilan/positions/flux */ 
 "Clôture_du_bilan/positions/flux_LE": "LE",
 /** Population */ 
 "Population_POP": "POP",
 /** Moyenne annuelle de la population en France métropolitaine */ 
 "Moyenne_annuelle_de_la_population_en_France_métropolitaine_POPM": "POPM",
 /** Moyenne annuelle du nombre de ménages en France entière */ 
 "Moyenne_annuelle_du_nombre_de_ménages_en_France_entière_MENF": "MENF",
 /** Moyenne annuelle du nombre de ménages en France métropolitaine */ 
 "Moyenne_annuelle_du_nombre_de_ménages_en_France_métropolitaine_MENM": "MENM",
 /** Unités de consommation */ 
 "Unités_de_consommation_UC": "UC",
 /** Pouvoir d’achat du rdb des ménages */ 
 "Pouvoir_d’achat_du_rdb_des_ménages__PAM": "_PAM",
 /** Pouvoir d’achat du rdb arbitrable des ménages */ 
 "Pouvoir_d’achat_du_rdb_arbitrable_des_ménages__PAA": "_PAA",
 /** Autres acquisitions moins cessions d’actifs non financiers */ 
 "Autres_acquisitions_moins_cessions_d’actifs_non_financiers_P5K": "P5K",
 /** Revenus salariaux et sociaux */ 
 "Revenus_salariaux_et_sociaux_RSS": "RSS",
 /** Salaires et traitements nets */ 
 "Salaires_et_traitements_nets_D11X613CE": "D11X613CE",
 /** Revenus de la propriété */ 
 "Revenus_de_la_propriété_D4": "D4",
 /** Impôts courants sur le revenu, le patrimoine, etc. */ 
 "Impôts_courants_sur_le_revenu,_le_patrimoine,_etc._D5": "D5",
 /** Cotisations sociales nettes */ 
 "Cotisations_sociales_nettes_D61": "D61",
 /** Cotisations sociales effectives obligatoires à la charge des salariés */ 
 "Cotisations_sociales_effectives_obligatoires_à_la_charge_des_salariés_D613CE": "D613CE",
 /** Cotisations des non salariés */ 
 "Cotisations_des_non_salariés_D613NSI": "D613NSI",
 /** Prestations sociales autres que transferts sociaux en nature */ 
 "Prestations_sociales_autres_que_transferts_sociaux_en_nature_D62": "D62",
 /** Transferts sociaux en nature */ 
 "Transferts_sociaux_en_nature_D63": "D63",
 /** Autres transferts courants */ 
 "Autres_transferts_courants_D7": "D7",
 /** Transferts en capital à payer */ 
 "Transferts_en_capital_à_payer_D9P": "D9P",
 /** Transferts en capital à recevoir */ 
 "Transferts_en_capital_à_recevoir_D9R": "D9R",
 /** Dépense de consommation finale pré-engagée */ 
 "Dépense_de_consommation_finale_pré-engagée_P3_DPE": "P3_DPE",
 /** Dépense de consommation finale autre que pré-engagée */ 
 "Dépense_de_consommation_finale_autre_que_pré-engagée_P3_H_DPE": "P3_H_DPE",
 /** Solde des transferts sociaux et fiscaux */ 
 "Solde_des_transferts_sociaux_et_fiscaux_TSF": "TSF",
 /** Solde brut des revenus primaires */ 
 "Solde_brut_des_revenus_primaires_B5G": "B5G",
 /** Revenu disponible brut */ 
 "Revenu_disponible_brut_B6G": "B6G",
 /** Revenu disponible brut ajusté */ 
 "Revenu_disponible_brut_ajusté_B7G": "B7G",
 /** Épargne brute */ 
 "Épargne_brute_B8G": "B8G",
 /** Taux d’épargne des ménages */ 
 "Taux_d’épargne_des_ménages__TEM": "_TEM",
 /** Taux d’épargne financière des ménages */ 
 "Taux_d’épargne_financière_des_ménages__TEFM": "_TEFM",
 /** Transferts en capital reçus diminués des transferts versés */ 
 "Transferts_en_capital_reçus_diminués_des_transferts_versés_D9PXR": "D9PXR",
 /** Revenus de la propriété reçus diminués des revenus versés */ 
 "Revenus_de_la_propriété_reçus_diminués_des_revenus_versés_D4NET": "D4NET",
 /** Revenu disponible arbitrable */ 
 "Revenu_disponible_arbitrable_RARBI": "RARBI",
 /** Solde des transferts courants (reçus moins versés) */ 
 "Solde_des_transferts_courants_(reçus_moins_versés)_TRANSF_COURANT": "TRANSF_COURANT",
 /** Pouvoir d’achat du rdb arbitrable par unité de consommation */ 
 "Pouvoir_d’achat_du_rdb_arbitrable_par_unité_de_consommation__PAA_UC": "_PAA_UC",
 /** Pouvoir d’achat du rdb arbitrable par ménage */ 
 "Pouvoir_d’achat_du_rdb_arbitrable_par_ménage__PAA_MENAGE": "_PAA_MENAGE",
 /** Pouvoir d’achat du rdb arbitrable par personne */ 
 "Pouvoir_d’achat_du_rdb_arbitrable_par_personne__PAA_PERSONNE": "_PAA_PERSONNE",
 /** Pouvoir d’achat du rdb par ménage */ 
 "Pouvoir_d’achat_du_rdb_par_ménage__PAM_MENAGE": "_PAM_MENAGE",
 /** Pouvoir d’achat du rdb par personne */ 
 "Pouvoir_d’achat_du_rdb_par_personne__PAM_PERSONNE": "_PAM_PERSONNE",
 /** Pouvoir d’achat du rdb par unité de consommation */ 
 "Pouvoir_d’achat_du_rdb_par_unité_de_consommation__PAM_UC": "_PAM_UC",
 /** Dépense de consommation individuelle Biens durables */ 
 "Dépense_de_consommation_individuelle_Biens_durables_P311": "P311",
 /** Dépense de consommation individuelle Biens semi-durables */ 
 "Dépense_de_consommation_individuelle_Biens_semi-durables_P312": "P312",
 /** Dépense de consommation individuelle Biens non durables */ 
 "Dépense_de_consommation_individuelle_Biens_non_durables_P313": "P313",
 /** Dépense de consommation individuelle Services */ 
 "Dépense_de_consommation_individuelle_Services_P314": "P314",
 /** Dépense de consommation individuelle Total hors biens durables */ 
 "Dépense_de_consommation_individuelle_Total_hors_biens_durables_P31K": "P31K",
 /** Consommation individuelle effective */ 
 "Consommation_individuelle_effective_P41": "P41",
 /** Exportations de biens */ 
 "Exportations_de_biens_P61": "P61",
 /** Exportation de services */ 
 "Exportation_de_services_P62": "P62",
 /** Importations de biens */ 
 "Importations_de_biens_P71": "P71",
 /** Importations de services */ 
 "Importations_de_services_P72": "P72",
 /** Impôts moins subventions sur les produits (D21+D31) */ 
 "Impôts_moins_subventions_sur_les_produits_(D21+D31)_D21X31": "D21X31",
 /** Consommation de capital fixe */ 
 "Consommation_de_capital_fixe_P51C": "P51C",
 /** Autres impôts sur la production moins autres subventions sur la production */ 
 "Autres_impôts_sur_la_production_moins_autres_subventions_sur_la_production_D29X39": "D29X39",
 /** Excédent d’exploitation/revenu mixte net de CCF */ 
 "Excédent_d’exploitation/revenu_mixte_net_de_CCF_B2A3N": "B2A3N",
 /** Production marchande */ 
 "Production_marchande_P11": "P11",
 /** Production pour usage final propre */ 
 "Production_pour_usage_final_propre_P12": "P12",
 /** Production non marchande */ 
 "Production_non_marchande_P13": "P13",
 /** Acquisitions moins cessions d’actifs non produits */ 
 "Acquisitions_moins_cessions_d’actifs_non_produits_NP": "NP",
 /** Taxes de type TVA */ 
 "Taxes_de_type_TVA_D211": "D211",
 /** Impôts et droits sur les importations, à l’exclusion de la TVA */ 
 "Impôts_et_droits_sur_les_importations,_à_l’exclusion_de_la_TVA_D212": "D212",
 /** Impôts sur les produits, à l‘exclusion de la TVA et des impôts sur les importations */ 
 "Impôts_sur_les_produits,_à_l‘exclusion_de_la_TVA_et_des_impôts_sur_les_importations_D214": "D214",
 /** Subventions sur rémunérations */ 
 "Subventions_sur_rémunérations_D391": "D391",
 /** Bonifications d’intérêts */ 
 "Bonifications_d’intérêts_D392": "D392",
 /** Autres subventions d’exploitation */ 
 "Autres_subventions_d’exploitation_D399": "D399",
 /** Intérêts */ 
 "Intérêts_D41": "D41",
 /** Revenus distribués des sociétés */ 
 "Revenus_distribués_des_sociétés_D42": "D42",
 /** Dividendes */ 
 "Dividendes_D421": "D421",
 /** Prélèvements sur les revenus des quasi-sociétés */ 
 "Prélèvements_sur_les_revenus_des_quasi-sociétés_D422": "D422",
 /** Bénéfices réinvestis d’investissements directs étrangers */ 
 "Bénéfices_réinvestis_d’investissements_directs_étrangers_D43": "D43",
 /** Revenus d’investissements */ 
 "Revenus_d’investissements_D44": "D44",
 /** Loyers */ 
 "Loyers_D45": "D45",
 /** Impôts sur le revenu */ 
 "Impôts_sur_le_revenu_D51": "D51",
 /** Autres impôts courants */ 
 "Autres_impôts_courants_D59": "D59",
 /** Cotisations sociales effectives à la charge des employeurs */ 
 "Cotisations_sociales_effectives_à_la_charge_des_employeurs_D611": "D611",
 /** Cotisations sociales imputées à la charge des employeurs */ 
 "Cotisations_sociales_imputées_à_la_charge_des_employeurs_D612": "D612",
 /** Cotisations sociales effectives à la charge des ménages */ 
 "Cotisations_sociales_effectives_à_la_charge_des_ménages_D613": "D613",
 /** Cotisations sociales effectives à la charge des travailleurs indépendants */ 
 "Cotisations_sociales_effectives_à_la_charge_des_travailleurs_indépendants_D613CS": "D613CS",
 /** Suppléments de cotisations sociales à la charge des ménages */ 
 "Suppléments_de_cotisations_sociales_à_la_charge_des_ménages_D614": "D614",
 /** Rémunération du service des régimes d’assurance sociale */ 
 "Rémunération_du_service_des_régimes_d’assurance_sociale_D61SC": "D61SC",
 /** Prestations de sécurité sociale en espèces */ 
 "Prestations_de_sécurité_sociale_en_espèces_D621": "D621",
 /** Autres prestations d’assurance sociale */ 
 "Autres_prestations_d’assurance_sociale_D622": "D622",
 /** Prestations d’assurance sociale en espèces */ 
 "Prestations_d’assurance_sociale_en_espèces_D623": "D623",
 /** Transferts sociaux en nature – production non marchande */ 
 "Transferts_sociaux_en_nature_–_production_non_marchande_D631": "D631",
 /** Transferts sociaux en nature – production marchande achetée */ 
 "Transferts_sociaux_en_nature_–_production_marchande_achetée_D632": "D632",
 /** Autres transferts courants (voir note) */ 
 "Autres_transferts_courants_(voir_note)_D7S": "D7S",
 /** Primes nettes d’assurance-dommages */ 
 "Primes_nettes_d’assurance-dommages_D71": "D71",
 /** Indemnités d’assurance-dommages */ 
 "Indemnités_d’assurance-dommages_D72": "D72",
 /** Transferts courants entre administrations publiques */ 
 "Transferts_courants_entre_administrations_publiques_D73": "D73",
 /** Transferts courants entre sous-secteurs des apu */ 
 "Transferts_courants_entre_sous-secteurs_des_apu_D731": "D731",
 /** Coopération internationale courante */ 
 "Coopération_internationale_courante_D74": "D74",
 /** Transferts courants internes aux sous-secteurs des apu */ 
 "Transferts_courants_internes_aux_sous-secteurs_des_apu_D732": "D732",
 /** Transferts de recettes fiscales */ 
 "Transferts_de_recettes_fiscales_D733": "D733",
 /** Transferts courants entre administrations publiques (solde) (voir note) */ 
 "Transferts_courants_entre_administrations_publiques_(solde)_(voir_note)_D73S": "D73S",
 /** Transferts courants divers */ 
 "Transferts_courants_divers_D75": "D75",
 /** Transferts courants aux ISBLSM */ 
 "Transferts_courants_aux_ISBLSM_D751": "D751",
 /** Transferts courants entre ménages */ 
 "Transferts_courants_entre_ménages_D752": "D752",
 /** Autres transferts courants divers */ 
 "Autres_transferts_courants_divers_D759": "D759",
 /** Ressources propres de l’UE fondées sur la TVA et le RNB */ 
 "Ressources_propres_de_l’UE_fondées_sur_la_TVA_et_le_RNB_D76": "D76",
 /** Ajustement pour variation des droits à pension */ 
 "Ajustement_pour_variation_des_droits_à_pension_D8": "D8",
 /** Impôts en capital à payer */ 
 "Impôts_en_capital_à_payer_D91P": "D91P",
 /** Impôts en capital à recevoir */ 
 "Impôts_en_capital_à_recevoir_D91R": "D91R",
 /** Aides à l’investissement à payer */ 
 "Aides_à_l’investissement_à_payer_D92P": "D92P",
 /** Aides à l’investissement à recevoir */ 
 "Aides_à_l’investissement_à_recevoir_D92R": "D92R",
 /** Autres transferts en capital à payer */ 
 "Autres_transferts_en_capital_à_payer_D99P": "D99P",
 /** Autres transferts en capital à recevoir */ 
 "Autres_transferts_en_capital_à_recevoir_D99R": "D99R",
 /** Valeur ajoutée nette de CCF */ 
 "Valeur_ajoutée_nette_de_CCF_B1N": "B1N",
 /** Excédent d’exploitation net de CCF */ 
 "Excédent_d’exploitation_net_de_CCF_B2N": "B2N",
 /** Revenu mixte net de CCF */ 
 "Revenu_mixte_net_de_CCF_B3N": "B3N",
 /** Solde des revenus primaires net de CCF */ 
 "Solde_des_revenus_primaires_net_de_CCF_B5N": "B5N",
 /** Revenu disponible net de CCF */ 
 "Revenu_disponible_net_de_CCF_B6N": "B6N",
 /** Revenu disponible ajusté net de CCF */ 
 "Revenu_disponible_ajusté_net_de_CCF_B7N": "B7N",
 /** Épargne brute net de CCF */ 
 "Épargne_brute_net_de_CCF_B8N": "B8N",
 /** Solde des opérations courantes avec l’extérieur */ 
 "Solde_des_opérations_courantes_avec_l’extérieur_B12": "B12",
 /** Divergence statistique */ 
 "Divergence_statistique_YA2": "YA2",
 /** Divergence statistique (approche par la production) */ 
 "Divergence_statistique_(approche_par_la_production)_YA1": "YA1",
 /** Divergence statistique (approche par les dépenses) */ 
 "Divergence_statistique_(approche_par_les_dépenses)_YA0": "YA0",
 /** Exportation de SIFIM */ 
 "Exportation_de_SIFIM_P62F": "P62F",
 /** Importations de SIFIM */ 
 "Importations_de_SIFIM_P72F": "P72F",
 /** Droits sur les importations */ 
 "Droits_sur_les_importations_D2121": "D2121",
 /** Impôts sur les importations, à l’exclusion de la TVA et des droits sur les importations */ 
 "Impôts_sur_les_importations,_à_l’exclusion_de_la_TVA_et_des_droits_sur_les_importations_D2122": "D2122",
 /** Intérêts bruts de correction SIFIM */ 
 "Intérêts_bruts_de_correction_SIFIM_D41G": "D41G",
 /** Revenus d’investissements attribués aux assurés */ 
 "Revenus_d’investissements_attribués_aux_assurés_D441": "D441",
 /** Revenus d’investissements à payer sur les droits de pension */ 
 "Revenus_d’investissements_à_payer_sur_les_droits_de_pension_D442": "D442",
 /** Revenus d’investissements attribués aux détenteurs de parts de fonds d’investissement */ 
 "Revenus_d’investissements_attribués_aux_détenteurs_de_parts_de_fonds_d’investissement_D443": "D443",
 /** Cotisations et prestations sociales */ 
 "Cotisations_et_prestations_sociales_D6": "D6",
 /** Cotisations sociales effectives à la charge des personnes n’occupant pas un emploi */ 
 "Cotisations_sociales_effectives_à_la_charge_des_personnes_n’occupant_pas_un_emploi_D613CN": "D613CN",
 /** Cotisations sociales effectives volontaires des ménages */ 
 "Cotisations_sociales_effectives_volontaires_des_ménages_D613V": "D613V",
 /** Aides à l’investissement */ 
 "Aides_à_l’investissement_D92": "D92",
 /** Autres transferts en capital */ 
 "Autres_transferts_en_capital_D99": "D99",
 /** Total des recettes fiscales */ 
 "Total_des_recettes_fiscales_ODA": "ODA",
 /** Produit total des impôts et cotisations sociales après déduction des montants dus non recouvrables */ 
 "Produit_total_des_impôts_et_cotisations_sociales_après_déduction_des_montants_dus_non_recouvrables_ODB": "ODB",
 /** Charge fiscale = produit total des impôts et cotisations sociales obligatoires après déduction des montants dus non recouvrables */ 
 "Charge_fiscale_=_produit_total_des_impôts_et_cotisations_sociales_obligatoires_après_déduction_des_montants_dus_non_recouvrables_ODD": "ODD",
 /** Produit intérieur net de CCF */ 
 "Produit_intérieur_net_de_CCF_B1NQ": "B1NQ",
 /** Produit total des impôts et cotisations sociales nettes (y compris cotisations sociales imputées) après déduction des montants dus non recouvrables */ 
 "Produit_total_des_impôts_et_cotisations_sociales_nettes_(y_compris_cotisations_sociales_imputées)_après_déduction_des_montants_dus_non_recouvrables_ODC": "ODC",
 /** Revenu d’entreprise brut */ 
 "Revenu_d’entreprise_brut_B4G": "B4G",
 /** Revenu national net */ 
 "Revenu_national_net_B5NQ": "B5NQ",
 /** Écart entre capacité ou besoin de financement et solde des flux nets d’actifs et passifs financiers (B9NF – B9F) */ 
 "Écart_entre_capacité_ou_besoin_de_financement_et_solde_des_flux_nets_d’actifs_et_passifs_financiers_(B9NF_–_B9F)_B9FX9": "B9FX9",
 /** Variations de la valeur nette due à l’épargne et aux transferts de capital */ 
 "Variations_de_la_valeur_nette_due_à_l’épargne_et_aux_transferts_de_capital_B101": "B101",
 /** Variation valeur nette dues aux changements de volume et ajustement */ 
 "Variation_valeur_nette_dues_aux_changements_de_volume_et_ajustement_B102": "B102",
 /** Variation valeur nette dues aux réévaluations */ 
 "Variation_valeur_nette_dues_aux_réévaluations_B103": "B103",
 /** Coefficient technique */ 
 "Coefficient_technique__COEFF_TECHNIQUE": "_COEFF_TECHNIQUE",
 /** Marges de commerce */ 
 "Marges_de_commerce_OTTM1": "OTTM1",
 /** Marges de transport */ 
 "Marges_de_transport_OTTM2": "OTTM2",
 /** Total ressources prix d’acquisition */ 
 "Total_ressources_prix_d’acquisition_TSPP": "TSPP",
 /** Impôts sur le revenu des personnes physiques ou des ménages, y compris les gains de détention (D51a + D51c1) */ 
 "Impôts_sur_le_revenu_des_personnes_physiques_ou_des_ménages,_y_compris_les_gains_de_détention_(D51a_+_D51c1)_D51M": "D51M",
 /** Impôts sur le revenu ou les bénéfices des sociétés, y compris les gains de détention (D51b + D51c2) */ 
 "Impôts_sur_le_revenu_ou_les_bénéfices_des_sociétés,_y_compris_les_gains_de_détention_(D51b_+_D51c2)_D51O": "D51O",
 /** Transferts en capital pour admissions en non valeur */ 
 "Transferts_en_capital_pour_admissions_en_non_valeur_D995": "D995",
 /** Déficit au sens de Maastricht en points de PIB */ 
 "Déficit_au_sens_de_Maastricht_en_points_de_PIB__MA_PPIB": "_MA_PPIB",
 /** Déficit au sens de Maastricht */ 
 "Déficit_au_sens_de_Maastricht_MA": "MA",
 /** Production pour usage final propre, coût imputable à la rémunération des salariés (finalité GFSM) */ 
 "Production_pour_usage_final_propre,_coût_imputable_à_la_rémunération_des_salariés_(finalité_GFSM)_P12_GFSM_D1": "P12_GFSM_D1",
 /** Production pour usage final propre, coût imputable à la consommation intermédiaire (finalité GFSM) */ 
 "Production_pour_usage_final_propre,_coût_imputable_à_la_consommation_intermédiaire_(finalité_GFSM)_P12_GFSM_P2": "P12_GFSM_P2",
 /** Production pour usage final propre, coût imputable à la consommation de capital fixe (finalité GFSM) */ 
 "Production_pour_usage_final_propre,_coût_imputable_à_la_consommation_de_capital_fixe_(finalité_GFSM)_P12_GFSM_P51C": "P12_GFSM_P51C",
 /** Partie des crédits d’impôts qui excède les créances des contribuables */ 
 "Partie_des_crédits_d’impôts_qui_excède_les_créances_des_contribuables_TC": "TC",
 /** Subventions sur les produits à payer */ 
 "Subventions_sur_les_produits_à_payer_D31P": "D31P",
 /** Total des crédits d’impôts à payer */ 
 "Total_des_crédits_d’impôts_à_payer_PTC": "PTC",
 /** Prestations sociales en espèces et en nature de produits marchands */ 
 "Prestations_sociales_en_espèces_et_en_nature_de_produits_marchands_D6M": "D6M",
 /** Acquisition nette d’actifs non financiers */ 
 "Acquisition_nette_d’actifs_non_financiers_P5L": "P5L",
 /** Autres subventions sur la production à payer */ 
 "Autres_subventions_sur_la_production_à_payer_D39P": "D39P",
 /** Subventions à payer (signe positif, pour la déclaration dans la présentation des SFP) */ 
 "Subventions_à_payer_(signe_positif,_pour_la_déclaration_dans_la_présentation_des_SFP)_D3P": "D3P",
 /** Autres subventions sur la production à recevoir */ 
 "Autres_subventions_sur_la_production_à_recevoir_D39R": "D39R",
 /** Montants compensatoires monétaires prélevés a l’importation */ 
 "Montants_compensatoires_monétaires_prélevés_a_l’importation_D2122B": "D2122B",
 /** Droits d’accise */ 
 "Droits_d’accise_D2122C": "D2122C",
 /** Droits d’accise et taxes à la consommation */ 
 "Droits_d’accise_et_taxes_à_la_consommation_D214A": "D214A",
 /** Droits de timbre */ 
 "Droits_de_timbre_D214B": "D214B",
 /** Impôts sur les opérations financières et les opérations en capital */ 
 "Impôts_sur_les_opérations_financières_et_les_opérations_en_capital_D214C": "D214C",
 /** Taxe sur les certificats d’immatriculation des véhicules */ 
 "Taxe_sur_les_certificats_d’immatriculation_des_véhicules_D214D": "D214D",
 /** Taxes sur les spectacles et divertissements */ 
 "Taxes_sur_les_spectacles_et_divertissements_D214E": "D214E",
 /** Taxes sur les loteries, les jeux et les paris */ 
 "Taxes_sur_les_loteries,_les_jeux_et_les_paris_D214F": "D214F",
 /** Taxes sur les primes d’assurance */ 
 "Taxes_sur_les_primes_d’assurance_D214G": "D214G",
 /** Autres impôts sur des services détermines */ 
 "Autres_impôts_sur_des_services_détermines_D214H": "D214H",
 /** Impôts généraux sur les ventes ou le chiffre d’affaires */ 
 "Impôts_généraux_sur_les_ventes_ou_le_chiffre_d’affaires_D214I": "D214I",
 /** Autres impôts sur les produits n,c,a, */ 
 "Autres_impôts_sur_les_produits_n,c,a,_D214L": "D214L",
 /** Impôts fonciers, impôts immobiliers ou impôts sur d’autres structures */ 
 "Impôts_fonciers,_impôts_immobiliers_ou_impôts_sur_d’autres_structures_D29A": "D29A",
 /** Impôts sur l’utilisation d’actifs fixes */ 
 "Impôts_sur_l’utilisation_d’actifs_fixes_D29B": "D29B",
 /** Total des impôts sur la masse salariale */ 
 "Total_des_impôts_sur_la_masse_salariale_D29C": "D29C",
 /** Patentes et licences */ 
 "Patentes_et_licences_D29E": "D29E",
 /** Impôts sur la pollution */ 
 "Impôts_sur_la_pollution_D29F": "D29F",
 /** Autres impôts nets sur la production n,c,a, */ 
 "Autres_impôts_nets_sur_la_production_n,c,a,_D29H": "D29H",
 /** Impôts sur le revenu des personnes physiques ou des ménages, a l’exclusion des gains de détention */ 
 "Impôts_sur_le_revenu_des_personnes_physiques_ou_des_ménages,_a_l’exclusion_des_gains_de_détention_D51A": "D51A",
 /** Impôts sur le revenu ou les bénéfices des sociétés a l’exclusion des gains de détention */ 
 "Impôts_sur_le_revenu_ou_les_bénéfices_des_sociétés_a_l’exclusion_des_gains_de_détention_D51B": "D51B",
 /** Autres impôts sur le revenu n,c,a, */ 
 "Autres_impôts_sur_le_revenu_n,c,a,_D51E": "D51E",
 /** Impôts courants sur le capital */ 
 "Impôts_courants_sur_le_capital_D59A": "D59A",
 /** Paiements effectués par les ménages en vue de l’obtention de licences */ 
 "Paiements_effectués_par_les_ménages_en_vue_de_l’obtention_de_licences_D59D": "D59D",
 /** Autres impôts courants n,c,a, */ 
 "Autres_impôts_courants_n,c,a,_D59F": "D59F",
 /** Cotisations sociales effectives obligatoires à la charge des employeurs */ 
 "Cotisations_sociales_effectives_obligatoires_à_la_charge_des_employeurs_D611C": "D611C",
 /** Cotisations sociales effectives obligatoires à la charge des ménages */ 
 "Cotisations_sociales_effectives_obligatoires_à_la_charge_des_ménages_D613C": "D613C",
 /** Transferts en capital */ 
 "Transferts_en_capital_D9": "D9",
 /** Impôts sur les transferts en capital */ 
 "Impôts_sur_les_transferts_en_capital_D91A": "D91A",
 /** Prélèvements sur le capital */ 
 "Prélèvements_sur_le_capital_D91B": "D91B",
 /** Autres impôts en capital n,c,a, */ 
 "Autres_impôts_en_capital_n,c,a,_D91C": "D91C",
 /** Impôts sur les produits dus non recouvrables */ 
 "Impôts_sur_les_produits_dus_non_recouvrables_D995A": "D995A",
 /** Autres impôts sur la production dus non recouvrables */ 
 "Autres_impôts_sur_la_production_dus_non_recouvrables_D995B": "D995B",
 /** Impôts sur le revenu dus non recouvrables */ 
 "Impôts_sur_le_revenu_dus_non_recouvrables_D995C": "D995C",
 /** Autres impôts courants dus non recouvrables  */ 
 "Autres_impôts_courants_dus_non_recouvrables__D995D": "D995D",
 /** Cotisations sociales effectives à la charge des employeurs dues non recouvrables */ 
 "Cotisations_sociales_effectives_à_la_charge_des_employeurs_dues_non_recouvrables_D995E": "D995E",
 /** Cotisations sociales effectives à la charge des salariés dues non recouvrables */ 
 "Cotisations_sociales_effectives_à_la_charge_des_salariés_dues_non_recouvrables_D995FE": "D995FE",
 /** Cotisations sociales effectives a la charge des non employés dues non recouvrables */ 
 "Cotisations_sociales_effectives_a_la_charge_des_non_employés_dues_non_recouvrables_D995FN": "D995FN",
 /** Cotisations sociales effectives à la charge des travailleurs indépendants dues non recouvrable */ 
 "Cotisations_sociales_effectives_à_la_charge_des_travailleurs_indépendants_dues_non_recouvrable_D995FS": "D995FS",
 /** Cotisations sociales effectives à la charge des ménages dues non recouvrables */ 
 "Cotisations_sociales_effectives_à_la_charge_des_ménages_dues_non_recouvrables_D995F": "D995F",
 /** Autres impôts sur la production + impôts courants sur le revenu, le patrimoine, etc, + ajustement pour variations des droits à pension */ 
 "Autres_impôts_sur_la_production_+_impôts_courants_sur_le_revenu,_le_patrimoine,_etc,_+_ajustement_pour_variations_des_droits_à_pension_OED": "OED",
 /** Consommation intermédiaire + autres impôts sur la production + impôts courants sur le revenu, le patrimoine, etc, + ajustement pour variations des droits à pension */ 
 "Consommation_intermédiaire_+_autres_impôts_sur_la_production_+_impôts_courants_sur_le_revenu,_le_patrimoine,_etc,_+_ajustement_pour_variations_des_droits_à_pension_OEC": "OEC",
 /** Solde des flux nets d’actifs et passifs financiers */ 
 "Solde_des_flux_nets_d’actifs_et_passifs_financiers_B9F": "B9F",
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
 /** Administrations publiques */ 
 "Administrations_publiques_S13": "S13",
 /** Ménages */ 
 "Ménages_S14": "S14",
 /** Ménages hors entrepreneurs individuels */ 
 "Ménages_hors_entrepreneurs_individuels_S14B": "S14B",
 /** Institutions sans but lucratif au services des ménages */ 
 "Institutions_sans_but_lucratif_au_services_des_ménages_S15": "S15",
 /** Sociétés et entreprises individuelles non financières */ 
 "Sociétés_et_entreprises_individuelles_non_financières_S11X14AA": "S11X14AA",
 /** Sociétés non financières */ 
 "Sociétés_non_financières_S11": "S11",
 /** Sociétés et entreprises individuelles financières */ 
 "Sociétés_et_entreprises_individuelles_financières_S12X14AF": "S12X14AF",
 /** Organismes divers d’administration centrale */ 
 "Organismes_divers_d’administration_centrale_S13112": "S13112",
 /** Sociétés financières */ 
 "Sociétés_financières_S12": "S12",
 /** Administrations locales (à l’exclusion de la sécurité sociale) */ 
 "Administrations_locales_(à_l’exclusion_de_la_sécurité_sociale)_S1313": "S1313",
 /** Administration centrale (à l’exclusion de la sécurité sociale) */ 
 "Administration_centrale_(à_l’exclusion_de_la_sécurité_sociale)_S1311": "S1311",
 /** Administrations de sécurité sociale */ 
 "Administrations_de_sécurité_sociale_S1314": "S1314",
 /** État */ 
 "État_S13111": "S13111",
 /** Entreprises individuelles non financières */ 
 "Entreprises_individuelles_non_financières_S14AA": "S14AA",
 /** Ménages et institutions sans but lucratif au services des ménages */ 
 "Ménages_et_institutions_sans_but_lucratif_au_services_des_ménages_S1M": "S1M",
 /** APU, ménages et institutions sans but lucratif au services des ménages */ 
 "APU,_ménages_et_institutions_sans_but_lucratif_au_services_des_ménages_S1L": "S1L",
 /** Sociétés financières : services principalement financiers, hors assurance */ 
 "Sociétés_financières_:_services_principalement_financiers,_hors_assurance_S12K64": "S12K64",
 /** Sociétés financières : services principalement d’auxiliaires financiers */ 
 "Sociétés_financières_:_services_principalement_d’auxiliaires_financiers_S12K66": "S12K66",
 /** Sociétés financières : services principalement d’assurance */ 
 "Sociétés_financières_:_services_principalement_d’assurance_S12K65": "S12K65",
 /** Non pertinent */ 
 "Non_pertinent__Z": "_Z",
 /** Biens et services */ 
 "Biens_et_services_SBS": "SBS",
 /** Total des secteurs résidents */ 
 "Total_des_secteurs_résidents_S10": "S10",
 /** Administrations publiques et institutions et organes de l’Union européenne */ 
 "Administrations_publiques_et_institutions_et_organes_de_l’Union_européenne_SZV": "SZV",
 /** Non sectorisé */ 
 "Non_sectorisé_S1N": "S1N",
 /** Administration d’états fédérés (à l’exclusion de la sécurité sociale) */ 
 "Administration_d’états_fédérés_(à_l’exclusion_de_la_sécurité_sociale)_S1312": "S1312",
 /** Reste du monde */ 
 "Reste_du_monde_S2": "S2",
 /** Institutions de l’Union Européenne */ 
 "Institutions_de_l’Union_Européenne_SZU": "SZU",
} as const;
export type REF_SECTOR_code_values = (typeof REF_SECTOR_codes)[keyof typeof REF_SECTOR_codes]; 
export const COUNTERPART_AREA_codes = {
 /** Monde */ 
 "Monde_W0": "W0",
 /** Reste du monde */ 
 "Reste_du_monde_W1": "W1",
 /** Hors Union Européenne */ 
 "Hors_Union_Européenne_D0": "D0",
 /** Territoire national */ 
 "Territoire_national_W2": "W2",
 /** Intérieur vis-à-vis du monde plus reste du monde vis-à-vis de l'intérieur */ 
 "Intérieur_vis-à-vis_du_monde_plus_reste_du_monde_vis-à-vis_de_lintérieur_W08": "W08",
 /** Union Européenne (Etats membres et institutions) */ 
 "Union_Européenne_(Etats_membres_et_institutions)_B0": "B0",
 /** Zone euro (Etats membres et institutions)  */ 
 "Zone_euro_(Etats_membres_et_institutions)__U2": "U2",
 /** Institutions de l’Union Européenne */ 
 "Institutions_de_l’Union_Européenne_4Y": "4Y",
 /** Pays de l’Union Européenne participant au mécanisme de surveillance unique */ 
 "Pays_de_l’Union_Européenne_participant_au_mécanisme_de_surveillance_unique_B01": "B01",
 /** Pays membres de la Zone Euro (composition fixe, au 1er janvier 2023) */ 
 "Pays_membres_de_la_Zone_Euro_(composition_fixe,_au_1er_janvier_2023)_I9": "I9",
 /** Pays membres de l’Union Européenne et hors de la Zone Euro (composition fixe, au 1er janvier 2023) */ 
 "Pays_membres_de_l’Union_Européenne_et_hors_de_la_Zone_Euro_(composition_fixe,_au_1er_janvier_2023)_K11": "K11",
 /** Pays hors pays membres de l’Union Européenne (composition fixe, au 31 janvier 2020,  post brexit) */ 
 "Pays_hors_pays_membres_de_l’Union_Européenne_(composition_fixe,_au_31_janvier_2020,_post_brexit)_D6": "D6",
 /** Pays membres de l’Union Européenne (composition fixe, au 31 janvier 2020, post brexit) */ 
 "Pays_membres_de_l’Union_Européenne_(composition_fixe,_au_31_janvier_2020,_post_brexit)_B6": "B6",
 /** Pays hors pays membres de la Zone Euro (composition fixe, au 1er janvier 2023) */ 
 "Pays_hors_pays_membres_de_la_Zone_Euro_(composition_fixe,_au_1er_janvier_2023)_J9": "J9",
} as const;
export type COUNTERPART_AREA_code_values = (typeof COUNTERPART_AREA_codes)[keyof typeof COUNTERPART_AREA_codes]; 
export const UNIT_MEASURE_codes = {
 /** Devise nationale (Euros) */ 
 "Devise_nationale_(Euros)_XDC": "XDC",
 /** Indice */ 
 "Indice_IX": "IX",
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
 /** Nombre */ 
 "Nombre__Z": "_Z",
} as const;
export type UNIT_MEASURE_code_values = (typeof UNIT_MEASURE_codes)[keyof typeof UNIT_MEASURE_codes]; 
export const INSTR_ASSET_codes = {
 /** Total */ 
 "Total__Z": "_Z",
 /** Actifs non financiers produits (brut) */ 
 "Actifs_non_financiers_produits_(brut)_N1G": "N1G",
 /** Actifs fixes par type d’actifs (brut) */ 
 "Actifs_fixes_par_type_d’actifs_(brut)_N11G": "N11G",
 /** Logements (brut) */ 
 "Logements_(brut)_N111G": "N111G",
 /** Autres bâtiments et ouvrages de génie civil (brut) */ 
 "Autres_bâtiments_et_ouvrages_de_génie_civil_(brut)_N112G": "N112G",
 /** Matériels de transport (brut) */ 
 "Matériels_de_transport_(brut)_N1131G": "N1131G",
 /** Équipements TIC (brut) */ 
 "Équipements_TIC_(brut)_N1132G": "N1132G",
 /** Ressources biologiques cultivées (brut) */ 
 "Ressources_biologiques_cultivées_(brut)_N115G": "N115G",
 /** Droits de propriété intellectuelle (brut) */ 
 "Droits_de_propriété_intellectuelle_(brut)_N117G": "N117G",
 /** Machines et équipement + systèmes d’armes (N113 + N114) (brut) */ 
 "Machines_et_équipement_+_systèmes_d’armes_(N113_+_N114)_(brut)_N11MG": "N11MG",
 /** Autres machines et équipements + systèmes d’armes (N1139+N114) (brut) */ 
 "Autres_machines_et_équipements_+_systèmes_d’armes_(N1139+N114)_(brut)_N11OG": "N11OG",
 /** Actifs fixes par type d’actifs (net) */ 
 "Actifs_fixes_par_type_d’actifs_(net)_N11N": "N11N",
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
export interface DDCNAAGREGATSDimensions {
  /** Possible values: 
 * N - Aucune 

 * GY_IX - Croissance annuelle de l’indice 

 * GY - Croissance annuelle  

 * GR_IX - Evolution de l’indice en base 100 sur l’année de référence 

 * DY - Ecart annuel  
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

 * CP1112 - Cantines, cafétérias et réfectoires (S) 

 * CP04 - Logement, eau, gaz, électricité et autres combustibles 

 * CP121P_122 - Assurances (hors assurance-vie) et services financiers 

 * CP083 - Services d’information et de communication 

 * CPDEP - Dépense de consommation des ménages 

 * CPDPE - Dépense de consommation finale pré-engagée 

 * CPHDPE - Dépense de consommation autre que pré-engagée 
 */
    EXPENDITURE: EXPENDITURE_code_values ;
  /** Possible values: 
 * P1 - Production 

 * P2 - Consommation intermédiaire 

 * D1 - Rémunération des salariés 

 * B1G - Valeur ajoutée brute 

 * D11 - Salaires et traitements bruts 

 * B2A3G - Excédent brut d’exploitation et revenu mixte brut 

 * P31 - Dépense de consommation individuelle 

 * B2G - Excédent brut d’exploitation 

 * P32 - Dépense de consommation collective 

 * P4 - Consommation finale effective 

 * P51G - Formation brute de capital fixe 

 * P52 - Variation des stocks 

 * _TC - Taux de couverture 

 * P6 - Exportations de biens et services 

 * P7 - Importations de biens et services 

 * B11 - Solde des échanges extérieurs de biens et services 

 * P3 - Dépense de consommation finale 

 * _TI - Taux d’investissement 

 * P53 - Acquisitions moins cessions d’objets de valeur 

 * _REM - Rémunérations des salariés / valeur ajoutée brute 

 * D121 - Cotisations sociales effectives à la charge des employeurs 

 * D21 - Impôts sur les produits 

 * D122 - Cotisations sociales imputées à la charge des employeurs 

 * _IMP - Impôts sur la production / valeur ajoutée brute 

 * D29 - Autres impôts sur la production 

 * D291 - Impôts sur les salaires et la main d’œuvre 

 * D2 - Impôts sur la production et les importations 

 * D292 - Impôts divers sur la production 

 * D3 - Subventions 

 * D31 - Subventions sur les produits 

 * D39 - Autres subventions sur la production 

 * TS_CE - Total des emplois  

 * TC_CE - Total des charges 

 * TU_CE - Total des ressources 

 * B1GQ - Produit intérieur brut 

 * _PART_VAENF - Part de la valeur ajoutée des ei dans la valeur ajoutée totale des enf 

 * _TM1 - Taux de marge 

 * B3G - Revenu mixte brut 

 * _REVENU - Revenu mixte brut des ei / excédent brut d’exploitation et revenu mixte brut des enf 

 * _TM2 - Taux de marge 

 * B5GQ - Revenu national brut 

 * _RNB_HABITANT - Revenu national brut par habitant 

 * B6GQ - Revenu national disponible brut 

 * _TAF - Taux d’autofinancement 

 * _TX_EE - Taux d’épargne des entreprises 

 * B9 - Capacité (+) ou besoin (-) de financement 

 * _CANTINE_REVENU - Part des cantines dans le revenu disponible brut 

 * _DEP_LOGT_REVENU - Part de la dépense liée au logement dans le revenu disponible brut 

 * _ASSUR_REVENU - Part des assurances (hors assurance-vie) et services financiers dans le revenu disponible brut 

 * _TELE_REVENU - Part des services de télévision et de télécommunications dans le revenu disponible brut 

 * _DEP_REVENU - Part de la dépense pré-engagée dans le revenu disponible brut 

 * _DEP_CONSO - Part de la dépense pré-engagée dans la dépense de consommation finale des ménages 

 * _COEFF_BUDG - Coefficient budgétaire 

 * _COEFF_BUDG_P31 - Coefficient budgétaire 

 * EMP - Emploi total (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) 

 * _PHT - Productivité horaire du travail (pht) 

 * SELF - Emploi des travailleurs indépendants dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) 

 * SAL - Emploi des salariés dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) 

 * SALD - Emploi déclaré des salariés dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées) 

 * P1O - Production marchande, production pour emploi final propre et paiements au titre de la production non marchande 

 * P1M - Production marchande et production pour usage final propre 

 * P131 - Paiements au titre de la production non marchande 

 * P132 - Autre production non marchande 

 * P5M - Variation stocks + Acquis, moins cessions objets valeur (OPP52+OPP53) 

 * D91 - Impôts en capital 

 * CONTRIB_PIB_P3 - Contribution à l’évolution du PIB de la dépense de consommation finale 

 * CONTRIB_PIB_P31 - Contribution à l’évolution du PIB de la dépense de consommation individuelle 

 * CONTRIB_PIB_P32 - Contribution à l’évolution du PIB de la dépense de consommation collective 

 * P5 - Formation brute de capital/Formation nette de capital 

 * CONTRIB_PIB_P51G - Contribution à l’évolution du PIB de la FBCF 

 * CONTRIB_PIB_P52 - Contribution à l’évolution du PIB de la variation des stocks 

 * CONTRIB_PIB_P53 - Contribution à l’évolution du PIB des acquisitions moins cessions d’objets de valeur 

 * CONTRIB_PIB_P6 - Contribution à l’évolution du PIB du solde des exportations 

 * CONTRIB_PIB_P7 - Contribution à l’évolution du PIB du solde des importations 

 * DINT - Total de la demande intérieure en produits 

 * DINT_S - Demande intérieure hors stocks 

 * TFU - Total des emplois finaux 

 * TSBP - Total ressources prix de base 

 * D12 - Cotisations sociales à la charge des employeurs 

 * D2X3 - Impôts sur production et importations, moins subventions (D2+D3) 

 * _PIB_HABITANT - PIB par habitant 

 * CONTRIB_PIB_B1GQ - Variation du PIB 

 * _RNB_REEL - Revenu national brut en termes réels 

 * CONTRIB_PIB_B11 - Contribution à l’évolution du PIB du solde des échanges extérieurs 

 * _RNB_REEL_HABITANT - Revenu national brut en termes réels par habitant 

 * KA_P5 - Formation brute de capital/Formation nette de capital en autres changements de volume et ajustements 

 * K7_P5 - Formation brute de capital/Formation nette de capital en gains/pertes nominaux de détention 

 * K7_P51G - Formation brute de capital fixe en gains/pertes nominaux de détention 

 * KA_P52 - Variation des stocks en autres changements de volume et ajustements 

 * K7_P52 - Variation des stocks en gains/pertes nominaux de détention 

 * K7_P53 - Acquisitions moins cessions d’objets de valeur en gains/pertes nominaux de détention 

 * LE - Clôture du bilan/positions/flux 

 * POP - Population 

 * POPM - Moyenne annuelle de la population en France métropolitaine 

 * MENF - Moyenne annuelle du nombre de ménages en France entière 

 * MENM - Moyenne annuelle du nombre de ménages en France métropolitaine 

 * UC - Unités de consommation 

 * _PAM - Pouvoir d’achat du rdb des ménages 

 * _PAA - Pouvoir d’achat du rdb arbitrable des ménages 

 * P5K - Autres acquisitions moins cessions d’actifs non financiers 

 * RSS - Revenus salariaux et sociaux 

 * D11X613CE - Salaires et traitements nets 

 * D4 - Revenus de la propriété 

 * D5 - Impôts courants sur le revenu, le patrimoine, etc. 

 * D61 - Cotisations sociales nettes 

 * D613CE - Cotisations sociales effectives obligatoires à la charge des salariés 

 * D613NSI - Cotisations des non salariés 

 * D62 - Prestations sociales autres que transferts sociaux en nature 

 * D63 - Transferts sociaux en nature 

 * D7 - Autres transferts courants 

 * D9P - Transferts en capital à payer 

 * D9R - Transferts en capital à recevoir 

 * P3_DPE - Dépense de consommation finale pré-engagée 

 * P3_H_DPE - Dépense de consommation finale autre que pré-engagée 

 * TSF - Solde des transferts sociaux et fiscaux 

 * B5G - Solde brut des revenus primaires 

 * B6G - Revenu disponible brut 

 * B7G - Revenu disponible brut ajusté 

 * B8G - Épargne brute 

 * _TEM - Taux d’épargne des ménages 

 * _TEFM - Taux d’épargne financière des ménages 

 * D9PXR - Transferts en capital reçus diminués des transferts versés 

 * D4NET - Revenus de la propriété reçus diminués des revenus versés 

 * RARBI - Revenu disponible arbitrable 

 * TRANSF_COURANT - Solde des transferts courants (reçus moins versés) 

 * _PAA_UC - Pouvoir d’achat du rdb arbitrable par unité de consommation 

 * _PAA_MENAGE - Pouvoir d’achat du rdb arbitrable par ménage 

 * _PAA_PERSONNE - Pouvoir d’achat du rdb arbitrable par personne 

 * _PAM_MENAGE - Pouvoir d’achat du rdb par ménage 

 * _PAM_PERSONNE - Pouvoir d’achat du rdb par personne 

 * _PAM_UC - Pouvoir d’achat du rdb par unité de consommation 

 * P311 - Dépense de consommation individuelle Biens durables 

 * P312 - Dépense de consommation individuelle Biens semi-durables 

 * P313 - Dépense de consommation individuelle Biens non durables 

 * P314 - Dépense de consommation individuelle Services 

 * P31K - Dépense de consommation individuelle Total hors biens durables 

 * P41 - Consommation individuelle effective 

 * P61 - Exportations de biens 

 * P62 - Exportation de services 

 * P71 - Importations de biens 

 * P72 - Importations de services 

 * D21X31 - Impôts moins subventions sur les produits (D21+D31) 

 * P51C - Consommation de capital fixe 

 * D29X39 - Autres impôts sur la production moins autres subventions sur la production 

 * B2A3N - Excédent d’exploitation/revenu mixte net de CCF 

 * P11 - Production marchande 

 * P12 - Production pour usage final propre 

 * P13 - Production non marchande 

 * NP - Acquisitions moins cessions d’actifs non produits 

 * D211 - Taxes de type TVA 

 * D212 - Impôts et droits sur les importations, à l’exclusion de la TVA 

 * D214 - Impôts sur les produits, à l‘exclusion de la TVA et des impôts sur les importations 

 * D391 - Subventions sur rémunérations 

 * D392 - Bonifications d’intérêts 

 * D399 - Autres subventions d’exploitation 

 * D41 - Intérêts 

 * D42 - Revenus distribués des sociétés 

 * D421 - Dividendes 

 * D422 - Prélèvements sur les revenus des quasi-sociétés 

 * D43 - Bénéfices réinvestis d’investissements directs étrangers 

 * D44 - Revenus d’investissements 

 * D45 - Loyers 

 * D51 - Impôts sur le revenu 

 * D59 - Autres impôts courants 

 * D611 - Cotisations sociales effectives à la charge des employeurs 

 * D612 - Cotisations sociales imputées à la charge des employeurs 

 * D613 - Cotisations sociales effectives à la charge des ménages 

 * D613CS - Cotisations sociales effectives à la charge des travailleurs indépendants 

 * D614 - Suppléments de cotisations sociales à la charge des ménages 

 * D61SC - Rémunération du service des régimes d’assurance sociale 

 * D621 - Prestations de sécurité sociale en espèces 

 * D622 - Autres prestations d’assurance sociale 

 * D623 - Prestations d’assurance sociale en espèces 

 * D631 - Transferts sociaux en nature – production non marchande 

 * D632 - Transferts sociaux en nature – production marchande achetée 

 * D7S - Autres transferts courants (voir note) 

 * D71 - Primes nettes d’assurance-dommages 

 * D72 - Indemnités d’assurance-dommages 

 * D73 - Transferts courants entre administrations publiques 

 * D731 - Transferts courants entre sous-secteurs des apu 

 * D74 - Coopération internationale courante 

 * D732 - Transferts courants internes aux sous-secteurs des apu 

 * D733 - Transferts de recettes fiscales 

 * D73S - Transferts courants entre administrations publiques (solde) (voir note) 

 * D75 - Transferts courants divers 

 * D751 - Transferts courants aux ISBLSM 

 * D752 - Transferts courants entre ménages 

 * D759 - Autres transferts courants divers 

 * D76 - Ressources propres de l’UE fondées sur la TVA et le RNB 

 * D8 - Ajustement pour variation des droits à pension 

 * D91P - Impôts en capital à payer 

 * D91R - Impôts en capital à recevoir 

 * D92P - Aides à l’investissement à payer 

 * D92R - Aides à l’investissement à recevoir 

 * D99P - Autres transferts en capital à payer 

 * D99R - Autres transferts en capital à recevoir 

 * B1N - Valeur ajoutée nette de CCF 

 * B2N - Excédent d’exploitation net de CCF 

 * B3N - Revenu mixte net de CCF 

 * B5N - Solde des revenus primaires net de CCF 

 * B6N - Revenu disponible net de CCF 

 * B7N - Revenu disponible ajusté net de CCF 

 * B8N - Épargne brute net de CCF 

 * B12 - Solde des opérations courantes avec l’extérieur 

 * YA2 - Divergence statistique 

 * YA1 - Divergence statistique (approche par la production) 

 * YA0 - Divergence statistique (approche par les dépenses) 

 * P62F - Exportation de SIFIM 

 * P72F - Importations de SIFIM 

 * D2121 - Droits sur les importations 

 * D2122 - Impôts sur les importations, à l’exclusion de la TVA et des droits sur les importations 

 * D41G - Intérêts bruts de correction SIFIM 

 * D441 - Revenus d’investissements attribués aux assurés 

 * D442 - Revenus d’investissements à payer sur les droits de pension 

 * D443 - Revenus d’investissements attribués aux détenteurs de parts de fonds d’investissement 

 * D6 - Cotisations et prestations sociales 

 * D613CN - Cotisations sociales effectives à la charge des personnes n’occupant pas un emploi 

 * D613V - Cotisations sociales effectives volontaires des ménages 

 * D92 - Aides à l’investissement 

 * D99 - Autres transferts en capital 

 * ODA - Total des recettes fiscales 

 * ODB - Produit total des impôts et cotisations sociales après déduction des montants dus non recouvrables 

 * ODD - Charge fiscale = produit total des impôts et cotisations sociales obligatoires après déduction des montants dus non recouvrables 

 * B1NQ - Produit intérieur net de CCF 

 * ODC - Produit total des impôts et cotisations sociales nettes (y compris cotisations sociales imputées) après déduction des montants dus non recouvrables 

 * B4G - Revenu d’entreprise brut 

 * B5NQ - Revenu national net 

 * B9FX9 - Écart entre capacité ou besoin de financement et solde des flux nets d’actifs et passifs financiers (B9NF – B9F) 

 * B101 - Variations de la valeur nette due à l’épargne et aux transferts de capital 

 * B102 - Variation valeur nette dues aux changements de volume et ajustement 

 * B103 - Variation valeur nette dues aux réévaluations 

 * _COEFF_TECHNIQUE - Coefficient technique 

 * OTTM1 - Marges de commerce 

 * OTTM2 - Marges de transport 

 * TSPP - Total ressources prix d’acquisition 

 * D51M - Impôts sur le revenu des personnes physiques ou des ménages, y compris les gains de détention (D51a + D51c1) 

 * D51O - Impôts sur le revenu ou les bénéfices des sociétés, y compris les gains de détention (D51b + D51c2) 

 * D995 - Transferts en capital pour admissions en non valeur 

 * _MA_PPIB - Déficit au sens de Maastricht en points de PIB 

 * MA - Déficit au sens de Maastricht 

 * P12_GFSM_D1 - Production pour usage final propre, coût imputable à la rémunération des salariés (finalité GFSM) 

 * P12_GFSM_P2 - Production pour usage final propre, coût imputable à la consommation intermédiaire (finalité GFSM) 

 * P12_GFSM_P51C - Production pour usage final propre, coût imputable à la consommation de capital fixe (finalité GFSM) 

 * TC - Partie des crédits d’impôts qui excède les créances des contribuables 

 * D31P - Subventions sur les produits à payer 

 * PTC - Total des crédits d’impôts à payer 

 * D6M - Prestations sociales en espèces et en nature de produits marchands 

 * P5L - Acquisition nette d’actifs non financiers 

 * D39P - Autres subventions sur la production à payer 

 * D3P - Subventions à payer (signe positif, pour la déclaration dans la présentation des SFP) 

 * D39R - Autres subventions sur la production à recevoir 

 * D2122B - Montants compensatoires monétaires prélevés a l’importation 

 * D2122C - Droits d’accise 

 * D214A - Droits d’accise et taxes à la consommation 

 * D214B - Droits de timbre 

 * D214C - Impôts sur les opérations financières et les opérations en capital 

 * D214D - Taxe sur les certificats d’immatriculation des véhicules 

 * D214E - Taxes sur les spectacles et divertissements 

 * D214F - Taxes sur les loteries, les jeux et les paris 

 * D214G - Taxes sur les primes d’assurance 

 * D214H - Autres impôts sur des services détermines 

 * D214I - Impôts généraux sur les ventes ou le chiffre d’affaires 

 * D214L - Autres impôts sur les produits n,c,a, 

 * D29A - Impôts fonciers, impôts immobiliers ou impôts sur d’autres structures 

 * D29B - Impôts sur l’utilisation d’actifs fixes 

 * D29C - Total des impôts sur la masse salariale 

 * D29E - Patentes et licences 

 * D29F - Impôts sur la pollution 

 * D29H - Autres impôts nets sur la production n,c,a, 

 * D51A - Impôts sur le revenu des personnes physiques ou des ménages, a l’exclusion des gains de détention 

 * D51B - Impôts sur le revenu ou les bénéfices des sociétés a l’exclusion des gains de détention 

 * D51E - Autres impôts sur le revenu n,c,a, 

 * D59A - Impôts courants sur le capital 

 * D59D - Paiements effectués par les ménages en vue de l’obtention de licences 

 * D59F - Autres impôts courants n,c,a, 

 * D611C - Cotisations sociales effectives obligatoires à la charge des employeurs 

 * D613C - Cotisations sociales effectives obligatoires à la charge des ménages 

 * D9 - Transferts en capital 

 * D91A - Impôts sur les transferts en capital 

 * D91B - Prélèvements sur le capital 

 * D91C - Autres impôts en capital n,c,a, 

 * D995A - Impôts sur les produits dus non recouvrables 

 * D995B - Autres impôts sur la production dus non recouvrables 

 * D995C - Impôts sur le revenu dus non recouvrables 

 * D995D - Autres impôts courants dus non recouvrables  

 * D995E - Cotisations sociales effectives à la charge des employeurs dues non recouvrables 

 * D995FE - Cotisations sociales effectives à la charge des salariés dues non recouvrables 

 * D995FN - Cotisations sociales effectives a la charge des non employés dues non recouvrables 

 * D995FS - Cotisations sociales effectives à la charge des travailleurs indépendants dues non recouvrable 

 * D995F - Cotisations sociales effectives à la charge des ménages dues non recouvrables 

 * OED - Autres impôts sur la production + impôts courants sur le revenu, le patrimoine, etc, + ajustement pour variations des droits à pension 

 * OEC - Consommation intermédiaire + autres impôts sur la production + impôts courants sur le revenu, le patrimoine, etc, + ajustement pour variations des droits à pension 

 * B9F - Solde des flux nets d’actifs et passifs financiers 
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

 * S13 - Administrations publiques 

 * S14 - Ménages 

 * S14B - Ménages hors entrepreneurs individuels 

 * S15 - Institutions sans but lucratif au services des ménages 

 * S11X14AA - Sociétés et entreprises individuelles non financières 

 * S11 - Sociétés non financières 

 * S12X14AF - Sociétés et entreprises individuelles financières 

 * S13112 - Organismes divers d’administration centrale 

 * S12 - Sociétés financières 

 * S1313 - Administrations locales (à l’exclusion de la sécurité sociale) 

 * S1311 - Administration centrale (à l’exclusion de la sécurité sociale) 

 * S1314 - Administrations de sécurité sociale 

 * S13111 - État 

 * S14AA - Entreprises individuelles non financières 

 * S1M - Ménages et institutions sans but lucratif au services des ménages 

 * S1L - APU, ménages et institutions sans but lucratif au services des ménages 

 * S12K64 - Sociétés financières : services principalement financiers, hors assurance 

 * S12K66 - Sociétés financières : services principalement d’auxiliaires financiers 

 * S12K65 - Sociétés financières : services principalement d’assurance 

 * _Z - Non pertinent 

 * SBS - Biens et services 

 * S10 - Total des secteurs résidents 

 * SZV - Administrations publiques et institutions et organes de l’Union européenne 

 * S1N - Non sectorisé 

 * S1312 - Administration d’états fédérés (à l’exclusion de la sécurité sociale) 

 * S2 - Reste du monde 

 * SZU - Institutions de l’Union Européenne 
 */
    REF_SECTOR: REF_SECTOR_code_values ;
    TIME_PERIOD:      number;
  /** Possible values: 
 * W0 - Monde 

 * W1 - Reste du monde 

 * D0 - Hors Union Européenne 

 * W2 - Territoire national 

 * W08 - Intérieur vis-à-vis du monde plus reste du monde vis-à-vis de l'intérieur 

 * B0 - Union Européenne (Etats membres et institutions) 

 * U2 - Zone euro (Etats membres et institutions)  

 * 4Y - Institutions de l’Union Européenne 

 * B01 - Pays de l’Union Européenne participant au mécanisme de surveillance unique 

 * I9 - Pays membres de la Zone Euro (composition fixe, au 1er janvier 2023) 

 * K11 - Pays membres de l’Union Européenne et hors de la Zone Euro (composition fixe, au 1er janvier 2023) 

 * D6 - Pays hors pays membres de l’Union Européenne (composition fixe, au 31 janvier 2020,  post brexit) 

 * B6 - Pays membres de l’Union Européenne (composition fixe, au 31 janvier 2020, post brexit) 

 * J9 - Pays hors pays membres de la Zone Euro (composition fixe, au 1er janvier 2023) 
 */
    COUNTERPART_AREA: COUNTERPART_AREA_code_values ;
  /** Possible values: 
 * XDC - Devise nationale (Euros) 

 * IX - Indice 

 * PT - Pourcentage 

 * PS - Personnes 

 * FT - Équivalent temps plein 

 * HW - Heures travaillées 

 * DAT - Durée annuelle travaillée 

 * _Z - Nombre 
 */
    UNIT_MEASURE: UNIT_MEASURE_code_values ;
  /** Possible values: 
 * _Z - Total 

 * N1G - Actifs non financiers produits (brut) 

 * N11G - Actifs fixes par type d’actifs (brut) 

 * N111G - Logements (brut) 

 * N112G - Autres bâtiments et ouvrages de génie civil (brut) 

 * N1131G - Matériels de transport (brut) 

 * N1132G - Équipements TIC (brut) 

 * N115G - Ressources biologiques cultivées (brut) 

 * N117G - Droits de propriété intellectuelle (brut) 

 * N11MG - Machines et équipement + systèmes d’armes (N113 + N114) (brut) 

 * N11OG - Autres machines et équipements + systèmes d’armes (N1139+N114) (brut) 

 * N11N - Actifs fixes par type d’actifs (net) 
 */
    INSTR_ASSET: INSTR_ASSET_code_values ;
  /** Possible values: 
 * _T - Total 
 */
    ACTIVITY: ACTIVITY_code_values ;
}

export interface DDCNAAGREGATSAttributes {
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

export interface DDCNAAGREGATSMeasures {
    OBS_VALUE_NIVEAU: ObsValueNiveau;
}

export interface ObsValueNiveau {
    value: number;
}
