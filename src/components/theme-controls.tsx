"use client";

import { LanguageSwitcher } from "./language-switcher";
import { DarkModeToggle } from "./dark-mode-toggle";

export const ThemeControls = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-blue-100/30 backdrop-blur-md p-3 rounded-xl shadow-lg border border-blue-100 flex flex-col gap-3 transition-all duration-300 hover:shadow-xl">
        <DarkModeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
