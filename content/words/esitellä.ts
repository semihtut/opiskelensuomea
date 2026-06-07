import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, tt:t gradation, stem esittele- ~ esitel-.
// Present minä esittelen, hän esittelee; imperfect minä esittelin; NUT esitellyt.
const esitella: Word = {
  fi: "esitellä",
  slug: "esitellä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to introduce, present, show",
  selitys:
    "Tuoda joku tai jokin toisten tietoon tai näytille: 'esitellä uusi työntekijä'. Tyyppi 3 (-llä), Kotus 67/tulla, astevaihtelu tt:t (esittelen vahva, esitellä heikko). Vrt. esitellä itsensä, esittely, esittää.",
  kuva: { emoji: "🙋‍♀️", alt: "esitellä – tuoda joku tai jokin toisten tietoon" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-llä), Kotus 67/tulla; astevaihtelu tt:t (esitel- ~ esittele-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "esittelen", merkitys: "I introduce" },
      { sija: "imperfekti (minä)", muoto: "esittelin", merkitys: "I introduced" },
      { sija: "NUT-partisiippi", muoto: "esitellyt", merkitys: "(have) introduced" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva esittele- (esittelen, esittelin), heikko infinitiivissä ja NUT-muodossa (esitellä, esitellyt). 'Esitellä itsensä' = to introduce oneself. Vrt. esittely = introduction, esittää = to present.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "esittelen" },
          { label: "sinä", form: "esittelet" },
          { label: "hän", form: "esittelee" },
          { label: "me", form: "esittelemme" },
          { label: "te", form: "esittelette" },
          { label: "he", form: "esittelevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en esittele" },
          { label: "hän", form: "ei esittele" },
          { label: "he", form: "eivät esittele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "esittelin" },
          { label: "sinä", form: "esittelit" },
          { label: "hän", form: "esitteli" },
          { label: "me", form: "esittelimme" },
          { label: "te", form: "esittelitte" },
          { label: "he", form: "esittelivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen esitellyt" },
          { label: "hän", form: "on esitellyt" },
          { label: "he", form: "ovat esitelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "esittele!" },
          { label: "te", form: "esitelkää!" },
          { label: "kielto (sinä)", form: "älä esittele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "esittely",
      en: "introduction, presentation",
      taso: "B1",
      esim: { fi: "Pidimme lyhyen esittelyn.", en: "We gave a short introduction." },
    },
    {
      fi: "esite",
      en: "brochure, leaflet",
      taso: "B2",
      esim: { fi: "Otin esitteen matkatoimistosta.", en: "I took a brochure from the travel agency." },
    },
  ],
  synonyymit: [
    { fi: "esittää", en: "to present" },
    { fi: "tuoda esille", en: "to bring forward" },
  ],
  esimerkit: {
    A2: { fi: "Saanko esitellä: tämä on Liisa.", en: "May I introduce: this is Liisa." },
    B1: { fi: "Hän esitteli meille uuden suunnitelman.", en: "She presented the new plan to us." },
    B2: {
      fi: "Kokouksessa esiteltiin tutkimuksen tärkeimmät tulokset.",
      en: "The most important results of the study were presented at the meeting.",
    },
  },
  updatedAt: "2026-06-07",
};

export default esitella;
