"use client";

import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col justify-center items-center relative"
    >
      {/* Content */}
      <div className="z-10 text-center max-w-4xl mx-auto w-[85%]">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight
          bg-clip-text text-transparent 
          bg-gradient-to-r from-teal-500 to-indigo-600 
          dark:bg-gradient-to-r dark:from-gray-100 dark:to-gray-400"
        >
          {t("hero.title")}
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">
          {t("hero.subtitle")}
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-blue-500 transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
};
