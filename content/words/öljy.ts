import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem öljy-.
// Genitive öljyn, partitive öljyä, partitive pl öljyjä.
const oljy: Word = {
  fi: "öljy",
  slug: "öljy",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "oil",
  selitys:
    "Rasvainen neste, jota käytetään ruoanlaitossa, koneissa ja polttoaineena: 'oliiviöljy', 'paista öljyssä'. Tyyppi 1/valo, ei astevaihtelua. Vrt. rasva, paistaa, polttoaine.",
  kuva: { emoji: "🫒", alt: "öljy – rasvainen neste ruoanlaittoon ja koneisiin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo öljy-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "öljyn", merkitys: "of the oil" },
      { sija: "partitiivi (yks.)", muoto: "öljyä", merkitys: "oil (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "öljyjä", merkitys: "oils (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua. Oliiviöljy, rypsiöljy, raakaöljy (crude oil). Vrt. rasva, polttoaine.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "öljy" },
          { label: "Partitiivi", form: "öljyä" },
          { label: "Genetiivi", form: "öljyn" },
          { label: "Inessiivi", form: "öljyssä" },
          { label: "Elatiivi", form: "öljystä" },
          { label: "Illatiivi", form: "öljyyn" },
          { label: "Adessiivi", form: "öljyllä" },
          { label: "Ablatiivi", form: "öljyltä" },
          { label: "Allatiivi", form: "öljylle" },
          { label: "Essiivi", form: "öljynä" },
          { label: "Translatiivi", form: "öljyksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "öljyt" },
          { label: "Partitiivi", form: "öljyjä" },
          { label: "Genetiivi", form: "öljyjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "oliiviöljy",
      en: "olive oil",
      taso: "A2",
      esim: { fi: "Käytän salaatissa oliiviöljyä.", en: "I use olive oil in the salad." },
    },
    {
      fi: "öljyinen",
      en: "oily",
      taso: "B2",
      esim: { fi: "Ruoka oli liian öljyistä.", en: "The food was too oily." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Kaada pannulle öljyä.", en: "Pour some oil into the pan." },
    B1: { fi: "Paista kasvikset öljyssä.", en: "Fry the vegetables in oil." },
    B2: {
      fi: "Öljyn hinta vaikuttaa lähes kaikkeen taloudessa.",
      en: "The price of oil affects almost everything in the economy.",
    },
  },
  updatedAt: "2026-06-07",
};

export default oljy;
