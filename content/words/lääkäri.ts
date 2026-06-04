import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 6/paperi, no gradation. Genitive lääkärin,
// partitive lääkäriä, illative lääkäriin, partitive pl lääkäreitä.
const laakari: Word = {
  fi: "lääkäri",
  slug: "lääkäri",
  pos: "substantiivi (tyyppi 6/paperi)",
  posClass: "substantiivi",
  level: "A1",
  en: "doctor, physician",
  selitys:
    "Sairauksia hoitava ammattilainen. Tyyppi 6, ei astevaihtelua. Monikon partitiivi lääkäreitä.",
  kuva: { emoji: "👩‍⚕️", alt: "lääkäri – lääkäri takissaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 6/paperi; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lääkärin", merkitys: "of the doctor" },
      { sija: "partitiivi (yks.)", muoto: "lääkäriä", merkitys: "doctor (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lääkäreitä", merkitys: "doctors (partitive pl.)" },
    ],
    huom:
      "Monikkovartalo lääkärei-: lääkäreitä, lääkäreiden ~ lääkärien. 'Mennä lääkäriin' = go to the doctor; 'olla lääkärissä' = be at the doctor's.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lääkäri" },
          { label: "Partitiivi", form: "lääkäriä" },
          { label: "Genetiivi", form: "lääkärin" },
          { label: "Inessiivi", form: "lääkärissä" },
          { label: "Elatiivi", form: "lääkäristä" },
          { label: "Illatiivi", form: "lääkäriin" },
          { label: "Adessiivi", form: "lääkärillä" },
          { label: "Ablatiivi", form: "lääkäriltä" },
          { label: "Allatiivi", form: "lääkärille" },
          { label: "Essiivi", form: "lääkärinä" },
          { label: "Translatiivi", form: "lääkäriksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lääkärit" },
          { label: "Partitiivi", form: "lääkäreitä" },
          { label: "Genetiivi", form: "lääkäreiden" },
          { label: "Inessiivi", form: "lääkäreissä" },
          { label: "Illatiivi", form: "lääkäreihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lääke",
      en: "medicine, drug",
      taso: "A2",
      esim: { fi: "Otan lääkkeen aamulla.", en: "I take the medicine in the morning." },
    },
    {
      fi: "hammaslääkäri",
      en: "dentist",
      taso: "A2",
      esim: { fi: "Käyn hammaslääkärissä kerran vuodessa.", en: "I visit the dentist once a year." },
    },
    {
      fi: "lääketiede",
      en: "medicine (the science)",
      taso: "B2",
      esim: { fi: "Hän opiskelee lääketiedettä.", en: "She studies medicine." },
    },
  ],
  synonyymit: [
    { fi: "tohtori", en: "doctor (title)" },
    { fi: "lekuri", en: "doc (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Menen lääkäriin huomenna.", en: "I'm going to the doctor tomorrow." },
    B1: { fi: "Lääkäri määräsi minulle lääkettä.", en: "The doctor prescribed me medicine." },
    B2: {
      fi: "Lääkäri kertoi, että minun pitää levätä viikko.",
      en: "The doctor said that I need to rest for a week.",
    },
  },
  updatedAt: "2026-06-04",
};

export default laakari;
