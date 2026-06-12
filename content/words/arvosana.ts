import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem arvosana-.
// Genitive arvosanan, partitive arvosanaa, partitive pl arvosanoja.
const arvosana: Word = {
  fi: "arvosana",
  slug: "arvosana",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "grade, mark",
  selitys:
    "Numeerinen tai sanallinen arvio suorituksesta koulussa: 'saada hyvä arvosana', 'arvosana 9'. Tyyppi 9/kala, ei astevaihtelua; partitiivin monikko arvosanoja. Yhdyssana arvo + sana. Vrt. arvioida, arvostella, todistus.",
  kuva: { alt: "arvosana – numeerinen tai sanallinen arvio koulusuorituksesta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua (vartalo arvosana-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "arvosanan", merkitys: "of the grade" },
      { sija: "partitiivi (yks.)", muoto: "arvosanaa", merkitys: "grade (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "arvosanoja", merkitys: "grades (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: ei astevaihtelua. Partitiivin monikko arvosanoja (a → o). Yhdyssana arvo + sana. Suomessa kouluarvosanat ovat 4–10. Vrt. arvioida, arvostella.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "arvosana" },
          { label: "Partitiivi", form: "arvosanaa" },
          { label: "Genetiivi", form: "arvosanan" },
          { label: "Inessiivi", form: "arvosanassa" },
          { label: "Elatiivi", form: "arvosanasta" },
          { label: "Illatiivi", form: "arvosanaan" },
          { label: "Adessiivi", form: "arvosanalla" },
          { label: "Ablatiivi", form: "arvosanalta" },
          { label: "Allatiivi", form: "arvosanalle" },
          { label: "Essiivi", form: "arvosanana" },
          { label: "Translatiivi", form: "arvosanaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "arvosanat" },
          { label: "Partitiivi", form: "arvosanoja" },
          { label: "Genetiivi", form: "arvosanojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kouluarvosana",
      en: "school grade",
      taso: "B1",
      esim: { fi: "Sain hyvät kouluarvosanat.", en: "I got good school grades." },
    },
    {
      fi: "arvostella",
      en: "to grade, assess; to criticize",
      taso: "B2",
      esim: { fi: "Opettaja arvostelee kokeet.", en: "The teacher grades the exams." },
    },
  ],
  synonyymit: [
    { fi: "numero", en: "(grade) number" },
  ],
  esimerkit: {
    A2: { fi: "Sain matematiikasta hyvän arvosanan.", en: "I got a good grade in math." },
    B1: { fi: "Arvosana riippuu kokeen tuloksesta.", en: "The grade depends on the exam result." },
    B2: {
      fi: "Loppuarvosana muodostuu sekä tentistä että harjoitustöistä.",
      en: "The final grade is made up of both the exam and the assignments.",
    },
  },
  updatedAt: "2026-06-07",
};

export default arvosana;
