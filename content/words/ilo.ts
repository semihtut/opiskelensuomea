import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem ilo-.
// Genitive ilon, partitive iloa, illative iloon, partitive pl iloja.
const ilo: Word = {
  fi: "ilo",
  slug: "ilo",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "joy, gladness, delight",
  selitys:
    "Lyhyt, kirkas hyvän mielen tunne: 'tuoda iloa'. Tyyppi 1, vartalo ilo-, ei astevaihtelua. Vrt. iloinen (happy), onni (deeper happiness).",
  kuva: { emoji: "😄", alt: "ilo – kirkas hyvän mielen tunne" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo ilo-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ilon", merkitys: "of joy" },
      { sija: "partitiivi (yks.)", muoto: "iloa", merkitys: "joy (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "iloja", merkitys: "joys (partitive pl.)" },
    ],
    huom:
      "Helppo tyypin 1 sana: ilo → ilon, iloa, iloon. 'Ilokseni' = to my delight. Vrt. iloita = to rejoice, ilonpito = merrymaking.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ilo" },
          { label: "Partitiivi", form: "iloa" },
          { label: "Genetiivi", form: "ilon" },
          { label: "Inessiivi", form: "ilossa" },
          { label: "Elatiivi", form: "ilosta" },
          { label: "Illatiivi", form: "iloon" },
          { label: "Adessiivi", form: "ilolla" },
          { label: "Ablatiivi", form: "ilolta" },
          { label: "Allatiivi", form: "ilolle" },
          { label: "Essiivi", form: "ilona" },
          { label: "Translatiivi", form: "iloksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ilot" },
          { label: "Partitiivi", form: "iloja" },
          { label: "Genetiivi", form: "ilojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "iloinen",
      en: "happy, glad",
      taso: "A1",
      esim: { fi: "Hän on aina iloinen.", en: "She is always happy." },
    },
    {
      fi: "iloita",
      en: "to rejoice",
      taso: "B2",
      esim: { fi: "Iloitsemme yhdessä.", en: "We rejoice together." },
    },
    {
      fi: "ilonaihe",
      en: "cause for joy",
      taso: "B2",
      esim: { fi: "Lapsen syntymä on suuri ilonaihe.", en: "A child's birth is a great cause for joy." },
    },
  ],
  synonyymit: [
    { fi: "riemu", en: "delight, glee" },
    { fi: "mielihyvä", en: "pleasure" },
  ],
  esimerkit: {
    A2: { fi: "Tunnen suurta iloa.", en: "I feel great joy." },
    B1: { fi: "Lapset toivat iloa koko taloon.", en: "The children brought joy to the whole house." },
    B2: {
      fi: "Pienistä asioista löytyy usein suurin ilo.",
      en: "The greatest joy is often found in small things.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ilo;
