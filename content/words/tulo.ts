import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem tulo-.
// Genitive tulon, partitive tuloa, illative tuloon, partitive pl tuloja. Plural tulot = income.
const tulo: Word = {
  fi: "tulo",
  slug: "tulo",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "arrival; (pl.) income",
  selitys:
    "Tuleminen tai saatu raha: 'junan tulo' / 'kuukauden tulot'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko tuloja. Monikossa tulot = income. Johdettu verbistä tulla. Vastakohta meno.",
  kuva: { alt: "tulo – saatu raha tai tuleminen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tulon", merkitys: "of the arrival/income" },
      { sija: "partitiivi (yks.)", muoto: "tuloa", merkitys: "arrival (partitive)" },
      { sija: "nominatiivi (mon.)", muoto: "tulot", merkitys: "income (the earnings)" },
    ],
    huom:
      "Monikko tulot tarkoittaa usein 'income' (rahatulot). Yksikössä tulo = arrival, coming. Vastakohta meno (expense/going). Johdettu verbistä tulla.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tulo" },
          { label: "Partitiivi", form: "tuloa" },
          { label: "Genetiivi", form: "tulon" },
          { label: "Inessiivi", form: "tulossa" },
          { label: "Elatiivi", form: "tulosta" },
          { label: "Illatiivi", form: "tuloon" },
          { label: "Adessiivi", form: "tulolla" },
          { label: "Ablatiivi", form: "tulolta" },
          { label: "Allatiivi", form: "tulolle" },
          { label: "Essiivi", form: "tulona" },
          { label: "Translatiivi", form: "tuloksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tulot" },
          { label: "Partitiivi", form: "tuloja" },
          { label: "Genetiivi", form: "tulojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tulotaso",
      en: "income level",
      taso: "B2",
      esim: { fi: "Perheen tulotaso nousi.", en: "The family's income level rose." },
    },
    {
      fi: "verotulot",
      en: "tax revenue",
      taso: "B2",
      esim: { fi: "Kunnan verotulot kasvoivat.", en: "The municipality's tax revenue grew." },
    },
    {
      fi: "tulla",
      en: "to come",
      taso: "A2",
      esim: { fi: "Juna tulee kohta.", en: "The train is coming soon." },
    },
  ],
  synonyymit: [
    { fi: "ansiot", en: "earnings" },
    { fi: "saapuminen", en: "arrival" },
  ],
  esimerkit: {
    A2: { fi: "Minun tuloni ovat pienet.", en: "My income is small." },
    B1: { fi: "Vuokra vie ison osan tuloista.", en: "Rent takes a big part of the income." },
    B2: {
      fi: "Jos menot ylittävät tulot, säästöt sulavat nopeasti.",
      en: "If expenses exceed income, savings melt away quickly.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tulo;
