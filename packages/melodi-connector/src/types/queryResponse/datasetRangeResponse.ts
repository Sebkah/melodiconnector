export interface DatasetRangeResponse {
    code?:             string;
    label?:            Label;
    range?:            Range[];
    message?:          string;
    http_status_code?: number;
}

export interface Label {
    fr:  string;
    en?: string;
}

export interface Range {
    concept: Concept;
    values:  Value[];
    type:    string;
}

export interface Concept {
    code:  string;
    label: Label;
}

export interface Value {
    code:         string;
    label:        Label;
    iri?:         string;
    measureType?: MeasureType;
    type?:        Type;
    id?:          string;
}

export interface MeasureType {
    code:      string;
    libelle:   Label;
    ordreRmes: number;
    uri:       string;
    total:     boolean;
    id:        string;
}

export interface Type {
    code: string;
    fr:   string;
    en:   string;
}
