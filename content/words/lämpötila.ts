import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem lämpötila-.
// Genitive lämpötilan, partitive lämpötilaa, partitive pl lämpötiloja.
const lampotila: Word = {
  fi: "lämpötila",
  slug: "lämpötila",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "temperature",
  selitys:
    "Lämmön määrä, mitataan asteina: 'ilman lämpötila'. Tyyppi 9/kala, ei astevaihtelua; partitiivin monikko lämpötiloja. Yhdyssana lämpö + tila. Vrt. lämpö, aste, sää.",
  kuva: { emoji: "🌡️", alt: "lämpötila – lämmön määrä, mitataan asteina" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua (vartalo lämpötila-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lämpötilan", merkitys: "of the temperature" },
      { sija: "partitiivi (yks.)", muoto: "lämpötilaa", merkitys: "temperature (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lämpötiloja", merkitys: "temperatures (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: partitiivin monikko -oja (lämpötiloja, a→o), ei astevaihtelua. Yhdyssana lämpö + tila. 'Lämpötila nousee/laskee' = temperature rises/falls. Vrt. lämpö = heat, aste = degree.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lämpötila" },
          { label: "Partitiivi", form: "lämpötilaa" },
          { label: "Genetiivi", form: "lämpötilan" },
          { label: "Inessiivi", form: "lämpötilassa" },
          { label: "Elatiivi", form: "lämpötilasta" },
          { label: "Illatiivi", form: "lämpötilaan" },
          { label: "Adessiivi", form: "lämpötilalla" },
          { label: "Ablatiivi", form: "lämpötilalta" },
          { label: "Allatiivi", form: "lämpötilalle" },
          { label: "Essiivi", form: "lämpötilana" },
          { label: "Translatiivi", form: "lämpötilaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lämpötilat" },
          { label: "Partitiivi", form: "lämpötiloja" },
          { label: "Genetiivi", form: "lämpötilojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lämpö",
      en: "heat, warmth",
      taso: "B1",
      esim: { fi: "Kesän lämpö on ihana.", en: "The summer's warmth is lovely." },
    },
    {
      fi: "lämmin",
      en: "warm",
      taso: "A2",
      esim: { fi: "Sää on lämmin.", en: "The weather is warm." },
    },
  ],
  synonyymit: [
    { fi: "lämpö", en: "heat" },
  ],
  esimerkit: {
    A2: { fi: "Lämpötila on 20 astetta.", en: "The temperature is 20 degrees." },
    B1: { fi: "Lämpötila laski yöllä pakkasen puolelle.", en: "The temperature dropped below zero at night." },
    B2: {
      fi: "Maapallon keskilämpötila on noussut viime vuosikymmeninä.",
      en: "The Earth's average temperature has risen in recent decades.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lampotila;
