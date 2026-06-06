import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem tutustu-.
// Present minä tutustun, hän tutustuu; imperfect minä tutustuin; NUT participle tutustunut.
const tutustua: Word = {
  fi: "tutustua",
  slug: "tutustua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to get to know, get acquainted with, explore",
  selitys:
    "Oppia tuntemaan ihminen, paikka tai asia: 'tutustua uuteen kaupunkiin'. Tyyppi 1 (-ua), tyyppi 52/sanoa, ei astevaihtelua. Kohde illatiivissa: 'tutustua johonkin'. Vrt. tuttu (familiar), tuttava.",
  kuva: { emoji: "🤝", alt: "tutustua – oppia tuntemaan ihminen, paikka tai asia" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo tutustu-",
    muodot: [
      { sija: "preesens (minä)", muoto: "tutustun", merkitys: "I get to know" },
      { sija: "imperfekti (minä)", muoto: "tutustuin", merkitys: "I got to know" },
      { sija: "NUT-partisiippi", muoto: "tutustunut", merkitys: "(have) got to know" },
    ],
    huom:
      "Ei astevaihtelua. Kohde illatiivissa: 'tutustua johonkin' = to get acquainted with. 'Tutustua toisiinsa' = to get to know each other. Vrt. tuttu = familiar, tuttava = acquaintance.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tutustun" },
          { label: "sinä", form: "tutustut" },
          { label: "hän", form: "tutustuu" },
          { label: "me", form: "tutustumme" },
          { label: "te", form: "tutustutte" },
          { label: "he", form: "tutustuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tutustu" },
          { label: "hän", form: "ei tutustu" },
          { label: "he", form: "eivät tutustu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tutustuin" },
          { label: "sinä", form: "tutustuit" },
          { label: "hän", form: "tutustui" },
          { label: "me", form: "tutustuimme" },
          { label: "te", form: "tutustuitte" },
          { label: "he", form: "tutustuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tutustunut" },
          { label: "hän", form: "on tutustunut" },
          { label: "he", form: "ovat tutustuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tutustu!" },
          { label: "te", form: "tutustukaa!" },
          { label: "kielto (sinä)", form: "älä tutustu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuttava",
      en: "acquaintance",
      taso: "B1",
      esim: { fi: "Hän on vanha tuttava.", en: "He is an old acquaintance." },
    },
    {
      fi: "tutustuminen",
      en: "getting acquainted, orientation",
      taso: "B2",
      esim: { fi: "Ensimmäinen päivä oli tutustumista.", en: "The first day was about getting acquainted." },
    },
    {
      fi: "tutkia",
      en: "to explore, examine",
      taso: "B1",
      esim: { fi: "Tutkimme karttaa ennen lähtöä.", en: "We studied the map before leaving." },
    },
  ],
  synonyymit: [
    { fi: "perehtyä", en: "to familiarize oneself with" },
    { fi: "oppia tuntemaan", en: "to come to know" },
  ],
  esimerkit: {
    A2: { fi: "Haluan tutustua sinuun.", en: "I want to get to know you." },
    B1: { fi: "Tutustuimme moneen uuteen ihmiseen kurssilla.", en: "We met many new people on the course." },
    B2: {
      fi: "Kannattaa tutustua sopimukseen huolellisesti ennen allekirjoittamista.",
      en: "It's worth getting acquainted with the contract carefully before signing.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tutustua;
