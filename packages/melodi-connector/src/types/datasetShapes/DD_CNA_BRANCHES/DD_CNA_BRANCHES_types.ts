import { DD_CNA_BRANCHES_CodeDictionary } from "./DD_CNA_BRANCHES_codeDictionary";

export interface DDCNABRANCHESDimensions {
/** Possible values for : Transformation chronologique	/	Transformation : 
 * - Aucune	/	None : N
 * - Croissance annuelle 	/	Growth rate, over 1 year : GY
 */
	TRANSFORMATION: DD_CNA_BRANCHES_CodeDictionary["TRANSFORMATION"][keyof DD_CNA_BRANCHES_CodeDictionary["TRANSFORMATION"]];

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
	PRICES: DD_CNA_BRANCHES_CodeDictionary["PRICES"][keyof DD_CNA_BRANCHES_CodeDictionary["PRICES"]];

/** Possible values for : Type de dépense de consommation	/	Expenditure : 
 * - Total	/	Total : _Z
 */
	EXPENDITURE: DD_CNA_BRANCHES_CodeDictionary["EXPENDITURE"][keyof DD_CNA_BRANCHES_CodeDictionary["EXPENDITURE"]];

/** Possible values for : Opération comptable	/	Stock, flow and operation : 
 * - Production	/	Output : P1
 * - Consommation intermédiaire	/	Intermediate consumption : P2
 * - Rémunération des salariés	/	Compensation of employees : D1
 * - Salaires et traitements bruts	/	Gross wages and salaries : D11
 * - Valeur ajoutée brute	/	Gross value added : B1G
 * - Excédent brut d’exploitation et revenu mixte brut	/	Gross operating surplus and gross mixed income : B2A3G
 * - Excédent brut d’exploitation	/	Gross operating surplus : B2G
 * - Formation brute de capital fixe	/	Gross fixed capital formation : P51G
 * - Impôts sur la production et les importations	/	Taxes on production and imports : D2
 * - Impôts sur les produits	/	Taxes on products : D21
 * - Subventions	/	Subsidies : D3
 * - Subventions sur les produits	/	Subsidies on products : D31
 * - Produit intérieur brut	/	Gross domestic product : B1GQ
 * - Emploi total (peut être en personnes physiques, équivalent temps plein ou en heures travaillées)	/	Total employment (can be in persons, full time equivalent of hours worked)  : EMP
 * - Productivité horaire du travail (pht)	/	Hourly labour productivity  : _PHT
 * - Emploi des travailleurs indépendants dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées)	/	Employment of self-employed in resident production units (can be in persons, full time equivalent of hours worked) : SELF
 * - Emploi des salariés dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées)	/	Employment of employees in resident production units (can be in persons, full time equivalent of hours worked) : SAL
 * - Emploi déclaré des salariés dans les unités de production résidentes (peut être en personnes physiques, équivalent temps plein ou en heures travaillées)	/	Declared employment of employees in resident production units (can be in persons, full time equivalent of hours worked) : SALD
 * - Cotisations sociales à la charge des employeurs	/	'Employers' social contributions : D12
 * - Impôts sur production et importations, moins subventions (D2+D3)	/	Taxes on production and imports less subsidies : D2X3
 * - Clôture du bilan/positions/flux	/	Closing balance sheet/Positions/Stocks : LE
 * - Impôts moins subventions sur les produits (D21+D31)	/	Taxes less subsidies on products : D21X31
 * - Consommation de capital fixe	/	Consumption of fixed capital : P51C
 * - Autres impôts sur la production moins autres subventions sur la production	/	Other taxes on production minus other subsidies on production : D29X39
 * - Excédent d’exploitation/revenu mixte net de CCF	/	Operating surplus/mixed income net of consumption of fixed capital : B2A3N
 * - Divergence statistique	/	Statistical discrepancy : YA2
 * - Divergence statistique (approche par la production)	/	Statistical discrepancy (production approach) : YA1
 */
	STO: DD_CNA_BRANCHES_CodeDictionary["STO"][keyof DD_CNA_BRANCHES_CodeDictionary["STO"]];

/** Possible values for : Position de compte	/	Accounting entry : 
 * - Ressource ou crédit	/	Credit or resources : C
 * - Emploi ou débit	/	Debit or uses : D
 * - Solde	/	Balance ie Credits minus Debits : B
 * - Non applicable	/	Not applicable : _Z
 */
	ACCOUNTING_ENTRY: DD_CNA_BRANCHES_CodeDictionary["ACCOUNTING_ENTRY"][keyof DD_CNA_BRANCHES_CodeDictionary["ACCOUNTING_ENTRY"]];

/** Possible values for : Produit	/	Product : 
 * - Total	/	Total : _T
 */
	PRODUCT: DD_CNA_BRANCHES_CodeDictionary["PRODUCT"][keyof DD_CNA_BRANCHES_CodeDictionary["PRODUCT"]];

/** Possible values for : Fréquence	/	Frequency : 
 * - Annuel	/	Annual : A
 */
	FREQ: DD_CNA_BRANCHES_CodeDictionary["FREQ"][keyof DD_CNA_BRANCHES_CodeDictionary["FREQ"]];

/** Possible values for : Secteur institutionnel	/	Reference sector : 
 * - Économie totale	/	Total economy : S1
 * - Sociétés et entreprises individuelles non financières	/	Non financial corporations and unincorporated enterprises : S11X14AA
 * - Sociétés non financières	/	Non financial corporations : S11
 * - Sociétés financières	/	Financial corporations : S12
 * - Administrations publiques	/	General government : S13
 * - Ménages	/	Households : S14
 * - Institutions sans but lucratif au services des ménages	/	Non profit institutions serving households : S15
 * - Administration centrale (à l’exclusion de la sécurité sociale)	/	Central government excluding social security : S1311
 * - État	/	Central government, budgetary units : S13111
 * - Organismes divers d’administration centrale	/	Central government, extra-budgetary units : S13112
 * - Administrations locales (à l’exclusion de la sécurité sociale)	/	Local government excluding social security : S1313
 * - Administrations de sécurité sociale	/	Social security funds : S1314
 * - Ménages et institutions sans but lucratif au services des ménages	/	Households and non profit institutions serving households (NPISH) : S1M
 * - Sociétés et entreprises individuelles financières	/	Financial corporations and unincorporated enterprises : S12X14AF
 * - Ménages hors entrepreneurs individuels	/	Households excluding sole proprietorship : S14B
 * - Sociétés financières : services principalement financiers, hors assurance	/	Sociétés financières : services principalement financiers, hors assurance : S12K64
 * - Sociétés financières : services principalement d’auxiliaires financiers	/	Sociétés financières : services principalement d’auxiliaires financiers : S12K66
 * - Sociétés financières : services principalement d’assurance	/	Sociétés financières : services principalement d’assurance : S12K65
 * - Entreprises individuelles non financières	/	Non financial sole proprietorship : S14AA
 * - Biens et services	/	Goods and services : SBS
 * - Total des secteurs résidents	/	Total of domestic sectors : S10
 * - Non sectorisé	/	Not sectorised : S1N
 * - Administrations publiques et institutions et organes de l’Union européenne	/	General government and institutions of the European Union (ESA GFS concept) : SZV
 * - Administration d’états fédérés (à l’exclusion de la sécurité sociale)	/	State government excluding social security : S1312
 * - Institutions de l’Union Européenne	/	Institutions of the European Union (ESA GFS concept) : SZU
 */
	REF_SECTOR: DD_CNA_BRANCHES_CodeDictionary["REF_SECTOR"][keyof DD_CNA_BRANCHES_CodeDictionary["REF_SECTOR"]];

/** Possible values for : Période temporelle	/	Time period : 
- 2023- 2022- 2021- 2020- 2019- 2018- 2017- 2016- 2015- 2014- 2013- 2012- 2011- 2010- 2009- 2008- 2007- 2006- 2005- 2004- 2003- 2002- 2001- 2000- 1999- 1998- 1997- 1996- 1995- 1994- 1993- 1992- 1991- 1990- 1989- 1988- 1987- 1986- 1985- 1984- 1983- 1982- 1981- 1980- 1979- 1978- 1977- 1976- 1975- 1974- 1973- 1972- 1971- 1970- 1969- 1968- 1967- 1966- 1965- 1964- 1963- 1962- 1961- 1960- 1959- 1958- 1957- 1956- 1955- 1954- 1953- 1952- 1951- 1950- 1949- 2024 */
	TIME_PERIOD: DD_CNA_BRANCHES_CodeDictionary["TIME_PERIOD"][keyof DD_CNA_BRANCHES_CodeDictionary["TIME_PERIOD"]];

/** Possible values for : Zone de contrepartie	/	Counterpart area : 
 * - Monde	/	World (all areas, including reference area, including IO) : W0
 * - Territoire national	/	Domestic (home or reference area) : W2
 * - Intérieur vis-à-vis du monde plus reste du monde vis-à-vis de l'intérieur	/	Domestic vis-à-vis world plus rest of the world vis-à-vis domestic : W08
 */
	COUNTERPART_AREA: DD_CNA_BRANCHES_CodeDictionary["COUNTERPART_AREA"][keyof DD_CNA_BRANCHES_CodeDictionary["COUNTERPART_AREA"]];

/** Possible values for : Unité de mesure	/	Unit measure : 
 * - Devise nationale (Euros)	/	Domestic currency (Euros) : XDC
 * - Pourcentage	/	Percent : PT
 * - Personnes	/	Persons : PS
 * - Équivalent temps plein	/	Full time equivalent : FT
 * - Heures travaillées	/	Hours worked : HW
 * - Durée annuelle travaillée	/	DAT : DAT
 */
	UNIT_MEASURE: DD_CNA_BRANCHES_CodeDictionary["UNIT_MEASURE"][keyof DD_CNA_BRANCHES_CodeDictionary["UNIT_MEASURE"]];

/** Possible values for : Classe d'actifs passifs	/	Instrument asset : 
 * - Total	/	Total : _Z
 * - Actifs fixes par type d’actifs (brut)	/	Fixed assets by type of asset (gross) : N11G
 */
	INSTR_ASSET: DD_CNA_BRANCHES_CodeDictionary["INSTR_ASSET"][keyof DD_CNA_BRANCHES_CodeDictionary["INSTR_ASSET"]];

/** Possible values for : Activité économique	/	Economic activity : 
 * - Agriculture, sylviculture et pêche	/	Agriculture, forestry and fishing : A
 * - Pêche et aquaculture	/	Fishing and aquaculture : A03
 * - Industrie manufacturière, industries extractives et autres	/	Industry (except construction) : BTE
 * - Industries extractives, énergie, eau, gestion des déchets et dépollution	/	Mining and quarrying ; Electricity, gas, steam and air conditioning supply; Water supply; sewerage, waste management and remediation activities : B_D_E
 * - Culture et production animale, chasse et services annexes	/	Crop and animal production, hunting and related service activities : A01
 * - Extraction d'hydrocarbures	/	Extraction of crude petroleum and natural gas : B06
 * - Fabrication de denrées alimentaires, de boissons et de produits à base de tabac	/	Manufacture of food products; beverages and tobacco products : C10T12
 * - Sylviculture et exploitation forestière	/	Forestry and logging : A02
 * - Industries extractives	/	Mining and quarrying : B
 * - Extraction de minerais métalliques	/	Mining of metal ores : B07
 * - Autres industries manufacturières (C15, C23, C27, C31, C32, C33)	/	Other manufacturing (C15, C23, C27, C31, C32, C33) : C_OTH
 * - Autres industries extractives	/	Other mining and quarrying : B08
 * - Fabrication de textiles, industries de l'habillement, industrie du cuir et de la chaussure	/	Manufacture of textiles, wearing apparel, leather and related products : C13T15
 * - Industries alimentaires	/	Manufacture of food products : C10
 * - Fabrication de textiles	/	Manufacture of textiles : C13
 * - Services de soutien aux industries extractives	/	Mining support service activities : B09
 * - Extraction de houille et de lignite	/	Mining of coal and lignite : B05
 * - Industrie de l'habillement	/	Manufacture of wearing apparel : C14
 * - Fabrication de boissons	/	Manufacture of beverages : C11
 * - Travail du bois, industries du papier et imprimerie	/	Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials; manufacture of paper and paper products; printing and reproduction of recorded media : C16T18
 * - Industrie du cuir et de la chaussure	/	Manufacture of leather and related products : C15
 * - Fabrication de produits à base de tabac	/	Manufacture of tobacco products : C12
 * - Travail du bois et fabrication d'articles en bois et en liège, à l'exception des meubles ; fabrication d'articles en vannerie et sparterie	/	Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials : C16
 * - Industrie du papier et du carton	/	Manufacture of paper and paper products : C17
 * - Imprimerie et reproduction d'enregistrements	/	Printing and reproduction of recorded media : C18
 * - Cokéfaction et raffinage	/	Manufacture of coke and refined petroleum products : C19
 * - Industrie chimique	/	Manufacture of chemicals and chemical products : C20
 * - Industrie pharmaceutique	/	Manufacture of basic pharmaceutical products and pharmaceutical preparations : C21
 * - Fabrication d'autres produits minéraux non métalliques	/	Manufacture of other non-metallic mineral products : C23
 * - Fabrication de produits en caoutchouc et en plastique ainsi que d'autres produits minéraux non métalliques	/	Manufacture of rubber and plastic products and other non-metallic mineral products : C22_23
 * - Métallurgie et fabrication de produits métalliques à l'exception des machines et des équipements	/	Manufacture of basic metals and fabricated metal products, except machinery and equipment : C24_25
 * - Fabrication de produits métalliques, à l'exception des machines et des équipements	/	Manufacture of fabricated metal products, except machinery and equipment : C25
 * - Fabrication de produits informatiques, électroniques et optiques, d'équipements électriques, et de machines et équipements n.c.a.	/	Manufacture of  computer, electronic and optical products, electrical equipment, and machinery and equipment n.e.c. : C26T28
 * - Fabrication de produits informatiques, électroniques et optiques	/	Manufacture of computer, electronic and optical products : C26
 * - Fabrication de produits en caoutchouc et en plastique	/	Manufacture of rubber and plastic products : C22
 * - Fabrication d'équipements électriques	/	Manufacture of electrical equipment : C27
 * - Fabrication de machines et équipements n.c.a.	/	Manufacture of machinery and equipment n.e.c. : C28
 * - Métallurgie	/	Manufacture of basic metals : C24
 * - Fabrication de matériels de transport	/	Manufacture of motor vehicles, trailers, semi-trailers and of other transport equipment : C29_30
 * - Industrie automobile	/	Manufacture of motor vehicles, trailers and semi-trailers : C29
 * - Fabrication d'autres matériels de transport	/	Manufacture of other transport equipment : C30
 * - Autres industries manufacturières ; réparation et installation de machines et d'équipements	/	Manufacture of furniture; jewellery, musical instruments, toys, etc.; repair and installation of machinery and equipment : C31T33
 * - Autres industries manufacturières	/	Other manufacturing : C32
 * - Réparation et installation de machines et d'équipements	/	Repair and installation of machinery and equipment : C33
 * - Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné	/	Electricity, gas, steam and air conditioning supply : D35
 * - Fabrication de meubles	/	Manufacture of furniture : C31
 * - Production et distribution d'eau ; assainissement, gestion des déchets et dépollution	/	Water supply ; sewerage, waste management and remediation activities : E
 * - Captage, traitement et distribution d'eau	/	Water collection, treatment and supply : E36
 * - Collecte et traitement des eaux usées	/	Sewerage : E37
 * - Collecte, traitement et élimination des déchets ; récupération	/	Waste collection, treatment and disposal activities ; materials recovery : E38
 * - Dépollution et autres services de gestion des déchets	/	Remediation activities and other waste management services : E39
 * - Construction	/	Construction : F
 * - Génie civil	/	Civil engineering : F42
 * - Travaux de construction spécialisés	/	Specialised construction activities : F43
 * - Services principalement marchands	/	Market services - Services excluding public administration, education, health and social services - sections G to N and R to U : GTN_RTU
 * - Construction de bâtiments	/	Construction of buildings : F41
 * - Commerce de gros et de détail, transports, hébergement et restauration	/	Wholesale and retail trade; repair of motor vehicles and motorcycles; transportation and storage; accommodation and food service activities : GTI
 * - Commerce ; réparation d'automobiles et de motocycles	/	Wholesale and retail trade ; repair of motor vehicles and motorcycles : G
 * - Commerce et réparation d'automobiles et de motocycles	/	Wholesale and retail trade and repair of motor vehicles and motorcycles : G45
 * - Commerce de gros, à l'exception des automobiles et des motocycles	/	Wholesale trade, except of motor vehicles and motorcycles : G46
 * - Commerce de détail, à l'exception des automobiles et des motocycles	/	Retail trade, except of motor vehicles and motorcycles : G47
 * - Transports et entreposage	/	Transportation and storage : H
 * - Transports terrestres et transport par conduites	/	Land transport and transport via pipelines : H49
 * - Transports par eau	/	Water transport : H50
 * - Transports aériens	/	Air transport : H51
 * - Activités de poste et de courrier	/	Postal and courier activities : H53
 * - Hébergement et restauration	/	Accommodation and food service activities : I
 * - Entreposage et services auxiliaires des transports	/	Warehousing and support activities for transportation : H52
 * - Hébergement	/	Accommodation : I55
 * - Restauration	/	Food and beverage service activities : I56
 * - Information et communication	/	Information and communication : J
 * - Édition, audiovisuel et diffusion	/	Publishing, motion picture, video, television programme production; sound recording, programming and broadcasting activities : J58T60
 * - Édition	/	Publishing activities : J58
 * - Production de films cinématographiques, de vidéo et de programmes de télévision ; enregistrement sonore et édition musicale	/	Motion picture, video and television programme production, sound recording and music publishing activities : J59
 * - Programmation et diffusion	/	Programming and broadcasting activities : J60
 * - Télécommunications	/	Telecommunications : J61
 * - Programmation, conseil et autres activités informatiques ; services d'information	/	Computer programming, consultancy, and information service activities : J62_63
 * - Services d'information	/	Information service activities : J63
 * - Assurance	/	Insurance, reinsurance and pension funding, except compulsory social security : K65
 * - Activités auxiliaires de services financiers et d'assurance	/	Activities auxiliary to financial services and insurance activities : K66
 * - Activités financières et d'assurance	/	Financial and insurance activities : K
 * - Programmation, conseil et autres activités informatiques	/	Computer programming, consultancy and related activities : J62
 * - Activités immobilières	/	Real estate activities : L
 * - Activités immobilières	/	Real estate activities : L68
 * - Activités spécialisées, scientifiques et techniques et activités de services administratifs et de soutien	/	Professional, scientific and technical activities; administrative and support service activities : M_N
 * - Activités juridiques, comptables, de gestion, d'architecture, d'ingénierie, de contrôle et d'analyses techniques	/	Legal and accounting activities; activities of head offices; management consultancy activities; architectural and engineering activities; technical testing and analysis : M69T71
 * - Activités juridiques et comptables	/	Legal and accounting activities : M69
 * - Activités des sièges sociaux ; conseil de gestion	/	Activities of head offices ; management consultancy activities : M70
 * - Activités des services financiers, hors assurance et caisses de retraite	/	Financial service activities, except insurance and pension funding : K64
 * - Activités d'architecture et d'ingénierie ; activités de contrôle et analyses techniques	/	Architectural and engineering activities; technical testing and analysis : M71
 * - Recherche-développement scientifique	/	Scientific research and development : M72
 * - Publicité et études de marché ; autres activités spécialisées, scientifiques et techniques ; activités vétérinaires	/	Advertising and market research; other professional, scientific and technical activities; veterinary activities : M73T75
 * - Autres activités spécialisées, scientifiques et techniques	/	Other professional, scientific and technical activities : M74
 * - Activités vétérinaires	/	Veterinary activities : M75
 * - Activités de services administratifs et de soutien	/	Administrative and support service activities : N
 * - Publicité et études de marché	/	Advertising and market research : M73
 * - Activités de location et location-bail	/	Rental and leasing activities : N77
 * - Activités liées à l'emploi	/	Employment activities : N78
 * - Activités des agences de voyage, voyagistes, services de réservation et activités connexes	/	Travel agency, tour operator and other reservation service and related activities : N79
 * - Enquêtes et sécurité	/	Security and investigation activities : N80
 * - Services relatifs aux bâtiments et aménagement paysager	/	Services to buildings and landscape activities : N81
 * - Activités administratives et autres activités de soutien aux entreprises	/	Office administrative, office support and other business support activities : N82
 * - Arts, divertissement et loisirs ; autres activités de services ; activités des ménages, des organismes et organisations extraterritoriaux	/	Arts, entertainment and recreation; other service activities; activities of household and extra-territorial organizations and bodies : RTU
 * - Arts, spectacles et activités récréatives	/	Arts, entertainment and recreation : R
 * - Activités créatives, artistiques et de spectacle	/	Creative, arts and entertainment activities : R90
 * - Bibliothèques, archives, musées et autres activités culturelles	/	Libraries, archives, museums and other cultural activities : R91
 * - Organisation de jeux de hasard et d'argent	/	Gambling and betting activities : R92
 * - Activités sportives, récréatives et de loisirs	/	Sports activities and amusement and recreation activities : R93
 * - Autres activités de services	/	Other service activities : S
 * - Activités des ménages en tant qu'employeurs ; activités indifférenciées des ménages en tant que producteurs de biens et services pour usage propre	/	Activities of households as employers ; undifferentiated goods- and services-producing activities of households for own use : T
 * - Activités des organisations associatives	/	Activities of membership organisations : S94
 * - Activités des ménages en tant qu'employeurs de personnel domestique	/	Activities of households as employers of domestic personnel : T97
 * - Réparation d'ordinateurs et de biens personnels et domestiques	/	Repair of computers and personal and household goods : S95
 * - Administration publique, défense, enseignement, santé humaine et action sociale	/	Public administration, defence, education, human health and social work activities : OTQ
 * - Autres services personnels	/	Other personal service activities : S96
 * - Administration publique et défense ; sécurité sociale obligatoire	/	Public administration and defence ; compulsory social security : O84
 * - Enseignement	/	Education : P85
 * - Activités pour la santé humaine	/	Human health activities : Q86
 * - Hébergement médico-social et social et action sociale sans hébergement	/	Residential care activities and social work activities without accommodation : Q87_88
 * - Hébergement médico-social et social	/	Residential care activities : Q87
 * - Action sociale sans hébergement	/	Social work activities without accommodation : Q88
 * - Industrie manufacturière	/	Manufacturing : C
 * - Autres industries manufacturières n.c.a.	/	Manufacture of furniture; other manufacturing : C31_32
 * - Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné	/	Electricity, gas, steam and air conditioning supply : D
 * - Collecte et traitement des eaux usées, traitement des déchets et dépollution	/	Sewerage, waste management, remediation activities : E37T39
 * - Production de films cinématographiques, de vidéo et de programmes de télévision ; enregistrement sonore et édition musicale ; programmation et diffusion	/	Motion picture, video, television programme production; sound recording, programming and broadcasting activities : J59_60
 * - Activités spécialisées, scientifiques et techniques	/	Professional, scientific and technical activities : M
 * - Activités juridiques et comptables ; conseil de gestion ; activités des sièges sociaux	/	Legal and accounting activities; activities of head offices; management consultancy activities : M69_70
 * - Autres activités spécialisées, scientifiques et techniques ; activités vétérinaires	/	Other professional, scientific and technical activities; veterinary activities : M74_75
 * - Enquêtes et sécurité ; services relatifs aux bâtiments et aménagement paysager ; autres activités de soutien	/	Security and investigation, service and landscape, office administrative and support activities : N80T82
 * - Arts, divertissement et musées	/	Creative, arts and entertainment activities; libraries, archives, museums and other cultural activities; gambling and betting activities : R90T92
 * - Administration publique	/	Public administration and defence ; compulsory social security : O
 * - Enseignement	/	Education : P
 * - Santé humaine et action sociale	/	Human health and social work activities : Q
 * - Loyers imputés des logements occupés par leur propriétaire	/	Imputed rents of owner-occupied dwellings : L68A
 * - Activités extra-territoriales	/	Activities of extraterritorial organisations and bodies : U
 * - Activités des organisations et organismes extraterritoriaux	/	Activities of extraterritorial organisations and bodies : U99
 * - Transformation et conservation de la viande et préparation de produits à base de viande	/	Processing and preserving of meat and production of meat products : 138G_C10A
 * - Transformation et conservation de poisson, de crustacés et de mollusques	/	Processing and preserving of fish, crustaceans and molluscs : 138G_C10B
 * - Transformation et conservation de fruits et légumes	/	Processing and preserving of fruit and vegetables : 138G_C10C
 * - Fabrication d’huiles et graisses végétales et animales	/	Manufacture of vegetable and animal oils and fats : 138G_C10D
 * - Fabrication de produits laitiers	/	Manufacture of dairy products : 138G_C10E
 * - Travail des grains ; fabrication de produits amylacés	/	Manufacture of grain mill products, starches and starch products : 138G_C10F
 * - Fabrication de produits de boulangerie-pâtisserie et de pâtes alimentaires	/	Manufacture of bakery and farinaceous products : 138G_C10G
 * - Fabrication d'autres produits alimentaires	/	Manufacture of other food products : 138G_C10H
 * - Fabrication d'aliments pour animaux	/	Manufacture of prepared animal feeds : 138G_C10K
 * - Fabrication de boissons	/	Manufacture of beverages : 138G_C11Z
 * - Fabrication de produits à base de tabac	/	Manufacture of tobacco products : 138G_C12Z
 * - Total	/	Total : _T
 */
	ACTIVITY: DD_CNA_BRANCHES_CodeDictionary["ACTIVITY"][keyof DD_CNA_BRANCHES_CodeDictionary["ACTIVITY"]];

}

