"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { featuredStandorte } from "@/config/standorte.config";

export default function StandorteSection() {

  return (
    <section id="standorte" className="relative py-24 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimateOnScroll animation="fadeUp" delay={0} replayWhenInView>
            <span className="block text-sm font-semibold uppercase tracking-widest text-primary">
              Überall in Deutschland
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={120} replayWhenInView>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Weiterbildung in deiner Nähe
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={240} replayWhenInView>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground-light">
              Egal wo Du wohnst – unsere Kurse in KI, Sales und Projektmanagement
              sind online oder vor Ort verfügbar! Alle Kurse sind mit dem Bildungsgutschein förderbar.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStandorte.slice(0, 6).map((s, index) => (
            <AnimateOnScroll key={s.slug} animation="fadeUp" delay={index * 80} replayWhenInView>
              <Link
                href={`/standorte/${s.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 hover:bg-white hover:border-primary/20 transition-all"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary font-bold text-sm">
                  {s.name.charAt(0)}
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {s.name}
                  </span>
                  <span className="block text-sm text-foreground-light">{s.bundesland}</span>
                </div>
                <svg className="h-5 w-5 shrink-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/standorte"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            Alle Standorte ansehen
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
