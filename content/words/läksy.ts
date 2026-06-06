import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem läksy-.
// Genitive läksyn, partitive läksyä, illative läksyyn, partitive pl läksyjä.
const läksy: Word = {
  fi: "läksy",
  slug: "läksy",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "homework, lesson (to study)",
  selitys:
    "Kotitehtävä, jonka opettaja antaa: 'tehdä läksyt'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko läksyjä. Usein monikossa läksyt. Synonyymi kotitehtävä; arkikielessä myös 'läksyt'.",
  kuva: { emoji: "📒", alt: "läksy – opettajan antama kotitehtävä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "läksyn", merkitys: "of the homework" },
      { sija: "partitiivi (yks.)", muoto: "läksyä", merkitys: "homework (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "läksyjä", merkitys: "homework tasks (partitive pl.)" },
    ],
    huom:
      "Usein monikossa: 'tehdä läksyt' = to do one's homework. Tyyppi 1, ei astevaihtelua. Synonyymi kotitehtävä. Vrt. läksyttää = to scold (eri merkitys).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "läksy" },
          { label: "Partitiivi", form: "läksyä" },
          { label: "Genetiivi", form: "läksyn" },
          { label: "Inessiivi", form: "läksyssä" },
          { label: "Elatiivi", form: "läksystä" },
          { label: "Illatiivi", form: "läksyyn" },
          { label: "Adessiivi", form: "läksyllä" },
          { label: "Ablatiivi", form: "läksyltä" },
          { label: "Allatiivi", form: "läksylle" },
          { label: "Essiivi", form: "läksynä" },
          { label: "Translatiivi", form: "läksyksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "läksyt" },
          { label: "Partitiivi", form: "läksyjä" },
          { label: "Genetiivi", form: "läksyjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kotitehtävä",
      en: "homework assignment",
      taso: "A2",
      esim: { fi: "Opettaja antoi kotitehtäviä.", en: "The teacher gave homework." },
    },
    {
      fi: "läksykirja",
      en: "exercise/lesson book",
      taso: "B2",
      esim: { fi: "Avaa läksykirja sivulta kymmenen.", en: "Open the lesson book at page ten." },
    },
    {
      fi: "läksyttää",
      en: "to scold, lecture",
      taso: "B2",
      esim: { fi: "Äiti läksytti lasta myöhästymisestä.", en: "The mother scolded the child for being late." },
    },
  ],
  synonyymit: [
    { fi: "kotitehtävä", en: "homework" },
    { fi: "tehtävä", en: "task, assignment" },
  ],
  esimerkit: {
    A2: { fi: "Teen läksyt heti koulun jälkeen.", en: "I do my homework right after school." },
    B1: { fi: "Unohdin läksyt kotiin.", en: "I forgot my homework at home." },
    B2: {
      fi: "Säännöllinen läksyjen tekeminen helpottaa kokeisiin valmistautumista.",
      en: "Doing homework regularly makes preparing for exams easier.",
    },
  },
  updatedAt: "2026-06-06",
};

export default läksy;
