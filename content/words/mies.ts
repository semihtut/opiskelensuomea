import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 42/mies, no gradation. Special s-stem:
// nominative mies but oblique stem miehe- (miehen, miehet). Partitive sg miestä,
// partitive pl miehiä, genitive pl miesten (also miehien).
const mies: Word = {
  fi: "mies",
  slug: "mies",
  pos: "substantiivi (tyyppi: mies)",
  posClass: "substantiivi",
  level: "A1",
  en: "man",
  selitys:
    "Aikuinen miespuolinen ihminen. Erikoistyyppi: nominatiivi mies, mutta muut muodot vartalolla miehe- (miehen, miehet).",
  kuva: { emoji: "👨", alt: "mies – aikuinen miespuolinen ihminen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 42/mies; ei astevaihtelua (vartalo miehe-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "miestä", merkitys: "man (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "miehen", merkitys: "of the man" },
      { sija: "partitiivi (mon.)", muoto: "miehiä", merkitys: "men (partitive pl.)" },
    ],
    huom:
      "Nominatiivi mies, mutta muut muodot miehe-: miehen, miehet, miehessä. Partitiivi miestä, monikon genetiivi miesten.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "mies" },
          { label: "Partitiivi", form: "miestä" },
          { label: "Genetiivi", form: "miehen" },
          { label: "Inessiivi", form: "miehessä" },
          { label: "Elatiivi", form: "miehestä" },
          { label: "Illatiivi", form: "mieheen" },
          { label: "Adessiivi", form: "miehellä" },
          { label: "Ablatiivi", form: "mieheltä" },
          { label: "Allatiivi", form: "miehelle" },
          { label: "Essiivi", form: "miehenä" },
          { label: "Translatiivi", form: "mieheksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "miehet" },
          { label: "Partitiivi", form: "miehiä" },
          { label: "Genetiivi", form: "miesten" },
          { label: "Inessiivi", form: "miehissä" },
          { label: "Illatiivi", form: "miehiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "aviomies",
      en: "husband",
      taso: "B1",
      esim: { fi: "Hänen aviomiehensä on insinööri.", en: "Her husband is an engineer." },
    },
    {
      fi: "miehekäs",
      en: "manly, masculine",
      taso: "B2",
      esim: { fi: "Hänellä on matala, miehekäs ääni.", en: "He has a low, manly voice." },
    },
    {
      fi: "miehistö",
      en: "crew",
      taso: "B2",
      esim: { fi: "Laivan miehistö oli kokenut.", en: "The ship's crew was experienced." },
    },
  ],
  synonyymit: [
    { fi: "herra", en: "gentleman, Mr" },
    { fi: "äijä", en: "bloke, guy (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Mies lukee lehteä.", en: "The man is reading a newspaper." },
    B1: { fi: "Kaksi miestä korjasi auton.", en: "Two men fixed the car." },
    B2: {
      fi: "Mies, jonka tapasin eilen, oli hyvin ystävällinen.",
      en: "The man I met yesterday was very friendly.",
    },
  },
  updatedAt: "2026-06-04",
};

export default mies;
