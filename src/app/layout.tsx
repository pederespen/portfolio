import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./language-provider";

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
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
