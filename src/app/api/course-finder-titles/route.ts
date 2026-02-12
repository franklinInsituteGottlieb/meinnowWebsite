import { NextResponse } from "next/server";
import { getCourseById } from "@/lib/franklin-api";
import { siteConfig } from "@/config/site.config";

function getCourseApiIds(course: { apiCourseId?: string; apiCourseIds?: string[] }): string[] {
  const ids: string[] = [];
  if (course.apiCourseId) ids.push(course.apiCourseId);
  if (course.apiCourseIds?.length) ids.push(...course.apiCourseIds);
  return ids;
}

/**
 * GET /api/course-finder-titles
 * Liefert für jeden Kurs mit apiCourseId/apiCourseIds den von der Franklin-API
 * vorgeschlagenen Titel (erster Treffer: title_readability_optimized).
 */
export async function GET() {
  const titles: Record<string, { label: string; keyword?: string }> = {};

  for (const course of siteConfig.courses) {
    const ids = getCourseApiIds(course);
    for (const id of ids) {
      const data = await getCourseById(id);
      if (data?.success && data.course) {
        titles[course.slug] = {
          label: data.course.title_readability_optimized,
          keyword: data.course.title_keyword_optimized,
        };
        break;
      }
    }
  }

  return NextResponse.json(titles, { status: 200 });
}
