import type { Badge } from "@/lib/content-types";

/**
 * Badge catalogue (typed content). Unlock logic lives in lib/badges.ts.
 * `words`/`streak`/`perfect` derive from local progress now; `lukuteksti`/`phase`
 * are event-driven and unlock once those features track completion (see ROADMAP).
 */
export const badges: Badge[] = [
  { id: "sana-1", kind: "words", threshold: 1, title: "Ensimmäinen sana", description: "Opi ensimmäinen sana.", icon: "🌱" },
  { id: "sana-100", kind: "words", threshold: 100, title: "Sata sanaa", description: "Opi 100 sanaa.", icon: "💯" },
  { id: "sana-500", kind: "words", threshold: 500, title: "Viisisataa", description: "Opi 500 sanaa.", icon: "📚" },
  { id: "sana-1000", kind: "words", threshold: 1000, title: "Tuhat sanaa", description: "Opi kaikki ~1000 sanaa.", icon: "🏆" },
  { id: "putki-7", kind: "streak", threshold: 7, title: "Viikon putki", description: "Harjoittele 7 päivää putkeen.", icon: "🔥" },
  { id: "putki-30", kind: "streak", threshold: 30, title: "Kuukauden putki", description: "Harjoittele 30 päivää putkeen.", icon: "🔥" },
  { id: "putki-90", kind: "streak", threshold: 90, title: "Suomi 90 -putki", description: "Harjoittele 90 päivää putkeen.", icon: "⚡" },
  { id: "paivan-tavoite", kind: "perfect", title: "Päivän sankari", description: "Saavuta päivän tavoite (12 sanaa).", icon: "🎯" },
  { id: "viikon-lukija", kind: "lukuteksti", title: "Viikon lukija", description: "Lue viikon lukuteksti loppuun.", icon: "📖" },
  { id: "reaktivointi", kind: "phase", threshold: 1, title: "Reaktivointi suoritettu", description: "Suorita vaihe 1 (viikot 1–4).", icon: "🌟" },
];
