import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem luottamukse-.
// Genitive luottamuksen, partitive luottamusta, partitive pl luottamuksia.
const luottamus: Word = {
  fi: "luottamus",
  slug: "luottamus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "trust, confidence",
  selitys:
    "Usko siihen, että joku tai jokin on luotettava: 'rakentaa luottamus'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä luottaa. Vrt. luottaa, luottamuksellinen, epäluottamus.",
  kuva: { emoji: "🤝", alt: "luottamus – usko siihen että joku on luotettava" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo luottamukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "luottamuksen", merkitys: "of the trust" },
      { sija: "partitiivi (yks.)", muoto: "luottamusta", merkitys: "trust (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "luottamuksia", merkitys: "trusts (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta. Johdettu verbistä luottaa. Yleensä yksikössä. 'Nauttia luottamusta' = to enjoy trust; 'menettää luottamus' = to lose trust. Vastakohta epäluottamus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "luottamus" },
          { label: "Partitiivi", form: "luottamusta" },
          { label: "Genetiivi", form: "luottamuksen" },
          { label: "Inessiivi", form: "luottamuksessa" },
          { label: "Elatiivi", form: "luottamuksesta" },
          { label: "Illatiivi", form: "luottamukseen" },
          { label: "Adessiivi", form: "luottamuksella" },
          { label: "Ablatiivi", form: "luottamukselta" },
          { label: "Allatiivi", form: "luottamukselle" },
          { label: "Essiivi", form: "luottamuksena" },
          { label: "Translatiivi", form: "luottamukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "luottamukset" },
          { label: "Partitiivi", form: "luottamuksia" },
          { label: "Genetiivi", form: "luottamuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luottaa",
      en: "to trust",
      taso: "B1",
      esim: { fi: "Luotan häneen täysin.", en: "I trust him completely." },
    },
    {
      fi: "epäluottamus",
      en: "distrust, mistrust",
      taso: "B2",
      esim: { fi: "Hallitus sai epäluottamuslauseen.", en: "The government received a vote of no confidence." },
    },
    {
      fi: "luottamuksellinen",
      en: "confidential",
      taso: "B2",
      esim: { fi: "Tiedot ovat luottamuksellisia.", en: "The information is confidential." },
    },
  ],
  synonyymit: [
    { fi: "usko", en: "faith, belief" },
    { fi: "varmuus", en: "certainty, confidence" },
  ],
  esimerkit: {
    A2: { fi: "Luottamus on tärkeää ystävyydessä.", en: "Trust is important in friendship." },
    B1: { fi: "Hän menetti minun luottamukseni.", en: "He lost my trust." },
    B2: {
      fi: "Luottamuksen rakentaminen vie aikaa, mutta sen voi menettää hetkessä.",
      en: "Building trust takes time, but it can be lost in a moment.",
    },
  },
  updatedAt: "2026-06-07",
};

export default luottamus;
