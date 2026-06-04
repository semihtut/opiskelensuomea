import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: verb type 1 (-ä), no gradation. Present kysyn,
// 3sg kysyy, imperfect kysyin, past participle kysynyt.
const kysyä: Word = {
  fi: "kysyä",
  slug: "kysyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to ask",
  selitys: "Esittää kysymys saadakseen tietoa. Tyyppi 1, vartalo kysy-, ei astevaihtelua.",
  kuva: { emoji: "❓", alt: "kysyä – kysymysmerkki" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ä); vartalo kysy-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "kysyn", merkitys: "I ask" },
      { sija: "imperfekti (minä)", muoto: "kysyin", merkitys: "I asked" },
      { sija: "kielto (minä)", muoto: "en kysy", merkitys: "I don't ask" },
    ],
    huom: "Asiaa kysytään keneltä-muodolla (ablatiivi): 'kysyn sinulta' = I ask you. 3. persoona: hän kysyy.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kysyn" },
          { label: "sinä", form: "kysyt" },
          { label: "hän", form: "kysyy" },
          { label: "me", form: "kysymme" },
          { label: "te", form: "kysytte" },
          { label: "he", form: "kysyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kysy" },
          { label: "sinä", form: "et kysy" },
          { label: "hän", form: "ei kysy" },
          { label: "me", form: "emme kysy" },
          { label: "te", form: "ette kysy" },
          { label: "he", form: "eivät kysy" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kysyin" },
          { label: "sinä", form: "kysyit" },
          { label: "hän", form: "kysyi" },
          { label: "me", form: "kysyimme" },
          { label: "te", form: "kysyitte" },
          { label: "he", form: "kysyivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en kysynyt" },
          { label: "sinä", form: "et kysynyt" },
          { label: "hän", form: "ei kysynyt" },
          { label: "me", form: "emme kysyneet" },
          { label: "te", form: "ette kysyneet" },
          { label: "he", form: "eivät kysyneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kysynyt" },
          { label: "sinä", form: "olet kysynyt" },
          { label: "hän", form: "on kysynyt" },
          { label: "me", form: "olemme kysyneet" },
          { label: "te", form: "olette kysyneet" },
          { label: "he", form: "ovat kysyneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole kysynyt" },
          { label: "hän", form: "ei ole kysynyt" },
          { label: "he", form: "eivät ole kysyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kysy!" },
          { label: "te", form: "kysykää!" },
          { label: "kielto (sinä)", form: "älä kysy" },
          { label: "kielto (te)", form: "älkää kysykö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kysymys",
      en: "question",
      taso: "A2",
      esim: { fi: "Saanko esittää kysymyksen?", en: "May I ask a question?" },
    },
    {
      fi: "kysely",
      en: "survey, inquiry",
      taso: "B1",
      esim: { fi: "Vastasin asiakaskyselyyn.", en: "I answered the customer survey." },
    },
    {
      fi: "kyseenalainen",
      en: "questionable, dubious",
      taso: "B2",
      esim: { fi: "Hänen motiivinsa olivat kyseenalaisia.", en: "His motives were questionable." },
    },
  ],
  synonyymit: [
    { fi: "tiedustella", en: "to inquire" },
    { fi: "udella", en: "to pry, ask nosily" },
  ],
  esimerkit: {
    A2: { fi: "Kysyn opettajalta apua.", en: "I ask the teacher for help." },
    B1: { fi: "Kysyin tietä ohikulkijalta.", en: "I asked a passer-by for directions." },
    B2: {
      fi: "Hän kysyi, olisinko valmis vaihtamaan työpaikkaa.",
      en: "She asked whether I would be willing to change jobs.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kysyä;
