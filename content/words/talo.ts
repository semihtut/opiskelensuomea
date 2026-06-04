import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (Kotus type 1/valo, NO gradation). The canonical
// design-reference word for /words/talo. Stem talo-; partitive taloa, plural taloja.
const talo: Word = {
  fi: "talo",
  slug: "talo",
  pos: "substantiivi",
  posClass: "substantiivi",
  level: "A1",
  en: "house, building",
  selitys:
    "Asuin- tai muu rakennus. Säännöllinen o-loppuinen substantiivi (Kotus-tyyppi 1, valo) — ei astevaihtelua.",
  kuva: { icon: "house", emoji: "🏠", alt: "talo – piirros talosta" },

  kielioppi: {
    tyyppi: "substantiivi (Kotus-tyyppi 1, valo); ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "taloa", merkitys: "house (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "talon", merkitys: "of the house" },
      { sija: "partitiivi (mon.)", muoto: "taloja", merkitys: "houses (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. Illatiivi yksikössä taloon, monikossa taloihin. Monikon genetiivi taloja → talojen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "talo" },
          { label: "Partitiivi", form: "taloa" },
          { label: "Genetiivi", form: "talon" },
          { label: "Inessiivi", form: "talossa" },
          { label: "Elatiivi", form: "talosta" },
          { label: "Illatiivi", form: "taloon" },
          { label: "Adessiivi", form: "talolla" },
          { label: "Ablatiivi", form: "talolta" },
          { label: "Allatiivi", form: "talolle" },
          { label: "Essiivi", form: "talona" },
          { label: "Translatiivi", form: "taloksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "talot" },
          { label: "Partitiivi", form: "taloja" },
          { label: "Genetiivi", form: "talojen" },
          { label: "Inessiivi", form: "taloissa" },
          { label: "Illatiivi", form: "taloihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "talous",
      en: "economy; household",
      taso: "B1",
      esim: { fi: "Maan talous kasvaa hitaasti.", en: "The country's economy grows slowly." },
    },
    {
      fi: "taloyhtiö",
      en: "housing company (condominium)",
      taso: "B2",
      esim: { fi: "Taloyhtiö korjaa katon ensi vuonna.", en: "The housing company will fix the roof next year." },
    },
    {
      fi: "talonmies",
      en: "caretaker, janitor",
      taso: "B1",
      esim: { fi: "Talonmies aukaisi oven.", en: "The caretaker opened the door." },
    },
  ],
  synonyymit: [
    { fi: "rakennus", en: "building" },
    { fi: "asuintalo", en: "residential house" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on iso talo.", en: "This is a big house." },
    B1: { fi: "Muutimme uuteen taloon viime vuonna.", en: "We moved into a new house last year." },
    B2: {
      fi: "Talo, jossa vietin lapsuuteni, on yhä pystyssä.",
      en: "The house where I spent my childhood is still standing.",
    },
  },
  updatedAt: "2026-06-04",
};

export default talo;
