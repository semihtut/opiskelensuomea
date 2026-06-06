import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata (type 4), no gradation, stem kerää-.
// Present kerään, past keräsin, past participle kerännyt.
const kerata: Word = {
  fi: "kerätä",
  slug: "kerätä",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to collect, gather, pick",
  selitys:
    "Koota yhteen useita asioita: 'kerätä marjoja' / 'kerätä rahaa'. Tyyppi 4 (-ätä): kerätä → kerään. Vrt. keräys (collection), koota (to assemble).",
  kuva: { emoji: "🧺", alt: "kerätä – koota yhteen useita asioita" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ätä); ei astevaihtelua; vartalo kerää-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kerään", merkitys: "I collect" },
      { sija: "imperfekti (minä)", muoto: "keräsin", merkitys: "I collected" },
      { sija: "NUT-partisiippi", muoto: "kerännyt", merkitys: "(have) collected" },
    ],
    huom:
      "Tyypin 4 imperfekti -si: keräsin, keräsit, keräsi. Kohde partitiivissa: 'kerään sieniä'. Vrt. kerä = ball (of yarn), keräys = collection drive, kerääntyä = to accumulate.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kerään" },
          { label: "sinä", form: "keräät" },
          { label: "hän", form: "kerää" },
          { label: "me", form: "keräämme" },
          { label: "te", form: "keräätte" },
          { label: "he", form: "keräävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kerää" },
          { label: "hän", form: "ei kerää" },
          { label: "he", form: "eivät kerää" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "keräsin" },
          { label: "sinä", form: "keräsit" },
          { label: "hän", form: "keräsi" },
          { label: "me", form: "keräsimme" },
          { label: "te", form: "keräsitte" },
          { label: "he", form: "keräsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kerännyt" },
          { label: "hän", form: "on kerännyt" },
          { label: "he", form: "ovat keränneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kerää!" },
          { label: "te", form: "kerätkää!" },
          { label: "kielto (sinä)", form: "älä kerää" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "keräys",
      en: "collection (drive)",
      taso: "B2",
      esim: { fi: "Osallistuin vaatekeräykseen.", en: "I took part in a clothing collection." },
    },
    {
      fi: "kerääntyä",
      en: "to accumulate, gather (intransitive)",
      taso: "B2",
      esim: { fi: "Lunta kerääntyi pihalle.", en: "Snow accumulated in the yard." },
    },
    {
      fi: "keräilijä",
      en: "collector",
      taso: "B2",
      esim: { fi: "Hän on intohimoinen keräilijä.", en: "He is a passionate collector." },
    },
  ],
  synonyymit: [
    { fi: "koota", en: "to assemble, gather" },
    { fi: "poimia", en: "to pick" },
  ],
  esimerkit: {
    A2: { fi: "Keräämme marjoja metsässä.", en: "We pick berries in the forest." },
    B1: { fi: "Keräsin postimerkkejä lapsena.", en: "I collected stamps as a child." },
    B2: {
      fi: "He keräsivät varoja koko vuoden ajan hyväntekeväisyyteen.",
      en: "They collected funds for charity throughout the year.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kerata;
