import { DD_CNA_APU_CodeDictionary } from "./DD_CNA_APU_codeDictionary";

export interface DDCNAAPUDimensions {
/** Possible values for : Transformation chronologique	/	Transformation : 
 * - Aucune	/	None : N
 * - Croissance annuelle de l’indice	/	Index growth rate, over 1 year : GY_IX
 * - Croissance annuelle 	/	Growth rate, over 1 year : GY
 */
	TRANSFORMATION: DD_CNA_APU_CodeDictionary["TRANSFORMATION"][keyof DD_CNA_APU_CodeDictionary["TRANSFORMATION"]];

/** Possible values for : Valorisation des prix	/	Prices : 
 * - En valeur aux prix courants	/	Current prices : V
 * - Au coût de remplacement	/	Current replacement cost : U
 */
	PRICES: DD_CNA_APU_CodeDictionary["PRICES"][keyof DD_CNA_APU_CodeDictionary["PRICES"]];

/** Possible values for : Maturité	/	Maturity : 
 * - Non applicable	/	Not applicable : _Z
 * - Maturité à l’origine courte (jusqu’à 1 an)	/	Short-term original maturity (up to 1 year) : S
 * - Maturité à l’origine de long terme (Plus d’un an ou non précisé)	/	Long-term original maturity (over 1 year or no stated maturity) : L
 */
	MATURITY: DD_CNA_APU_CodeDictionary["MATURITY"][keyof DD_CNA_APU_CodeDictionary["MATURITY"]];

/** Possible values for : Valuation	/	Valuation : 
 * - Evaluation standard	/	Standard valuation based on SNA/ESA : S
 * - Valeur de rédemption	/	Redemption value : R
 */
	VALUATION: DD_CNA_APU_CodeDictionary["VALUATION"][keyof DD_CNA_APU_CodeDictionary["VALUATION"]];

/** Possible values for : Type de dépense de consommation	/	Expenditure : 
 * - Total	/	Total : _Z
 * -     10.5 - Chômage	/	Unemployment : GF1005
 * -     10.2 - Vieillesse	/	Old age : GF1002
 * -     10.3 - Survivants	/	Survivors : GF1003
 */
	EXPENDITURE: DD_CNA_APU_CodeDictionary["EXPENDITURE"][keyof DD_CNA_APU_CodeDictionary["EXPENDITURE"]];

/** Possible values for : Opération comptable	/	Stock, flow and operation : 
 * - Primes nettes d’assurance-dommages	/	Net non-life insurance premiums : D71
 * - Cotisations sociales nettes	/	Net social contributions : D61
 * - Clôture du bilan/positions/flux	/	Closing balance sheet/Positions/Stocks : LE
 * - Impôts sur la production et les importations	/	Taxes on production and imports : D2
 * - Autres transferts courants	/	Other current transfers : D7
 * - Aides à l’investissement	/	Investment grants : D92
 * - Épargne brute net de CCF	/	Savings net of consumption of fixed capital : B8N
 * - Coopération internationale courante	/	Current international cooperation : D74
 * - Revenus de la propriété	/	Property income : D4
 * - Revenus distribués des sociétés	/	Distributed income of corporations : D42
 * - Impôts en capital	/	Capital taxes : D91
 * - Loyers	/	Rent : D45
 * - Total des recettes des administrations publiques	/	Total government revenue : OTR
 * - Suppléments de cotisations sociales à la charge des ménages	/	Households’ social contribution supplements : D614
 * - Autres revenus de la propriété (D42 + D43 + D44 + D45)	/	Property income other than interest : D4N
 * - Production pour usage final propre, coût imputable à la consommation intermédiaire (finalité GFSM)	/	Output for own final use, cost attributable to intermediate consumption (GFSM purpose) : P12_GFSM_P2
 * - Formation brute de capital/Formation nette de capital	/	Gross capital formation : P5
 * - Transferts en capital	/	Capital transfers : D9
 * - Acquisitions moins cessions d’actifs non produits	/	Acquisitions minus disposals of non-produced assets : NP
 * - Revenus d’investissements	/	Other investment income : D44
 * - Formation brute de capital fixe	/	Gross fixed capital formation : P51G
 * - Transferts courants entre administrations publiques	/	Current transfers within general government : D73
 * - Intérêts bruts de correction SIFIM	/	Interest before FISIM allocation : D41G
 * - Prestations sociales autres que transferts sociaux en nature	/	Social benefits other than social transfers in kind : D62
 * - Bénéfices réinvestis d’investissements directs étrangers	/	Reinvested earnings on FDI (Excluding IF) : D43
 * - Ressources propres de l’UE fondées sur la TVA et le RNB	/	Value Added Tax and GNI - based EU own resources : D76
 * - Capacité (+) ou besoin (-) de financement	/	Net lending(+) / net borrowing (-) : B9
 * - Total des dépenses des administrations publiques	/	Total government expenditure : OTE
 * - Ajustement pour variation des droits à pension	/	Adjustment for the change in pension entitlements : D8
 * - Impôts sur le revenu	/	Taxes on income assessed but unlikely to be collected : D51
 * - Épargne brute	/	Gross savings : B8G
 * - Consommation de capital fixe	/	Consumption of fixed capital : P51C
 * - Indemnités d’assurance-dommages	/	Non-life insurance claims : D72
 * - Subventions sur les produits à payer	/	Subsidies on products, payable (positive sign, for reporting in GFS presentation) : D31P
 * - Cotisations sociales effectives à la charge des employeurs	/	Employers’ actual social contributions : D611
 * - Paiements au titre de la production non marchande	/	Payments for other non-market output : P131
 * - Production pour usage final propre, coût imputable à la consommation de capital fixe (finalité GFSM)	/	Output for own final use, cost attributable to consumption of fixed capital (GFSM purpose) : P12_GFSM_P51C
 * - Autres transferts en capital	/	Other capital transfers : D99
 * - Transferts en capital pour admissions en non valeur	/	Capital transfers for non-value admissions : D995
 * - Impôts sur le revenu des personnes physiques ou des ménages, y compris les gains de détention (D51a + D51c1)	/	Taxes on individual or household income including holding gains : D51M
 * - Autre production non marchande	/	Other non-market output, n.e.c. : P132
 * - Subventions	/	Subsidies : D3
 * - Production marchande et production pour usage final propre	/	Market output and output for own final use : P1M
 * - Production pour usage final propre, coût imputable à la rémunération des salariés (finalité GFSM)	/	Output for own final use, cost attributable to compensation of employees (GFSM purpose) : P12_GFSM_D1
 * - Revenu disponible net de CCF	/	Disposable income, net of consumption of fixed capital : B6N
 * - Production non marchande	/	Non-market output : P13
 * - Production marchande	/	Market output : P11
 * - Autres transferts en capital et aides à l’investissement à recevoir	/	Other capital transfers and investment aid receivable : D9N
 * - Transferts sociaux en nature – production marchande achetée	/	Social transfers in kind - purchased market production : D632
 * - Transferts courants divers	/	Miscellaneous current transfers : D75
 * - Subventions à recevoir	/	Subsidies, receivables : D3R
 * - Impôts courants sur le revenu, le patrimoine, etc.	/	Current taxes on income, wealth, etc. : D5
 * - Production marchande, production pour emploi final propre et paiements au titre de la production non marchande	/	Market output, output for own final use and payments for other non-market output : P1O
 * - Cotisations sociales effectives à la charge des ménages	/	Households’ actual social contributions : D613
 * - Valeur ajoutée brute	/	Gross value added : B1G
 * - Variation stocks + Acquis, moins cessions objets valeur (OPP52+OPP53)	/	Changes in inventories and acquisition minus disposals of valuables : P5M
 * - Autres subventions sur la production à payer	/	Other subsidies on production, payable (positive sign, for reporting in GFS presentation) : D39P
 * - Autres subventions sur la production à recevoir	/	Other subsidies on production, receivable (positive sign, for reporting in GFS presentation) : D39R
 * - Intérêts	/	Interest : D41
 * - Taxes de type TVA	/	Value added type taxes : D211
 * - Valeur ajoutée nette de CCF	/	Value added net of consumption of fixed capital : B1N
 * - Total des crédits d’impôts à payer	/	Total payable tax credits   : PTC
 * - Dépense de consommation individuelle	/	Individual consumption expenditure : P31
 * - Autres impôts sur la production	/	Other taxes on production : D29
 * - Impôts sur les produits	/	Taxes on products : D21
 * - Excédent d’exploitation net de CCF	/	Operating surplus, net of consumption of fixed capital : B2N
 * - Production pour usage final propre	/	Output for own final use : P12
 * - Autres impôts courants	/	Other current taxes : D59
 * - Prestations sociales en espèces et en nature de produits marchands	/	Social benefits other than social transfers in kind and social transfers in kind - purchased market production : D6M
 * - Rémunération du service des régimes d’assurance sociale	/	Social insurance scheme service charges (-) : D61SC
 * - Impôts sur le revenu ou les bénéfices des sociétés, y compris les gains de détention (D51b + D51c2)	/	Taxes on the income or profits of corporations including holding gains : D51O
 * - Production	/	Output : P1
 * - Acquisition nette d’actifs non financiers	/	Net acquisition of non-financial assets : P5L
 * - Consommation intermédiaire	/	Intermediate consumption : P2
 * - Dépense de consommation collective	/	Collective consumption expenditure : P32
 * - Partie des crédits d’impôts qui excède les créances des contribuables	/	'Portion of tax credits in excess of taxpayers'' claims' : TC
 * - Cotisations sociales à la charge des employeurs	/	'Employers' social contributions : D12
 * - Solde des revenus primaires net de CCF	/	Balance of primary income net of consumption of fixed capital : B5N
 * - Subventions à payer (signe positif, pour la déclaration dans la présentation des SFP)	/	Subsidies, payable (positive sign, for reporting in GFS presentation) : D3P
 * - Salaires et traitements bruts	/	Gross wages and salaries : D11
 * - Rémunération des salariés	/	Compensation of employees : D1
 * - Autres subventions sur la production	/	Other subsidies on production : D39
 * - Autres acquisitions moins cessions d’actifs non financiers	/	Other acquisitions minus disposals of non-financial assets : P5K
 * - Transferts en capital pour admissions en non valeur à recevoir	/	Capital transfers for non-value admissions to be received : D995R
 * - Transferts de recettes fiscales	/	Taxes transfers : D733
 * - Total des dépenses des administrations publiques en pourcentage du PIB	/	Total general government expenditure as a percentage of GDP : _OTE_PPIB
 * - Total des recettes des administrations publiquesen pourcentage du PIB	/	Total general government revenue as a percentage of GDP : _OTR_PPIB
 * - Cotisations sociales imputées à la charge des employeurs	/	Employers’ imputed social contributions : D612
 * - Autres transferts courants	/	Other current transfers : D7HAPU
 * - Capitalisation de la production pour emploi final propre	/	Capitalization of the production for own final use : P51G_CPEFP
 * - Dépenses hors éléments imputés	/	Expenditure excluding imputed items : TEHI
 * - Dépenses de fonctionnement	/	Operating expenditure : TEF
 * - Ensemble des prélèvements obligatoires	/	All mandatory levies : PROB
 * - Cotisations sociales imputées à la charge des employeurs	/	'Employers' imputed social contributions : D122
 * - Prestations et autres transferts	/	Benefits and other transfers : OPAT
 * - Impôts en capital à recevoir	/	Capital taxes receivable : D91R
 * - Crédits d’impôts enregistrées en recette	/	Tax credits recorded as revenue : PTR
 * - Autres transferts	/	Other transfers : TRAT
 * - Impôts et cotisations sociales	/	Taxes and social contribution : TRICS
 * - Recettes hors éléments imputés	/	Revenue excluding imputed items : TRHI
 * - Recettes de production	/	Production revenues : TRP
 * - Déficit au sens de Maastricht en points de PIB	/	Deficit according to Maastricht in GDP points : _MA_PPIB
 * - Déficit au sens de Maastricht	/	Maastricht deficit : MA
 * - Clôture du bilan/positions/flux, en pourcentage du PIB	/	Closing balance sheet/Positions/Stocks, as a pourcentage of GDP : _GD_PPIB
 * - Impôts sur les produits, à l‘exclusion de la TVA et des impôts sur les importations	/	Taxes on products except Value Added Tax, import and export taxes : D214
 * - Dette nette en pourcentage du PIB	/	Net debt as a percentage of GDP : _DETNET_PPIB
 * - Impôts et droits sur les importations, à l’exclusion de la TVA	/	Taxes and duties on imports excluding Value Added Tax : D212
 * - Subventions sur les produits	/	Subsidies on products : D31
 * - Cotisations sociales effectives à la charge des travailleurs indépendants	/	Compulsory actual social contributions by the self-employed : D613CS
 * - Aides à l’investissement à payer	/	Investment grants payable : D92P
 * - Cotisations sociales effectives obligatoires à la charge des salariés	/	Compulsory employees’ actual social contributions : D613CE
 */
	STO: DD_CNA_APU_CodeDictionary["STO"][keyof DD_CNA_APU_CodeDictionary["STO"]];

/** Possible values for : Consolidation	/	Consolidation : 
 * - Consolidé	/	Consolidated : C
 * - Non consolidé	/	Non-consolidated : N
 * - Données consolidées intra et inter	/	Données consolidées intra et inter : CC
 * - Consolidant	/	Consolidating item : CI
 * - Partiellement consolidé ou agrégat contenant à la fois des valeurs consolidées et non consolidées	/	Partially consolidated or aggregate containing both consolidated and non-consolidated items : P
 * - FC_INTRA	/	FC_INTRA : FC_INTRA
 * - FC_INTRA_INTER	/	FC_INTRA_INTER : FC_INTRA_INTER
 */
	CONSOLIDATION: DD_CNA_APU_CodeDictionary["CONSOLIDATION"][keyof DD_CNA_APU_CodeDictionary["CONSOLIDATION"]];

/** Possible values for : Position de compte	/	Accounting entry : 
 * - Ressource ou crédit	/	Credit or resources : C
 * - Emploi ou débit	/	Debit or uses : D
 * - Solde	/	Balance ie Credits minus Debits : B
 * - Non applicable	/	Not applicable : _Z
 */
	ACCOUNTING_ENTRY: DD_CNA_APU_CodeDictionary["ACCOUNTING_ENTRY"][keyof DD_CNA_APU_CodeDictionary["ACCOUNTING_ENTRY"]];

/** Possible values for : Produit	/	Product : 
 * - Total	/	Total : _T
 */
	PRODUCT: DD_CNA_APU_CodeDictionary["PRODUCT"][keyof DD_CNA_APU_CodeDictionary["PRODUCT"]];

/** Possible values for : Fréquence	/	Frequency : 
 * - Annuel	/	Annual : A
 */
	FREQ: DD_CNA_APU_CodeDictionary["FREQ"][keyof DD_CNA_APU_CodeDictionary["FREQ"]];

/** Possible values for : Secteur institutionnel	/	Reference sector : 
 * - Administration d’états fédérés (à l’exclusion de la sécurité sociale)	/	State government excluding social security : S1312
 * - Administrations de sécurité sociale	/	Social security funds : S1314
 * - Administrations publiques	/	General government : S13
 * - Organismes divers d’administration centrale	/	Central government, extra-budgetary units : S13112
 * - Administrations locales (à l’exclusion de la sécurité sociale)	/	Local government excluding social security : S1313
 * - Administration centrale (à l’exclusion de la sécurité sociale)	/	Central government excluding social security : S1311
 * - État	/	Central government, budgetary units : S13111
 * - Institutions de l’Union Européenne	/	Institutions of the European Union (ESA GFS concept) : SZU
 * - Collectivités locales	/	Local government, budgetary units : S13131
 * - Régimes d’assurances sociales	/	Social security funds, budgetary units : S13141
 * - Organismes dépendants des assurances sociales	/	Social security funds, extra budgetary units : S13142
 * - Administrations publiques et institutions et organes de l’Union européenne	/	General government and institutions of the European Union (ESA GFS concept) : SZV
 * - Organismes divers d’administration locale	/	Local government, extra-budgetary units : S13132
 */
	REF_SECTOR: DD_CNA_APU_CodeDictionary["REF_SECTOR"][keyof DD_CNA_APU_CodeDictionary["REF_SECTOR"]];

/** Possible values for : Période temporelle	/	Time period : 
- 2021- 2024- 2004- 2003- 1991- 2002- 1983- 1990- 1988- 2022- 1978- 2008- 1994- 1986- 1985- 1993- 1992- 2010- 2001- 1982- 2014- 2020- 2000- 2018- 2012- 1971- 2016- 1976- 2017- 2006- 2023- 1995- 1997- 1981- 1996- 2009- 2015- 2019- 1989- 2011- 1970- 2005- 2007- 1966- 1979- 1998- 1975- 1984- 1987- 1980- 2013- 1954- 1999- 1951- 1962- 1949- 1956- 1955- 1969- 1953- 1968- 1961- 1959- 1977- 1974- 1957- 1972- 1963- 1950- 1960- 1958- 1967- 1965- 1952- 1964- 1973 */
	TIME_PERIOD: DD_CNA_APU_CodeDictionary["TIME_PERIOD"][keyof DD_CNA_APU_CodeDictionary["TIME_PERIOD"]];

/** Possible values for : Zone de contrepartie	/	Counterpart area : 
 * - Monde	/	World (all areas, including reference area, including IO) : W0
 * - Institutions de l’Union Européenne	/	All European Community Institutions, Organs and Organisms, including ECB, ESM and EFSF : 4Y
 */
	COUNTERPART_AREA: DD_CNA_APU_CodeDictionary["COUNTERPART_AREA"][keyof DD_CNA_APU_CodeDictionary["COUNTERPART_AREA"]];

/** Possible values for : Unité de mesure	/	Unit measure : 
 * - Devise nationale (Euros)	/	Domestic currency (Euros) : XDC
 * - Indice	/	Index : IX
 * - Pourcentage	/	Percent : PT
 */
	UNIT_MEASURE: DD_CNA_APU_CodeDictionary["UNIT_MEASURE"][keyof DD_CNA_APU_CodeDictionary["UNIT_MEASURE"]];

/** Possible values for : Secteur institutionnel de contrepartie	/	Counterpart sector : 
 * - Économie totale	/	Total economy : S1
 * - Administrations locales (à l’exclusion de la sécurité sociale)	/	Local government excluding social security : S1313
 * - Institutions de l’Union Européenne	/	Institutions of the EU : S212
 * - Administrations de sécurité sociale	/	Social security funds : S1314
 * - Administration centrale (à l’exclusion de la sécurité sociale)	/	Central government excluding social security : S1311
 * - Administration d’états fédérés (à l’exclusion de la sécurité sociale)	/	State government excluding social security : S1312
 * - Reste du monde	/	Rest of the world : S2
 */
	COUNTERPART_SECTOR: DD_CNA_APU_CodeDictionary["COUNTERPART_SECTOR"][keyof DD_CNA_APU_CodeDictionary["COUNTERPART_SECTOR"]];

/** Possible values for : Classe d'actifs passifs	/	Instrument asset : 
 * - Total	/	Total : _Z
 * - Titres de créance à court terme	/	Short term debt securities : F31
 * - Crédits à court terme	/	Credit lines : F41
 * - Titres de créance à long terme	/	Long term debt securities : F32
 * - Crédits à long terme	/	Long term loans : F42
 * - Titres de créance à court et long terme	/	Short and long term debt securities : F31_32
 * - Dépôts hors intérêts courus non échus	/	Deposits excluding accrued interests : F2N
 * - Autres actifs liquides	/	Other liquid assets : F511X52
 * - Dette au sens de Maastricht	/	Maastricht debt : GD
 * - Dette nette	/	Net debt : DETNET
 */
	INSTR_ASSET: DD_CNA_APU_CodeDictionary["INSTR_ASSET"][keyof DD_CNA_APU_CodeDictionary["INSTR_ASSET"]];

/** Possible values for : Activité économique	/	Economic activity : 
 * - Total	/	Total : _T
 */
	ACTIVITY: DD_CNA_APU_CodeDictionary["ACTIVITY"][keyof DD_CNA_APU_CodeDictionary["ACTIVITY"]];

}

