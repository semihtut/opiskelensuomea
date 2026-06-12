import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem kokonaisuude- ~ kokonaisuute-.
// Genitive kokonaisuuden, partitive kokonaisuutta, partitive pl kokonaisuuksia.
const kokonaisuus: Word = {
  fi: "kokonaisuus",
  slug: "kokonaisuus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B2",
  en: "whole, entirety, totality",
  selitys:
    "Osista muodostuva ehjä kokonaisuus: 'nähdä kokonaisuus'. Tyyppi 40/kalleus, astevaihtelu t:d (kokonaisuus → kokonaisuuden). Adjektiivista kokonainen. Vastakohta osa. Vrt. kokonainen, osa, yhteys.",
  kuva: { alt: "kokonaisuus – osista muodostuva ehjä kokonaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (kokonaisuute- ~ kokonaisuude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kokonaisuuden", merkitys: "of the whole" },
      { sija: "partitiivi (yks.)", muoto: "kokonaisuutta", merkitys: "whole (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kokonaisuuksia", merkitys: "wholes (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40/kalleus (-uus): genetiivi -uuden (t:d), partitiivi -uutta, partitiivin monikko -uuksia. Ominaisuudennimi adjektiivista kokonainen. 'Kokonaisuutena' = as a whole. Vastakohta osa. Vrt. kokonainen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kokonaisuus" },
          { label: "Partitiivi", form: "kokonaisuutta" },
          { label: "Genetiivi", form: "kokonaisuuden" },
          { label: "Inessiivi", form: "kokonaisuudessa" },
          { label: "Elatiivi", form: "kokonaisuudesta" },
          { label: "Illatiivi", form: "kokonaisuuteen" },
          { label: "Adessiivi", form: "kokonaisuudella" },
          { label: "Ablatiivi", form: "kokonaisuudelta" },
          { label: "Allatiivi", form: "kokonaisuudelle" },
          { label: "Essiivi", form: "kokonaisuutena" },
          { label: "Translatiivi", form: "kokonaisuudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kokonaisuudet" },
          { label: "Partitiivi", form: "kokonaisuuksia" },
          { label: "Genetiivi", form: "kokonaisuuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kokonainen",
      en: "whole, entire",
      taso: "B1",
      esim: { fi: "Söin kokonaisen leivän.", en: "I ate a whole loaf of bread." },
    },
    {
      fi: "kokonaan",
      en: "completely, entirely",
      taso: "B1",
      esim: { fi: "Unohdin sen kokonaan.", en: "I forgot it completely." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Katso kokonaisuutta.", en: "Look at the whole." },
    B1: { fi: "Yksittäiset osat muodostavat kokonaisuuden.", en: "The individual parts form a whole." },
    B2: {
      fi: "Kokonaisuutena hanke onnistui, vaikka yksittäisissä osissa oli ongelmia.",
      en: "As a whole the project succeeded, although there were problems in individual parts.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kokonaisuus;
