import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem taso-.
// Genitive tason, partitive tasoa, partitive pl tasoja.
const taso: Word = {
  fi: "taso",
  slug: "taso",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "level; surface, plane",
  selitys:
    "1) Korkeus tai aste asteikolla: 'kielitaito hyvällä tasolla'. 2) Tasainen pinta. Tyyppi 1/valo, ei astevaihtelua. Sanasta tasa/tasainen. Vrt. tasainen, laatu, aste.",
  kuva: { alt: "taso – korkeus tai aste asteikolla" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo taso-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tason", merkitys: "of the level" },
      { sija: "partitiivi (yks.)", muoto: "tasoa", merkitys: "level (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tasoja", merkitys: "levels (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua. 'Tasolla' = at the level of. Vaativuustaso, elintaso. Vrt. tasainen = even/level, laatu, aste = degree.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "taso" },
          { label: "Partitiivi", form: "tasoa" },
          { label: "Genetiivi", form: "tason" },
          { label: "Inessiivi", form: "tasossa" },
          { label: "Elatiivi", form: "tasosta" },
          { label: "Illatiivi", form: "tasoon" },
          { label: "Adessiivi", form: "tasolla" },
          { label: "Ablatiivi", form: "tasolta" },
          { label: "Allatiivi", form: "tasolle" },
          { label: "Essiivi", form: "tasona" },
          { label: "Translatiivi", form: "tasoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tasot" },
          { label: "Partitiivi", form: "tasoja" },
          { label: "Genetiivi", form: "tasojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tasainen",
      en: "even, flat, steady",
      taso: "B1",
      esim: { fi: "Tie on tasainen.", en: "The road is even." },
    },
    {
      fi: "elintaso",
      en: "standard of living",
      taso: "B2",
      esim: { fi: "Maan elintaso on korkea.", en: "The country's standard of living is high." },
    },
  ],
  synonyymit: [
    { fi: "aste", en: "degree, level" },
  ],
  esimerkit: {
    A2: { fi: "Vesi on lattian tasolla.", en: "The water is at floor level." },
    B1: { fi: "Suomen kielen taitoni on keskitasoa.", en: "My Finnish skills are at an intermediate level." },
    B2: {
      fi: "Palvelun taso parani huomattavasti uudistuksen jälkeen.",
      en: "The level of service improved considerably after the reform.",
    },
  },
  updatedAt: "2026-06-07",
};

export default taso;
