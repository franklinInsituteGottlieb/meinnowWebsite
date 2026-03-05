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
  params: Promise<{ slug: string; stadt: string }>;
}

export function generateStaticParams() {
  return siteConfig.courses.flatMap((c) =>
    standorte.map((s) => ({ slug: c.slug, stadt: s.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, stadt } = await params;
  const c = siteConfig.courses.find((x) => x.slug === slug);
  const s = standorte.find((x) => x.slug === stadt);
  if (!c || !s) return { title: siteConfig.seoBrand };
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  return {
    title: `${c.title} Weiterbildung in ${s.name} – Jetzt gefördert starten | ${siteConfig.seoBrand}`,
    description: `${c.title} Weiterbildung in ${s.name}: In 3–6 Monaten bereit für den Job. AZAV-zertifiziert, bis zu 100 % förderbar über den Bildungsgutschein der Agentur für Arbeit.`,
    alternates: { canonical: `${base}/kurse/${c.slug}/${s.slug}` },
  };
}

export default async function KursStadtPage({ params }: PageProps) {
  const { slug, stadt } = await params;
  const c = siteConfig.courses.find((x) => x.slug === slug);
  const s = standorte.find((x) => x.slug === stadt);
  const detail = courseDetailsBySlug[slug];
  if (!c || !s) notFound();

  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const url = `${base}/kurse/${c.slug}/${s.slug}`;

  return (
    <>
      <CourseSchema
        name={`${c.title} Weiterbildung in ${s.name}`}
        description={c.description}
        url={url}
      />
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-24">
        <PageBackground />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Kurse", href: "/kurse" },
              { label: c.title, href: `/kurse/${c.slug}` },
              { label: s.name },
            ]}
          />

          {/* Hero */}
          <section className="text-center mb-10">
            <span className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              {s.address ? "Online & Vor Ort" : "100 % Online"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {c.title} Weiterbildung in {s.name}
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-foreground-light leading-relaxed">
              {c.description}
            </p>
            <p className="mt-3 mx-auto max-w-xl text-base text-foreground-light">
              In 3–6 Monaten zum Zertifikat – von {s.name} aus, komplett über den Bildungsgutschein finanziert.
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

          {/* Trust Bar */}
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
              AZAV-zertifiziert
            </span>
          </div>

          {/* Kursinhalte */}
          {detail && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Inhalte der {c.title} Weiterbildung
              </h2>
              <p className="text-foreground-light mb-6 max-w-2xl">
                Praxisnahe Skills, die Du direkt im Job einsetzen kannst – mit Live-Unterricht und echten Projekten.
              </p>
              <div className="space-y-4">
                {detail.contentSections.map((section, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white shadow-md border border-slate-200 p-6"
                  >
                    <h3 className="font-bold text-foreground mb-3">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="text-sm text-foreground-light flex items-start gap-2.5">
                          <svg className="h-4 w-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Warum in dieser Stadt */}
          <section className="mb-16 rounded-2xl bg-white shadow-lg border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-foreground mb-2">
              {c.title} in {s.name} – Deine Vorteile
            </h2>
            <p className="text-foreground-light mb-6 leading-relaxed">
              {s.intro}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Du zahlst nichts", desc: "Die Agentur für Arbeit übernimmt Kursgebühren, Fahrtkosten und bei Bedarf Kinderbetreuung – über den Bildungsgutschein." },
                {
                  title: s.address ? "Vor Ort oder online" : "Lernen von zu Hause",
                  desc: s.address
                    ? `Unser Standort in ${s.name} oder im virtuellen Klassenzimmer – Du entscheidest.`
                    : `Live-Unterricht im virtuellen Klassenzimmer, von ${s.name} aus. Keine Anfahrt.`,
                },
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

          {/* So funktioniert's */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              In 3 Schritten zur {c.title} Weiterbildung
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { step: "1", title: "Beratung buchen", text: "Kostenlos und unverbindlich – wir klären, ob der Kurs zu Dir passt." },
                { step: "2", title: "Bildungsgutschein holen", text: "Wir bereiten Dich auf das Gespräch bei der Agentur für Arbeit vor. Die meisten erhalten ihn innerhalb von 2 Wochen." },
                { step: "3", title: "Kurs starten", text: `Du startest Deine ${c.title} Weiterbildung${s.address ? " vor Ort oder" : ""} online. Nach 3–6 Monaten hast Du Dein Zertifikat.` },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl bg-white shadow-md border border-slate-200 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Weitere Städte */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {c.title} Weiterbildung in anderen Städten
            </h2>
            <div className="flex flex-wrap gap-3">
              {standorte
                .filter((x) => x.slug !== s.slug)
                .slice(0, 12)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/kurse/${c.slug}/${other.slug}`}
                    className="rounded-full border border-primary/30 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {other.name} →
                  </Link>
                ))}
            </div>
          </section>

          {/* Andere Kurse */}
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
                    href={`/kurse/${other.slug}/${s.slug}`}
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
              Jetzt {c.title} Weiterbildung in {s.name} starten
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
