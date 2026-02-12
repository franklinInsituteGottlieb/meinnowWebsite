"use client";

import { useEffect } from "react";
import type { MeinnowCourseContext } from "@/lib/typeform-url";

const STORAGE_KEY = "meinnow_course_context";

interface StoreMeinnowCourseProps {
  course: { uuid: string; vertical: string; duration: number };
  courseId: string;
  utmSource?: string;
}

export default function StoreMeinnowCourse({ course, courseId, utmSource }: StoreMeinnowCourseProps) {
  useEffect(() => {
    if (utmSource !== "meinnow-course") return;

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
