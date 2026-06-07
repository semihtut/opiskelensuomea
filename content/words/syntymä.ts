import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem syntymä-.
// Genitive syntymän, partitive syntymää, partitive pl syntymiä.
const syntyma: Word = {
  fi: "syntymä",
  slug: "syntymä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "birth",
  selitys:
    "Hetki, jolloin ihminen tai eläin syntyy: 'lapsen syntymä'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko syntymiä. Johdettu verbistä syntyä. Vastakohta kuolema. Vrt. syntyä, syntymäpäivä, kuolema.",
  kuva: { emoji: "👶", alt: "syntymä – hetki jolloin ihminen tai eläin syntyy" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo syntymä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "syntymän", merkitys: "of the birth" },
      { sija: "partitiivi (yks.)", muoto: "syntymää", merkitys: "birth (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "syntymiä", merkitys: "births (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Johdettu verbistä syntyä. Syntymäpäivä = birthday, syntymäpaikka = birthplace. Vastakohta kuolema. Vrt. syntyä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "syntymä" },
          { label: "Partitiivi", form: "syntymää" },
          { label: "Genetiivi", form: "syntymän" },
          { label: "Inessiivi", form: "syntymässä" },
          { label: "Elatiivi", form: "syntymästä" },
          { label: "Illatiivi", form: "syntymään" },
          { label: "Adessiivi", form: "syntymällä" },
          { label: "Ablatiivi", form: "syntymältä" },
          { label: "Allatiivi", form: "syntymälle" },
          { label: "Essiivi", form: "syntymänä" },
          { label: "Translatiivi", form: "syntymäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "syntymät" },
          { label: "Partitiivi", form: "syntymiä" },
          { label: "Genetiivi", form: "syntymien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "syntyä",
      en: "to be born; to come into being",
      taso: "B1",
      esim: { fi: "Vauva syntyi keväällä.", en: "The baby was born in the spring." },
    },
    {
      fi: "syntymäpäivä",
      en: "birthday",
      taso: "A2",
      esim: { fi: "Milloin sinulla on syntymäpäivä?", en: "When is your birthday?" },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Lapsen syntymä oli iloinen hetki.", en: "The child's birth was a joyful moment." },
    B1: { fi: "Hän asui samassa kaupungissa syntymästään asti.", en: "She lived in the same city from her birth." },
    B2: {
      fi: "Lapsen syntymä muuttaa koko perheen arjen.",
      en: "The birth of a child changes the whole family's daily life.",
    },
  },
  updatedAt: "2026-06-07",
};

export default syntyma;
