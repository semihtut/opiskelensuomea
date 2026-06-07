import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation, stem hirve-.
// Genitive hirven, partitive hirveä, partitive pl hirviä.
const hirvi: Word = {
  fi: "hirvi",
  slug: "hirvi",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "B1",
  en: "elk, moose",
  selitys:
    "Suuri sarvipäinen metsäeläin: 'hirvi ylitti tien'. Tyyppi 7/ovi, ei astevaihtelua. Vrt. metsä, sarvi, eläin.",
  kuva: { emoji: "🫎", alt: "hirvi – suuri sarvipäinen metsäeläin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua (vartalo hirve-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hirven", merkitys: "of the elk" },
      { sija: "partitiivi (yks.)", muoto: "hirveä", merkitys: "elk (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hirviä", merkitys: "elks (partitive pl.)" },
    ],
    huom:
      "Tyyppi 7/ovi: ei astevaihtelua, vartalo hirve- (hirven, hirvellä), partitiivi hirveä, partitiivin monikko hirviä. Hirvikolari = moose collision. Vrt. sarvi, peura.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hirvi" },
          { label: "Partitiivi", form: "hirveä" },
          { label: "Genetiivi", form: "hirven" },
          { label: "Inessiivi", form: "hirvessä" },
          { label: "Elatiivi", form: "hirvestä" },
          { label: "Illatiivi", form: "hirveen" },
          { label: "Adessiivi", form: "hirvellä" },
          { label: "Ablatiivi", form: "hirveltä" },
          { label: "Allatiivi", form: "hirvelle" },
          { label: "Essiivi", form: "hirvenä" },
          { label: "Translatiivi", form: "hirveksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hirvet" },
          { label: "Partitiivi", form: "hirviä" },
          { label: "Genetiivi", form: "hirvien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hirvikolari",
      en: "moose collision",
      taso: "B2",
      esim: { fi: "Hirvikolarit ovat yleisiä syksyllä.", en: "Moose collisions are common in autumn." },
    },
    {
      fi: "peura",
      en: "deer (reindeer/wild)",
      taso: "B2",
      esim: { fi: "Peura on hirveä pienempi.", en: "A deer is smaller than an elk." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Näin hirven metsässä.", en: "I saw an elk in the forest." },
    B1: { fi: "Hirvi ylitti tien yllättäen.", en: "The elk crossed the road suddenly." },
    B2: {
      fi: "Autoilijan kannattaa varoa hirviä hämärän aikaan.",
      en: "A driver should watch out for moose at dusk.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hirvi;
