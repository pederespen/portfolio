"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../../../public/locales/en/translation.json";
import noTranslation from "../../../public/locales/no/translation.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: enTranslation,
      },
      no: {
        translation: noTranslation,
      },
    },
    lng: "no",
    fallbackLng: "en",
    supportedLngs: ["en", "no"],
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === "development",
  });
}

export default i18n;
