# Indexierungs-Strategie – Forward Education

**Zweck:** Phasenweise Sitemap-Steuerung, damit Google die wichtigsten Seiten zuerst crawlt und indexiert.

---

## Steuerung

Env-Variable in `.env.local` (oder Hosting-Umgebung):

```
SITEMAP_PHASE=1
```

| Phase | URLs | Inhalt |
|-------|------|--------|
| **1** (jetzt aktiv / Start) | ~115 | Startseite, 3 Kursseiten, alle Ratgeber, Kosten, Impressum, Top-12 Standorte + deren Kurs-Kombis |
| **2** | ~450 | + alle ~200 `/standorte/[stadt]` + alle `/arbeitsagentur/[stadt]` |
| **3** | ~1.650 | + alle Kombinations-Seiten (standort×kurs, kurs×stadt, agentur×kurs) |

- **Zum Start:** `SITEMAP_PHASE=1` setzen (in `.env.local` und Hosting).
- **Default** (kein Wert gesetzt): Phase 3 (vollständige Sitemap).

---

## Ablauf

### Woche 1–2: Phase 1

1. `SITEMAP_PHASE=1` setzen und deployen
2. In Google Search Console (GSC): Sitemap einreichen (`/sitemap.xml`)
3. Die 5 wichtigsten URLs manuell über „URL-Prüfung" → „Indexierung beantragen":
   - `/`
   - `/kurse/kuenstliche-intelligenz`
   - `/kurse/it-sales`
   - `/kurse/projektmanagement`
   - `/kosten`
4. Täglich prüfen: `site:forward-education.de` in Google
5. Warten, bis Kern-Seiten im Index sind (GSC „Seiten"-Bericht: „Gültig")

### Woche 3–4: Phase 2

1. `SITEMAP_PHASE=2` setzen und deployen
2. Sitemap in GSC neu einreichen
3. 5–10 Top-Standortseiten manuell über URL-Prüfung einreichen (München, Berlin, Hamburg, Köln, Frankfurt)
4. Warten, bis die Mehrzahl der Standort-Seiten indexiert ist

### Woche 5–8: Phase 3

1. `SITEMAP_PHASE=3` setzen und deployen
2. Sitemap in GSC neu einreichen
3. Monitoring: GSC „Seiten"-Bericht wöchentlich prüfen
4. „Entdeckt – nicht indexiert"-Seiten beobachten – normales Verhalten, löst sich über Wochen

---

## Tipps

- **Nach jedem Phase-Wechsel:** Sitemap in GSC erneut einreichen (Button „Sitemap erneut senden")
- **Manuelle Indexierung:** max. 10–20 URLs/Tag über URL-Prüfung – nicht alle auf einmal
- **Internes Linking:** Stärkste Seiten (Startseite, Kurse) verlinken auf Unterseiten → Linkjuice fließt natürlich
- **Content-Qualität:** Google indexiert Seiten mit einzigartigem Text schneller – Standort-Intros und Ratgeber helfen
- **Nicht hetzen:** Google braucht Zeit. Lieber ~115 Seiten (Phase 1) im Index als 1.600 „Entdeckt – nicht indexiert"

---

## GSC-Monitoring Checkliste

- [ ] Sitemap eingereicht und Statusanzeige „Erfolgreich" (kein Fehler)
- [ ] „Seiten" → „Gültig": Anzahl steigt wöchentlich
- [ ] „Seiten" → „Ausgeschlossen" → „Entdeckt – derzeit nicht indexiert": Bei Phase 1 sollte hier wenig stehen
- [ ] „Leistung" → Impressions erscheinen (auch wenn noch niedrig)
- [ ] Keine „Soft 404" oder „Server Error" Meldungen

---

## Wann Phase hochschalten?

| Indikator | Phase 1 → 2 | Phase 2 → 3 |
|-----------|-------------|-------------|
| Kern-Seiten indexiert | Ja (prüfe `site:forward-education.de`) | Ja |
| GSC „Gültig" steigt | Mind. 30+ Seiten | Mind. 200+ Seiten |
| Keine Server-Errors | Ja | Ja |
| Wochen seit letzter Phase | Mind. 2 | Mind. 2 |

---

*Stand: März 2026. Datei: `src/app/sitemap.ts` – gesteuert durch `SITEMAP_PHASE` env.*
