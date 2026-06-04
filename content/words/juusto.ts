import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation. Partitive sg
// juustoa, partitive pl juustoja, genitive pl juustojen.
const juusto: Word = {
  fi: "juusto",
  slug: "juusto",
  pos: "substantiivi (tyyppi: valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "cheese",
  selitys: "Maidosta valmistettu ruoka. Ei astevaihtelua.",
  kuva: { emoji: "🧀", alt: "juusto – pala juustoa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "juustoa", merkitys: "cheese (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "juuston", merkitys: "of the cheese" },
      { sija: "partitiivi (mon.)", muoto: "juustoja", merkitys: "cheeses (partitive pl.)" },
    ],
    huom: "Monikon partitiivi juustoja tarkoittaa eri juustolaatuja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "juusto" },
          { label: "Partitiivi", form: "juustoa" },
          { label: "Genetiivi", form: "juuston" },
          { label: "Inessiivi", form: "juustossa" },
          { label: "Elatiivi", form: "juustosta" },
          { label: "Illatiivi", form: "juustoon" },
          { label: "Adessiivi", form: "juustolla" },
          { label: "Ablatiivi", form: "juustolta" },
          { label: "Allatiivi", form: "juustolle" },
          { label: "Essiivi", form: "juustona" },
          { label: "Translatiivi", form: "juustoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "juustot" },
          { label: "Partitiivi", form: "juustoja" },
          { label: "Genetiivi", form: "juustojen" },
          { label: "Illatiivi", form: "juustoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "juustokakku",
      en: "cheesecake",
      taso: "B1",
      esim: { fi: "Jälkiruoaksi oli juustokakkua.", en: "There was cheesecake for dessert." },
    },
    {
      fi: "sulajuusto",
      en: "processed cheese",
      taso: "B2",
      esim: { fi: "Levitän sulajuustoa leivälle.", en: "I spread processed cheese on the bread." },
    },
    {
      fi: "juustohöylä",
      en: "cheese slicer",
      taso: "B2",
      esim: { fi: "Juustohöylä on suomalainen keksintö.", en: "The cheese slicer is a Finnish invention." },
    },
  ],
  synonyymit: [
    { fi: "tuorejuusto", en: "fresh/cream cheese" },
    { fi: "leipäjuusto", en: "Finnish squeaky cheese" },
  ],
  esimerkit: {
    A2: { fi: "Laitan juustoa leivän päälle.", en: "I put cheese on the bread." },
    B1: { fi: "Tämä juusto on todella vahvaa.", en: "This cheese is really strong." },
    B2: {
      fi: "Suomalainen leipäjuusto tarjoillaan usein lakkahillon kanssa.",
      en: "Finnish squeaky cheese is often served with cloudberry jam.",
    },
  },
  updatedAt: "2026-06-04",
};

export default juusto;
