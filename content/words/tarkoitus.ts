import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem tarkoitukse-.
// Genitive tarkoituksen, partitive tarkoitusta, partitive pl tarkoituksia.
const tarkoitus: Word = {
  fi: "tarkoitus",
  slug: "tarkoitus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "purpose, intention; meaning",
  selitys:
    "Se, mitä varten jokin tehdään, tai aikomus: 'mikä on tämän tarkoitus?'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä tarkoittaa. 'On tarkoitus tehdä' = the intention is to do.",
  kuva: { alt: "tarkoitus – se, mitä varten jokin tehdään" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo tarkoitukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tarkoituksen", merkitys: "of the purpose" },
      { sija: "partitiivi (yks.)", muoto: "tarkoitusta", merkitys: "purpose (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tarkoituksia", merkitys: "purposes (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Johdettu verbistä tarkoittaa. 'Tarkoituksella' = on purpose; 'on tarkoitus' = the intention is.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tarkoitus" },
          { label: "Partitiivi", form: "tarkoitusta" },
          { label: "Genetiivi", form: "tarkoituksen" },
          { label: "Inessiivi", form: "tarkoituksessa" },
          { label: "Elatiivi", form: "tarkoituksesta" },
          { label: "Illatiivi", form: "tarkoitukseen" },
          { label: "Adessiivi", form: "tarkoituksella" },
          { label: "Ablatiivi", form: "tarkoitukselta" },
          { label: "Allatiivi", form: "tarkoitukselle" },
          { label: "Essiivi", form: "tarkoituksena" },
          { label: "Translatiivi", form: "tarkoitukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tarkoitukset" },
          { label: "Partitiivi", form: "tarkoituksia" },
          { label: "Genetiivi", form: "tarkoituksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tarkoittaa",
      en: "to mean, intend",
      taso: "B1",
      esim: { fi: "Mitä tämä sana tarkoittaa?", en: "What does this word mean?" },
    },
    {
      fi: "tarkoituksellinen",
      en: "intentional, deliberate",
      taso: "B2",
      esim: { fi: "Virhe ei ollut tarkoituksellinen.", en: "The mistake was not intentional." },
    },
    {
      fi: "tarkoituksenmukainen",
      en: "appropriate, expedient",
      taso: "B2",
      esim: { fi: "Ratkaisu oli tarkoituksenmukainen.", en: "The solution was appropriate." },
    },
  ],
  synonyymit: [
    { fi: "aikomus", en: "intention" },
    { fi: "päämäärä", en: "aim, purpose" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on tämän laitteen tarkoitus?", en: "What is the purpose of this device?" },
    B1: { fi: "Tarkoitukseni oli auttaa, en haitata.", en: "My intention was to help, not to hinder." },
    B2: {
      fi: "Toiminnan tarkoitus jäi monelle osallistujalle epäselväksi.",
      en: "The purpose of the activity remained unclear to many participants.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tarkoitus;
