import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation. Genitive
// terveyden, partitive terveyttä, illative terveyteen, partitive pl terveyksiä.
const terveys: Word = {
  fi: "terveys",
  slug: "terveys",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "A2",
  en: "health",
  selitys:
    "Tila, jossa keho ja mieli voivat hyvin. Tyyppi 40, astevaihtelu t:d (terveyden). Juuri adjektiivista terve.",
  kuva: { emoji: "🩺", alt: "terveys – hyvinvointi ja terveys" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "terveyden", merkitys: "of health" },
      { sija: "partitiivi (yks.)", muoto: "terveyttä", merkitys: "health (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "terveyksiä", merkitys: "healths (partitive pl., rare)" },
    ],
    huom:
      "Vartalo terveyte- → terveyde- (t:d): terveyden, terveyteen. Partitiivi terveyttä. Yleensä yksikössä; monikko on harvinainen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "terveys" },
          { label: "Partitiivi", form: "terveyttä" },
          { label: "Genetiivi", form: "terveyden" },
          { label: "Inessiivi", form: "terveydessä" },
          { label: "Elatiivi", form: "terveydestä" },
          { label: "Illatiivi", form: "terveyteen" },
          { label: "Adessiivi", form: "terveydellä" },
          { label: "Ablatiivi", form: "terveydeltä" },
          { label: "Allatiivi", form: "terveydelle" },
          { label: "Essiivi", form: "terveytenä" },
          { label: "Translatiivi", form: "terveydeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "terveydet" },
          { label: "Partitiivi", form: "terveyksiä" },
          { label: "Genetiivi", form: "terveyksien" },
          { label: "Inessiivi", form: "terveyksissä" },
          { label: "Illatiivi", form: "terveyksiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "terveydenhuolto",
      en: "health care",
      taso: "B2",
      esim: { fi: "Suomen terveydenhuolto on julkista.", en: "Finland's health care is public." },
    },
    {
      fi: "terveellinen",
      en: "healthy (food, habits)",
      taso: "B1",
      esim: { fi: "Syön terveellistä ruokaa.", en: "I eat healthy food." },
    },
    {
      fi: "terveyskeskus",
      en: "health center, clinic",
      taso: "A2",
      esim: { fi: "Soitin terveyskeskukseen.", en: "I called the health center." },
    },
  ],
  synonyymit: [
    { fi: "hyvinvointi", en: "well-being" },
    { fi: "kunto", en: "condition, fitness" },
  ],
  esimerkit: {
    A2: { fi: "Terveys on tärkeintä.", en: "Health is the most important thing." },
    B1: { fi: "Liikunta edistää terveyttä.", en: "Exercise promotes health." },
    B2: {
      fi: "Hänen terveytensä parani huomattavasti loman aikana.",
      en: "Her health improved markedly during the holiday.",
    },
  },
  updatedAt: "2026-06-04",
};

export default terveys;
