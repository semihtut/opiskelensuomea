import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 69/valita, no gradation, -tse- stem; stem tulkitse-.
// Present minä tulkitsen, hän tulkitsee; imperfect minä tulkitsin; NUT tulkinnut.
const tulkita: Word = {
  fi: "tulkita",
  slug: "tulkita",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B2",
  en: "to interpret",
  selitys:
    "Selittää tai ymmärtää jokin tietyllä tavalla: 'tulkita runo'. Tyyppi 4 (-ita), Kotus 69/valita, vartalo tulkitse-. NUT-partisiippi tulkinnut (huom!). Vrt. tulkinta, tulkki, ymmärtää.",
  kuva: { emoji: "🔡", alt: "tulkita – selittää tai ymmärtää jokin tietyllä tavalla" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ita), Kotus 69/valita; vartalo tulkitse- (-tse-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "tulkitsen", merkitys: "I interpret" },
      { sija: "imperfekti (minä)", muoto: "tulkitsin", merkitys: "I interpreted" },
      { sija: "NUT-partisiippi", muoto: "tulkinnut", merkitys: "(have) interpreted" },
    ],
    huom:
      "Tyyppi 69 (-ita): vartalo tulkitse- (tulkitsen, tulkitsin), mutta NUT-partisiippi tulkinnut (ei *tulkitsenut!), kuten valita→valinnut, havaita→havainnut. Vrt. tulkinta = interpretation, tulkki = interpreter.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tulkitsen" },
          { label: "sinä", form: "tulkitset" },
          { label: "hän", form: "tulkitsee" },
          { label: "me", form: "tulkitsemme" },
          { label: "te", form: "tulkitsette" },
          { label: "he", form: "tulkitsevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tulkitse" },
          { label: "hän", form: "ei tulkitse" },
          { label: "he", form: "eivät tulkitse" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tulkitsin" },
          { label: "sinä", form: "tulkitsit" },
          { label: "hän", form: "tulkitsi" },
          { label: "me", form: "tulkitsimme" },
          { label: "te", form: "tulkitsitte" },
          { label: "he", form: "tulkitsivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tulkinnut" },
          { label: "hän", form: "on tulkinnut" },
          { label: "he", form: "ovat tulkinneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tulkitse!" },
          { label: "te", form: "tulkitkaa!" },
          { label: "kielto (sinä)", form: "älä tulkitse" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tulkinta",
      en: "interpretation",
      taso: "B2",
      esim: { fi: "Tämä on vain yksi tulkinta.", en: "This is just one interpretation." },
    },
    {
      fi: "tulkki",
      en: "interpreter",
      taso: "B2",
      esim: { fi: "Tarvitsemme tulkin.", en: "We need an interpreter." },
    },
  ],
  synonyymit: [
    { fi: "selittää", en: "to explain" },
    { fi: "ymmärtää", en: "to understand (in a way)" },
  ],
  esimerkit: {
    A2: { fi: "Miten tulkitset tämän?", en: "How do you interpret this?" },
    B1: { fi: "Hän tulkitsi hiljaisuuden kielteiseksi vastaukseksi.", en: "He interpreted the silence as a negative answer." },
    B2: {
      fi: "Lakia voidaan tulkita usealla eri tavalla.",
      en: "The law can be interpreted in several different ways.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tulkita;
