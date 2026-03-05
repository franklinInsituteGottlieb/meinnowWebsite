This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Sitemap & Indexierung

Die Sitemap wird phasenweise gesteuert (Env: `SITEMAP_PHASE`), damit Google zuerst die wichtigsten Seiten indexiert.

| Phase | URLs | Inhalt |
|-------|------|--------|
| **1** (empfohlen zum Start) | ~115 | Startseite, 3 Kurse, alle Ratgeber, Kosten, Impressum, Top-12 Standorte + deren Kurs-Kombis |
| **2** | ~450 | + alle Standort-Seiten + Arbeitsagentur-Seiten |
| **3** | ~1.650 | + alle Kombinations-Seiten (vollständig) |

- **Aktuell:** `SITEMAP_PHASE=1` in `.env.local` → nur ~115 URLs in `/sitemap.xml`. Nach Indexierung Phase 2, dann 3 hochschalten.
- Details: [docs/README.md](docs/README.md) (Indexierungs-Strategie)

### Nächste Schritte nach Git Push

1. **Deploy** – Vercel/Hosting baut automatisch; dort `SITEMAP_PHASE=1` in den Env-Variablen setzen (falls noch nicht).
2. **Sitemap prüfen** – Nach Deploy `https://deine-domain.de/sitemap.xml` öffnen → sollten ~115 URLs stehen.
3. **Google Search Console** – Property anlegen (falls noch nicht), dann Sitemap einreichen: URL `https://deine-domain.de/sitemap.xml`.
4. **Manuelle Indexierung** – In GSC „URL-Prüfung" oben: diese 5 URLs nacheinander eingeben und „Indexierung beantragen": `/`, `/kurse/kuenstliche-intelligenz`, `/kurse/it-sales`, `/kurse/projektmanagement`, `/kosten`.
5. **Warten (1–2 Wochen)** – GSC → „Seiten" prüfen („Gültig" sollte steigen). Dann Phase 2: `SITEMAP_PHASE=2` setzen, deployen, Sitemap in GSC erneut einreichen.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
