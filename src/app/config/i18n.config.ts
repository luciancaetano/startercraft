import resources from '@locales/index';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    resources,
    defaultNS: 'translation',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'es', 'pt-BR'],
    react: {
      useSuspense: true,
    },
  });

export default i18n;
