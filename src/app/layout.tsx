import type { Metadata } from "next";
import { Raleway, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import PageLogTracker from "@/components/PageLogTracker";
import WebsiteLogTracker from "@/components/WebsiteLogTracker";
import OrganizationWebSiteSchema from "@/components/schema/OrganizationWebSiteSchema";

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

const title = `${siteConfig.seoBrand} – ${siteConfig.tagline}`;
const description = siteConfig.hero.subline;
const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: baseUrl,
    siteName: siteConfig.seoBrand,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: { canonical: baseUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${raleway.variable} ${spaceGrotesk.variable} antialiased`}>
        <OrganizationWebSiteSchema />
        <PageLogTracker />
        <WebsiteLogTracker />
        {children}
      </body>
    </html>
  );
}
