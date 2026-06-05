import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata (type 4), no gradation,
// stem korjaa-. Present korjaan, past korjasin, past participle korjannut.
const korjata: Word = {
  fi: "korjata",
  slug: "korjata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to fix, repair, correct",
  selitys:
    "Saattaa rikkinäinen kuntoon; poistaa virhe. Tyyppi 4 (-ata): korjata → korjaan. Myös 'korjata sato' = to harvest.",
  kuva: { emoji: "🔧", alt: "korjata – korjataan rikkinäinen esine" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata); ei astevaihtelua; vartalo korjaa-",
    muodot: [
      { sija: "preesens (minä)", muoto: "korjaan", merkitys: "I fix" },
      { sija: "imperfekti (minä)", muoto: "korjasin", merkitys: "I fixed" },
      { sija: "NUT-partisiippi", muoto: "korjannut", merkitys: "(have) fixed" },
    ],
    huom:
      "Korjata laite / virhe / sato. Vrt. korjaantua / korjautua (tulla korjatuksi). Älä sekoita: 'korjata pois' = to clear away.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "korjaan" },
          { label: "sinä", form: "korjaat" },
          { label: "hän", form: "korjaa" },
          { label: "me", form: "korjaamme" },
          { label: "te", form: "korjaatte" },
          { label: "he", form: "korjaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en korjaa" },
          { label: "hän", form: "ei korjaa" },
          { label: "he", form: "eivät korjaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "korjasin" },
          { label: "sinä", form: "korjasit" },
          { label: "hän", form: "korjasi" },
          { label: "me", form: "korjasimme" },
          { label: "te", form: "korjasitte" },
          { label: "he", form: "korjasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen korjannut" },
          { label: "hän", form: "on korjannut" },
          { label: "he", form: "ovat korjanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "korjaa!" },
          { label: "te", form: "korjatkaa!" },
          { label: "kielto (sinä)", form: "älä korjaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "korjaus",
      en: "repair, correction",
      taso: "B1",
      esim: { fi: "Auton korjaus maksoi paljon.", en: "The car repair cost a lot." },
    },
    {
      fi: "korjaamo",
      en: "repair shop, garage",
      taso: "B1",
      esim: { fi: "Vein auton korjaamoon.", en: "I took the car to the garage." },
    },
    {
      fi: "korjata pois",
      en: "to clear away, tidy up",
      taso: "B2",
      esim: { fi: "Korjasin astiat pois pöydältä.", en: "I cleared the dishes off the table." },
    },
  ],
  synonyymit: [
    { fi: "huoltaa", en: "to service, maintain" },
    { fi: "oikaista", en: "to correct, set right" },
  ],
  esimerkit: {
    A2: { fi: "Isä korjaa polkupyörän.", en: "Dad is fixing the bicycle." },
    B1: { fi: "Korjasin virheen tekstistä.", en: "I corrected the error in the text." },
    B2: {
      fi: "Kun puhelin meni rikki, vein sen korjattavaksi, mutta korjaus ei kannattanut.",
      en: "When the phone broke, I took it to be repaired, but the repair wasn't worth it.",
    },
  },
  updatedAt: "2026-06-05",
};

export default korjata;
