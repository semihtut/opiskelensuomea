import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation. Partitive pl
// perunoita, genitive pl perunoiden (also perunoitten).
const peruna: Word = {
  fi: "peruna",
  slug: "peruna",
  pos: "substantiivi (tyyppi: kulkija)",
  posClass: "substantiivi",
  level: "A1",
  en: "potato",
  selitys:
    "Maan alla kasvava tärkkelyspitoinen mukula, tärkeä ruoka-aine. Ei astevaihtelua; monikon partitiivi perunoita.",
  kuva: { alt: "peruna – peruna" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "perunaa", merkitys: "potato (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "perunan", merkitys: "of the potato" },
      { sija: "partitiivi (mon.)", muoto: "perunoita", merkitys: "potatoes (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi perunoita, genetiivi perunoiden (myös perunoitten), illatiivi perunoihin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "peruna" },
          { label: "Partitiivi", form: "perunaa" },
          { label: "Genetiivi", form: "perunan" },
          { label: "Inessiivi", form: "perunassa" },
          { label: "Elatiivi", form: "perunasta" },
          { label: "Illatiivi", form: "perunaan" },
          { label: "Adessiivi", form: "perunalla" },
          { label: "Ablatiivi", form: "perunalta" },
          { label: "Allatiivi", form: "perunalle" },
          { label: "Essiivi", form: "perunana" },
          { label: "Translatiivi", form: "perunaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "perunat" },
          { label: "Partitiivi", form: "perunoita" },
          { label: "Genetiivi", form: "perunoiden" },
          { label: "Illatiivi", form: "perunoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "perunamuusi",
      en: "mashed potatoes",
      taso: "A2",
      esim: { fi: "Lapset rakastavat perunamuusia.", en: "The children love mashed potatoes." },
    },
    {
      fi: "perunasalaatti",
      en: "potato salad",
      taso: "B1",
      esim: { fi: "Tein perunasalaattia juhliin.", en: "I made potato salad for the party." },
    },
    {
      fi: "perunalaatikko",
      en: "potato casserole",
      taso: "B2",
      esim: { fi: "Perunalaatikko kuuluu jouluun.", en: "Potato casserole belongs to Christmas." },
    },
  ],
  synonyymit: [
    { fi: "potu", en: "spud (colloquial)" },
    { fi: "mukula", en: "tuber" },
  ],
  esimerkit: {
    A2: { fi: "Keitän perunoita päivälliseksi.", en: "I'm boiling potatoes for dinner." },
    B1: { fi: "Perunat ovat melkein kypsiä.", en: "The potatoes are almost done." },
    B2: {
      fi: "Peruna tuotiin Suomeen 1700-luvulla.",
      en: "The potato was brought to Finland in the 18th century.",
    },
  },
  updatedAt: "2026-06-04",
};

export default peruna;
