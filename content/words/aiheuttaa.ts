import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem aiheutta- ~ aiheuta-.
// Present minä aiheutan, hän aiheuttaa; imperfect minä aiheutin; NUT aiheuttanut.
const aiheuttaa: Word = {
  fi: "aiheuttaa",
  slug: "aiheuttaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to cause, bring about",
  selitys:
    "Saada jokin tapahtumaan tai syntymään, usein jotakin kielteistä: 'aiheuttaa vahinkoa'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (aiheutan). Objekti partitiivissa. Johdettu sanasta aihe. Vrt. syy, seuraus.",
  kuva: { emoji: "⚡", alt: "aiheuttaa – saada jokin tapahtumaan" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (aiheuta- ~ aiheutta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "aiheutan", merkitys: "I cause" },
      { sija: "imperfekti (minä)", muoto: "aiheutin", merkitys: "I caused" },
      { sija: "NUT-partisiippi", muoto: "aiheuttanut", merkitys: "(have) caused" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva aiheutta- (aiheuttaa, aiheuttanut), heikko aiheuta- (aiheutan, aiheutin). Objekti yleensä partitiivissa: 'aiheuttaa ongelmia'. Johdettu sanasta aihe. Vrt. syy = cause, reason.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "aiheutan" },
          { label: "sinä", form: "aiheutat" },
          { label: "hän", form: "aiheuttaa" },
          { label: "me", form: "aiheutamme" },
          { label: "te", form: "aiheutatte" },
          { label: "he", form: "aiheuttavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en aiheuta" },
          { label: "hän", form: "ei aiheuta" },
          { label: "he", form: "eivät aiheuta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "aiheutin" },
          { label: "sinä", form: "aiheutit" },
          { label: "hän", form: "aiheutti" },
          { label: "me", form: "aiheutimme" },
          { label: "te", form: "aiheutitte" },
          { label: "he", form: "aiheuttivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen aiheuttanut" },
          { label: "hän", form: "on aiheuttanut" },
          { label: "he", form: "ovat aiheuttaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "aiheuta!" },
          { label: "te", form: "aiheuttakaa!" },
          { label: "kielto (sinä)", form: "älä aiheuta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "aihe",
      en: "topic, subject; cause",
      taso: "A2",
      esim: { fi: "Mikä on esseen aihe?", en: "What is the essay's topic?" },
    },
    {
      fi: "aiheutua",
      en: "to be caused, result (intransitive)",
      taso: "B2",
      esim: { fi: "Vahinko aiheutui huolimattomuudesta.", en: "The damage resulted from carelessness." },
    },
  ],
  synonyymit: [
    { fi: "saada aikaan", en: "to bring about" },
    { fi: "synnyttää", en: "to generate, give rise to" },
  ],
  esimerkit: {
    A2: { fi: "Myrsky aiheutti vahinkoa.", en: "The storm caused damage." },
    B1: { fi: "Melu aiheuttaa stressiä.", en: "Noise causes stress." },
    B2: {
      fi: "Pieni virhe ohjelmassa aiheutti suuria ongelmia koko järjestelmälle.",
      en: "A small bug in the program caused big problems for the whole system.",
    },
  },
  updatedAt: "2026-06-07",
};

export default aiheuttaa;
