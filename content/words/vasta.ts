import type { Word } from "@/lib/content-types";

// Time adverb "vasta" (only, not until; just now). Invariant. Contrasts with jo.
const vasta: Word = {
  fi: "vasta",
  slug: "vasta",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "only, not until; just (now)",
  selitys:
    "Myöhemmin kuin odotettiin: 'vasta huomenna' = not until tomorrow. Myös äskeisyys: 'tulin vasta' = I came only just now. Vastakohta jo.",
  kuva: { emoji: "⏳", alt: "vasta – vasta myöhemmin, ei vielä" },

  kielioppi: {
    tyyppi: "ajan adverbi; taipumaton",
    muodot: [
      { sija: "merkitys 1", muoto: "vasta (huomenna)", merkitys: "not until (tomorrow)" },
      { sija: "merkitys 2", muoto: "vasta (äsken)", merkitys: "only just (now)" },
      { sija: "vastakohta", muoto: "jo", merkitys: "already" },
    ],
    huom:
      "'Vasta' korostaa myöhäisyyttä, 'jo' aikaisuutta: 'Bussi tulee vasta kello viisi.' vs. 'Bussi tuli jo.' Älä sekoita sanaan 'vastaan' (against) tai 'vastata' (to answer).",
  },
  johdokset: [
    {
      fi: "vastikään",
      en: "recently, just now",
      taso: "B2",
      esim: { fi: "Hän muutti tänne vastikään.", en: "She moved here recently." },
    },
    {
      fi: "vasta-alkaja",
      en: "beginner, novice",
      taso: "B1",
      esim: { fi: "Olen vasta-alkaja suomen kielessä.", en: "I'm a beginner in Finnish." },
    },
    {
      fi: "vastasyntynyt",
      en: "newborn",
      taso: "B2",
      esim: { fi: "Vastasyntynyt nukkuu paljon.", en: "A newborn sleeps a lot." },
    },
  ],
  synonyymit: [
    { fi: "vastikään", en: "just recently" },
    { fi: "ei ennen kuin", en: "not before, not until" },
  ],
  esimerkit: {
    A2: { fi: "Kauppa avataan vasta kello kymmenen.", en: "The shop doesn't open until ten o'clock." },
    B1: { fi: "Sain tietää siitä vasta eilen.", en: "I only found out about it yesterday." },
    B2: {
      fi: "Luulin olevani myöhässä, mutta saavuinkin vasta ensimmäisten joukossa.",
      en: "I thought I was late, but I actually arrived only among the first.",
    },
  },
  updatedAt: "2026-06-05",
};

export default vasta;
