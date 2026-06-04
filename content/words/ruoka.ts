import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira with k:∅ gradation. Weak grade
// drops k (ruoan ~ ruuan), strong keeps it (ruokaa, ruokaan). Both ruoan (written)
// and ruuan (spoken) are standard.
const ruoka: Word = {
  fi: "ruoka",
  slug: "ruoka",
  pos: "substantiivi (tyyppi: koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "food; meal",
  selitys:
    "Se, mitä syödään; ateria tai ruoka-aine. Astevaihtelu k:∅ (ruoka → ruoan). Kirjakielessä ruoan, puhekielessä usein ruuan.",
  kuva: { emoji: "🍲", alt: "ruoka – höyryävä ruoka-annos" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; astevaihtelu k:∅ (ruoka → ruoan)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "ruokaa", merkitys: "food (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "ruoan", merkitys: "of the food" },
      { sija: "partitiivi (mon.)", muoto: "ruokia", merkitys: "foods (partitive pl.)" },
    ],
    huom:
      "k katoaa heikossa asteessa: ruoan (puhek. ruuan), ruoassa. Vahva k avotavussa: ruokaa, ruokaan, ruokia.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ruoka" },
          { label: "Partitiivi", form: "ruokaa" },
          { label: "Genetiivi", form: "ruoan (ruuan)" },
          { label: "Inessiivi", form: "ruoassa" },
          { label: "Elatiivi", form: "ruoasta" },
          { label: "Illatiivi", form: "ruokaan" },
          { label: "Adessiivi", form: "ruoalla" },
          { label: "Ablatiivi", form: "ruoalta" },
          { label: "Allatiivi", form: "ruoalle" },
          { label: "Essiivi", form: "ruokana" },
          { label: "Translatiivi", form: "ruoaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ruoat (ruuat)" },
          { label: "Partitiivi", form: "ruokia" },
          { label: "Genetiivi", form: "ruokien" },
          { label: "Illatiivi", form: "ruokiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ruokalista",
      en: "menu",
      taso: "A2",
      esim: { fi: "Mitä ruokalistalla on tänään?", en: "What's on the menu today?" },
    },
    {
      fi: "ruokailla",
      en: "to dine, have a meal",
      taso: "B1",
      esim: { fi: "Ruokailemme yhdessä kello kuusi.", en: "We dine together at six." },
    },
    {
      fi: "ruoanlaitto",
      en: "cooking",
      taso: "B1",
      esim: { fi: "Ruoanlaitto on minulle rentouttavaa.", en: "Cooking is relaxing for me." },
    },
  ],
  synonyymit: [
    { fi: "ateria", en: "meal" },
    { fi: "syötävä", en: "something to eat, edibles" },
  ],
  esimerkit: {
    A2: { fi: "Ruoka on valmista.", en: "The food is ready." },
    B1: { fi: "Pidän suomalaisesta ruoasta.", en: "I like Finnish food." },
    B2: {
      fi: "Terveellinen ruoka antaa energiaa koko päiväksi.",
      en: "Healthy food gives energy for the whole day.",
    },
  },
  updatedAt: "2026-06-04",
};

export default ruoka;
