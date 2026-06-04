import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 64/juoda (verb type 2, -dä), no gradation.
// Imperfect has a vowel change: syön → söin. Past participle syönyt.
const syödä: Word = {
  fi: "syödä",
  slug: "syödä",
  pos: "verbi (tyyppi 2, -dä)",
  posClass: "verbi",
  level: "A1",
  en: "to eat",
  selitys:
    "Nauttia ruokaa. Tyyppi 2 (-dä), vartalo syö-. Imperfektissä vokaalimuutos: syön → söin.",
  kuva: { emoji: "🍽️", alt: "syödä – ruokailuvälineet ja lautanen" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-dä); vartalo syö-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "syön", merkitys: "I eat" },
      { sija: "imperfekti (minä)", muoto: "söin", merkitys: "I ate" },
      { sija: "kielto (minä)", muoto: "en syö", merkitys: "I don't eat" },
    ],
    huom: "Imperfekti söin (EI *syöin): syö- → söi-. Partisiippi syönyt.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "syön" },
          { label: "sinä", form: "syöt" },
          { label: "hän", form: "syö" },
          { label: "me", form: "syömme" },
          { label: "te", form: "syötte" },
          { label: "he", form: "syövät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en syö" },
          { label: "sinä", form: "et syö" },
          { label: "hän", form: "ei syö" },
          { label: "me", form: "emme syö" },
          { label: "te", form: "ette syö" },
          { label: "he", form: "eivät syö" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "söin" },
          { label: "sinä", form: "söit" },
          { label: "hän", form: "söi" },
          { label: "me", form: "söimme" },
          { label: "te", form: "söitte" },
          { label: "he", form: "söivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en syönyt" },
          { label: "sinä", form: "et syönyt" },
          { label: "hän", form: "ei syönyt" },
          { label: "me", form: "emme syöneet" },
          { label: "te", form: "ette syöneet" },
          { label: "he", form: "eivät syöneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen syönyt" },
          { label: "sinä", form: "olet syönyt" },
          { label: "hän", form: "on syönyt" },
          { label: "me", form: "olemme syöneet" },
          { label: "te", form: "olette syöneet" },
          { label: "he", form: "ovat syöneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole syönyt" },
          { label: "hän", form: "ei ole syönyt" },
          { label: "he", form: "eivät ole syöneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "syö!" },
          { label: "te", form: "syökää!" },
          { label: "kielto (sinä)", form: "älä syö" },
          { label: "kielto (te)", form: "älkää syökö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "syöminen",
      en: "eating",
      taso: "A2",
      esim: { fi: "Hidas syöminen on terveellistä.", en: "Eating slowly is healthy." },
    },
    {
      fi: "syötävä",
      en: "edible",
      taso: "B1",
      esim: { fi: "Onko tämä sieni syötävä?", en: "Is this mushroom edible?" },
    },
    {
      fi: "syöttää",
      en: "to feed",
      taso: "B1",
      esim: { fi: "Äiti syöttää vauvaa.", en: "The mother is feeding the baby." },
    },
  ],
  synonyymit: [
    { fi: "aterioida", en: "to dine (formal)" },
    { fi: "haukata", en: "to take a bite" },
  ],
  esimerkit: {
    A2: { fi: "Syön aamiaista.", en: "I eat breakfast." },
    B1: { fi: "Söin eilen liikaa.", en: "I ate too much yesterday." },
    B2: {
      fi: "Olen jo syönyt, kiitos.",
      en: "I have already eaten, thanks.",
    },
  },
  updatedAt: "2026-06-04",
};

export default syödä;
