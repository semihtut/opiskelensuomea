import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, nt:nn gradation, stem lentä- ~ lennä-.
// Present lennän, past lensin (nt→ns before i), past participle lentänyt.
const lentaa: Word = {
  fi: "lentää",
  slug: "lentää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to fly",
  selitys:
    "Liikkua ilmassa: 'lentää Lappiin'. Tyyppi 1 (-ää), astevaihtelu nt:nn (lennän), ja imperfektissä nt → ns (lensin). Vrt. lento (flight), lentäjä (pilot), lentokone (airplane).",
  kuva: { emoji: "✈️", alt: "lentää – liikkua ilmassa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), huutaa-tyyppi; astevaihtelu nt:nn; imperfektissä nt → ns",
    muodot: [
      { sija: "preesens (minä)", muoto: "lennän", merkitys: "I fly" },
      { sija: "imperfekti (minä)", muoto: "lensin", merkitys: "I flew" },
      { sija: "NUT-partisiippi", muoto: "lentänyt", merkitys: "(have) flown" },
    ],
    huom:
      "Persoonamuodoissa heikko nn (lennän), 3. persoonassa ja infinitiivissä vahva nt (lentää, lentänyt). Imperfektissä nt → ns: lensin, lensi. Vrt. huutaa → huusin. Lentokone = airplane.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "lennän" },
          { label: "sinä", form: "lennät" },
          { label: "hän", form: "lentää" },
          { label: "me", form: "lennämme" },
          { label: "te", form: "lennätte" },
          { label: "he", form: "lentävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en lennä" },
          { label: "hän", form: "ei lennä" },
          { label: "he", form: "eivät lennä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "lensin" },
          { label: "sinä", form: "lensit" },
          { label: "hän", form: "lensi" },
          { label: "me", form: "lensimme" },
          { label: "te", form: "lensitte" },
          { label: "he", form: "lensivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen lentänyt" },
          { label: "hän", form: "on lentänyt" },
          { label: "he", form: "ovat lentäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "lennä!" },
          { label: "te", form: "lentäkää!" },
          { label: "kielto (sinä)", form: "älä lennä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lento",
      en: "flight",
      taso: "A2",
      esim: { fi: "Lento myöhästyi tunnin.", en: "The flight was delayed by an hour." },
    },
    {
      fi: "lentäjä",
      en: "pilot",
      taso: "B1",
      esim: { fi: "Hän on ammatiltaan lentäjä.", en: "He is a pilot by profession." },
    },
    {
      fi: "lentokenttä",
      en: "airport",
      taso: "A2",
      esim: { fi: "Tapaan sinut lentokentällä.", en: "I'll meet you at the airport." },
    },
  ],
  synonyymit: [
    { fi: "lennellä", en: "to fly about" },
    { fi: "liidellä", en: "to glide" },
  ],
  esimerkit: {
    A2: { fi: "Lennän huomenna Ouluun.", en: "I'm flying to Oulu tomorrow." },
    B1: { fi: "Linnut lensivät etelään.", en: "The birds flew south." },
    B2: {
      fi: "Lensimme suoraan kotiin ilman välilaskua.",
      en: "We flew straight home without a stopover.",
    },
  },
  updatedAt: "2026-06-06",
};

export default lentaa;
