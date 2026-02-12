import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import DatenschutzContent from "@/components/DatenschutzContent";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: `Impressum & Datenschutz – ${siteConfig.name}`,
  description: "Impressum und Datenschutzerklärung von Forward Education.",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-24">
        <PageBackground />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Page Header – wie Section-Header auf der Startseite */}
          <div className="text-center mb-12">
            <span className="block text-sm font-semibold uppercase tracking-widest text-primary">
              Rechtliches
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Impressum &amp; Datenschutz
            </h1>
          </div>

          {/* In-Page-Nav – Pill-Style wie Site-Buttons */}
          <nav className="flex flex-wrap justify-center gap-3 mb-14">
            <a
              href="#impressum"
              className="rounded-full bg-white/50 backdrop-blur-sm border border-white/60 px-5 py-2.5 text-sm font-semibold text-foreground shadow-md shadow-black/5 hover:bg-white/70 hover:border-primary/30 hover:text-primary transition-all duration-200"
            >
              Impressum
            </a>
            <a
              href="#datenschutz"
              className="rounded-full bg-white/50 backdrop-blur-sm border border-white/60 px-5 py-2.5 text-sm font-semibold text-foreground shadow-md shadow-black/5 hover:bg-white/70 hover:border-primary/30 hover:text-primary transition-all duration-200"
            >
              Datenschutz
            </a>
          </nav>

          {/* Content in Glas-Karte – wie Kurse/Vorteile */}
          <div className="rounded-2xl bg-white/45 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/40 overflow-hidden">
            <div className="p-8 sm:p-10">
              <section id="impressum" className="scroll-mt-28">
                <h2 className="text-xl font-semibold uppercase tracking-widest text-primary mb-3">
                  Impressum
                </h2>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Angaben gemäß § 5 TMG
                </h3>
                <div className="text-foreground-light leading-relaxed whitespace-pre-line space-y-1">
                  {`${siteConfig.companyLegalName}
Stefan-George-Ring 2
81929 München
`}
                  <a href={`mailto:${siteConfig.footer.email}`} className="text-primary hover:underline font-medium">
                    {siteConfig.footer.email}
                  </a>
                  {`

Geschäftsführer: ${siteConfig.legal.responsiblePerson}
Registergericht: ${siteConfig.legal.registerCourt}, ${siteConfig.legal.registerNumber}
Inhaltlich verantwortlich gem. § 55 RStV:
${siteConfig.legal.contentResponsible} (Anschrift s.o.)`}
                </div>
              </section>

              <hr className="my-12 border-slate-200/80" />

              <section id="datenschutz" className="scroll-mt-28">
                <h2 className="text-xl font-semibold uppercase tracking-widest text-primary mb-3">
                  Datenschutz
                </h2>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Datenschutzerklärung
                </h3>
                <DatenschutzContent />
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
