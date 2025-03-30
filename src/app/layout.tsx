import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./language-provider";

export const metadata: Metadata = {
  title: "Peder | Full Stack Developer",
  description:
    "Full Stack Developer portfolio - I enjoy developing and using code to solve business problems",
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
