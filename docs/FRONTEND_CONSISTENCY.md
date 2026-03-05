# Frontend-Konsistenz – Forward Education

**Zweck:** Einheitliche UI-Patterns für Buttons, Karten, Abstände und Typografie. Bei neuen Komponenten oder Seiten diese Vorgaben anwenden; bei Reviews prüfen.

---

## 1. Primary CTA („Jetzt beraten lassen“)

**Standard (Hero, Sektionen, Seiten-Inhalt):**

```tsx
<TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors">
  Jetzt beraten lassen
</TypeformLink>
```

- **Immer:** `rounded-full`, `bg-primary`, `text-white`, `shadow-lg shadow-primary/25`, `hover:bg-primary-dark`, `transition-colors`
- **Größe:** `px-8 py-4`, `text-lg`, `font-semibold`
- **Text:** „Jetzt beraten lassen“, „Jetzt kostenlos beraten lassen“ oder „Kostenlos beraten lassen“ je nach Kontext – einheitlich pro Seiten-Typ (z. B. Unterseiten: „Jetzt kostenlos beraten lassen“)

**Kompakt (Navbar Desktop):**

```tsx
className="... rounded-full bg-primary px-6 py-2.5 text-[15px] font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
```

**Kompakt (Footer, Mobile-Nav CTA):**

```tsx
className="... rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
```

---

## 2. Secondary / Inverted CTA

**Nur auf dunklem Hintergrund (z. B. CtaSection – blauer Gradient):**

```tsx
<TypeformLink className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-slate-50 transition-colors">
  Jetzt beraten lassen
</TypeformLink>
```

- `bg-white`, `text-primary`, `hover:bg-slate-50` (kein `gray-50` – Slate-Palette nutzen)

---

## 3. Sekundär-Button (Outline / Ghost)

**Für „Kurse entdecken“, Filter, Zurück:**

- Outline: `rounded-full border-2 border-primary/30 bg-transparent (oder bg-slate-50) px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors`
- Neutral: `rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-foreground-light hover:text-foreground transition-colors`

---

## 4. Karten & Container

**Inhalts-Karten (Vorteile, Kurse, FAQ, Schritte):**

- `rounded-2xl bg-white shadow-md border border-slate-200`
- Padding: `p-6` oder `p-8` (größere Blöcke)
- Hover bei klickbaren Karten: `hover:shadow-lg hover:border-primary/20` oder `hover:border-primary/30`

**CTA-Bereich am Seitenende („Kostenlose Beratung“):**

- `rounded-2xl bg-white shadow-lg border border-slate-200 p-10`
- `text-center`

**Dropdown (z. B. Standorte):**

- `rounded-2xl bg-white shadow-lg border border-slate-200 py-2 min-w-[200px]`

---

## 5. Abstände

- **Sektionen (Home):** `py-24 scroll-mt-28` für Full-Section; innere Abstände zwischen Blöcken: `mb-12` oder `mb-16` je nach Hierarchie
- **Unterseiten:** Zwischen Sektionen einheitlich `mb-12` oder `mb-14`/`mb-16` – innerhalb einer Seite dasselbe Muster nutzen (z. B. alle `mb-12` oder alle `mb-16`)
- **Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`

---

## 6. Typografie

- **Section-Label (Überpunkt):** `text-sm font-semibold uppercase tracking-widest text-primary`
- **Section-Headline (H2):** `text-2xl sm:text-3xl` oder `text-3xl sm:text-4xl` + `font-bold text-foreground`
- **Karten-Titel (H3):** `text-xl font-bold text-foreground` oder `text-base font-semibold text-foreground`
- **Fließtext:** `text-foreground-light` für Beschreibungen; `leading-relaxed` wo sinnvoll

---

## 7. Badges / Pills

- **Förderung / positiv:** `rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary` (Markenfarbe)
- **Alternativ semantisch „gefördert“:** `rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700`
- **Neutrale Pills (Tags):** `rounded-full bg-white border border-slate-200 shadow-sm text-foreground px-4 py-2 text-sm font-medium`

---

## 8. Farben & Design-Tokens

- **Primary:** `primary`, `primary-light`, `primary-dark` (aus globals.css / Tailwind-Theme)
- **Text:** `text-foreground`, `text-foreground-light`
- **Hintergründe:** `bg-background`, `bg-slate-50` für leichte Flächen
- **Rahmen:** `border-slate-200`; Hover: `border-primary/20` oder `border-primary/30`
- Keine Mischung von `gray-*` und `slate-*` für dieselbe Funktion – einheitlich **slate** für UI (Rahmen, Hintergründe, dezenten Text)

---

## 9. Icons & Links

- **„Mehr erfahren“ / externe CTAs:** Pfeil-Icon `h-4 w-4` oder `h-5 w-5` konsistent
- **Interne Links (Footer, CTA-Bereich):** `text-slate-400 hover:text-white` bzw. `text-blue-200 hover:text-white` auf dunklem Grund

---

## 10. Checkliste für neue Seiten/Komponenten

- [ ] Primary CTA nutzt exakt die Standard-Klassen (rounded-full, px-8 py-4, text-lg, shadow-lg shadow-primary/25, hover:bg-primary-dark, transition-colors)
- [ ] Karten: rounded-2xl, border border-slate-200, shadow-md oder shadow-lg
- [ ] Abstände: gleiche mb-* Werte wie auf vergleichbaren Seiten
- [ ] Section-Label + Headline: text-primary uppercase + font-bold text-foreground
- [ ] Kein gray-* wo slate-* verwendet wird
- [ ] TypeformLink für alle „Jetzt beraten lassen“-CTAs (kein externer Link auf typeform.com außer über TypeformLink)

---

*Stand: März 2026. Bei Änderungen an globalen Styles (globals.css, Tailwind-Theme) diese Datei anpassen.*
