"use client";

import { useState, useEffect, useCallback } from "react";
import { buildTypeformUrl, type MeinnowCourseContext } from "@/lib/typeform-url";

const STORAGE_KEY = "meinnow_course_context";
const ENTERED_VIA_MEINNOW_UTM_KEY = "page_log_entered_via_meinnow_utm";

export function useTypeformUrl(): string {
  const [url, setUrl] = useState(() => buildTypeformUrl());

  const updateUrl = useCallback(() => {
    if (typeof window === "undefined") {
      setUrl(buildTypeformUrl());
      return;
    }
    if (sessionStorage.getItem(ENTERED_VIA_MEINNOW_UTM_KEY) !== "1") {
      setUrl(buildTypeformUrl());
      return;
    }
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        const context = JSON.parse(stored) as MeinnowCourseContext;
        setUrl(buildTypeformUrl(context));
      } else {
        setUrl(buildTypeformUrl());
      }
    } catch {
      setUrl(buildTypeformUrl());
    }
  }, []);

  useEffect(() => {
    updateUrl();
    window.addEventListener("meinnow-course-stored", updateUrl);
    return () => window.removeEventListener("meinnow-course-stored", updateUrl);
  }, [updateUrl]);

  return url;
}
