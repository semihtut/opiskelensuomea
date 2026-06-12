import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation. Genitive kirjan,
// partitive kirjaa, illative kirjaan, partitive pl kirjoja.
const kirja: Word = {
  fi: "kirja",
  slug: "kirja",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "book",
  selitys:
    "Sidottu kokoelma sivuja luettavaksi. Tyyppi 9, ei astevaihtelua. Juuri samassa perheessä kuin kirjoittaa, kirjain.",
  kuva: { alt: "kirja – kirja" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kirjan", merkitys: "of the book" },
      { sija: "partitiivi (yks.)", muoto: "kirjaa", merkitys: "book (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kirjoja", merkitys: "books (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi kirjoja, genetiivi kirjojen. Yhdyssanat: oppikirja, sanakirja, keittokirja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kirja" },
          { label: "Partitiivi", form: "kirjaa" },
          { label: "Genetiivi", form: "kirjan" },
          { label: "Inessiivi", form: "kirjassa" },
          { label: "Elatiivi", form: "kirjasta" },
          { label: "Illatiivi", form: "kirjaan" },
          { label: "Adessiivi", form: "kirjalla" },
          { label: "Ablatiivi", form: "kirjalta" },
          { label: "Allatiivi", form: "kirjalle" },
          { label: "Essiivi", form: "kirjana" },
          { label: "Translatiivi", form: "kirjaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kirjat" },
          { label: "Partitiivi", form: "kirjoja" },
          { label: "Genetiivi", form: "kirjojen" },
          { label: "Inessiivi", form: "kirjoissa" },
          { label: "Illatiivi", form: "kirjoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kirjasto",
      en: "library",
      taso: "A2",
      esim: { fi: "Lainasin kirjan kirjastosta.", en: "I borrowed a book from the library." },
    },
    {
      fi: "sanakirja",
      en: "dictionary",
      taso: "A2",
      esim: { fi: "Etsin sanan sanakirjasta.", en: "I looked up the word in the dictionary." },
    },
    {
      fi: "kirjakauppa",
      en: "bookstore",
      taso: "A2",
      esim: { fi: "Ostin romaanin kirjakaupasta.", en: "I bought a novel at the bookstore." },
    },
  ],
  synonyymit: [
    { fi: "teos", en: "work (literary)" },
    { fi: "opus", en: "opus, work (formal)" },
  ],
  esimerkit: {
    A2: { fi: "Luen mielenkiintoista kirjaa.", en: "I'm reading an interesting book." },
    B1: { fi: "Ostin kolme kirjaa kirjakaupasta.", en: "I bought three books at the bookstore." },
    B2: {
      fi: "Tämä kirja muutti tapani ajatella maailmaa.",
      en: "This book changed the way I think about the world.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kirja;
