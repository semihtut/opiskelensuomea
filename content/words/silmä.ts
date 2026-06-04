import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation. Genitive silmän,
// partitive silmää, illative silmään, partitive pl silmiä.
const silma: Word = {
  fi: "silmä",
  slug: "silmä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "eye",
  selitys:
    "Näköaisti­elin. Tyyppi 10, ei astevaihtelua. Monikon partitiivi silmiä; usein puhutaan parista (silmät).",
  kuva: { emoji: "👁️", alt: "silmä – ihmisen silmä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "silmän", merkitys: "of the eye" },
      { sija: "partitiivi (yks.)", muoto: "silmää", merkitys: "eye (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "silmiä", merkitys: "eyes (partitive pl.)" },
    ],
    huom:
      "Pari yleensä monikossa: 'siniset silmät'. Idiomeja: 'silmissä' (before one's eyes), 'pitää silmällä' (keep an eye on).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "silmä" },
          { label: "Partitiivi", form: "silmää" },
          { label: "Genetiivi", form: "silmän" },
          { label: "Inessiivi", form: "silmässä" },
          { label: "Elatiivi", form: "silmästä" },
          { label: "Illatiivi", form: "silmään" },
          { label: "Adessiivi", form: "silmällä" },
          { label: "Ablatiivi", form: "silmältä" },
          { label: "Allatiivi", form: "silmälle" },
          { label: "Essiivi", form: "silmänä" },
          { label: "Translatiivi", form: "silmäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "silmät" },
          { label: "Partitiivi", form: "silmiä" },
          { label: "Genetiivi", form: "silmien" },
          { label: "Inessiivi", form: "silmissä" },
          { label: "Illatiivi", form: "silmiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "silmälasit",
      en: "eyeglasses",
      taso: "A2",
      esim: { fi: "En näe ilman silmälaseja.", en: "I can't see without my glasses." },
    },
    {
      fi: "silmäys",
      en: "a glance, look",
      taso: "B1",
      esim: { fi: "Hän loi nopean silmäyksen kelloon.", en: "He cast a quick glance at the clock." },
    },
    {
      fi: "silmäripsi",
      en: "eyelash",
      taso: "B1",
      esim: { fi: "Silmäripsi putosi poskelle.", en: "An eyelash fell on the cheek." },
    },
  ],
  synonyymit: [
    { fi: "katse", en: "gaze, look" },
    { fi: "näkö", en: "sight, vision" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on ruskeat silmät.", en: "She has brown eyes." },
    B1: { fi: "Sulje silmät ja rentoudu.", en: "Close your eyes and relax." },
    B2: {
      fi: "Katsoin häntä silmiin ja kerroin totuuden.",
      en: "I looked her in the eyes and told the truth.",
    },
  },
  updatedAt: "2026-06-04",
};

export default silma;
