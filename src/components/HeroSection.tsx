import { siteConfig } from "@/config/site.config";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-16">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Headline */}
        <h1 className="animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
          {siteConfig.hero.headline}
        </h1>

        {/* Subline */}
        <p className="animate-fade-in-up animation-delay-200 mt-6 mx-auto max-w-2xl text-lg sm:text-xl text-foreground-light leading-relaxed">
          {siteConfig.hero.subline}
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.hero.ctaHref}
            className="cta-animate inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-colors duration-300 hover:-translate-y-0.5 hover:scale-105"
          >
            {siteConfig.hero.ctaText}
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <a
            href="#kurse"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/50 bg-white/40 backdrop-blur-sm px-8 py-4 text-lg font-bold text-foreground shadow-sm hover:border-primary hover:text-primary hover:bg-white/55 transition-all duration-300"
          >
            Kurse entdecken
          </a>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-in-up animation-delay-400 mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-foreground-light">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            AZAV-zertifiziert
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Bis zu 100&nbsp;% förderbar
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Online &amp; Präsenz
          </div>
        </div>
      </div>
    </section>
  );
}
