import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, nt:nn gradation, stem tuntu- ~ tunnu-.
// Present se tuntuu; imperfect se tuntui; NUT tuntunut. Governs ablative/allative. Mostly 3rd person.
const tuntua: Word = {
  fi: "tuntua",
  slug: "tuntua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to feel, seem",
  selitys:
    "Antaa tietynlainen tunne tai vaikutelma: 'se tuntuu hyvältä'. Tyyppi 1 (-ua), Kotus 52/sanoa, astevaihtelu nt:nn (tunnun). Useimmiten 3. persoonassa, hallitsee ablatiivia ('tuntua joltakin'). Vrt. tuntea, tunne, vaikuttaa.",
  kuva: { emoji: "🫧", alt: "tuntua – antaa tietynlainen tunne tai vaikutelma" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; astevaihtelu nt:nn (tuntu- ~ tunnu-)",
    muodot: [
      { sija: "preesens (se)", muoto: "tuntuu", merkitys: "(it) feels" },
      { sija: "imperfekti (se)", muoto: "tuntui", merkitys: "(it) felt" },
      { sija: "NUT-partisiippi", muoto: "tuntunut", merkitys: "(has) felt" },
    ],
    huom:
      "Useimmiten 3. persoonassa. Hallitsee ablatiivia: 'tuntua hyvältä/oudolta' = to feel good/strange. Astevaihtelu nt:nn (1. persoonassa tunnun, harvinainen). 'Tuntuu siltä, että' = it feels like. Vrt. tuntea = to feel/know.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "se / asia", form: "tuntuu" },
          { label: "ne / asiat", form: "tuntuvat" },
          { label: "kielto", form: "ei tunnu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se / asia", form: "tuntui" },
          { label: "ne / asiat", form: "tuntuivat" },
          { label: "kielto", form: "ei tuntunut" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se / asia", form: "on tuntunut" },
          { label: "ne / asiat", form: "ovat tuntuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuntea",
      en: "to feel; to know (a person)",
      taso: "B1",
      esim: { fi: "Tunnen hänet hyvin.", en: "I know him well." },
    },
    {
      fi: "tunne",
      en: "feeling, emotion",
      taso: "B1",
      esim: { fi: "Se oli outo tunne.", en: "It was a strange feeling." },
    },
    {
      fi: "tuntemus",
      en: "sensation, sentiment",
      taso: "B2",
      esim: { fi: "Kerro tuntemuksistasi.", en: "Tell me about your feelings." },
    },
  ],
  synonyymit: [
    { fi: "vaikuttaa", en: "to seem" },
    { fi: "näyttää", en: "to appear" },
  ],
  esimerkit: {
    A2: { fi: "Tämä tuntuu hyvältä.", en: "This feels good." },
    B1: { fi: "Päivä tuntui pitkältä.", en: "The day felt long." },
    B2: {
      fi: "Aluksi tehtävä tuntui mahdottomalta, mutta vähitellen se selkeni.",
      en: "At first the task felt impossible, but gradually it became clearer.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tuntua;
