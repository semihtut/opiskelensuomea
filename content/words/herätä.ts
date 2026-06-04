import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 73/salata (verb type 4), no gradation.
// Present stem herää-, imperfect herä-si-, past participle herännyt. Intransitive —
// contrast with transitive herättää (to wake someone).
const herätä: Word = {
  fi: "herätä",
  slug: "herätä",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to wake up, awaken (intransitive)",
  selitys:
    "Lopettaa nukkuminen, tulla hereille. Tyyppi 4 (-tä), ei astevaihtelua. Erota 'herätä' (itr.) ja 'herättää' (tr., wake someone).",
  kuva: { emoji: "⏰", alt: "herätä – herätyskello soi" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-tä); ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "herään", merkitys: "I wake up" },
      { sija: "imperfekti (minä)", muoto: "heräsin", merkitys: "I woke up" },
      { sija: "kielto (minä)", muoto: "en herää", merkitys: "I don't wake up" },
    ],
    huom:
      "Preesensvartalo herää-, imperfekti herä-si-. Erota 'herätä' (= wake up, intransitiivi) ja 'herättää' (= wake someone, transitiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "herään" },
          { label: "sinä", form: "heräät" },
          { label: "hän", form: "herää" },
          { label: "me", form: "heräämme" },
          { label: "te", form: "heräätte" },
          { label: "he", form: "heräävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en herää" },
          { label: "sinä", form: "et herää" },
          { label: "hän", form: "ei herää" },
          { label: "me", form: "emme herää" },
          { label: "te", form: "ette herää" },
          { label: "he", form: "eivät herää" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "heräsin" },
          { label: "sinä", form: "heräsit" },
          { label: "hän", form: "heräsi" },
          { label: "me", form: "heräsimme" },
          { label: "te", form: "heräsitte" },
          { label: "he", form: "heräsivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en herännyt" },
          { label: "sinä", form: "et herännyt" },
          { label: "hän", form: "ei herännyt" },
          { label: "me", form: "emme heränneet" },
          { label: "te", form: "ette heränneet" },
          { label: "he", form: "eivät heränneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen herännyt" },
          { label: "sinä", form: "olet herännyt" },
          { label: "hän", form: "on herännyt" },
          { label: "me", form: "olemme heränneet" },
          { label: "te", form: "olette heränneet" },
          { label: "he", form: "ovat heränneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole herännyt" },
          { label: "hän", form: "ei ole herännyt" },
          { label: "he", form: "eivät ole heränneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "herää!" },
          { label: "te", form: "herätkää!" },
          { label: "kielto (sinä)", form: "älä herää" },
          { label: "kielto (te)", form: "älkää herätkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "herätys",
      en: "wake-up; alarm",
      taso: "A2",
      esim: { fi: "Herätys oli kello kuusi.", en: "The wake-up was at six o'clock." },
    },
    {
      fi: "herätyskello",
      en: "alarm clock",
      taso: "A2",
      esim: { fi: "Herätyskello soi liian aikaisin.", en: "The alarm clock rang too early." },
    },
    {
      fi: "herättää",
      en: "to wake (someone) up",
      taso: "B1",
      esim: { fi: "Älä herätä vauvaa.", en: "Don't wake the baby." },
    },
  ],
  synonyymit: [
    { fi: "havahtua", en: "to be startled awake" },
    { fi: "virota", en: "to come to, revive" },
  ],
  esimerkit: {
    A2: { fi: "Herään joka aamu kuudelta.", en: "I wake up at six every morning." },
    B1: { fi: "Heräsin keskellä yötä kovaan ääneen.", en: "I woke up in the middle of the night to a loud noise." },
    B2: {
      fi: "Hän heräsi vasta, kun aurinko paistoi suoraan kasvoille.",
      en: "He woke up only when the sun shone directly on his face.",
    },
  },
  updatedAt: "2026-06-04",
};

export default herätä;
