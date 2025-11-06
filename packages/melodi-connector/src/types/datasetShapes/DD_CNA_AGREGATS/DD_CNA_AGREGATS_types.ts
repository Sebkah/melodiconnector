import { DD_CNA_AGREGATS_CodeDictionary } from "./DD_CNA_AGREGATS_codeDictionary";

export interface DDCNAAGREGATSDimensions {
/** Possible values for : Transformation chronologique	/	Transformation : 
 * - Aucune	/	None : N
 * - Croissance annuelle de l’indice	/	Index growth rate, over 1 year : GY_IX
 * - Croissance annuelle 	/	Growth rate, over 1 year : GY
 * - Evolution de l’indice en base 100 sur l’année de référence	/	Index growth rate, over reference year : GR_IX
 * - Ecart annuel 	/	Spread, over 1 year : DY
 */
	TRANSFORMATION: DD_CNA_AGREGATS_CodeDictionary["TRANSFORMATION"][keyof DD_CNA_AGREGATS_CodeDictionary["TRANSFORMATION"]];

/** Possible values for : Valorisation des prix	/	Prices : 
 * - En valeur aux prix courants	/	Current prices : V
 * - Déflateur	/	Deflator (index) : D
 * - Aux prix de l’année précédente	/	Previous year prices : Y
 * - En volume aux prix de l’année précédente chaînés	/	Chain linked volume : L
 * - Non applicable	/	Not applicable : _Z
 * - Au coût de remplacement	/	Current replacement cost : U
 * - Au coût de remplacement de l’année précédente	/	'Previous year''s replacement costs' : O
 * - En volume aux prix de l’année précédente (fin d’année) chaînés	/	Chain linked volume (end of year) : LFA
 */
	PRICES: DD_CNA_AGREGATS_CodeDictionary["PRICES"][keyof DD_CNA_AGREGATS_CodeDictionary["PRICES"]];

/** Possible values for : Type de dépense de consommation	/	Expenditure : 
 * - Total	/	Total : _Z
 * - Cantines, cafétérias et réfectoires (S)	/	Canteens, cafeterias and refectories (S) : CP1112
 * - Logement, eau, gaz, électricité et autres combustibles	/	Housing, water, electricity, gas and other fuels : CP04
 * - Assurances (hors assurance-vie) et services financiers	/	Insurances (excluding life insurance) and Financial services : CP121P_122
 * - Services d’information et de communication	/	Information and communication services : CP083
 * - Dépense de consommation des ménages	/	Household final consumption expenditure : CPDEP
 * - Dépense de consommation finale pré-engagée	/	Pre-engaged final household consumption expenditure : CPDPE
 * - Dépense de consommation autre que pré-engagée	/	Final household consumption expenditure other than pre-engaged : CPHDPE
 */
	EXPENDITURE: DD_CNA_AGREGATS_CodeDictionary["EXPENDITURE"][keyof DD_CNA_AGREGATS_CodeDictionary["EXPENDITURE"]];

/** Possible values for : Opération comptable	/	Stock, flow and operation : 
 * - Production	/	Output : P1
 * - Consommation intermédiaire	/	Intermediate consumption : P2
 * - Rémunération des salariés	/	Compensation of employees : D1
 * - Valeur ajoutée brute	/	Gross value added : B1G
 * - Salaires et traitements bruts	/	Gross wages and salaries : D11
 * - Excédent brut d’exploitation et revenu mixte brut	/	Gross operating surplus and gross mixed income : B2A3G
 * - Dépense de consommation individuelle	/	Individual consumption expenditure : P31
 * - Excédent brut d’exploitation	/	Gross operating surplus : B2G
 * - Dépense de consommation collective	/	Collective consumption expenditure : P32
 * - Consommation finale effective	/	Actual final consumption : P4
 * - Formation brute de capital fixe	/	Gross fixed capital formation : P51G
 * - Variation des stocks	/	Changes in inventories : P52
 * - Taux de couverture	/	Trade coverage ratio : _TC
 * - Exportations de biens et services	/	Exports of goods and services : P6
 * - Importations de biens et services	/	Imports of goods and services : P7
 * - Solde des échanges extérieurs de biens et services	/	External balance of goods and services : B11
 * - Dépense de consommation finale	/	Final consumption expenditure : P3
 * - Taux d’investissement	/	Investment rate : _TI
 * - Acquisitions moins cessions d’objets de valeur	/	Acquisitions minus disposals of valuables : P53
 * - Rémunérations des salariés / valeur ajoutée brute	/	Compensation of employees/gross value added : _REM
 * - Cotisations sociales effectives à la charge des employeurs	/	'Employers' actual social contributions : D121
 * - Impôts sur les produits	/	Taxes on products : D21
 * - Cotisations sociales imputées à la charge des employeurs	/	'Employers' imputed social contributions : D122
 * - Impôts sur la production / valeur ajoutée brute	/	Taxes on production/gross value added  : _IMP
 * - Autres impôts sur la production	/	Other taxes on production : D29
 * - Impôts sur les salaires et la main d’œuvre	/	Taxes on wages and labor : D291
 * - Impôts sur la production et les importations	/	Taxes on production and imports : D2
 * - Impôts divers sur la production	/	Miscellaneous taxes on production : D292
 * - Subventions	/	Subsidies : D3
 * - Subventions sur les produits	/	Subsidies on products : D31
 * - Autres subventions sur la production	/	Other subsidies on production : D39
 * - Total des emplois 	/	Total uses : TS_CE
 * - Total des charges	/	Total expenses : TC_CE
 * - Total des ressources	/	Total  resources : TU_CE
 * - Produit intérieur brut	/	Gross domestic product : B1GQ
 * - Part de la valeur ajoutée des ei dans la valeur ajoutée totale des enf	/	Share of value added of sole proprietorships in total value added of non-financial enterprises : _PART_VAENF
 * - Taux de marge	/	Profit margin : _TM1
 * - Revenu mixte brut	/	Gross mixed income : B3G
 * - Revenu mixte brut des ei / excédent brut d’exploitation et revenu mixte brut des enf	/	Gross mixed income of sole proprietorships/ gross operating surplus and gross mixed income of non-financial enterprises : _REVENU
 * - Taux de marge	/	Profit margin : _TM2
 * - Revenu national brut	/	Gross national income /Net national income : B5GQ
 * - Revenu national brut par habitant	/	Gross national income per capita : _RNB_HABITANT
 * - Revenu national disponible brut	/	Gross national disposable income : B6GQ
 * - Taux d’autofinancement	/	Self-financing rate : _TAF
 * - Taux d’épargne des entreprises	/	Corporate saving rate : _TX_EE
 * - Capacité (+) ou besoin (-) de financement	/	Net lending(+) / net borrowing (-) : B9
 * - Part des cantines dans le revenu disponible brut	/	Share of canteen in gross disposable income : _CANTINE_REVENU
 * - Part de la dépense liée au logement dans le revenu disponible brut	/	Share of expenditure related to housing in gross disposable income : _DEP_LOGT_REVENU
 * - Part des assurances (hors assurance-vie) et services financiers dans le revenu disponible brut	/	Share of insurance (excluding life insurance) and financial services in gross disposable income : _ASSUR_REVENU
 * - Part des services de télévision et de télécommunications dans le revenu disponible brut	/	Share of television and telecommunication services in gross disposable income : _TELE_REVENU
 * - Part de la dépense pré-engagée dans le revenu disponible brut	/	Share of pre-engaged exenditure in gross disposable income : _DEP_REVENU
 * - Part de la dépense pré-engagée dans la dépense de consommation finale des ménages	/	Share of pre-engaged expenditure in final household consumption expenditure : _DEP_CONSO
 * - Coefficient budgétaire	/	Budget coefficient : _COEFF_BUDG
 * - Coefficient budgétaire	/	undefined : _COEFF_BUDG_P31
 * - Emploi total (peut être en personnes physiques, équivalent temps plein ou en heures travaillées)	/	Total employment (can be in persons, full time equivalent of hours worked)  : EMP
 * - Productivité horaire du travail (pht)	/	Hourly labour productivity  : _PHT
 * - Emploi des travailleurs indépendants dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées)	/	Employment of self-employed in resident production units (can be in persons, full time equivalent of hours worked) : SELF
 * - Emploi des salariés dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées)	/	Employment of employees in resident production units (can be in persons, full time equivalent of hours worked) : SAL
 * - Emploi déclaré des salariés dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées)	/	Declared employment of employees in resident production units (can be in persons, full time equivalent of hours worked) : SALD
 * - Production marchande, production pour emploi final propre et paiements au titre de la production non marchande	/	Market output, output for own final use and payments for other non-market output : P1O
 * - Production marchande et production pour usage final propre	/	Market output and output for own final use : P1M
 * - Paiements au titre de la production non marchande	/	Payments for other non-market output : P131
 * - Autre production non marchande	/	Other non-market output, n.e.c. : P132
 * - Variation stocks + Acquis, moins cessions objets valeur (OPP52+OPP53)	/	Changes in inventories and acquisition minus disposals of valuables : P5M
 * - Impôts en capital	/	Capital taxes : D91
 * - Contribution à l’évolution du PIB de la dépense de consommation finale	/	Contribution of final consumption expenditure to GDP growth : CONTRIB_PIB_P3
 * - Contribution à l’évolution du PIB de la dépense de consommation individuelle	/	Contribution of individual consumption expenditure to GDP growth : CONTRIB_PIB_P31
 * - Contribution à l’évolution du PIB de la dépense de consommation collective	/	Contribution of collective consumption expenditure to GDP growth : CONTRIB_PIB_P32
 * - Formation brute de capital/Formation nette de capital	/	Gross capital formation : P5
 * - Contribution à l’évolution du PIB de la FBCF	/	Contribution of gross fixed capital formation to GDP growth : CONTRIB_PIB_P51G
 * - Contribution à l’évolution du PIB de la variation des stocks	/	Contribution of inventory change to GDP growth : CONTRIB_PIB_P52
 * - Contribution à l’évolution du PIB des acquisitions moins cessions d’objets de valeur	/	Contribution of acquisitions less disposals of valuables to GDP growth : CONTRIB_PIB_P53
 * - Contribution à l’évolution du PIB du solde des exportations	/	Contribution of exportations to GDP growth : CONTRIB_PIB_P6
 * - Contribution à l’évolution du PIB du solde des importations	/	Contribution of importations to GDP growth : CONTRIB_PIB_P7
 * - Total de la demande intérieure en produits	/	Total domestic demand in goods : DINT
 * - Demande intérieure hors stocks	/	Domestic demand excluding inventory change : DINT_S
 * - Total des emplois finaux	/	Total final use : TFU
 * - Total ressources prix de base	/	Total resources at basic price : TSBP
 * - Cotisations sociales à la charge des employeurs	/	'Employers' social contributions : D12
 * - Impôts sur production et importations, moins subventions (D2+D3)	/	Taxes on production and imports less subsidies : D2X3
 * - PIB par habitant	/	Gross domestic product per capita : _PIB_HABITANT
 * - Variation du PIB	/	GDP growth : CONTRIB_PIB_B1GQ
 * - Revenu national brut en termes réels	/	Gross national income in real terms  : _RNB_REEL
 * - Contribution à l’évolution du PIB du solde des échanges extérieurs	/	Contribution of external balance of goods and services to GDP growth : CONTRIB_PIB_B11
 * - Revenu national brut en termes réels par habitant	/	Gross national income in real terms per capita : _RNB_REEL_HABITANT
 * - Formation brute de capital/Formation nette de capital en autres changements de volume et ajustements	/	Gross capital formation, other changes excluding revaluations : KA_P5
 * - Formation brute de capital/Formation nette de capital en gains/pertes nominaux de détention	/	Gross capital formation/Net capital formation in nominal holding gains/losses : K7_P5
 * - Formation brute de capital fixe en gains/pertes nominaux de détention	/	Gross fixed capital formation in nominal holding gains/losses : K7_P51G
 * - Variation des stocks en autres changements de volume et ajustements	/	Inventory change, other changes excluding revaluations : KA_P52
 * - Variation des stocks en gains/pertes nominaux de détention	/	Change in inventories in nominal holding gains/losses : K7_P52
 * - Acquisitions moins cessions d’objets de valeur en gains/pertes nominaux de détention	/	Acquisitions less disposals of valuables in nominal holding gains/losses : K7_P53
 * - Clôture du bilan/positions/flux	/	Closing balance sheet/Positions/Stocks : LE
 * - Population	/	Population : POP
 * - Moyenne annuelle de la population en France métropolitaine	/	Annual average  population of metropolitan France : POPM
 * - Moyenne annuelle du nombre de ménages en France entière	/	Annual average number of households in France : MENF
 * - Moyenne annuelle du nombre de ménages en France métropolitaine	/	Annual average number of households in metropolitan France : MENM
 * - Unités de consommation	/	Consumption unit : UC
 * - Pouvoir d’achat du rdb des ménages	/	Purchasing power of households gross disposable income : _PAM
 * - Pouvoir d’achat du rdb arbitrable des ménages	/	Purchasing power of discretionary gross disposable household  income : _PAA
 * - Autres acquisitions moins cessions d’actifs non financiers	/	Other acquisitions minus disposals of non-financial assets : P5K
 * - Revenus salariaux et sociaux	/	Wage and social income : RSS
 * - Salaires et traitements nets	/	Net wages and salaries : D11X613CE
 * - Revenus de la propriété	/	Property income : D4
 * - Impôts courants sur le revenu, le patrimoine, etc.	/	Current taxes on income, wealth, etc. : D5
 * - Cotisations sociales nettes	/	Net social contributions : D61
 * - Cotisations sociales effectives obligatoires à la charge des salariés	/	Compulsory employees’ actual social contributions : D613CE
 * - Cotisations des non salariés	/	Non-employees contributions : D613NSI
 * - Prestations sociales autres que transferts sociaux en nature	/	Social benefits other than social transfers in kind : D62
 * - Transferts sociaux en nature	/	Social transfers in kind : D63
 * - Autres transferts courants	/	Other current transfers : D7
 * - Transferts en capital à payer	/	Capital transfers payable : D9P
 * - Transferts en capital à recevoir	/	Capital transfers receivable  : D9R
 * - Dépense de consommation finale pré-engagée	/	Final consumption expenditure – pre-committed : P3_DPE
 * - Dépense de consommation finale autre que pré-engagée	/	Final consumption expenditure – other than pre-committed : P3_H_DPE
 * - Solde des transferts sociaux et fiscaux	/	Balance of social and fiscal transfers : TSF
 * - Solde brut des revenus primaires	/	Gross primary income balance/GNI : B5G
 * - Revenu disponible brut	/	Gross disposable income : B6G
 * - Revenu disponible brut ajusté	/	Adjusted gross disposable income : B7G
 * - Épargne brute	/	Gross savings : B8G
 * - Taux d’épargne des ménages	/	Household saving rate : _TEM
 * - Taux d’épargne financière des ménages	/	Household financial saving rate : _TEFM
 * - Transferts en capital reçus diminués des transferts versés	/	Capital transfers received minus capital paid : D9PXR
 * - Revenus de la propriété reçus diminués des revenus versés	/	Property income received minus income paid : D4NET
 * - Revenu disponible arbitrable	/	Discretionary disposable  income : RARBI
 * - Solde des transferts courants (reçus moins versés)	/	Balance of current transfers (received less paid) : TRANSF_COURANT
 * - Pouvoir d’achat du rdb arbitrable par unité de consommation	/	Purchasing power of discretionary GDI per unit of consumption : _PAA_UC
 * - Pouvoir d’achat du rdb arbitrable par ménage	/	Purchasing power of discretionary GDI per household : _PAA_MENAGE
 * - Pouvoir d’achat du rdb arbitrable par personne	/	Purchasing power of discretionary GDI per capita : _PAA_PERSONNE
 * - Pouvoir d’achat du rdb par ménage	/	Purchasing power of gross disposable income per household : _PAM_MENAGE
 * - Pouvoir d’achat du rdb par personne	/	Purchasing power of gross disposable income per capita : _PAM_PERSONNE
 * - Pouvoir d’achat du rdb par unité de consommation	/	Purchasing power of gross disposable income per unit of consumption : _PAM_UC
 * - Dépense de consommation individuelle Biens durables	/	Individual consumption expenditure of Durable Goods : P311
 * - Dépense de consommation individuelle Biens semi-durables	/	Individual consumption expenditure of Semi-Durable Goods : P312
 * - Dépense de consommation individuelle Biens non durables	/	Individual consumption expenditure of Non-Durable Goods : P313
 * - Dépense de consommation individuelle Services	/	Individual consumption expenditure of Services : P314
 * - Dépense de consommation individuelle Total hors biens durables	/	Individual consumption expenditure of semi-durable and non-durable goods and services : P31K
 * - Consommation individuelle effective	/	Actual individual consumption : P41
 * - Exportations de biens	/	Exports of goods : P61
 * - Exportation de services	/	Exports of services : P62
 * - Importations de biens	/	Imports of goods : P71
 * - Importations de services	/	Imports of services : P72
 * - Impôts moins subventions sur les produits (D21+D31)	/	Taxes less subsidies on products : D21X31
 * - Consommation de capital fixe	/	Consumption of fixed capital : P51C
 * - Autres impôts sur la production moins autres subventions sur la production	/	Other taxes on production minus other subsidies on production : D29X39
 * - Excédent d’exploitation/revenu mixte net de CCF	/	Operating surplus/mixed income net of consumption of fixed capital : B2A3N
 * - Production marchande	/	Market output : P11
 * - Production pour usage final propre	/	Output for own final use : P12
 * - Production non marchande	/	Non-market output : P13
 * - Acquisitions moins cessions d’actifs non produits	/	Acquisitions minus disposals of non-produced assets : NP
 * - Taxes de type TVA	/	Value added type taxes : D211
 * - Impôts et droits sur les importations, à l’exclusion de la TVA	/	Taxes and duties on imports excluding Value Added Tax : D212
 * - Impôts sur les produits, à l‘exclusion de la TVA et des impôts sur les importations	/	Taxes on products except Value Added Tax, import and export taxes : D214
 * - Subventions sur rémunérations	/	Wages subsidies : D391
 * - Bonifications d’intérêts	/	Interest subsidies : D392
 * - Autres subventions d’exploitation	/	Other operating grants : D399
 * - Intérêts	/	Interest : D41
 * - Revenus distribués des sociétés	/	Distributed income of corporations : D42
 * - Dividendes	/	Dividends : D421
 * - Prélèvements sur les revenus des quasi-sociétés	/	Withdrawals from income of quasi-corporations : D422
 * - Bénéfices réinvestis d’investissements directs étrangers	/	Reinvested earnings on FDI (Excluding IF) : D43
 * - Revenus d’investissements	/	Other investment income : D44
 * - Loyers	/	Rent : D45
 * - Impôts sur le revenu	/	Taxes on income assessed but unlikely to be collected : D51
 * - Autres impôts courants	/	Other current taxes : D59
 * - Cotisations sociales effectives à la charge des employeurs	/	Employers’ actual social contributions : D611
 * - Cotisations sociales imputées à la charge des employeurs	/	Employers’ imputed social contributions : D612
 * - Cotisations sociales effectives à la charge des ménages	/	Households’ actual social contributions : D613
 * - Cotisations sociales effectives à la charge des travailleurs indépendants	/	Compulsory actual social contributions by the self-employed : D613CS
 * - Suppléments de cotisations sociales à la charge des ménages	/	Households’ social contribution supplements : D614
 * - Rémunération du service des régimes d’assurance sociale	/	Social insurance scheme service charges (-) : D61SC
 * - Prestations de sécurité sociale en espèces	/	Social security benefits in cash : D621
 * - Autres prestations d’assurance sociale	/	Other social insurance benefits : D622
 * - Prestations d’assurance sociale en espèces	/	Social assistance benefits in cash : D623
 * - Transferts sociaux en nature – production non marchande	/	Social transfers in kind - non-market production : D631
 * - Transferts sociaux en nature – production marchande achetée	/	Social transfers in kind - purchased market production : D632
 * - Autres transferts courants (voir note)	/	Other current transfers (see footnote) : D7S
 * - Primes nettes d’assurance-dommages	/	Net non-life insurance premiums : D71
 * - Indemnités d’assurance-dommages	/	Non-life insurance claims : D72
 * - Transferts courants entre administrations publiques	/	Current transfers within general government : D73
 * - Transferts courants entre sous-secteurs des apu	/	Current transfers between general government subsectors : D731
 * - Coopération internationale courante	/	Current international cooperation : D74
 * - Transferts courants internes aux sous-secteurs des apu	/	Current transfers within general government subsectors : D732
 * - Transferts de recettes fiscales	/	Taxes transfers : D733
 * - Transferts courants entre administrations publiques (solde) (voir note)	/	Current transfers between general governments (balance) (see footnote) : D73S
 * - Transferts courants divers	/	Miscellaneous current transfers : D75
 * - Transferts courants aux ISBLSM	/	Current transfers to NPISHs : D751
 * - Transferts courants entre ménages	/	Current transfers between resident and non-resident households : D752
 * - Autres transferts courants divers	/	Other miscellaneous current transfers : D759
 * - Ressources propres de l’UE fondées sur la TVA et le RNB	/	Value Added Tax and GNI - based EU own resources : D76
 * - Ajustement pour variation des droits à pension	/	Adjustment for the change in pension entitlements : D8
 * - Impôts en capital à payer	/	Capital taxes payable : D91P
 * - Impôts en capital à recevoir	/	Capital taxes receivable : D91R
 * - Aides à l’investissement à payer	/	Investment grants payable : D92P
 * - Aides à l’investissement à recevoir	/	Investment grants receivable : D92R
 * - Autres transferts en capital à payer	/	Other capital transfers payable : D99P
 * - Autres transferts en capital à recevoir	/	Other capital transfers receivable : D99R
 * - Valeur ajoutée nette de CCF	/	Value added net of consumption of fixed capital : B1N
 * - Excédent d’exploitation net de CCF	/	Operating surplus, net of consumption of fixed capital : B2N
 * - Revenu mixte net de CCF	/	Mixed income, net of consumption of fixed capital : B3N
 * - Solde des revenus primaires net de CCF	/	Balance of primary income net of consumption of fixed capital : B5N
 * - Revenu disponible net de CCF	/	Disposable income, net of consumption of fixed capital : B6N
 * - Revenu disponible ajusté net de CCF	/	Adjusted disposable income, net of consumpton of fixed capital : B7N
 * - Épargne brute net de CCF	/	Savings net of consumption of fixed capital : B8N
 * - Solde des opérations courantes avec l’extérieur	/	External current account balance : B12
 * - Divergence statistique	/	Statistical discrepancy : YA2
 * - Divergence statistique (approche par la production)	/	Statistical discrepancy (production approach) : YA1
 * - Divergence statistique (approche par les dépenses)	/	Statistical discrepancy (expenditure approach) : YA0
 * - Exportation de SIFIM	/	Exports of FISIM : P62F
 * - Importations de SIFIM	/	Imports of FISIM : P72F
 * - Droits sur les importations	/	Import duties : D2121
 * - Impôts sur les importations, à l’exclusion de la TVA et des droits sur les importations	/	Taxes on imports excluding Value Added Tax and duties : D2122
 * - Intérêts bruts de correction SIFIM	/	Interest before FISIM allocation : D41G
 * - Revenus d’investissements attribués aux assurés	/	Investment income attributable to insurance policy holders : D441
 * - Revenus d’investissements à payer sur les droits de pension	/	Investment income payable on pension entitlements : D442
 * - Revenus d’investissements attribués aux détenteurs de parts de fonds d’investissement	/	Investment income attributable to collective investment fund share holders : D443
 * - Cotisations et prestations sociales	/	Social contributions and social benefits : D6
 * - Cotisations sociales effectives à la charge des personnes n’occupant pas un emploi	/	Compulsory actual social contributions by the non-employed : D613CN
 * - Cotisations sociales effectives volontaires des ménages	/	Voluntary households’ actual social contributions : D613V
 * - Aides à l’investissement	/	Investment grants : D92
 * - Autres transferts en capital	/	Other capital transfers : D99
 * - Total des recettes fiscales	/	Total tax revenue : ODA
 * - Produit total des impôts et cotisations sociales après déduction des montants dus non recouvrables	/	Total receipts from taxes and social contributions after deduction of amounts assessed but unlikely to be collected : ODB
 * - Charge fiscale = produit total des impôts et cotisations sociales obligatoires après déduction des montants dus non recouvrables	/	Tax burden = total receipts from taxes and compulsory social contributions after deduction of amounts assessed but unlikely to be collected : ODD
 * - Produit intérieur net de CCF	/	Domestic product net of consumption of fixed capital : B1NQ
 * - Produit total des impôts et cotisations sociales nettes (y compris cotisations sociales imputées) après déduction des montants dus non recouvrables	/	Total receipts from taxes and social contributions (including imputed social contributions) after deduction of amounts assessed but unlikely to be collected : ODC
 * - Revenu d’entreprise brut	/	Gross corporate income : B4G
 * - Revenu national net	/	Net national income  : B5NQ
 * - Écart entre capacité ou besoin de financement et solde des flux nets d’actifs et passifs financiers (B9NF – B9F)	/	Discrepancy between the financial (B9F) and non-financial (B9) net lending/borrowing : B9FX9
 * - Variations de la valeur nette due à l’épargne et aux transferts de capital	/	Changes in net worth due to saving and capital transfers : B101
 * - Variation valeur nette dues aux changements de volume et ajustement	/	Changes in net worth due to volume changes and adjustment : B102
 * - Variation valeur nette dues aux réévaluations	/	Changes in net worth due to reevaluations : B103
 * - Coefficient technique	/	Technical coefficient : _COEFF_TECHNIQUE
 * - Marges de commerce	/	Trade margins : OTTM1
 * - Marges de transport	/	Transport margins : OTTM2
 * - Total ressources prix d’acquisition	/	Total resources at purchaser price : TSPP
 * - Impôts sur le revenu des personnes physiques ou des ménages, y compris les gains de détention (D51a + D51c1)	/	Taxes on individual or household income including holding gains : D51M
 * - Impôts sur le revenu ou les bénéfices des sociétés, y compris les gains de détention (D51b + D51c2)	/	Taxes on the income or profits of corporations including holding gains : D51O
 * - Transferts en capital pour admissions en non valeur	/	Capital transfers for non-value admissions : D995
 * - Déficit au sens de Maastricht en points de PIB	/	Deficit according to Maastricht in GDP points : _MA_PPIB
 * - Déficit au sens de Maastricht	/	Maastricht deficit : MA
 * - Production pour usage final propre, coût imputable à la rémunération des salariés (finalité GFSM)	/	Output for own final use, cost attributable to compensation of employees (GFSM purpose) : P12_GFSM_D1
 * - Production pour usage final propre, coût imputable à la consommation intermédiaire (finalité GFSM)	/	Output for own final use, cost attributable to intermediate consumption (GFSM purpose) : P12_GFSM_P2
 * - Production pour usage final propre, coût imputable à la consommation de capital fixe (finalité GFSM)	/	Output for own final use, cost attributable to consumption of fixed capital (GFSM purpose) : P12_GFSM_P51C
 * - Partie des crédits d’impôts qui excède les créances des contribuables	/	'Portion of tax credits in excess of taxpayers'' claims' : TC
 * - Subventions sur les produits à payer	/	Subsidies on products, payable (positive sign, for reporting in GFS presentation) : D31P
 * - Total des crédits d’impôts à payer	/	Total payable tax credits   : PTC
 * - Prestations sociales en espèces et en nature de produits marchands	/	Social benefits other than social transfers in kind and social transfers in kind - purchased market production : D6M
 * - Acquisition nette d’actifs non financiers	/	Net acquisition of non-financial assets : P5L
 * - Autres subventions sur la production à payer	/	Other subsidies on production, payable (positive sign, for reporting in GFS presentation) : D39P
 * - Subventions à payer (signe positif, pour la déclaration dans la présentation des SFP)	/	Subsidies, payable (positive sign, for reporting in GFS presentation) : D3P
 * - Autres subventions sur la production à recevoir	/	Other subsidies on production, receivable (positive sign, for reporting in GFS presentation) : D39R
 * - Montants compensatoires monétaires prélevés a l’importation	/	Monetary compensatory amounts on imports : D2122B
 * - Droits d’accise	/	Excise duties : D2122C
 * - Droits d’accise et taxes à la consommation	/	Excise duties and consumption taxes : D214A
 * - Droits de timbre	/	Stamp taxes : D214B
 * - Impôts sur les opérations financières et les opérations en capital	/	Taxes on financial and capital transactions : D214C
 * - Taxe sur les certificats d’immatriculation des véhicules	/	Tax on vehicle registration certificates : D214D
 * - Taxes sur les spectacles et divertissements	/	Taxes on entertainment : D214E
 * - Taxes sur les loteries, les jeux et les paris	/	Taxes on lotteries, gambling and betting : D214F
 * - Taxes sur les primes d’assurance	/	Taxes on insurance premiums : D214G
 * - Autres impôts sur des services détermines	/	Other taxes on specified services : D214H
 * - Impôts généraux sur les ventes ou le chiffre d’affaires	/	Taxes on general sales or turnover  : D214I
 * - Autres impôts sur les produits n,c,a,	/	Other taxes on products n. e. c. : D214L
 * - Impôts fonciers, impôts immobiliers ou impôts sur d’autres structures	/	Property taxes, real estate taxes or taxes on other structures : D29A
 * - Impôts sur l’utilisation d’actifs fixes	/	Taxes on the use of fixed assets : D29B
 * - Total des impôts sur la masse salariale	/	Total  payroll taxes : D29C
 * - Patentes et licences	/	Patents and licences : D29E
 * - Impôts sur la pollution	/	Taxes on pollution : D29F
 * - Autres impôts nets sur la production n,c,a,	/	Other taxes on production not elsewhere classified : D29H
 * - Impôts sur le revenu des personnes physiques ou des ménages, a l’exclusion des gains de détention	/	Taxes on personal or household income, excluding holding gains : D51A
 * - Impôts sur le revenu ou les bénéfices des sociétés a l’exclusion des gains de détention	/	Taxes on the income or profits of corporations excluding holding gains : D51B
 * - Autres impôts sur le revenu n,c,a,	/	Other taxes on income n.e.c. : D51E
 * - Impôts courants sur le capital	/	Current taxes on capital : D59A
 * - Paiements effectués par les ménages en vue de l’obtention de licences	/	Payments by households for licences : D59D
 * - Autres impôts courants n,c,a,	/	Other current taxes n.e.c. : D59F
 * - Cotisations sociales effectives obligatoires à la charge des employeurs	/	Compulsory employers’ actual social contributions : D611C
 * - Cotisations sociales effectives obligatoires à la charge des ménages	/	Compulsory households’ actual social contributions : D613C
 * - Transferts en capital	/	Capital transfers : D9
 * - Impôts sur les transferts en capital	/	Taxes on capital transfers : D91A
 * - Prélèvements sur le capital	/	Capital levies : D91B
 * - Autres impôts en capital n,c,a,	/	Other capital taxes n.e.c. : D91C
 * - Impôts sur les produits dus non recouvrables	/	Taxes on products assessed but unlikely to be collected : D995A
 * - Autres impôts sur la production dus non recouvrables	/	Other taxes on production assessed but unlikely to be collected : D995B
 * - Impôts sur le revenu dus non recouvrables	/	Taxes on income assessed but unlikely to be collected : D995C
 * - Autres impôts courants dus non recouvrables 	/	Other current taxes assessed but unlikely to be collected : D995D
 * - Cotisations sociales effectives à la charge des employeurs dues non recouvrables	/	Actual social security contributions payable by employers not recoverable : D995E
 * - Cotisations sociales effectives à la charge des salariés dues non recouvrables	/	Actual social contributions payable by employees not recoverable : D995FE
 * - Cotisations sociales effectives a la charge des non employés dues non recouvrables	/	Actual social contributions payable by non-employees  not recoverable : D995FN
 * - Cotisations sociales effectives à la charge des travailleurs indépendants dues non recouvrable	/	Actual social contributions payable by self-employed workers not recoverable : D995FS
 * - Cotisations sociales effectives à la charge des ménages dues non recouvrables	/	Actual social contributions payable by households not recoverable : D995F
 * - Autres impôts sur la production + impôts courants sur le revenu, le patrimoine, etc, + ajustement pour variations des droits à pension	/	Other taxes on production + Current taxes on income, wealth, etc. + Adjustment for the change in pension entitlements : OED
 * - Consommation intermédiaire + autres impôts sur la production + impôts courants sur le revenu, le patrimoine, etc, + ajustement pour variations des droits à pension	/	Intermediate consumption + Other taxes on production + Current taxes on income, wealth, etc. + Adjustment for the change in pension entitlements : OEC
 * - Solde des flux nets d’actifs et passifs financiers	/	Financial net lending/borrowing : B9F
 */
	STO: DD_CNA_AGREGATS_CodeDictionary["STO"][keyof DD_CNA_AGREGATS_CodeDictionary["STO"]];

/** Possible values for : Position de compte	/	Accounting entry : 
 * - Ressource ou crédit	/	Credit or resources : C
 * - Emploi ou débit	/	Debit or uses : D
 * - Solde	/	Balance ie Credits minus Debits : B
 * - Non applicable	/	Not applicable : _Z
 */
	ACCOUNTING_ENTRY: DD_CNA_AGREGATS_CodeDictionary["ACCOUNTING_ENTRY"][keyof DD_CNA_AGREGATS_CodeDictionary["ACCOUNTING_ENTRY"]];

/** Possible values for : Produit	/	Product : 
 * - Total	/	Total : _T
 */
	PRODUCT: DD_CNA_AGREGATS_CodeDictionary["PRODUCT"][keyof DD_CNA_AGREGATS_CodeDictionary["PRODUCT"]];

/** Possible values for : Fréquence	/	Frequency : 
 * - Annuel	/	Annual : A
 */
	FREQ: DD_CNA_AGREGATS_CodeDictionary["FREQ"][keyof DD_CNA_AGREGATS_CodeDictionary["FREQ"]];

/** Possible values for : Secteur institutionnel	/	Reference sector : 
 * - Économie totale	/	Total economy : S1
 * - Administrations publiques	/	General government : S13
 * - Ménages	/	Households : S14
 * - Ménages hors entrepreneurs individuels	/	Households excluding sole proprietorship : S14B
 * - Institutions sans but lucratif au services des ménages	/	Non profit institutions serving households : S15
 * - Sociétés et entreprises individuelles non financières	/	Non financial corporations and unincorporated enterprises : S11X14AA
 * - Sociétés non financières	/	Non financial corporations : S11
 * - Sociétés et entreprises individuelles financières	/	Financial corporations and unincorporated enterprises : S12X14AF
 * - Organismes divers d’administration centrale	/	Central government, extra-budgetary units : S13112
 * - Sociétés financières	/	Financial corporations : S12
 * - Administrations locales (à l’exclusion de la sécurité sociale)	/	Local government excluding social security : S1313
 * - Administration centrale (à l’exclusion de la sécurité sociale)	/	Central government excluding social security : S1311
 * - Administrations de sécurité sociale	/	Social security funds : S1314
 * - État	/	Central government, budgetary units : S13111
 * - Entreprises individuelles non financières	/	Non financial sole proprietorship : S14AA
 * - Ménages et institutions sans but lucratif au services des ménages	/	Households and non profit institutions serving households (NPISH) : S1M
 * - APU, ménages et institutions sans but lucratif au services des ménages	/	General government, households and non profit institutions serving households : S1L
 * - Sociétés financières : services principalement financiers, hors assurance	/	Sociétés financières : services principalement financiers, hors assurance : S12K64
 * - Sociétés financières : services principalement d’auxiliaires financiers	/	Sociétés financières : services principalement d’auxiliaires financiers : S12K66
 * - Sociétés financières : services principalement d’assurance	/	Sociétés financières : services principalement d’assurance : S12K65
 * - Non pertinent	/	Not applicable : _Z
 * - Biens et services	/	Goods and services : SBS
 * - Total des secteurs résidents	/	Total of domestic sectors : S10
 * - Administrations publiques et institutions et organes de l’Union européenne	/	General government and institutions of the European Union (ESA GFS concept) : SZV
 * - Non sectorisé	/	Not sectorised : S1N
 * - Administration d’états fédérés (à l’exclusion de la sécurité sociale)	/	State government excluding social security : S1312
 * - Reste du monde	/	Rest of the world : S2
 * - Institutions de l’Union Européenne	/	Institutions of the European Union (ESA GFS concept) : SZU
 */
	REF_SECTOR: DD_CNA_AGREGATS_CodeDictionary["REF_SECTOR"][keyof DD_CNA_AGREGATS_CodeDictionary["REF_SECTOR"]];

/** Possible values for : Période temporelle	/	Time period : 
- 2023- 2022- 2021- 2020- 1981- 1980- 1979- 1978- 1977- 1976- 1975- 2019- 1974- 2018- 1973- 1972- 1971- 2017- 2016- 1970- 1969- 2015- 1968- 1967- 2014- 1966- 1965- 2013- 1964- 2012- 1963- 1962- 2011- 1961- 2010- 1960- 1959- 1958- 1957- 1956- 1955- 1954- 1953- 2009- 2008- 2007- 2006- 2005- 2004- 2003- 2002- 2001- 2000- 1999- 1952- 1998- 1951- 1950- 1997- 1996- 1995- 1994- 1993- 1992- 1991- 1990- 1989- 1988- 1987- 1986- 1985- 1984- 1983- 1982- 1949- 2024 */
	TIME_PERIOD: DD_CNA_AGREGATS_CodeDictionary["TIME_PERIOD"][keyof DD_CNA_AGREGATS_CodeDictionary["TIME_PERIOD"]];

/** Possible values for : Zone de contrepartie	/	Counterpart area : 
 * - Monde	/	World (all areas, including reference area, including IO) : W0
 * - Reste du monde	/	Rest of the World : W1
 * - Hors Union Européenne	/	Extra-EU (changing composition) : D0
 * - Territoire national	/	Domestic (home or reference area) : W2
 * - Intérieur vis-à-vis du monde plus reste du monde vis-à-vis de l'intérieur	/	Domestic vis-à-vis world plus rest of the world vis-à-vis domestic : W08
 * - Union Européenne (Etats membres et institutions)	/	EU (Member States and Institutions of the European Union) changing composition : B0
 * - Zone euro (Etats membres et institutions) 	/	Euro area (Member States and Institutions of the Euro Area) changing composition : U2
 * - Institutions de l’Union Européenne	/	All European Community Institutions, Organs and Organisms, including ECB, ESM and EFSF : 4Y
 * - Pays de l’Union Européenne participant au mécanisme de surveillance unique	/	EU countries participating in the Single Supervisory Mechanism (SSM) (changing composition) : B01
 * - Pays membres de la Zone Euro (composition fixe, au 1er janvier 2023)	/	Euro area 20 (fixed composition) as of 1 January 2023 : I9
 * - Pays membres de l’Union Européenne et hors de la Zone Euro (composition fixe, au 1er janvier 2023)	/	EU27 member states not belonging to Euro area 20 (fixed composition) as of 1 January 2023 : K11
 * - Pays hors pays membres de l’Union Européenne (composition fixe, au 31 janvier 2020,  post brexit)	/	Extra-EU 27 (fixed composition) as of 31 January 2020 (brexit) : D6
 * - Pays membres de l’Union Européenne (composition fixe, au 31 janvier 2020, post brexit)	/	EU27 (fixed composition) as of 31 January 2020 (brexit) : B6
 * - Pays hors pays membres de la Zone Euro (composition fixe, au 1er janvier 2023)	/	Extra-Euro area 20 (fixed composition) as of 1 January 2023 : J9
 */
	COUNTERPART_AREA: DD_CNA_AGREGATS_CodeDictionary["COUNTERPART_AREA"][keyof DD_CNA_AGREGATS_CodeDictionary["COUNTERPART_AREA"]];

/** Possible values for : Unité de mesure	/	Unit measure : 
 * - Devise nationale (Euros)	/	Domestic currency (Euros) : XDC
 * - Indice	/	Index : IX
 * - Pourcentage	/	Percent : PT
 * - Personnes	/	Persons : PS
 * - Équivalent temps plein	/	Full time equivalent : FT
 * - Heures travaillées	/	Hours worked : HW
 * - Durée annuelle travaillée	/	DAT : DAT
 * - Nombre	/	Number : _Z
 */
	UNIT_MEASURE: DD_CNA_AGREGATS_CodeDictionary["UNIT_MEASURE"][keyof DD_CNA_AGREGATS_CodeDictionary["UNIT_MEASURE"]];

/** Possible values for : Classe d'actifs passifs	/	Instrument asset : 
 * - Total	/	Total : _Z
 * - Actifs non financiers produits (brut)	/	Produced non-financial assets (gross) : N1G
 * - Actifs fixes par type d’actifs (brut)	/	Fixed assets by type of asset (gross) : N11G
 * - Logements (brut)	/	Dwellings (gross) : N111G
 * - Autres bâtiments et ouvrages de génie civil (brut)	/	Other buildings and structures (gross) : N112G
 * - Matériels de transport (brut)	/	Transport equipment (gross) : N1131G
 * - Équipements TIC (brut)	/	ICT equipment (gross) : N1132G
 * - Ressources biologiques cultivées (brut)	/	Cultivated biological resources (gross) : N115G
 * - Droits de propriété intellectuelle (brut)	/	Intellectual property products (gross) : N117G
 * - Machines et équipement + systèmes d’armes (N113 + N114) (brut)	/	Machinery and equipment and weapons systems (gross) : N11MG
 * - Autres machines et équipements + systèmes d’armes (N1139+N114) (brut)	/	Other machinery and equipment and weapons systems (gross) : N11OG
 * - Actifs fixes par type d’actifs (net)	/	Fixed assets by type of asset (net) : N11N
 */
	INSTR_ASSET: DD_CNA_AGREGATS_CodeDictionary["INSTR_ASSET"][keyof DD_CNA_AGREGATS_CodeDictionary["INSTR_ASSET"]];

/** Possible values for : Activité économique	/	Economic activity : 
 * - Total	/	Total : _T
 */
	ACTIVITY: DD_CNA_AGREGATS_CodeDictionary["ACTIVITY"][keyof DD_CNA_AGREGATS_CodeDictionary["ACTIVITY"]];

}

