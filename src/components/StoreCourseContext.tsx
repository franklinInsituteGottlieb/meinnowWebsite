"use client";

import { useEffect } from "react";
import type { CourseContext } from "@/lib/typeform-url";

const STORAGE_KEY = "course_context";
const FROM_SITE_FLAG = "course_from_site";
const ENTERED_VIA_UTM_KEY = "page_log_entered_via_utm";

function hasUtmInUrl(): boolean {
  if (typeof window === "undefined") return false;
  const utm = new URLSearchParams(window.location.search).get("utm_source") ?? "";
  const v = utm.toLowerCase();
  return v === "forward-education" || v === "website";
}

interface StoreCourseContextProps {
  course: { uuid: string; vertical: string; duration: number };
  courseId: string;
  utmSource?: string;
}

/**
 * Speichert Kurs-Kontext für Typeform, wenn utm_source=forward-education oder website:
 * – nach Suche (FROM_SITE_FLAG gesetzt) oder
 * – direkter Aufruf der Kurs-URL mit passendem UTM.
 * Setzt ENTERED_VIA_UTM_KEY, damit Typeform die Infos erhält.
 */
export default function StoreCourseContext({ course, courseId, utmSource }: StoreCourseContextProps) {
  useEffect(() => {
    const allowedSource = utmSource === "forward-education" || utmSource === "website";
    if (!allowedSource) return;
    if (typeof window === "undefined") return;
    const fromSearch = sessionStorage.getItem(FROM_SITE_FLAG) === "1";
    const directLinkWithUtm = hasUtmInUrl();
    if (!fromSearch && !directLinkWithUtm) return;

    sessionStorage.removeItem(FROM_SITE_FLAG);
    sessionStorage.setItem(ENTERED_VIA_UTM_KEY, "1");

    const context: CourseContext = {
      course_id: courseId,
      course_type: course.vertical,
      course_duration: course.duration,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(context));
    window.dispatchEvent(new CustomEvent("course-context-stored"));
  }, [course, courseId, utmSource]);

  return null;
}
