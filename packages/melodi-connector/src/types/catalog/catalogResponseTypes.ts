export interface CatalogEntry {
    identifier:            string;
    uri?:                  string;
    title:                 Abstract[];
    subtitle:              Abstract[];
    description:           Abstract[];
    accessRights:          Abstract[];
    processStep:           Abstract[];
    confidentialityStatus: Abstract[];
    type:                  Abstract[];
    issued:                Date;
    creator:               Creator;
    modified:              Date;
    publisher:             Publisher;
    wasGeneratedBy:        Publisher[];
    temporal:              Temporal;
    temporalResolution:    AccrualPeriodicity[];
    accrualPeriodicity:    AccrualPeriodicity;
    spatial:               Publisher;
    spatialResolution:     Publisher[];
    theme:                 Theme[];
    landingPage:           Array<LandingPage[]>;
    structure:             Structure;
    product:               Product[];
    numObservations:       number;
    numSeries:             number;
    keyword?:              AccrualPeriodicity[];
    ordreComposants?:      string[];
    scopeNote:             Abstract[];
    relations?:            Relation[];
    abstract:              Abstract[];
    raccourcis?:           CatalogEntryRaccourci[];
    statisticalUnit?:      AccrualPeriodicity[];
    spatialTemporal?:      Date;
}

export interface Abstract {
    lang:     Lang;
    content?: string;
}

export enum Lang {
    En = "en",
    Fr = "fr",
}

export interface AccrualPeriodicity {
    label: Abstract[];
}

export enum Creator {
    Insee = "Insee",
}

export interface LandingPage {
    lang: Lang;
    url:  string;
}

export interface Product {
    id:             string;
    format:         Format;
    issued:         Date;
    modified:       Date;
    title:          string;
    accessURL:      string;
    byteSize:       number;
    packageFormat?: PackageFormat;
    mediaType:      string;
    language:       Language;
}

export enum Format {
    CSV = "CSV",
    Files = "FILES",
    Xlsx = "XLSX",
}

export enum Language {
    En = "EN",
    Fr = "FR",
}

export enum PackageFormat {
    ApplicationZip = "application/zip",
}

export interface Publisher {
    id:    string;
    label: Abstract[];
}

export interface CatalogEntryRaccourci {
    raccourcis:  RaccourciRaccourci[];
    titre:       Description;
    description: Description;
}

export interface Description {
    fr: string;
    en: string;
}

export interface RaccourciRaccourci {
    idComponent: string;
    choix:       string[];
}

export interface Relation {
    title?:          Abstract[];
    titleComplement: Abstract[];
    url:             Abstract[];
}

export interface Structure {
    dsd: string;
}

export interface Temporal {
    startPeriod: Date;
    endPeriod:   Date;
}

export interface Theme {
    label:         Abstract[];
    themeTaxonomy: ThemeTaxonomy;
}

export enum ThemeTaxonomy {
    ClassificationOfStatisticalDomain = "classificationOfStatisticalDomain",
    InseeTheme = "inseeTheme",
}
