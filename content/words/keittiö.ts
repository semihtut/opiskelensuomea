import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation (tt stays tt).
// Partitive sg keittiötä, partitive pl keittiöitä, genitive pl keittiöiden.
const keittiö: Word = {
  fi: "keittiö",
  slug: "keittiö",
  pos: "substantiivi (tyyppi: valtio)",
  posClass: "substantiivi",
  level: "A2",
  en: "kitchen",
  selitys: "Huone, jossa valmistetaan ruokaa. Ei astevaihtelua (tt säilyy).",
  kuva: { emoji: "🍳", alt: "keittiö – tila, jossa laitetaan ruokaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "keittiötä", merkitys: "kitchen (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "keittiön", merkitys: "of the kitchen" },
      { sija: "partitiivi (mon.)", muoto: "keittiöitä", merkitys: "kitchens (partitive pl.)" },
    ],
    huom: "Ei astevaihtelua: tt säilyy kaikissa muodoissa. Monikon genetiivi keittiöiden (myös keittiöitten).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "keittiö" },
          { label: "Partitiivi", form: "keittiötä" },
          { label: "Genetiivi", form: "keittiön" },
          { label: "Inessiivi", form: "keittiössä" },
          { label: "Elatiivi", form: "keittiöstä" },
          { label: "Illatiivi", form: "keittiöön" },
          { label: "Adessiivi", form: "keittiöllä" },
          { label: "Ablatiivi", form: "keittiöltä" },
          { label: "Allatiivi", form: "keittiölle" },
          { label: "Essiivi", form: "keittiönä" },
          { label: "Translatiivi", form: "keittiöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "keittiöt" },
          { label: "Partitiivi", form: "keittiöitä" },
          { label: "Genetiivi", form: "keittiöiden" },
          { label: "Illatiivi", form: "keittiöihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "keittää",
      en: "to boil, cook",
      taso: "A2",
      esim: { fi: "Keitän perunoita.", en: "I'm boiling potatoes." },
    },
    {
      fi: "keittokirja",
      en: "cookbook",
      taso: "B1",
      esim: { fi: "Löysin reseptin keittokirjasta.", en: "I found the recipe in the cookbook." },
    },
    {
      fi: "keittiömestari",
      en: "head chef",
      taso: "B2",
      esim: { fi: "Keittiömestari suunnitteli uuden menun.", en: "The head chef designed a new menu." },
    },
  ],
  synonyymit: [
    { fi: "kyökki", en: "kitchen (colloquial)" },
    { fi: "keittokomero", en: "kitchenette" },
  ],
  esimerkit: {
    A2: { fi: "Äiti on keittiössä.", en: "Mom is in the kitchen." },
    B1: { fi: "Uusi keittiö on tilava ja valoisa.", en: "The new kitchen is spacious and bright." },
    B2: {
      fi: "Ravintolan keittiössä työskenteli kymmenen kokkia.",
      en: "Ten cooks worked in the restaurant's kitchen.",
    },
  },
  updatedAt: "2026-06-04",
};

export default keittiö;
