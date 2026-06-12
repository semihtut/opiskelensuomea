import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, no gradation, stem suojele-.
// Present minä suojelen, hän suojelee; imperfect minä suojelin; NUT suojellut.
const suojella: Word = {
  fi: "suojella",
  slug: "suojella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to protect, shelter",
  selitys:
    "Varjella jotakuta tai jotakin vaaralta tai vahingolta: 'suojella luontoa'. Tyyppi 3 (-lla), Kotus 67/tulla, ei astevaihtelua; vartalo suojele-. Objekti partitiivissa. Vrt. suoja, suojelu, suojata.",
  kuva: { alt: "suojella – varjella vaaralta tai vahingolta" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla), Kotus 67/tulla; ei astevaihtelua; vartalo suojele-",
    muodot: [
      { sija: "preesens (minä)", muoto: "suojelen", merkitys: "I protect" },
      { sija: "imperfekti (minä)", muoto: "suojelin", merkitys: "I protected" },
      { sija: "NUT-partisiippi", muoto: "suojellut", merkitys: "(have) protected" },
    ],
    huom:
      "Tyyppi 67 (-ella): vartalo suojele- kaikkialla, ei astevaihtelua. NUT-partisiippi suojellut (kaksois-l). Objekti partitiivissa: 'suojella ympäristöä'. Vrt. suojelu = protection, suoja = shelter.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "suojelen" },
          { label: "sinä", form: "suojelet" },
          { label: "hän", form: "suojelee" },
          { label: "me", form: "suojelemme" },
          { label: "te", form: "suojelette" },
          { label: "he", form: "suojelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en suojele" },
          { label: "hän", form: "ei suojele" },
          { label: "he", form: "eivät suojele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "suojelin" },
          { label: "sinä", form: "suojelit" },
          { label: "hän", form: "suojeli" },
          { label: "me", form: "suojelimme" },
          { label: "te", form: "suojelitte" },
          { label: "he", form: "suojelivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen suojellut" },
          { label: "hän", form: "on suojellut" },
          { label: "he", form: "ovat suojelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "suojele!" },
          { label: "te", form: "suojelkaa!" },
          { label: "kielto (sinä)", form: "älä suojele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suojelu",
      en: "protection, conservation",
      taso: "B1",
      esim: { fi: "Luonnonsuojelu on tärkeää.", en: "Nature conservation is important." },
    },
    {
      fi: "suoja",
      en: "shelter, protection",
      taso: "B1",
      esim: { fi: "Etsimme suojaa sateelta.", en: "We looked for shelter from the rain." },
    },
  ],
  synonyymit: [
    { fi: "varjella", en: "to safeguard" },
    { fi: "puolustaa", en: "to defend" },
  ],
  esimerkit: {
    A2: { fi: "Suojele ympäristöä.", en: "Protect the environment." },
    B1: { fi: "Vanhemmat suojelevat lapsiaan.", en: "Parents protect their children." },
    B2: {
      fi: "Aluetta suojellaan, jotta harvinaiset lajit säilyisivät.",
      en: "The area is protected so that rare species would survive.",
    },
  },
  updatedAt: "2026-06-07",
};

export default suojella;
