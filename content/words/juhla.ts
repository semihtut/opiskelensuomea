import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem juhla-.
// Genitive juhlan, partitive juhlaa, illative juhlaan, partitive pl juhlia.
const juhla: Word = {
  fi: "juhla",
  slug: "juhla",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "celebration, party, festivity",
  selitys:
    "Juhlallinen tilaisuus tai juhliminen: 'syntymäpäiväjuhla'. Tyyppi 10, ei astevaihtelua. Usein monikossa: juhlat. Partitiivin monikko juhlia. Vrt. juhlia (to celebrate), juhlallinen (festive, solemn).",
  kuva: { alt: "juhla – juhlallinen tilaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "juhlan", merkitys: "of the celebration" },
      { sija: "partitiivi (yks.)", muoto: "juhlaa", merkitys: "celebration (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "juhlia", merkitys: "parties (partitive pl.)" },
    ],
    huom:
      "Yksityisistä juhlista puhutaan usein monikossa: 'pidämme juhlat'. Yksikkö viittaa usein suureen tai viralliseen tilaisuuteen. Vrt. juhlia = to celebrate, juhlapäivä = holiday.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "juhla" },
          { label: "Partitiivi", form: "juhlaa" },
          { label: "Genetiivi", form: "juhlan" },
          { label: "Inessiivi", form: "juhlassa" },
          { label: "Elatiivi", form: "juhlasta" },
          { label: "Illatiivi", form: "juhlaan" },
          { label: "Adessiivi", form: "juhlalla" },
          { label: "Ablatiivi", form: "juhlalta" },
          { label: "Allatiivi", form: "juhlalle" },
          { label: "Essiivi", form: "juhlana" },
          { label: "Translatiivi", form: "juhlaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "juhlat" },
          { label: "Partitiivi", form: "juhlia" },
          { label: "Genetiivi", form: "juhlien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "juhlia",
      en: "to celebrate, party",
      taso: "B1",
      esim: { fi: "Juhlimme myöhään yöhön.", en: "We celebrated late into the night." },
    },
    {
      fi: "juhlallinen",
      en: "festive, solemn",
      taso: "B2",
      esim: { fi: "Tilaisuus oli hyvin juhlallinen.", en: "The occasion was very solemn." },
    },
    {
      fi: "syntymäpäiväjuhlat",
      en: "birthday party",
      taso: "A2",
      esim: { fi: "Hänen syntymäpäiväjuhlansa olivat hauskat.", en: "Her birthday party was fun." },
    },
  ],
  synonyymit: [
    { fi: "juhlatilaisuus", en: "festive occasion" },
    { fi: "bileet", en: "party (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Menemme juhliin lauantaina.", en: "We're going to a party on Saturday." },
    B1: { fi: "Koulun juhla pidettiin salissa.", en: "The school celebration was held in the hall." },
    B2: {
      fi: "Itsenäisyyspäivän juhlaa vietetään koko maassa.",
      en: "Independence Day is celebrated throughout the country.",
    },
  },
  updatedAt: "2026-06-06",
};

export default juhla;
