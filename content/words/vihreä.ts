import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 15/korkea, no gradation. Genitive vihreän,
// partitive vihreää, illative vihreään, partitive pl vihreitä. Comp vihreämpi.
const vihrea: Word = {
  fi: "vihreä",
  slug: "vihreä",
  pos: "adjektiivi (tyyppi 15/korkea)",
  posClass: "adjektiivi",
  level: "A1",
  en: "green",
  selitys:
    "Ruohon ja lehtien väri. Tyyppi 15, ei astevaihtelua. Monikon partitiivi vihreitä. Myös poliittinen merkitys (vihreät).",
  kuva: { alt: "vihreä – vihreä väri" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 15/korkea; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vihreän", merkitys: "of the green" },
      { sija: "partitiivi (yks.)", muoto: "vihreää", merkitys: "green (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vihreitä", merkitys: "green (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi vihreitä (ei *vihreöitä). Vertailu vihreämpi/vihrein.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "vihreä" },
          { label: "Partitiivi", form: "vihreää" },
          { label: "Genetiivi", form: "vihreän" },
          { label: "Inessiivi", form: "vihreässä" },
          { label: "Illatiivi", form: "vihreään" },
          { label: "Adessiivi", form: "vihreällä" },
          { label: "Essiivi", form: "vihreänä" },
          { label: "Translatiivi", form: "vihreäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vihreät" },
          { label: "Partitiivi", form: "vihreitä" },
          { label: "Genetiivi", form: "vihreiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "vihreämpi" },
          { label: "Komparatiivi (gen.)", form: "vihreämmän" },
          { label: "Superlatiivi (nom.)", form: "vihrein" },
          { label: "Superlatiivi (gen.)", form: "vihreimmän" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vihreys",
      en: "greenness; environmentalism",
      taso: "B2",
      esim: { fi: "Kevään vihreys ilahduttaa.", en: "The greenness of spring is delightful." },
    },
    {
      fi: "vihertää",
      en: "to be/turn green",
      taso: "B2",
      esim: { fi: "Pellot vihertävät keväällä.", en: "The fields turn green in spring." },
    },
    {
      fi: "vaaleanvihreä",
      en: "light green",
      taso: "B1",
      esim: { fi: "Seinä on vaaleanvihreä.", en: "The wall is light green." },
    },
  ],
  synonyymit: [
    { fi: "vihertävä", en: "greenish" },
    { fi: "ruohonvihreä", en: "grass-green" },
  ],
  esimerkit: {
    A2: { fi: "Ruoho on vihreää.", en: "The grass is green." },
    B1: { fi: "Metsä oli täynnä vihreitä puita.", en: "The forest was full of green trees." },
    B2: {
      fi: "Keväällä maisema muuttuu nopeasti vihreäksi.",
      en: "In spring the landscape quickly turns green.",
    },
  },
  updatedAt: "2026-06-04",
};

export default vihrea;
