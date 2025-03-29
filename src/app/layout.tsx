import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
