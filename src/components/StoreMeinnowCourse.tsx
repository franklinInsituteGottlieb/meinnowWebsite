"use client";

import { useEffect } from "react";
import type { MeinnowCourseContext } from "@/lib/typeform-url";

const STORAGE_KEY = "meinnow_course_context";
const FROM_SITE_FLAG = "meinnow_course_from_site";
const ENTERED_VIA_MEINNOW_UTM_KEY = "page_log_entered_via_meinnow_utm";

function hasMeinnowUtmInUrl(): boolean {
  if (typeof window === "undefined") return false;
  const utm = new URLSearchParams(window.location.search).get("utm_source") ?? "";
  return utm.toLowerCase().includes("meinnow");
}

interface StoreMeinnowCourseProps {
  course: { uuid: string; vertical: string; duration: number };
  courseId: string;
  utmSource?: string;
}

/**
 * Speichert Kurs-Kontext für Typeform, wenn utm_source=meinnow (oder meinnow-course):
 * – nach Suche (FROM_SITE_FLAG gesetzt) oder
 * – direkter Aufruf der Kurs-URL mit utm_source=meinnow.
 * Setzt ENTERED_VIA_MEINNOW_UTM_KEY, damit Typeform die Infos erhält.
 */
export default function StoreMeinnowCourse({ course, courseId, utmSource }: StoreMeinnowCourseProps) {
  useEffect(() => {
    if (utmSource !== "meinnow-course") return;
    if (typeof window === "undefined") return;
    const fromSearch = sessionStorage.getItem(FROM_SITE_FLAG) === "1";
    const directLinkWithMeinnow = hasMeinnowUtmInUrl();
    if (!fromSearch && !directLinkWithMeinnow) return;

    sessionStorage.removeItem(FROM_SITE_FLAG);
    sessionStorage.setItem(ENTERED_VIA_MEINNOW_UTM_KEY, "1");

    const context: MeinnowCourseContext = {
      course_id: courseId,
      meinnow_course_id: course.uuid,
      meinnow_course_type: course.vertical,
      meinnow_course_duration: course.duration,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(context));
    window.dispatchEvent(new CustomEvent("meinnow-course-stored"));
  }, [course, courseId, utmSource]);

  return null;
}
