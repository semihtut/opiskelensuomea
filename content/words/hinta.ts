import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala with nt:nn gradation. Strong nt in
// open syllables (hintaa, hintaan), weak nn in closed (hinnan, hinnalla).
const hinta: Word = {
  fi: "hinta",
  slug: "hinta",
  pos: "substantiivi (tyyppi: kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "price",
  selitys: "Rahamäärä, joka tavarasta tai palvelusta maksetaan. Astevaihtelu nt:nn (hinta → hinnan).",
  kuva: { emoji: "🏷️", alt: "hinta – hintalappu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu nt:nn (hinta → hinnan)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "hintaa", merkitys: "price (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "hinnan", merkitys: "of the price" },
      { sija: "partitiivi (mon.)", muoto: "hintoja", merkitys: "prices (partitive pl.)" },
    ],
    huom:
      "Vahva nt avotavussa (hintaa, hintaan), heikko nn umpitavussa (hinnan, hinnalla). 'Mihin hintaan?' = at what price?",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hinta" },
          { label: "Partitiivi", form: "hintaa" },
          { label: "Genetiivi", form: "hinnan" },
          { label: "Inessiivi", form: "hinnassa" },
          { label: "Elatiivi", form: "hinnasta" },
          { label: "Illatiivi", form: "hintaan" },
          { label: "Adessiivi", form: "hinnalla" },
          { label: "Ablatiivi", form: "hinnalta" },
          { label: "Allatiivi", form: "hinnalle" },
          { label: "Essiivi", form: "hintana" },
          { label: "Translatiivi", form: "hinnaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hinnat" },
          { label: "Partitiivi", form: "hintoja" },
          { label: "Genetiivi", form: "hintojen" },
          { label: "Illatiivi", form: "hintoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hinnasto",
      en: "price list",
      taso: "B1",
      esim: { fi: "Hinnasto löytyy seinältä.", en: "The price list is on the wall." },
    },
    {
      fi: "hintava",
      en: "pricey, expensive",
      taso: "B2",
      esim: { fi: "Ravintola oli melko hintava.", en: "The restaurant was quite pricey." },
    },
    {
      fi: "hinnoitella",
      en: "to price (set a price)",
      taso: "B2",
      esim: { fi: "Tuotteet on hinnoiteltu edullisesti.", en: "The products are priced affordably." },
    },
  ],
  synonyymit: [
    { fi: "maksu", en: "charge, fee" },
    { fi: "arvo", en: "value, worth" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on tämän hinta?", en: "What is the price of this?" },
    B1: { fi: "Hinnat ovat nousseet paljon.", en: "Prices have risen a lot." },
    B2: {
      fi: "Tuotteen hinta määräytyy kysynnän ja tarjonnan mukaan.",
      en: "The product's price is determined by supply and demand.",
    },
  },
  updatedAt: "2026-06-04",
};

export default hinta;
