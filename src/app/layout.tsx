import type { Metadata } from "next";
import { Raleway, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import PageLogTracker from "@/components/PageLogTracker";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} – ${siteConfig.tagline}`,
  description: siteConfig.hero.subline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${raleway.variable} ${spaceGrotesk.variable} antialiased`}>
        <PageLogTracker />
        {children}
      </body>
    </html>
  );
}
