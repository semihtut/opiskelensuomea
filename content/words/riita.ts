import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, t:d gradation, stem riita- ~ riida-.
// Genitive riidan, partitive riitaa, partitive pl riitoja.
const riita: Word = {
  fi: "riita",
  slug: "riita",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "quarrel, dispute, argument",
  selitys:
    "Äänekäs erimielisyys tai kiista: 'joutua riitaan'. Tyyppi 9/kala, astevaihtelu t:d (riita → riidan), partitiivin monikko riitoja. Vrt. riidellä, riitainen, sopu (vastakohta).",
  kuva: { emoji: "⚔️", alt: "riita – äänekäs erimielisyys tai kiista" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu t:d (vartalo riida-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "riidan", merkitys: "of the quarrel" },
      { sija: "partitiivi (yks.)", muoto: "riitaa", merkitys: "quarrel (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "riitoja", merkitys: "quarrels (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: partitiivin monikko -oja (riitoja, a→o). Astevaihtelu t:d: nominatiivi riita (vahva t), genetiivi riidan (heikko d). Vastakohta sopu. 'Joutua riitaan' = to get into a quarrel. Vrt. riidellä = to quarrel.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "riita" },
          { label: "Partitiivi", form: "riitaa" },
          { label: "Genetiivi", form: "riidan" },
          { label: "Inessiivi", form: "riidassa" },
          { label: "Elatiivi", form: "riidasta" },
          { label: "Illatiivi", form: "riitaan" },
          { label: "Adessiivi", form: "riidalla" },
          { label: "Ablatiivi", form: "riidalta" },
          { label: "Allatiivi", form: "riidalle" },
          { label: "Essiivi", form: "riitana" },
          { label: "Translatiivi", form: "riidaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "riidat" },
          { label: "Partitiivi", form: "riitoja" },
          { label: "Genetiivi", form: "riitojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "riidellä",
      en: "to quarrel",
      taso: "B1",
      esim: { fi: "He riitelevät usein.", en: "They quarrel often." },
    },
    {
      fi: "riitainen",
      en: "quarrelsome, contentious",
      taso: "B2",
      esim: { fi: "Kokous oli riitainen.", en: "The meeting was contentious." },
    },
  ],
  synonyymit: [
    { fi: "kiista", en: "dispute" },
    { fi: "erimielisyys", en: "disagreement" },
  ],
  esimerkit: {
    A2: { fi: "Heillä oli pieni riita.", en: "They had a small quarrel." },
    B1: { fi: "Riita sovittiin nopeasti.", en: "The quarrel was settled quickly." },
    B2: {
      fi: "Naapureiden välinen riita rajasta kesti useita vuosia.",
      en: "The dispute between the neighbours over the boundary lasted several years.",
    },
  },
  updatedAt: "2026-06-07",
};

export default riita;
