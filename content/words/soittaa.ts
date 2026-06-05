import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 53/muistaa (verb type 1), tt:t gradation,
// stem soitta-. Present soitan (tt:t), past soitin/soitti, past participle soittanut.
const soittaa: Word = {
  fi: "soittaa",
  slug: "soittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to call (phone); to play (an instrument)",
  selitys:
    "1) soittaa puhelimella, 2) soittaa soitinta (play music). Tyyppi 1, astevaihtelu tt:t (soitta- → soita-). Kohde partitiivissa.",
  kuva: { emoji: "📞", alt: "soittaa – puhelimeen soittaminen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu tt:t (soitta- → soita-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "soitan", merkitys: "I call / play" },
      { sija: "imperfekti (minä)", muoto: "soitin", merkitys: "I called / played" },
      { sija: "kielto (minä)", muoto: "en soita", merkitys: "I don't call / play" },
    ],
    huom:
      "Heikossa asteessa tt → t: soitan, soitit, soitin (mutta soittaa, soittavat, soittanut). 'Soittaa jollekulle' = call someone (allatiivi); 'soittaa pianoa' = play the piano (partitiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "soitan" },
          { label: "sinä", form: "soitat" },
          { label: "hän", form: "soittaa" },
          { label: "me", form: "soitamme" },
          { label: "te", form: "soitatte" },
          { label: "he", form: "soittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en soita" },
          { label: "sinä", form: "et soita" },
          { label: "hän", form: "ei soita" },
          { label: "me", form: "emme soita" },
          { label: "te", form: "ette soita" },
          { label: "he", form: "eivät soita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "soitin" },
          { label: "sinä", form: "soitit" },
          { label: "hän", form: "soitti" },
          { label: "me", form: "soitimme" },
          { label: "te", form: "soititte" },
          { label: "he", form: "soittivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en soittanut" },
          { label: "sinä", form: "et soittanut" },
          { label: "hän", form: "ei soittanut" },
          { label: "me", form: "emme soittaneet" },
          { label: "te", form: "ette soittaneet" },
          { label: "he", form: "eivät soittaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen soittanut" },
          { label: "sinä", form: "olet soittanut" },
          { label: "hän", form: "on soittanut" },
          { label: "me", form: "olemme soittaneet" },
          { label: "te", form: "olette soittaneet" },
          { label: "he", form: "ovat soittaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole soittanut" },
          { label: "hän", form: "ei ole soittanut" },
          { label: "he", form: "eivät ole soittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "soita!" },
          { label: "te", form: "soittakaa!" },
          { label: "kielto (sinä)", form: "älä soita" },
          { label: "kielto (te)", form: "älkää soittako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "soitto",
      en: "a call; playing",
      taso: "B1",
      esim: { fi: "Sain soiton ystävältäni.", en: "I got a call from my friend." },
    },
    {
      fi: "soitin",
      en: "musical instrument",
      taso: "B1",
      esim: { fi: "Mitä soitinta soitat?", en: "What instrument do you play?" },
    },
    {
      fi: "soittaja",
      en: "caller; player (musician)",
      taso: "B1",
      esim: { fi: "Soittaja ei kertonut nimeään.", en: "The caller didn't give their name." },
    },
  ],
  synonyymit: [
    { fi: "puhelu", en: "phone call (noun)" },
    { fi: "soitella", en: "to call now and then" },
  ],
  esimerkit: {
    A2: { fi: "Soitan sinulle illalla.", en: "I'll call you in the evening." },
    B1: { fi: "Hän soittaa kitaraa bändissä.", en: "He plays guitar in a band." },
    B2: {
      fi: "Soitin lääkärille, mutta kukaan ei vastannut.",
      en: "I called the doctor, but no one answered.",
    },
  },
  updatedAt: "2026-06-05",
};

export default soittaa;
