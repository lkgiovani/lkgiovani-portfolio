import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../../messages/en.json";
import ptBr from "../../messages/pt-br.json";
import es from "../../messages/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      "pt-br": { translation: ptBr },
      es: { translation: es },
    },
    fallbackLng: "pt-br",
    lowerCaseLng: true,
    detection: {
      order: ["cookie", "navigator"],
      lookupCookie: "APP_LOCALE",
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
