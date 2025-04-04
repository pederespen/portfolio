"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface NavLinksProps {
  onClick?: () => void;
}

export const NavLinks = ({ onClick = () => {} }: NavLinksProps) => {
  const { t } = useTranslation();

  const navLinks = [
    { href: "#hero", text: t("navbar.home") },
    { href: "#about", text: t("navbar.about") },
    { href: "#projects", text: t("navbar.projects") },
    { href: "#contact", text: t("navbar.contact") },
  ];

  return (
    <>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={onClick}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
};
