export type Prettify<T> = { [K in keyof T]: T[K] } & {};
export const supportedLanguages = ["fr", "en"] as const;
export type SupportedLanguages = (typeof supportedLanguages)[number];
export type Translated = {
  lang: SupportedLanguages;
  content: string;
};

export type valuesOf<T> = T[keyof T];