export interface DDCNAAGREGATSAttributes {
/** Possible values for : Statut de l'observation	/	Observation status : 
 * - Valeur provisoire	/	Provisional value : P
 * - Normale	/	Normal : A
 * - Valeur manquante : les données existent mais ne sont pas collectées (non disponible : nd)	/	Missing value : data exist but were not collected : L
 * - Valeur manquante : les données n’existent pas (sans objet : so)	/	Missing value : data cannot exist : M
 */
	OBS_STATUS: DD_CNA_AGREGATS_CodeDictionary["OBS_STATUS"][keyof DD_CNA_AGREGATS_CodeDictionary["OBS_STATUS"]];

    LAST_UPDATE:       null;
    TABLE_IDENTIFIER:  null;
/** Possible values for : Décimales	/	Decimals : 
- 1- 3 */
	DECIMALS: DD_CNA_AGREGATS_CodeDictionary["DECIMALS"][keyof DD_CNA_AGREGATS_CodeDictionary["DECIMALS"]];

/** Possible values for : Quantité d'unités (en puissance de 10)	/	Quantity of units (in power of 10) : 
- 6- 0- 3 */
	UNIT_MULT: DD_CNA_AGREGATS_CodeDictionary["UNIT_MULT"][keyof DD_CNA_AGREGATS_CodeDictionary["UNIT_MULT"]];

    REF_PERIOD_DETAIL: null;
/** Possible values for : Statut de confidentialité	/	Confidentiality status : 
 * - Diffusable	/	Free for publication : F
 */
	CONF_STATUS: DD_CNA_AGREGATS_CodeDictionary["CONF_STATUS"][keyof DD_CNA_AGREGATS_CodeDictionary["CONF_STATUS"]];

/** Possible values for : Version	/	Version : 
 * - Provisoire	/	Provisional : PROV
 * - Semi-définitif	/	Semi-final : SD
 * - Définitif	/	Final : D
 */
	OBS_STATUS_FR: DD_CNA_AGREGATS_CodeDictionary["OBS_STATUS_FR"][keyof DD_CNA_AGREGATS_CodeDictionary["OBS_STATUS_FR"]];

/** Possible values for : Année de référence de l'indice de prix	/	Reference year price : 
- 2020 */
	REF_YEAR_PRICE: DD_CNA_AGREGATS_CodeDictionary["REF_YEAR_PRICE"][keyof DD_CNA_AGREGATS_CodeDictionary["REF_YEAR_PRICE"]];

}
