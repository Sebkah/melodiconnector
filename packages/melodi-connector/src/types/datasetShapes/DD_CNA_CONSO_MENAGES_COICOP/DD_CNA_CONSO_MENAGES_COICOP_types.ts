import { DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary } from "./DD_CNA_CONSO_MENAGES_COICOP_codeDictionary";

export interface DDCNACONSOMENAGESCOICOPDimensions {
/** Possible values for : Transformation chronologique	/	Transformation : 
 * - Aucune	/	None : N
 * - Croissance annuelle de l’indice	/	Index growth rate, over 1 year : GY_IX
 * - Croissance annuelle 	/	Growth rate, over 1 year : GY
 */
	TRANSFORMATION: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["TRANSFORMATION"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["TRANSFORMATION"]];

/** Possible values for : Valorisation des prix	/	Prices : 
 * - En valeur aux prix courants	/	Current prices : V
 * - Déflateur	/	Deflator (index) : D
 * - Aux prix de l’année précédente	/	Previous year prices : Y
 * - En volume aux prix de l’année précédente chaînés	/	Chain linked volume : L
 */
	PRICES: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["PRICES"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["PRICES"]];

/** Possible values for : Type de dépense de consommation	/	Expenditure : 
 * - Total	/	Total : _Z
 * - Logement, eau, gaz, électricité et autres combustibles	/	Housing, water, electricity, gas and other fuels : CP04
 * - Assurances (hors assurance-vie) et services financiers	/	Insurances (excluding life insurance) and Financial services : CP121P_122
 * - Services d’information et de communication	/	Information and communication services : CP083
 * - Cantines, cafétérias et réfectoires (S)	/	Canteens, cafeterias and refectories (S) : CP1112
 * - Dépense de consommation finale pré-engagée	/	Pre-engaged final household consumption expenditure : CPDPE
 * - Produits alimentaires et boissons non alcoolisées	/	Food and non-alcoholic beverages : CP01
 * - Produits alimentaires	/	Food : CP011
 * - Huiles et graisses (ND)	/	Oils and fats (ND) : CP0115
 * - Fruits et fruits à coque (ND)	/	Fruits and nuts (ND) : CP0116
 * - Céréales et produits à base de céréales (ND)	/	Cereals and cereal products (ND) : CP0111
 * - Légumes, tubercules, bananes plantains, bananes de cuisine et légumes secs (ND)	/	Vegetables, tubers, plantains, cooking bananas and pulses (ND) : CP0117
 * - Animaux vivants, viandes et autres parties d’animaux terrestres abattus (ND)	/	Live animals, meat and other parts of slaughtered land animals (ND) : CP0112
 * - Poisson et autres fruits de mer (ND)	/	Fish and other seafood (ND) : CP0113
 * - Sucre, confiserie et desserts (ND)	/	Sugar, confectionery and desserts (ND) : CP0118
 * - Plats préparés et autres produits alimentaires (ND)	/	Ready-made food and other food products n.e.c. (ND) : CP0119
 * - Lait, produits laitiers divers et œufs (ND)	/	Milk, other dairy products and eggs (ND) : CP0114
 * - Boissons non alcoolisées	/	Non-alcoholic beverages : CP012
 * - Jus de fruits et de légumes (ND)	/	Fruit and vegetable juices (ND) : CP0121
 * - Café et succédanés de café (ND)	/	Coffee and coffee substitutes (ND) : CP0122
 * - Thé, maté et autres produits d’origine végétale pour tisanes (ND)	/	Tea, maté and other plant products for infusion (ND) : CP0123
 * - Eau (ND)	/	Water (ND) : CP0125
 * - Boissons rafraîchissantes (ND)	/	Soft drinks (ND) : CP0126
 * - Vin (ND)	/	Wine (ND) : CP0212
 * - Autres boissons non alcoolisées (ND)	/	Other non-alcoholic beverages (ND) : CP0129
 * - Bière (ND)	/	Beer (ND) : CP0213
 * - Boissons alcoolisées, tabac et stupéfiants	/	Alcoholic beverages, tobacco and narcotics : CP02
 * - Autres boissons alcoolisées (ND)	/	Other alcoholic beverages (ND) : CP0219
 * - Vêtements (SD)	/	Garments (SD) : CP0312
 * - Boissons alcoolisées	/	Alcoholic beverages : CP021
 * - Autres articles et accessoires d’habillement (SD)	/	Other articles of clothing and clothing accessories (SD) : CP0313
 * - Tabac	/	TOBACCO : CP023
 * - Spiritueux et liqueurs (ND)	/	Spirits and liquors (ND) : CP0211
 * - Stupéfiants	/	Narcotics : CP024
 * - Nettoyage, réparation, confection et location d’articles d’habillement (S)	/	Cleaning, repair, tailoring and hire of clothing (S) : CP0314
 * - Loyers effectivement payés par les locataires pour des résidences principales (S)	/	Actual rentals paid by tenants for main residence (S) : CP0411
 * - Articles d’habillement et chaussures	/	Clothing and footwear : CP03
 * - Chaussures	/	Footwear : CP032
 * - Autres loyers effectifs (S)	/	Other actual rentals (S) : CP0412
 * - Articles d’habillement	/	Clothing : CP031
 * - Chaussures diverses (SD)	/	Shoes and other footwear (SD) : CP0321
 * - Services concernant l’entretien, les réparations et la sécurité du logement (S)	/	Services for the maintenance, repair and security of the dwelling (S) : CP0432
 * - Loyers d’habitation imputés	/	Imputed rentals for housing : CP042
 * - Alimentation en eau et services divers liés au logement	/	Water supply and miscellaneous services relating to the dwelling : CP044
 * - Nettoyage, réparation et location de chaussures (S)	/	Cleaning, repair, and hire of footwear (S) : CP0322
 * - Tissus pour habillement (SD)	/	Clothing materials (SD) : CP0311
 * - Loyers imputés des propriétaires-occupants pour leur résidence principale (S)	/	Imputed rentals of owner-occupiers for main residence (S) : CP0421
 * - Alimentation en eau (ND)	/	Water supply (ND) : CP0441
 * - Loyers d’habitation effectivement payés	/	Actual rentals for housing : CP041
 * - Gaz (ND)	/	Gas (ND) : CP0452
 * - Combustibles liquides (ND)	/	Liquid fuels (ND) : CP0453
 * - Collecte des ordures ménagères (S)	/	Refuse collection (S) : CP0442
 * - Autres loyers imputés (S)	/	Other imputed rentals (S) : CP0422
 * - Combustibles solides (ND)	/	Solid fuels (ND) : CP0454
 * - Entretien, réparation et sécurité des logements	/	Maintenance, repair and security of the dwelling : CP043
 * - Articles de ménage en textiles	/	Household textiles : CP052
 * - Équipement de sécurité et fournitures pour travaux d’entretien et de réparation des logements	/	Security equipment and materials for the maintenance and repair of the dwelling (ND) : CP0431
 * - Reprise des eaux usées (S)	/	Sewage collection (S) : CP0443
 * - Autres sources d’énergie pour les systèmes de chauffage et de refroidissement (ND)	/	Other energy for heating and cooling (ND) : CP0455
 * - Articles de ménage en textiles (SD)	/	Household textiles (SD) : CP0521
 * - Services divers liés au logement (S)	/	Other services relating to the dwelling n.e.c. (S) : CP0444
 * - Meubles, articles de ménage et entretien courant du foyer	/	Furnishings, household equipment and routine household maintenance : CP05
 * - Réparation, location et confection d’articles de ménage en textiles (S)	/	Repair, hire and sewing services of household textiles (S) : CP0522
 * - Électricité, gaz et autres combustibles	/	Electricity, gas and other fuels : CP045
 * - Appareils ménagers	/	Household appliances : CP053
 * - Meubles, articles d’ameublement et tapis	/	Furniture, furnishings, and loose carpets : CP051
 * - Électricité (ND)	/	Electricity (ND) : CP0451
 * - Gros appareils ménagers, électriques ou autres (D)	/	Major household appliances, whether electric or not (D) : CP0531
 * - Meubles, articles d’ameublement et tapis (D)	/	Furniture, furnishings and loose carpets (D) : CP0511
 * - Petits appareils ménagers (SD)	/	Small household appliances (SD) : CP0532
 * - Réparation, installation et location d’appareils ménagers (S)	/	Repair, installation and hire of household appliances (S) : CP0533
 * - Réparation, installation et location de meubles, d’articles d’ameublement et de tapis (S)	/	Repair, installation and hire of furniture, furnishings and loose carpets (S) : CP0512
 * - Verrerie, vaisselle et ustensiles de ménage	/	Glassware, tableware and household ustensils : CP054
 * - Outillage et matériel pour la maison et le jardin	/	Tools and equipment for house and garden : CP055
 * - Outillage et matériel motorisés (D)	/	Motorized tools and equipment (D) : CP0551
 * - Outillage non motorisé et accessoires divers (SD)	/	Non-motorized tools and miscellaneous accessories (SD) : CP0552
 * - Réparation et location d’outillage et de matériel motorisés et non motorisés (S)	/	Repair and hire of motorized and non-motorized tools and equipment (S) : CP0553
 * - Biens et services liés à l’entretien courant du foyer	/	Goods and services for routine household maintenance : CP056
 * - Articles de ménage non durables (ND)	/	Non-durable household goods (ND) : CP0561
 * - Services domestiques et services ménagers (S)	/	Domestic services and household services (S) : CP0562
 * - Santé	/	Health : CP06
 * - Médicaments et produits de santé	/	Medicines and health products : CP061
 * - Services de soins ambulatoires	/	Outpatient care services : CP062
 * - Services de soins hospitaliers	/	Inpatient care services : CP063
 * - Autres services de santé	/	Other health services : CP064
 * - Transports	/	Transport : CP07
 * - Achats de véhicules	/	Purchase of vehicles : CP071
 * - Voitures automobiles (D)	/	Motor cars (D) : CP0711
 * - Motocycles (D)	/	Motorcycles (D) : CP0712
 * - Bicyclettes (D)	/	Bicycles (D) : CP0713
 * - Dépenses d’utilisation des véhicules	/	Operation of personal transport equipment : CP072
 * - Services de transport de voyageurs	/	Passenger transport services : CP073
 * - Transport de voyageurs par chemin de fer (S)	/	Passenger transport by railway (S) : CP0731
 * - Pièces et accessoires pour véhicules personnels (SD)	/	Parts and accessories for personal transport equipment (SD) : CP0721
 * - Autres transports de marchandises (S)	/	Other transport of goods (S) : CP0749
 * - Transport de voyageurs par route (S)	/	Passenger transport by road (S) : CP0732
 * - Information et communication	/	Information and communication : CP08
 * - Carburants et lubrifiants pour véhicules personnels (ND)	/	Fuels and lubricants for personal transport equipment (ND) : CP0722
 * - Matériel d’information et de communication	/	Information and communication equipment : CP081
 * - Transport de voyageurs par air (S)	/	Passenger transport by air (S) : CP0733
 * - Entretien et réparation de véhicules personnels (S)	/	Maintenance and repair of personal transport equipment (S) : CP0723
 * - Logiciels, à l’exclusion des jeux	/	Software excluding games : CP082
 * - Gros biens durables à fonction récréative (D)	/	Major durables for recreation (D) : CP0912
 * - Transport de voyageurs par mer et voies navigables intérieures (S)	/	Passenger transport by sea and inland waterway (S) : CP0734
 * - Services divers relatifs aux véhicules personnels (S)	/	Other services in respect of personal transport equipment (S) : CP0724
 * - Autres biens à fonction récréative	/	Other recreational goods : CP092
 * - Transport combiné de voyageurs (S)	/	Combined passenger transport (S) : CP0735
 * - Location et réparation de matériel photographique et cinématographique et d’appareils optiques (S)	/	Hire and repair of photographic and cinematographic equipment and optical instruments (S) : CP0941
 * - Jeux, jouets et articles de loisirs (SD)	/	Games, toys and hobbies (SD) : CP0921
 * - Loisirs, sport et culture	/	Recreation, sport and culture : CP09
 * - Articles de sport, matériel de camping et matériel pour activités de plein air (SD)	/	Equipment for sport, camping and open-air recreation (SD) : CP0922
 * - Services de transport de marchandises	/	Transport services of goods : CP074
 * - Biens durables à fonction récréative	/	Recreational durables : CP091
 * - Biens culturels	/	Cultural goods : CP095
 * - Location, entretien et réparation de gros biens durables à fonction récréative (S)	/	Hire, maintenance and repair of major durables for recreation (S) : CP0942
 * - Instruments de musique (D)	/	Musical instruments (D) : CP0951
 * - Produits de jardinage et animaux de compagnie	/	Garden products and pets : CP093
 * - Matériel photographique et cinématographique et appareils optiques (D)	/	Photographic and cinematographic equipment and optical instruments (D) : CP0911
 * - Médias audiovisuels (SD)	/	Audio-visual media (SD) : CP0952
 * - Services postaux et de coursiers (S)	/	Postal and courier services (S) : CP0741
 * - Produits de jardinage, plantes et fleurs (ND)	/	Garden products, plants and flowers (ND) : CP0931
 * - Location et réparation de jeux, de jouets et d’articles de loisirs (S)	/	Hire and repair of games, toys and hobbies (S) : CP0943
 * - Journaux, livres et articles de papeterie	/	Newspapers, books and stationery : CP097
 * - Livres (SD)	/	Books (SD) : CP0971
 * - Services culturels	/	Cultural services : CP096
 * - Location et réparation d’articles de sport, de matériel de camping et de matériel pour activités de plein air (S)	/	Hire and repair of equipment for sport, camping and open-air recreation (S) : CP0944
 * - Animaux de compagnie et produits pour animaux de compagnie (D)	/	Pets and products for pets (ND) : CP0932
 * - Journaux et périodiques (ND)	/	Newspapers and periodicals (ND) : CP0972
 * - Services fournis par les cinémas, les théâtres et les salles de concert (S)	/	Services provided by cinemas, theatres and concert venues (S) : CP0961
 * - Services vétérinaires et autres pour animaux de compagnie (S)	/	Veterinary and other services for pets (S) : CP0945
 * - Services récréatifs	/	Recreational services : CP094
 * - Services récréatifs et sportifs (S)	/	Recreational and sporting services (S) : CP0946
 * - Imprimés divers (ND)	/	Miscellaneous printed matter (ND) : CP0973
 * - Services fournis par les musées, les bibliothèques et les sites culturels (S)	/	Services provided by museums, libraries, and cultural sites (S) : CP0962
 * - Articles de papeterie et matériel de dessin (ND)	/	Stationery and drawing materials (ND) : CP0974
 * - Jeux de hasard (S)	/	Games of chance (S) : CP0947
 * - Services photographiques (S)	/	Photographic services (S) : CP0963
 * - Autres services culturels (S)	/	Other cultural services (S) : CP0969
 * - Forfaits touristiques	/	Package holidays : CP098
 * - Services de l’enseignement	/	Education services : CP10
 * - Éducation des jeunes enfants et enseignement primaire	/	Early childhood and primary education : CP101
 * - Enseignement secondaire	/	Secondary education : CP102
 * - Enseignement postsecondaire non supérieur	/	Post-secondary non-tertiary education : CP103
 * - Enseignement supérieur	/	Tertiary education : CP104
 * - Enseignement non défini par niveau	/	Education not defined by level : CP105
 * - Restaurants et services d’hébergement	/	Restaurants and accommodation services : CP11
 * - Services de restauration et de débits de boissons	/	Food and beverage serving services : CP111
 * - Restaurants, cafés et similaires (S)	/	Restaurants, cafés and the like (S) : CP1111
 * - Services d’hébergement	/	Accommodation services : CP112
 * - Assurance et services financiers	/	Insurance and financial services : CP12
 * - Assurance	/	Insurance : CP121
 * - Assurance-vie et assurance accidents (S)	/	Life and accident insurance (S) : CP1211
 * - Assurance liée à la santé (S)	/	Insurance connected with health (S) : CP1212
 * - Assurance liée aux logements (S)	/	Insurance connected with the dwelling (S) : CP1213
 * - Assurance liée aux transports (S)	/	Insurance connected with transport (S) : CP1214
 * - Autres assurances (S)	/	Other insurance (S) : CP1219
 * - Services financiers	/	Financial services : CP122
 * - Soins corporels, protection sociale et biens et services divers	/	Personal care, social protection and miscellaneous goods and services : CP13
 * - Soins corporels	/	Personal care : CP131
 * - Appareils électriques pour soins corporels (SD)	/	Electric appliances for personal care (SD) : CP1311
 * - Articles de bijouterie et montres (D)	/	Jewellery and watches (D) : CP1321
 * - Autres appareils, articles et produits pour soins corporels (ND)	/	Other appliances, articles and products for personal care (ND) : CP1312
 * - Salons de coiffure et instituts de soins et de beauté (S)	/	Hairdressing salons and personal grooming establishments (S) : CP1313
 * - Autres effets personnels	/	Other personal effects : CP132
 * - Autres effets personnels n.c.a. (SD)	/	Other personal effects n.e.c. (SD) : CP1329
 * - Autres services	/	Other services : CP146
 * - Protection sociale	/	Social protection : CP133
 * - Dépenses de consommation individuelle à la charge des administrations publiques	/	Individual consumption expenditure of general government : CP15
 * - Logement	/	Housing : CP151
 * - Santé	/	Health : CP152
 * - Loisirs et culture	/	Recreation and culture : CP153
 * - Enseignement	/	Education : CP154
 * - Autres services	/	Other services : CP139
 * - Protection sociale	/	Social protection : CP155
 * - Solde territorial	/	Territorial balance  : CP16
 * - Dépense de consommation des ménages	/	Household final consumption expenditure : CPDEP
 * - Dépense de consommation des ménages hors SIFIM	/	Household final consumption expenditure (excluding SIFIM) : CPDEPHSI
 * - Dépenses de consommation individuelle à la charge des institutions sans but lucratif au service des ménages (ISBLSM)	/	Individual consumption expenditure of non-profit institutions serving households (NPISHs) : CP14
 * - Dépense de consommation autre que pré-engagée	/	Final household consumption expenditure other than pre-engaged : CPHDPE
 * - Loisirs et culture	/	Recreation and culture : CP143
 * - Enseignement	/	Education : CP144
 * - Protection sociale	/	Social protection : CP145
 * - Services de transformation de matières premières pour les produits alimentaires et les boissons non alcoolisées	/	Services for processing primary goods for food and non-alcoholic beverages : CP013
 * - Services de production d’alcool	/	Alcohol production services : CP022
 * - Logement	/	Housing : CP141
 * - Santé	/	Health : CP142
 */
	EXPENDITURE: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["EXPENDITURE"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["EXPENDITURE"]];

/** Possible values for : Opération comptable	/	Stock, flow and operation : 
 * - Dépense de consommation individuelle	/	Individual consumption expenditure : P31
 * - Part de la dépense liée au logement dans le revenu disponible brut	/	Share of expenditure related to housing in gross disposable income : _DEP_LOGT_REVENU
 * - Part des assurances (hors assurance-vie) et services financiers dans le revenu disponible brut	/	Share of insurance (excluding life insurance) and financial services in gross disposable income : _ASSUR_REVENU
 * - Part des services de télévision et de télécommunications dans le revenu disponible brut	/	Share of television and telecommunication services in gross disposable income : _TELE_REVENU
 * - Part des cantines dans le revenu disponible brut	/	Share of canteen in gross disposable income : _CANTINE_REVENU
 * - Part de la dépense pré-engagée dans le revenu disponible brut	/	Share of pre-engaged exenditure in gross disposable income : _DEP_REVENU
 * - Part de la dépense pré-engagée dans la dépense de consommation finale des ménages	/	Share of pre-engaged expenditure in final household consumption expenditure : _DEP_CONSO
 * - Coefficient budgétaire	/	Budget coefficient : _COEFF_BUDG
 * - Revenu disponible brut	/	Gross disposable income : B6G
 */
	STO: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["STO"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["STO"]];

/** Possible values for : Position de compte	/	Accounting entry : 
 * - Emploi ou débit	/	Debit or uses : D
 * - Non applicable	/	Not applicable : _Z
 * - Ressource ou crédit	/	Credit or resources : C
 * - Solde	/	Balance ie Credits minus Debits : B
 */
	ACCOUNTING_ENTRY: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["ACCOUNTING_ENTRY"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["ACCOUNTING_ENTRY"]];

/** Possible values for : Produit	/	Product : 
 * - Part de la dépense liée au logement dans le revenu disponible brut	/	Share of insurance (excluding life insurance) and financial services in gross disposable income : CP_ASSUR_SERV_FIN
 * - Part des assurances (hors assurance-vie) et services financiers dans le revenu disponible brut	/	Share of canteen in gross disposable income : CP_CANTINE_REVENU
 * - Part des services de télévision et de télécommunications dans le revenu disponible brut	/	Share of television and telecommunication services in gross disposable income : CP_TELE_REVENU
 * - Part des cantines dans le revenu disponible brut	/	Share of expenditure related to housing in gross disposable income : CP_DEP_LOGT_REVENU
 * - Total	/	Total : _T
 */
	PRODUCT: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["PRODUCT"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["PRODUCT"]];

/** Possible values for : Fréquence	/	Frequency : 
 * - Annuel	/	Annual : A
 */
	FREQ: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["FREQ"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["FREQ"]];

/** Possible values for : Secteur institutionnel	/	Reference sector : 
 * - Administrations publiques	/	General government : S13
 * - Ménages	/	Households : S14
 * - Ménages hors entrepreneurs individuels	/	Households excluding sole proprietorship : S14B
 * - Institutions sans but lucratif au services des ménages	/	Non profit institutions serving households : S15
 * - Économie totale	/	Total economy : S1
 */
	REF_SECTOR: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["REF_SECTOR"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["REF_SECTOR"]];

/** Possible values for : Période temporelle	/	Time period : 
- 2023- 2022- 2021- 2020- 2019- 2018- 2017- 2016- 2015- 2014- 2013- 2012- 2011- 2010- 2009- 2008- 2007- 2006- 2005- 2004- 2003- 2002- 2001- 2000- 1999- 1998- 1997- 1996- 1995- 1994- 1993- 1992- 1991- 1990- 1989- 1988- 1987- 1986- 1985- 1984- 1983- 1982- 1981- 1980- 1979- 1978- 1977- 1976- 1975- 1974- 1973- 1972- 1971- 1970- 1969- 1968- 1967- 1966- 1965- 1964- 1963- 1962- 1961- 1960- 1959- 1958- 1957- 1956- 1955- 1954- 1953- 1952- 1951- 1950- 1949- 2024 */
	TIME_PERIOD: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["TIME_PERIOD"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["TIME_PERIOD"]];

/** Possible values for : Zone de contrepartie	/	Counterpart area : 
 * - Monde	/	World (all areas, including reference area, including IO) : W0
 * - Territoire national	/	Domestic (home or reference area) : W2
 * - Reste du monde	/	Rest of the World : W1
 */
	COUNTERPART_AREA: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["COUNTERPART_AREA"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["COUNTERPART_AREA"]];

/** Possible values for : Unité de mesure	/	Unit measure : 
 * - Devise nationale (Euros)	/	Domestic currency (Euros) : XDC
 * - Indice	/	Index : IX
 * - Pourcentage	/	Percent : PT
 */
	UNIT_MEASURE: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["UNIT_MEASURE"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["UNIT_MEASURE"]];

/** Possible values for : Classe d'actifs passifs	/	Instrument asset : 
 * - Total	/	Total : _Z
 */
	INSTR_ASSET: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["INSTR_ASSET"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["INSTR_ASSET"]];

/** Possible values for : Activité économique	/	Economic activity : 
 * - Total	/	Total : _T
 */
	ACTIVITY: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["ACTIVITY"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["ACTIVITY"]];

}

