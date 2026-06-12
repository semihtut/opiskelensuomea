import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 61/sallia (verb type 1), pp:p gradation,
// stem oppi-. Present opin (pp:p), past opin/oppi, past participle oppinut/oppineet.
const oppia: Word = {
  fi: "oppia",
  slug: "oppia",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to learn",
  selitys:
    "Saavuttaa tieto tai taito. Tyyppi 1, astevaihtelu pp:p (oppi- → opi-). Vrt. opiskella (= study, prosessi) ja opettaa (= teach).",
  kuva: { alt: "oppia – oivallus ja oppiminen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-a); astevaihtelu pp:p (oppi- → opi-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "opin", merkitys: "I learn" },
      { sija: "imperfekti (minä)", muoto: "opin", merkitys: "I learned" },
      { sija: "kielto (minä)", muoto: "en opi", merkitys: "I don't learn" },
    ],
    huom:
      "Astevaihtelu pp:p heikossa asteessa: opin, opit, opimme (mutta oppii, oppivat). Preesensin ja imperfektin yksikön 1. persoona ovat samannäköiset (opin).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "opin" },
          { label: "sinä", form: "opit" },
          { label: "hän", form: "oppii" },
          { label: "me", form: "opimme" },
          { label: "te", form: "opitte" },
          { label: "he", form: "oppivat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en opi" },
          { label: "sinä", form: "et opi" },
          { label: "hän", form: "ei opi" },
          { label: "me", form: "emme opi" },
          { label: "te", form: "ette opi" },
          { label: "he", form: "eivät opi" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "opin" },
          { label: "sinä", form: "opit" },
          { label: "hän", form: "oppi" },
          { label: "me", form: "opimme" },
          { label: "te", form: "opitte" },
          { label: "he", form: "oppivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en oppinut" },
          { label: "sinä", form: "et oppinut" },
          { label: "hän", form: "ei oppinut" },
          { label: "me", form: "emme oppineet" },
          { label: "te", form: "ette oppineet" },
          { label: "he", form: "eivät oppineet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen oppinut" },
          { label: "sinä", form: "olet oppinut" },
          { label: "hän", form: "on oppinut" },
          { label: "me", form: "olemme oppineet" },
          { label: "te", form: "olette oppineet" },
          { label: "he", form: "ovat oppineet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole oppinut" },
          { label: "hän", form: "ei ole oppinut" },
          { label: "he", form: "eivät ole oppineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "opi!" },
          { label: "te", form: "oppikaa!" },
          { label: "kielto (sinä)", form: "älä opi" },
          { label: "kielto (te)", form: "älkää oppiko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "oppiminen",
      en: "learning (the process)",
      taso: "B1",
      esim: { fi: "Kielten oppiminen vaatii toistoa.", en: "Learning languages requires repetition." },
    },
    {
      fi: "oppi",
      en: "doctrine, teaching; lesson",
      taso: "B1",
      esim: { fi: "Otin opikseni virheestä.", en: "I learned my lesson from the mistake." },
    },
    {
      fi: "oppimäärä",
      en: "syllabus, course of study",
      taso: "B2",
      esim: { fi: "Suoritin koko oppimäärän.", en: "I completed the entire syllabus." },
    },
  ],
  synonyymit: [
    { fi: "omaksua", en: "to assimilate, take in" },
    { fi: "opetella", en: "to learn (by practice)" },
  ],
  esimerkit: {
    A2: { fi: "Opin uusia sanoja joka päivä.", en: "I learn new words every day." },
    B1: { fi: "Opin ajamaan autoa viime kesänä.", en: "I learned to drive a car last summer." },
    B2: {
      fi: "Olen oppinut, ettei kaikkea kannata ottaa vakavasti.",
      en: "I have learned that not everything is worth taking seriously.",
    },
  },
  updatedAt: "2026-06-04",
};

export default oppia;
