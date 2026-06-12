import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem opetta- ~ opeta-.
// Present minä opetan, hän opettaa; imperfect minä opetin, hän opetti; NUT opettanut.
const opettaa: Word = {
  fi: "opettaa",
  slug: "opettaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to teach",
  selitys:
    "Antaa toiselle tietoa tai taitoa: 'opettaa lapsille lukemista'. Tyyppi 1 (-aa), astevaihtelu tt:t (opetan ~ opettaa). Vastakohta oppia. Vrt. opettaja (teacher), opetus (teaching).",
  kuva: { alt: "opettaa – antaa toiselle tietoa tai taitoa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu tt:t (opetan ↔ opettaa); vartalo opetta- ~ opeta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "opetan", merkitys: "I teach" },
      { sija: "imperfekti (minä)", muoto: "opetin", merkitys: "I taught" },
      { sija: "NUT-partisiippi", muoto: "opettanut", merkitys: "(have) taught" },
    ],
    huom:
      "Heikko aste t minä/sinä/me/te-muodoissa (opetan, opetin), vahva aste tt hän/he- ja perusmuodossa (opettaa, opetti). Rakenne: 'opettaa jollekulle jotakin' (allatiivi + partitiivi/objekti).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "opetan" },
          { label: "sinä", form: "opetat" },
          { label: "hän", form: "opettaa" },
          { label: "me", form: "opetamme" },
          { label: "te", form: "opetatte" },
          { label: "he", form: "opettavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en opeta" },
          { label: "hän", form: "ei opeta" },
          { label: "he", form: "eivät opeta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "opetin" },
          { label: "sinä", form: "opetit" },
          { label: "hän", form: "opetti" },
          { label: "me", form: "opetimme" },
          { label: "te", form: "opetitte" },
          { label: "he", form: "opettivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen opettanut" },
          { label: "hän", form: "on opettanut" },
          { label: "he", form: "ovat opettaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "opeta!" },
          { label: "te", form: "opettakaa!" },
          { label: "kielto (sinä)", form: "älä opeta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "opettaja",
      en: "teacher",
      taso: "A2",
      esim: { fi: "Opettaja selitti asian uudestaan.", en: "The teacher explained the matter again." },
    },
    {
      fi: "opetus",
      en: "teaching, instruction",
      taso: "B1",
      esim: { fi: "Opetus alkaa kello yhdeksän.", en: "Teaching starts at nine o'clock." },
    },
    {
      fi: "opettavainen",
      en: "instructive, educational",
      taso: "B2",
      esim: { fi: "Se oli opettavainen kokemus.", en: "It was an instructive experience." },
    },
  ],
  synonyymit: [
    { fi: "kouluttaa", en: "to train, educate" },
    { fi: "neuvoa", en: "to advise, instruct" },
  ],
  esimerkit: {
    A2: { fi: "Hän opettaa englantia koulussa.", en: "She teaches English at school." },
    B1: { fi: "Isä opetti minut uimaan.", en: "Dad taught me to swim." },
    B2: {
      fi: "Hyvä opettaja opettaa oppilaita ajattelemaan itse.",
      en: "A good teacher teaches students to think for themselves.",
    },
  },
  updatedAt: "2026-06-06",
};

export default opettaa;
