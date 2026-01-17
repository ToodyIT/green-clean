import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from '../locales/en.json';
import csTranslations from '../locales/cs.json';
import ukTranslations from '../locales/uk.json';
import ruTranslations from '../locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      cs: { translation: csTranslations },
      uk: { translation: ukTranslations },
      ru: { translation: ruTranslations },
    },
    fallbackLng: 'cs',
    lng: 'cs',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;
