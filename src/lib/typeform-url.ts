/** Basis-URL des Typeform Kurzbewerbungs-Formulars */
export const TYPEFORM_BASE_URL = "https://form.typeform.com/to/APjxbSz0";

/** Kontext für Kurs (aus sessionStorage) – wird an Typeform übergeben */
export interface CourseContext {
  course_id: string;
  course_type: string;
  course_duration: number;
}

/**
 * Baut die vollständige Typeform-URL mit Query-Parametern.
 * Ohne params: Basis-URL mit typeform-source.
 */
export function buildTypeformUrl(params?: CourseContext): string {
  const base = new URL(TYPEFORM_BASE_URL);
  base.searchParams.set("typeform-source", "forward-education.de");

  if (params) {
    base.searchParams.set("course_id", params.course_id);
    base.searchParams.set("utm_source", "forward-education");
    base.searchParams.set("course_type", params.course_type);
    base.searchParams.set("course_duration", String(params.course_duration));
  }

  return base.toString();
}
