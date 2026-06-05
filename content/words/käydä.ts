import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: verb type 2 (-dä), no gradation, stem käy-. Past
// stem is käv-: present käyn, past kävin/kävi, past participle käynyt/käyneet.
const kayda: Word = {
  fi: "käydä",
  slug: "käydä",
  pos: "verbi (tyyppi 2)",
  posClass: "verbi",
  level: "A1",
  en: "to visit, go (and return); to work/fit",
  selitys:
    "Käydä jossakin (mennä ja palata); myös 'käydä' = sopia/toimia. Tyyppi 2 (-dä), ei astevaihtelua. Imperfektissä vartalo on käv- (kävin). Vrt. mennä (ei palaamista).",
  kuva: { emoji: "🚪", alt: "käydä – pistäytyminen jossakin" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-dä); vartalo käy-, imperfektissä käv-",
    muodot: [
      { sija: "preesens (minä)", muoto: "käyn", merkitys: "I visit" },
      { sija: "imperfekti (minä)", muoto: "kävin", merkitys: "I visited" },
      { sija: "kielto (minä)", muoto: "en käy", merkitys: "I don't visit" },
    ],
    huom:
      "Imperfektissä y → v: kävin, kävit, kävi. Suunta usein illatiivissa/adessiivissa: 'Käyn kaupassa.' (go to the shop and back). Myös: 'Tämä avain käy lukkoon.' = this key fits.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "käyn" },
          { label: "sinä", form: "käyt" },
          { label: "hän", form: "käy" },
          { label: "me", form: "käymme" },
          { label: "te", form: "käytte" },
          { label: "he", form: "käyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en käy" },
          { label: "sinä", form: "et käy" },
          { label: "hän", form: "ei käy" },
          { label: "me", form: "emme käy" },
          { label: "te", form: "ette käy" },
          { label: "he", form: "eivät käy" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kävin" },
          { label: "sinä", form: "kävit" },
          { label: "hän", form: "kävi" },
          { label: "me", form: "kävimme" },
          { label: "te", form: "kävitte" },
          { label: "he", form: "kävivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en käynyt" },
          { label: "sinä", form: "et käynyt" },
          { label: "hän", form: "ei käynyt" },
          { label: "me", form: "emme käyneet" },
          { label: "te", form: "ette käyneet" },
          { label: "he", form: "eivät käyneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen käynyt" },
          { label: "sinä", form: "olet käynyt" },
          { label: "hän", form: "on käynyt" },
          { label: "me", form: "olemme käyneet" },
          { label: "te", form: "olette käyneet" },
          { label: "he", form: "ovat käyneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole käynyt" },
          { label: "hän", form: "ei ole käynyt" },
          { label: "he", form: "eivät ole käyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "käy!" },
          { label: "te", form: "käykää!" },
          { label: "kielto (sinä)", form: "älä käy" },
          { label: "kielto (te)", form: "älkää käykö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käynti",
      en: "visit",
      taso: "B1",
      esim: { fi: "Lääkärikäynti kesti tunnin.", en: "The doctor's visit lasted an hour." },
    },
    {
      fi: "käyttää",
      en: "to use (related root)",
      taso: "A2",
      esim: { fi: "Käytän bussia joka päivä.", en: "I use the bus every day." },
    },
    {
      fi: "käydä kauppaa",
      en: "to trade, do business",
      taso: "B2",
      esim: { fi: "Yritys käy kauppaa ulkomaille.", en: "The company trades abroad." },
    },
  ],
  synonyymit: [
    { fi: "vierailla", en: "to visit (more formal)" },
    { fi: "poiketa", en: "to drop by" },
  ],
  esimerkit: {
    A2: { fi: "Käyn kaupassa joka päivä.", en: "I go to the shop every day." },
    B1: { fi: "Kävin eilen ystäväni luona.", en: "Yesterday I visited my friend's place." },
    B2: {
      fi: "Oletko koskaan käynyt Lapissa talvella?",
      en: "Have you ever been to Lapland in winter?",
    },
  },
  updatedAt: "2026-06-05",
};

export default kayda;
