import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translation_en from "./locales/en/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en"],
    resources: {
      en: {
        translation: translation_en,
      },
    },
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
