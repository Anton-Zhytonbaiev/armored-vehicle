import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      projects: 'Projects',
      contacts: 'Contacts'
    }
  },
  ua: {
    nav: {
      home: 'Головна',
      gallery: 'Галерея',
      projects: 'Проекти',
      contacts: 'Контакти'
    }
  }
};

const i18n = createI18n({
  locale: localStorage.getItem('selectedLanguage') || 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;