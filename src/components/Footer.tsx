"use client";

import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6">
      <div className="container mx-auto">
        <div className="text-sm text-gray-500 text-center">
          {t("footer.copyright").replace("2024", currentYear.toString())}
        </div>
      </div>
    </footer>
  );
};
