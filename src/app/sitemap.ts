import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { standorte } from "@/config/standorte.config";
import { ratgeberArticles } from "@/config/ratgeber.config";

const base = siteConfig.siteUrl.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const courses = siteConfig.courses.map((c) => ({
    url: `${base}/kurse/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const standortPages = standorte.map((s) => ({
    url: `${base}/standorte/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const kursStandortPages = standorte.flatMap((s) =>
    siteConfig.courses.map((c) => ({
      url: `${base}/standorte/${s.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  );

  // Inverse URL-Kombination: /kurse/[kurs]/[stadt]
  // Eigene kanonische URLs für andere Keyword-Reihenfolge (z. B. "KI Weiterbildung München")
  const kursStadtInversePages = siteConfig.courses.flatMap((c) =>
    standorte.map((s) => ({
      url: `${base}/kurse/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  );

  const standorteMitAgentur = standorte.filter((s) => s.arbeitsagentur);

  const arbeitsagenturPages = standorteMitAgentur.map((s) => ({
    url: `${base}/arbeitsagentur/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const arbeitsagenturKursPages = standorteMitAgentur.flatMap((s) =>
    siteConfig.courses.map((c) => ({
      url: `${base}/arbeitsagentur/${s.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  const ratgeberPages = ratgeberArticles.map((a) => ({
    url: `${base}/ratgeber/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/standorte`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/ratgeber`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...courses,
    ...standortPages,
    ...kursStandortPages,
    ...kursStadtInversePages,
    ...arbeitsagenturPages,
    ...arbeitsagenturKursPages,
    ...ratgeberPages,
    { url: `${base}/kosten`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
