import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';
import he from './translations/he';
import am from './translations/am';

const resources = {
  en: { translation: en },
  he: { translation: he },
  am: { translation: am },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;