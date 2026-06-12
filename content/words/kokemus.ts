import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem kokemukse-.
// Genitive kokemuksen, partitive kokemusta, illative kokemukseen, partitive pl kokemuksia.
const kokemus: Word = {
  fi: "kokemus",
  slug: "kokemus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "experience",
  selitys:
    "Se, mitä on eletty tai opittu tekemällä: 'työkokemus' / 'unohtumaton kokemus'. Tyyppi 39, ei astevaihtelua. Juuri verbistä kokea. Vrt. kokenut (experienced).",
  kuva: { alt: "kokemus – mitä on eletty tai opittu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo kokemukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kokemuksen", merkitys: "of the experience" },
      { sija: "partitiivi (yks.)", muoto: "kokemusta", merkitys: "experience (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kokemuksia", merkitys: "experiences (partitive pl.)" },
    ],
    huom:
      "Loppu -us (verbijohdos) → vartalo -ukse-: kokemus → kokemuksen. Kaksi sävyä: 1) yksittäinen elämys, 2) kertynyt osaaminen ('paljon kokemusta'). Vrt. kokea = to experience, kokenut = experienced.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kokemus" },
          { label: "Partitiivi", form: "kokemusta" },
          { label: "Genetiivi", form: "kokemuksen" },
          { label: "Inessiivi", form: "kokemuksessa" },
          { label: "Elatiivi", form: "kokemuksesta" },
          { label: "Illatiivi", form: "kokemukseen" },
          { label: "Adessiivi", form: "kokemuksella" },
          { label: "Ablatiivi", form: "kokemukselta" },
          { label: "Allatiivi", form: "kokemukselle" },
          { label: "Essiivi", form: "kokemuksena" },
          { label: "Translatiivi", form: "kokemukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kokemukset" },
          { label: "Partitiivi", form: "kokemuksia" },
          { label: "Genetiivi", form: "kokemusten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kokea",
      en: "to experience, undergo",
      taso: "B1",
      esim: { fi: "Halusin kokea jotain uutta.", en: "I wanted to experience something new." },
    },
    {
      fi: "kokenut",
      en: "experienced",
      taso: "B1",
      esim: { fi: "Hän on kokenut opettaja.", en: "She is an experienced teacher." },
    },
    {
      fi: "kokematon",
      en: "inexperienced",
      taso: "B2",
      esim: { fi: "Olin vielä nuori ja kokematon.", en: "I was still young and inexperienced." },
    },
  ],
  synonyymit: [
    { fi: "elämys", en: "(memorable) experience" },
    { fi: "rutiini", en: "routine, practice" },
  ],
  esimerkit: {
    A2: { fi: "Se oli hieno kokemus.", en: "It was a great experience." },
    B1: { fi: "Minulla on paljon työkokemusta.", en: "I have a lot of work experience." },
    B2: {
      fi: "Kokemus on opettanut minut olemaan kärsivällinen.",
      en: "Experience has taught me to be patient.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kokemus;
