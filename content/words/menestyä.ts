import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem menesty-.
// Present minä menestyn, hän menestyy; imperfect minä menestyin, hän menestyi; NUT menestynyt.
const menestyä: Word = {
  fi: "menestyä",
  slug: "menestyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to succeed, do well, thrive",
  selitys:
    "Onnistua ja pärjätä hyvin jossakin: 'menestyä työssä'. Tyyppi 1 (-yä), ei astevaihtelua; vartalo menesty-. Vrt. menestys (success), menestyvä (successful).",
  kuva: { alt: "menestyä – pärjätä ja onnistua hyvin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä); ei astevaihtelua; vartalo menesty-",
    muodot: [
      { sija: "preesens (minä)", muoto: "menestyn", merkitys: "I succeed" },
      { sija: "imperfekti (minä)", muoto: "menestyin", merkitys: "I succeeded" },
      { sija: "NUT-partisiippi", muoto: "menestynyt", merkitys: "(have) succeeded" },
    ],
    huom:
      "Ei astevaihtelua (st säilyy). Yhteydessä usein inessiivi/elatiivi: 'menestyä opinnoissa', 'menestyä kilpailussa'. Vrt. menestys = success.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "menestyn" },
          { label: "sinä", form: "menestyt" },
          { label: "hän", form: "menestyy" },
          { label: "me", form: "menestymme" },
          { label: "te", form: "menestytte" },
          { label: "he", form: "menestyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en menesty" },
          { label: "hän", form: "ei menesty" },
          { label: "he", form: "eivät menesty" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "menestyin" },
          { label: "sinä", form: "menestyit" },
          { label: "hän", form: "menestyi" },
          { label: "me", form: "menestyimme" },
          { label: "te", form: "menestyitte" },
          { label: "he", form: "menestyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen menestynyt" },
          { label: "hän", form: "on menestynyt" },
          { label: "he", form: "ovat menestyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "menesty!" },
          { label: "te", form: "menestykää!" },
          { label: "kielto (sinä)", form: "älä menesty" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "menestys",
      en: "success",
      taso: "B1",
      esim: { fi: "Toivotan sinulle menestystä!", en: "I wish you success!" },
    },
    {
      fi: "menestyvä",
      en: "successful, thriving",
      taso: "B2",
      esim: { fi: "Hän johtaa menestyvää yritystä.", en: "She runs a successful company." },
    },
    {
      fi: "menestyksekäs",
      en: "successful (of an effort)",
      taso: "B2",
      esim: { fi: "Kampanja oli menestyksekäs.", en: "The campaign was successful." },
    },
  ],
  synonyymit: [
    { fi: "pärjätä", en: "to manage, do well" },
    { fi: "onnistua", en: "to succeed" },
  ],
  esimerkit: {
    A2: { fi: "Toivottavasti menestyt kokeessa.", en: "Hopefully you do well in the exam." },
    B1: { fi: "Yritys menestyi hyvin viime vuonna.", en: "The company did well last year." },
    B2: {
      fi: "Menestyäkseen alalla on jatkuvasti opittava uutta.",
      en: "To succeed in the field, one must constantly learn new things.",
    },
  },
  updatedAt: "2026-06-06",
};

export default menestyä;
