import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 11/omena, no gradation. Partitive pl
// omenia (also omenoita), genitive pl omenien (also omenoiden/omenoitten).
const omena: Word = {
  fi: "omena",
  slug: "omena",
  pos: "substantiivi (tyyppi: omena)",
  posClass: "substantiivi",
  level: "A1",
  en: "apple",
  selitys:
    "Pyöreä, makea hedelmä. Ei astevaihtelua; monikon partitiivi omenia (myös omenoita).",
  kuva: { alt: "omena – punainen omena" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 11/omena; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "omenaa", merkitys: "apple (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "omenan", merkitys: "of the apple" },
      { sija: "partitiivi (mon.)", muoto: "omenia", merkitys: "apples (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi omenia (myös omenoita), genetiivi omenien (myös omenoiden, omenoitten).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "omena" },
          { label: "Partitiivi", form: "omenaa" },
          { label: "Genetiivi", form: "omenan" },
          { label: "Inessiivi", form: "omenassa" },
          { label: "Elatiivi", form: "omenasta" },
          { label: "Illatiivi", form: "omenaan" },
          { label: "Adessiivi", form: "omenalla" },
          { label: "Ablatiivi", form: "omenalta" },
          { label: "Allatiivi", form: "omenalle" },
          { label: "Essiivi", form: "omenana" },
          { label: "Translatiivi", form: "omenaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "omenat" },
          { label: "Partitiivi", form: "omenia" },
          { label: "Genetiivi", form: "omenien" },
          { label: "Illatiivi", form: "omeniin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "omenapuu",
      en: "apple tree",
      taso: "A2",
      esim: { fi: "Pihalla kasvaa omenapuu.", en: "An apple tree grows in the yard." },
    },
    {
      fi: "omenamehu",
      en: "apple juice",
      taso: "A2",
      esim: { fi: "Lapset juovat omenamehua.", en: "The children drink apple juice." },
    },
    {
      fi: "omenapiirakka",
      en: "apple pie",
      taso: "B1",
      esim: { fi: "Leivoin omenapiirakan.", en: "I baked an apple pie." },
    },
  ],
  synonyymit: [
    { fi: "hedelmä", en: "fruit (broader)" },
    { fi: "omppu", en: "apple (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Syön omenan välipalaksi.", en: "I eat an apple as a snack." },
    B1: { fi: "Poimimme omenoita puutarhasta.", en: "We picked apples from the garden." },
    B2: {
      fi: "Omena päivässä pitää lääkärin loitolla.",
      en: "An apple a day keeps the doctor away.",
    },
  },
  updatedAt: "2026-06-04",
};

export default omena;
