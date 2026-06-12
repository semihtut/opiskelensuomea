import type { Word } from "@/lib/content-types";

// Frequency adverb "aina" (always). Invariant. Opposite ei koskaan (never).
const aina: Word = {
  fi: "aina",
  slug: "aina",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "always",
  selitys:
    "Joka kerta, kaiken aikaa. Ajan/toistuvuuden adverbi, ei taivuteta. Vastakohta 'ei koskaan'. 'Aina kun' = whenever.",
  kuva: { alt: "aina – joka kerta, kaiken aikaa" },

  kielioppi: {
    tyyppi: "toistuvuuden adverbi; taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "aina", merkitys: "always" },
      { sija: "yhdistelmä", muoto: "aina kun", merkitys: "whenever" },
      { sija: "vastakohta", muoto: "ei koskaan", merkitys: "never" },
    ],
    huom:
      "Toistuvuusasteikko: aina – usein – joskus – harvoin – ei koskaan. 'Aina vain' = more and more / still. 'Aina silloin tällöin' = every now and then.",
  },
  johdokset: [
    {
      fi: "ainainen",
      en: "constant, perpetual",
      taso: "B2",
      esim: { fi: "Ainainen kiire väsyttää.", en: "The constant rush is tiring." },
    },
    {
      fi: "ainiaan",
      en: "forever (literary)",
      taso: "B2",
      esim: { fi: "Muistan sen ainiaan.", en: "I will remember it forever." },
    },
    {
      fi: "aina vain",
      en: "more and more; still",
      taso: "B1",
      esim: { fi: "Sää muuttuu aina vain kylmemmäksi.", en: "The weather keeps getting colder and colder." },
    },
  ],
  synonyymit: [
    { fi: "alati", en: "constantly (literary)" },
    { fi: "jatkuvasti", en: "continuously" },
  ],
  esimerkit: {
    A2: { fi: "Juon aina kahvia aamulla.", en: "I always drink coffee in the morning." },
    B1: { fi: "Hän on aina valmis auttamaan.", en: "She is always ready to help." },
    B2: {
      fi: "Aina kun matkustan junalla, otan mukaan kirjan ja kupin kahvia.",
      en: "Whenever I travel by train, I bring along a book and a cup of coffee.",
    },
  },
  updatedAt: "2026-06-05",
};

export default aina;
