import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem kaula-.
// Genitive kaulan, partitive kaulaa, partitive pl kauloja.
const kaula: Word = {
  fi: "kaula",
  slug: "kaula",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "neck",
  selitys:
    "Pään ja vartalon yhdistävä kapea osa: 'pitkä kaula'. Myös esineen kapea kohta (pullon kaula). Tyyppi 9/kala, ei astevaihtelua; partitiivin monikko kauloja. Vrt. niska, kurkku, pää.",
  kuva: { emoji: "🦒", alt: "kaula – pään ja vartalon yhdistävä kapea osa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua (vartalo kaula-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kaulan", merkitys: "of the neck" },
      { sija: "partitiivi (yks.)", muoto: "kaulaa", merkitys: "neck (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kauloja", merkitys: "necks (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: ei astevaihtelua. Partitiivin monikko kauloja (a → o). Kaula = etupuoli/koko kaula; niska = takapuoli. Pullonkaula = bottleneck. Vrt. niska, kurkku.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kaula" },
          { label: "Partitiivi", form: "kaulaa" },
          { label: "Genetiivi", form: "kaulan" },
          { label: "Inessiivi", form: "kaulassa" },
          { label: "Elatiivi", form: "kaulasta" },
          { label: "Illatiivi", form: "kaulaan" },
          { label: "Adessiivi", form: "kaulalla" },
          { label: "Ablatiivi", form: "kaulalta" },
          { label: "Allatiivi", form: "kaulalle" },
          { label: "Essiivi", form: "kaulana" },
          { label: "Translatiivi", form: "kaulaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kaulat" },
          { label: "Partitiivi", form: "kauloja" },
          { label: "Genetiivi", form: "kaulojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kaulahuivi",
      en: "scarf",
      taso: "A2",
      esim: { fi: "Pue kaulahuivi, ulkona on kylmä.", en: "Put on a scarf, it's cold outside." },
    },
    {
      fi: "niska",
      en: "(back of the) neck, nape",
      taso: "B1",
      esim: { fi: "Niskaani särkee.", en: "My neck aches." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Kirahvilla on pitkä kaula.", en: "A giraffe has a long neck." },
    B1: { fi: "Kääri huivi kaulan ympärille.", en: "Wrap the scarf around your neck." },
    B2: {
      fi: "Juoksija voitti kilpailun vain kaulan mitalla.",
      en: "The runner won the race by just a neck's length.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kaula;
