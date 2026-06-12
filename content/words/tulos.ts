import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem tulokse-.
// Genitive tuloksen, partitive tulosta, partitive pl tuloksia.
const tulos: Word = {
  fi: "tulos",
  slug: "tulos",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "result, outcome, score",
  selitys:
    "Se, mihin jokin johtaa tai mitä saadaan aikaan: 'kokeen tulos'. Tyyppi 39/vastaus, ei astevaihtelua (-os → -okse-). Johdettu verbistä tulla. Vrt. tulla, lopputulos, seuraus.",
  kuva: { alt: "tulos – se mihin jokin johtaa tai mitä saadaan aikaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo tulokse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tuloksen", merkitys: "of the result" },
      { sija: "partitiivi (yks.)", muoto: "tulosta", merkitys: "result (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tuloksia", merkitys: "results (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-os): genetiivi -okse-n, partitiivi -os-ta, partitiivin monikko -oksia. Johdettu verbistä tulla. Merkitykset: kokeen tulos, ottelun tulos (score), yrityksen tulos (profit). Vrt. lopputulos.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tulos" },
          { label: "Partitiivi", form: "tulosta" },
          { label: "Genetiivi", form: "tuloksen" },
          { label: "Inessiivi", form: "tuloksessa" },
          { label: "Elatiivi", form: "tuloksesta" },
          { label: "Illatiivi", form: "tulokseen" },
          { label: "Adessiivi", form: "tuloksella" },
          { label: "Ablatiivi", form: "tulokselta" },
          { label: "Allatiivi", form: "tulokselle" },
          { label: "Essiivi", form: "tuloksena" },
          { label: "Translatiivi", form: "tulokseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tulokset" },
          { label: "Partitiivi", form: "tuloksia" },
          { label: "Genetiivi", form: "tuloksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lopputulos",
      en: "final result, outcome",
      taso: "B2",
      esim: { fi: "Lopputulos oli odotettu.", en: "The final result was expected." },
    },
    {
      fi: "tuloksellinen",
      en: "productive, effective",
      taso: "B2",
      esim: { fi: "Yhteistyö oli tuloksellista.", en: "The cooperation was productive." },
    },
  ],
  synonyymit: [
    { fi: "lopputulos", en: "outcome" },
    { fi: "seuraus", en: "consequence" },
  ],
  esimerkit: {
    A2: { fi: "Sain hyvän tuloksen kokeesta.", en: "I got a good result on the test." },
    B1: { fi: "Ottelun tulos oli tasapeli.", en: "The result of the match was a draw." },
    B2: {
      fi: "Tutkimuksen tulokset olivat merkittäviä, vaikka otos oli pieni.",
      en: "The study's results were significant, although the sample was small.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tulos;
