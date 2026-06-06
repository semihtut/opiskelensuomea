import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni, no gradation, stem saare-.
// Genitive saaren, partitive saarta, illative saareen, partitive pl saaria.
const saari: Word = {
  fi: "saari",
  slug: "saari",
  pos: "substantiivi (tyyppi 26/pieni)",
  posClass: "substantiivi",
  level: "A2",
  en: "island",
  selitys:
    "Veden ympäröimä maa-alue: 'pieni saari'. Tyyppi 26, ei astevaihtelua, vartalo saare-. Partitiivi saarta. Vrt. saaristo (archipelago), saarelainen (islander).",
  kuva: { emoji: "🏝️", alt: "saari – veden ympäröimä maa-alue" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 26/pieni; ei astevaihtelua (vartalo saare-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "saaren", merkitys: "of the island" },
      { sija: "partitiivi (yks.)", muoto: "saarta", merkitys: "island (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "saaria", merkitys: "islands (partitive pl.)" },
    ],
    huom:
      "Loppu-i → vartalo -e-: saari → saaren. Partitiivi saarta (ei *saaria yksikössä). 'Asua saarella' (adessiivi). Vrt. saaristo = archipelago.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "saari" },
          { label: "Partitiivi", form: "saarta" },
          { label: "Genetiivi", form: "saaren" },
          { label: "Inessiivi", form: "saaressa" },
          { label: "Elatiivi", form: "saaresta" },
          { label: "Illatiivi", form: "saareen" },
          { label: "Adessiivi", form: "saarella" },
          { label: "Ablatiivi", form: "saarelta" },
          { label: "Allatiivi", form: "saarelle" },
          { label: "Essiivi", form: "saarena" },
          { label: "Translatiivi", form: "saareksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "saaret" },
          { label: "Partitiivi", form: "saaria" },
          { label: "Genetiivi", form: "saarten / saarien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "saaristo",
      en: "archipelago",
      taso: "B1",
      esim: { fi: "Turun saaristo on kaunis.", en: "The Turku archipelago is beautiful." },
    },
    {
      fi: "saarelainen",
      en: "islander",
      taso: "B2",
      esim: { fi: "Saarelaiset elävät kalastuksesta.", en: "The islanders live off fishing." },
    },
    {
      fi: "pikkusaari",
      en: "small island, islet",
      taso: "B2",
      esim: { fi: "Soudimme pikkusaareen.", en: "We rowed to a small island." },
    },
  ],
  synonyymit: [
    { fi: "luoto", en: "islet, skerry" },
    { fi: "saareke", en: "small island, holm" },
  ],
  esimerkit: {
    A2: { fi: "Vietimme kesän saaressa.", en: "We spent the summer on an island." },
    B1: { fi: "Saareen pääsee vain veneellä.", en: "You can only reach the island by boat." },
    B2: {
      fi: "Asumaton saari tarjosi täydellisen rauhan kiireiseen elämään.",
      en: "The uninhabited island offered perfect peace from a busy life.",
    },
  },
  updatedAt: "2026-06-06",
};

export default saari;
