import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 52/sanoa (verb type 1), pp:p gradation,
// stem loppu-. Present lopun, past lopuin/loppui, past participle loppunut.
const loppua: Word = {
  fi: "loppua",
  slug: "loppua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to end; to run out",
  selitys:
    "Tulla loppuun; ehtyä (esim. raha loppuu). Tyyppi 1, astevaihtelu pp:p (loppu- → lopu-). Intransitiivinen; vastakohta alkaa.",
  kuva: { emoji: "🔴", alt: "loppua – jokin loppuu" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua); astevaihtelu pp:p (loppu- → lopu-)",
    muodot: [
      { sija: "preesens (se)", muoto: "loppuu", merkitys: "it ends" },
      { sija: "imperfekti (se)", muoto: "loppui", merkitys: "it ended" },
      { sija: "kielto (se)", muoto: "ei lopu", merkitys: "it doesn't end" },
    ],
    huom:
      "Heikossa asteessa pp → p: lopun, loput, lopuin (mutta loppuu, loppuvat, loppui, loppunut). Intransitiivinen: 'Raha loppui.' Vrt. lopettaa (= end something).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "lopun" },
          { label: "sinä", form: "lovut" },
          { label: "hän/se", form: "loppuu" },
          { label: "me", form: "lopumme" },
          { label: "te", form: "loputte" },
          { label: "he/ne", form: "loppuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en lopu" },
          { label: "sinä", form: "et lopu" },
          { label: "hän/se", form: "ei lopu" },
          { label: "me", form: "emme lopu" },
          { label: "te", form: "ette lopu" },
          { label: "he/ne", form: "eivät lopu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "lopuin" },
          { label: "sinä", form: "lopuit" },
          { label: "hän/se", form: "loppui" },
          { label: "me", form: "lopuimme" },
          { label: "te", form: "lopuitte" },
          { label: "he/ne", form: "loppuivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en loppunut" },
          { label: "hän/se", form: "ei loppunut" },
          { label: "he/ne", form: "eivät loppuneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen loppunut" },
          { label: "hän/se", form: "on loppunut" },
          { label: "he/ne", form: "ovat loppuneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole loppunut" },
          { label: "hän/se", form: "ei ole loppunut" },
          { label: "he/ne", form: "eivät ole loppuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "lopu!" },
          { label: "te", form: "loppukaa!" },
          { label: "kielto (sinä)", form: "älä lopu" },
          { label: "kielto (te)", form: "älkää loppuko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "loppu",
      en: "end",
      taso: "A2",
      esim: { fi: "Tarina sai onnellisen lopun.", en: "The story had a happy ending." },
    },
    {
      fi: "lopettaa",
      en: "to finish/stop (something)",
      taso: "A2",
      esim: { fi: "Lopetin työni kello viisi.", en: "I finished my work at five." },
    },
    {
      fi: "lopulta",
      en: "in the end, finally",
      taso: "B1",
      esim: { fi: "Lopulta kaikki järjestyi.", en: "In the end everything worked out." },
    },
  ],
  synonyymit: [
    { fi: "päättyä", en: "to come to an end" },
    { fi: "ehtyä", en: "to run dry, be depleted" },
  ],
  esimerkit: {
    A2: { fi: "Maito loppui jääkaapista.", en: "The milk ran out in the fridge." },
    B1: { fi: "Elokuva loppui surullisesti.", en: "The movie ended sadly." },
    B2: {
      fi: "Kun raha loppui, jouduimme keskeyttämään matkan.",
      en: "When the money ran out, we had to cut the trip short.",
    },
  },
  updatedAt: "2026-06-05",
};

export default loppua;
