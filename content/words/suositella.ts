import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, tt:t gradation, stem suosittele- ~ suositel-.
// Present minä suosittelen, hän suosittelee; imperfect minä suosittelin; NUT suositellut.
const suositella: Word = {
  fi: "suositella",
  slug: "suositella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to recommend",
  selitys:
    "Kehottaa valitsemaan tai kokeilemaan jotakin hyväksi katsomaansa: 'suositella kirjaa'. Tyyppi 3 (-lla), Kotus 67/tulla, astevaihtelu tt:t (suosittelen). Sanasta suosia. Vrt. suositus, ehdottaa, neuvoa.",
  kuva: { alt: "suositella – kehottaa valitsemaan tai kokeilemaan jotakin hyvää" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla), Kotus 67/tulla; astevaihtelu tt:t (suosittele- ~ suositel-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "suosittelen", merkitys: "I recommend" },
      { sija: "imperfekti (minä)", muoto: "suosittelin", merkitys: "I recommended" },
      { sija: "NUT-partisiippi", muoto: "suositellut", merkitys: "(have) recommended" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva preesensissä suosittele- (suosittelen, suosittelee), heikko infinitiivissä ja NUT-partisiipissa suositel- (suositella, suositellut). 'Suositella jollekulle jotakin'. Vrt. suositus = recommendation, ehdottaa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "suosittelen" },
          { label: "sinä", form: "suosittelet" },
          { label: "hän", form: "suosittelee" },
          { label: "me", form: "suosittelemme" },
          { label: "te", form: "suosittelette" },
          { label: "he", form: "suosittelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en suosittele" },
          { label: "hän", form: "ei suosittele" },
          { label: "he", form: "eivät suosittele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "suosittelin" },
          { label: "sinä", form: "suosittelit" },
          { label: "hän", form: "suositteli" },
          { label: "me", form: "suosittelimme" },
          { label: "te", form: "suosittelitte" },
          { label: "he", form: "suosittelivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen suositellut" },
          { label: "hän", form: "on suositellut" },
          { label: "he", form: "ovat suositelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "suosittele!" },
          { label: "te", form: "suositelkaa!" },
          { label: "kielto (sinä)", form: "älä suosittele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suositus",
      en: "recommendation",
      taso: "B2",
      esim: { fi: "Sain ystävältä suosituksen.", en: "I got a recommendation from a friend." },
    },
    {
      fi: "suosikki",
      en: "favourite",
      taso: "B1",
      esim: { fi: "Tämä on suosikkini.", en: "This is my favourite." },
    },
  ],
  synonyymit: [
    { fi: "ehdottaa", en: "to suggest" },
  ],
  esimerkit: {
    A2: { fi: "Suosittelen tätä ravintolaa.", en: "I recommend this restaurant." },
    B1: { fi: "Lääkäri suositteli lepoa.", en: "The doctor recommended rest." },
    B2: {
      fi: "Suosittelisin sinua varaamaan liput hyvissä ajoin.",
      en: "I would recommend you to book the tickets well in advance.",
    },
  },
  updatedAt: "2026-06-07",
};

export default suositella;
