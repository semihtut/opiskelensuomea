import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation. Genitive puiston,
// partitive puistoa, illative puistoon, partitive pl puistoja.
const puisto: Word = {
  fi: "puisto",
  slug: "puisto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "park",
  selitys:
    "Istutettu viheralue kaupungissa. Tyyppi 1, ei astevaihtelua. Sanasta puu + -sto (kokoelma).",
  kuva: { alt: "puisto – penkkejä ja puita puistossa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "puiston", merkitys: "of the park" },
      { sija: "partitiivi (yks.)", muoto: "puistoa", merkitys: "park (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "puistoja", merkitys: "parks (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. 'Puistossa' = in the park. Yhdyssanat: kansallispuisto, leikkipuisto.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "puisto" },
          { label: "Partitiivi", form: "puistoa" },
          { label: "Genetiivi", form: "puiston" },
          { label: "Inessiivi", form: "puistossa" },
          { label: "Elatiivi", form: "puistosta" },
          { label: "Illatiivi", form: "puistoon" },
          { label: "Adessiivi", form: "puistolla" },
          { label: "Ablatiivi", form: "puistolta" },
          { label: "Allatiivi", form: "puistolle" },
          { label: "Essiivi", form: "puistona" },
          { label: "Translatiivi", form: "puistoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "puistot" },
          { label: "Partitiivi", form: "puistoja" },
          { label: "Genetiivi", form: "puistojen" },
          { label: "Inessiivi", form: "puistoissa" },
          { label: "Illatiivi", form: "puistoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kansallispuisto",
      en: "national park",
      taso: "B1",
      esim: { fi: "Vaelsimme kansallispuistossa.", en: "We hiked in the national park." },
    },
    {
      fi: "leikkipuisto",
      en: "playground",
      taso: "A2",
      esim: { fi: "Lapset leikkivät leikkipuistossa.", en: "The children play in the playground." },
    },
    {
      fi: "puistonpenkki",
      en: "park bench",
      taso: "B1",
      esim: { fi: "Istuimme puistonpenkille.", en: "We sat down on a park bench." },
    },
  ],
  synonyymit: [
    { fi: "viheralue", en: "green area" },
    { fi: "puutarha", en: "garden" },
  ],
  esimerkit: {
    A2: { fi: "Kävelemme puistossa iltaisin.", en: "We walk in the park in the evenings." },
    B1: { fi: "Puisto on täynnä ihmisiä kesällä.", en: "The park is full of people in summer." },
    B2: {
      fi: "Keskellä kaupunkia on suuri puisto, jossa voi rentoutua.",
      en: "In the middle of the city there's a large park where you can relax.",
    },
  },
  updatedAt: "2026-06-05",
};

export default puisto;
