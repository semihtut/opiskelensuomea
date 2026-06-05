import type { Word } from "@/lib/content-types";

// Frequency adverb "usein" (often). Comparative useammin, superlative useimmin.
const usein: Word = {
  fi: "usein",
  slug: "usein",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "often",
  selitys:
    "Monta kertaa, tiheään. Toistuvuuden adverbi. Vertailu: usein – useammin – useimmin. Vastakohta harvoin.",
  kuva: { emoji: "🔁", alt: "usein – monta kertaa, tiheään" },

  kielioppi: {
    tyyppi: "toistuvuuden adverbi; vertailu useammin / useimmin",
    muodot: [
      { sija: "perusmuoto", muoto: "usein", merkitys: "often" },
      { sija: "komparatiivi", muoto: "useammin", merkitys: "more often" },
      { sija: "superlatiivi", muoto: "useimmin", merkitys: "most often" },
    ],
    huom:
      "Toistuvuusasteikko: aina – usein – joskus – harvoin. Pohjana 'usea' (several). 'Useimmiten' = most of the time. Vastakohta harvoin.",
  },
  johdokset: [
    {
      fi: "useammin",
      en: "more often",
      taso: "A2",
      esim: { fi: "Soita useammin!", en: "Call more often!" },
    },
    {
      fi: "useimmiten",
      en: "most of the time, usually",
      taso: "B1",
      esim: { fi: "Useimmiten kävelen töihin.", en: "Most of the time I walk to work." },
    },
    {
      fi: "usea",
      en: "several, many",
      taso: "B1",
      esim: { fi: "Usea ihminen oli paikalla.", en: "Several people were present." },
    },
  ],
  synonyymit: [
    { fi: "tiheään", en: "frequently" },
    { fi: "monesti", en: "many times" },
  ],
  esimerkit: {
    A2: { fi: "Käyn usein kirjastossa.", en: "I often go to the library." },
    B1: { fi: "Sataa täällä useammin kuin etelässä.", en: "It rains here more often than in the south." },
    B2: {
      fi: "Hän matkustaa työnsä vuoksi niin usein, ettei ehdi juuri olla kotona.",
      en: "He travels so often for work that he hardly has time to be at home.",
    },
  },
  updatedAt: "2026-06-05",
};

export default usein;
