import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation. Genitive kirjaston,
// partitive kirjastoa, illative kirjastoon, partitive pl kirjastoja.
const kirjasto: Word = {
  fi: "kirjasto",
  slug: "kirjasto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "library",
  selitys:
    "Paikka, josta voi lainata kirjoja. Tyyppi 1, ei astevaihtelua. Sanasta kirja + -sto (kokoelma).",
  kuva: { emoji: "📚", alt: "kirjasto – kirjahyllyjä kirjastossa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kirjaston", merkitys: "of the library" },
      { sija: "partitiivi (yks.)", muoto: "kirjastoa", merkitys: "library (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kirjastoja", merkitys: "libraries (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. 'Lainata kirjastosta' = borrow from the library. Pääte -sto/-stö = kokoelma (esim. laivasto, sanasto).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kirjasto" },
          { label: "Partitiivi", form: "kirjastoa" },
          { label: "Genetiivi", form: "kirjaston" },
          { label: "Inessiivi", form: "kirjastossa" },
          { label: "Elatiivi", form: "kirjastosta" },
          { label: "Illatiivi", form: "kirjastoon" },
          { label: "Adessiivi", form: "kirjastolla" },
          { label: "Ablatiivi", form: "kirjastolta" },
          { label: "Allatiivi", form: "kirjastolle" },
          { label: "Essiivi", form: "kirjastona" },
          { label: "Translatiivi", form: "kirjastoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kirjastot" },
          { label: "Partitiivi", form: "kirjastoja" },
          { label: "Genetiivi", form: "kirjastojen" },
          { label: "Inessiivi", form: "kirjastoissa" },
          { label: "Illatiivi", form: "kirjastoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kirjastokortti",
      en: "library card",
      taso: "A2",
      esim: { fi: "Tarvitset kirjastokortin lainaamiseen.", en: "You need a library card to borrow." },
    },
    {
      fi: "lainata",
      en: "to borrow, lend",
      taso: "A2",
      esim: { fi: "Lainasin kolme kirjaa.", en: "I borrowed three books." },
    },
    {
      fi: "kirjastonhoitaja",
      en: "librarian",
      taso: "B1",
      esim: { fi: "Kirjastonhoitaja auttoi minua.", en: "The librarian helped me." },
    },
  ],
  synonyymit: [
    { fi: "lukusali", en: "reading room" },
    { fi: "kokoelma", en: "collection" },
  ],
  esimerkit: {
    A2: { fi: "Kirjasto on auki myös lauantaina.", en: "The library is open on Saturdays too." },
    B1: { fi: "Palautin kirjat kirjastoon ajoissa.", en: "I returned the books to the library on time." },
    B2: {
      fi: "Kirjastossa voi lukea lehtiä, lainata kirjoja ja käyttää tietokoneita.",
      en: "At the library you can read papers, borrow books and use computers.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kirjasto;
