import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { standorte, featuredStandorte } from "@/config/standorte.config";
import { ratgeberArticles } from "@/config/ratgeber.config";

const base = siteConfig.siteUrl.replace(/\/$/, "");

/**
 * Phasenweise Sitemap-Steuerung über SITEMAP_PHASE (env).
 *
 *   Phase 1 (~115 URLs) – Kern: Startseite, 3 Kurse, alle Ratgeber, Kosten, Impressum,
 *                          Top-12 Standorte + deren Kurs-Kombinationen.
 *   Phase 2 (~450 URLs) – + alle /standorte/[stadt] + /arbeitsagentur/[stadt].
 *   Phase 3 (~1.650 URLs) – + alle Kombinations-Seiten (standort×kurs, kurs×stadt, agentur×kurs).
 *
 * Default (kein Wert gesetzt): Phase 3 (vollständige Sitemap).
 */
const phase = parseInt(process.env.SITEMAP_PHASE ?? "3", 10);

/** Phase 1: Top-12 Standorte (featuredStandorte) + deren Kurs-Kombis */
const PHASE1_STANDORTE_SLUGS = new Set(
  featuredStandorte.map((s) => s.slug),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ─── Immer dabei (alle Phasen) ─────────────────────────────────────────────

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/standorte`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/ratgeber`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/kosten`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const courses = siteConfig.courses.map((c) => ({
    url: `${base}/kurse/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const ratgeberPages = ratgeberArticles.map((a) => ({
    url: `${base}/ratgeber/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ─── Phase 1: Top-12 Standorte + deren Kombi-Seiten (~115 URLs) ─────────────

  if (phase === 1) {
    const topStandorte = standorte.filter((s) => PHASE1_STANDORTE_SLUGS.has(s.slug));

    const topStandortPages = topStandorte.map((s) => ({
      url: `${base}/standorte/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    const topKursStandort = topStandorte.flatMap((s) =>
      siteConfig.courses.map((c) => ({
        url: `${base}/standorte/${s.slug}/${c.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }))
    );

    const topKursStadtInverse = siteConfig.courses.flatMap((c) =>
      topStandorte.map((s) => ({
        url: `${base}/kurse/${c.slug}/${s.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }))
    );

    return [
      ...staticPages,
      ...courses,
      ...ratgeberPages,
      ...topStandortPages,
      ...topKursStandort,
      ...topKursStadtInverse,
    ];
  }

  // ─── Phase 2: alle Standorte + Arbeitsagentur (ohne Kombis) ───────────────

  const standortPages = standorte.map((s) => ({
    url: `${base}/standorte/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const standorteMitAgentur = standorte.filter((s) => s.arbeitsagentur);

  const arbeitsagenturPages = standorteMitAgentur.map((s) => ({
    url: `${base}/arbeitsagentur/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  if (phase === 2) {
    return [
      ...staticPages,
      ...courses,
      ...ratgeberPages,
      ...standortPages,
      ...arbeitsagenturPages,
    ];
  }

  // ─── Phase 3 (Default): vollständige Sitemap ──────────────────────────────

  const kursStandortPages = standorte.flatMap((s) =>
    siteConfig.courses.map((c) => ({
      url: `${base}/standorte/${s.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  );

  const kursStadtInversePages = siteConfig.courses.flatMap((c) =>
    standorte.map((s) => ({
      url: `${base}/kurse/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  );

  const arbeitsagenturKursPages = standorteMitAgentur.flatMap((s) =>
    siteConfig.courses.map((c) => ({
      url: `${base}/arbeitsagentur/${s.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  return [
    ...staticPages,
    ...courses,
    ...ratgeberPages,
    ...standortPages,
    ...kursStandortPages,
    ...kursStadtInversePages,
    ...arbeitsagenturPages,
    ...arbeitsagenturKursPages,
  ];
}
