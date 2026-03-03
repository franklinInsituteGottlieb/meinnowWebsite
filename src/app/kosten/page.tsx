import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import TypeformLink from "@/components/TypeformLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/schema/JsonLd";
import { siteConfig } from "@/config/site.config";

const base = siteConfig.siteUrl.replace(/\/$/, "");

const faqItems = [
  {
    question: "Muss ich für die Weiterbildung etwas bezahlen?",
    answer:
      "Mit einem Bildungsgutschein der Agentur für Arbeit können bis zu 100 % der Weiterbildungskosten übernommen werden – darunter Lehrgangsgebühren, Fahrtkosten, Kinderbetreuung und bei Bedarf Unterbringung. Welche Kosten in Deinem Fall übernommen werden, klärst Du im Beratungsgespräch mit der Agentur für Arbeit.",
  },
  {
    question: "Wer hat Anspruch auf einen Bildungsgutschein?",
    answer:
      "Einen Bildungsgutschein kannst Du erhalten, wenn Du arbeitslos, arbeitssuchend oder von Arbeitslosigkeit bedroht bist. Die Voraussetzungen werden in einem persönlichen Beratungsgespräch bei der Agentur für Arbeit geprüft.",
  },
  {
    question: "Was ist eine AZAV-Zertifizierung?",
    answer:
      `AZAV steht für „Akkreditierungs- und Zulassungsverordnung Arbeitsförderung". Sie bestätigt, dass ein Bildungsträger und seine Maßnahmen die Qualitätsstandards der Agentur für Arbeit erfüllen. Forward Education ist AZAV-zertifiziert.`,
  },
  {
    question: "Wie lange dauert es, bis der Bildungsgutschein bewilligt wird?",
    answer:
      "In der Regel dauert die Bewilligung 1–2 Wochen nach dem Beratungsgespräch bei der Agentur für Arbeit. Wir helfen Dir bei der Vorbereitung, damit es schnell geht.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: `Weiterbildung Kosten – bis zu 100 % gefördert mit Bildungsgutschein | ${siteConfig.seoBrand}`,
  description:
    "Was kostet eine Weiterbildung? Mit dem Bildungsgutschein der Agentur für Arbeit können bis zu 100 % der Kosten übernommen werden. Jetzt informieren.",
  alternates: { canonical: `${base}/kosten` },
};

export default function KostenPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-24">
        <PageBackground />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <JsonLd data={faqSchema} />

          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Kosten & Förderung" },
            ]}
          />

          {/* Hero */}
          <section className="text-center mb-14">
            <span className="inline-block mb-4 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
              Bis zu 100 % gefördert mit Bildungsgutschein
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Was kostet eine Weiterbildung?
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-foreground-light leading-relaxed">
              Mit dem Bildungsgutschein der Agentur für Arbeit können bis zu
              100 % der Weiterbildungskosten übernommen werden – darunter
              Lehrgangsgebühren, Fahrtkosten und Kinderbetreuung.
            </p>
            <div className="mt-8">
              <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors">
                Jetzt kostenlos beraten lassen
              </TypeformLink>
            </div>
          </section>

          {/* Was wird übernommen */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Diese Kosten können übernommen werden
            </h2>
            <p className="text-foreground-light mb-4 text-sm">
              Laut Agentur für Arbeit können mit dem Bildungsgutschein folgende Kosten übernommen werden. Welche in Deinem Fall zutreffen, klärst Du im Beratungsgespräch.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Lehrgangsgebühren", detail: "Bis zu 100 % der Kurskosten inkl. Lernmittel und Prüfungsgebühren" },
                { label: "Fahrtkosten", detail: "Fahrkosten zur Bildungsstätte" },
                { label: "Kinderbetreuung", detail: "Kosten für Kinderbetreuung während der Weiterbildung" },
                { label: "Auswärtige Unterbringung", detail: "Falls tägliches Pendeln nicht zumutbar ist" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-white shadow-md border border-slate-200 p-5"
                >
                  <svg
                    className="h-5 w-5 text-green-600 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-foreground-light">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Voraussetzungen */}
          <section className="mb-14 rounded-2xl bg-white shadow-md border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Wer bekommt einen Bildungsgutschein?
            </h2>
            <p className="text-foreground-light mb-6">
              Einen Bildungsgutschein kannst Du erhalten, wenn die Weiterbildung notwendig ist, um:
            </p>
            <ul className="space-y-3">
              {[
                "Deine Arbeitslosigkeit zu beenden.",
                "Eine drohende Arbeitslosigkeit abzuwenden (z. B. befristeter Vertrag, Kündigung angekündigt).",
                "Fehlende berufliche Qualifikationen zu ergänzen oder zu erweitern.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-foreground-light">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Unsere Kurse */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Unsere geförderten Weiterbildungen
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {siteConfig.courses.map((c) => (
                <Link
                  key={c.slug}
                  href={`/kurse/${c.slug}`}
                  className="rounded-2xl bg-white shadow-md border border-slate-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-foreground-light line-clamp-3">
                    {c.description}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-primary">
                    Mehr erfahren →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Häufige Fragen zu Kosten & Förderung
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

          {/* CTA */}
          <section className="text-center rounded-2xl bg-white shadow-lg border border-slate-200 p-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Kostenlose Beratung – unverbindlich und persönlich
            </h2>
            <p className="text-foreground-light mb-6 max-w-lg mx-auto">
              Wir klären gemeinsam, ob Du Anspruch auf den Bildungsgutschein hast und welcher Kurs zu Dir passt.
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
