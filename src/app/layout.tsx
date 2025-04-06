import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../lib/i18n/language-provider";
import { ThemeProvider } from "../context/theme-context";

export const metadata: Metadata = {
  title: "Peder Espen | Portfolio",
  description: "Portfolio website for Peder Espen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
