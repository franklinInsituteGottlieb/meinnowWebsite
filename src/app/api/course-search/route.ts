import { NextResponse } from "next/server";
import { getCourseById } from "@/lib/franklin-api";
import { siteConfig } from "@/config/site.config";

/** Alle Franklin-Kurs-IDs für einen Kurs (apiCourseId + apiCourseIds) */
function getCourseApiIds(course: { apiCourseId?: string; apiCourseIds?: string[] }): string[] {
  const ids: string[] = [];
  if (course.apiCourseId) ids.push(course.apiCourseId);
  if (course.apiCourseIds?.length) ids.push(...course.apiCourseIds);
  return ids;
}

/**
 * Ein Kandidat = ein Franklin-Kurs (course_id) mit suchbarem Text.
 * So wird pro API-Kurs gescored (Schnittmenge mit Suchbegriff), bester Treffer = genau dieser Kurs.
 */
type Candidate = {
  courseId: string;
  slug: string;
  searchable: string;
  apiTitles: string[];
};

async function getCandidates(): Promise<Candidate[]> {
  const candidates: Candidate[] = [];

  for (const course of siteConfig.courses) {
    const ids = getCourseApiIds(course);
    const configParts = [
      course.title,
      ...(course.searchKeywords ?? []),
      course.slug.replace(/-/g, " "),
    ].filter(Boolean);

    for (const id of ids) {
      const data = await getCourseById(id);
      if (!data?.success || !data.course) continue;
      const apiTitles = [
        data.course.title_readability_optimized,
        data.course.title_keyword_optimized,
      ];
      const searchable = [...apiTitles, ...configParts].join(" ").toLowerCase();
      candidates.push({
        courseId: id,
        slug: course.slug,
        searchable,
        apiTitles,
      });
    }

    if (ids.length === 0) {
      const searchable = configParts.join(" ").toLowerCase();
      candidates.push({
        courseId: "",
        slug: course.slug,
        searchable,
        apiTitles: [],
      });
    }
  }

  return candidates;
}

/** Normalisiert für exakten Abgleich */
function normalizeForMatch(s: string): string {
  return s
    .toLowerCase()
    .replace(/[\s\-–—,;:.!?()]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * GET /api/course-search?q=...
 * Vergleicht die Suchanfrage mit den Titeln aus der Franklin-API (Schnittmenge).
 * Bester Treffer = der konkrete Franklin-Kurs (course_id) → wird wie /course?course_id=... geladen.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();
  if (!q) {
    return NextResponse.json(
      { error: "Parameter q fehlt" },
      { status: 400 }
    );
  }

  const queryWords = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (queryWords.length === 0) {
    return NextResponse.json(
      { error: "Kein gültiger Suchbegriff" },
      { status: 400 }
    );
  }

  const candidates = await getCandidates();
  const normalizedQuery = normalizeForMatch(q);

  const scored = candidates.map(({ courseId, slug, searchable, apiTitles }) => {
    let score = queryWords.filter((w) => searchable.includes(w)).length;
    const searchableNorm = normalizeForMatch(searchable);
    if (normalizedQuery.length >= 3 && searchableNorm.includes(normalizedQuery)) {
      score += 1000;
    }
    for (const apiTitle of apiTitles) {
      if (normalizeForMatch(apiTitle).includes(normalizedQuery)) {
        score += 500;
        break;
      }
    }
    return { courseId, slug, score };
  });

  const best = scored.reduce(
    (acc, cur) => (cur.score > acc.score ? cur : acc),
    scored[0] ?? { courseId: "", slug: "", score: -1 }
  );

  if (best.score === 0) {
    return NextResponse.json(
      { match: null, message: "Kein passender Kurs gefunden." },
      { status: 200 }
    );
  }

  const match: { course_id?: string; slug: string; score: number } = {
    slug: best.slug,
    score: best.score,
  };
  if (best.courseId) match.course_id = best.courseId;

  return NextResponse.json({ match }, { status: 200 });
}
