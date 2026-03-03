import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import TypeformLink from "@/components/TypeformLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site.config";
import { standorte } from "@/config/standorte.config";

interface PageProps {
  params: Promise<{ stadt: string }>;
}

const standorteMitAgentur = standorte.filter((s) => s.arbeitsagentur);

export function generateStaticParams() {
  return standorteMitAgentur.map((s) => ({ stadt: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stadt } = await params;
  const s = standorteMitAgentur.find((x) => x.slug === stadt);
  if (!s) return { title: siteConfig.seoBrand };
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  return {
    title: `Bildungsgutschein ${s.name} – So bekommst Du ihn | ${siteConfig.seoBrand}`,
    description: `Bildungsgutschein bei der Arbeitsagentur ${s.name} beantragen: Adresse, Schritt-für-Schritt-Anleitung und geförderte Kurse.`,
    alternates: { canonical: `${base}/arbeitsagentur/${s.slug}` },
  };
}

export default async function ArbeitsagenturPage({ params }: PageProps) {
  const { stadt } = await params;
  const s = standorteMitAgentur.find((x) => x.slug === stadt);
  if (!s || !s.arbeitsagentur) notFound();

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-24">
        <PageBackground />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: s.name, href: `/standorte/${s.slug}` },
              { label: `Bildungsgutschein ${s.name}` },
            ]}
          />

          {/* Hero */}
          <section className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Bildungsgutschein in {s.name} beantragen
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-foreground-light leading-relaxed">
              Die Agentur für Arbeit übernimmt die kompletten Kosten Deiner Weiterbildung. So gehst Du vor.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark">
                Wir helfen Dir beim Antrag
              </TypeformLink>
              <span className="text-sm text-foreground-light">
                Kostenlos · Unverbindlich
              </span>
            </div>
          </section>

          {/* Agentur-Info */}
          <section className="mb-12 rounded-2xl bg-white shadow-md border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {s.arbeitsagentur.name}
            </h2>
            <div className="flex items-start gap-3 text-foreground-light mb-3">
              <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>{s.arbeitsagentur.address}</span>
            </div>
            <a
              href={s.arbeitsagentur.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Website der Arbeitsagentur öffnen →
            </a>
          </section>

          {/* Schritt-für-Schritt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              In 5 Schritten zum Bildungsgutschein
            </h2>
            <p className="text-foreground-light mb-6">
              Die meisten unserer Teilnehmer:innen erhalten den Gutschein innerhalb von 2 Wochen.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Beratungstermin vereinbaren",
                  text: `Ruf bei der ${s.arbeitsagentur.name} an oder buche online einen Termin. Tipp: Sag direkt, dass Du eine AZAV-zertifizierte Weiterbildung machen möchtest.`,
                },
                {
                  step: "2",
                  title: "Vorbereitung mit uns",
                  text: "Wir bereiten Dich auf das Gespräch vor: Welche Argumente funktionieren, welche Unterlagen Du brauchst und wie Du den Bedarf begründest.",
                },
                {
                  step: "3",
                  title: "Kursangebot vorlegen",
                  text: "Bringe unser Kursangebot zum Termin mit. Wir erstellen Dir eine vollständige Maßnahmenübersicht mit AZAV-Nachweis.",
                },
                {
                  step: "4",
                  title: "Bildungsgutschein erhalten",
                  text: "Bei positivem Bescheid bekommst Du den Gutschein – in der Regel innerhalb von 1–2 Wochen nach dem Gespräch.",
                },
                {
                  step: "5",
                  title: "Weiterbildung starten",
                  text: "Löse den Gutschein bei uns ein. Die Agentur überweist die Kosten direkt an uns – Du zahlst keinen Cent.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 rounded-2xl bg-white shadow-md border border-slate-200 p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Was wird gefördert */}
          <section className="mb-12 rounded-2xl bg-white shadow-md border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Was übernimmt die Agentur für Arbeit?
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Lehrgangsgebühren (bis zu 100 %)",
                "Fahrtkosten zum Kursort",
                "Kinderbetreuungskosten",
                "Auswärtige Unterbringung (falls nötig)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <svg className="h-5 w-5 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-foreground-light">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Kurse */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Geförderte Kurse in {s.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {siteConfig.courses.map((c) => (
                <Link
                  key={c.slug}
                  href={`/standorte/${s.slug}/${c.slug}`}
                  className="rounded-full border border-primary/30 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {c.title} in {s.name}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center rounded-2xl bg-white shadow-lg border border-slate-200 p-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Wir übernehmen den Papierkram
            </h2>
            <p className="text-foreground-light mb-6 max-w-lg mx-auto">
              Du musst Dich nicht allein durch den Antrag kämpfen. Wir helfen Dir Schritt für Schritt – von der Vorbereitung bis zum Start.
            </p>
            <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark">
              Jetzt kostenlos beraten lassen
            </TypeformLink>
            <p className="mt-3 text-xs text-foreground-light">
              Unverbindlich · Keine Kosten · Antwort innerhalb von 24 Stunden
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
