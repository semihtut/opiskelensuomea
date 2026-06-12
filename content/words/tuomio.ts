import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation, stem tuomio-.
// Genitive tuomion, partitive tuomiota, illative tuomioon, partitive pl tuomioita.
const tuomio: Word = {
  fi: "tuomio",
  slug: "tuomio",
  pos: "substantiivi (tyyppi 3/valtio)",
  posClass: "substantiivi",
  level: "B1",
  en: "verdict, sentence, judgement",
  selitys:
    "Tuomioistuimen päätös rikos- tai riita-asiassa: 'langettava tuomio', 'saada tuomio'. Myös yleisemmin: ankara arvio. Tyyppi 3/valtio, ei astevaihtelua. Sanasta tuomita. Vrt. tuomita, tuomari, rangaistus.",
  kuva: { alt: "tuomio – tuomioistuimen päätös rikos- tai riita-asiassa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua (vartalo tuomio-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tuomion", merkitys: "of the verdict" },
      { sija: "partitiivi (yks.)", muoto: "tuomiota", merkitys: "verdict (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tuomioita", merkitys: "verdicts (partitive pl.)" },
    ],
    huom:
      "Tyyppi 3/valtio: ei astevaihtelua. Partitiivi tuomiota, partitiivin monikko tuomioita, illatiivi tuomioon. Langettava tuomio = guilty verdict; vapauttava tuomio = acquittal. Vrt. tuomita, tuomioistuin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tuomio" },
          { label: "Partitiivi", form: "tuomiota" },
          { label: "Genetiivi", form: "tuomion" },
          { label: "Inessiivi", form: "tuomiossa" },
          { label: "Elatiivi", form: "tuomiosta" },
          { label: "Illatiivi", form: "tuomioon" },
          { label: "Adessiivi", form: "tuomiolla" },
          { label: "Ablatiivi", form: "tuomiolta" },
          { label: "Allatiivi", form: "tuomiolle" },
          { label: "Essiivi", form: "tuomiona" },
          { label: "Translatiivi", form: "tuomioksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tuomiot" },
          { label: "Partitiivi", form: "tuomioita" },
          { label: "Genetiivi", form: "tuomioiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuomioistuin",
      en: "court (of law)",
      taso: "B2",
      esim: { fi: "Asia eteni tuomioistuimeen.", en: "The matter went to court." },
    },
    {
      fi: "tuomita",
      en: "to sentence, condemn",
      taso: "B2",
      esim: { fi: "Hänet tuomittiin vankeuteen.", en: "He was sentenced to prison." },
    },
  ],
  synonyymit: [
    { fi: "päätös", en: "decision, ruling" },
  ],
  esimerkit: {
    A2: { fi: "Tuomio oli ankara.", en: "The verdict was harsh." },
    B1: { fi: "Hän sai ehdollisen tuomion.", en: "He received a suspended sentence." },
    B2: {
      fi: "Syytetty valitti tuomiosta korkeampaan oikeusasteeseen.",
      en: "The defendant appealed the verdict to a higher court.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tuomio;
