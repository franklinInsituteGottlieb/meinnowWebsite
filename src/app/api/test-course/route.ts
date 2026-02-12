import { NextResponse } from "next/server";
import { getCourseById } from "@/lib/franklin-api";

const TEST_COURSE_ID = "e5ca46a1-b606-42b6-834c-23b2ead2f6d2";

/**
 * GET /api/test-course?id=... – Test-Aufruf der Franklin-Kurs-API.
 * Ohne id wird die Test-ID verwendet.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") ?? TEST_COURSE_ID;

  const data = await getCourseById(id);
  if (data === null) {
    return NextResponse.json(
      { error: "API call failed or returned null" },
      { status: 502 }
    );
  }

  return NextResponse.json(data, { status: 200 });
}
