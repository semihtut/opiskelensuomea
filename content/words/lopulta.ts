import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: ajan adverbi, taipumaton (loppu-sanan ablatiivista vakiintunut).
const lopulta: Word = {
  fi: "lopulta",
  slug: "lopulta",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "in the end, eventually, finally",
  selitys:
    "Kaiken jälkeen, viimein: 'lopulta hän suostui'. Taipumaton ajan adverbi (vakiintunut sanan loppu ablatiivimuodosta). Vrt. lopuksi (lastly), vihdoin (at last), lopultakin.",
  kuva: { emoji: "🔚", alt: "lopulta – kaiken jälkeen, viimein" },

  kielioppi: {
    tyyppi: "adverbi (ajan adverbi); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "lopulta", merkitys: "in the end" },
      { sija: "vrt.", muoto: "lopuksi", merkitys: "lastly, finally" },
      { sija: "vrt.", muoto: "vihdoin", merkitys: "at last" },
    ],
    huom:
      "Taipumaton adverbi. Ilmaisee, että jokin tapahtui pitkän prosessin tai odotuksen jälkeen. 'Lopulta kaikki järjestyi' = in the end everything worked out. Vrt. lopuksi = lastly (luettelon lopuksi).",
  },
  johdokset: [
    {
      fi: "lopultakin",
      en: "at long last",
      taso: "B2",
      esim: { fi: "Lopultakin sade lakkasi.", en: "At long last the rain stopped." },
    },
    {
      fi: "loppu",
      en: "end",
      taso: "A2",
      esim: { fi: "Tarinan loppu oli onnellinen.", en: "The end of the story was happy." },
    },
  ],
  synonyymit: [
    { fi: "viimein", en: "finally, at last" },
    { fi: "lopulta lopulta", en: "(emphatic) eventually" },
  ],
  esimerkit: {
    A2: { fi: "Lopulta löysin avaimet.", en: "In the end I found the keys." },
    B1: { fi: "Lopulta hän myönsi olleensa väärässä.", en: "In the end he admitted he had been wrong." },
    B2: {
      fi: "Pitkän pohdinnan jälkeen päädyimme lopulta yksinkertaisimpaan ratkaisuun.",
      en: "After long deliberation we finally settled on the simplest solution.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lopulta;
