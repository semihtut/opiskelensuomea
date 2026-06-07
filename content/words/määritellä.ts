import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, tt:t gradation, stem määrittele- ~ määritel-.
// Present minä määrittelen, hän määrittelee; imperfect minä määrittelin; NUT määritellyt.
const maaritella: Word = {
  fi: "määritellä",
  slug: "määritellä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B2",
  en: "to define, specify",
  selitys:
    "Selittää tarkasti, mitä jokin tarkoittaa tai mitä se sisältää: 'määritellä käsite'. Tyyppi 3 (-llä), Kotus 67/tulla, astevaihtelu tt:t (määrittelen vahva, määritellä heikko). Vrt. määritelmä, määrätä, käsite.",
  kuva: { emoji: "📖", alt: "määritellä – selittää tarkasti mitä jokin tarkoittaa" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-llä), Kotus 67/tulla; astevaihtelu tt:t (määritel- ~ määrittele-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "määrittelen", merkitys: "I define" },
      { sija: "imperfekti (minä)", muoto: "määrittelin", merkitys: "I defined" },
      { sija: "NUT-partisiippi", muoto: "määritellyt", merkitys: "(have) defined" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva määrittele- (määrittelen, määrittelin), heikko infinitiivissä ja NUT-muodossa (määritellä, määritellyt). Vrt. määritelmä = definition, määrätä = to order, define.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "määrittelen" },
          { label: "sinä", form: "määrittelet" },
          { label: "hän", form: "määrittelee" },
          { label: "me", form: "määrittelemme" },
          { label: "te", form: "määrittelette" },
          { label: "he", form: "määrittelevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en määrittele" },
          { label: "hän", form: "ei määrittele" },
          { label: "he", form: "eivät määrittele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "määrittelin" },
          { label: "sinä", form: "määrittelit" },
          { label: "hän", form: "määritteli" },
          { label: "me", form: "määrittelimme" },
          { label: "te", form: "määrittelitte" },
          { label: "he", form: "määrittelivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen määritellyt" },
          { label: "hän", form: "on määritellyt" },
          { label: "he", form: "ovat määritelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "määrittele!" },
          { label: "te", form: "määritelkää!" },
          { label: "kielto (sinä)", form: "älä määrittele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "määritelmä",
      en: "definition",
      taso: "B2",
      esim: { fi: "Sanan määritelmä on epäselvä.", en: "The word's definition is unclear." },
    },
    {
      fi: "määrätä",
      en: "to order, determine",
      taso: "B1",
      esim: { fi: "Lääkäri määräsi lääkettä.", en: "The doctor prescribed medicine." },
    },
  ],
  synonyymit: [
    { fi: "selittää", en: "to explain" },
    { fi: "rajata", en: "to delimit" },
  ],
  esimerkit: {
    A2: { fi: "Määrittele sana omin sanoin.", en: "Define the word in your own words." },
    B1: { fi: "Tavoitteet on määriteltävä selkeästi.", en: "The goals must be defined clearly." },
    B2: {
      fi: "Onnellisuutta on vaikea määritellä yksiselitteisesti.",
      en: "Happiness is difficult to define unambiguously.",
    },
  },
  updatedAt: "2026-06-07",
};

export default maaritella;
