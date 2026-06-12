import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem vamma-.
// Genitive vamman, partitive vammaa, partitive pl vammoja.
const vamma: Word = {
  fi: "vamma",
  slug: "vamma",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "injury; disability",
  selitys:
    "Kehon vaurio tai pysyvä haitta: 'urheiluvamma'. Tyyppi 9/kala, ei astevaihtelua; partitiivin monikko vammoja. Vrt. loukkaantua, vammautua, haava.",
  kuva: { alt: "vamma – kehon vaurio tai pysyvä haitta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua (vartalo vamma-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vamman", merkitys: "of the injury" },
      { sija: "partitiivi (yks.)", muoto: "vammaa", merkitys: "injury (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vammoja", merkitys: "injuries (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: partitiivin monikko -oja (vammoja, a→o), ei astevaihtelua (mm säilyy). Merkitykset: vamma (injury) ja vamma (disability). Vrt. loukkaantua = to get injured, vammautua = to become disabled.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vamma" },
          { label: "Partitiivi", form: "vammaa" },
          { label: "Genetiivi", form: "vamman" },
          { label: "Inessiivi", form: "vammassa" },
          { label: "Elatiivi", form: "vammasta" },
          { label: "Illatiivi", form: "vammaan" },
          { label: "Adessiivi", form: "vammalla" },
          { label: "Ablatiivi", form: "vammalta" },
          { label: "Allatiivi", form: "vammalle" },
          { label: "Essiivi", form: "vammana" },
          { label: "Translatiivi", form: "vammaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vammat" },
          { label: "Partitiivi", form: "vammoja" },
          { label: "Genetiivi", form: "vammojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vammautua",
      en: "to become disabled/injured",
      taso: "B2",
      esim: { fi: "Hän vammautui onnettomuudessa.", en: "He became disabled in the accident." },
    },
    {
      fi: "vammainen",
      en: "disabled (person)",
      taso: "B2",
      esim: { fi: "Tila on esteetön vammaisille.", en: "The space is accessible to disabled people." },
    },
  ],
  synonyymit: [
    { fi: "loukkaantuminen", en: "injury" },
    { fi: "haava", en: "wound" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on jalkavamma.", en: "He has a leg injury." },
    B1: { fi: "Vamma parani muutamassa viikossa.", en: "The injury healed in a few weeks." },
    B2: {
      fi: "Vakava vamma esti urheilijaa osallistumasta kisoihin.",
      en: "A serious injury prevented the athlete from taking part in the games.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vamma;
