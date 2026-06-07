import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, tt:t gradation, stem suunnittele- ~ suunnitel-.
// Present minä suunnittelen, hän suunnittelee; imperfect minä suunnittelin; NUT suunnitellut.
const suunnitella: Word = {
  fi: "suunnitella",
  slug: "suunnitella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to plan, design",
  selitys:
    "Miettiä etukäteen, miten jokin tehdään, tai suunnitella muoto ja rakenne: 'suunnitella matka'. Tyyppi 3 (-lla), Kotus 67/tulla, astevaihtelu tt:t (suunnittelen vahva, suunnitella heikko). Vrt. suunnitelma, suunnittelija.",
  kuva: { emoji: "✏️", alt: "suunnitella – miettiä etukäteen miten jokin tehdään" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla), Kotus 67/tulla; astevaihtelu tt:t (suunnitel- ~ suunnittele-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "suunnittelen", merkitys: "I plan" },
      { sija: "imperfekti (minä)", muoto: "suunnittelin", merkitys: "I planned" },
      { sija: "NUT-partisiippi", muoto: "suunnitellut", merkitys: "(have) planned" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva vartalo suunnittele- (suunnittelen, suunnittelin), heikko infinitiivissä ja NUT-muodossa (suunnitella, suunnitellut). 3. infinitiivin illatiivi: 'suunnitella tekevänsä'. Vrt. suunnitelma = plan.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "suunnittelen" },
          { label: "sinä", form: "suunnittelet" },
          { label: "hän", form: "suunnittelee" },
          { label: "me", form: "suunnittelemme" },
          { label: "te", form: "suunnittelette" },
          { label: "he", form: "suunnittelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en suunnittele" },
          { label: "hän", form: "ei suunnittele" },
          { label: "he", form: "eivät suunnittele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "suunnittelin" },
          { label: "sinä", form: "suunnittelit" },
          { label: "hän", form: "suunnitteli" },
          { label: "me", form: "suunnittelimme" },
          { label: "te", form: "suunnittelitte" },
          { label: "he", form: "suunnittelivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen suunnitellut" },
          { label: "hän", form: "on suunnitellut" },
          { label: "he", form: "ovat suunnitelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "suunnittele!" },
          { label: "te", form: "suunnitelkaa!" },
          { label: "kielto (sinä)", form: "älä suunnittele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suunnitelma",
      en: "plan",
      taso: "A2",
      esim: { fi: "Teimme hyvän suunnitelman.", en: "We made a good plan." },
    },
    {
      fi: "suunnittelija",
      en: "designer, planner",
      taso: "B2",
      esim: { fi: "Hän on lahjakas suunnittelija.", en: "She is a talented designer." },
    },
    {
      fi: "suunnittelu",
      en: "planning, design",
      taso: "B1",
      esim: { fi: "Projektin suunnittelu kesti kuukauden.", en: "Planning the project took a month." },
    },
  ],
  synonyymit: [
    { fi: "kaavailla", en: "to envisage, plan out" },
    { fi: "valmistella", en: "to prepare, work out" },
  ],
  esimerkit: {
    A2: { fi: "Suunnittelen kesälomaa.", en: "I'm planning my summer holiday." },
    B1: { fi: "Suunnittelimme reitin tarkasti etukäteen.", en: "We planned the route carefully in advance." },
    B2: {
      fi: "Arkkitehti suunnitteli talon niin, että se hyödyntää auringonvaloa.",
      en: "The architect designed the house so that it makes use of sunlight.",
    },
  },
  updatedAt: "2026-06-07",
};

export default suunnitella;
