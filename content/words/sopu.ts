import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, p:v gradation, stem sopu- ~ sovu-.
// Genitive sovun, partitive sopua, partitive pl sopuja.
const sopu: Word = {
  fi: "sopu",
  slug: "sopu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "harmony, concord, agreement",
  selitys:
    "Sovinnollinen tila, jossa ei ole riitaa: 'elää sovussa'. Tyyppi 1/valo, astevaihtelu p:v (sopu → sovun). Vastakohta riita/epäsopu. Vrt. sopia, sovinto, yhteisymmärrys.",
  kuva: { emoji: "🕊️", alt: "sopu – sovinnollinen tila ilman riitaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu p:v (vartalo sovu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sovun", merkitys: "of harmony" },
      { sija: "partitiivi (yks.)", muoto: "sopua", merkitys: "harmony (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sopuja", merkitys: "agreements (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu p:v: nominatiivi sopu (vahva p), genetiivi sovun (heikko v). Yleensä yksikössä. 'Päästä sopuun' = to reach an agreement; 'elää sovussa' = to live in harmony. Vastakohta epäsopu. Vrt. sopia = to agree.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sopu" },
          { label: "Partitiivi", form: "sopua" },
          { label: "Genetiivi", form: "sovun" },
          { label: "Inessiivi", form: "sovussa" },
          { label: "Elatiivi", form: "sovusta" },
          { label: "Illatiivi", form: "sopuun" },
          { label: "Adessiivi", form: "sovulla" },
          { label: "Ablatiivi", form: "sovulta" },
          { label: "Allatiivi", form: "sovulle" },
          { label: "Essiivi", form: "sopuna" },
          { label: "Translatiivi", form: "sovuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sovut" },
          { label: "Partitiivi", form: "sopuja" },
          { label: "Genetiivi", form: "sopujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sopia",
      en: "to agree; to fit, suit",
      taso: "B1",
      esim: { fi: "Sovimme tapaamisesta.", en: "We agreed on a meeting." },
    },
    {
      fi: "sovinto",
      en: "reconciliation, settlement",
      taso: "B2",
      esim: { fi: "He tekivät sovinnon.", en: "They made up (reached a settlement)." },
    },
    {
      fi: "sopuisa",
      en: "easy-going, peaceable",
      taso: "B2",
      esim: { fi: "Hän on sopuisa ihminen.", en: "She is an easy-going person." },
    },
  ],
  synonyymit: [
    { fi: "yhteisymmärrys", en: "mutual understanding" },
    { fi: "harmonia", en: "harmony" },
  ],
  esimerkit: {
    A2: { fi: "Naapurit elävät sovussa.", en: "The neighbours live in harmony." },
    B1: { fi: "Pääsimme lopulta sopuun hinnasta.", en: "We finally reached an agreement on the price." },
    B2: {
      fi: "Pitkän riidan jälkeen osapuolet löysivät yllättäen sovun.",
      en: "After a long quarrel the parties surprisingly found common ground.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sopu;
