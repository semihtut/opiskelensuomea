import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, t:d gradation. Genitive kadun,
// partitive katua, illative katuun, partitive pl katuja.
const katu: Word = {
  fi: "katu",
  slug: "katu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "street",
  selitys:
    "Kaupungin tie talojen välissä. Tyyppi 1, astevaihtelu t:d (katu → kadun). Vrt. tie (maantie).",
  kuva: { emoji: "🛣️", alt: "katu – kaupungin katu talojen välissä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu t:d",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kadun", merkitys: "of the street" },
      { sija: "partitiivi (yks.)", muoto: "katua", merkitys: "street (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "katuja", merkitys: "streets (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu t:d heikossa asteessa: katu, mutta kadun, kadulla. Vahva aste säilyy: katua, katuun, katuja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "katu" },
          { label: "Partitiivi", form: "katua" },
          { label: "Genetiivi", form: "kadun" },
          { label: "Inessiivi", form: "kadussa" },
          { label: "Elatiivi", form: "kadusta" },
          { label: "Illatiivi", form: "katuun" },
          { label: "Adessiivi", form: "kadulla" },
          { label: "Ablatiivi", form: "kadulta" },
          { label: "Allatiivi", form: "kadulle" },
          { label: "Essiivi", form: "katuna" },
          { label: "Translatiivi", form: "kaduksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kadut" },
          { label: "Partitiivi", form: "katuja" },
          { label: "Genetiivi", form: "katujen" },
          { label: "Inessiivi", form: "kaduissa" },
          { label: "Illatiivi", form: "katuihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kadunkulma",
      en: "street corner",
      taso: "B1",
      esim: { fi: "Tavataan kadunkulmassa.", en: "Let's meet on the street corner." },
    },
    {
      fi: "pääkatu",
      en: "main street",
      taso: "A2",
      esim: { fi: "Kaupat ovat pääkadulla.", en: "The shops are on the main street." },
    },
    {
      fi: "katuvalo",
      en: "street light",
      taso: "B1",
      esim: { fi: "Katuvalot syttyvät illalla.", en: "The street lights come on in the evening." },
    },
  ],
  synonyymit: [
    { fi: "tie", en: "road" },
    { fi: "väylä", en: "thoroughfare, route" },
  ],
  esimerkit: {
    A2: { fi: "Millä kadulla sinä asut?", en: "What street do you live on?" },
    B1: { fi: "Kävelimme pitkin hiljaista katua.", en: "We walked along the quiet street." },
    B2: {
      fi: "Kadut olivat tyhjiä, koska kaikki olivat lomalla.",
      en: "The streets were empty because everyone was on holiday.",
    },
  },
  updatedAt: "2026-06-04",
};

export default katu;
