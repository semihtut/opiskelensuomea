import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation. Partitive sg
// kahvia, partitive pl kahveja (e.g. "kaksi kahvia" = two coffees).
const kahvi: Word = {
  fi: "kahvi",
  slug: "kahvi",
  pos: "substantiivi (tyyppi: risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "coffee",
  selitys:
    "Tumma, piristävä juoma, joka valmistetaan kahvipavuista. Ei astevaihtelua.",
  kuva: { alt: "kahvi – kuppi kahvia" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "kahvia", merkitys: "coffee (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "kahvin", merkitys: "of the coffee" },
      { sija: "partitiivi (mon.)", muoto: "kahveja", merkitys: "coffees (partitive pl.)" },
    ],
    huom: "Annoksista puhuttaessa monikon partitiivi kahveja: 'Kaksi kahvia, kiitos.'",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kahvi" },
          { label: "Partitiivi", form: "kahvia" },
          { label: "Genetiivi", form: "kahvin" },
          { label: "Inessiivi", form: "kahvissa" },
          { label: "Elatiivi", form: "kahvista" },
          { label: "Illatiivi", form: "kahviin" },
          { label: "Adessiivi", form: "kahvilla" },
          { label: "Ablatiivi", form: "kahvilta" },
          { label: "Allatiivi", form: "kahville" },
          { label: "Essiivi", form: "kahvina" },
          { label: "Translatiivi", form: "kahviksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kahvit" },
          { label: "Partitiivi", form: "kahveja" },
          { label: "Genetiivi", form: "kahvien" },
          { label: "Illatiivi", form: "kahveihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kahvila",
      en: "café",
      taso: "A2",
      esim: { fi: "Tavataan kahvilassa.", en: "Let's meet at the café." },
    },
    {
      fi: "kahvikuppi",
      en: "coffee cup",
      taso: "A2",
      esim: { fi: "Kahvikuppi on pöydällä.", en: "The coffee cup is on the table." },
    },
    {
      fi: "kahvitauko",
      en: "coffee break",
      taso: "B1",
      esim: { fi: "Pidämme kahvitauon kymmeneltä.", en: "We take a coffee break at ten." },
    },
  ],
  synonyymit: [
    { fi: "suodatinkahvi", en: "filter coffee" },
    { fi: "espresso", en: "espresso" },
  ],
  esimerkit: {
    A2: { fi: "Juotko kahvia vai teetä?", en: "Do you drink coffee or tea?" },
    B1: { fi: "Tilasin kupin kahvia.", en: "I ordered a cup of coffee." },
    B2: {
      fi: "Aamukahvi on monelle päivän tärkein hetki.",
      en: "Morning coffee is the most important moment of the day for many.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kahvi;
