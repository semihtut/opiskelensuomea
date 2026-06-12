import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata (type 4), no gradation,
// stem osaa-. Present osaan, past osasin, past participle osannut.
const osata: Word = {
  fi: "osata",
  slug: "osata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A1",
  en: "to know how, be able to",
  selitys:
    "Hallita taito; pystyä tekemään opittu asia. Tyyppi 4 (-ata): osata → osaan. Seuraava verbi infinitiivissä: 'osaan uida'. Vrt. voida (mahdollisuus), tietää (tieto).",
  kuva: { alt: "osata – hallita taito" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata); ei astevaihtelua; vartalo osaa-",
    muodot: [
      { sija: "preesens (minä)", muoto: "osaan", merkitys: "I can / know how" },
      { sija: "imperfekti (minä)", muoto: "osasin", merkitys: "I knew how" },
      { sija: "NUT-partisiippi", muoto: "osannut", merkitys: "(have) known how" },
    ],
    huom:
      "Tarkoittaa taitoa: 'osaan suomea', 'osaan ajaa autoa'. Vrt. voida = olla mahdollista, tietää = tuntea asia. Seuraava verbi 1. infinitiivissä.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "osaan" },
          { label: "sinä", form: "osaat" },
          { label: "hän", form: "osaa" },
          { label: "me", form: "osaamme" },
          { label: "te", form: "osaatte" },
          { label: "he", form: "osaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en osaa" },
          { label: "hän", form: "ei osaa" },
          { label: "he", form: "eivät osaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "osasin" },
          { label: "sinä", form: "osasit" },
          { label: "hän", form: "osasi" },
          { label: "me", form: "osasimme" },
          { label: "te", form: "osasitte" },
          { label: "he", form: "osasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen osannut" },
          { label: "hän", form: "on osannut" },
          { label: "he", form: "ovat osanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "osaa!" },
          { label: "te", form: "osatkaa!" },
          { label: "kielto (sinä)", form: "älä osaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "osaaminen",
      en: "skill, know-how, competence",
      taso: "B1",
      esim: { fi: "Kielten osaaminen on tärkeää.", en: "Knowing languages is important." },
    },
    {
      fi: "osaava",
      en: "skilled, competent",
      taso: "B2",
      esim: { fi: "Tarvitsemme osaavan tiimin.", en: "We need a skilled team." },
    },
    {
      fi: "taito",
      en: "skill",
      taso: "A2",
      esim: { fi: "Uiminen on hyödyllinen taito.", en: "Swimming is a useful skill." },
    },
  ],
  synonyymit: [
    { fi: "kyetä", en: "to be capable of" },
    { fi: "hallita", en: "to master, have command of" },
  ],
  esimerkit: {
    A2: { fi: "Osaan puhua vähän suomea.", en: "I can speak a little Finnish." },
    B1: { fi: "Osasin vastauksen heti.", en: "I knew the answer right away." },
    B2: {
      fi: "Hän osaa selittää vaikeatkin asiat niin, että kaikki ymmärtävät.",
      en: "She knows how to explain even difficult things so that everyone understands.",
    },
  },
  updatedAt: "2026-06-05",
};

export default osata;
