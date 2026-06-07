import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem tiedosto-.
// Genitive tiedoston, partitive tiedostoa, partitive pl tiedostoja.
const tiedosto: Word = {
  fi: "tiedosto",
  slug: "tiedosto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "file (computing)",
  selitys:
    "Tietokoneelle tallennettu kokonaisuus, esim. asiakirja tai kuva: 'avata tiedosto'. Tyyppi 1/valo, ei astevaihtelua (st säilyy). Johdettu sanasta tieto. Vrt. tieto, kansio, tallentaa.",
  kuva: { emoji: "📄", alt: "tiedosto – tietokoneelle tallennettu kokonaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo tiedosto-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tiedoston", merkitys: "of the file" },
      { sija: "partitiivi (yks.)", muoto: "tiedostoa", merkitys: "file (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tiedostoja", merkitys: "files (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1 (-sto): partitiivin monikko -ja (tiedostoja), ei astevaihtelua (st säilyy). Johdettu sanasta tieto. 'Avata/tallentaa/poistaa tiedosto'. Vrt. kansio = folder, tallentaa = to save.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tiedosto" },
          { label: "Partitiivi", form: "tiedostoa" },
          { label: "Genetiivi", form: "tiedoston" },
          { label: "Inessiivi", form: "tiedostossa" },
          { label: "Elatiivi", form: "tiedostosta" },
          { label: "Illatiivi", form: "tiedostoon" },
          { label: "Adessiivi", form: "tiedostolla" },
          { label: "Ablatiivi", form: "tiedostolta" },
          { label: "Allatiivi", form: "tiedostolle" },
          { label: "Essiivi", form: "tiedostona" },
          { label: "Translatiivi", form: "tiedostoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tiedostot" },
          { label: "Partitiivi", form: "tiedostoja" },
          { label: "Genetiivi", form: "tiedostojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tieto",
      en: "information, knowledge",
      taso: "B1",
      esim: { fi: "Tarvitsen lisää tietoa.", en: "I need more information." },
    },
    {
      fi: "kansio",
      en: "folder",
      taso: "B2",
      esim: { fi: "Tallensin tiedoston kansioon.", en: "I saved the file in a folder." },
    },
  ],
  synonyymit: [
    { fi: "dokumentti", en: "document" },
  ],
  esimerkit: {
    A2: { fi: "Avaa tiedosto.", en: "Open the file." },
    B1: { fi: "Lähetin tiedoston sähköpostilla.", en: "I sent the file by email." },
    B2: {
      fi: "Muista varmuuskopioida tärkeät tiedostot säännöllisesti.",
      en: "Remember to back up important files regularly.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tiedosto;
