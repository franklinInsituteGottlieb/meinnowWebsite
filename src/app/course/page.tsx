import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroFixedBackground from "@/components/HeroFixedBackground";
import StoreMeinnowCourse from "@/components/StoreMeinnowCourse";
import TypeformLink from "@/components/TypeformLink";
import CourseDetailFaq from "@/components/CourseDetailFaq";
import { siteConfig, courseDetailsBySlug } from "@/config/site.config";
import { getCourseById } from "@/lib/franklin-api";

/** Standard-Detail (Features, FAQ, Hero) für Kurse, die nur per course_id geladen werden */
const defaultDetail = courseDetailsBySlug["projektmanagement"]!;

interface PageProps {
  searchParams?: Promise<{ course_id?: string; utm_source?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps) {
  const params = await searchParams;
  const courseId = params?.course_id;
  if (!courseId) return { title: siteConfig.name };
  const data = await getCourseById(courseId);
  const title =
    data?.success && data?.course
      ? data.course.title_readability_optimized ||
        data.course.title_keyword_optimized ||
        "Kurs"
      : "Kurs";
  return {
    title: `${title} – ${siteConfig.name}`,
    description: siteConfig.tagline,
  };
}

export default async function CourseByIdPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const courseId = params?.course_id;

  if (!courseId) notFound();

  const data = await getCourseById(courseId);
  if (!data?.success || !data?.course) notFound();

  const course = data.course;
  const displayTitle =
    course.title_readability_optimized ||
    course.title_keyword_optimized ||
    "Kurs";
  const contentSections = course.modules.map((m) => ({
    title: m.module_title,
    items: m.module_content,
  }));

  return (
    <>
      <Navbar />
      <StoreMeinnowCourse
        course={course}
        courseId={courseId}
        utmSource={params?.utm_source}
      />
      <main className="relative min-h-screen pt-20 pb-24">
        <div className="fixed inset-0 z-0 bg-background" aria-hidden />
        <HeroFixedBackground />
        <section className="relative min-h-[70vh] flex items-center overflow-x-hidden pt-12 pb-24">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch lg:min-h-[420px]">
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
                <h1 className="course-hero-title hero-headline-in font-extrabold tracking-tight text-foreground leading-tight break-words">
                  {displayTitle}
                </h1>
                <ul className="mt-6 flex flex-col items-center lg:items-start gap-2 text-base sm:text-lg text-foreground-light">
                  {defaultDetail.features.map((feature) => (
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
                  <TypeformLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-colors duration-300 hover:-translate-y-0.5 hover:scale-105">
                    Platz sichern
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </TypeformLink>
                  <a
                    href="#inhalt"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white/50 bg-white/40 backdrop-blur-sm px-8 py-4 text-lg font-bold text-foreground shadow-sm hover:border-primary hover:text-primary hover:bg-white/55 transition-all duration-300"
                  >
                    Kursinhalt
                  </a>
                </div>
              </div>
              <div className="hidden lg:block relative min-h-[320px]">
                <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-white/40 shadow-lg">
                  <Image
                    src="/asian+black.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 0px, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-4 pb-20">
          <section id="inhalt" className="mb-20 scroll-mt-28">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Deine Lerninhalte im Überblick</h2>
            <div className="rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/50 overflow-hidden">
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

          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Häufige Fragen
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">FAQ</h2>
            <CourseDetailFaq items={defaultDetail.faq} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
