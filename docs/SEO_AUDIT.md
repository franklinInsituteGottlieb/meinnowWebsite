# SEO-Audit – Forward Education

**Stand:** März 2025  
**Methode:** Skill „seo-audit“ (Crawlability → Technical → On-Page → Content → Authority)

---

## Executive Summary

**Gesundheit:** Gut. Crawlability, Sitemap, Metadaten, Canonicals und strukturierte Daten sind für die wichtigsten Seiten umgesetzt. Keine Blocker für Indexierung.

**Top-Prioritäten:**
1. **Kein og:image / twitter:image** – Social-Sharing ohne eigenes Vorschaubild (Medium).
2. **Core Web Vitals** – Nicht im Code prüfbar; PageSpeed Insights / Search Console nutzen.
3. **Sitemap in GSC** – Einreichung prüfen, falls noch nicht erfolgt.

**Quick Wins:** Default-OG-Bild (1200×630) in `layout.tsx` ergänzen; optional pro Kategorie eigene Bilder.

---

## 1. Crawlability & Indexation

### Robots.txt
- **Status:** ✅ In Ordnung  
- **Evidence:** `src/app/robots.ts` – `allow: "/"`, Sitemap-URL gesetzt.  
- **Fix:** Keiner.

### Sitemap
- **Status:** ✅ In Ordnung  
- **Evidence:** `src/app/sitemap.ts` – enthält: `/`, `/standorte`, `/ratgeber`, `/kurse/*`, `/standorte/[stadt]`, `/standorte/[stadt]/[kurs]`, `/arbeitsagentur/[stadt]`, `/ratgeber/[slug]`, `/impressum`.  
- **Hinweis:** `/course?course_id=...` bewusst nicht in Sitemap (dynamische Franklin-Kurse).  
- **Fix:** Keiner. Bei neuen statischen Routen Sitemap anpassen.

### Canonicalization
- **Status:** ✅ Durchgängig  
- **Evidence:** Alle geprüften Seiten setzen `alternates.canonical`: Layout (Startseite), `/kurse/[slug]`, `/standorte`, `/standorte/[stadt]`, `/standorte/[stadt]/[kurs]`, `/ratgeber`, `/ratgeber/[slug]`, `/arbeitsagentur/[stadt]`, `/impressum`, `/course` (mit Query-Parameter).  
- **Fix:** Keiner.

### Indexation
- **Hinweis:** Aussagekräftige Prüfung nur mit Google Search Console (Coverage, site: Abfrage). Keine noindex-Fehler in den geprüften Templates gefunden.

---

## 2. Technical SEO

### Strukturierte Daten (JSON-LD)
- **Status:** ✅ Vorhanden (Quellcode geprüft)  
- **Evidence:**  
  - **Layout:** `OrganizationWebSiteSchema` (Organization + WebSite, Logo, ContactPoint, alternateName).  
  - **Startseite:** `FaqPageSchema` (FAQ aus siteConfig.faq).  
  - **Kurse:** `CourseSchema` auf `/kurse/[slug]` und `/standorte/[stadt]/[kurs]`.  
  - **Ratgeber:** Article-Schema auf `/ratgeber/[slug]` (headline, description, url, publisher, author).  
