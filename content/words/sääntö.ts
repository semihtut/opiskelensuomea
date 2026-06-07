import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, nt:nn gradation, stem sääntö- ~ säännö-.
// Genitive säännön, partitive sääntöä, partitive pl sääntöjä.
const saanto: Word = {
  fi: "sääntö",
  slug: "sääntö",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "rule, regulation",
  selitys:
    "Ohje tai määräys, jota on noudatettava: 'noudattaa sääntöjä'. Tyyppi 1/valo, astevaihtelu nt:nn (sääntö → säännön). Monikossa 'säännöt' = rules, bylaws. Vrt. säädellä, määräys, laki.",
  kuva: { emoji: "📏", alt: "sääntö – ohje tai määräys jota noudatetaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nt:nn (vartalo säännö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "säännön", merkitys: "of the rule" },
      { sija: "partitiivi (yks.)", muoto: "sääntöä", merkitys: "rule (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sääntöjä", merkitys: "rules (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu nt:nn: nominatiivi sääntö (vahva nt), genetiivi säännön (heikko nn). Partitiivin monikko sääntöjä. Monikko 'säännöt' = bylaws, rules. 'Pääsääntöisesti' = as a rule. Vrt. määräys = regulation.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sääntö" },
          { label: "Partitiivi", form: "sääntöä" },
          { label: "Genetiivi", form: "säännön" },
          { label: "Inessiivi", form: "säännössä" },
          { label: "Elatiivi", form: "säännöstä" },
          { label: "Illatiivi", form: "sääntöön" },
          { label: "Adessiivi", form: "säännöllä" },
          { label: "Ablatiivi", form: "säännöltä" },
          { label: "Allatiivi", form: "säännölle" },
          { label: "Essiivi", form: "sääntönä" },
          { label: "Translatiivi", form: "säännöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "säännöt" },
          { label: "Partitiivi", form: "sääntöjä" },
          { label: "Genetiivi", form: "sääntöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "säännöllinen",
      en: "regular",
      taso: "B1",
      esim: { fi: "Hän käy säännöllisesti kuntosalilla.", en: "He goes to the gym regularly." },
    },
    {
      fi: "poikkeus",
      en: "exception",
      taso: "B1",
      esim: { fi: "Poikkeus vahvistaa säännön.", en: "The exception proves the rule." },
    },
  ],
  synonyymit: [
    { fi: "määräys", en: "regulation, order" },
    { fi: "ohje", en: "instruction, guideline" },
  ],
  esimerkit: {
    A2: { fi: "Pelissä on selkeät säännöt.", en: "The game has clear rules." },
    B1: { fi: "Sääntöjä on noudatettava.", en: "The rules must be followed." },
    B2: {
      fi: "Uudet säännöt astuvat voimaan heti vuoden alusta.",
      en: "The new rules take effect right at the start of the year.",
    },
  },
  updatedAt: "2026-06-07",
};

export default saanto;
