import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 58/laskea, k:∅ gradation, stem tuke- ~ tue-.
// Present minä tuen, hän tukee; imperfect minä tuin; NUT tukenut. Partitive object.
const tukea: Word = {
  fi: "tukea",
  slug: "tukea",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to support, back",
  selitys:
    "Antaa fyysistä, henkistä tai taloudellista tukea: 'tukea ystävää'. Tyyppi 3 (-kea), Kotus 58/laskea, astevaihtelu k:∅ (tuen). Objekti partitiivissa. Vrt. tuki, tukija, kannattaa.",
  kuva: { alt: "tukea – antaa tukea jollekin" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-kea), Kotus 58/laskea; astevaihtelu k:∅ (tuke- ~ tue-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "tuen", merkitys: "I support" },
      { sija: "imperfekti (minä)", muoto: "tuin", merkitys: "I supported" },
      { sija: "NUT-partisiippi", muoto: "tukenut", merkitys: "(have) supported" },
    ],
    huom:
      "Astevaihtelu k:∅: heikko tue- (tuen, tuin), vahva tuke- (tukea, tukee, tukenut). Objekti partitiivissa: 'tukea jotakuta'. Huom: tuen = sekä verbi (I support) että tuki-sanan genetiivi. Vrt. tuki = support.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tuen" },
          { label: "sinä", form: "tuet" },
          { label: "hän", form: "tukee" },
          { label: "me", form: "tuemme" },
          { label: "te", form: "tuette" },
          { label: "he", form: "tukevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tue" },
          { label: "hän", form: "ei tue" },
          { label: "he", form: "eivät tue" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tuin" },
          { label: "sinä", form: "tuit" },
          { label: "hän", form: "tuki" },
          { label: "me", form: "tuimme" },
          { label: "te", form: "tuitte" },
          { label: "he", form: "tukivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tukenut" },
          { label: "hän", form: "on tukenut" },
          { label: "he", form: "ovat tukeneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tue!" },
          { label: "te", form: "tukekaa!" },
          { label: "kielto (sinä)", form: "älä tue" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuki",
      en: "support, aid, subsidy",
      taso: "B1",
      esim: { fi: "Hän sai taloudellista tukea.", en: "She received financial support." },
    },
    {
      fi: "tukija",
      en: "supporter, backer",
      taso: "B2",
      esim: { fi: "Hankkeella on monta tukijaa.", en: "The project has many backers." },
    },
  ],
  synonyymit: [
    { fi: "auttaa", en: "to help" },
    { fi: "kannattaa", en: "to support, back" },
  ],
  esimerkit: {
    A2: { fi: "Tuen sinua aina.", en: "I support you always." },
    B1: { fi: "Vanhemmat tukivat häntä opinnoissa.", en: "The parents supported her in her studies." },
    B2: {
      fi: "Hyvä esimies tukee työntekijöitään myös vaikeina aikoina.",
      en: "A good manager supports their employees even in difficult times.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tukea;