- **Validierung:** Rich Results Test (https://search.google.com/test/rich-results) nutzen – Schema wird per React ausgegeben und ist im gerenderten DOM sichtbar. **Nicht** allein auf statischen HTML-Fetch verlassen (Skill-Hinweis).

### Open Graph & Twitter Cards
- **Issue:** Kein `og:image` / `twitter:image`  
- **Impact:** Medium (Social-Sharing, Vorschaubilder in Messengern/Social).  
- **Evidence:** `layout.tsx` – `openGraph` und `twitter` haben keine `images`.  
- **Fix:** In `metadata` ergänzen, z. B.:  
  `openGraph: { ..., images: [{ url: "/og-image.png", width: 1200, height: 630 }] }`  
  `twitter: { ..., images: ["/og-image.png"] }`  
  Bild in `public/` ablegen (empfohlen 1200×630).

### URL-Struktur
- **Status:** ✅ Sauber  
- Lesbare, kleingeschriebene Slugs; Bindestriche; keine unnötigen Parameter in der Sitemap.

### Sprache & Basis-Metadaten
- **Status:** ✅  
- `lang="de"` im Root-Layout; `metadataBase` gesetzt; `locale: "de_DE"` in OpenGraph.

---

## 3. On-Page SEO

### Title Tags
- **Status:** ✅ Pro Seite eindeutig  
- Layout: „Forward Education – Weiterbildung. Weiterkommen.“  
- Kurse, Standorte, Ratgeber, Arbeitsagentur, Impressum: jeweils eigener Title mit Brand am Ende.  
- **Hinweis:** Sehr lange Titles (z. B. Standort+Kurs+Brand) können in der SERP gekürzt werden – optional kürzere Varianten prüfen (z. B. „Künstliche Intelligenz Weiterbildung München – 100 % gefördert | Forward Education“ ~65 Zeichen).

### Meta Descriptions
- **Status:** ✅ Vorhanden und unterschiedlich  
- Startseite: hero.subline.  
- Unterseiten: eigene Beschreibungen aus Config bzw. generateMetadata.  
- **Empfehlung:** Länge 150–160 Zeichen wo sinnvoll; aktuell kein kritischer Mangel.

### Heading-Struktur
- **Status:** ✅ Eine H1 pro Seite, logische Hierarchie  
- Home: Hero-Headline als H1 („Deine Zukunft beginnt hier.“).  
- Kurse/Course: Kurs-/Anzeigetitel als H1.  
- Standorte: „Deine Weiterbildung in [Stadt]“ bzw. „Weiterbildung in ganz Deutschland …“.  
- Standorte/[stadt]/[kurs]: „[Kurs] in [Stadt]“.  
- Ratgeber: Artikel-Titel als H1.  
- Impressum: „Impressum & Datenschutz“.  
- Keine übersprungenen Ebenen in den geprüften Templates.

### Bilder
- **Status:** ✅ Inhaltsbilder mit Alt-Text  
- CoursesSection: Alt pro Kurs („… – Forward Education“).  
- Footer/Navbar: Logo-Alt mit Firmenname.  
- Dekorative Hero-Bilder (Kurs/Course) mit `alt=""` – WCAG-konform.

### Internes Linking
- **Status:** ✅ Sinnvoll  
- Navbar: Kurse, Vorteile, FAQ, Kontakt; Standorte-Dropdown; Ratgeber.  
- Footer: Kurse, Standorte, Ratgeber, Impressum, Datenschutz (#datenschutz); Logo → `/`.  
- Breadcrumbs auf Standorte-, Ratgeber- und Kurs-Seiten.  
- Keine toten internen Links in den geprüften Komponenten.

---

## 4. Content & E-E-A-T

- **Trust:** Impressum mit Anschrift, Verantwortlichen, Datenschutz; Kontakt (E-Mail, Typeform).  
- **Sprache:** Konsistent Deutsch, Zielgruppe klar.  
- **Inhalt:** Kurs- und Standort-Seiten mit eigenem Text aus Config; Ratgeber mit längeren Artikeln; keine reinen Doorway-Pages festgestellt.  
- **Autor:** Ratgeber-Article-Schema mit Organization als Author – für Corporate-Ratgeber akzeptabel; bei echten Autor:innen optional Person-Schema ergänzen.

---

## 5. Prioritized Action Plan

### Kritisch (Indexierung blockierend)
- Keine.

### Hohe Priorität (sichtbarer Mehrwert)
1. **og:image / twitter:image** im Layout (und optional pro Sektion) setzen.  
2. **Core Web Vitals** in PageSpeed Insights und GSC prüfen; bei Bedarf LCP (z. B. priority für Above-the-fold-Bilder), CLS, INP optimieren.

### Quick Wins
1. Ein gemeinsames OG-Bild (1200×630) erstellen, in `public/` legen und in `layout.tsx` in `openGraph.images` und `twitter.images` eintragen.  
2. Sitemap-URL in Google Search Console prüfen bzw. einreichen.

### Langfristig / Optional
1. Sehr lange Title-Tags (z. B. Standort+Kurs) auf ~60 Zeichen prüfen und ggf. kürzen.  
2. Bei neuen Seiten: Sitemap und ggf. robots anpassen.  
3. Rich Results Test regelmäßig für Startseite, Kurs- und Ratgeber-URLs ausführen.

---

## 6. Checkliste (Quick Reference)

| Thema                    | Status |
|--------------------------|--------|
| robots.txt               | ✅ |
| Sitemap                  | ✅ |
| metadataBase             | ✅ |
| OpenGraph (title, desc, locale, url) | ✅ |
| Twitter Cards (title, desc) | ✅ |
| og:image / twitter:image | ⬜ |
| Canonicals (alle geprüften Seiten) | ✅ |
| Alt-Texte (Inhalte)      | ✅ |
| lang="de"                | ✅ |
| JSON-LD (Organization, WebSite, FAQPage, Course, Article) | ✅ |
| Inverse URL-Pfade `/kurse/[kurs]/[stadt]` | ✅ |

---

## Hinweis Schema/JSON-LD

Laut Skill: Schema wird per React/JS ausgegeben und ist im gerenderten DOM vorhanden. Zur Bewertung **Rich Results Test** (https://search.google.com/test/rich-results) oder Browser-DevTools (`document.querySelectorAll('script[type="application/ld+json"]')`) verwenden – nicht allein auf statischen HTML-Fetch verlassen.
