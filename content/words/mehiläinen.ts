import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem mehiläise- ~ mehiläis-.
// Genitive mehiläisen, partitive mehiläistä, partitive pl mehiläisiä.
const mehilainen: Word = {
  fi: "mehiläinen",
  slug: "mehiläinen",
  pos: "substantiivi (tyyppi 38/nainen)",
  posClass: "substantiivi",
  level: "B1",
  en: "bee",
  selitys:
    "Hyönteinen, joka tekee hunajaa ja pölyttää kukkia: 'mehiläinen pörisee'. Tyyppi 38/nainen, ei astevaihtelua. Vrt. hunaja, kukka, hyönteinen.",
  kuva: { emoji: "🐝", alt: "mehiläinen – hyönteinen joka tekee hunajaa ja pölyttää kukkia" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo mehiläise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "mehiläisen", merkitys: "of the bee" },
      { sija: "partitiivi (yks.)", muoto: "mehiläistä", merkitys: "bee (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "mehiläisiä", merkitys: "bees (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): genetiivi -se-n, partitiivi -s-tä, partitiivin monikko -siä. Mehiläispesä = beehive, mehiläishoitaja = beekeeper. Vrt. hunaja, ampiainen (wasp).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "mehiläinen" },
          { label: "Partitiivi", form: "mehiläistä" },
          { label: "Genetiivi", form: "mehiläisen" },
          { label: "Inessiivi", form: "mehiläisessä" },
          { label: "Elatiivi", form: "mehiläisestä" },
          { label: "Illatiivi", form: "mehiläiseen" },
          { label: "Adessiivi", form: "mehiläisellä" },
          { label: "Ablatiivi", form: "mehiläiseltä" },
          { label: "Allatiivi", form: "mehiläiselle" },
          { label: "Essiivi", form: "mehiläisenä" },
          { label: "Translatiivi", form: "mehiläiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "mehiläiset" },
          { label: "Partitiivi", form: "mehiläisiä" },
          { label: "Genetiivi", form: "mehiläisten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mehiläispesä",
      en: "beehive",
      taso: "B2",
      esim: { fi: "Mehiläispesä on puutarhassa.", en: "The beehive is in the garden." },
    },
    {
      fi: "ampiainen",
      en: "wasp",
      taso: "B1",
      esim: { fi: "Ampiainen pisti minua.", en: "A wasp stung me." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Mehiläinen tekee hunajaa.", en: "The bee makes honey." },
    B1: { fi: "Mehiläiset pölyttävät kukkia.", en: "Bees pollinate flowers." },
    B2: {
      fi: "Ilman mehiläisiä monet kasvit eivät tuottaisi satoa.",
      en: "Without bees, many plants would not produce a crop.",
    },
  },
  updatedAt: "2026-06-07",
};

export default mehilainen;
