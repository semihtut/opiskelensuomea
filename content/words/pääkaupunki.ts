import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (kaupunki): Kotus type 5/risti, nk:ng gradation, stem pääkaupunki- ~ pääkaupungi-.
// Genitive pääkaupungin, partitive pääkaupunkia, illative pääkaupunkiin, partitive pl pääkaupunkeja.
const pääkaupunki: Word = {
  fi: "pääkaupunki",
  slug: "pääkaupunki",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "capital city",
  selitys:
    "Maan tärkein kaupunki, jossa hallitus toimii: 'Suomen pääkaupunki'. Yhdyssana pää + kaupunki. Tyyppi 5, astevaihtelu nk:ng (pääkaupunki → pääkaupungin). Partitiivin monikko pääkaupunkeja.",
  kuva: { alt: "pääkaupunki – maan tärkein kaupunki" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu nk:ng (pääkaupunki ↔ pääkaupungi-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pääkaupungin", merkitys: "of the capital" },
      { sija: "partitiivi (yks.)", muoto: "pääkaupunkia", merkitys: "capital (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pääkaupunkeja", merkitys: "capitals (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa nk → ng: genetiivi pääkaupungin, inessiivi pääkaupungissa. Vahva aste nk säilyy partitiivissa pääkaupunkia. 'Helsinki on Suomen pääkaupunki.' Vrt. kaupunki = city.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pääkaupunki" },
          { label: "Partitiivi", form: "pääkaupunkia" },
          { label: "Genetiivi", form: "pääkaupungin" },
          { label: "Inessiivi", form: "pääkaupungissa" },
          { label: "Elatiivi", form: "pääkaupungista" },
          { label: "Illatiivi", form: "pääkaupunkiin" },
          { label: "Adessiivi", form: "pääkaupungilla" },
          { label: "Ablatiivi", form: "pääkaupungilta" },
          { label: "Allatiivi", form: "pääkaupungille" },
          { label: "Essiivi", form: "pääkaupunkina" },
          { label: "Translatiivi", form: "pääkaupungiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pääkaupungit" },
          { label: "Partitiivi", form: "pääkaupunkeja" },
          { label: "Genetiivi", form: "pääkaupunkien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kaupunki",
      en: "city, town",
      taso: "A2",
      esim: { fi: "Asun isossa kaupungissa.", en: "I live in a big city." },
    },
    {
      fi: "pääkaupunkiseutu",
      en: "capital region",
      taso: "B2",
      esim: { fi: "Pääkaupunkiseudulla asuu miljoona ihmistä.", en: "A million people live in the capital region." },
    },
    {
      fi: "pää",
      en: "head; main",
      taso: "A2",
      esim: { fi: "Se on pääasia.", en: "That's the main thing." },
    },
  ],
  synonyymit: [
    { fi: "metropoli", en: "metropolis" },
    { fi: "hallintokaupunki", en: "administrative city" },
  ],
  esimerkit: {
    A2: { fi: "Pariisi on Ranskan pääkaupunki.", en: "Paris is the capital of France." },
    B1: { fi: "Matkustimme pääkaupunkiin junalla.", en: "We travelled to the capital by train." },
    B2: {
      fi: "Monen maan pääkaupunki on samalla sen suurin kaupunki.",
      en: "Many countries' capital is also their largest city.",
    },
  },
  updatedAt: "2026-06-07",
};

export default pääkaupunki;
