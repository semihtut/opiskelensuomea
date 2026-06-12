import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem kestävä-. Participle of kestää.
// Genitive kestävän, partitive kestävää, partitive pl kestäviä.
const kestava: Word = {
  fi: "kestävä",
  slug: "kestävä",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "B1",
  en: "durable, lasting; sustainable",
  selitys:
    "Pitkään kestävä tai ympäristön kannalta kestävä: 'kestävä kehitys'. Tyyppi 10/koira, ei astevaihtelua. Verbin kestää partisiippi. Vrt. kestää, kestävyys, kestävä kehitys.",
  kuva: { alt: "kestävä – pitkään kestävä, ympäristön kannalta kestävä" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua (vartalo kestävä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kestävän", merkitys: "of durable" },
      { sija: "partitiivi (yks.)", muoto: "kestävää", merkitys: "durable (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kestäviä", merkitys: "durable (partitive pl.)" },
    ],
    huom:
      "Verbin kestää partisiippi, käytetään adjektiivina. Partitiivin monikko kestäviä. 'Kestävä kehitys' = sustainable development. Vrt. kestää = to last/endure, kestävyys = durability.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kestävä" },
          { label: "Partitiivi", form: "kestävää" },
          { label: "Genetiivi", form: "kestävän" },
          { label: "Inessiivi", form: "kestävässä" },
          { label: "Elatiivi", form: "kestävästä" },
          { label: "Illatiivi", form: "kestävään" },
          { label: "Adessiivi", form: "kestävällä" },
          { label: "Allatiivi", form: "kestävälle" },
          { label: "Translatiivi", form: "kestäväksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kestävät" },
          { label: "Partitiivi", form: "kestäviä" },
          { label: "Genetiivi", form: "kestävien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "kestävä" },
          { label: "Komparatiivi", form: "kestävämpi" },
          { label: "Superlatiivi", form: "kestävin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kestää",
      en: "to last, endure",
      taso: "B1",
      esim: { fi: "Matka kestää tunnin.", en: "The trip lasts an hour." },
    },
    {
      fi: "kestävyys",
      en: "durability, endurance, sustainability",
      taso: "B2",
      esim: { fi: "Materiaalin kestävyys on hyvä.", en: "The material's durability is good." },
    },
  ],
  synonyymit: [
    { fi: "pitkäikäinen", en: "long-lasting" },
    { fi: "luja", en: "sturdy" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on kestävä takki.", en: "This is a durable jacket." },
    B1: { fi: "Pyrimme kestäviin ratkaisuihin.", en: "We aim for sustainable solutions." },
    B2: {
      fi: "Kestävä kehitys ottaa huomioon tulevien sukupolvien tarpeet.",
      en: "Sustainable development takes future generations' needs into account.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kestava;
