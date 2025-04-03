"use client";

import { useState, useEffect } from "react";

// SVG Light/Dark Mode Icons
const LightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
  </svg>
);

const DarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
      clipRule="evenodd"
    />
  </svg>
);

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on localStorage or system preference
  useEffect(() => {
    // Check if theme exists in localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set initial state based on saved preference or system preference
    const shouldSetDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDarkMode(shouldSetDark);

    // Apply the initial theme to the HTML element
    document.documentElement.classList.toggle("dark", shouldSetDark);
  }, []);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);

    // Toggle the dark class on the HTML element
    document.documentElement.classList.toggle("dark");

    // Save the preference to localStorage
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleMode}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-neutral-700"
      aria-pressed={isDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">
        {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      </span>

      {/* Slider */}
      <span
        className={`absolute h-5 w-5 transform rounded-full transition-transform duration-200 ease-in-out overflow-hidden ${
          isDarkMode
            ? "translate-x-5 bg-gray-800 text-blue-200"
            : "translate-x-1 bg-white text-yellow-400"
        } flex items-center justify-center`}
      >
        {isDarkMode ? <DarkIcon /> : <LightIcon />}
      </span>
    </button>
  );
};
