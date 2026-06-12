import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo with nk:ng gradation. Strong nk
// in open syllables (sänky, sänkyä, sänkyyn), weak ng in closed (sängyn, sängyssä).
const sänky: Word = {
  fi: "sänky",
  slug: "sänky",
  pos: "substantiivi (tyyppi: valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "bed",
  selitys: "Huonekalu, jossa nukutaan. Astevaihtelu nk:ng (sänky → sängyn).",
  kuva: { alt: "sänky – vuode, jossa nukutaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nk:ng (sänky → sängyn)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "sänkyä", merkitys: "bed (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "sängyn", merkitys: "of the bed" },
      { sija: "partitiivi (mon.)", muoto: "sänkyjä", merkitys: "beds (partitive pl.)" },
    ],
    huom:
      "Vahva nk avotavussa (sänkyä, sänkyyn, sänkyjä), heikko ng umpitavussa (sängyn, sängyssä, sängyllä).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sänky" },
          { label: "Partitiivi", form: "sänkyä" },
          { label: "Genetiivi", form: "sängyn" },
          { label: "Inessiivi", form: "sängyssä" },
          { label: "Elatiivi", form: "sängystä" },
          { label: "Illatiivi", form: "sänkyyn" },
          { label: "Adessiivi", form: "sängyllä" },
          { label: "Ablatiivi", form: "sängyltä" },
          { label: "Allatiivi", form: "sängylle" },
          { label: "Essiivi", form: "sänkynä" },
          { label: "Translatiivi", form: "sängyksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sängyt" },
          { label: "Partitiivi", form: "sänkyjä" },
          { label: "Genetiivi", form: "sänkyjen" },
          { label: "Illatiivi", form: "sänkyihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "parisänky",
      en: "double bed",
      taso: "B1",
      esim: { fi: "Makuuhuoneessa on parisänky.", en: "There is a double bed in the bedroom." },
    },
    {
      fi: "kerrossänky",
      en: "bunk bed",
      taso: "B2",
      esim: { fi: "Lasten huoneessa on kerrossänky.", en: "There is a bunk bed in the children's room." },
    },
    {
      fi: "sängynpääty",
      en: "headboard",
      taso: "B2",
      esim: { fi: "Hän nojasi sängynpäätyyn.", en: "She leaned against the headboard." },
    },
  ],
  synonyymit: [
    { fi: "vuode", en: "bed (more formal)" },
    { fi: "makuupaikka", en: "sleeping place" },
  ],
  esimerkit: {
    A2: { fi: "Menen sänkyyn aikaisin.", en: "I go to bed early." },
    B1: { fi: "Petaan sängyn joka aamu.", en: "I make the bed every morning." },
    B2: {
      fi: "Uusi sänky paransi unenlaatuani huomattavasti.",
      en: "The new bed improved my sleep quality considerably.",
    },
  },
  updatedAt: "2026-06-04",
};

export default sänky;
