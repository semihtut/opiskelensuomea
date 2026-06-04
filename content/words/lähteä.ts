import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: verb type 1 (Kotus 60), t:d gradation, stem lähte-.
// Present lähden, past lähdin/lähti, past participle lähtenyt/lähteneet.
const lahtea: Word = {
  fi: "lähteä",
  slug: "lähteä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to leave, set off, depart",
  selitys:
    "Lähteä pois jostakin paikasta; aloittaa matka. Tyyppi 1, vartalo lähte-, astevaihtelu t:d (lähden). Lähtökohta usein elatiivissa.",
  kuva: { emoji: "🚪", alt: "lähteä – ihminen lähdössä ovesta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-eä); t:d-astevaihtelu (lähte- → lähde-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "lähden", merkitys: "I leave" },
      { sija: "imperfekti (minä)", muoto: "lähdin", merkitys: "I left" },
      { sija: "kielto (minä)", muoto: "en lähde", merkitys: "I don't leave" },
    ],
    huom:
      "Astevaihtelu t:d näkyy vahvoissa persoonamuodoissa: lähden, lähdet (mutta lähtee, lähtevät). Suunta illatiivissa: 'Lähden Suomeen.'",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "lähden" },
          { label: "sinä", form: "lähdet" },
          { label: "hän", form: "lähtee" },
          { label: "me", form: "lähdemme" },
          { label: "te", form: "lähdette" },
          { label: "he", form: "lähtevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en lähde" },
          { label: "sinä", form: "et lähde" },
          { label: "hän", form: "ei lähde" },
          { label: "me", form: "emme lähde" },
          { label: "te", form: "ette lähde" },
          { label: "he", form: "eivät lähde" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "lähdin" },
          { label: "sinä", form: "lähdit" },
          { label: "hän", form: "lähti" },
          { label: "me", form: "lähdimme" },
          { label: "te", form: "lähditte" },
          { label: "he", form: "lähtivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en lähtenyt" },
          { label: "sinä", form: "et lähtenyt" },
          { label: "hän", form: "ei lähtenyt" },
          { label: "me", form: "emme lähteneet" },
          { label: "te", form: "ette lähteneet" },
          { label: "he", form: "eivät lähteneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen lähtenyt" },
          { label: "sinä", form: "olet lähtenyt" },
          { label: "hän", form: "on lähtenyt" },
          { label: "me", form: "olemme lähteneet" },
          { label: "te", form: "olette lähteneet" },
          { label: "he", form: "ovat lähteneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole lähtenyt" },
          { label: "hän", form: "ei ole lähtenyt" },
          { label: "he", form: "eivät ole lähteneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "lähde!" },
          { label: "te", form: "lähtekää!" },
          { label: "kielto (sinä)", form: "älä lähde" },
          { label: "kielto (te)", form: "älkää lähtekö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lähtö",
      en: "departure",
      taso: "A2",
      esim: { fi: "Lähtö on kello kuusi.", en: "Departure is at six o'clock." },
    },
    {
      fi: "lähtökohta",
      en: "starting point, premise",
      taso: "B2",
      esim: { fi: "Otetaan tämä lähtökohdaksi.", en: "Let's take this as the starting point." },
    },
    {
      fi: "poislähtö",
      en: "leaving, going away",
      taso: "B1",
      esim: { fi: "Poislähtö oli haikea.", en: "The leaving was bittersweet." },
    },
  ],
  synonyymit: [
    { fi: "poistua", en: "to exit, depart" },
    { fi: "mennä", en: "to go" },
  ],
  esimerkit: {
    A2: { fi: "Lähden nyt kotiin.", en: "I'm leaving for home now." },
    B1: { fi: "Lähdimme aikaisin aamulla.", en: "We set off early in the morning." },
    B2: {
      fi: "Juna oli jo lähtenyt, kun pääsimme asemalle.",
      en: "The train had already left when we got to the station.",
    },
  },
  updatedAt: "2026-06-04",
};

export default lahtea;
