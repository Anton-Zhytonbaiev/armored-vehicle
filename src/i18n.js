import { createI18n } from 'vue-i18n';
import enTranslations from './locales/en.js';
import uaTranslations from './locales/ua.js';

const messages = {
  en: enTranslations,
  ua: uaTranslations,
};

const i18n = createI18n({
  locale: localStorage.getItem('selectedLanguage') || 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;