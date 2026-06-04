import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: stem teke- (teen, tekee, tein, teki) but teh- in
// the participle/imperative/passive (tehnyt, tehneet, tehkää). Irregular.
const tehdä: Word = {
  fi: "tehdä",
  slug: "tehdä",
  pos: "verbi (epäsäännöllinen)",
  posClass: "verbi",
  level: "A1",
  en: "to do, to make",
  selitys:
    "Yleisverbi toiminnalle ja valmistamiselle. Epäsäännöllinen: taivutusvartalo on teke-, mutta NUT-partisiippi ja imperatiivi käyttävät teh-vartaloa.",
  kuva: { emoji: "🔨", alt: "tehdä – vasara (tekeminen)" },

  kielioppi: {
    tyyppi: "epäsäännöllinen (tehdä–nähdä-tyyppi); vartalot teke- / teh-",
    muodot: [
      { sija: "preesens (minä)", muoto: "teen", merkitys: "I do / make" },
      { sija: "preesens (hän)", muoto: "tekee", merkitys: "(s)he does / makes" },
      { sija: "imperfekti (minä)", muoto: "tein", merkitys: "I did / made" },
      { sija: "kielto (minä)", muoto: "en tee", merkitys: "I don't do / make" },
    ],
    huom:
      "Epäsäännöllinen: preesens ja imperfekti vartalosta teke- (teen, tekee, tein, teki), mutta NUT-partisiippi tehnyt/tehneet ja imperatiivi tehkää vartalosta teh-.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "teen" },
          { label: "sinä", form: "teet" },
          { label: "hän", form: "tekee" },
          { label: "me", form: "teemme" },
          { label: "te", form: "teette" },
          { label: "he", form: "tekevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tee" },
          { label: "sinä", form: "et tee" },
          { label: "hän", form: "ei tee" },
          { label: "me", form: "emme tee" },
          { label: "te", form: "ette tee" },
          { label: "he", form: "eivät tee" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tein" },
          { label: "sinä", form: "teit" },
          { label: "hän", form: "teki" },
          { label: "me", form: "teimme" },
          { label: "te", form: "teitte" },
          { label: "he", form: "tekivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en tehnyt" },
          { label: "sinä", form: "et tehnyt" },
          { label: "hän", form: "ei tehnyt" },
          { label: "me", form: "emme tehneet" },
          { label: "te", form: "ette tehneet" },
          { label: "he", form: "eivät tehneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tehnyt" },
          { label: "sinä", form: "olet tehnyt" },
          { label: "hän", form: "on tehnyt" },
          { label: "me", form: "olemme tehneet" },
          { label: "te", form: "olette tehneet" },
          { label: "he", form: "ovat tehneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole tehnyt" },
          { label: "hän", form: "ei ole tehnyt" },
          { label: "he", form: "eivät ole tehneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tee!" },
          { label: "te", form: "tehkää!" },
          { label: "kielto (sinä)", form: "älä tee" },
          { label: "kielto (te)", form: "älkää tehkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tekeminen",
      en: "doing, making; an activity",
      taso: "A2",
      esim: { fi: "Pidän käsillä tekemisestä.", en: "I like making things with my hands." },
    },
    {
      fi: "tekijä",
      en: "doer, author; factor",
      taso: "B1",
      esim: { fi: "Kuka on tämän teoksen tekijä?", en: "Who is the author of this work?" },
    },
    {
      fi: "teko",
      en: "act, deed",
      taso: "A2",
      esim: { fi: "Se oli rohkea teko.", en: "That was a brave deed." },
    },
  ],
  synonyymit: [
    { fi: "valmistaa", en: "to make, manufacture" },
    { fi: "suorittaa", en: "to perform, carry out" },
  ],
  esimerkit: {
    A2: { fi: "Mitä sinä teet?", en: "What are you doing?" },
    B1: { fi: "Teimme kotitehtävät yhdessä.", en: "We did the homework together." },
    B2: { fi: "Olisit voinut tehdä sen toisin.", en: "You could have done it differently." },
  },
  updatedAt: "2026-06-04",
};

export default tehdä;
