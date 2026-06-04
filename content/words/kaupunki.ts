import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, nk:ng gradation. Genitive
// kaupungin, partitive kaupunkia, illative kaupunkiin, partitive pl kaupunkeja.
const kaupunki: Word = {
  fi: "kaupunki",
  slug: "kaupunki",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "city, town",
  selitys:
    "Suuri asutuskeskus. Tyyppi 5, astevaihtelu nk:ng (kaupunki → kaupungin). Vastakohta maaseutu.",
  kuva: { emoji: "🏙️", alt: "kaupunki – rakennuksia ja katuja" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu nk:ng",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kaupungin", merkitys: "of the city" },
      { sija: "partitiivi (yks.)", muoto: "kaupunkia", merkitys: "city (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kaupunkeja", merkitys: "cities (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu nk:ng näkyy heikossa asteessa: kaupunki, mutta kaupungin, kaupungissa. Vahva aste säilyy: kaupunkia, kaupunkiin, kaupunkeja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kaupunki" },
          { label: "Partitiivi", form: "kaupunkia" },
          { label: "Genetiivi", form: "kaupungin" },
          { label: "Inessiivi", form: "kaupungissa" },
          { label: "Elatiivi", form: "kaupungista" },
          { label: "Illatiivi", form: "kaupunkiin" },
          { label: "Adessiivi", form: "kaupungilla" },
          { label: "Ablatiivi", form: "kaupungilta" },
          { label: "Allatiivi", form: "kaupungille" },
          { label: "Essiivi", form: "kaupunkina" },
          { label: "Translatiivi", form: "kaupungiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kaupungit" },
          { label: "Partitiivi", form: "kaupunkeja" },
          { label: "Genetiivi", form: "kaupunkien" },
          { label: "Inessiivi", form: "kaupungeissa" },
          { label: "Illatiivi", form: "kaupunkeihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kaupunkilainen",
      en: "city-dweller, urbanite",
      taso: "B1",
      esim: { fi: "Hän on aito kaupunkilainen.", en: "She's a true city-dweller." },
    },
    {
      fi: "pääkaupunki",
      en: "capital city",
      taso: "A2",
      esim: { fi: "Helsinki on Suomen pääkaupunki.", en: "Helsinki is the capital of Finland." },
    },
    {
      fi: "kaupungintalo",
      en: "city hall",
      taso: "B1",
      esim: { fi: "Kokous pidetään kaupungintalolla.", en: "The meeting is held at city hall." },
    },
  ],
  synonyymit: [
    { fi: "kaupunkikeskus", en: "urban center" },
    { fi: "taajama", en: "built-up area, urban locality" },
  ],
  esimerkit: {
    A2: { fi: "Asun isossa kaupungissa.", en: "I live in a big city." },
    B1: { fi: "Menemme kaupunkiin ostoksille.", en: "We're going downtown to shop." },
    B2: {
      fi: "Tämä kaupunki on kasvanut nopeasti viime vuosina.",
      en: "This city has grown quickly in recent years.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kaupunki;
