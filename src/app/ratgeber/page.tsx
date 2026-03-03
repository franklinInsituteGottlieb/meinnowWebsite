import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import TypeformLink from "@/components/TypeformLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site.config";
import { ratgeberArticles, ratgeberCategories } from "@/config/ratgeber.config";

const base = siteConfig.siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  title: `Ratgeber – Weiterbildung, Bildungsgutschein & Karriere`,
  description:
    "Praxiswissen zu Bildungsgutschein, Weiterbildung, Karrierewechsel und Förderung – verständlich erklärt. Jetzt lesen.",
  alternates: { canonical: `${base}/ratgeber` },
};

export default function RatgeberOverview() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-24">
        <PageBackground />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Ratgeber" },
            ]}
          />

          {/* Hero */}
          <section className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Ratgeber
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-foreground-light leading-relaxed">
              Antworten auf die Fragen, die Du Dir vor einer Weiterbildung stellst – von Bildungsgutschein bis Gehalt. Praxiswissen von Forward Education.
            </p>
          </section>

          {ratgeberCategories.map((cat) => {
            const articles = ratgeberArticles.filter((a) => a.category === cat.slug);
            if (articles.length === 0) return null;
            return (
              <section key={cat.slug} className="mb-14">
                <h2 className="text-xl font-bold text-foreground mb-5">{cat.label}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/ratgeber/${article.slug}`}
                      className="group rounded-2xl bg-white shadow-md border border-slate-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                    >
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-foreground-light leading-relaxed line-clamp-2">
                        {article.description}
                      </p>
                      <span className="mt-3 inline-block text-sm font-semibold text-primary">
                        Lesen →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA */}
          <section className="text-center rounded-2xl bg-white shadow-lg border border-slate-200 p-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Noch Fragen?
            </h2>
            <p className="text-foreground-light mb-6 max-w-lg mx-auto">
              Wir beraten Dich kostenlos zu Kursen, Bildungsgutschein und Deinen Möglichkeiten.
            </p>
            <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark">
              Kostenlos beraten lassen
            </TypeformLink>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
