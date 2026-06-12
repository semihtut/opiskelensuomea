import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, no gradation, i-stem.
// Present minä juhlin = imperfect minä juhlin; hän juhlii/juhli; NUT juhlinut.
const juhlia: Word = {
  fi: "juhlia",
  slug: "juhlia",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to celebrate, party",
  selitys:
    "Viettää juhlaa tai iloita jostakin: 'juhlia syntymäpäivää'. Tyyppi 1 (-ia), Kotus 61/sallia, ei astevaihtelua. i-vartalo: minä-muoto sama preesensissä ja imperfektissä (juhlin). Sanasta juhla. Vrt. juhla, viettää, iloita.",
  kuva: { alt: "juhlia – viettää juhlaa tai iloita jostakin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ia), Kotus 61/sallia; ei astevaihtelua (vartalo juhli-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "juhlin", merkitys: "I celebrate" },
      { sija: "imperfekti (minä)", muoto: "juhlin", merkitys: "I celebrated (sama muoto!)" },
      { sija: "NUT-partisiippi", muoto: "juhlinut", merkitys: "(have) celebrated" },
    ],
    huom:
      "i-vartalo: minä juhlin on SAMA preesensissä ja imperfektissä; vain hän eroaa (juhlii ↔ juhli). Ei astevaihtelua. Objekti partitiivissa (juhlia voittoa). Sanasta juhla. Vrt. viettää, juhla.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "juhlin" },
          { label: "sinä", form: "juhlit" },
          { label: "hän", form: "juhlii" },
          { label: "me", form: "juhlimme" },
          { label: "te", form: "juhlitte" },
          { label: "he", form: "juhlivat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en juhli" },
          { label: "hän", form: "ei juhli" },
          { label: "he", form: "eivät juhli" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "juhlin" },
          { label: "sinä", form: "juhlit" },
          { label: "hän", form: "juhli" },
          { label: "me", form: "juhlimme" },
          { label: "te", form: "juhlitte" },
          { label: "he", form: "juhlivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen juhlinut" },
          { label: "hän", form: "on juhlinut" },
          { label: "he", form: "ovat juhlineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "juhli!" },
          { label: "te", form: "juhlikaa!" },
          { label: "kielto (sinä)", form: "älä juhli" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "juhla",
      en: "celebration, party, festival",
      taso: "A2",
      esim: { fi: "Juhla alkaa kello kuusi.", en: "The party starts at six o'clock." },
    },
    {
      fi: "juhlallinen",
      en: "festive, solemn",
      taso: "B2",
      esim: { fi: "Tilaisuus oli juhlallinen.", en: "The occasion was solemn." },
    },
  ],
  synonyymit: [
    { fi: "viettää", en: "to celebrate (an occasion)" },
  ],
  esimerkit: {
    A2: { fi: "Juhlimme synttäreitä.", en: "We're celebrating a birthday." },
    B1: { fi: "Juhlimme valmistumista koko illan.", en: "We celebrated the graduation all evening." },
    B2: {
      fi: "Joukkue juhli mestaruutta kannattajien kanssa torilla.",
      en: "The team celebrated the championship with the fans in the market square.",
    },
  },
  updatedAt: "2026-06-07",
};

export default juhlia;
