import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 18/maa, no gradation, stem luu-.
// Genitive luun, partitive luuta, illative luuhun, partitive pl luita.
const luu: Word = {
  fi: "luu",
  slug: "luu",
  pos: "substantiivi (tyyppi 18/maa)",
  posClass: "substantiivi",
  level: "A2",
  en: "bone",
  selitys:
    "Luuston kova rakenneosa: 'murtaa luu', 'kalan luut'. Tyyppi 18/maa, ei astevaihtelua; partitiivi luuta, partitiivin monikko luita. Vrt. luusto, murtua, lihas.",
  kuva: { emoji: "🦴", alt: "luu – luuston kova rakenneosa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua (vartalo luu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "luun", merkitys: "of the bone" },
      { sija: "partitiivi (yks.)", muoto: "luuta", merkitys: "bone (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "luita", merkitys: "bones (partitive pl.)" },
    ],
    huom:
      "Tyyppi 18/maa: yksitavuinen pitkä vokaali. Partitiivi luuta, illatiivi luuhun, partitiivin monikko luita. Luusto = skeleton. Vrt. kalanluu, luuydin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "luu" },
          { label: "Partitiivi", form: "luuta" },
          { label: "Genetiivi", form: "luun" },
          { label: "Inessiivi", form: "luussa" },
          { label: "Elatiivi", form: "luusta" },
          { label: "Illatiivi", form: "luuhun" },
          { label: "Adessiivi", form: "luulla" },
          { label: "Ablatiivi", form: "luulta" },
          { label: "Allatiivi", form: "luulle" },
          { label: "Essiivi", form: "luuna" },
          { label: "Translatiivi", form: "luuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "luut" },
          { label: "Partitiivi", form: "luita" },
          { label: "Genetiivi", form: "luiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luusto",
      en: "skeleton",
      taso: "B2",
      esim: { fi: "Luusto tukee kehoa.", en: "The skeleton supports the body." },
    },
    {
      fi: "kalanluu",
      en: "fishbone",
      taso: "B1",
      esim: { fi: "Varo kalanluita.", en: "Watch out for the fishbones." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Koira sai luun.", en: "The dog got a bone." },
    B1: { fi: "Hän mursi jalkansa luun.", en: "He broke the bone in his leg." },
    B2: {
      fi: "Riittävä kalsiumin saanti pitää luut vahvoina.",
      en: "Sufficient calcium intake keeps the bones strong.",
    },
  },
  updatedAt: "2026-06-07",
};

export default luu;
