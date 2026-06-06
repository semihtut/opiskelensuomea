import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, nt:nn gradation, stem luonto- ~ luonno-.
// Genitive luonnon, partitive luontoa, illative luontoon, partitive pl luontoja.
const luonto: Word = {
  fi: "luonto",
  slug: "luonto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "nature",
  selitys:
    "Ihmisen tekemätön maailma: kasvit, eläimet ja maisema: 'suojella luontoa'. Tyyppi 1, astevaihtelu nt:nn (luonto → luonnon). Johdettu sanasta luoda. Vrt. luonnollinen (natural), luonne (character).",
  kuva: { emoji: "🌿", alt: "luonto – ihmisen tekemätön maailma" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nt:nn (luonto ↔ luonno-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "luonnon", merkitys: "of nature" },
      { sija: "partitiivi (yks.)", muoto: "luontoa", merkitys: "nature (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "luontoja", merkitys: "natures (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa nt → nn: genetiivi luonnon, adessiivi luonnolla. Vahva aste nt säilyy partitiivissa luontoa ja illatiivissa luontoon. Vrt. luonnonsuojelu = nature conservation.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "luonto" },
          { label: "Partitiivi", form: "luontoa" },
          { label: "Genetiivi", form: "luonnon" },
          { label: "Inessiivi", form: "luonnossa" },
          { label: "Elatiivi", form: "luonnosta" },
          { label: "Illatiivi", form: "luontoon" },
          { label: "Adessiivi", form: "luonnolla" },
          { label: "Ablatiivi", form: "luonnolta" },
          { label: "Allatiivi", form: "luonnolle" },
          { label: "Essiivi", form: "luontona" },
          { label: "Translatiivi", form: "luonnoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "luonnot" },
          { label: "Partitiivi", form: "luontoja" },
          { label: "Genetiivi", form: "luontojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luonnollinen",
      en: "natural",
      taso: "B1",
      esim: { fi: "Se on aivan luonnollinen reaktio.", en: "It's a completely natural reaction." },
    },
    {
      fi: "luonnonsuojelu",
      en: "nature conservation",
      taso: "B2",
      esim: { fi: "Luonnonsuojelu on tärkeää.", en: "Nature conservation is important." },
    },
    {
      fi: "luonnonvara",
      en: "natural resource",
      taso: "B2",
      esim: { fi: "Metsä on Suomen tärkeä luonnonvara.", en: "The forest is an important natural resource for Finland." },
    },
  ],
  synonyymit: [
    { fi: "ympäristö", en: "environment" },
    { fi: "luonnonympäristö", en: "natural environment" },
  ],
  esimerkit: {
    A2: { fi: "Rakastan luontoa.", en: "I love nature." },
    B1: { fi: "Vietämme paljon aikaa luonnossa.", en: "We spend a lot of time in nature." },
    B2: {
      fi: "Luonnon monimuotoisuuden säilyttäminen vaatii yhteisiä toimia.",
      en: "Preserving the diversity of nature requires joint action.",
    },
  },
  updatedAt: "2026-06-06",
};

export default luonto;
