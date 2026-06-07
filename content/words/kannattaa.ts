import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem kannatta- ~ kannata-.
// Present minä kannatan, hän kannattaa; imperfect minä kannatin; NUT kannattanut.
const kannattaa: Word = {
  fi: "kannattaa",
  slug: "kannattaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to be worth(while); to support",
  selitys:
    "Kaksi päämerkitystä: 1) persoonaton 'kannattaa tehdä jotakin' = on järkevää, hyödyllistä (sinun kannattaa levätä); 2) 'kannattaa jotakuta/jotakin' = tukea, olla puolella. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (kannatan). Vrt. kanta, kannattaja.",
  kuva: { emoji: "👍", alt: "kannattaa – olla hyödyllistä tai tukea jotakuta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (kannata- ~ kannatta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kannatan", merkitys: "I support" },
      { sija: "imperfekti (minä)", muoto: "kannatin", merkitys: "I supported" },
      { sija: "NUT-partisiippi", muoto: "kannattanut", merkitys: "(have) supported / been worth" },
    ],
    huom:
      "Persoonattomassa 'kannattaa' on yleensä yksikön 3. persoona + genetiivisubjekti: 'minun kannattaa', 'sinun kannattaa'. Tukemismerkityksessä objekti partitiivissa: 'kannatan tätä ehdotusta'. Astevaihtelu tt:t.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kannatan" },
          { label: "sinä", form: "kannatat" },
          { label: "hän", form: "kannattaa" },
          { label: "me", form: "kannatamme" },
          { label: "te", form: "kannatatte" },
          { label: "he", form: "kannattavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kannata" },
          { label: "hän", form: "ei kannata" },
          { label: "he", form: "eivät kannata" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kannatin" },
          { label: "sinä", form: "kannatit" },
          { label: "hän", form: "kannatti" },
          { label: "me", form: "kannatimme" },
          { label: "te", form: "kannatitte" },
          { label: "he", form: "kannattivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kannattanut" },
          { label: "hän", form: "on kannattanut" },
          { label: "he", form: "ovat kannattaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kannata!" },
          { label: "te", form: "kannattakaa!" },
          { label: "kielto (sinä)", form: "älä kannata" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kannattaja",
      en: "supporter, fan",
      taso: "B1",
      esim: { fi: "Joukkueella on innokkaita kannattajia.", en: "The team has enthusiastic supporters." },
    },
    {
      fi: "kannattava",
      en: "profitable, worthwhile",
      taso: "B2",
      esim: { fi: "Yritys on vihdoin kannattava.", en: "The company is finally profitable." },
    },
    {
      fi: "kannatus",
      en: "support, backing",
      taso: "B1",
      esim: { fi: "Ehdotus sai laajan kannatuksen.", en: "The proposal got broad support." },
    },
  ],
  synonyymit: [
    { fi: "tukea", en: "to support" },
    { fi: "olla hyödyllistä", en: "to be useful" },
  ],
  esimerkit: {
    A2: { fi: "Sinun kannattaa levätä.", en: "You'd better rest." },
    B1: { fi: "Kannatan tätä ehdotusta.", en: "I support this proposal." },
    B2: {
      fi: "Ennen päätöstä kannattaa miettiä, mitä seurauksia siitä voi tulla.",
      en: "Before the decision it's worth thinking about what consequences it might have.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kannattaa;
