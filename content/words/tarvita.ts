import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 69/valita (verb type 6, -ita), no
// gradation. Present stem tarvitse-, imperfect tarvitsi-, past participle tarvinnut.
const tarvita: Word = {
  fi: "tarvita",
  slug: "tarvita",
  pos: "verbi (tyyppi 6, -ita)",
  posClass: "verbi",
  level: "A2",
  en: "to need",
  selitys:
    "Olla jonkin tarpeessa. Tyyppi 6 (-ita): preesensvartalo tarvitse-. Partisiippi on poikkeava: tarvinnut.",
  kuva: { emoji: "🙋", alt: "tarvita – avunpyyntö, tarve" },

  kielioppi: {
    tyyppi: "tyyppi 6 (-ita); vartalo tarvitse-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "tarvitsen", merkitys: "I need" },
      { sija: "imperfekti (minä)", muoto: "tarvitsin", merkitys: "I needed" },
      { sija: "kielto (minä)", muoto: "en tarvitse", merkitys: "I don't need" },
    ],
    huom:
      "Tyyppi 6: -ita → preesensvartalo -tse- (tarvitsen). Partisiippi tarvinnut (EI *tarvitsenut). Tarvittava asia on partitiivissa: 'tarvitsen apua'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tarvitsen" },
          { label: "sinä", form: "tarvitset" },
          { label: "hän", form: "tarvitsee" },
          { label: "me", form: "tarvitsemme" },
          { label: "te", form: "tarvitsette" },
          { label: "he", form: "tarvitsevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tarvitse" },
          { label: "sinä", form: "et tarvitse" },
          { label: "hän", form: "ei tarvitse" },
          { label: "me", form: "emme tarvitse" },
          { label: "te", form: "ette tarvitse" },
          { label: "he", form: "eivät tarvitse" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tarvitsin" },
          { label: "sinä", form: "tarvitsit" },
          { label: "hän", form: "tarvitsi" },
          { label: "me", form: "tarvitsimme" },
          { label: "te", form: "tarvitsitte" },
          { label: "he", form: "tarvitsivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en tarvinnut" },
          { label: "sinä", form: "et tarvinnut" },
          { label: "hän", form: "ei tarvinnut" },
          { label: "me", form: "emme tarvinneet" },
          { label: "te", form: "ette tarvinneet" },
          { label: "he", form: "eivät tarvinneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tarvinnut" },
          { label: "sinä", form: "olet tarvinnut" },
          { label: "hän", form: "on tarvinnut" },
          { label: "me", form: "olemme tarvinneet" },
          { label: "te", form: "olette tarvinneet" },
          { label: "he", form: "ovat tarvinneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole tarvinnut" },
          { label: "hän", form: "ei ole tarvinnut" },
          { label: "he", form: "eivät ole tarvinneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tarvitse!" },
          { label: "te", form: "tarvitkaa!" },
          { label: "kielto (sinä)", form: "älä tarvitse" },
          { label: "kielto (te)", form: "älkää tarvitko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tarve",
      en: "need",
      taso: "B1",
      esim: { fi: "Tunnen tarvetta levätä.", en: "I feel a need to rest." },
    },
    {
      fi: "tarpeellinen",
      en: "necessary, needed",
      taso: "B1",
      esim: { fi: "Otin mukaan vain tarpeelliset tavarat.", en: "I took only the necessary things." },
    },
    {
      fi: "tarvike",
      en: "supply, accessory",
      taso: "B2",
      esim: { fi: "Ostin maalaustarvikkeet.", en: "I bought the painting supplies." },
    },
  ],
  synonyymit: [
    { fi: "kaivata", en: "to need; to miss, long for" },
    { fi: "vaatia", en: "to require, demand" },
  ],
  esimerkit: {
    A2: { fi: "Tarvitsen apua.", en: "I need help." },
    B1: { fi: "Tarvitsin lääkärin lausunnon.", en: "I needed a doctor's statement." },
    B2: {
      fi: "Et olisi tarvinnut vaivautua — selvisin yksin.",
      en: "You needn't have bothered — I managed on my own.",
    },
  },
  updatedAt: "2026-06-04",
};

export default tarvita;
