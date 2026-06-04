import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 67/tulla (verb type 3), no gradation,
// stem mene-. Present menen, past menin/meni, past participle mennyt/menneet.
const menna: Word = {
  fi: "mennä",
  slug: "mennä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A1",
  en: "to go",
  selitys:
    "Liikkua jonnekin pois puhujasta katsottuna. Tyyppi 3 (-llä → -e-), vartalo mene-, ei astevaihtelua. Vastakohta 'tulla' (= come).",
  kuva: { emoji: "🚶", alt: "mennä – ihminen menossa jonnekin" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-nnä); vartalo mene-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "menen", merkitys: "I go" },
      { sija: "imperfekti (minä)", muoto: "menin", merkitys: "I went" },
      { sija: "kielto (minä)", muoto: "en mene", merkitys: "I don't go" },
    ],
    huom:
      "Suunta usein illatiivissa: 'Menen kauppaan.' Vastakohta tulla (= come). NB-partisiippi mennyt, monikko menneet.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "menen" },
          { label: "sinä", form: "menet" },
          { label: "hän", form: "menee" },
          { label: "me", form: "menemme" },
          { label: "te", form: "menette" },
          { label: "he", form: "menevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en mene" },
          { label: "sinä", form: "et mene" },
          { label: "hän", form: "ei mene" },
          { label: "me", form: "emme mene" },
          { label: "te", form: "ette mene" },
          { label: "he", form: "eivät mene" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "menin" },
          { label: "sinä", form: "menit" },
          { label: "hän", form: "meni" },
          { label: "me", form: "menimme" },
          { label: "te", form: "menitte" },
          { label: "he", form: "menivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en mennyt" },
          { label: "sinä", form: "et mennyt" },
          { label: "hän", form: "ei mennyt" },
          { label: "me", form: "emme menneet" },
          { label: "te", form: "ette menneet" },
          { label: "he", form: "eivät menneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen mennyt" },
          { label: "sinä", form: "olet mennyt" },
          { label: "hän", form: "on mennyt" },
          { label: "me", form: "olemme menneet" },
          { label: "te", form: "olette menneet" },
          { label: "he", form: "ovat menneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole mennyt" },
          { label: "hän", form: "ei ole mennyt" },
          { label: "he", form: "eivät ole menneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "mene!" },
          { label: "te", form: "menkää!" },
          { label: "kielto (sinä)", form: "älä mene" },
          { label: "kielto (te)", form: "älkää menkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "meno",
      en: "going, departure; (pl.) goings-on",
      taso: "B1",
      esim: { fi: "Meno alkaa kello kahdeksan.", en: "The departure is at eight." },
    },
    {
      fi: "menneisyys",
      en: "the past",
      taso: "B1",
      esim: { fi: "Älä elä menneisyydessä.", en: "Don't live in the past." },
    },
    {
      fi: "mennä naimisiin",
      en: "to get married",
      taso: "B1",
      esim: { fi: "He menivät naimisiin kesällä.", en: "They got married in the summer." },
    },
  ],
  synonyymit: [
    { fi: "lähteä", en: "to leave, set off" },
    { fi: "suunnata", en: "to head (somewhere)" },
  ],
  esimerkit: {
    A2: { fi: "Menen kouluun aamulla.", en: "I go to school in the morning." },
    B1: { fi: "Menimme eilen elokuviin.", en: "We went to the movies yesterday." },
    B2: {
      fi: "Jos olisin mennyt aiemmin, olisin ehtinyt junaan.",
      en: "If I had gone earlier, I would have caught the train.",
    },
  },
  updatedAt: "2026-06-04",
};

export default menna;
