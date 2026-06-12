import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem väestö-.
// Genitive väestön, partitive väestöä, partitive pl väestöjä.
const vaesto: Word = {
  fi: "väestö",
  slug: "väestö",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B2",
  en: "population",
  selitys:
    "Tietyllä alueella asuvat ihmiset kokonaisuutena: 'maan väestö', 'ikääntyvä väestö'. Tyyppi 1/valo, ei astevaihtelua (kollektiivijohdos -stö). Sanasta väki. Vrt. väki, kansa, asukas.",
  kuva: { alt: "väestö – tietyllä alueella asuvat ihmiset kokonaisuutena" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo väestö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "väestön", merkitys: "of the population" },
      { sija: "partitiivi (yks.)", muoto: "väestöä", merkitys: "population (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "väestöjä", merkitys: "populations (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua. Kollektiivijohdos väki + -stö. Yleensä yksikössä. Väestönkasvu, väestörakenne. Vrt. väki, kansa = nation/people.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "väestö" },
          { label: "Partitiivi", form: "väestöä" },
          { label: "Genetiivi", form: "väestön" },
          { label: "Inessiivi", form: "väestössä" },
          { label: "Elatiivi", form: "väestöstä" },
          { label: "Illatiivi", form: "väestöön" },
          { label: "Adessiivi", form: "väestöllä" },
          { label: "Ablatiivi", form: "väestöltä" },
          { label: "Allatiivi", form: "väestölle" },
          { label: "Essiivi", form: "väestönä" },
          { label: "Translatiivi", form: "väestöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "väestöt" },
          { label: "Partitiivi", form: "väestöjä" },
          { label: "Genetiivi", form: "väestöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "väestönkasvu",
      en: "population growth",
      taso: "B2",
      esim: { fi: "Väestönkasvu on hidastunut.", en: "Population growth has slowed down." },
    },
    {
      fi: "väestörakenne",
      en: "population structure, demographics",
      taso: "B2",
      esim: { fi: "Väestörakenne ikääntyy.", en: "The population structure is ageing." },
    },
  ],
  synonyymit: [
    { fi: "asukkaat", en: "the inhabitants" },
  ],
  esimerkit: {
    A2: { fi: "Kaupungin väestö kasvaa.", en: "The city's population is growing." },
    B1: { fi: "Suuri osa väestöstä asuu kaupungeissa.", en: "A large part of the population lives in cities." },
    B2: {
      fi: "Väestön ikääntyminen asettaa paineita terveydenhuollolle ja eläkejärjestelmälle.",
      en: "The ageing of the population puts pressure on health care and the pension system.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vaesto;
