"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SESSION_ID_KEY = "page_log_session_id";
const STORAGE_KEY = "meinnow_course_context";

/** Nur tracken, wenn utm_source meinnow ist (z. B. meinnow oder meinnow-course). */
function hasMeinnowUtm(): boolean {
  if (typeof window === "undefined") return false;
  const utm = new URLSearchParams(window.location.search).get("utm_source") ?? "";
  return utm.toLowerCase().includes("meinnow");
}

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = "s_" + Date.now() + "_" + Math.random().toString(36).slice(2, 11);
    sessionStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
}

function getCourseContext(): {
  course_id: string;
  meinnow_course_type: string;
  meinnow_course_duration: string;
} {
  if (typeof window === "undefined")
    return { course_id: "", meinnow_course_type: "", meinnow_course_duration: "" };
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { course_id: "", meinnow_course_type: "", meinnow_course_duration: "" };
    const ctx = JSON.parse(raw) as {
      course_id?: string;
      meinnow_course_type?: string;
      meinnow_course_duration?: number;
    };
    return {
      course_id: ctx.course_id ?? "",
      meinnow_course_type: String(ctx.meinnow_course_type ?? ""),
      meinnow_course_duration: String(ctx.meinnow_course_duration ?? ""),
    };
  } catch {
    return { course_id: "", meinnow_course_type: "", meinnow_course_duration: "" };
  }
}

function getCourseIdFromUrl(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.get("course_id") ?? "";
}

export default function PageLogTracker() {
  const pathname = usePathname();
  const sentRef = useRef<string>("");

  useEffect(() => {
    if (!pathname) return;
    if (!hasMeinnowUtm()) return;

    const key = pathname + "|" + (typeof window !== "undefined" ? window.location.search : "");
    if (sentRef.current === key) return;
    sentRef.current = key;

    const session_id = getOrCreateSessionId();
    const url_course_id = getCourseIdFromUrl();
    const stored = getCourseContext();
    const course_id = url_course_id || stored.course_id;

    const payload = {
      action: "track",
      brand: "forward",
      ts: new Date().toISOString(),
      session_id,
      course_id,
      meinnow_course_type: stored.meinnow_course_type,
      meinnow_course_duration: stored.meinnow_course_duration,
    };

    fetch("/api/page-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
