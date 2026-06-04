import type { Word } from "./content-types";

/**
 * Auto-extract the singular and plural partitive from a nominal's full tables.
 * Singular comes from the "Yksikkö" section, plural from the "Monikko" section.
 * Returns undefined fields when not present (e.g. verbs, invariants).
 */
export function getPartitives(word: Word): { sg?: string; pl?: string } {
  const sections = word.taivutus?.sections ?? [];
  const findPartitive = (titleNeedle: string): string | undefined => {
    const section = sections.find((s) => s.title.includes(titleNeedle));
    const row = section?.rows.find((r) => r.label.startsWith("Partitiivi"));
    return row?.form;
  };
  return { sg: findPartitive("Yksikkö"), pl: findPartitive("Monikko") };
}

/** Whether this word is a nominal (has declension worth a partitive box). */
export function isNominal(word: Word): boolean {
  return word.posClass === "substantiivi" || word.posClass === "adjektiivi";
}
