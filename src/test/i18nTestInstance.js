import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "../../public/locales/en/common.json";

/**
 * Synchronous i18next instance for use in Vitest tests.
 *
 * Uses bundled English resources so tests never hit the network.
 */
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  resources: {
    en: {
      common: enCommon,
    },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
