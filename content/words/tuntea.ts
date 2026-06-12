import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 59/tuntea (type 1), nt:nn gradation,
// stem tunte-/tunne-. Present tunnen, IRREGULAR past tunsin (s-stem), NUT tuntenut.
const tuntea: Word = {
  fi: "tuntea",
  slug: "tuntea",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to feel; to know (a person)",
  selitys:
    "Aistia tunne; tuntea joku entuudestaan. Tyyppi 1, astevaihtelu nt:nn: tuntea → tunnen. Imperfekti on poikkeava s-vartalo: tunsin.",
  kuva: { alt: "tuntea – aistia ja tunnistaa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-tea); astevaihtelu nt:nn; poikkeava imperfekti tunsin",
    muodot: [
      { sija: "preesens (minä)", muoto: "tunnen", merkitys: "I feel / know" },
      { sija: "imperfekti (minä)", muoto: "tunsin", merkitys: "I felt / knew" },
      { sija: "NUT-partisiippi", muoto: "tuntenut", merkitys: "(have) felt / known" },
    ],
    huom:
      "Preesensissä nt → nn: tunnen, tunnet. Imperfekti on poikkeava: t korvautuu s:llä → tunsin, tunsi (ei *tunnin). Tuntea joku = to know a person; tuntea olonsa = to feel.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tunnen" },
          { label: "sinä", form: "tunnet" },
          { label: "hän", form: "tuntee" },
          { label: "me", form: "tunnemme" },
          { label: "te", form: "tunnette" },
          { label: "he", form: "tuntevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tunne" },
          { label: "hän", form: "ei tunne" },
          { label: "he", form: "eivät tunne" },
        ],
      },
      {
        title: "Imperfekti (poikkeava: tuns-)",
        rows: [
          { label: "minä", form: "tunsin" },
          { label: "sinä", form: "tunsit" },
          { label: "hän", form: "tunsi" },
          { label: "me", form: "tunsimme" },
          { label: "te", form: "tunsitte" },
          { label: "he", form: "tunsivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tuntenut" },
          { label: "hän", form: "on tuntenut" },
          { label: "he", form: "ovat tunteneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tunne!" },
          { label: "te", form: "tuntekaa!" },
          { label: "kielto (sinä)", form: "älä tunne" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tunne",
      en: "feeling, emotion",
      taso: "B1",
      esim: { fi: "Se oli outo tunne.", en: "It was a strange feeling." },
    },
    {
      fi: "tuntua",
      en: "to feel (seem), to be felt",
      taso: "A2",
      esim: { fi: "Tuntuu kylmältä.", en: "It feels cold." },
    },
    {
      fi: "tuttu",
      en: "familiar; acquaintance",
      taso: "A2",
      esim: { fi: "Hän on minulle tuttu.", en: "He is familiar to me." },
    },
  ],
  synonyymit: [
    { fi: "aistia", en: "to sense" },
    { fi: "tuntea entuudestaan", en: "to know beforehand" },
  ],
  esimerkit: {
    A2: { fi: "Tunnen hänet hyvin.", en: "I know him well." },
    B1: { fi: "Tunsin oloni väsyneeksi koko päivän.", en: "I felt tired the whole day." },
    B2: {
      fi: "Vaikka tapasimme vain kerran, tunsin heti, että meistä tulisi ystäviä.",
      en: "Although we met only once, I felt right away that we would become friends.",
    },
  },
  updatedAt: "2026-06-05",
};

export default tuntea;
