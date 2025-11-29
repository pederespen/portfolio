"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { useState, useEffect } from "react";

interface Project {
  id: string;
  logoSrc: {
    light: string;
    dark: string;
  };
  screenshotSrc: string;
  screenshots: string[];
  liveLink: string;
  githubLink: string;
  showLogoText?: boolean;
  logoText?: string;
}

// Image stack component with auto-rotate and click-to-cycle functionality
const ImageStack = ({
  screenshots,
  projectId,
}: {
  screenshots: string[];
  projectId: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, screenshots.length]);

  const handleClick = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
    // Pause auto-rotate briefly after manual interaction
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  // Calculate positions for each card in the stack
  const getCardStyle = (index: number) => {
    const position =
      (index - activeIndex + screenshots.length) % screenshots.length;

    if (position === 0) {
      // Front card
      return {
        zIndex: 30,
        transform: "translateX(0) translateY(0)",
        opacity: 1,
      };
    } else if (position === 1) {
      // Middle card
      return {
        zIndex: 20,
        transform: "translateX(-12px) translateY(12px)",
        opacity: 0.6,
      };
    } else {
      // Back card
      return {
        zIndex: 10,
        transform: "translateX(-24px) translateY(24px)",
        opacity: 0.35,
      };
    }
  };

  return (
    <div className="md:w-2/3 flex items-start justify-center">
      <div className="relative w-full max-w-2xl pl-8 pb-8">
        <div
          className="relative cursor-pointer"
          onClick={handleClick}
          role="button"
          aria-label="Click to cycle through screenshots"
        >
          {screenshots.map((src, index) => {
            const style = getCardStyle(index);
            return (
              <div
                key={index}
                className={`${
                  index === 0 ? "relative" : "absolute top-0 left-0 w-full"
                } rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-out`}
                style={{
                  zIndex: style.zIndex,
                  transform: style.transform,
                  opacity: style.opacity,
                }}
              >
                <Image
                  src={src}
                  alt={`${projectId} screenshot ${index + 1}`}
                  width={800}
                  height={500}
                  className="object-contain w-full h-auto"
                  style={{ maxHeight: "600px" }}
                />
              </div>
            );
          })}
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-blue-500 w-4"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`View screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  const projects: Project[] = [
    {
      id: "budgetbuddy",
      logoSrc: {
        light: "/assets/budgetbuddy/budgetbuddy-logo.png",
        dark: "/assets/budgetbuddy/budgetbuddy-logo-dark.png",
      },
      screenshotSrc: "/assets/budgetbuddy/budgetbuddy-preview-1.png",
      screenshots: [
        "/assets/budgetbuddy/budgetbuddy-preview-1.png",
        "/assets/budgetbuddy/budgetbuddy-preview-2.png",
        "/assets/budgetbuddy/budgetbuddy-preview-3.png",
      ],
      liveLink: "https://pederespen.github.io/budgetbuddy/",
      githubLink: "https://github.com/pederespen/budgetbuddy",
    },
    {
      id: "imagelab",
      logoSrc: {
        light: "/assets/imagelab/imagelab-logo-light.png",
        dark: "/assets/imagelab/imagelab-logo-dark.png",
      },
      screenshotSrc: "/assets/imagelab/imagelab-preview-1.png",
      screenshots: [
        "/assets/imagelab/imagelab-preview-1.png",
        "/assets/imagelab/imagelab-preview-2.png",
        "/assets/imagelab/imagelab-preview-3.png",
      ],
      liveLink: "https://pederespen.github.io/imagelab/",
      githubLink: "https://github.com/pederespen/imagelab",
      showLogoText: true,
      logoText: "ImageLab",
    },
    {
      id: "miniarcade",
      logoSrc: {
        light: "/assets/miniarcade/miniarcade-logo-with-text-light.png",
        dark: "/assets/miniarcade/miniarcade-logo-with-text-dark.png",
      },
      screenshotSrc: "/assets/miniarcade/miniarcade-screenshot.png",
      screenshots: [
        "/assets/miniarcade/miniarcade-screenshot.png",
        "/assets/miniarcade/miniarcade-screenshot.png",
        "/assets/miniarcade/miniarcade-screenshot.png",
      ],
      liveLink: "https://pederespen.github.io/miniarcade/",
      githubLink: "https://github.com/pederespen/miniarcade",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col scroll-mt-16">
      <h2 className="text-3xl font-bold mt-16 mb-16 text-center text-black dark:text-gray-300">
        {t("projects.title")}
      </h2>

      <div className="container mx-auto w-[95%] mb-20">
        {projects.length > 0 ? (
          <div className="space-y-48">
            {projects.map((project, index) => (
              <div key={project.id} className="project-container">
                <div
                  className={`flex flex-col w-full ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-12`}
                >
                  {/* Logo, description, and links */}
                  <div className="md:w-1/3 flex flex-col">
                    <div className="h-16 w-full flex items-center gap-3 mb-8">
                      <div
                        className="h-full w-auto relative"
                        style={{
                          aspectRatio: project.showLogoText ? "1" : "auto",
                          minWidth: project.showLogoText ? "64px" : "100%",
                        }}
                      >
                        <Image
                          src={
                            isDarkMode
                              ? project.logoSrc.dark
                              : project.logoSrc.light
                          }
                          alt={`${project.id} logo`}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      {project.showLogoText && project.logoText && (
                        <span className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                          {project.logoText}
                        </span>
                      )}
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

                  {/* Screenshot stack with click-to-cycle */}
                  <ImageStack
                    screenshots={project.screenshots}
                    projectId={project.id}
                  />
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
