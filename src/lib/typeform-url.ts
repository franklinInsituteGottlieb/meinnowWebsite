/** Basis-URL des Typeform Kurzbewerbungs-Formulars */
export const TYPEFORM_BASE_URL = "https://form.typeform.com/to/APjxbSz0";

/** Kontext für Meinnow-Kurse (aus sessionStorage) */
export interface MeinnowCourseContext {
  course_id: string;
  meinnow_course_id: string;
  meinnow_course_type: string;
  meinnow_course_duration: number;
}

/**
 * Baut die vollständige Typeform-URL mit Query-Parametern.
 * Ohne params: Basis-URL mit typeform-source.
 */
export function buildTypeformUrl(params?: MeinnowCourseContext): string {
  const base = new URL(TYPEFORM_BASE_URL);
  base.searchParams.set("typeform-source", "forward-education.de");

  if (params) {
    base.searchParams.set("course_id", params.course_id);
    base.searchParams.set("utm_source", "meinnow-course");
    base.searchParams.set("meinnow_course_id", params.meinnow_course_id);
    base.searchParams.set("meinnow_course_type", String(params.meinnow_course_type));
    base.searchParams.set("meinnow_course_duration", String(params.meinnow_course_duration));
  }

  return base.toString();
}
