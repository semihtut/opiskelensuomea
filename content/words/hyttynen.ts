import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem hyttyse- ~ hyttys-.
// Genitive hyttysen, partitive hyttystä, partitive pl hyttysiä.
const hyttynen: Word = {
  fi: "hyttynen",
  slug: "hyttynen",
  pos: "substantiivi (tyyppi 38/nainen)",
  posClass: "substantiivi",
  level: "B1",
  en: "mosquito",
  selitys:
    "Pieni verta imevä hyönteinen, kesän riesa: 'hyttynen puri'. Tyyppi 38/nainen, ei astevaihtelua. Vrt. hyönteinen, kärpänen, kesä.",
  kuva: { alt: "hyttynen – pieni verta imevä hyönteinen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo hyttyse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hyttysen", merkitys: "of the mosquito" },
      { sija: "partitiivi (yks.)", muoto: "hyttystä", merkitys: "mosquito (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hyttysiä", merkitys: "mosquitoes (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): genetiivi -se-n, partitiivi -s-tä, partitiivin monikko -siä. Hyttysenpurema = mosquito bite. Vrt. hyönteinen, kärpänen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hyttynen" },
          { label: "Partitiivi", form: "hyttystä" },
          { label: "Genetiivi", form: "hyttysen" },
          { label: "Inessiivi", form: "hyttysessä" },
          { label: "Elatiivi", form: "hyttysestä" },
          { label: "Illatiivi", form: "hyttyseen" },
          { label: "Adessiivi", form: "hyttysellä" },
          { label: "Ablatiivi", form: "hyttyseltä" },
          { label: "Allatiivi", form: "hyttyselle" },
          { label: "Essiivi", form: "hyttysenä" },
          { label: "Translatiivi", form: "hyttyseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hyttyset" },
          { label: "Partitiivi", form: "hyttysiä" },
          { label: "Genetiivi", form: "hyttysten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hyttysenpurema",
      en: "mosquito bite",
      taso: "B2",
      esim: { fi: "Hyttysenpurema kutiaa.", en: "The mosquito bite itches." },
    },
    {
      fi: "hyönteinen",
      en: "insect",
      taso: "B1",
      esim: { fi: "Hyttynen on hyönteinen.", en: "A mosquito is an insect." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Hyttynen puri minua.", en: "A mosquito bit me." },
    B1: { fi: "Kesällä on paljon hyttysiä.", en: "There are many mosquitoes in summer." },
    B2: {
      fi: "Pohjoisessa hyttyset voivat tehdä kesäillasta sietämättömän.",
      en: "In the north, mosquitoes can make a summer evening unbearable.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hyttynen;
