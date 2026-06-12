import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation. Genitive
// kahvilan, partitive kahvilaa, illative kahvilaan, partitive pl kahviloita.
const kahvila: Word = {
  fi: "kahvila",
  slug: "kahvila",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "A1",
  en: "café, coffee shop",
  selitys:
    "Paikka, jossa juodaan kahvia ja syödään pientä purtavaa. Tyyppi 12, ei astevaihtelua. Sanasta kahvi + -la.",
  kuva: { alt: "kahvila – kahvikuppi kahvilan pöydällä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kahvilan", merkitys: "of the café" },
      { sija: "partitiivi (yks.)", muoto: "kahvilaa", merkitys: "café (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kahviloita", merkitys: "cafés (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. Monikkovartalo kahviloi-: kahviloita, kahviloissa. 'Istua kahvilassa' = sit in a café.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kahvila" },
          { label: "Partitiivi", form: "kahvilaa" },
          { label: "Genetiivi", form: "kahvilan" },
          { label: "Inessiivi", form: "kahvilassa" },
          { label: "Elatiivi", form: "kahvilasta" },
          { label: "Illatiivi", form: "kahvilaan" },
          { label: "Adessiivi", form: "kahvilalla" },
          { label: "Ablatiivi", form: "kahvilalta" },
          { label: "Allatiivi", form: "kahvilalle" },
          { label: "Essiivi", form: "kahvilana" },
          { label: "Translatiivi", form: "kahvilaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kahvilat" },
          { label: "Partitiivi", form: "kahviloita" },
          { label: "Genetiivi", form: "kahviloiden" },
          { label: "Inessiivi", form: "kahviloissa" },
          { label: "Illatiivi", form: "kahviloihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kahvi",
      en: "coffee",
      taso: "A1",
      esim: { fi: "Joimme kahvia kahvilassa.", en: "We drank coffee at the café." },
    },
    {
      fi: "kahvitauko",
      en: "coffee break",
      taso: "B1",
      esim: { fi: "Pidämme kahvitauon kymmeneltä.", en: "We have a coffee break at ten." },
    },
    {
      fi: "kahvila-ravintola",
      en: "café-restaurant",
      taso: "B2",
      esim: { fi: "Paikka on kahvila-ravintola.", en: "The place is a café-restaurant." },
    },
  ],
  synonyymit: [
    { fi: "kahvio", en: "cafeteria (in an institution)" },
    { fi: "kahvipaikka", en: "coffee spot" },
  ],
  esimerkit: {
    A2: { fi: "Tavataan kahvilassa kello kaksi.", en: "Let's meet at the café at two." },
    B1: { fi: "Tämä kahvila on auki myöhään.", en: "This café is open late." },
    B2: {
      fi: "Istuimme kahvilassa tuntikausia ja juttelimme kaikesta.",
      en: "We sat in the café for hours and talked about everything.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kahvila;
