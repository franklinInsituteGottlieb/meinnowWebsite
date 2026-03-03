import { NextResponse } from "next/server";
import { getCourseById } from "@/lib/franklin-api";
import { jaccard, toWordSet } from "@/lib/text-similarity";
import { siteConfig } from "@/config/site.config";

/** Alle Franklin-Kurs-IDs für einen Kurs (apiCourseId + apiCourseIds) */
function getCourseApiIds(course: { apiCourseId?: string; apiCourseIds?: string[] }): string[] {
  const ids: string[] = [];
  if (course.apiCourseId) ids.push(course.apiCourseId);
  if (course.apiCourseIds?.length) ids.push(...course.apiCourseIds);
  return ids;
}

/**
 * Kandidaten = Kacheln (Config-Kurse). Jeder Input wird mit jeder Kachel gematcht (Titel + searchKeywords + Slug).
 * Bester Treffer = höchster Jaccard-Score. Bei allen 0 → „Kein passender Kurs“.
 */
type TileCandidate = {
  slug: string;
  searchableText: string;
};

function getTileCandidates(): TileCandidate[] {
  return siteConfig.courses.map((course) => ({
    slug: course.slug,
    searchableText: [
      course.title,
      ...(course.searchKeywords ?? []),
      course.slug.replace(/-/g, " "),
    ]
      .filter(Boolean)
      .join(" "),
  }));
}

/**
 * GET /api/course-search?q=...
 * Jeder Input wird mit jeder Kachel gematcht (Titel + searchKeywords + Slug). Bester Treffer wird angezeigt.
 * Sind alle Match-Scores 0 → „Kein passender Kurs gefunden“.
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

  const querySet = toWordSet(q);
  if (querySet.size === 0) {
    return NextResponse.json(
      { error: "Kein gültiger Suchbegriff" },
      { status: 400 }
    );
  }

  const tiles = getTileCandidates();
  const scored = tiles.map(({ slug, searchableText }) => ({
    slug,
    value: jaccard(querySet, toWordSet(searchableText)),
  }));

  const best = scored.reduce(
    (acc, cur) => (cur.value > acc.value ? cur : acc),
    scored[0]
  );

  if (best.value === 0) {
    return NextResponse.json(
      {
        match: null,
        message:
          "Kein passender Kurs gefunden. Bitte Suchbegriff anpassen oder einen Bereich unten wählen.",
      },
      { status: 200 }
    );
  }

  const course = siteConfig.courses.find((c) => c.slug === best.slug);
  const ids = course ? getCourseApiIds(course) : [];
  let course_id: string | undefined;
  if (ids.length > 0) {
    let bestApiScore = -1;
    for (const id of ids) {
      const data = await getCourseById(id);
      if (!data?.success || !data.course) continue;
      const apiTitle = [
        data.course.title_readability_optimized,
        data.course.title_keyword_optimized,
      ]
        .filter(Boolean)
        .join(" ");
      const s = jaccard(querySet, toWordSet(apiTitle));
      if (s > bestApiScore) {
        bestApiScore = s;
        course_id = id;
      }
    }
  }

  const match: { course_id?: string; slug: string; score: number; title: string } = {
    slug: best.slug,
    score: best.value,
    title: course?.title ?? best.slug,
  };
  if (course_id) match.course_id = course_id;

  return NextResponse.json({ match }, { status: 200 });
}
