# SEO-Strategie: Memovida vs. Forward Education – Vergleich & Skalierung

**Stand:** März 2026  
**Zweck:** 1:1-Vergleich der SEO-Seitenarchitektur, Sitemap-Strategie und Wachstumspfade

---

## 1. Kern-Strategie im Vergleich

| Strategie-Element | Memovida | Forward Education | Status |
|---|---|---|---|
| **Programmatische Stadt-Seiten** | `/standorte/[stadt]` | `/standorte/[stadt]` | ✅ Umgesetzt |
| **Stadt × Leistung (vorwärts)** | `/standorte/[stadt]/[bestattungsart]` | `/standorte/[stadt]/[kurs]` | ✅ Umgesetzt |
| **Stadt × Leistung (invers)** | `/[bestattungsart]/[stadt]` | `/kurse/[kurs]/[stadt]` | ✅ Umgesetzt |
| **Ratgeber / Content Hub** | `/ratgeber/[slug]` | `/ratgeber/[slug]` | ✅ Umgesetzt |
| **Prozess-/Förder-Seiten** | `/ablauf-einer-bestattung` | `/arbeitsagentur/[stadt]` | ✅ Umgesetzt |
| **Kurs-Übersichtsseiten** | `/bestattungsarten` | `/kurse/[slug]` | ✅ Umgesetzt |
| **Multilingual / hreflang** | DE + EN + FR + ES | Nur Deutsch | ➖ Bewusst |
| **Sitemap generiert** | ✅ | ✅ | ✅ Umgesetzt |
| **Canonical Tags** | ✅ | ✅ | ✅ Umgesetzt |
| **JSON-LD strukturierte Daten** | ✅ | ✅ | ✅ Umgesetzt |
| **robots.txt** | ✅ | ✅ | ✅ Umgesetzt |

---

## 2. Sitemap-Umfang heute (Forward Education, Stand März 2026)

| URL-Typ | Muster | Anzahl URLs | Priorität |
|---|---|---|---|
| Startseite | `/` | 1 | 1.0 |
| Standorte-Übersicht | `/standorte` | 1 | 0.8 |
| Ratgeber-Übersicht | `/ratgeber` | 1 | 0.7 |
| Kurs-Seiten | `/kurse/[kurs]` | 3 | 0.8 |
| Stadt-Seiten | `/standorte/[stadt]` | ~200 | 0.7 |
| Stadt × Kurs (vorwärts) | `/standorte/[stadt]/[kurs]` | ~600 | 0.6 |
| Kurs × Stadt (invers) | `/kurse/[kurs]/[stadt]` | ~600 | 0.6 |
| Arbeitsagentur | `/arbeitsagentur/[stadt]` | ~200 | 0.5 |
| Ratgeber-Artikel | `/ratgeber/[slug]` | 12 | 0.6 |
| Impressum | `/impressum` | 1 | 0.3 |
| **GESAMT** | | **~1.620 URLs** | |

---

## 3. Memovida Sitemap-Struktur (Referenz)

| URL-Typ | Muster | Kommentar |
|---|---|---|
| Startseite | `/` | Alle 4 Sprachen |
| Bestattungsarten-Übersicht | `/bestattungsarten` | |
| Bestattungsart-Detail | `/[art]` | Erdbestattung, Kremation, Seebestattung, etc. |
| Bestattungsart × Stadt | `/[art]/[stadt]` | Inverse URLs (wie unser `/kurse/[kurs]/[stadt]`) |
| Standorte-Übersicht | `/standorte` | |
| Standort-Detail | `/standorte/[stadt]` | |
| Ratgeber | `/ratgeber/[slug]` | |
| Friedhöfe | `/friedhoefe-in-deutschland/[stadt]` | Extra Long-tail-Seiten |
| Preise | `/preise` | **Bei uns fehlend** |
| Über uns | `/ueber-uns` | |
| Vorsorge | `/bestattungsvorsorge` | |

---

## 4. Was uns noch fehlt (Lücken-Analyse)

### 4.1 Dedizierte Preisseite (`/preise` oder `/kosten`)
**Warum wichtig:** Suchanfragen wie „Was kostet eine Weiterbildung?", „Bildungsgutschein Kosten", „Weiterbildung kostenlos" sind stark. Memovida hat eine eigene `/preise`-Seite.  
**Vorschlag:** `/kosten` oder `/foerderung` als Landing Page mit:
- Bildungsgutschein: bis zu 100 % Kostenübernahme erklärt
- Welche Kosten die Agentur übernimmt (Kursgebühren, Fahrt, Kinderbetreuung)
- FAQ zu Förderung
- CTA zur Beratung

