"use client";

import { ReactNode, useEffect } from "react";
import i18n from "./i18n";

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // This ensures i18n is initialized on the client side
    if (!i18n.isInitialized) {
      console.log("Initializing i18n on client side");
    }
  }, []);

  return <>{children}</>;
}
