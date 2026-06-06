import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation, stem sorme-.
// Genitive sormen, partitive sormea, illative sormeen, partitive pl sormia.
const sormi: Word = {
  fi: "sormi",
  slug: "sormi",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "A2",
  en: "finger",
  selitys:
    "Käden viidestä päästä yksi: 'osoittaa sormella'. Tyyppi 7, ei astevaihtelua, vartalo sorme-. Partitiivin monikko sormia. Vrt. sormus (ring), sormenjälki (fingerprint), varvas (toe).",
  kuva: { emoji: "👆", alt: "sormi – käden pää" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua (vartalo sorme-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sormen", merkitys: "of the finger" },
      { sija: "partitiivi (yks.)", muoto: "sormea", merkitys: "finger (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sormia", merkitys: "fingers (partitive pl.)" },
    ],
    huom:
      "Loppu-i → vartalo -e-: sormi → sormen, sormea. Partitiivin monikko sormia. Vrt. sormus = ring, etusormi = index finger, peukalo = thumb.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sormi" },
          { label: "Partitiivi", form: "sormea" },
          { label: "Genetiivi", form: "sormen" },
          { label: "Inessiivi", form: "sormessa" },
          { label: "Elatiivi", form: "sormesta" },
          { label: "Illatiivi", form: "sormeen" },
          { label: "Adessiivi", form: "sormella" },
          { label: "Ablatiivi", form: "sormelta" },
          { label: "Allatiivi", form: "sormelle" },
          { label: "Essiivi", form: "sormena" },
          { label: "Translatiivi", form: "sormeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sormet" },
          { label: "Partitiivi", form: "sormia" },
          { label: "Genetiivi", form: "sormien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sormus",
      en: "ring",
      taso: "B1",
      esim: { fi: "Hän kantaa kultaista sormusta.", en: "She wears a golden ring." },
    },
    {
      fi: "sormenjälki",
      en: "fingerprint",
      taso: "B2",
      esim: { fi: "Poliisi löysi sormenjäljen.", en: "The police found a fingerprint." },
    },
    {
      fi: "etusormi",
      en: "index finger",
      taso: "B1",
      esim: { fi: "Osoitin etusormella karttaa.", en: "I pointed at the map with my index finger." },
    },
  ],
  synonyymit: [
    { fi: "peukalo", en: "thumb" },
    { fi: "varvas", en: "toe" },
  ],
  esimerkit: {
    A2: { fi: "Satutin sormeni.", en: "I hurt my finger." },
    B1: { fi: "Hän laski sormilla kymmeneen.", en: "He counted to ten on his fingers." },
    B2: {
      fi: "Pianisti liikutti sormiaan uskomattoman nopeasti.",
      en: "The pianist moved his fingers incredibly fast.",
    },
  },
  updatedAt: "2026-06-06",
};

export default sormi;
