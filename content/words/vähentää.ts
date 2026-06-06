import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, nt–nn gradation, stem vähentä-.
// Present vähennän, IRREGULAR past vähensin (t→s before i), past participle vähentänyt.
const vahentaa: Word = {
  fi: "vähentää",
  slug: "vähentää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to reduce, decrease; to subtract",
  selitys:
    "Tehdä vähemmäksi: 'vähentää kuluja'. Astevaihtelu nt:nn (vähentää → vähennän), imperfekti poikkeava: vähensin. Vastakohta lisätä. Juuri vähä (little).",
  kuva: { emoji: "➖", alt: "vähentää – tehdä vähemmäksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-tää); astevaihtelu nt:nn; vartalo vähentä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "vähennän", merkitys: "I reduce" },
      { sija: "imperfekti (minä)", muoto: "vähensin", merkitys: "I reduced" },
      { sija: "NUT-partisiippi", muoto: "vähentänyt", merkitys: "(have) reduced" },
    ],
    huom:
      "Astevaihtelu nt:nn preesensissä: vähennän, vähennät, vähentää. Imperfektissä t→s: vähensin, vähensit, vähensi. Vastakohta lisätä. Vrt. vähän = a little, vähetä = to diminish (intr.).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vähennän" },
          { label: "sinä", form: "vähennät" },
          { label: "hän", form: "vähentää" },
          { label: "me", form: "vähennämme" },
          { label: "te", form: "vähennätte" },
          { label: "he", form: "vähentävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vähennä" },
          { label: "hän", form: "ei vähennä" },
          { label: "he", form: "eivät vähennä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vähensin" },
          { label: "sinä", form: "vähensit" },
          { label: "hän", form: "vähensi" },
          { label: "me", form: "vähensimme" },
          { label: "te", form: "vähensitte" },
          { label: "he", form: "vähensivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen vähentänyt" },
          { label: "hän", form: "on vähentänyt" },
          { label: "he", form: "ovat vähentäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vähennä!" },
          { label: "te", form: "vähentäkää!" },
          { label: "kielto (sinä)", form: "älä vähennä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vähennys",
      en: "reduction, deduction",
      taso: "B2",
      esim: { fi: "Sain verovähennyksen.", en: "I got a tax deduction." },
    },
    {
      fi: "vähemmän",
      en: "less",
      taso: "A2",
      esim: { fi: "Syön nykyään vähemmän lihaa.", en: "I eat less meat nowadays." },
    },
    {
      fi: "vähetä",
      en: "to diminish, decrease (intransitive)",
      taso: "B2",
      esim: { fi: "Valo vähenee illan tullen.", en: "The light diminishes as evening comes." },
    },
  ],
  synonyymit: [
    { fi: "supistaa", en: "to cut down, contract" },
    { fi: "karsia", en: "to trim, prune" },
  ],
  esimerkit: {
    A2: { fi: "Yritän vähentää sokeria.", en: "I'm trying to cut down on sugar." },
    B1: { fi: "Vähensimme kuluja huomattavasti.", en: "We reduced costs considerably." },
    B2: {
      fi: "Etätyö vähensi liikennettä keskustassa selvästi.",
      en: "Remote work clearly reduced traffic in the city centre.",
    },
  },
  updatedAt: "2026-06-06",
};

export default vahentaa;
