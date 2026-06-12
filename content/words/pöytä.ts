import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira with t:d gradation. Strong t
// in open syllables (pöytä, pöytää, pöytään), weak d in closed (pöydän, pöydällä).
// Partitive pl pöytiä, genitive pl pöytien.
const pöytä: Word = {
  fi: "pöytä",
  slug: "pöytä",
  pos: "substantiivi (tyyppi: koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "table",
  selitys:
    "Huonekalu, jonka ääressä syödään tai työskennellään. Astevaihtelu t:d (pöytä → pöydän).",
  kuva: { alt: "pöytä – katettu ruokapöytä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; astevaihtelu t:d (pöytä → pöydän)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "pöytää", merkitys: "table (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "pöydän", merkitys: "of the table" },
      { sija: "partitiivi (mon.)", muoto: "pöytiä", merkitys: "tables (partitive pl.)" },
    ],
    huom:
      "Vahva t avotavussa (pöytää, pöytään, pöytiä), heikko d umpitavussa (pöydän, pöydässä, pöydällä).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pöytä" },
          { label: "Partitiivi", form: "pöytää" },
          { label: "Genetiivi", form: "pöydän" },
          { label: "Inessiivi", form: "pöydässä" },
          { label: "Elatiivi", form: "pöydästä" },
          { label: "Illatiivi", form: "pöytään" },
          { label: "Adessiivi", form: "pöydällä" },
          { label: "Ablatiivi", form: "pöydältä" },
          { label: "Allatiivi", form: "pöydälle" },
          { label: "Essiivi", form: "pöytänä" },
          { label: "Translatiivi", form: "pöydäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pöydät" },
          { label: "Partitiivi", form: "pöytiä" },
          { label: "Genetiivi", form: "pöytien" },
          { label: "Illatiivi", form: "pöytiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ruokapöytä",
      en: "dining table",
      taso: "A2",
      esim: { fi: "Koko perhe kokoontui ruokapöytään.", en: "The whole family gathered at the dining table." },
    },
    {
      fi: "kirjoituspöytä",
      en: "desk",
      taso: "B1",
      esim: { fi: "Tietokone on kirjoituspöydällä.", en: "The computer is on the desk." },
    },
    {
      fi: "pöytälaatikko",
      en: "drawer",
      taso: "B2",
      esim: { fi: "Sakset ovat pöytälaatikossa.", en: "The scissors are in the drawer." },
    },
  ],
  synonyymit: [
    { fi: "taso", en: "surface, counter" },
    { fi: "pulpetti", en: "(school) desk" },
  ],
  esimerkit: {
    A2: { fi: "Ruoka on pöydällä.", en: "The food is on the table." },
    B1: { fi: "Istuimme pöydän ääreen syömään.", en: "We sat down at the table to eat." },
    B2: {
      fi: "Laitoin avaimet pöydälle ja unohdin ne sinne.",
      en: "I put the keys on the table and forgot them there.",
    },
  },
  updatedAt: "2026-06-04",
};

export default pöytä;
