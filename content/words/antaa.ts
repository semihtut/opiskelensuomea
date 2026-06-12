import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 56/kaivaa (verb type 1), nt:nn gradation,
// stem anta-. Present annan (nt:nn), past annoin/antoi, past participle antanut.
const antaa: Word = {
  fi: "antaa",
  slug: "antaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to give; to let, allow",
  selitys:
    "Ojentaa tai luovuttaa jollekulle; myös 'antaa tehdä' = let, allow. Tyyppi 1, astevaihtelu nt:nn (anta- → anna-). Vastaanottaja allatiivissa.",
  kuva: { alt: "antaa – lahjan ojentaminen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu nt:nn (anta- → anna-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "annan", merkitys: "I give" },
      { sija: "imperfekti (minä)", muoto: "annoin", merkitys: "I gave" },
      { sija: "kielto (minä)", muoto: "en anna", merkitys: "I don't give" },
    ],
    huom:
      "Heikossa asteessa nt → nn: annan, annat, annoin (mutta antaa, antavat, antanut). Vastaanottaja allatiivissa: 'Annan sinulle kirjan.' 'Antaa tehdä' = let do.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "annan" },
          { label: "sinä", form: "annat" },
          { label: "hän", form: "antaa" },
          { label: "me", form: "annamme" },
          { label: "te", form: "annatte" },
          { label: "he", form: "antavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en anna" },
          { label: "sinä", form: "et anna" },
          { label: "hän", form: "ei anna" },
          { label: "me", form: "emme anna" },
          { label: "te", form: "ette anna" },
          { label: "he", form: "eivät anna" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "annoin" },
          { label: "sinä", form: "annoit" },
          { label: "hän", form: "antoi" },
          { label: "me", form: "annoimme" },
          { label: "te", form: "annoitte" },
          { label: "he", form: "antoivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en antanut" },
          { label: "sinä", form: "et antanut" },
          { label: "hän", form: "ei antanut" },
          { label: "me", form: "emme antaneet" },
          { label: "te", form: "ette antaneet" },
          { label: "he", form: "eivät antaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen antanut" },
          { label: "sinä", form: "olet antanut" },
          { label: "hän", form: "on antanut" },
          { label: "me", form: "olemme antaneet" },
          { label: "te", form: "olette antaneet" },
          { label: "he", form: "ovat antaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole antanut" },
          { label: "hän", form: "ei ole antanut" },
          { label: "he", form: "eivät ole antaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "anna!" },
          { label: "te", form: "antakaa!" },
          { label: "kielto (sinä)", form: "älä anna" },
          { label: "kielto (te)", form: "älkää antako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "anti",
      en: "offering, what something gives",
      taso: "B2",
      esim: { fi: "Kurssin anti oli suuri.", en: "The course gave a lot." },
    },
    {
      fi: "antaja",
      en: "giver, donor",
      taso: "B1",
      esim: { fi: "Veren antaja sai kiitoksen.", en: "The blood donor received thanks." },
    },
    {
      fi: "antautua",
      en: "to surrender",
      taso: "B2",
      esim: { fi: "Vihollinen antautui.", en: "The enemy surrendered." },
    },
  ],
  synonyymit: [
    { fi: "ojentaa", en: "to hand over" },
    { fi: "luovuttaa", en: "to hand in, give up" },
  ],
  esimerkit: {
    A2: { fi: "Anna minulle vettä, kiitos.", en: "Give me some water, please." },
    B1: { fi: "Annoin hänelle lahjan.", en: "I gave him/her a gift." },
    B2: {
      fi: "Äiti ei antanut lasten katsoa televisiota myöhään.",
      en: "The mother didn't let the children watch TV late.",
    },
  },
  updatedAt: "2026-06-05",
};

export default antaa;
