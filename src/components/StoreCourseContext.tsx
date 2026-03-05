"use client";

import { useEffect } from "react";
import type { CourseContext } from "@/lib/typeform-url";

const STORAGE_KEY = "course_context";
const FROM_SITE_FLAG = "course_from_site";
const ENTERED_VIA_UTM_KEY = "page_log_entered_via_utm";
const MEINNOW_COURSE_PARAMS_KEY = "meinnow_course_params";
const MEINNOW_VISIT_FLAG = "meinnow_visit";

function hasUtmInUrl(): boolean {
  if (typeof window === "undefined") return false;
  const utm = new URLSearchParams(window.location.search).get("utm_source") ?? "";
  const v = utm.toLowerCase();
  return v === "forward-education" || v === "website";
}

function isMeinnowSource(utmSource?: string): boolean {
  return (utmSource ?? "").toLowerCase().includes("meinnow");
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
 * Wenn utm_source "meinnow" enthält: speichert meinnow_course_params für Typeform (ohne ENTERED_VIA_UTM_KEY).
 */
export default function StoreCourseContext({ course, courseId, utmSource }: StoreCourseContextProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isMeinnowSource(utmSource)) {
      sessionStorage.setItem(MEINNOW_VISIT_FLAG, "1");
      const meinnowParams = {
        meinnow_course_id: courseId,
        meinnow_course_type: course.vertical,
        meinnow_course_duration: String(course.duration),
      };
      sessionStorage.setItem(MEINNOW_COURSE_PARAMS_KEY, JSON.stringify(meinnowParams));
      return;
    }

    const allowedSource = utmSource === "forward-education" || utmSource === "website";
    if (!allowedSource) return;
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
