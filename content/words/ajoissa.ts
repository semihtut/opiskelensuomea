import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: ajan adverbi (aika-sanan monikon inessiivistä vakiintunut), taipumaton.
const ajoissa: Word = {
  fi: "ajoissa",
  slug: "ajoissa",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "in time, on time, in good time",
  selitys:
    "Riittävän aikaisin, ennen takarajaa: 'tulin ajoissa asemalle'. Vakiintunut adverbi sanan aika monikon inessiivistä. Vrt. ajallaan (on schedule), ajoittain (occasionally), myöhässä (late).",
  kuva: { alt: "ajoissa – riittävän aikaisin, ennen takarajaa" },

  kielioppi: {
    tyyppi: "adverbi (ajan adverbi); vakiintunut sanan aika monikon inessiivistä",
    muodot: [
      { sija: "perusmuoto", muoto: "ajoissa", merkitys: "in time" },
      { sija: "vrt.", muoto: "ajallaan", merkitys: "on time, on schedule" },
      { sija: "vastakohta", muoto: "myöhässä", merkitys: "late" },
    ],
    huom:
      "Taipumaton adverbi. Tarkoittaa 'riittävän aikaisin', usein hieman ennen määräaikaa. Vastakohta myöhässä. Vrt. ajallaan = exactly on time, ajoittain = at times.",
  },
  johdokset: [
    {
      fi: "ajallaan",
      en: "on time, on schedule",
      taso: "B2",
      esim: { fi: "Juna saapui ajallaan.", en: "The train arrived on time." },
    },
    {
      fi: "ajoittain",
      en: "at times, occasionally",
      taso: "B2",
      esim: { fi: "Sää on ajoittain sateinen.", en: "The weather is occasionally rainy." },
    },
  ],
  synonyymit: [
    { fi: "ajallaan", en: "on time" },
    { fi: "ajoissa", en: "early enough" },
  ],
  esimerkit: {
    A2: { fi: "Muista tulla ajoissa.", en: "Remember to come in time." },
    B1: { fi: "Lähdimme ajoissa, joten ehdimme hyvin.", en: "We left in good time, so we made it easily." },
    B2: {
      fi: "Jos varaat liput ajoissa, säästät usein huomattavasti rahaa.",
      en: "If you book the tickets in good time, you often save considerably.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ajoissa;
