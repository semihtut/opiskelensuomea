import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem innostukse-.
// Genitive innostuksen, partitive innostusta, partitive pl innostuksia.
const innostus: Word = {
  fi: "innostus",
  slug: "innostus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "enthusiasm, excitement, eagerness",
  selitys:
    "Innokas ja iloinen kiinnostus johonkin: 'suuri innostus'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä innostua/innostaa. Vrt. innostua, innostaa, into.",
  kuva: { alt: "innostus – innokas ja iloinen kiinnostus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo innostukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "innostuksen", merkitys: "of the enthusiasm" },
      { sija: "partitiivi (yks.)", muoto: "innostusta", merkitys: "enthusiasm (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "innostuksia", merkitys: "enthusiasms (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta. Johdettu verbistä innostua. Yleensä yksikössä. 'Innostuksesta' = out of enthusiasm. Vrt. innostua = to get excited, into = zeal.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "innostus" },
          { label: "Partitiivi", form: "innostusta" },
          { label: "Genetiivi", form: "innostuksen" },
          { label: "Inessiivi", form: "innostuksessa" },
          { label: "Elatiivi", form: "innostuksesta" },
          { label: "Illatiivi", form: "innostukseen" },
          { label: "Adessiivi", form: "innostuksella" },
          { label: "Ablatiivi", form: "innostukselta" },
          { label: "Allatiivi", form: "innostukselle" },
          { label: "Essiivi", form: "innostuksena" },
          { label: "Translatiivi", form: "innostukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "innostukset" },
          { label: "Partitiivi", form: "innostuksia" },
          { label: "Genetiivi", form: "innostuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "innostua",
      en: "to get excited, become enthusiastic",
      taso: "B1",
      esim: { fi: "Innostuin heti ideasta.", en: "I got excited about the idea right away." },
    },
    {
      fi: "innostaa",
      en: "to inspire, encourage",
      taso: "B2",
      esim: { fi: "Opettaja innosti oppilaita.", en: "The teacher inspired the pupils." },
    },
    {
      fi: "innokas",
      en: "eager, enthusiastic",
      taso: "B2",
      esim: { fi: "Hän on innokas oppimaan.", en: "She is eager to learn." },
    },
  ],
  synonyymit: [
    { fi: "into", en: "zeal, eagerness" },
    { fi: "kiinnostus", en: "interest" },
  ],
  esimerkit: {
    A2: { fi: "Lapset olivat täynnä innostusta.", en: "The children were full of enthusiasm." },
    B1: { fi: "Hänen innostuksensa tarttui muihin.", en: "Her enthusiasm spread to others." },
    B2: {
      fi: "Alun innostuksen jälkeen projektin into hiipui vähitellen.",
      en: "After the initial enthusiasm, the project's zeal gradually faded.",
    },
  },
  updatedAt: "2026-06-07",
};

export default innostus;
