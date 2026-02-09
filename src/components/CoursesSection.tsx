import AnimateOnScroll from "@/components/AnimateOnScroll";
import { siteConfig } from "@/config/site.config";

function CourseIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "brain":
      return (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "shield":
      return (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "sales":
      return (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "target":
      return (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function CoursesSection() {
  return (
    <section id="kurse" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header – von unten der Reihe nach, jedes Mal wenn Abschnitt geöffnet wird */}
        <div className="text-center mb-16">
          <AnimateOnScroll animation="fadeUp" delay={0} replayWhenInView>
            <span className="block text-sm font-semibold uppercase tracking-widest text-primary">
              Unsere Weiterbildungen
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={120} replayWhenInView>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Wähle deinen Karriereweg
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={240} replayWhenInView>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground-light">
              Drei zukunftssichere Fachbereiche – alle praxisnah, zertifiziert und
              auf die Anforderungen des Arbeitsmarktes zugeschnitten.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Course Cards – gleiche Höhe für alle Kacheln */}
        <div className="grid gap-8 md:grid-cols-3 md:items-stretch">
          {siteConfig.courses.map((course, index) => (
            <AnimateOnScroll key={course.title} animation="fadeUp" delay={index * 100} replayWhenInView className="h-full min-h-[320px]">
            <div
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/45 backdrop-blur-xl p-8 shadow-lg shadow-black/5 border border-white/40 hover:bg-white/60 hover:shadow-xl hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <CourseIcon icon={course.icon} />
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-bold text-foreground mb-3">
                {course.title}
              </h3>

              {/* Description */}
              <p className="relative text-foreground-light leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Highlights */}
              <ul className="relative space-y-2">
                {course.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 text-sm text-foreground-light"
                  >
                    <svg
                      className="h-4 w-4 text-primary shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Hover – Mehr erfahren */}
              <div className="relative mt-auto pt-6 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Mehr erfahren
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
