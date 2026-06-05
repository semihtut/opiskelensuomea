import type { Word } from "@/lib/content-types";

// Adverb (manner). Invariant: "yksin" = alone, by oneself. Derived from yksi (one);
// related adverb yksinään and adjective yksinäinen (lonely).
const yksin: Word = {
  fi: "yksin",
  slug: "yksin",
  pos: "adverbi (tavan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "alone, by oneself",
  selitys:
    "Ilman muita; itsekseen. Tavan adverbi, ei taivuteta. Vrt. yksinäinen (lonely, adjektiivi) ja yhdessä (together, vastakohta).",
  kuva: { emoji: "🧍", alt: "yksin – henkilö yksinään" },

  kielioppi: {
    tyyppi: "tavan adverbi; taipumaton (johdettu sanasta yksi)",
    muodot: [
      { sija: "perusmuoto", muoto: "yksin", merkitys: "alone" },
      { sija: "variantti", muoto: "yksinään", merkitys: "(all) by oneself" },
      { sija: "vastakohta", muoto: "yhdessä", merkitys: "together" },
    ],
    huom:
      "Ei taivu. Älä sekoita: 'yksin' (adverbi, alone) vs. 'yksinäinen' (adjektiivi, lonely) vs. 'yksi' (numero, one). 'Asun yksin.' = I live alone.",
  },
  johdokset: [
    {
      fi: "yksinäinen",
      en: "lonely",
      taso: "B1",
      esim: { fi: "Hän tunsi olonsa yksinäiseksi.", en: "He felt lonely." },
    },
    {
      fi: "yksinäisyys",
      en: "loneliness",
      taso: "B2",
      esim: { fi: "Yksinäisyys voi olla raskasta.", en: "Loneliness can be heavy." },
    },
    {
      fi: "yksinään",
      en: "all by oneself",
      taso: "B1",
      esim: { fi: "Lapsi leikki yksinään.", en: "The child played all by itself." },
    },
  ],
  synonyymit: [
    { fi: "itsekseen", en: "by oneself" },
    { fi: "ilman seuraa", en: "without company" },
  ],
  esimerkit: {
    A2: { fi: "Asun yksin pienessä asunnossa.", en: "I live alone in a small flat." },
    B1: { fi: "En halua matkustaa yksin.", en: "I don't want to travel alone." },
    B2: {
      fi: "Vaikka hän oli yksin, hän ei tuntenut itseään yksinäiseksi.",
      en: "Although he was alone, he didn't feel lonely.",
    },
  },
  updatedAt: "2026-06-05",
};

export default yksin;
