import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import TypeformLink from "@/components/TypeformLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site.config";
import { standorte, featuredStandorte } from "@/config/standorte.config";

const base = siteConfig.siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  title: `Weiterbildung in ganz Deutschland | ${siteConfig.seoBrand}`,
  description: `Geförderte Weiterbildung bundesweit: KI, Sales & Projektmanagement in 3–6 Monaten. AZAV-zertifiziert, bis zu 100 % förderbar. Überall in Deutschland.`,
  alternates: { canonical: `${base}/standorte` },
};

export default function StandorteOverview() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-24">
        <PageBackground />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Standorte" },
            ]}
          />

          {/* Hero */}
          <section className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Weiterbildung in ganz Deutschland. Ein Ziel: Dein neuer Job.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-foreground-light leading-relaxed">
              Egal wo Du wohnst – unsere Weiterbildungen in KI, Sales und Projektmanagement sind online verfügbar und werden von der Agentur für Arbeit finanziert.
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

          {/* Trust */}
          <div className="mb-14 flex flex-wrap justify-center gap-6 text-sm font-medium text-foreground-light">
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              AZAV-zertifiziert
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Bis zu 100 % förderbar
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Online von überall
            </span>
          </div>

          {/* Standorte – nur die größten; alle anderen Städte haben eigene Seiten unter /standorte/[stadt] für SEO */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-6">Unsere wichtigsten Standorte</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredStandorte.map((s) => (
                <Link
                  key={s.slug}
                  href={`/standorte/${s.slug}`}
                  className="group rounded-2xl bg-white shadow-md border border-slate-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{s.name}</h3>
                  <p className="mt-1 text-xs font-medium text-foreground-light uppercase tracking-wider">
                    {s.bundesland}
                  </p>
                  <p className="mt-3 text-sm text-foreground-light leading-relaxed line-clamp-2">
                    {s.intro}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-primary">
                    Kurse ansehen →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
