import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypeformLink from "@/components/TypeformLink";
import HeroFixedBackground from "@/components/HeroFixedBackground";
import CourseDetailFaq from "@/components/CourseDetailFaq";
import CourseSchema from "@/components/schema/CourseSchema";
import { siteConfig, courseDetailsBySlug } from "@/config/site.config";
import { featuredStandorte } from "@/config/standorte.config";
import { getCourseById } from "@/lib/franklin-api";
import { jaccard, toWordSet } from "@/lib/text-similarity";

function getCourseApiIds(course: { apiCourseId?: string; apiCourseIds?: string[] }): string[] {
  const ids: string[] = [];
  if (course.apiCourseId) ids.push(course.apiCourseId);
  if (course.apiCourseIds?.length) ids.push(...course.apiCourseIds);
  return ids;
}

function CourseIcon({ icon }: { icon: string }) {
  const cls = "h-8 w-8";
  switch (icon) {
    case "brain":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      );
    case "sales":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "target":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      );
    default:
      return null;
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ q?: string; title?: string }>;
}

export async function generateMetadata({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const resolved = searchParams ? await searchParams : undefined;
  const q = resolved?.q;
  const titleParam = resolved?.title;
  const course = siteConfig.courses.find((c) => c.slug === slug);
  if (!course) return { title: siteConfig.seoBrand };
  let title = course.title;
  if (q && titleParam) title = decodeURIComponent(titleParam);
  const description = course.description;
  if (!q) {
    const ids = getCourseApiIds(course);
    if (ids.length > 0) {
      const themeText = [
        course.title,
        ...(course.searchKeywords ?? []),
        course.slug.replace(/-/g, " "),
      ]
        .filter(Boolean)
        .join(" ");
      const themeSet = toWordSet(themeText);
      let bestScore = -1;
      let bestTitle = course.title;
      for (const id of ids) {
        const data = await getCourseById(id);
        if (!data?.success || !data?.course) continue;
        const apiTitle = [
          data.course.title_readability_optimized,
          data.course.title_keyword_optimized,
        ]
          .filter(Boolean)
          .join(" ");
        const score = jaccard(themeSet, toWordSet(apiTitle));
        if (score > bestScore) {
          bestScore = score;
          bestTitle =
            data.course.title_readability_optimized ||
            data.course.title_keyword_optimized ||
            course.title;
        }
      }
      title = bestTitle;
    }
  }
  const canonical = `${siteConfig.siteUrl.replace(/\/$/, "")}/kurse/${slug}`;
  return {
    title: `${title} | ${siteConfig.seoBrand}`,
    description,
    alternates: { canonical },
  };
}

export default async function CourseDetailPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const course = siteConfig.courses.find((c) => c.slug === slug);
  const detail = courseDetailsBySlug[slug];

  if (!course || !detail) notFound();

  const searchParamsResolved = searchParams ? await searchParams : undefined;
  const searchQuery = searchParamsResolved?.q;
  const titleFromSearch = searchParamsResolved?.title;

  let displayTitle = course.title;
  let contentSections = detail.contentSections;
  const ids = getCourseApiIds(course);

  if (searchQuery && titleFromSearch) {
    displayTitle = decodeURIComponent(titleFromSearch);
  } else if (searchQuery) {
    displayTitle = course.title;
  }

  if (ids.length > 0) {
    const themeText = [
      course.title,
      ...(course.searchKeywords ?? []),
      course.slug.replace(/-/g, " "),
    ]
      .filter(Boolean)
      .join(" ");
    const themeSet = toWordSet(themeText);

    let bestScore = -1;
    let bestCourse: Awaited<ReturnType<typeof getCourseById>> = null;

    for (const id of ids) {
      const data = await getCourseById(id);
      if (!data?.success || !data?.course) continue;
      const apiTitle = [
        data.course.title_readability_optimized,
        data.course.title_keyword_optimized,
      ]
        .filter(Boolean)
        .join(" ");
      const score = jaccard(themeSet, toWordSet(apiTitle));
      if (score > bestScore) {
        bestScore = score;
        bestCourse = data;
      }
    }

    if (bestCourse?.course) {
      if (!searchQuery) {
        displayTitle =
          bestCourse.course.title_readability_optimized ||
          bestCourse.course.title_keyword_optimized ||
          course.title;
      }
      contentSections = bestCourse.course.modules.map((m) => ({
        title: m.module_title,
        items: m.module_content,
      }));
    }
  }

  const courseUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}/kurse/${slug}`;

  return (
    <>
      <CourseSchema name={displayTitle} description={course.description} url={courseUrl} />
      <Navbar />
      <main className="relative min-h-screen pt-20 pb-24">
        <div className="fixed inset-0 z-0 bg-background" aria-hidden />
        <HeroFixedBackground />
        {/* Hero-Bereich – Titel links, Bild rechts */}
        <section className="relative min-h-[70vh] flex items-center overflow-x-hidden pt-12 pb-24">
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 w-full">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch lg:min-h-[420px]">
              {/* Links: Titel, Bewertung, Vorteile, CTAs */}
              <div className="course-hero-title-box text-center lg:text-left flex flex-col items-center lg:items-start justify-center lg:pr-6">
                <div className="flex flex-col items-center lg:items-start gap-2 mb-8">
                  <div className="flex items-center gap-2">
                    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden>
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <div className="flex items-center gap-0.5" aria-hidden>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                          <path fill="#E8B923" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    <span className="font-bold">4,9</span>
                    <span className="text-foreground-light"> · </span>
                    <span>450+ Google-Bewertungen</span>
                  </p>
                </div>
                <h1 className="course-hero-title font-extrabold tracking-tight text-foreground leading-tight break-words">
                  {displayTitle}
                </h1>
                <ul className="mt-6 flex flex-col items-center lg:items-start gap-2 text-base sm:text-lg text-foreground-light">
                  {detail.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="h-5 w-5 shrink-0 text-black" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 shrink-0 text-black" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    100&nbsp;% gefördert
                  </li>
                </ul>
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors">
                    Platz sichern
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </TypeformLink>
                  <a
                    href="#inhalt"
                    className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white/90 px-8 py-4 text-lg font-bold text-foreground shadow-sm hover:border-primary hover:text-primary hover:bg-slate-50"
                  >
                    Kursinhalt
                  </a>
                </div>
              </div>
              {/* Rechts: Bild */}
              <div className="hidden lg:block relative min-h-[320px]">
                <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                  <Image
                    src={detail.heroImage ?? "/asian+black.png"}
                    alt={`${displayTitle} – ${siteConfig.seoBrand}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 0px, 480px"
                    priority
                    quality={80}
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-4 pb-20">
          {/* Lerninhalt – alles in einer Karte */}
          <section id="inhalt" className="mb-20 scroll-mt-28">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Deine Lerninhalte im Überblick</h2>
            <div className="rounded-2xl bg-white shadow-lg border border-slate-200 overflow-hidden">
              {contentSections.map((section, i) => (
                <div
                  key={section.title}
                  className={i > 0 ? "border-t border-slate-200/60 px-6 py-6 sm:px-8 sm:py-7" : "px-6 py-6 sm:px-8 sm:py-7"}
                >
                  <h3 className="text-base font-semibold text-foreground mb-3 sm:mb-4">{section.title}</h3>
                  <ul className="space-y-2.5 text-foreground-light leading-relaxed">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Häufige Fragen
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">FAQ</h2>
            <CourseDetailFaq items={detail.faq} />
          </section>

          {/* Standort Cross-Links */}
          <section className="mt-16">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Diesen Kurs an deinem Standort
            </h2>
            <div className="flex flex-wrap gap-3">
              {featuredStandorte.slice(0, 5).map((s) => (
                <Link
                  key={s.slug}
                  href={`/standorte/${s.slug}/${slug}`}
                  className="rounded-full border border-primary/30 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {course.title} in {s.name}
                </Link>
              ))}
              <Link
                href="/standorte"
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-foreground-light hover:text-foreground transition-colors"
              >
                Alle Standorte →
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