### 4.2 Friedhof-Äquivalent: Arbeitsagentur × Kurs-Seiten
Memovida hat `/friedhoefe-in-deutschland/[stadt]` – sehr spezifische Long-tail-Seiten.  
**Unser Äquivalent:** `/arbeitsagentur/[stadt]/[kurs]` (z. B. „Bildungsgutschein für KI-Weiterbildung in München").  
Aktuell haben wir nur `/arbeitsagentur/[stadt]` ohne Kurs-Spezifizierung.

### 4.3 Ratgeber-Inhalt skalieren
Aktuell: 12 Artikel. Memovida hat deutlich mehr Ratgeber-Content.  
**Ziel:** 30–50 Artikel in den Kategorien Bildungsgutschein, Karriere, Weiterbildung, Förderung, KI.

---

## 5. Skalierungspfade

### 5.1 Mehr Kurse (aktuell: 3)

Bei **3 Kursen** und ~200 Standorten:
- Standort × Kurs (vorwärts): 3 × 200 = **600 URLs**
- Kurs × Standort (invers): 3 × 200 = **600 URLs**
- Gesamt Kombinations-URLs: **1.200**

Bei **6 Kursen** (z. B. + Cybersecurity, Buchhaltung, Personalwesen):
- 6 × 200 = **1.200 URLs** (vorwärts)
- 6 × 200 = **1.200 URLs** (invers)
- Gesamt: **2.400 Kombinations-URLs**
- Sitemap-Gesamt: **~3.200 URLs**

Bei **10 Kursen**:
- 10 × 200 × 2 = **4.000 Kombinations-URLs**
- Sitemap-Gesamt: **~4.800 URLs**

**Umsetzung:** Neuer Eintrag in `siteConfig.courses` → sitemap.ts, `/kurse/[kurs]/[stadt]` und `/standorte/[stadt]/[kurs]` skalieren automatisch.

---

### 5.2 Mehr Standorte (aktuell: ~200)

Aktuell decken wir die wichtigsten deutschen Städte ab. Vollständige Abdeckung (alle Landkreise/Gemeinden) könnte auf **400–500 Standorte** ausgebaut werden.

Bei **400 Standorten** und 3 Kursen:
- Kombinations-URLs: 3 × 400 × 2 = **2.400 URLs**
- Sitemap-Gesamt: **~2.800 URLs**

Bei **400 Standorten** und 10 Kursen:
- Kombinations-URLs: 10 × 400 × 2 = **8.000 URLs**
- Sitemap-Gesamt: **~9.200 URLs**

**Umsetzung:** Neuer Eintrag in `standorte.config.ts` → automatisch in Sitemap, Standort-Seite und allen Kurs-Kombinations-Seiten.

---

### 5.3 Mehrere Unternehmen / Mandanten (White-Label)

Wäre das Modell auf mehrere Bildungsträger ausgedehnt, würde die Sitemap exponentiell wachsen:

```
/[firma]/standorte/[stadt]/[kurs]
/[firma]/kurse/[kurs]/[stadt]
/[firma]/ratgeber/[slug]
```

Alternativ: Separate Domains pro Unternehmen (wie Memovida als Marke vs. lokale Partner).

| Dimension | 1 Unternehmen | 3 Unternehmen | 10 Unternehmen |
|---|---|---|---|
| Kurse | 3 | 9 | 30 |
| Standorte | 200 | 200 | 200 |
| Kombinations-URLs | 1.200 | 3.600 | 12.000 |
| Sitemap gesamt | ~1.600 | ~4.800 | ~16.000 |

---

### 5.4 Zusätzliche Content-Typen (Memovida-Analogie)

| Memovida | Forward Education Äquivalent | Status |
|---|---|---|
| `/preise` | `/kosten` oder `/foerderung` | ⬜ Fehlt |
| `/[art]/[stadt]` | `/kurse/[kurs]/[stadt]` | ✅ |
| `/friedhoefe/[stadt]` | `/arbeitsagentur/[stadt]/[kurs]` | ⬜ Fehlt |
| `/ratgeber/[slug]` | `/ratgeber/[slug]` | ✅ |
| `/ueber-uns` | (Impressum enthält Info) | ⬜ Eigene Seite fehlt |
| `/vorsorge` | `/bildungsgutschein` | ⬜ Fehlt als eigene Page |

---

## 6. Priorisierter Wachstumsplan

### Phase 1 – Sofort umsetzbar (niedrige Aufwand, hoher SEO-Wert)

| Maßnahme | Aufwand | Erwarteter Effekt |
|---|---|---|
| `/kosten`-Seite (Bildungsgutschein erklärt) | Klein | Fängt transaktionale Keywords ab |
| 15–20 weitere Ratgeber-Artikel | Mittel | Top-of-Funnel-Traffic |
| `/arbeitsagentur/[stadt]/[kurs]`-Seiten | Mittel | Long-tail Bildungsgutschein × Kurs |
| og:image in `layout.tsx` | Klein | Social-Sharing-Klicks |

### Phase 2 – Mittelfristig (mit mehr Kursen)

| Maßnahme | Aufwand | Erwarteter Effekt |
|---|---|---|
| 3 neue Kurse hinzufügen | Mittel | Sitemap × 2, neue Keyword-Cluster |
| Sitemap-Index (bei >1.000 URLs empfohlen) | Klein | Crawler-Effizienz |
| `/ueber-uns`-Seite | Klein | E-E-A-T / Vertrauen |
| Dedizierte `/bildungsgutschein`-Landing-Page | Mittel | Direkter Funnel-Einstieg |

### Phase 3 – Langfristig / Skalierung

| Maßnahme | Aufwand | Erwarteter Effekt |
|---|---|---|
| 400+ Standorte | Groß | Vollständige Deutschland-Abdeckung |
| 10+ Kurse | Groß | Dominiert alle Weiterbildungs-Keywords |
| Mehrsprachigkeit (EN für expats) | Groß | Neue Zielgruppe (wie Memovida /en) |
| Separate Sitemap-Dateien pro Typ | Klein | Google crawlt effizienter |

---

## 7. Technische Sitemap-Skalierung

### Aktuell (1 Sitemap-Datei)
```
/sitemap.xml → ~1.620 URLs
```

### Ab ~1.000 URLs empfohlen: Sitemap-Index
```
/sitemap.xml (Index)
  ├── /sitemap-static.xml      (Startseite, Übersichten, Ratgeber)
  ├── /sitemap-standorte.xml   (alle /standorte/[stadt])
  ├── /sitemap-kurs-stadt.xml  (alle /standorte/[stadt]/[kurs])
  ├── /sitemap-stadt-kurs.xml  (alle /kurse/[kurs]/[stadt])
  └── /sitemap-agentur.xml     (alle /arbeitsagentur/[stadt])
```

**Umsetzung in Next.js:** Separate `sitemap-[name].ts`-Dateien im `app/`-Verzeichnis oder eine dynamische Route `/sitemap/[type]/route.ts`.

### Google-Grenze: 50.000 URLs pro Sitemap-Datei
Bei 10 Kursen × 400 Standorten × 2 Richtungen = **8.000 URLs** – noch weit unter dem Limit. Sitemap-Index erst ab ~5.000+ URLs wirklich nötig.

---

## 8. Keyword-Cluster-Übersicht

| Cluster | URL-Typ | Beispiel-Keywords |
|---|---|---|
| Brand | `/` | Forward Education, Weiterbildung |
| Kurs allgemein | `/kurse/[kurs]` | KI Weiterbildung, IT Sales Kurs |
| Stadt-first | `/standorte/[stadt]` | Weiterbildung München, Kurs Berlin |
| Kurs × Stadt (lokal) | `/standorte/[stadt]/[kurs]` | KI Kurs München, Sales Weiterbildung Berlin |
| Kurs-first (lokal) | `/kurse/[kurs]/[stadt]` | KI Weiterbildung München, Projektmanagement Hamburg |
| Förderung lokal | `/arbeitsagentur/[stadt]` | Bildungsgutschein München beantragen |
| Ratgeber | `/ratgeber/[slug]` | Was ist ein Bildungsgutschein, Quereinsteiger IT |
| Förderung (fehlt) | `/kosten` | Weiterbildung kostenlos, was kostet ein Kurs |

---

## 9. Next Steps (konkret)

**Phase 1 – Jetzt angehen (hoher Impact, überschaubarer Aufwand):**

1. **`/kosten`- oder `/foerderung`-Seite**  
   Landing Page: Bildungsgutschein erklärt, 100 % Kostenübernahme, FAQ, CTA Beratung. Fängt Keywords wie „Weiterbildung kostenlos“, „Bildungsgutschein Kosten“.

2. **og:image in `layout.tsx`**  
   Default-Open-Graph-Bild setzen, damit Shares (z. B. Ratgeber) ein sauberes Vorschaubild haben.

3. **`/arbeitsagentur/[stadt]/[kurs]`**  
   Neue dynamische Route + Sitemap-Einträge für Long-tail wie „Bildungsgutschein KI-Weiterbildung München“.

4. **Ratgeber ausbauen**  
   Ziel: 15–20 weitere Artikel (Bildungsgutschein, Karriere, Quereinstieg, Förderung). Top-of-Funnel-Traffic.

**Phase 2 – Wenn mehr Kurse / mehr Reichweite:**

5. **Neue Kurse in `site.config.ts`**  
   Jeder neue Kurs skaliert automatisch alle Standort- und inversen URLs.

6. **`/ueber-uns`**  
   Kurze E-E-A-T-Seite (Team, Mission, Zertifizierung).

7. **Dedizierte `/bildungsgutschein`-Landing-Page**  
   Ein Einstieg für alle, die direkt nach Förderung suchen.

8. **Sitemap-Index**  
   Erst sinnvoll, wenn deutlich über 2.000 URLs (z. B. nach mehr Kursen). Bis dahin reicht eine Sitemap.

**Phase 3 – Skalierung:**

9. Mehr Standorte in `standorte.config.ts`, mehr Kurse, ggf. Mehrsprachigkeit (EN) und bei Bedarf getrennte Sitemap-Dateien.

---

*Memovida-Referenz: [https://www.memovida.de/en](https://www.memovida.de/en) – Sitemap: [https://www.memovida.de/sitemap.xml](https://www.memovida.de/sitemap.xml)*
