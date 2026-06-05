import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 66/rohkaista (type 3), no gradation,
// e-stem pese-. Present pesen, past pesin, past participle pessyt.
const pesta: Word = {
  fi: "pestä",
  slug: "pestä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A2",
  en: "to wash",
  selitys:
    "Puhdistaa vedellä (ja saippualla). Tyyppi 3 (e-vartalo): pestä → pesen. Huom. NUT-partisiippi pessyt. Vrt. peseytyä (pestä itsensä).",
  kuva: { emoji: "🧼", alt: "pestä – peseminen vedellä ja saippualla" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-stä → -se); ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "pesen", merkitys: "I wash" },
      { sija: "imperfekti (minä)", muoto: "pesin", merkitys: "I washed" },
      { sija: "NUT-partisiippi", muoto: "pessyt", merkitys: "(have) washed" },
    ],
    huom:
      "Tyyppi 3: -stä jää pois ja tilalle tulee -e (pese-). NUT-partisiippi on poikkeava: pessyt (ei *pesnyt). Pestä kädet / pyykki / astiat.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "pesen" },
          { label: "sinä", form: "peset" },
          { label: "hän", form: "pesee" },
          { label: "me", form: "pesemme" },
          { label: "te", form: "pesette" },
          { label: "he", form: "pesevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pese" },
          { label: "hän", form: "ei pese" },
          { label: "he", form: "eivät pese" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "pesin" },
          { label: "sinä", form: "pesit" },
          { label: "hän", form: "pesi" },
          { label: "me", form: "pesimme" },
          { label: "te", form: "pesitte" },
          { label: "he", form: "pesivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pessyt" },
          { label: "hän", form: "on pessyt" },
          { label: "he", form: "ovat pesseet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pese!" },
          { label: "te", form: "peskää!" },
          { label: "kielto (sinä)", form: "älä pese" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "peseytyä",
      en: "to wash oneself",
      taso: "B1",
      esim: { fi: "Peseydyin ennen nukkumaanmenoa.", en: "I washed up before going to bed." },
    },
    {
      fi: "pesu",
      en: "wash, laundry",
      taso: "A2",
      esim: { fi: "Pyykinpesu kestää tunnin.", en: "The laundry takes an hour." },
    },
    {
      fi: "pesukone",
      en: "washing machine",
      taso: "A2",
      esim: { fi: "Pesukone on rikki.", en: "The washing machine is broken." },
    },
  ],
  synonyymit: [
    { fi: "puhdistaa", en: "to clean" },
    { fi: "huuhdella", en: "to rinse" },
  ],
  esimerkit: {
    A2: { fi: "Pesen kädet ennen ruokaa.", en: "I wash my hands before eating." },
    B1: { fi: "Pesin auton viikonloppuna.", en: "I washed the car at the weekend." },
    B2: {
      fi: "En ole vielä pessyt pyykkiä, koska pesukone meni rikki eilen.",
      en: "I haven't washed the laundry yet, because the machine broke yesterday.",
    },
  },
  updatedAt: "2026-06-05",
};

export default pesta;
