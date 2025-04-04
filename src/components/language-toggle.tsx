"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

// SVG Flag Components
const NorwegianFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 512 512"
    className="w-full h-full"
  >
    <circle cx="256" cy="256" r="256" fill="#d80027" />
    <path
      fill="#eee"
      d="M100.2 0v189.3H0v33.4l24.6 33L0 289.5v33.4h100.2V512h33.4l30.6-26.3 36.1 26.3h33.4V322.8H512v-33.4l-24.6-33.7 24.6-33v-33.4H233.7V0h-33.4l-33.8 25.3L133.6 0z"
    />
    <path
      fill="#0052b4"
      d="M133.6 0v222.7H0v66.7h133.6V512h66.7V289.4H512v-66.7H200.3V0z"
    />
  </svg>
);

const UKFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 512 512"
    className="w-full h-full"
  >
    <circle cx="256" cy="256" r="256" fill="#012169" />
    <path
      fill="#fff"
      d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-62l190-188L0 74V0h62l192 188L440 0z"
    />
    <path
      fill="#c8102e"
      d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
    />
    <path fill="#fff" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
    <path fill="#c8102e" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
  </svg>
);

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isNorwegian, setIsNorwegian] = useState(i18n.language === "no");

  // Update toggle state when language changes externally
  useEffect(() => {
    setIsNorwegian(i18n.language === "no");
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = isNorwegian ? "en" : "no";
    i18n.changeLanguage(newLang);
    setIsNorwegian(!isNorwegian);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-neutral-700 cursor-pointer"
      aria-pressed={isNorwegian}
      aria-label={isNorwegian ? "Switch to English" : "Switch to Norwegian"}
    >
      <span className="sr-only">
        {isNorwegian ? "Switch to English" : "Switch to Norwegian"}
      </span>

      {/* Slider */}
      <span
        className={`absolute h-5 w-5 transform rounded-full transition-transform duration-200 ease-in-out overflow-hidden ${
          isNorwegian ? "translate-x-5" : "translate-x-1"
        }`}
      >
        {/* Display appropriate flag based on current language */}
        {isNorwegian ? <NorwegianFlag /> : <UKFlag />}
      </span>
    </button>
  );
};
