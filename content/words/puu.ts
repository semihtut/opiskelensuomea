import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 18/maa, no gradation. Genitive puun,
// partitive puuta, illative puuhun, partitive pl puita.
const puu: Word = {
  fi: "puu",
  slug: "puu",
  pos: "substantiivi (tyyppi 18/maa)",
  posClass: "substantiivi",
  level: "A1",
  en: "tree; wood",
  selitys:
    "Suuri monivuotinen kasvi; myös 'puu' = materiaali (wood). Tyyppi 18, ei astevaihtelua.",
  kuva: { alt: "puu – lehtipuu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "puun", merkitys: "of the tree" },
      { sija: "partitiivi (yks.)", muoto: "puuta", merkitys: "tree/wood (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "puita", merkitys: "trees (partitive pl.)" },
    ],
    huom:
      "Illatiivi puuhun, monikko puut/puita/puiden. 'Puusta tehty' = made of wood. Vrt. metsä (= forest).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "puu" },
          { label: "Partitiivi", form: "puuta" },
          { label: "Genetiivi", form: "puun" },
          { label: "Inessiivi", form: "puussa" },
          { label: "Elatiivi", form: "puusta" },
          { label: "Illatiivi", form: "puuhun" },
          { label: "Adessiivi", form: "puulla" },
          { label: "Ablatiivi", form: "puulta" },
          { label: "Allatiivi", form: "puulle" },
          { label: "Essiivi", form: "puuna" },
          { label: "Translatiivi", form: "puuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "puut" },
          { label: "Partitiivi", form: "puita" },
          { label: "Genetiivi", form: "puiden" },
          { label: "Inessiivi", form: "puissa" },
          { label: "Illatiivi", form: "puihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "puinen",
      en: "wooden",
      taso: "B1",
      esim: { fi: "Pöytä on puinen.", en: "The table is wooden." },
    },
    {
      fi: "puutarha",
      en: "garden",
      taso: "A2",
      esim: { fi: "Kasvatan kukkia puutarhassa.", en: "I grow flowers in the garden." },
    },
    {
      fi: "polttopuu",
      en: "firewood",
      taso: "B1",
      esim: { fi: "Pilkoin polttopuita talveksi.", en: "I chopped firewood for the winter." },
    },
  ],
  synonyymit: [
    { fi: "puusto", en: "tree stand, woods" },
    { fi: "havupuu", en: "conifer" },
  ],
  esimerkit: {
    A2: { fi: "Pihalla kasvaa iso puu.", en: "A big tree grows in the yard." },
    B1: { fi: "Lehmät seisoivat puiden varjossa.", en: "The cows stood in the shade of the trees." },
    B2: {
      fi: "Vanha talo oli rakennettu kokonaan puusta.",
      en: "The old house was built entirely of wood.",
    },
  },
  updatedAt: "2026-06-04",
};

export default puu;
