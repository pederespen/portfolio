"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      title: "Hello, I'm Peder",
      subtitle: "I enjoy developing and using code to solve business problems",
      hero: {
        title: "Hello, I'm Peder",
        subtitle:
          "I enjoy developing and using code to solve business problems",
      },
    },
  },
  fr: {
    translation: {
      title: "Hei, jeg er Peder",
      subtitle: "Jeg liker å løfte kode til å løfte forretningsproblemer",
      hero: {
        title: "Hei, jeg er Peder",
        subtitle: "Jeg liker å løfte kode til å løfte forretningsproblemer",
      },
    },
  },
};

// Only initialize once
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
}

export default i18n;
