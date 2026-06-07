import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 34/onneton, tt:t gradation, stem laittoma- ~ laiton.
// Genitive laittoman, partitive laitonta, partitive pl laittomia.
const laiton: Word = {
  fi: "laiton",
  slug: "laiton",
  pos: "adjektiivi (tyyppi 34/onneton)",
  posClass: "adjektiivi",
  level: "B1",
  en: "illegal, unlawful",
  selitys:
    "Lain vastainen, kielletty: 'laiton toiminta', 'laiton maahantulo'. Tyyppi 34/onneton, astevaihtelu tt:t (laiton → laittoman). Kieltojohdos laki + -ton. Vastakohta laillinen. Vrt. laki, laillinen, laittomuus.",
  kuva: { emoji: "🚫", alt: "laiton – lain vastainen, kielletty" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 34/onneton; astevaihtelu tt:t (vartalo laittoma-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "laittoman", merkitys: "of the illegal" },
      { sija: "partitiivi (yks.)", muoto: "laitonta", merkitys: "illegal (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "laittomia", merkitys: "illegal (partitive pl.)" },
    ],
    huom:
      "Tyyppi 34 (-ton): nominatiivi laiton (heikko t), vartalo laittoma- vahvistuu (laittoman, laittomalla), partitiivi laitonta. Kieltojohdos laki + -ton. Vastakohta laillinen. Vrt. laittomuus = illegality.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "laiton" },
          { label: "Partitiivi", form: "laitonta" },
          { label: "Genetiivi", form: "laittoman" },
          { label: "Inessiivi", form: "laittomassa" },
          { label: "Elatiivi", form: "laittomasta" },
          { label: "Illatiivi", form: "laittomaan" },
          { label: "Adessiivi", form: "laittomalla" },
          { label: "Allatiivi", form: "laittomalle" },
          { label: "Translatiivi", form: "laittomaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "laittomat" },
          { label: "Partitiivi", form: "laittomia" },
          { label: "Genetiivi", form: "laittomien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "laiton" },
          { label: "Komparatiivi", form: "laittomampi" },
          { label: "Superlatiivi", form: "laittomin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laittomuus",
      en: "illegality, lawlessness",
      taso: "B2",
      esim: { fi: "Toiminnan laittomuus oli ilmeistä.", en: "The illegality of the activity was obvious." },
    },
    {
      fi: "laittomasti",
      en: "illegally",
      taso: "B1",
      esim: { fi: "Auto oli pysäköity laittomasti.", en: "The car was parked illegally." },
    },
  ],
  synonyymit: [
    { fi: "lainvastainen", en: "contrary to law" },
    { fi: "kielletty", en: "forbidden" },
  ],
  esimerkit: {
    A2: { fi: "Se on laitonta.", en: "That is illegal." },
    B1: { fi: "Laiton kopiointi on rikos.", en: "Illegal copying is a crime." },
    B2: {
      fi: "Aineen hallussapito on laitonta ilman erillistä lupaa.",
      en: "Possession of the substance is illegal without a separate permit.",
    },
  },
  updatedAt: "2026-06-07",
};

export default laiton;
