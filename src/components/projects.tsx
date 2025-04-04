"use client";

import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="min-h-screen flex flex-col scroll-mt-16">
      <h2 className="text-3xl font-bold mt-16 mb-16 text-center text-black dark:text-gray-300">
        {t("projects.title")}
      </h2>

      <div className="container mx-auto w-[85%] mb-20">
        <div className="flex flex-col items-center">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-md text-gray-700 dark:text-gray-300">
              {t("projects.message")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
