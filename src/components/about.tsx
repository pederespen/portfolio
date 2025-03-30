"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen flex items-center scroll-mt-4">
      <div className="container mx-auto w-[85%]">
        <h2 className="text-3xl font-bold mb-12 text-center mt-10">
          {t("about.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <Image
                src="/headshot.webp"
                alt="Profile photo"
                width={320}
                height={320}
                className="rounded-full object-cover border-2 border-gray-200 shadow-lg"
              />
              <div className="flex flex-col text-center sm:text-left justify-center mt-4 sm:mt-0">
                <h3 className="text-2xl font-bold mb-1">Peder Espen</h3>
                <p className="text-gray-600 mb-4">Oslo, Norway</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 mb-4">{t("about.description")}</p>
              <p className="text-gray-700 mb-4">{t("about.description")}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("about.skills.title")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Node.js",
                  "Git",
                  "Responsive Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
