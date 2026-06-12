import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation. Genitive museon,
// partitive museota, illative museoon, partitive pl museoita.
const museo: Word = {
  fi: "museo",
  slug: "museo",
  pos: "substantiivi (tyyppi 3/valtio)",
  posClass: "substantiivi",
  level: "A1",
  en: "museum",
  selitys:
    "Paikka, jossa on esillä esineitä tai taidetta. Tyyppi 3, ei astevaihtelua. Partitiivi museota.",
  kuva: { alt: "museo – museorakennus pylväineen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "museon", merkitys: "of the museum" },
      { sija: "partitiivi (yks.)", muoto: "museota", merkitys: "museum (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "museoita", merkitys: "museums (partitive pl.)" },
    ],
    huom:
      "Partitiivi museota (loppuun lisätään -ta). Monikko museot, museoita. 'Käydä museossa' = visit a museum.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "museo" },
          { label: "Partitiivi", form: "museota" },
          { label: "Genetiivi", form: "museon" },
          { label: "Inessiivi", form: "museossa" },
          { label: "Elatiivi", form: "museosta" },
          { label: "Illatiivi", form: "museoon" },
          { label: "Adessiivi", form: "museolla" },
          { label: "Ablatiivi", form: "museolta" },
          { label: "Allatiivi", form: "museolle" },
          { label: "Essiivi", form: "museona" },
          { label: "Translatiivi", form: "museoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "museot" },
          { label: "Partitiivi", form: "museoita" },
          { label: "Genetiivi", form: "museoiden" },
          { label: "Inessiivi", form: "museoissa" },
          { label: "Illatiivi", form: "museoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "taidemuseo",
      en: "art museum",
      taso: "A2",
      esim: { fi: "Taidemuseossa oli uusi näyttely.", en: "There was a new exhibition at the art museum." },
    },
    {
      fi: "museokortti",
      en: "museum card (pass)",
      taso: "B1",
      esim: { fi: "Museokortilla pääsee moneen museoon.", en: "With a museum card you get into many museums." },
    },
    {
      fi: "näyttely",
      en: "exhibition",
      taso: "B1",
      esim: { fi: "Näyttely oli avoinna kuukauden.", en: "The exhibition was open for a month." },
    },
  ],
  synonyymit: [
    { fi: "galleria", en: "gallery" },
    { fi: "kokoelma", en: "collection" },
  ],
  esimerkit: {
    A2: { fi: "Käymme museossa sunnuntaina.", en: "We're visiting the museum on Sunday." },
    B1: { fi: "Museo on suljettu maanantaisin.", en: "The museum is closed on Mondays." },
    B2: {
      fi: "Museossa oli esillä esineitä tuhannen vuoden takaa.",
      en: "The museum displayed objects from a thousand years ago.",
    },
  },
  updatedAt: "2026-06-05",
};

export default museo;
