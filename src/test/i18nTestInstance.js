import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from '../../public/locales/en/common.json';
import enHome from '../../public/locales/en/home.json';
import enDossiers from '../../public/locales/en/dossiers.json';
import enEpisodeNotes from '../../public/locales/en/episodeNotes.json';

/**
 * Synchronous i18next instance for use in Vitest tests.
 *
 * Uses bundled English resources so tests never hit the network.
 */
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common', 'home', 'dossiers', 'episodeNotes'],
  defaultNS: 'common',
  keySeparator: false,
  nsSeparator: ':',
  resources: {
    en: {
      common: enCommon,
      home: enHome,
      dossiers: enDossiers,
      episodeNotes: enEpisodeNotes,
    },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
