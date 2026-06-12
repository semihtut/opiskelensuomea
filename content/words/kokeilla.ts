import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, no gradation, stem kokeile- ~ kokeil-.
// Present minä kokeilen, hän kokeilee; imperfect minä kokeilin; NUT participle kokeillut.
const kokeilla: Word = {
  fi: "kokeilla",
  slug: "kokeilla",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A2",
  en: "to try, try out, test, experiment with",
  selitys:
    "Yrittää tai testata jotakin uutta: 'kokeilla uutta ruokaa'. Tyyppi 3 (-lla), ei astevaihtelua; vartalo kokeile-. Johdettu verbistä kokea. Vrt. koe (test), kokemus (experience).",
  kuva: { alt: "kokeilla – yrittää tai testata jotakin uutta" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla); ei astevaihtelua; vartalo kokeile- ~ kokeil-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kokeilen", merkitys: "I try" },
      { sija: "imperfekti (minä)", muoto: "kokeilin", merkitys: "I tried" },
      { sija: "NUT-partisiippi", muoto: "kokeillut", merkitys: "(have) tried" },
    ],
    huom:
      "Ei astevaihtelua. NUT-partisiipissa kahdennettu l (kokeillut), perusmuodossa myös -lla. Kohde partitiivissa: 'kokeilla takkia' = to try on the coat. Vrt. yrittää (yritystä korostaen).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kokeilen" },
          { label: "sinä", form: "kokeilet" },
          { label: "hän", form: "kokeilee" },
          { label: "me", form: "kokeilemme" },
          { label: "te", form: "kokeilette" },
          { label: "he", form: "kokeilevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kokeile" },
          { label: "hän", form: "ei kokeile" },
          { label: "he", form: "eivät kokeile" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kokeilin" },
          { label: "sinä", form: "kokeilit" },
          { label: "hän", form: "kokeili" },
          { label: "me", form: "kokeilimme" },
          { label: "te", form: "kokeilitte" },
          { label: "he", form: "kokeilivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kokeillut" },
          { label: "hän", form: "on kokeillut" },
          { label: "he", form: "ovat kokeilleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kokeile!" },
          { label: "te", form: "kokeilkaa!" },
          { label: "kielto (sinä)", form: "älä kokeile" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kokeilu",
      en: "trial, experiment",
      taso: "B1",
      esim: { fi: "Uusi malli on vasta kokeilussa.", en: "The new model is still in trial." },
    },
    {
      fi: "kokemus",
      en: "experience",
      taso: "B1",
      esim: { fi: "Se oli ainutlaatuinen kokemus.", en: "It was a unique experience." },
    },
    {
      fi: "kokeellinen",
      en: "experimental",
      taso: "B2",
      esim: { fi: "Hoito on yhä kokeellinen.", en: "The treatment is still experimental." },
    },
  ],
  synonyymit: [
    { fi: "yrittää", en: "to try (attempt)" },
    { fi: "testata", en: "to test" },
  ],
  esimerkit: {
    A2: { fi: "Haluan kokeilla tätä takkia.", en: "I want to try on this coat." },
    B1: { fi: "Kokeile rohkeasti uutta reseptiä!", en: "Boldly try out a new recipe!" },
    B2: {
      fi: "Jos vanha tapa ei toimi, kannattaa kokeilla jotain aivan uutta.",
      en: "If the old way doesn't work, it's worth trying something entirely new.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kokeilla;
