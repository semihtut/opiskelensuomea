import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation. Adverbial aamulla
// (in the morning), essive aamuna. Partitive sg aamua, partitive pl aamuja.
const aamu: Word = {
  fi: "aamu",
  slug: "aamu",
  pos: "substantiivi (tyyppi: valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "morning",
  selitys: "Päivän alkuosa, heräämisen aika. Ei astevaihtelua.",
  kuva: { emoji: "🌅", alt: "aamu – auringonnousu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "aamua", merkitys: "morning (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "aamun", merkitys: "of the morning" },
      { sija: "adessiivi (yks.)", muoto: "aamulla", merkitys: "in the morning" },
    ],
    huom: "'Aamulla' = in the morning. 'Huomenaamulla' = tomorrow morning. Monikon partitiivi aamuja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "aamu" },
          { label: "Partitiivi", form: "aamua" },
          { label: "Genetiivi", form: "aamun" },
          { label: "Inessiivi", form: "aamussa" },
          { label: "Elatiivi", form: "aamusta" },
          { label: "Illatiivi", form: "aamuun" },
          { label: "Adessiivi", form: "aamulla" },
          { label: "Ablatiivi", form: "aamulta" },
          { label: "Allatiivi", form: "aamulle" },
          { label: "Essiivi", form: "aamuna" },
          { label: "Translatiivi", form: "aamuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "aamut" },
          { label: "Partitiivi", form: "aamuja" },
          { label: "Genetiivi", form: "aamujen" },
          { label: "Illatiivi", form: "aamuihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "aamiainen",
      en: "breakfast",
      taso: "A2",
      esim: { fi: "Syön aamiaisen kello seitsemän.", en: "I eat breakfast at seven." },
    },
    {
      fi: "aamupäivä",
      en: "late morning, forenoon",
      taso: "A2",
      esim: { fi: "Tapaaminen on aamupäivällä.", en: "The meeting is in the late morning." },
    },
    {
      fi: "aamuisin",
      en: "in the mornings",
      taso: "B1",
      esim: { fi: "Aamuisin juon teetä.", en: "In the mornings I drink tea." },
    },
  ],
  synonyymit: [
    { fi: "aamupäivä", en: "forenoon" },
    { fi: "aamuhetki", en: "morning hour" },
  ],
  esimerkit: {
    A2: { fi: "Hyvää huomenta! Kaunis aamu.", en: "Good morning! A beautiful morning." },
    B1: { fi: "Aamulla join kahvia ja luin lehden.", en: "In the morning I drank coffee and read the paper." },
    B2: {
      fi: "Varhainen aamu on rauhallisin hetki koko päivässä.",
      en: "Early morning is the most peaceful moment of the whole day.",
    },
  },
  updatedAt: "2026-06-04",
};

export default aamu;
