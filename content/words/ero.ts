import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem ero-.
// Genitive eron, partitive eroa, illative eroon, partitive pl eroja.
const ero: Word = {
  fi: "ero",
  slug: "ero",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "difference; separation, divorce",
  selitys:
    "Se, missä kaksi asiaa poikkeavat — tai eroaminen: 'iso ero' / 'avioero'. Tyyppi 1, ei astevaihtelua. Vrt. erota (to differ / to resign), erilainen (different).",
  kuva: { alt: "ero – kahden asian poikkeavuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "eron", merkitys: "of the difference" },
      { sija: "partitiivi (yks.)", muoto: "eroa", merkitys: "difference (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "eroja", merkitys: "differences (partitive pl.)" },
    ],
    huom:
      "Vertailtava asia elatiivissa: 'ero näiden välillä'. 'Tehdä ero' = to make a distinction. 'Avioero' = divorce. Vrt. erota = to differ / to resign, erilainen = different.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ero" },
          { label: "Partitiivi", form: "eroa" },
          { label: "Genetiivi", form: "eron" },
          { label: "Inessiivi", form: "erossa" },
          { label: "Elatiivi", form: "erosta" },
          { label: "Illatiivi", form: "eroon" },
          { label: "Adessiivi", form: "erolla" },
          { label: "Ablatiivi", form: "erolta" },
          { label: "Allatiivi", form: "erolle" },
          { label: "Essiivi", form: "erona" },
          { label: "Translatiivi", form: "eroksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "erot" },
          { label: "Partitiivi", form: "eroja" },
          { label: "Genetiivi", form: "erojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "erota",
      en: "to differ; to resign; to divorce",
      taso: "B1",
      esim: { fi: "Hän erosi työstään.", en: "He resigned from his job." },
    },
    {
      fi: "erilainen",
      en: "different",
      taso: "A2",
      esim: { fi: "Olemme hyvin erilaisia.", en: "We are very different." },
    },
    {
      fi: "avioero",
      en: "divorce",
      taso: "B2",
      esim: { fi: "He hakivat avioeroa.", en: "They filed for divorce." },
    },
  ],
  synonyymit: [
    { fi: "eroavuus", en: "discrepancy" },
    { fi: "vastakohta", en: "opposite" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on ero näiden välillä?", en: "What is the difference between these?" },
    B1: { fi: "Hinnassa on suuri ero.", en: "There is a big difference in price." },
    B2: {
      fi: "Pienikin ero asenteessa voi muuttaa lopputuloksen.",
      en: "Even a small difference in attitude can change the outcome.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ero;
