export interface TranslationNamespaceContextType {
  id: string;
}

export type SupportedLanguages = 'pt-BR' | 'en';

export type I18NResource = {
  [laguage in SupportedLanguages]: {
    [key: string]: string;
  };
};
