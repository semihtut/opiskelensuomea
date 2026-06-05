import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation. Genitive
// tietokoneen, partitive tietokonetta, illative tietokoneeseen, partitive pl tietokoneita.
const tietokone: Word = {
  fi: "tietokone",
  slug: "tietokone",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "A1",
  en: "computer",
  selitys:
    "Ohjelmoitava elektroninen laite tiedon käsittelyyn. Tyyppi 48, ei astevaihtelua. Sanoista tieto + kone.",
  kuva: { emoji: "💻", alt: "tietokone – kannettava tietokone" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tietokoneen", merkitys: "of the computer" },
      { sija: "partitiivi (yks.)", muoto: "tietokonetta", merkitys: "computer (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tietokoneita", merkitys: "computers (partitive pl.)" },
    ],
    huom:
      "Vartalo tietokonee-: tietokoneen, tietokoneeseen. Partitiivi tietokonetta. Sama malli kuin kone, huone.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tietokone" },
          { label: "Partitiivi", form: "tietokonetta" },
          { label: "Genetiivi", form: "tietokoneen" },
          { label: "Inessiivi", form: "tietokoneessa" },
          { label: "Elatiivi", form: "tietokoneesta" },
          { label: "Illatiivi", form: "tietokoneeseen" },
          { label: "Adessiivi", form: "tietokoneella" },
          { label: "Ablatiivi", form: "tietokoneelta" },
          { label: "Allatiivi", form: "tietokoneelle" },
          { label: "Essiivi", form: "tietokoneena" },
          { label: "Translatiivi", form: "tietokoneeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tietokoneet" },
          { label: "Partitiivi", form: "tietokoneita" },
          { label: "Genetiivi", form: "tietokoneiden" },
          { label: "Inessiivi", form: "tietokoneissa" },
          { label: "Illatiivi", form: "tietokoneisiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kannettava",
      en: "laptop",
      taso: "B1",
      esim: { fi: "Otin kannettavan mukaan.", en: "I took the laptop with me." },
    },
    {
      fi: "tietokoneohjelma",
      en: "computer program",
      taso: "B2",
      esim: { fi: "Asensin uuden tietokoneohjelman.", en: "I installed a new computer program." },
    },
    {
      fi: "kone",
      en: "machine (the root word)",
      taso: "A2",
      esim: { fi: "Kone toimii hyvin.", en: "The machine works well." },
    },
  ],
  synonyymit: [
    { fi: "kone", en: "machine, computer (colloquial)" },
    { fi: "läppäri", en: "laptop (slang)" },
  ],
  esimerkit: {
    A2: { fi: "Käytän tietokonetta töissä.", en: "I use a computer at work." },
    B1: { fi: "Tietokone on hidas ja vanha.", en: "The computer is slow and old." },
    B2: {
      fi: "Tallensin tiedostot tietokoneelle ennen sammuttamista.",
      en: "I saved the files on the computer before shutting it down.",
    },
  },
  updatedAt: "2026-06-05",
};

export default tietokone;
