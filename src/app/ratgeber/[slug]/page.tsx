import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import TypeformLink from "@/components/TypeformLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/schema/JsonLd";
import { siteConfig } from "@/config/site.config";
import { ratgeberArticles, ratgeberCategories, RatgeberArticle } from "@/config/ratgeber.config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getArticle(slug: string): RatgeberArticle | undefined {
  return ratgeberArticles.find((a) => a.slug === slug);
}

export function generateStaticParams() {
  return ratgeberArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: siteConfig.seoBrand };
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  return {
    title: `${article.title} | ${siteConfig.seoBrand}`,
    description: article.description,
    alternates: { canonical: `${base}/ratgeber/${article.slug}` },
  };
}

export default async function RatgeberArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const categoryLabel =
    ratgeberCategories.find((c) => c.slug === article.category)?.label ?? "Ratgeber";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${base}/ratgeber/${article.slug}`,
    publisher: { "@id": `${base}/#organization` },
    author: { "@type": "Organization", name: siteConfig.seoBrand },
  };

  const related = ratgeberArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema} />
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-24">
        <PageBackground />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Ratgeber", href: "/ratgeber" },
              { label: article.title },
            ]}
          />

          <div className="mb-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-1">
              {categoryLabel}
            </span>
          </div>

          <article className="rounded-2xl bg-white shadow-lg border border-slate-200 p-8 sm:p-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 leading-tight">
              {article.title}
            </h1>
            <div className="space-y-1 text-foreground-light leading-relaxed">
              {article.content.split("\n").map((line, i) => {
                if (line.startsWith("### "))
                  return <h3 key={i} className="text-lg font-semibold text-foreground mt-6 mb-3">{line.replace("### ", "")}</h3>;
                if (line.startsWith("## "))
                  return <h2 key={i} className="text-xl font-bold text-foreground mt-8 mb-4">{line.replace("## ", "")}</h2>;
                if (line.startsWith("- **"))
                  return (
                    <div key={i} className="flex gap-2.5 ml-1 py-0.5">
                      <span className="text-primary shrink-0 mt-0.5">•</span>
                      <span dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                    </div>
                  );
                if (line.startsWith("- "))
                  return (
                    <div key={i} className="flex gap-2.5 ml-1 py-0.5">
                      <span className="text-primary shrink-0 mt-0.5">•</span>
                      <span>{line.replace("- ", "")}</span>
                    </div>
                  );
                if (line.startsWith("| ")) {
                  const cells = line.split("|").filter(Boolean).map((c) => c.trim());
                  if (cells.every((c) => c.match(/^-+$/))) return null;
                  return (
                    <div key={i} className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm border-b border-slate-100 py-2">
                      {cells.map((cell, j) => (
                        <span key={j} className={j === 0 ? "font-medium text-foreground" : ""}>
                          {cell}
                        </span>
                      ))}
                    </div>
                  );
                }
                if (line.match(/^\d+\. /))
                  return (
                    <div key={i} className="flex gap-2.5 ml-1 py-0.5">
                      <span className="text-primary font-bold shrink-0 mt-0.5">
                        {line.match(/^(\d+)\./)?.[1]}.
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                    </div>
                  );
                if (line.trim() === "") return <div key={i} className="h-4" />;
                return <p key={i} className="py-0.5">{line}</p>;
              })}
            </div>
          </article>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Weiterlesen
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/ratgeber/${r.slug}`}
                    className="group rounded-2xl bg-white shadow-md border border-slate-200 p-5 hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{r.title}</h3>
                    <p className="text-sm text-foreground-light line-clamp-2">
                      {r.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-12 text-center rounded-2xl bg-white shadow-lg border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Bereit für Deine Weiterbildung?
            </h2>
            <p className="text-foreground-light mb-5 max-w-md mx-auto">
              Wir klären in einem kurzen Gespräch, welcher Kurs zu Dir passt und helfen Dir beim Bildungsgutschein.
            </p>
            <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors">
              Kostenloses Beratungsgespräch buchen
            </TypeformLink>
            <p className="mt-3 text-xs text-foreground-light">
              Unverbindlich · Keine Kosten
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
