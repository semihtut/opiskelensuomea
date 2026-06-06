import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation, stem onne-.
// Genitive onnen, partitive onnea, illative onneen, partitive pl onnia.
const onni: Word = {
  fi: "onni",
  slug: "onni",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "A2",
  en: "happiness; luck, fortune",
  selitys:
    "Syvä hyvän olon tunne tai hyvä sattuma: 'elämän onni' / 'hyvää onnea!'. Tyyppi 7, vartalo onne-, ei astevaihtelua. Vrt. onnellinen (happy), onnistua (to succeed).",
  kuva: { emoji: "🍀", alt: "onni – hyvän olon tunne tai hyvä sattuma" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua (vartalo onne-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "onnen", merkitys: "of happiness" },
      { sija: "partitiivi (yks.)", muoto: "onnea", merkitys: "happiness (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "onnia", merkitys: "fortunes (partitive pl.)" },
    ],
    huom:
      "Loppu-i → vartalo -e-: onni → onnen, onnea. 'Hyvää onnea!' = Good luck! Vrt. onneksi = luckily, onneton = unhappy/unlucky.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "onni" },
          { label: "Partitiivi", form: "onnea" },
          { label: "Genetiivi", form: "onnen" },
          { label: "Inessiivi", form: "onnessa" },
          { label: "Elatiivi", form: "onnesta" },
          { label: "Illatiivi", form: "onneen" },
          { label: "Adessiivi", form: "onnella" },
          { label: "Ablatiivi", form: "onnelta" },
          { label: "Allatiivi", form: "onnelle" },
          { label: "Essiivi", form: "onnena" },
          { label: "Translatiivi", form: "onneksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "onnet" },
          { label: "Partitiivi", form: "onnia" },
          { label: "Genetiivi", form: "onnien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "onnellinen",
      en: "happy, content",
      taso: "A2",
      esim: { fi: "Olen onnellinen perheeni kanssa.", en: "I am happy with my family." },
    },
    {
      fi: "onnistua",
      en: "to succeed",
      taso: "B1",
      esim: { fi: "Onnistuin kokeessa.", en: "I succeeded in the exam." },
    },
    {
      fi: "onneksi",
      en: "luckily, fortunately",
      taso: "A2",
      esim: { fi: "Onneksi ehdin junaan.", en: "Luckily I made the train." },
    },
  ],
  synonyymit: [
    { fi: "tuuri", en: "luck (colloquial)" },
    { fi: "menestys", en: "success" },
  ],
  esimerkit: {
    A2: { fi: "Toivotan sinulle onnea!", en: "I wish you luck!" },
    B1: { fi: "Raha ei tuo onnea.", en: "Money doesn't bring happiness." },
    B2: {
      fi: "Onni ei ole päämäärä vaan tapa matkustaa.",
      en: "Happiness is not a destination but a way of traveling.",
    },
  },
  updatedAt: "2026-06-06",
};

export default onni;
