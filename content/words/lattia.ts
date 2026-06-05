import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation. Genitive lattian,
// partitive lattiaa, illative lattiaan, partitive pl lattioita.
const lattia: Word = {
  fi: "lattia",
  slug: "lattia",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "A1",
  en: "floor",
  selitys:
    "Huoneen alapinta, jolla kävellään. Tyyppi 12, ei astevaihtelua (tt säilyy). Vrt. katto (= ceiling).",
  kuva: { emoji: "🔲", alt: "lattia – huoneen lattia" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lattian", merkitys: "of the floor" },
      { sija: "partitiivi (yks.)", muoto: "lattiaa", merkitys: "floor (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lattioita", merkitys: "floors (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua (tt säilyy: lattian). Monikkovartalo lattioi-: lattioita, lattioissa. 'Lattialla' = on the floor.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lattia" },
          { label: "Partitiivi", form: "lattiaa" },
          { label: "Genetiivi", form: "lattian" },
          { label: "Inessiivi", form: "lattiassa" },
          { label: "Elatiivi", form: "lattiasta" },
          { label: "Illatiivi", form: "lattiaan" },
          { label: "Adessiivi", form: "lattialla" },
          { label: "Ablatiivi", form: "lattialta" },
          { label: "Allatiivi", form: "lattialle" },
          { label: "Essiivi", form: "lattiana" },
          { label: "Translatiivi", form: "lattiaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lattiat" },
          { label: "Partitiivi", form: "lattioita" },
          { label: "Genetiivi", form: "lattioiden" },
          { label: "Inessiivi", form: "lattioissa" },
          { label: "Illatiivi", form: "lattioihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lattialämmitys",
      en: "underfloor heating",
      taso: "B2",
      esim: { fi: "Kylpyhuoneessa on lattialämmitys.", en: "The bathroom has underfloor heating." },
    },
    {
      fi: "parketti",
      en: "parquet floor",
      taso: "B2",
      esim: { fi: "Olohuoneessa on tammiparketti.", en: "The living room has oak parquet." },
    },
    {
      fi: "lattiapinta",
      en: "floor surface, floor area",
      taso: "B2",
      esim: { fi: "Lattiapinta on sata neliötä.", en: "The floor area is a hundred square meters." },
    },
  ],
  synonyymit: [
    { fi: "permanto", en: "floor (dated/literary)" },
    { fi: "alusta", en: "base, ground" },
  ],
  esimerkit: {
    A2: { fi: "Lelut ovat lattialla.", en: "The toys are on the floor." },
    B1: { fi: "Pesin lattian eilen.", en: "I washed the floor yesterday." },
    B2: {
      fi: "Lapsi istui lattialla ja rakensi tornia palikoista.",
      en: "The child sat on the floor building a tower out of blocks.",
    },
  },
  updatedAt: "2026-06-05",
};

export default lattia;
