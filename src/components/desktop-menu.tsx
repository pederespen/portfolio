"use client";

import React from "react";
import { DarkModeToggle } from "./dark-mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { NavLinks } from "./nav-links";
import { SocialLinks } from "./social-links";

export const DesktopMenu = () => {
  return (
    <>
      <ul className="hidden md:flex space-x-8">
        <NavLinks />
      </ul>

      <div className="hidden md:flex items-center">
        <div className="flex items-center space-x-3 mr-3">
          <DarkModeToggle />
          <LanguageToggle />
        </div>
        <div className="h-6 border-l border-gray-300 dark:border-gray-700"></div>
        <div className="flex items-center space-x-4 ml-3">
          <SocialLinks />
        </div>
      </div>
    </>
  );
};
