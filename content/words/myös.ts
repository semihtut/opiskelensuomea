import type { Word } from "@/lib/content-types";

// Focus particle "myös" (also, too). Invariant. In negative clauses use "ei myöskään".
const myos: Word = {
  fi: "myös",
  slug: "myös",
  pos: "adverbi (fokuspartikkeli)",
  posClass: "adverbi",
  level: "A1",
  en: "also, too, as well",
  selitys:
    "Lisää: 'myös minä' = me too. Fokuspartikkeli, ei taivuteta. Kielteisessä lauseessa käytä 'ei myöskään' (not … either). Synonyymi -kin-liite.",
  kuva: { emoji: "➕", alt: "myös – myös tämä, lisäksi" },

  kielioppi: {
    tyyppi: "fokuspartikkeli (lisäys); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "myös", merkitys: "also, too" },
      { sija: "kielteinen", muoto: "ei myöskään", merkitys: "not … either" },
      { sija: "liite", muoto: "-kin", merkitys: "too (suffix: minäkin)" },
    ],
    huom:
      "Myönteinen: 'Tulen myös.' / 'Minäkin tulen.' Kielteinen: 'En tule myöskään.' Sijoitetaan yleensä korostetun sanan eteen: 'Myös hän tuli.'",
  },
  johdokset: [
    {
      fi: "myöskään",
      en: "either (in negatives)",
      taso: "B1",
      esim: { fi: "En minäkään tiedä, enkä hän myöskään.", en: "I don't know either, and neither does he." },
    },
    {
      fi: "-kin",
      en: "too, also (clitic)",
      taso: "A2",
      esim: { fi: "Sinäkin olet oikeassa.", en: "You too are right." },
    },
    {
      fi: "lisäksi",
      en: "in addition, moreover",
      taso: "B1",
      esim: { fi: "Lisäksi haluan kiittää teitä.", en: "In addition, I want to thank you." },
    },
  ],
  synonyymit: [
    { fi: "-kin", en: "also (suffix)" },
    { fi: "samoin", en: "likewise" },
  ],
  esimerkit: {
    A2: { fi: "Haluan myös kahvia.", en: "I want coffee too." },
    B1: { fi: "Hän puhuu myös ranskaa.", en: "She also speaks French." },
    B2: {
      fi: "Matka oli rankka, mutta se opetti minulle myös paljon itsestäni.",
      en: "The trip was tough, but it also taught me a lot about myself.",
    },
  },
  updatedAt: "2026-06-05",
};

export default myos;
