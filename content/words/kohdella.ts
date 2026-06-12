import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, t:d gradation, stem kohtele- ~ kohdel-.
// Present minä kohtelen, hän kohtelee; imperfect minä kohtelin; NUT kohdellut. Partitive object.
const kohdella: Word = {
  fi: "kohdella",
  slug: "kohdella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to treat, behave towards",
  selitys:
    "Käyttäytyä jotakuta kohtaan tietyllä tavalla: 'kohdella oikeudenmukaisesti'. Tyyppi 3 (-lla), Kotus 67/tulla, astevaihtelu t:d (kohtelen vahva, kohdella heikko). Objekti partitiivissa. Vrt. kohtelu, kohdata, kohtelias.",
  kuva: { alt: "kohdella – käyttäytyä jotakuta kohtaan tietyllä tavalla" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla), Kotus 67/tulla; astevaihtelu t:d (kohdel- ~ kohtele-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kohtelen", merkitys: "I treat" },
      { sija: "imperfekti (minä)", muoto: "kohtelin", merkitys: "I treated" },
      { sija: "NUT-partisiippi", muoto: "kohdellut", merkitys: "(have) treated" },
    ],
    huom:
      "Astevaihtelu t:d: vahva kohtele- (kohtelen, kohtelin), heikko infinitiivissä ja NUT-muodossa (kohdella, kohdellut). Objekti partitiivissa + tavan adverbi: 'kohdella jotakuta hyvin'. Vrt. kohtelu = treatment.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kohtelen" },
          { label: "sinä", form: "kohtelet" },
          { label: "hän", form: "kohtelee" },
          { label: "me", form: "kohtelemme" },
          { label: "te", form: "kohtelette" },
          { label: "he", form: "kohtelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kohtele" },
          { label: "hän", form: "ei kohtele" },
          { label: "he", form: "eivät kohtele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kohtelin" },
          { label: "sinä", form: "kohtelit" },
          { label: "hän", form: "kohteli" },
          { label: "me", form: "kohtelimme" },
          { label: "te", form: "kohtelitte" },
          { label: "he", form: "kohtelivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kohdellut" },
          { label: "hän", form: "on kohdellut" },
          { label: "he", form: "ovat kohdelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kohtele!" },
          { label: "te", form: "kohdelkaa!" },
          { label: "kielto (sinä)", form: "älä kohtele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kohtelu",
      en: "treatment",
      taso: "B2",
      esim: { fi: "He vaativat tasapuolista kohtelua.", en: "They demanded equal treatment." },
    },
    {
      fi: "kohtelias",
      en: "polite, courteous",
      taso: "B1",
      esim: { fi: "Hän on aina kohtelias.", en: "He is always polite." },
    },
  ],
  synonyymit: [
    { fi: "suhtautua", en: "to relate to, treat" },
    { fi: "käyttäytyä", en: "to behave (towards)" },
  ],
  esimerkit: {
    A2: { fi: "Kohtele muita kauniisti.", en: "Treat others kindly." },
    B1: { fi: "Häntä kohdeltiin epäreilusti.", en: "He was treated unfairly." },
    B2: {
      fi: "Asiakkaita on kohdeltava tasapuolisesti riippumatta taustasta.",
      en: "Customers must be treated equally regardless of background.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kohdella;
