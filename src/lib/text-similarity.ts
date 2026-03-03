/**
 * Text-Ähnlichkeit für Kurs-Suche und Kachel-Zuordnung.
 * Jaccard = Schnittmenge / Vereinigungsmenge; bei Wort-Überlappung zählt auch Teilstring (z. B. „manager“ ↔ „projektmanagement“).
 */

export function toWordSet(s: string): Set<string> {
  const norm = s
    .toLowerCase()
    .replace(/[\s\-–—,;:.!?()]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return new Set(norm.split(" ").filter(Boolean));
}

const MIN_SUBSTRING_LEN = 4;

/** Zwei Wörter matchen, wenn exakt gleich oder eines das andere enthält, oder gemeinsamer Teilstring (min. 4 Zeichen). */
function wordsOverlap(q: string, t: string): boolean {
  if (q === t) return true;
  if (q.length >= t.length && q.includes(t)) return true;
  if (t.length >= q.length && t.includes(q)) return true;
  for (let i = 0; i <= q.length - MIN_SUBSTRING_LEN; i++) {
    const sub = q.slice(i, i + MIN_SUBSTRING_LEN);
    for (let j = 0; j <= t.length - MIN_SUBSTRING_LEN; j++) {
      if (t.slice(j, j + MIN_SUBSTRING_LEN) === sub) return true;
    }
  }
  return false;
}

/**
 * Jaccard-Ähnlichkeit: Schnittmenge / Vereinigungsmenge.
 * Schnittmenge = Anzahl Query-Wörter, die mit mind. einem Titel-Wort überlappen (exakt, Teilstring oder gemeinsamer Stamm).
 * Immer der größte Jaccard gewinnt.
 */
export function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0;
  let intersection = 0;
  for (const w of a) {
    for (const v of b) {
      if (wordsOverlap(w, v)) {
        intersection++;
        break;
      }
    }
  }
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}
