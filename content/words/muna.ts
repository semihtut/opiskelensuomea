import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem muna-.
// Genitive munan, partitive munaa, partitive pl munia.
const muna: Word = {
  fi: "muna",
  slug: "muna",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "egg",
  selitys:
    "Kanan tai muun linnun muna, yleinen ruoka-aine: 'keittää muna'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko munia. Vrt. kana, keittää, kananmuna.",
  kuva: { alt: "muna – kanan tai muun linnun muna, ruoka-aine" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo muna-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "munan", merkitys: "of the egg" },
      { sija: "partitiivi (yks.)", muoto: "munaa", merkitys: "egg (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "munia", merkitys: "eggs (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko munia. Yleensä kananmuna; munakas = omelette. Vrt. kana, kananmuna.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "muna" },
          { label: "Partitiivi", form: "munaa" },
          { label: "Genetiivi", form: "munan" },
          { label: "Inessiivi", form: "munassa" },
          { label: "Elatiivi", form: "munasta" },
          { label: "Illatiivi", form: "munaan" },
          { label: "Adessiivi", form: "munalla" },
          { label: "Ablatiivi", form: "munalta" },
          { label: "Allatiivi", form: "munalle" },
          { label: "Essiivi", form: "munana" },
          { label: "Translatiivi", form: "munaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "munat" },
          { label: "Partitiivi", form: "munia" },
          { label: "Genetiivi", form: "munien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kananmuna",
      en: "(hen's) egg",
      taso: "A2",
      esim: { fi: "Resepti vaatii kaksi kananmunaa.", en: "The recipe requires two eggs." },
    },
    {
      fi: "munakas",
      en: "omelette",
      taso: "B1",
      esim: { fi: "Tein juustomunakkaan.", en: "I made a cheese omelette." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Syön munan aamulla.", en: "I eat an egg in the morning." },
    B1: { fi: "Keitä munat kovaksi.", en: "Boil the eggs hard." },
    B2: {
      fi: "Lisää munat taikinaan yksitellen ja sekoita hyvin.",
      en: "Add the eggs to the batter one at a time and mix well.",
    },
  },
  updatedAt: "2026-06-07",
};

export default muna;
