"use client";

import { useState, useEffect, useCallback } from "react";
import { buildTypeformUrl, type MeinnowCourseContext } from "@/lib/typeform-url";

const STORAGE_KEY = "meinnow_course_context";

export function useTypeformUrl(): string {
  const [url, setUrl] = useState(() => buildTypeformUrl());

  const updateUrl = useCallback(() => {
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
