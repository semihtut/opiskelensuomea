import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 13/katiska, no gradation. Genitive
// sairaalan, partitive sairaalaa, illative sairaalaan, partitive pl sairaaloita ~ sairaaloja.
const sairaala: Word = {
  fi: "sairaala",
  slug: "sairaala",
  pos: "substantiivi (tyyppi 13/katiska)",
  posClass: "substantiivi",
  level: "A2",
  en: "hospital",
  selitys:
    "Suuri laitos, jossa hoidetaan sairaita. Tyyppi 13, ei astevaihtelua. Sanasta sairas + -la.",
  kuva: { alt: "sairaala – sairaalarakennus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 13/katiska; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sairaalan", merkitys: "of the hospital" },
      { sija: "partitiivi (yks.)", muoto: "sairaalaa", merkitys: "hospital (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sairaaloita", merkitys: "hospitals (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. Monikon partitiivi sairaaloita ~ sairaaloja. 'Joutua sairaalaan' = be taken to hospital.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sairaala" },
          { label: "Partitiivi", form: "sairaalaa" },
          { label: "Genetiivi", form: "sairaalan" },
          { label: "Inessiivi", form: "sairaalassa" },
          { label: "Elatiivi", form: "sairaalasta" },
          { label: "Illatiivi", form: "sairaalaan" },
          { label: "Adessiivi", form: "sairaalalla" },
          { label: "Ablatiivi", form: "sairaalalta" },
          { label: "Allatiivi", form: "sairaalalle" },
          { label: "Essiivi", form: "sairaalana" },
          { label: "Translatiivi", form: "sairaalaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sairaalat" },
          { label: "Partitiivi", form: "sairaaloita" },
          { label: "Genetiivi", form: "sairaaloiden" },
          { label: "Inessiivi", form: "sairaaloissa" },
          { label: "Illatiivi", form: "sairaaloihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sairaalahoito",
      en: "hospital care",
      taso: "B2",
      esim: { fi: "Hän tarvitsi sairaalahoitoa.", en: "He needed hospital care." },
    },
    {
      fi: "keskussairaala",
      en: "central hospital",
      taso: "B2",
      esim: { fi: "Hänet vietiin keskussairaalaan.", en: "She was taken to the central hospital." },
    },
    {
      fi: "sairas",
      en: "sick (the root word)",
      taso: "A2",
      esim: { fi: "Sairas lapsi vietiin sairaalaan.", en: "The sick child was taken to hospital." },
    },
  ],
  synonyymit: [
    { fi: "klinikka", en: "clinic" },
    { fi: "terveyskeskus", en: "health center" },
  ],
  esimerkit: {
    A2: { fi: "Hän on sairaalassa.", en: "He is in the hospital." },
    B1: { fi: "Sairaala sijaitsee kaupungin laidalla.", en: "The hospital is located on the edge of the city." },
    B2: {
      fi: "Onnettomuuden jälkeen hänet vietiin kiireesti sairaalaan.",
      en: "After the accident he was rushed to the hospital.",
    },
  },
  updatedAt: "2026-06-05",
};

export default sairaala;
