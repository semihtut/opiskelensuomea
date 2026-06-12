import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st cluster), stem vastusta-.
// Present minä vastustan, hän vastustaa; imperfect minä vastustin; NUT vastustanut.
const vastustaa: Word = {
  fi: "vastustaa",
  slug: "vastustaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to oppose, resist",
  selitys:
    "Olla jotakin vastaan; vastustaa muutosta, ehdotusta tai kiusausta: 'vastustaa lakia'. Tyyppi 1 (-aa), Kotus 53/muistaa, ei astevaihtelua (st säilyy). Objekti partitiivissa. Vastakohta kannattaa. Vrt. vastustaja, vastustus.",
  kuva: { alt: "vastustaa – olla jotakin vastaan" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; ei astevaihtelua; vartalo vastusta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "vastustan", merkitys: "I oppose" },
      { sija: "imperfekti (minä)", muoto: "vastustin", merkitys: "I opposed" },
      { sija: "NUT-partisiippi", muoto: "vastustanut", merkitys: "(have) opposed" },
    ],
    huom:
      "Ei astevaihtelua – st-yhtymä säilyy (vastustan, vastustin, vastustanut). Objekti partitiivissa: 'vastustan ehdotusta'. Vastakohta kannattaa. Vrt. vastustus = resistance, vastustaja = opponent.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vastustan" },
          { label: "sinä", form: "vastustat" },
          { label: "hän", form: "vastustaa" },
          { label: "me", form: "vastustamme" },
          { label: "te", form: "vastustatte" },
          { label: "he", form: "vastustavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vastusta" },
          { label: "hän", form: "ei vastusta" },
          { label: "he", form: "eivät vastusta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vastustin" },
          { label: "sinä", form: "vastustit" },
          { label: "hän", form: "vastusti" },
          { label: "me", form: "vastustimme" },
          { label: "te", form: "vastustitte" },
          { label: "he", form: "vastustivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen vastustanut" },
          { label: "hän", form: "on vastustanut" },
          { label: "he", form: "ovat vastustaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vastusta!" },
          { label: "te", form: "vastustakaa!" },
          { label: "kielto (sinä)", form: "älä vastusta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vastustus",
      en: "opposition, resistance",
      taso: "B1",
      esim: { fi: "Hanke kohtasi kovaa vastustusta.", en: "The project met strong opposition." },
    },
    {
      fi: "vastustaja",
      en: "opponent, adversary",
      taso: "B1",
      esim: { fi: "Hän voitti vastustajansa helposti.", en: "She beat her opponent easily." },
    },
    {
      fi: "vastustuskyky",
      en: "immunity, resistance",
      taso: "B2",
      esim: { fi: "Liikunta parantaa vastustuskykyä.", en: "Exercise improves immunity." },
    },
  ],
  synonyymit: [
    { fi: "olla vastaan", en: "to be against" },
    { fi: "panna vastaan", en: "to put up resistance" },
  ],
  esimerkit: {
    A2: { fi: "Moni vastustaa muutosta.", en: "Many oppose the change." },
    B1: { fi: "En vastusta ideaa, mutta epäilen aikataulua.", en: "I don't oppose the idea, but I doubt the schedule." },
    B2: {
      fi: "Asukkaat vastustivat rakennushanketta, koska se olisi tuhonnut puiston.",
      en: "The residents opposed the construction project because it would have destroyed the park.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vastustaa;
