import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st cluster), stem mainosta-.
// Present minä mainostan, hän mainostaa; imperfect minä mainostin; NUT mainostanut.
const mainostaa: Word = {
  fi: "mainostaa",
  slug: "mainostaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to advertise, promote",
  selitys:
    "Tehdä tuotetta tai asiaa tunnetuksi ja houkutella ostamaan: 'mainostaa uutta tuotetta'. Tyyppi 1 (-aa), Kotus 53/muistaa, ei astevaihtelua (st säilyy). Objekti partitiivissa. Johdettu sanasta mainos. Vrt. mainos, mainonta.",
  kuva: { alt: "mainostaa – tehdä tuotetta tunnetuksi ja houkutella ostamaan" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; ei astevaihtelua; vartalo mainosta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "mainostan", merkitys: "I advertise" },
      { sija: "imperfekti (minä)", muoto: "mainostin", merkitys: "I advertised" },
      { sija: "NUT-partisiippi", muoto: "mainostanut", merkitys: "(have) advertised" },
    ],
    huom:
      "Ei astevaihtelua – st-yhtymä säilyy (mainostan, mainostin, mainostanut). Objekti partitiivissa: 'mainostaa tuotetta'. Johdettu sanasta mainos. Vrt. mainos = advertisement, mainonta = advertising.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "mainostan" },
          { label: "sinä", form: "mainostat" },
          { label: "hän", form: "mainostaa" },
          { label: "me", form: "mainostamme" },
          { label: "te", form: "mainostatte" },
          { label: "he", form: "mainostavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en mainosta" },
          { label: "hän", form: "ei mainosta" },
          { label: "he", form: "eivät mainosta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "mainostin" },
          { label: "sinä", form: "mainostit" },
          { label: "hän", form: "mainosti" },
          { label: "me", form: "mainostimme" },
          { label: "te", form: "mainostitte" },
          { label: "he", form: "mainostivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen mainostanut" },
          { label: "hän", form: "on mainostanut" },
          { label: "he", form: "ovat mainostaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "mainosta!" },
          { label: "te", form: "mainostakaa!" },
          { label: "kielto (sinä)", form: "älä mainosta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mainos",
      en: "advertisement, ad",
      taso: "A2",
      esim: { fi: "Näin mainoksen televisiossa.", en: "I saw an ad on television." },
    },
    {
      fi: "mainonta",
      en: "advertising",
      taso: "B2",
      esim: { fi: "Verkkomainonta on kasvanut nopeasti.", en: "Online advertising has grown fast." },
    },
  ],
  synonyymit: [
    { fi: "markkinoida", en: "to market" },
    { fi: "tehdä tunnetuksi", en: "to make known" },
  ],
  esimerkit: {
    A2: { fi: "Kauppa mainostaa alennuksia.", en: "The shop advertises discounts." },
    B1: { fi: "He mainostavat tuotetta sosiaalisessa mediassa.", en: "They advertise the product on social media." },
    B2: {
      fi: "Tapahtumaa mainostettiin näyttävästi koko kaupungin alueella.",
      en: "The event was advertised prominently throughout the city.",
    },
  },
  updatedAt: "2026-06-07",
};

export default mainostaa;
