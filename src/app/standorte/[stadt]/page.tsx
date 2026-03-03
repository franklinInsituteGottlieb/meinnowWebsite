import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import TypeformLink from "@/components/TypeformLink";
import JsonLd from "@/components/schema/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site.config";
import { standorte, StandortConfig } from "@/config/standorte.config";

interface PageProps {
  params: Promise<{ stadt: string }>;
}

function getStandort(slug: string): StandortConfig | undefined {
  return standorte.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return standorte.map((s) => ({ stadt: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stadt } = await params;
  const s = getStandort(stadt);
  if (!s) return { title: siteConfig.seoBrand };
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  return {
    title: `Weiterbildung ${s.name} – Gefördert mit Bildungsgutschein | ${siteConfig.seoBrand}`,
    description: `Weiterbildung in ${s.name}: KI, Sales & Projektmanagement in 3–6 Monaten. AZAV-zertifiziert, 100 % förderbar. Jetzt Platz sichern.`,
    alternates: { canonical: `${base}/standorte/${s.slug}` },
  };
}

export default async function StandortPage({ params }: PageProps) {
  const { stadt } = await params;
  const s = getStandort(stadt);
  if (!s) notFound();

  const base = siteConfig.siteUrl.replace(/\/$/, "");

  const localBusinessSchema = s.address
    ? {
        "@context": "https://schema.org" as const,
        "@type": "LocalBusiness" as const,
        name: siteConfig.seoBrand,
        url: `${base}/standorte/${s.slug}`,
        address: {
          "@type": "PostalAddress" as const,
          streetAddress: s.address.split(",")[0]?.trim(),
          addressLocality: s.name,
          addressCountry: "DE",
        },
        email: siteConfig.footer.email,
      }
    : null;

  return (
    <>
      {localBusinessSchema && <JsonLd data={localBusinessSchema} />}
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-24">
        <PageBackground />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Standorte", href: "/standorte" },
              { label: s.name },
            ]}
          />

          {/* Hero – Above the Fold */}
          <section className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Deine Weiterbildung in {s.name}
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-foreground-light leading-relaxed">
              {s.intro}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark">
                Kostenlos beraten lassen
              </TypeformLink>
              <span className="text-sm text-foreground-light">
                Unverbindlich · Dauert 2 Minuten
              </span>
            </div>
          </section>

          {/* Trust Bar */}
          <div className="mb-16 flex flex-wrap justify-center gap-6 text-sm font-medium text-foreground-light">
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              AZAV-zertifiziert
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              100 % förderbar
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              3–6 Monate
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {s.address ? "Vor Ort oder online" : "100 % online"}
            </span>
          </div>

          {/* Kurse */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Wähle Deinen Kurs
            </h2>
            <p className="text-foreground-light mb-6">
              Jeder Kurs ist mit dem Bildungsgutschein förderbar – Du zahlst nichts.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {siteConfig.courses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/standorte/${s.slug}/${course.slug}`}
                  className="group flex flex-col rounded-2xl bg-white shadow-md border border-slate-200 p-6 hover:shadow-xl hover:border-primary/30 transition-all h-full"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-foreground-light leading-relaxed mb-4 flex-1">
                    {course.description}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground-light">
                        <svg className="h-4 w-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto text-sm font-semibold text-primary">
                    Mehr erfahren →
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* So funktioniert's */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              In 3 Schritten zur Weiterbildung
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { step: "1", title: "Beratung buchen", text: "Kostenlos und unverbindlich – wir klären, welcher Kurs zu Dir passt." },
                { step: "2", title: "Bildungsgutschein holen", text: "Wir helfen Dir beim Antrag bei der Agentur für Arbeit. Die meisten erhalten ihn innerhalb von 2 Wochen." },
                { step: "3", title: "Kurs starten", text: `Du startest Deine Weiterbildung ${s.address ? "vor Ort oder " : ""}online. Nach 3–6 Monaten hast Du Dein Zertifikat.` },
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

          {/* Arbeitsagentur */}
          {s.arbeitsagentur && (
            <section className="mb-16 rounded-2xl bg-white shadow-md border border-slate-200 p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Deine Arbeitsagentur in {s.name}
              </h2>
              <p className="text-foreground-light leading-relaxed mb-4">
                Für den Bildungsgutschein brauchst Du einen Termin bei Deiner Agentur für Arbeit. Wir bereiten Dich auf das Gespräch vor.
              </p>
              <div className="rounded-xl bg-slate-50/80 p-4 space-y-1.5 text-foreground-light mb-4">
                <p className="font-semibold text-foreground">{s.arbeitsagentur.name}</p>
                <p>{s.arbeitsagentur.address}</p>
                <a
                  href={s.arbeitsagentur.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary hover:underline font-medium"
                >
                  Website öffnen →
                </a>
              </div>
              <Link href={`/arbeitsagentur/${s.slug}`} className="text-sm font-semibold text-primary hover:underline">
                Ausführliche Anleitung: Bildungsgutschein beantragen →
              </Link>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Häufige Fragen
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: `Kann ich den Bildungsgutschein in ${s.name} nutzen?`,
                  a: `Ja. Alle unsere Kurse sind AZAV-zertifiziert. Die Agentur für Arbeit ${s.name} übernimmt die kompletten Kosten – Kursgebühren, Fahrtkosten und ggf. Kinderbetreuung.`,
                },
                {
                  q: `Wie läuft der Kurs ab?`,
                  a: s.address
                    ? `Du hast die Wahl: online im virtuellen Klassenzimmer oder in Präsenz an unserem Standort (${s.address}). Beide Formate bieten Live-Unterricht mit echten Dozent:innen.`
                    : `Der Kurs findet online im virtuellen Klassenzimmer statt – Live-Unterricht mit echten Dozent:innen, keine aufgezeichneten Videos. Du lernst bequem von ${s.name} aus.`,
                },
                {
                  q: "Brauche ich Vorkenntnisse?",
                  a: "Nein. Unsere Kurse richten sich an Quereinsteiger:innen und Berufswechsler:innen. Grundlegende Computerkenntnisse reichen aus.",
                },
                {
                  q: "Wie lange dauert die Weiterbildung?",
                  a: "Je nach Kurs 3 bis 6 Monate in Vollzeit. Du erhältst ein anerkanntes Zertifikat und Unterstützung bei der Jobsuche.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white shadow-md border border-slate-200 p-6"
                >
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-foreground-light leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center rounded-2xl bg-white shadow-lg border border-slate-200 p-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-foreground-light mb-6 max-w-lg mx-auto">
              In einem kurzen Gespräch klären wir, welcher Kurs zu Dir passt und wie Du den Bildungsgutschein bekommst.
            </p>
            <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark">
              Kostenloses Beratungsgespräch buchen
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
