/** Basis-URL des Typeform Kurzbewerbungs-Formulars */
export const TYPEFORM_BASE_URL = "https://form.typeform.com/to/APjxbSz0";

/** Kontext für Kurs (aus sessionStorage) – wird an Typeform übergeben */
export interface CourseContext {
  course_id: string;
  course_type: string;
  course_duration: number;
}

/** UTM-Parameter, die an Typeform durchgereicht werden (z. B. utm_source=meinnow). */
export type TypeformUtmParams = Record<string, string>;

/**
 * Baut die vollständige Typeform-URL mit Query-Parametern.
 * Ohne params: Basis-URL mit typeform-source.
 * utmOverride: wenn gesetzt (z. B. von aktueller Page-URL), werden diese UTM-Parameter angehängt.
 */
export function buildTypeformUrl(
  params?: CourseContext,
  utmOverride?: TypeformUtmParams
): string {
  const base = new URL(TYPEFORM_BASE_URL);
  base.searchParams.set("typeform-source", "forward-education.de");

  if (params) {
    base.searchParams.set("course_id", params.course_id);
    base.searchParams.set("utm_source", "forward-education");
    base.searchParams.set("course_type", params.course_type);
    base.searchParams.set("course_duration", String(params.course_duration));
  }

  if (utmOverride && Object.keys(utmOverride).length > 0) {
    for (const [key, value] of Object.entries(utmOverride)) {
      if (value) base.searchParams.set(key, value);
    }
  }

  return base.toString();
}