export interface DDCNACONSOMENAGESCOICOPAttributes {
/** Possible values for : Statut de l'observation	/	Observation status : 
 * - Valeur provisoire	/	Provisional value : P
 * - Normale	/	Normal : A
 * - Valeur manquante : les données n’existent pas (sans objet : so)	/	Missing value : data cannot exist : M
 * - Valeur manquante : les données existent mais ne sont pas collectées (non disponible : nd)	/	Missing value : data exist but were not collected : L
 */
	OBS_STATUS: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["OBS_STATUS"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["OBS_STATUS"]];

    LAST_UPDATE:       null;
    TABLE_IDENTIFIER:  null;
/** Possible values for : Décimales	/	Decimals : 
- 1- 3 */
	DECIMALS: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["DECIMALS"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["DECIMALS"]];

/** Possible values for : Quantité d'unités (en puissance de 10)	/	Quantity of units (in power of 10) : 
- 6- 0 */
	UNIT_MULT: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["UNIT_MULT"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["UNIT_MULT"]];

    REF_PERIOD_DETAIL: null;
/** Possible values for : Statut de confidentialité	/	Confidentiality status : 
 * - Diffusable	/	Free for publication : F
 */
	CONF_STATUS: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["CONF_STATUS"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["CONF_STATUS"]];

/** Possible values for : Version	/	Version : 
 * - Provisoire	/	Provisional : PROV
 * - Semi-définitif	/	Semi-final : SD
 * - Définitif	/	Final : D
 */
	OBS_STATUS_FR: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["OBS_STATUS_FR"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["OBS_STATUS_FR"]];

/** Possible values for : Année de référence de l'indice de prix	/	Reference year price : 
- 2020 */
	REF_YEAR_PRICE: DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["REF_YEAR_PRICE"][keyof DD_CNA_CONSO_MENAGES_COICOP_CodeDictionary["REF_YEAR_PRICE"]];

}
