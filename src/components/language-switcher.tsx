"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage("en")}
        className={`p-1 px-2 rounded ${
          currentLang === "en" ? "bg-blue-500 text-white" : "text-gray-700"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("no")}
        className={`p-1 px-2 rounded ${
          currentLang === "no" ? "bg-blue-500 text-white" : "text-gray-700"
        }`}
        aria-label="Switch to Norwegian"
      >
        NO
      </button>
    </div>
  );
};
