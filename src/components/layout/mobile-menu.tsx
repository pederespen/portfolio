"use client";

import React from "react";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { NavLinks } from "./nav-links";
import { SocialLinks } from "@/components/ui/social-links";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-black backdrop-blur-sm shadow-md dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.05)] py-4 px-6 z-20 overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 py-0"
      }`}
    >
      <ul className="flex flex-col space-y-4">
        <NavLinks onClick={onClose} />
        <li className="pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-wrap items-center justify-between mt-1">
            <div className="flex items-center space-x-3 mb-2 sm:mb-0">
              <DarkModeToggle />
              <LanguageToggle />
            </div>
            <div className="flex items-center space-x-4">
              <SocialLinks />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
