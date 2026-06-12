import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem keittä- ~ keitä-.
// Present minä keitän, hän keittää; imperfect minä keitin, hän keitti; NUT keittänyt.
const keittää: Word = {
  fi: "keittää",
  slug: "keittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to cook, boil; to brew",
  selitys:
    "Valmistaa ruokaa vedessä tai kuumentaa kiehuvaksi: 'keittää perunoita' / 'keittää kahvia'. Tyyppi 1 (-ää), astevaihtelu tt:t (keitän ~ keittää). Vrt. keitto (soup), keittiö (kitchen).",
  kuva: { alt: "keittää – valmistaa ruokaa vedessä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (keitän ↔ keittää)",
    muodot: [
      { sija: "preesens (minä)", muoto: "keitän", merkitys: "I cook/boil" },
      { sija: "imperfekti (minä)", muoto: "keitin", merkitys: "I cooked/boiled" },
      { sija: "NUT-partisiippi", muoto: "keittänyt", merkitys: "(have) cooked/boiled" },
    ],
    huom:
      "Heikko aste t minä/sinä/me/te-muodoissa (keitän, keitin), vahva aste tt hän/he- ja perusmuodossa (keittää, keitti). 'Keittää kahvia' = to brew coffee, 'keittää perunat' = to boil potatoes.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "keitän" },
          { label: "sinä", form: "keität" },
          { label: "hän", form: "keittää" },
          { label: "me", form: "keitämme" },
          { label: "te", form: "keitätte" },
          { label: "he", form: "keittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en keitä" },
          { label: "hän", form: "ei keitä" },
          { label: "he", form: "eivät keitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "keitin" },
          { label: "sinä", form: "keitit" },
          { label: "hän", form: "keitti" },
          { label: "me", form: "keitimme" },
          { label: "te", form: "keititte" },
          { label: "he", form: "keittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen keittänyt" },
          { label: "hän", form: "on keittänyt" },
          { label: "he", form: "ovat keittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "keitä!" },
          { label: "te", form: "keittäkää!" },
          { label: "kielto (sinä)", form: "älä keitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "keitto",
      en: "soup",
      taso: "A2",
      esim: { fi: "Keitto on valmista.", en: "The soup is ready." },
    },
    {
      fi: "keittiö",
      en: "kitchen",
      taso: "A2",
      esim: { fi: "Keittiössä tuoksuu hyvältä.", en: "It smells good in the kitchen." },
    },
    {
      fi: "keittäjä",
      en: "cook",
      taso: "B2",
      esim: { fi: "Koulun keittäjä valmistaa lounaan.", en: "The school cook prepares lunch." },
    },
  ],
  synonyymit: [
    { fi: "kiehuttaa", en: "to bring to a boil" },
    { fi: "valmistaa ruokaa", en: "to prepare food" },
  ],
  esimerkit: {
    A2: { fi: "Keitän kahvia aamulla.", en: "I make coffee in the morning." },
    B1: { fi: "Keitä perunat kymmenen minuuttia.", en: "Boil the potatoes for ten minutes." },
    B2: {
      fi: "Hän keitti suuren padallisen keittoa koko perheelle.",
      en: "She cooked a big pot of soup for the whole family.",
    },
  },
  updatedAt: "2026-06-07",
};

export default keittää;
