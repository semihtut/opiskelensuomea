import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem lehmä-.
// Genitive lehmän, partitive lehmää, partitive pl lehmiä.
const lehma: Word = {
  fi: "lehmä",
  slug: "lehmä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "cow",
  selitys:
    "Naaraspuolinen nautaeläin, joka antaa maitoa: 'lypsää lehmä'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko lehmiä. Vrt. maito, nauta, eläin.",
  kuva: { alt: "lehmä – naaraspuolinen nautaeläin joka antaa maitoa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo lehmä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lehmän", merkitys: "of the cow" },
      { sija: "partitiivi (yks.)", muoto: "lehmää", merkitys: "cow (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lehmiä", merkitys: "cows (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko lehmiä. Lypsylehmä = dairy cow. Vrt. maito, nauta = cattle.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lehmä" },
          { label: "Partitiivi", form: "lehmää" },
          { label: "Genetiivi", form: "lehmän" },
          { label: "Inessiivi", form: "lehmässä" },
          { label: "Elatiivi", form: "lehmästä" },
          { label: "Illatiivi", form: "lehmään" },
          { label: "Adessiivi", form: "lehmällä" },
          { label: "Ablatiivi", form: "lehmältä" },
          { label: "Allatiivi", form: "lehmälle" },
          { label: "Essiivi", form: "lehmänä" },
          { label: "Translatiivi", form: "lehmäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lehmät" },
          { label: "Partitiivi", form: "lehmiä" },
          { label: "Genetiivi", form: "lehmien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lypsylehmä",
      en: "dairy cow",
      taso: "B2",
      esim: { fi: "Tilalla on kolmekymmentä lypsylehmää.", en: "The farm has thirty dairy cows." },
    },
    {
      fi: "vasikka",
      en: "calf",
      taso: "B1",
      esim: { fi: "Lehmä sai vasikan.", en: "The cow had a calf." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Lehmä syö ruohoa.", en: "The cow eats grass." },
    B1: { fi: "Maatilalla on monta lehmää.", en: "There are many cows on the farm." },
    B2: {
      fi: "Lehmät laidunsivat rauhallisesti niityllä koko kesän.",
      en: "The cows grazed peacefully in the meadow all summer.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lehma;
