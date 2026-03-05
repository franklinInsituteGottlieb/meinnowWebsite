# Copy-Guidelines – Forward Education

**Basis:** Copywriting-Skill (`.agents/skills/copywriting/SKILL.md`). Bei neuen oder überarbeiteten Texten diese Regeln und den Skill nutzen.

---

## 1. Prinzipien (aus dem Skill)

- **Klarheit vor Cleverness** – Verständlich schreiben, nicht blenden.
- **Nutzen vor Features** – Was hat die Person davon? („Du zahlst nichts“ statt „AZAV-zertifiziert“ als erster Satz.)
- **Konkret vor vage** – „In 3 bis 6 Monaten“ statt „schnell“; „innerhalb von 24 Stunden“ statt „zeitnah“.
- **Kundensprache** – Worte, die die Zielgruppe nutzt (Weiterbildung, Bildungsgutschein, Quereinstieg, förderbar).
- **Eine Botschaft pro Abschnitt** – Ein Gedanke, dann weiter.
- **Einfach, aktiv, selbstbewusst** – „Nutzen“ statt „utilisieren“, aktive Verben, kein „fast“, „sehr“, „wirklich“ ohne Grund.
- **Keine Ausrufezeichen** in Marketing-Texten; keine erfundenen Zahlen oder Testimonials.

---

## 2. Ansprache

- **Du** durchgängig (kein „Sie“ in FAQ, CTAs oder Benefits).
- Persönlich, aber professionell – passend zu Berufswechsler:innen und Weiterbildung.

---

## 3. Headlines & Hero

- **Headline:** Konkretes Ergebnis oder Zeitrahmen (z. B. „In 3 bis 6 Monaten fit für KI, Sales oder Projektmanagement.“).
- **Subline:** Was sie bekommen + Förderung + kurzer Proof (Live-Unterricht, Bewerbungscoaching).
- Formeln aus dem Skill: „{Ergebnis} in {Zeit}“, „{Angebot} – {Hauptvorteil}“.

---

## 4. CTAs

- **Primär:** „Jetzt kostenlos beraten lassen“ / „Jetzt beraten lassen“ (Aktion + was sie bekommen).
- Keine schwachen CTAs wie „Mehr erfahren“, „Submit“, „Klicken Sie hier“ als Haupt-Button.
- Siehe auch `docs/FRONTEND_CONSISTENCY.md` für Button-Styling.

---

## 5. Benefits

- **Titel:** Nutzen in wenigen Worten („Du zahlst nichts“, „Bewerbung inklusive“).
- **Text:** Kurz erklären, wie es funktioniert und was konkret passiert; optional 1 Beweis (z. B. AZAV).

---

## 6. FAQ

- **Frage:** So, wie Nutzer:innen suchen würden.
- **Antwort:** Direkt, in Du-Form, mit konkreten Infos (z. B. „innerhalb von 24 Stunden“). Kein Sie, kein „Klicken Sie“.

---

## 7. Wo der Copy steht

| Bereich        | Quelle |
|----------------|--------|
| Hero, CTA, FAQ, Benefits, Kurse (Kurz) | `src/config/site.config.ts` |
| Ratgeber       | `src/config/ratgeber.config.ts` |
| Standorte-Intros | `src/config/standorte.config.ts` |
| Seiten-spezifisch | jeweilige Page-Komponenten |

---

## 8. Bei neuen oder großen Text-Änderungen

1. **Copywriting-Skill** lesen (`.agents/skills/copywriting/SKILL.md`).
2. **Kontext klären:** Zielgruppe, Hauptaktion, Einwände.
3. **Draft schreiben** nach Headline-/Struktur-Formeln im Skill.
4. **Copy-Editing-Skill** nutzen für Feinschliff (`.agents/skills/copy-editing/SKILL.md`).
5. **Du durchgängig**, konkrete Zahlen/Zeiten, keine Sie/„Klicken Sie“.

---

*Stand: März 2026. Skill-Referenz: `.agents/skills/copywriting/`.*
