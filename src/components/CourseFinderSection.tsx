"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IconBrandOpenai,
  IconBrandMeta,
  IconBriefcase,
  IconDatabase,
  IconChartBar,
  IconShieldLock,
  IconUsersGroup,
} from "@tabler/icons-react";
import { siteConfig } from "@/config/site.config";

const TOPIC_ICONS: Record<string, React.ComponentType<{ size?: number; stroke?: number }>> = {
  "brand-openai": IconBrandOpenai,
  "brand-meta": IconBrandMeta,
  briefcase: IconBriefcase,
  database: IconDatabase,
  "chart-bar": IconChartBar,
  "shield-lock": IconShieldLock,
  "users-group": IconUsersGroup,
};

function TopicIcon({ icon }: { icon: string }) {
  const IconComponent = TOPIC_ICONS[icon];
  if (!IconComponent) return null;
  return (
    <span className="text-primary">
      <IconComponent size={28} stroke={1.5} />
    </span>
  );
}

const SEARCH_EXAMPLES = [
  "Künstliche Intelligenz",
  "Projektmanagement",
  "Sales",
  "Weiterbildung fördern",
  "Bildungsgutschein",
];

function TypewriterPlaceholder({ visible }: { visible: boolean }) {
  const [text, setText] = useState("");
  const [exampleIndex, setExampleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const example = SEARCH_EXAMPLES[exampleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < example.length) {
            setText(example.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (text.length > 0) {
            setText(text.slice(0, -1));
          } else {
            setIsDeleting(false);
            setExampleIndex((i) => (i + 1) % SEARCH_EXAMPLES.length);
          }
        }
      },
      isDeleting ? 40 : text.length === example.length ? 2000 : 80
    );
    return () => clearTimeout(timeout);
  }, [visible, text, exampleIndex, isDeleting]);

  if (!visible) return null;
  return (
    <span className="text-foreground-light">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

/** Slug aus href extrahieren (z. B. /kurse/projektmanagement → projektmanagement) */
function slugFromHref(href: string): string {
  const match = href.match(/\/kurse\/([^/?#]+)/);
  return match ? match[1] : "";
}

export default function CourseFinderSection() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [noMatchMessage, setNoMatchMessage] = useState<string | null>(null);
  const [apiTitles, setApiTitles] = useState<Record<string, { label: string; keyword?: string }>>({});
  const showTypewriter = !focused && search === "";
  const expanded = focused || hovered;

  useEffect(() => {
    fetch("/api/course-finder-titles")
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, { label: string; keyword?: string }>) => setApiTitles(data))
      .catch(() => {});
  }, []);

  /** Suche über API: Vergleicht mit Titeln aus der Datenbank (Franklin), höchster Score gewinnt. */
  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setNoMatchMessage(null);
    const raw = search.trim();
    if (!raw) {
      setNoMatchMessage("Bitte Suchbegriff eingeben (z. B. Projektmanagement, Sales, KI) oder einen Bereich unten wählen.");
      return;
    }

    try {
      const res = await fetch(
        `/api/course-search?q=${encodeURIComponent(raw)}`
      );
      const data = await res.json();
      const match = data?.match;

      if (!match?.slug && !match?.course_id) {
        setNoMatchMessage(
          data?.message ?? "Kein passender Kurs. Bitte Suchbegriff anpassen (z. B. Projektmanagement, Sales, KI) oder einen Bereich unten wählen."
        );
        return;
      }

      if (match.course_id) {
        sessionStorage.setItem("meinnow_course_from_site", "1");
        window.dispatchEvent(
          new CustomEvent("website-log-search", {
            detail: { query: raw, course_id: match.course_id },
          })
        );
        const params = new URLSearchParams({
          course_id: match.course_id,
          utm_source: "meinnow-course",
        });
        if (raw) params.set("q", raw);
        router.push(`/course?${params.toString()}`);
      } else {
        window.dispatchEvent(
          new CustomEvent("website-log-search", {
            detail: { query: raw, slug: match.slug },
          })
        );
        router.push(`/kurse/${match.slug}?q=${encodeURIComponent(raw)}`);
      }
    } catch {
      setNoMatchMessage("Suche vorübergehend nicht möglich. Bitte später erneut versuchen.");
    }
  }

  return (
    <section id="kurs-finder" className="relative py-16 scroll-mt-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">
          Passenden Kurs finden
        </h2>
        <p className="text-foreground-light text-center mb-8">
          Suchen Sie nach Thema oder stöbern Sie in unseren Schwerpunkten.
        </p>

        {/* Suchmaske – bei Suchen → Kursdetailseite (Dummy, später DB) */}
        <form onSubmit={handleSearch}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative mb-10 rounded-2xl transition-all duration-300 ease-out ${
            expanded
              ? "scale-[1.03] shadow-xl shadow-primary/15 ring-2 ring-primary/25"
              : "scale-100 shadow-md shadow-black/5"
          }`}
        >
          <div
            className={`relative rounded-2xl border bg-white overflow-hidden transition-all duration-300 ease-out ${
              expanded ? "border-primary/80" : "border-slate-200"
            }`}
          >
            {/* Such-Icon – wächst mit */}
            <svg
              className={`absolute left-5 top-1/2 -translate-y-1/2 z-10 text-foreground-light transition-all duration-300 ${
                expanded ? "h-6 w-6 left-5" : "h-5 w-5 left-4"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            {/* Typewriter-Overlay wenn leer und nicht fokussiert */}
            <div
              className="absolute left-14 right-28 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-left overflow-hidden transition-all duration-300"
              style={{ height: expanded ? "2.25rem" : "2rem" }}
              aria-hidden
            >
              <span className={`transition-all duration-300 ${expanded ? "text-lg" : "text-base"}`}>
                <TypewriterPlaceholder visible={showTypewriter} />
              </span>
            </div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder=""
              className={`search-input-custom-clear w-full rounded-2xl bg-transparent text-foreground placeholder:text-transparent shadow-none border-0 outline-none transition-all duration-300 ease-out ${
                expanded
                  ? `py-6 pl-14 text-lg ${search.length > 0 ? "pr-36" : "pr-32"}`
                  : `py-4 pl-12 text-base ${search.length > 0 ? "pr-28" : "pr-24"}`
              }`}
              aria-label="Kurse durchsuchen"
            />
            {/* Clear-X – nur bei Text, Größe/Layout angepasst */}
            {search.length > 0 && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-28 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full p-1.5 text-foreground-light hover:text-foreground hover:bg-slate-100 transition-all duration-200"
                aria-label="Suche leeren"
              >
                <svg className={`transition-transform duration-300 ${expanded ? "h-5 w-5" : "h-4 w-4"}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {/* Suchen-Button – wächst mit dem Feld, führt zur Kursdetailseite */}
          <button
            type="submit"
            className={`absolute top-1/2 -translate-y-1/2 z-10 rounded-xl bg-primary font-semibold text-white hover:bg-primary-dark transition-all duration-300 ${
              expanded
                ? "right-3 px-6 py-3 text-base"
                : "right-2 px-5 py-2.5 text-sm"
            }`}
          >
            Suchen
          </button>
        </div>
        {noMatchMessage && (
          <p className="mt-3 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3" role="alert">
            {noMatchMessage}
          </p>
        )}
        </form>

        {/* Themen-Kacheln – wie eine Anfrage: „Weißt du was ich mein?“ mit API-Titel wo passend */}
        <p className="text-sm font-medium text-foreground-light mb-4">Weißt du was ich mein?</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {siteConfig.courseTopics.map((topic) => {
            const slug = slugFromHref(topic.href);
            const suggested = slug ? apiTitles[slug] : undefined;
            const label = suggested?.label ?? topic.label;
            const hrefWithQuery = `${topic.href}${topic.href.includes("?") ? "&" : "?"}q=${encodeURIComponent(label)}`;
            return (
              <Link
                key={`${topic.href}-${topic.label}`}
                href={hrefWithQuery}
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-md shadow-black/5 border border-white/60 hover:border-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <TopicIcon icon={topic.icon} />
                </div>
                <span className="font-semibold text-foreground">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