export interface DDCNABRANCHESAttributes {
/** Possible values for : Statut de l'observation	/	Observation status : 
 * - Valeur provisoire	/	Provisional value : P
 * - Normale	/	Normal : A
 * - Valeur manquante : les données existent mais ne sont pas collectées (non disponible : nd)	/	Missing value : data exist but were not collected : L
 * - Valeur manquante : les données n’existent pas (sans objet : so)	/	Missing value : data cannot exist : M
 */
	OBS_STATUS: DD_CNA_BRANCHES_CodeDictionary["OBS_STATUS"][keyof DD_CNA_BRANCHES_CodeDictionary["OBS_STATUS"]];

    LAST_UPDATE:       null;
    TABLE_IDENTIFIER:  null;
/** Possible values for : Décimales	/	Decimals : 
- 1- 3 */
	DECIMALS: DD_CNA_BRANCHES_CodeDictionary["DECIMALS"][keyof DD_CNA_BRANCHES_CodeDictionary["DECIMALS"]];

/** Possible values for : Quantité d'unités (en puissance de 10)	/	Quantity of units (in power of 10) : 
- 6- 0- 3 */
	UNIT_MULT: DD_CNA_BRANCHES_CodeDictionary["UNIT_MULT"][keyof DD_CNA_BRANCHES_CodeDictionary["UNIT_MULT"]];

    REF_PERIOD_DETAIL: null;
/** Possible values for : Statut de confidentialité	/	Confidentiality status : 
 * - Diffusable	/	Free for publication : F
 */
	CONF_STATUS: DD_CNA_BRANCHES_CodeDictionary["CONF_STATUS"][keyof DD_CNA_BRANCHES_CodeDictionary["CONF_STATUS"]];

/** Possible values for : Version	/	Version : 
 * - Provisoire	/	Provisional : PROV
 * - Semi-définitif	/	Semi-final : SD
 * - Définitif	/	Final : D
 */
	OBS_STATUS_FR: DD_CNA_BRANCHES_CodeDictionary["OBS_STATUS_FR"][keyof DD_CNA_BRANCHES_CodeDictionary["OBS_STATUS_FR"]];

/** Possible values for : Année de référence de l'indice de prix	/	Reference year price : 
- 2020 */
	REF_YEAR_PRICE: DD_CNA_BRANCHES_CodeDictionary["REF_YEAR_PRICE"][keyof DD_CNA_BRANCHES_CodeDictionary["REF_YEAR_PRICE"]];

}
