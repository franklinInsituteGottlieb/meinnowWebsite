import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import TypeformLink from "@/components/TypeformLink";
import CourseSchema from "@/components/schema/CourseSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, courseDetailsBySlug } from "@/config/site.config";
import { standorte } from "@/config/standorte.config";

interface PageProps {
  params: Promise<{ stadt: string; kurs: string }>;
}

export function generateStaticParams() {
  return standorte.flatMap((s) =>
    siteConfig.courses.map((c) => ({ stadt: s.slug, kurs: c.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stadt, kurs } = await params;
  const s = standorte.find((x) => x.slug === stadt);
  const c = siteConfig.courses.find((x) => x.slug === kurs);
  if (!s || !c) return { title: siteConfig.seoBrand };
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  return {
    title: `${c.title} Weiterbildung ${s.name} – bis zu 100 % gefördert | ${siteConfig.seoBrand}`,
    description: `${c.title} in ${s.name}: ${c.description} AZAV-zertifiziert, komplett förderbar mit Bildungsgutschein.`,
    alternates: { canonical: `${base}/standorte/${s.slug}/${c.slug}` },
  };
}

export default async function KursStandortPage({ params }: PageProps) {
  const { stadt, kurs } = await params;
  const s = standorte.find((x) => x.slug === stadt);
  const c = siteConfig.courses.find((x) => x.slug === kurs);
  const detail = courseDetailsBySlug[kurs];
  if (!s || !c) notFound();

  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const url = `${base}/standorte/${s.slug}/${c.slug}`;

  return (
    <>
      <CourseSchema name={`${c.title} Weiterbildung ${s.name}`} description={c.description} url={url} />
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-24">
        <PageBackground />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Standorte", href: "/standorte" },
              { label: s.name, href: `/standorte/${s.slug}` },
              { label: c.title },
            ]}
          />

          {/* Hero */}
          <section className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {c.title} in {s.name}
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-foreground-light leading-relaxed">
              {c.description}
            </p>
            <p className="mt-3 mx-auto max-w-xl text-base text-foreground-light">
              In 3–6 Monaten fit für den Job – von {s.name} aus, ohne eigene Kosten. Die Agentur für Arbeit übernimmt die Gebühren.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors">
                Kostenloses Beratungsgespräch buchen
              </TypeformLink>
              <span className="text-sm text-foreground-light">
                Unverbindlich · Antwort innerhalb von 24 Stunden
              </span>
            </div>
          </section>

          {/* Highlights */}
          <div className="mb-14 flex flex-wrap justify-center gap-3">
            {c.highlights.map((h) => (
              <span key={h} className="rounded-full bg-white border border-slate-200 shadow-sm text-foreground px-4 py-2 text-sm font-medium">
                {h}
              </span>
            ))}
            <span className="rounded-full bg-green-50 border border-green-200 text-green-700 px-4 py-2 text-sm font-semibold">
              Bis zu 100 % förderbar
            </span>
            <span className="rounded-full bg-white border border-slate-200 shadow-sm text-foreground px-4 py-2 text-sm font-medium">
              {s.address ? "Vor Ort oder online" : "100 % online"}
            </span>
          </div>

          {/* Kursinhalte */}
          {detail && (
            <section id="inhalt" className="mb-16 scroll-mt-28">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                Lerninhalte
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-2">Was Du mitnimmst</h2>
              <p className="text-foreground-light mb-6 max-w-2xl">
                Konkrete Skills, die Du im Beruf sofort anwenden kannst – mit Live-Unterricht und echten Projekten.
              </p>
              <div className="space-y-5">
                {detail.contentSections.map((section, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white shadow-md border border-slate-200 overflow-hidden"
                  >
                    <div className="bg-slate-50/80 border-b border-slate-200/80 px-6 py-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {i + 1}. {section.title}
                      </h3>
                    </div>
                    <ul className="px-6 py-5 space-y-3 text-foreground-light leading-relaxed">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Vorteile */}
          <section className="mb-16 rounded-2xl bg-white shadow-lg border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-foreground mb-5">
              Deine Vorteile in {s.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Du zahlst nichts", desc: "Die Agentur für Arbeit übernimmt Kursgebühren, Fahrtkosten und bei Bedarf Kinderbetreuung – über den Bildungsgutschein." },
                { title: s.address ? "Vor Ort oder online" : "Lernen von zu Hause", desc: s.address ? `Unser Standort in ${s.name} oder im virtuellen Klassenzimmer – Du entscheidest.` : `Live-Unterricht im virtuellen Klassenzimmer, von ${s.name} aus. Keine Anfahrt.` },
                { title: "Maximal 15 Teilnehmer:innen", desc: "Kleine Gruppen, damit Du ehrliches Feedback und individuelle Begleitung bekommst." },
                { title: "Bewerbung inklusive", desc: "Bewerbungscoaching und Karriereberatung gehören dazu – bis Du Deinen nächsten Job hast." },
              ].map((v, i) => (
                <div key={i} className="flex gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-foreground">{v.title}</p>
                    <p className="text-sm text-foreground-light">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Weitere Kurse */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Weitere Weiterbildungen in {s.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {siteConfig.courses
                .filter((x) => x.slug !== c.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/standorte/${s.slug}/${other.slug}`}
                    className="rounded-full border border-primary/30 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {other.title} →
                  </Link>
                ))}
              <Link
                href={`/standorte/${s.slug}`}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-foreground-light hover:text-foreground transition-colors"
              >
                Alle Kurse in {s.name}
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center rounded-2xl bg-white shadow-lg border border-slate-200 p-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {c.title} in {s.name} starten
            </h2>
            <p className="text-foreground-light mb-6 max-w-lg mx-auto">
              In 15 Minuten klären wir: Passt der Kurs zu Dir? Wie bekommst Du den Bildungsgutschein? Wann kannst Du starten?
            </p>
            <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors">
              Jetzt Termin für Beratungsgespräch buchen
            </TypeformLink>
            <p className="mt-3 text-xs text-foreground-light">
              Unverbindlich · Keine Kosten · Wir melden uns innerhalb von 24 Stunden
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
