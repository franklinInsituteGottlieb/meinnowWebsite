import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import TypeformLink from "@/components/TypeformLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/schema/JsonLd";
import { siteConfig, courseDetailsBySlug } from "@/config/site.config";
import { standorte } from "@/config/standorte.config";

interface PageProps {
  params: Promise<{ stadt: string; kurs: string }>;
}

const standorteMitAgentur = standorte.filter((s) => s.arbeitsagentur);

export function generateStaticParams() {
  return standorteMitAgentur.flatMap((s) =>
    siteConfig.courses.map((c) => ({ stadt: s.slug, kurs: c.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stadt, kurs } = await params;
  const s = standorteMitAgentur.find((x) => x.slug === stadt);
  const c = siteConfig.courses.find((x) => x.slug === kurs);
  if (!s || !c) return { title: siteConfig.seoBrand };
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  return {
    title: `Bildungsgutschein für ${c.title} in ${s.name} – So bekommst Du ihn | ${siteConfig.seoBrand}`,
    description: `Bildungsgutschein für ${c.title} Weiterbildung in ${s.name} beantragen: Schritt-für-Schritt-Anleitung, Voraussetzungen und Dein Weg zur geförderten Weiterbildung.`,
    alternates: { canonical: `${base}/arbeitsagentur/${s.slug}/${c.slug}` },
  };
}

export default async function ArbeitsagenturKursPage({ params }: PageProps) {
  const { stadt, kurs } = await params;
  const s = standorteMitAgentur.find((x) => x.slug === stadt);
  const c = siteConfig.courses.find((x) => x.slug === kurs);
  if (!s || !c || !s.arbeitsagentur) notFound();

  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const detail = courseDetailsBySlug[kurs];

  const faqItems = [
    {
      question: `Wird die ${c.title} Weiterbildung gefördert?`,
      answer: `Mit einem Bildungsgutschein der Agentur für Arbeit können bis zu 100 % der Weiterbildungskosten übernommen werden – darunter Lehrgangsgebühren, Fahrtkosten, Kinderbetreuung und bei Bedarf Unterbringung. Welche Kosten in Deinem Fall übernommen werden, klärst Du im Beratungsgespräch.`,
    },
    {
      question: `Welche Voraussetzungen brauche ich für den Bildungsgutschein in ${s.name}?`,
      answer: `Du kannst einen Bildungsgutschein erhalten, wenn Du arbeitslos, arbeitssuchend oder von Arbeitslosigkeit bedroht bist und die Weiterbildung notwendig ist, um Deine Arbeitsmarktchancen zu verbessern. Die Voraussetzungen werden in einem persönlichen Beratungsgespräch bei der Agentur für Arbeit geprüft.`,
    },
    {
      question: `Wie lange dauert die ${c.title} Weiterbildung?`,
      answer: `Die Weiterbildung dauert 3–6 Monate, je nach Kursumfang. Du lernst in Vollzeit im Live-Unterricht.`,
    },
    {
      question: `Brauche ich Vorkenntnisse für ${c.title}?`,
      answer: `Nein. Die Weiterbildung ist auch für Quereinsteiger:innen ohne Vorkenntnisse geeignet. Du brauchst keine fachliche Vorbildung.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const steps = [
    {
      step: "1",
      title: "Termin bei der Agentur für Arbeit vereinbaren",
      text: `Ruf bei der ${s.arbeitsagentur.name} an oder buche online einen Termin. Sag direkt, dass Du eine AZAV-zertifizierte ${c.title} Weiterbildung machen möchtest.`,
    },
    {
      step: "2",
      title: "Vorbereitung mit uns",
      text: `Wir bereiten Dich auf das Gespräch vor: Welche Argumente für die ${c.title} Weiterbildung funktionieren, welche Unterlagen Du brauchst und wie Du den Bedarf begründest.`,
    },
    {
      step: "3",
      title: "Kursangebot vorlegen",
      text: `Bringe unser Angebot für die ${c.title} Weiterbildung zum Termin mit. Wir erstellen Dir eine vollständige Maßnahmenübersicht mit AZAV-Nachweis.`,
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
  ];

  return (
    <>
      <JsonLd data={faqSchema} />
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-24">
        <PageBackground />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: s.name, href: `/standorte/${s.slug}` },
              { label: `Bildungsgutschein ${s.name}`, href: `/arbeitsagentur/${s.slug}` },
              { label: c.title },
            ]}
          />

          {/* Hero */}
          <section className="text-center mb-12">
            <span className="inline-block mb-4 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
              Bis zu 100 % gefördert mit Bildungsgutschein
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Bildungsgutschein für {c.title} in {s.name}
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-foreground-light leading-relaxed">
              Mit dem Bildungsgutschein können bis zu 100 % der Kosten für Deine {c.title}{" "}
              Weiterbildung übernommen werden. So beantragst Du ihn in {s.name}.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors">
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

          {/* Kurs-Vorteile */}
          {detail && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Was Dich in der {c.title} Weiterbildung erwartet
              </h2>
              <p className="text-foreground-light mb-6 max-w-2xl">
                {c.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {detail.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <svg className="h-5 w-5 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-foreground-light">{f}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5 Schritte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              In 5 Schritten zum Bildungsgutschein für {c.title}
            </h2>
            <p className="text-foreground-light mb-6">
              Die meisten Teilnehmer:innen erhalten den Gutschein innerhalb von 2 Wochen.
            </p>
            <div className="space-y-4">
              {steps.map((item) => (
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

          {/* Kostenübernahme */}
          <section className="mb-12 rounded-2xl bg-white shadow-md border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Was übernimmt die Agentur für Arbeit?
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Lehrgangsgebühren (bis zu 100 %)",
                "Fahrtkosten zur Bildungsstätte",
                "Kinderbetreuungskosten",
                "Auswärtige Unterbringung und Verpflegung (falls nötig)",
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

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Häufige Fragen: Bildungsgutschein & {c.title}
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-white shadow-md border border-slate-200 overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <svg
                      className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-foreground-light leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Cross-Links */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Weitere geförderte Kurse in {s.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {siteConfig.courses
                .filter((x) => x.slug !== c.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/arbeitsagentur/${s.slug}/${other.slug}`}
                    className="rounded-full border border-primary/30 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Bildungsgutschein {other.title} →
                  </Link>
                ))}
              <Link
                href={`/arbeitsagentur/${s.slug}`}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-foreground-light hover:text-foreground transition-colors"
              >
                Bildungsgutschein {s.name} – Übersicht
              </Link>
              <Link
                href={`/standorte/${s.slug}/${c.slug}`}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-foreground-light hover:text-foreground transition-colors"
              >
                {c.title} in {s.name} – Kursdetails
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center rounded-2xl bg-white shadow-lg border border-slate-200 p-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Wir übernehmen den Papierkram
            </h2>
            <p className="text-foreground-light mb-6 max-w-lg mx-auto">
              Du musst Dich nicht allein durch den Antrag kämpfen. Wir helfen Dir Schritt für Schritt – von der Vorbereitung bis zum Start Deiner {c.title} Weiterbildung.
            </p>
            <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors">
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
