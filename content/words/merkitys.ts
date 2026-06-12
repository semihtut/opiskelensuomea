import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem merkitykse-.
// Genitive merkityksen, partitive merkitystä, illative merkitykseen, partitive pl merkityksiä.
const merkitys: Word = {
  fi: "merkitys",
  slug: "merkitys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "meaning; significance, importance",
  selitys:
    "Asian merkitys tai tärkeys: 'sanan merkitys' / 'suuri merkitys'. Tyyppi 39, ei astevaihtelua. Juuri verbistä merkitä. Vrt. tarkoitus (purpose), tärkeä (important).",
  kuva: { alt: "merkitys – asian merkitys tai tärkeys" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo merkitykse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "merkityksen", merkitys: "of the meaning" },
      { sija: "partitiivi (yks.)", muoto: "merkitystä", merkitys: "meaning (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "merkityksiä", merkitys: "meanings (partitive pl.)" },
    ],
    huom:
      "Loppu -us (verbijohdos) → vartalo -ykse-: merkitys → merkityksen. Kaksi merkitystä: 1) mitä sana tarkoittaa, 2) tärkeys ('sillä on suuri merkitys'). Vrt. merkitä = to mean/mark.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "merkitys" },
          { label: "Partitiivi", form: "merkitystä" },
          { label: "Genetiivi", form: "merkityksen" },
          { label: "Inessiivi", form: "merkityksessä" },
          { label: "Elatiivi", form: "merkityksestä" },
          { label: "Illatiivi", form: "merkitykseen" },
          { label: "Adessiivi", form: "merkityksellä" },
          { label: "Ablatiivi", form: "merkitykseltä" },
          { label: "Allatiivi", form: "merkitykselle" },
          { label: "Essiivi", form: "merkityksenä" },
          { label: "Translatiivi", form: "merkitykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "merkitykset" },
          { label: "Partitiivi", form: "merkityksiä" },
          { label: "Genetiivi", form: "merkitysten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "merkitä",
      en: "to mean; to mark, note down",
      taso: "B1",
      esim: { fi: "Mitä tämä merkitsee?", en: "What does this mean?" },
    },
    {
      fi: "merkityksellinen",
      en: "meaningful, significant",
      taso: "B2",
      esim: { fi: "Se oli merkityksellinen hetki.", en: "It was a meaningful moment." },
    },
    {
      fi: "merkityksetön",
      en: "meaningless, insignificant",
      taso: "B2",
      esim: { fi: "Yksityiskohta ei ole merkityksetön.", en: "The detail is not insignificant." },
    },
  ],
  synonyymit: [
    { fi: "tarkoitus", en: "meaning, sense" },
    { fi: "tärkeys", en: "importance" },
  ],
  esimerkit: {
    A2: { fi: "En tiedä tämän sanan merkitystä.", en: "I don't know the meaning of this word." },
    B1: { fi: "Perheellä on minulle suuri merkitys.", en: "Family is very important to me." },
    B2: {
      fi: "Sanan merkitys muuttuu asiayhteyden mukaan.",
      en: "The meaning of the word changes according to context.",
    },
  },
  updatedAt: "2026-06-06",
};

export default merkitys;
