"use client";

import { LanguageSwitcher } from "./language-switcher";

export const ThemeControls = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
        <LanguageSwitcher />
      </div>
    </div>
  );
};