export interface DDCNAAPUAttributes {
/** Possible values for : Statut de l'observation	/	Observation status : 
 * - Valeur manquante : les données n’existent pas (sans objet : so)	/	Missing value : data cannot exist : M
 * - Valeur provisoire	/	Provisional value : P
 * - Normale	/	Normal : A
 * - Valeur manquante : les données existent mais ne sont pas collectées (non disponible : nd)	/	Missing value : data exist but were not collected : L
 */
	OBS_STATUS: DD_CNA_APU_CodeDictionary["OBS_STATUS"][keyof DD_CNA_APU_CodeDictionary["OBS_STATUS"]];

    LAST_UPDATE:       null;
    TABLE_IDENTIFIER:  null;
/** Possible values for : Décimales	/	Decimals : 
- 1- 0- 3 */
	DECIMALS: DD_CNA_APU_CodeDictionary["DECIMALS"][keyof DD_CNA_APU_CodeDictionary["DECIMALS"]];

/** Possible values for : Quantité d'unités (en puissance de 10)	/	Quantity of units (in power of 10) : 
- 6- 0 */
	UNIT_MULT: DD_CNA_APU_CodeDictionary["UNIT_MULT"][keyof DD_CNA_APU_CodeDictionary["UNIT_MULT"]];

    REF_PERIOD_DETAIL: null;
/** Possible values for : Statut de confidentialité	/	Confidentiality status : 
 * - Diffusable	/	Free for publication : F
 */
	CONF_STATUS: DD_CNA_APU_CodeDictionary["CONF_STATUS"][keyof DD_CNA_APU_CodeDictionary["CONF_STATUS"]];

/** Possible values for : Version	/	Version : 
 * - Définitif	/	Final : D
 * - Provisoire	/	Provisional : PROV
 * - Semi-définitif	/	Semi-final : SD
 */
	OBS_STATUS_FR: DD_CNA_APU_CodeDictionary["OBS_STATUS_FR"][keyof DD_CNA_APU_CodeDictionary["OBS_STATUS_FR"]];

    REF_YEAR_PRICE:    null;
}
