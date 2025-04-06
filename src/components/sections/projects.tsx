"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  logoSrc: string;
  screenshotSrc: string;
  liveLink: string;
  githubLink: string;
}

export const Projects = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: "canvascraft",
      logoSrc: "/assets/canvascraft-logo-with-text-light.png",
      screenshotSrc: "/assets/canvascraft-screenshot.png",
      liveLink: "https://pespen.github.io/canvascraft/",
      githubLink: "https://github.com/pespen/canvascraft",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col scroll-mt-16">
      <h2 className="text-3xl font-bold mt-16 mb-16 text-center text-black dark:text-gray-300">
        {t("projects.title")}
      </h2>

      <div className="container mx-auto w-[95%] mb-20">
        {projects.length > 0 ? (
          <div className="space-y-32">
            {projects.map((project) => (
              <div key={project.id} className="project-container">
                <div className="flex flex-col md:flex-row gap-12">
                  {/* Left side - Logo, description, and links */}
                  <div className="md:w-1/3 flex flex-col">
                    <div className="h-16 w-full relative mb-8">
                      <Image
                        src={project.logoSrc}
                        alt={`${project.id} logo`}
                        fill
                        className="object-contain object-left"
                      />
                    </div>

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      {t(`projects.${project.id}.description`)}
                    </p>

                    <div className="flex flex-col space-y-6">
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-gray-800 dark:text-gray-200 relative w-fit group"
                      >
                        <span className="relative z-10 p-3 uppercase group-hover:text-white transition-colors duration-200">
                          {t("projects.liveApp")}
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 group-hover:h-full group-hover:bg-blue-500 dark:group-hover:bg-blue-500 group-hover:bg-opacity-100 dark:group-hover:bg-opacity-100 transition-all duration-200 -z-0"></span>
                      </Link>
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-gray-800 dark:text-gray-200 relative w-fit group"
                      >
                        <span className="relative z-10 p-3 uppercase group-hover:text-white transition-colors duration-200">
                          {t("projects.github")}
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 group-hover:h-full group-hover:bg-blue-500 dark:group-hover:bg-blue-500 group-hover:bg-opacity-100 dark:group-hover:bg-opacity-100 transition-all duration-200 -z-0"></span>
                      </Link>
                    </div>
                  </div>

                  {/* Right side - Screenshot */}
                  <div className="md:w-2/3 flex items-center justify-center">
                    <div className="relative w-auto h-auto max-w-full">
                      <Image
                        src={project.screenshotSrc}
                        alt={`${project.id} screenshot`}
                        width={800}
                        height={500}
                        className="object-contain"
                        style={{ maxHeight: "600px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-md text-gray-700 dark:text-gray-300">
                {t("projects.message")}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
