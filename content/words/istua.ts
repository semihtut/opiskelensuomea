import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem istu-.
// Present istun, past istuin, past participle istunut.
const istua: Word = {
  fi: "istua",
  slug: "istua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to sit",
  selitys:
    "Olla istuma-asennossa; asettua istumaan. Tyyppi 1, ei astevaihtelua: istua → istun. Vrt. seisoa (seistä pystyssä).",
  kuva: { alt: "istua – henkilö istuu tuolilla" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua); ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "istun", merkitys: "I sit" },
      { sija: "imperfekti (minä)", muoto: "istuin", merkitys: "I sat" },
      { sija: "kielto (minä)", muoto: "en istu", merkitys: "I don't sit" },
    ],
    huom:
      "Istua jossakin (missä?): 'istun tuolilla'. Istua alas / istuutua = to sit down. Vastakohta seisoa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "istun" },
          { label: "sinä", form: "istut" },
          { label: "hän", form: "istuu" },
          { label: "me", form: "istumme" },
          { label: "te", form: "istutte" },
          { label: "he", form: "istuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en istu" },
          { label: "hän", form: "ei istu" },
          { label: "he", form: "eivät istu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "istuin" },
          { label: "sinä", form: "istuit" },
          { label: "hän", form: "istui" },
          { label: "me", form: "istuimme" },
          { label: "te", form: "istuitte" },
          { label: "he", form: "istuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen istunut" },
          { label: "hän", form: "on istunut" },
          { label: "he", form: "ovat istuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "istu!" },
          { label: "te", form: "istukaa!" },
          { label: "kielto (sinä)", form: "älä istu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "istuutua",
      en: "to sit down",
      taso: "B1",
      esim: { fi: "Istuuduin sohvalle.", en: "I sat down on the sofa." },
    },
    {
      fi: "istuin",
      en: "seat",
      taso: "B1",
      esim: { fi: "Auton istuin on mukava.", en: "The car seat is comfortable." },
    },
    {
      fi: "istunto",
      en: "session, sitting",
      taso: "B2",
      esim: { fi: "Eduskunnan istunto alkoi.", en: "The parliament's session began." },
    },
  ],
  synonyymit: [
    { fi: "istahtaa", en: "to sit down for a moment" },
    { fi: "asettua istumaan", en: "to take a seat" },
  ],
  esimerkit: {
    A2: { fi: "Istun keittiössä ja juon kahvia.", en: "I sit in the kitchen and drink coffee." },
    B1: { fi: "Istuimme pitkään ja puhuimme kaikesta.", en: "We sat for a long time and talked about everything." },
    B2: {
      fi: "Hän istui ikkunan ääressä katsellen sateen valumista lasiin.",
      en: "She sat by the window watching the rain run down the glass.",
    },
  },
  updatedAt: "2026-06-05",
};

export default istua;
