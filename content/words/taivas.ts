import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, no gradation, consonant stem.
// Genitive taivaan, partitive taivasta, illative taivaaseen, partitive pl taivaita.
const taivas: Word = {
  fi: "taivas",
  slug: "taivas",
  pos: "substantiivi (tyyppi 41/vieras)",
  posClass: "substantiivi",
  level: "A2",
  en: "sky; heaven",
  selitys:
    "Maan yllä näkyvä avaruus; myös uskonnollinen 'taivas' (heaven). Tyyppi 41, ei astevaihtelua, konsonanttivartalo (taivasta).",
  kuva: { emoji: "🌌", alt: "taivas – avara taivas" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 41/vieras; ei astevaihtelua, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "taivaan", merkitys: "of the sky" },
      { sija: "partitiivi (yks.)", muoto: "taivasta", merkitys: "sky (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "taivaita", merkitys: "skies (partitive pl.)" },
    ],
    huom:
      "Vokaalivartalo taivaa-: taivaan, taivaalla, taivaaseen. Konsonanttivartalo näkyy partitiivissa taivasta. 'Taivaalla' = in the sky.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "taivas" },
          { label: "Partitiivi", form: "taivasta" },
          { label: "Genetiivi", form: "taivaan" },
          { label: "Inessiivi", form: "taivaassa" },
          { label: "Elatiivi", form: "taivaasta" },
          { label: "Illatiivi", form: "taivaaseen" },
          { label: "Adessiivi", form: "taivaalla" },
          { label: "Ablatiivi", form: "taivaalta" },
          { label: "Allatiivi", form: "taivaalle" },
          { label: "Essiivi", form: "taivaana" },
          { label: "Translatiivi", form: "taivaaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "taivaat" },
          { label: "Partitiivi", form: "taivaita" },
          { label: "Genetiivi", form: "taivaiden" },
          { label: "Inessiivi", form: "taivaissa" },
          { label: "Illatiivi", form: "taivaisiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "taivaallinen",
      en: "heavenly, divine",
      taso: "B2",
      esim: { fi: "Ruoka oli taivaallista.", en: "The food was heavenly." },
    },
    {
      fi: "taivaanranta",
      en: "horizon",
      taso: "B1",
      esim: { fi: "Aurinko laski taivaanrantaan.", en: "The sun set on the horizon." },
    },
    {
      fi: "pilvi",
      en: "cloud (related sky word)",
      taso: "A2",
      esim: { fi: "Taivaalla on tummia pilviä.", en: "There are dark clouds in the sky." },
    },
  ],
  synonyymit: [
    { fi: "taivaankansi", en: "the firmament" },
    { fi: "avaruus", en: "space (related)" },
  ],
  esimerkit: {
    A2: { fi: "Taivas on sininen.", en: "The sky is blue." },
    B1: { fi: "Linnut lentävät korkealla taivaalla.", en: "The birds fly high in the sky." },
    B2: {
      fi: "Myrskyn jälkeen taivas oli kirkkaampi kuin koskaan.",
      en: "After the storm the sky was clearer than ever.",
    },
  },
  updatedAt: "2026-06-04",
};

export default taivas;
