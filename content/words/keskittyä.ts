import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, tt:t gradation, stem keskitty- ~ keskity-.
// Present minä keskityn, hän keskittyy; imperfect minä keskityin; NUT keskittynyt. Governs illative.
const keskittya: Word = {
  fi: "keskittyä",
  slug: "keskittyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to concentrate, focus",
  selitys:
    "Suunnata huomio yhteen asiaan: 'keskittyä työhön'. Tyyppi 1 (-yä), Kotus 52/sanoa, astevaihtelu tt:t (keskityn). Hallitsee illatiivia ('keskittyä johonkin'). Vastakohta hajamielisyys. Vrt. keskittää, keskittyminen.",
  kuva: { emoji: "🧠", alt: "keskittyä – suunnata huomio yhteen asiaan" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; astevaihtelu tt:t (keskity- ~ keskitty-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "keskityn", merkitys: "I concentrate" },
      { sija: "imperfekti (minä)", muoto: "keskityin", merkitys: "I concentrated" },
      { sija: "NUT-partisiippi", muoto: "keskittynyt", merkitys: "(have) concentrated" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva keskitty- (keskittyä, keskittyy, keskittynyt), heikko keskity- (keskityn, keskityin). Hallitsee illatiivia: 'keskittyä opiskeluun'. Vrt. keskittää (transitiivinen) = to centralize, concentrate.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "keskityn" },
          { label: "sinä", form: "keskityt" },
          { label: "hän", form: "keskittyy" },
          { label: "me", form: "keskitymme" },
          { label: "te", form: "keskitytte" },
          { label: "he", form: "keskittyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en keskity" },
          { label: "hän", form: "ei keskity" },
          { label: "he", form: "eivät keskity" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "keskityin" },
          { label: "sinä", form: "keskityit" },
          { label: "hän", form: "keskittyi" },
          { label: "me", form: "keskityimme" },
          { label: "te", form: "keskityitte" },
          { label: "he", form: "keskittyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen keskittynyt" },
          { label: "hän", form: "on keskittynyt" },
          { label: "he", form: "ovat keskittyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "keskity!" },
          { label: "te", form: "keskittykää!" },
          { label: "kielto (sinä)", form: "älä keskity" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "keskittyminen",
      en: "concentration, focusing",
      taso: "B2",
      esim: { fi: "Keskittyminen herpaantui hetkeksi.", en: "Concentration lapsed for a moment." },
    },
    {
      fi: "keskittynyt",
      en: "concentrated, focused",
      taso: "B2",
      esim: { fi: "Hän näytti hyvin keskittyneeltä.", en: "He looked very focused." },
    },
    {
      fi: "keskittää",
      en: "to centralize, concentrate (sth)",
      taso: "B2",
      esim: { fi: "Palvelut keskitettiin keskustaan.", en: "The services were centralized downtown." },
    },
  ],
  synonyymit: [
    { fi: "paneutua", en: "to immerse oneself, focus on" },
    { fi: "syventyä", en: "to delve into" },
  ],
  esimerkit: {
    A2: { fi: "Keskity nyt tähän.", en: "Focus on this now." },
    B1: { fi: "On vaikea keskittyä, kun on meluisaa.", en: "It's hard to concentrate when it's noisy." },
    B2: {
      fi: "Tällä viikolla keskityn pelkästään tärkeimpiin tehtäviin.",
      en: "This week I'll focus solely on the most important tasks.",
    },
  },
  updatedAt: "2026-06-07",
};

export default keskittya;
