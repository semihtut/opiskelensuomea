import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem sovellukse-.
// Genitive sovelluksen, partitive sovellusta, partitive pl sovelluksia.
const sovellus: Word = {
  fi: "sovellus",
  slug: "sovellus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "application, app",
  selitys:
    "Tietokoneen tai puhelimen ohjelma; myös käytäntöön soveltaminen: 'ladata sovellus'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä soveltaa. Vrt. ohjelma, soveltaa, sovelluskauppa.",
  kuva: { emoji: "📱", alt: "sovellus – puhelimen tai tietokoneen ohjelma" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo sovellukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sovelluksen", merkitys: "of the app" },
      { sija: "partitiivi (yks.)", muoto: "sovellusta", merkitys: "app (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sovelluksia", merkitys: "apps (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Johdettu verbistä soveltaa. Merkitykset: ohjelma (app) ja soveltaminen (application). Vrt. ohjelma = program.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sovellus" },
          { label: "Partitiivi", form: "sovellusta" },
          { label: "Genetiivi", form: "sovelluksen" },
          { label: "Inessiivi", form: "sovelluksessa" },
          { label: "Elatiivi", form: "sovelluksesta" },
          { label: "Illatiivi", form: "sovellukseen" },
          { label: "Adessiivi", form: "sovelluksella" },
          { label: "Ablatiivi", form: "sovellukselta" },
          { label: "Allatiivi", form: "sovellukselle" },
          { label: "Essiivi", form: "sovelluksena" },
          { label: "Translatiivi", form: "sovellukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sovellukset" },
          { label: "Partitiivi", form: "sovelluksia" },
          { label: "Genetiivi", form: "sovelluksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "soveltaa",
      en: "to apply, adapt",
      taso: "B2",
      esim: { fi: "Sovellan teoriaa käytäntöön.", en: "I apply theory to practice." },
    },
    {
      fi: "sovelluskauppa",
      en: "app store",
      taso: "B2",
      esim: { fi: "Latasin sen sovelluskaupasta.", en: "I downloaded it from the app store." },
    },
  ],
  synonyymit: [
    { fi: "ohjelma", en: "program" },
    { fi: "appi", en: "app (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Lataan uuden sovelluksen.", en: "I'll download a new app." },
    B1: { fi: "Tämä sovellus on ilmainen.", en: "This app is free." },
    B2: {
      fi: "Uusi sovellus helpottaa joukkoliikenteen käyttöä huomattavasti.",
      en: "The new app makes using public transport considerably easier.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sovellus;
