import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla (type 3), no gradation,
// stem kuole-. Present kuolen, past kuolin, past participle kuollut.
const kuolla: Word = {
  fi: "kuolla",
  slug: "kuolla",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A2",
  en: "to die",
  selitys:
    "Lakata elämästä. Tyyppi 3 (-lla → -le): kuolla → kuolen. Vastakohta elää / syntyä. Substantiivi kuolema = death.",
  kuva: { emoji: "🥀", alt: "kuolla – elämän päättyminen" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla → -le); ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "kuolen", merkitys: "I die" },
      { sija: "imperfekti (minä)", muoto: "kuolin", merkitys: "I died" },
      { sija: "NUT-partisiippi", muoto: "kuollut", merkitys: "(have) died, dead" },
    ],
    huom:
      "Tyyppi 3: -lla jää pois ja tilalle -e (kuole-). 'Kuolla johonkin' = to die of something (kuoli sairauteen). Partisiippi kuollut = dead. Vastakohta syntyä.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kuolen" },
          { label: "sinä", form: "kuolet" },
          { label: "hän", form: "kuolee" },
          { label: "me", form: "kuolemme" },
          { label: "te", form: "kuolette" },
          { label: "he", form: "kuolevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kuole" },
          { label: "hän", form: "ei kuole" },
          { label: "he", form: "eivät kuole" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kuolin" },
          { label: "sinä", form: "kuolit" },
          { label: "hän", form: "kuoli" },
          { label: "me", form: "kuolimme" },
          { label: "te", form: "kuolitte" },
          { label: "he", form: "kuolivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kuollut" },
          { label: "hän", form: "on kuollut" },
          { label: "he", form: "ovat kuolleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kuole!" },
          { label: "te", form: "kuolkaa!" },
          { label: "kielto (sinä)", form: "älä kuole" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuolema",
      en: "death",
      taso: "B1",
      esim: { fi: "Kuolema on osa elämää.", en: "Death is a part of life." },
    },
    {
      fi: "kuollut",
      en: "dead (adjective/participle)",
      taso: "A2",
      esim: { fi: "Puhelimen akku on kuollut.", en: "The phone's battery is dead." },
    },
    {
      fi: "kuolinpäivä",
      en: "date of death",
      taso: "B2",
      esim: { fi: "Hänen kuolinpäivänsä on tuntematon.", en: "His date of death is unknown." },
    },
  ],
  synonyymit: [
    { fi: "menehtyä", en: "to perish, pass away" },
    { fi: "nukkua pois", en: "to pass away (euphemism)" },
  ],
  esimerkit: {
    A2: { fi: "Kukat kuolevat ilman vettä.", en: "Flowers die without water." },
    B1: { fi: "Hänen isoisänsä kuoli viime vuonna.", en: "His grandfather died last year." },
    B2: {
      fi: "Vanha puu oli kuollut jo kauan ennen kuin se kaadettiin.",
      en: "The old tree had died long before it was felled.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kuolla;
