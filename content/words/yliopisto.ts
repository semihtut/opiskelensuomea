import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem yliopisto-.
// Genitive yliopiston, partitive yliopistoa, illative yliopistoon, partitive pl yliopistoja.
const yliopisto: Word = {
  fi: "yliopisto",
  slug: "yliopisto",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B1",
  en: "university",
  selitys:
    "Korkein oppilaitos, jossa tehdään tutkimusta ja suoritetaan tutkintoja: 'opiskella yliopistossa'. Tyyppi 2, ei astevaihtelua. Partitiivin monikko yliopistoja. Yhdyssana yli + opisto. Vrt. korkeakoulu.",
  kuva: { alt: "yliopisto – korkein oppilaitos" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "yliopiston", merkitys: "of the university" },
      { sija: "partitiivi (yks.)", muoto: "yliopistoa", merkitys: "university (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "yliopistoja", merkitys: "universities (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2: ei astevaihtelua. 'Opiskella yliopistossa' (inessiivi), 'päästä yliopistoon' (illatiivi). Vrt. yliopistollinen = academic, korkeakoulu = institution of higher education.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "yliopisto" },
          { label: "Partitiivi", form: "yliopistoa" },
          { label: "Genetiivi", form: "yliopiston" },
          { label: "Inessiivi", form: "yliopistossa" },
          { label: "Elatiivi", form: "yliopistosta" },
          { label: "Illatiivi", form: "yliopistoon" },
          { label: "Adessiivi", form: "yliopistolla" },
          { label: "Ablatiivi", form: "yliopistolta" },
          { label: "Allatiivi", form: "yliopistolle" },
          { label: "Essiivi", form: "yliopistona" },
          { label: "Translatiivi", form: "yliopistoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "yliopistot" },
          { label: "Partitiivi", form: "yliopistoja" },
          { label: "Genetiivi", form: "yliopistojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yliopistollinen",
      en: "academic, university (adj.)",
      taso: "B2",
      esim: { fi: "Se on yliopistollinen sairaala.", en: "It is a university hospital." },
    },
    {
      fi: "korkeakoulu",
      en: "institution of higher education",
      taso: "B2",
      esim: { fi: "Hän hakee korkeakouluun.", en: "She is applying to a higher-education institution." },
    },
    {
      fi: "opisto",
      en: "college, institute",
      taso: "B2",
      esim: { fi: "Hän kävi kansanopiston.", en: "He attended a folk high school." },
    },
  ],
  synonyymit: [
    { fi: "korkeakoulu", en: "higher-education institution" },
    { fi: "alma mater", en: "alma mater" },
  ],
  esimerkit: {
    A2: { fi: "Opiskelen yliopistossa.", en: "I study at the university." },
    B1: { fi: "Hän pääsi yliopistoon ensimmäisellä yrittämällä.", en: "She got into university on the first try." },
    B2: {
      fi: "Yliopisto tarjoaa sekä opetusta että huipputason tutkimusta.",
      en: "The university offers both teaching and top-level research.",
    },
  },
  updatedAt: "2026-06-06",
};

export default yliopisto;
