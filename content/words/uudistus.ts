import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem uudistukse-.
// Genitive uudistuksen, partitive uudistusta, partitive pl uudistuksia.
const uudistus: Word = {
  fi: "uudistus",
  slug: "uudistus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B2",
  en: "reform, renewal",
  selitys:
    "Muutos, jolla jokin uudistetaan tai nykyaikaistetaan: 'koulutuksen uudistus'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä uudistaa. Vrt. uudistaa, uudistua, muutos.",
  kuva: { emoji: "🆕", alt: "uudistus – muutos jolla jokin uudistetaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo uudistukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "uudistuksen", merkitys: "of the reform" },
      { sija: "partitiivi (yks.)", muoto: "uudistusta", merkitys: "reform (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "uudistuksia", merkitys: "reforms (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Johdettu verbistä uudistaa. Usein yhteiskunnallinen tai hallinnollinen muutos. Vrt. muutos = change, uudistaa = to reform.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "uudistus" },
          { label: "Partitiivi", form: "uudistusta" },
          { label: "Genetiivi", form: "uudistuksen" },
          { label: "Inessiivi", form: "uudistuksessa" },
          { label: "Elatiivi", form: "uudistuksesta" },
          { label: "Illatiivi", form: "uudistukseen" },
          { label: "Adessiivi", form: "uudistuksella" },
          { label: "Ablatiivi", form: "uudistukselta" },
          { label: "Allatiivi", form: "uudistukselle" },
          { label: "Essiivi", form: "uudistuksena" },
          { label: "Translatiivi", form: "uudistukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "uudistukset" },
          { label: "Partitiivi", form: "uudistuksia" },
          { label: "Genetiivi", form: "uudistuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "uudistaa",
      en: "to reform, renew",
      taso: "B2",
      esim: { fi: "Järjestelmää uudistetaan.", en: "The system is being reformed." },
    },
    {
      fi: "verouudistus",
      en: "tax reform",
      taso: "B2",
      esim: { fi: "Verouudistus herätti keskustelua.", en: "The tax reform sparked debate." },
    },
  ],
  synonyymit: [
    { fi: "muutos", en: "change" },
    { fi: "remontti", en: "overhaul, renovation" },
  ],
  esimerkit: {
    A2: { fi: "Koulussa tehtiin iso uudistus.", en: "A big reform was made at the school." },
    B1: { fi: "Uudistus paransi palvelua.", en: "The reform improved the service." },
    B2: {
      fi: "Laajat uudistukset herättävät usein sekä toiveita että pelkoja.",
      en: "Broad reforms often arouse both hopes and fears.",
    },
  },
  updatedAt: "2026-06-07",
};

export default uudistus;
