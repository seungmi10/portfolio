import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
