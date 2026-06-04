import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: -ida-type verb whose POSITIVE past is identical to
// the present (voin = "I can" / "I could"); the two differ only in the negative
// past (en voinut) and the participle (voinut/voineet).
const voida: Word = {
  fi: "voida",
  slug: "voida",
  pos: "verbi (tyyppi 2, -ida)",
  posClass: "verbi",
  level: "A1",
  en: "to be able to, can; to feel (well/unwell)",
  selitys:
    "Ilmaisee kykyä tai mahdollisuutta ('voin auttaa') sekä vointia ('Miten voit?'). Kohtelias pyyntö muodostetaan konditionaalilla: 'Voisitko…?'.",
  kuva: { emoji: "💪", alt: "voida – käsivarsi (kyky)" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-da), -ida-ryhmä; vartalo voi-",
    muodot: [
      { sija: "preesens (minä)", muoto: "voin", merkitys: "I can" },
      { sija: "imperfekti (minä)", muoto: "voin", merkitys: "I could (= present!)" },
      { sija: "kielto (minä)", muoto: "en voi", merkitys: "I can't" },
      { sija: "kielto-imperfekti (minä)", muoto: "en voinut", merkitys: "I couldn't" },
    ],
    huom:
      "-ida-verbi: MYÖNTEINEN imperfekti on sama kuin preesens (voin = nyt tai silloin). Ero näkyy vasta kiellossa (en voinut) ja partisiipissa (voinut/voineet). Selvyyden vuoksi menneestä käytetään usein synonyymejä pystyä/kyetä.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "voin" },
          { label: "sinä", form: "voit" },
          { label: "hän", form: "voi" },
          { label: "me", form: "voimme" },
          { label: "te", form: "voitte" },
          { label: "he", form: "voivat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en voi" },
          { label: "sinä", form: "et voi" },
          { label: "hän", form: "ei voi" },
          { label: "me", form: "emme voi" },
          { label: "te", form: "ette voi" },
          { label: "he", form: "eivät voi" },
        ],
      },
      {
        title: "Imperfekti (= preesens)",
        rows: [
          { label: "minä", form: "voin" },
          { label: "sinä", form: "voit" },
          { label: "hän", form: "voi" },
          { label: "me", form: "voimme" },
          { label: "te", form: "voitte" },
          { label: "he", form: "voivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en voinut" },
          { label: "sinä", form: "et voinut" },
          { label: "hän", form: "ei voinut" },
          { label: "me", form: "emme voineet" },
          { label: "te", form: "ette voineet" },
          { label: "he", form: "eivät voineet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen voinut" },
          { label: "sinä", form: "olet voinut" },
          { label: "hän", form: "on voinut" },
          { label: "me", form: "olemme voineet" },
          { label: "te", form: "olette voineet" },
          { label: "he", form: "ovat voineet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole voinut" },
          { label: "hän", form: "ei ole voinut" },
          { label: "he", form: "eivät ole voineet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "voima",
      en: "force, power, strength",
      taso: "A2",
      esim: { fi: "Tuulen voima oli valtava.", en: "The force of the wind was enormous." },
    },
    {
      fi: "voimakas",
      en: "strong, powerful",
      taso: "B1",
      esim: { fi: "Kahvi oli liian voimakasta.", en: "The coffee was too strong." },
    },
    {
      fi: "voimassa",
      en: "in force, valid",
      taso: "B2",
      esim: {
        fi: "Sopimus on voimassa vuoden loppuun.",
        en: "The contract is valid until the end of the year.",
      },
    },
  ],
  synonyymit: [
    { fi: "pystyä", en: "to be able to (used for past, for clarity)" },
    { fi: "kyetä", en: "to be capable of" },
  ],
  esimerkit: {
    A2: { fi: "Voitko auttaa minua?", en: "Can you help me?" },
    B1: {
      fi: "En voinut tulla eilen, koska olin sairas.",
      en: "I couldn't come yesterday because I was sick.",
    },
    B2: {
      fi: "Voisimmeko sopia tapaamisen ensi viikolle?",
      en: "Could we arrange a meeting for next week?",
    },
  },
  updatedAt: "2026-06-04",
};

export default voida;
