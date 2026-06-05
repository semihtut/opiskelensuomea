import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus nominal type 6/paperi, no gradation.
// Genitive naapurin, partitive naapuria, plural partitive naapureita.
const naapuri: Word = {
  fi: "naapuri",
  slug: "naapuri",
  pos: "substantiivi",
  posClass: "substantiivi",
  level: "A2",
  en: "neighbour",
  selitys:
    "Vieressä asuva henkilö tai talo. Tyyppi 6/paperi, ei astevaihtelua. Monikon partitiivi naapureita. Myös: naapurimaa = neighbouring country.",
  kuva: { emoji: "🏘️", alt: "naapuri – viereinen talo ja asukas" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 6/paperi; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi", muoto: "naapurin", merkitys: "neighbour's" },
      { sija: "partitiivi", muoto: "naapuria", merkitys: "neighbour (partitive)" },
      { sija: "monikon partitiivi", muoto: "naapureita", merkitys: "neighbours (partitive pl.)" },
    ],
    huom:
      "Tyyppi 6: vartalo säilyy (naapuri-), monikon partitiivi naapureita. 'Naapurissa' = next door. Yhdyssanat: naapurimaa, naapurikunta.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö",
        rows: [
          { label: "Nominatiivi", form: "naapuri" },
          { label: "Genetiivi", form: "naapurin" },
          { label: "Partitiivi", form: "naapuria" },
          { label: "Inessiivi", form: "naapurissa" },
          { label: "Elatiivi", form: "naapurista" },
          { label: "Illatiivi", form: "naapuriin" },
          { label: "Adessiivi", form: "naapurilla" },
          { label: "Allatiivi", form: "naapurille" },
        ],
      },
      {
        title: "Monikko",
        rows: [
          { label: "Nominatiivi", form: "naapurit" },
          { label: "Partitiivi", form: "naapureita" },
          { label: "Genetiivi", form: "naapureiden" },
          { label: "Inessiivi", form: "naapureissa" },
          { label: "Illatiivi", form: "naapureihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "naapurusto",
      en: "neighbourhood",
      taso: "B1",
      esim: { fi: "Naapurusto on rauhallinen.", en: "The neighbourhood is peaceful." },
    },
    {
      fi: "naapurimaa",
      en: "neighbouring country",
      taso: "B1",
      esim: { fi: "Ruotsi on Suomen naapurimaa.", en: "Sweden is Finland's neighbouring country." },
    },
    {
      fi: "naapuruus",
      en: "neighbourliness, proximity",
      taso: "B2",
      esim: { fi: "Hyvä naapuruus on tärkeää.", en: "Good neighbourliness is important." },
    },
  ],
  synonyymit: [
    { fi: "lähimmäinen", en: "fellow person, neighbour (figurative)" },
    { fi: "vieruskaveri", en: "the person next to you" },
  ],
  esimerkit: {
    A2: { fi: "Naapuri on mukava ihminen.", en: "The neighbour is a nice person." },
    B1: { fi: "Pyysin naapuria kastelemaan kukat.", en: "I asked the neighbour to water the flowers." },
    B2: {
      fi: "Uudet naapurit kutsuivat meidät kahville heti muuton jälkeen.",
      en: "The new neighbours invited us for coffee right after the move.",
    },
  },
  updatedAt: "2026-06-05",
};

export default naapuri;
