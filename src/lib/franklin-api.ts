/**
 * Franklin Institute – externe Kurs-API
 * Key nur serverseitig verwenden (API Route / Server Components).
 */

const BASE_URL = "https://app.franklin-institute.de/api-external/course-listings/getCourse";
const HEADER_NAME = "x-api-key";

function getApiKey(): string {
  const encoded = process.env.FRANKLIN_API_KEY ?? "SkpTSEZFc2RmYmRqp1pSKEZaL0hKaUZkZmFzZGYzcQ==";
  // Key als Latin1 decodieren (HTTP-Header erlauben nur Byte-Werte 0–255)
  return Buffer.from(encoded, "base64").toString("latin1");
}

/** Modul aus der Franklin-API */
export interface FranklinModule {
  module_title: string;
  module_content: string[];
}

/** Kurs aus der Franklin-API (getCourse) */
export interface FranklinCourse {
  uuid: string;
  vertical: string;
  duration: number;
  title_keyword_optimized: string;
  title_readability_optimized: string;
  modules: FranklinModule[];
}

export interface FranklinCourseResponse {
  success: boolean;
  course?: FranklinCourse;
  error?: string;
}

/**
 * Holt einen Kurs anhand der ID von der Franklin-API.
 * Nur serverseitig aufrufen.
 */
export async function getCourseById(courseId: string): Promise<FranklinCourseResponse | null> {
  if (!courseId) return null;

  try {
    const apiKey = getApiKey();
    const url = `${BASE_URL}?id=${encodeURIComponent(courseId)}`;
    const response = await fetch(url, {
      headers: { [HEADER_NAME]: apiKey },
      next: { revalidate: 60 },
    });
    const data = (await response.json()) as FranklinCourseResponse;
    return data;
  } catch (error) {
    console.error("[Franklin API] Error:", error);
    return null;
  }
}
