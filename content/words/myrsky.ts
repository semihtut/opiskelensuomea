import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem myrsky-.
// Genitive myrskyn, partitive myrskyä, illative myrskyyn, partitive pl myrskyjä.
const myrsky: Word = {
  fi: "myrsky",
  slug: "myrsky",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "storm",
  selitys:
    "Voimakas tuuli ja huono sää: 'kova myrsky'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko myrskyjä. Vrt. myrskytä (to storm), ukkosmyrsky, lumimyrsky.",
  kuva: { emoji: "🌪️", alt: "myrsky – voimakas tuuli ja huono sää" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "myrskyn", merkitys: "of the storm" },
      { sija: "partitiivi (yks.)", muoto: "myrskyä", merkitys: "storm (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "myrskyjä", merkitys: "storms (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1, ei astevaihtelua. Partitiivin monikko myrskyjä. 'Myrskyssä' = in the storm. Vrt. ukkosmyrsky = thunderstorm, lumimyrsky = blizzard, myrskytä = to storm.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "myrsky" },
          { label: "Partitiivi", form: "myrskyä" },
          { label: "Genetiivi", form: "myrskyn" },
          { label: "Inessiivi", form: "myrskyssä" },
          { label: "Elatiivi", form: "myrskystä" },
          { label: "Illatiivi", form: "myrskyyn" },
          { label: "Adessiivi", form: "myrskyllä" },
          { label: "Ablatiivi", form: "myrskyltä" },
          { label: "Allatiivi", form: "myrskylle" },
          { label: "Essiivi", form: "myrskynä" },
          { label: "Translatiivi", form: "myrskyksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "myrskyt" },
          { label: "Partitiivi", form: "myrskyjä" },
          { label: "Genetiivi", form: "myrskyjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ukkosmyrsky",
      en: "thunderstorm",
      taso: "B2",
      esim: { fi: "Ukkosmyrsky kaatoi puita.", en: "The thunderstorm knocked down trees." },
    },
    {
      fi: "myrskytä",
      en: "to storm",
      taso: "B2",
      esim: { fi: "Yöllä myrskysi rajusti.", en: "It stormed fiercely during the night." },
    },
    {
      fi: "lumimyrsky",
      en: "blizzard, snowstorm",
      taso: "B1",
      esim: { fi: "Lumimyrsky pysäytti liikenteen.", en: "The blizzard stopped the traffic." },
    },
  ],
  synonyymit: [
    { fi: "rajuilma", en: "violent storm" },
    { fi: "tuulenpuuska", en: "gust (related)" },
  ],
  esimerkit: {
    A2: { fi: "Eilen oli kova myrsky.", en: "Yesterday there was a strong storm." },
    B1: { fi: "Myrsky katkaisi sähköt koko kylästä.", en: "The storm cut the power to the whole village." },
    B2: {
      fi: "Myrskyn jälkeen ranta oli täynnä ajopuita ja levää.",
      en: "After the storm the beach was full of driftwood and seaweed.",
    },
  },
  updatedAt: "2026-06-07",
};

export default myrsky;
