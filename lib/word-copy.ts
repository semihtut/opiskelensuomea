import type { FaqItem } from "@/components/Faq";
import type { Word } from "./content-types";
import { getPartitives, isNominal } from "./forms";

/**
 * Derive the answer-first TL;DR for a word page from its data (no hand-written
 * prose per word). States meaning + the highest-value form up front.
 */
export function wordTldr(word: Word): string {
  const base = `”${word.fi}” tarkoittaa suomeksi ’${word.en}’ (${word.pos}, taso ${word.level}).`;
  if (isNominal(word)) {
    const { sg } = getPartitives(word);
    if (sg) return `${base} Partitiivi on ${sg}.`;
  }
  if (word.posClass === "verbi") {
    const present = word.kielioppi.muodot.find((m) => m.sija.includes("preesens"));
    if (present) return `${base} Preesensin yksikön 1. persoona on ${present.muoto}.`;
  }
  return base;
}

/**
 * Build 2–4 real learner questions + answers for the word, from its data. Reused
 * by the visible FAQ and the FAQPage JSON-LD so the two never drift apart.
 */
export function wordFaq(word: Word): FaqItem[] {
  const items: FaqItem[] = [];

  items.push({
    question: `Mitä ”${word.fi}” tarkoittaa?`,
    answer: `”${word.fi}” tarkoittaa ’${word.en}’. ${word.selitys}`,
  });

  if (isNominal(word)) {
    const { sg, pl } = getPartitives(word);
    if (sg) {
      items.push({
        question: `Mikä on sanan ”${word.fi}” partitiivi?`,
        answer: pl
          ? `Yksikön partitiivi on ${sg} ja monikon partitiivi ${pl}.`
          : `Partitiivi on ${sg}.`,
      });
    }
  }

  if (word.posClass === "verbi") {
    const present = word.kielioppi.muodot.find((m) => m.sija.includes("preesens"));
    const past = word.kielioppi.muodot.find((m) => m.sija.includes("imperfekti"));
    if (present && past) {
      items.push({
        question: `Miten verbi ”${word.fi}” taipuu?`,
        answer: `Preesens (minä): ${present.muoto}. Imperfekti (minä): ${past.muoto}. Koko taivutus on sivun taulukoissa.`,
      });
    }
  }

  if (word.kielioppi.huom) {
    items.push({
      question: `Mitä erityistä sanassa ”${word.fi}” on?`,
      answer: word.kielioppi.huom,
    });
  }

  return items.slice(0, 4);
}
