import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem ujo-.
// Genitive ujon, partitive ujoa, partitive pl ujoja. Comparative ujompi, superlative ujoin.
const ujo: Word = {
  fi: "ujo",
  slug: "ujo",
  pos: "adjektiivi (tyyppi 1/valo)",
  posClass: "adjektiivi",
  level: "A2",
  en: "shy, timid",
  selitys:
    "Arka ja vähäpuheinen muiden seurassa: 'ujo lapsi'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko ujoja. Vertailu ujompi – ujoin. Vastakohta rohkea / ulospäinsuuntautunut.",
  kuva: { alt: "ujo – arka ja vähäpuheinen muiden seurassa" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ujon", merkitys: "of the shy (one)" },
      { sija: "partitiivi (yks.)", muoto: "ujoa", merkitys: "shy (partitive)" },
      { sija: "komparatiivi", muoto: "ujompi", merkitys: "shyer" },
    ],
    huom:
      "Partitiivin monikko ujoja. Vertailu ujompi – ujoin. 'Olla ujo jonkun seurassa'. Vrt. ujous = shyness, ujostella = to be shy/bashful. Vastakohta rohkea.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ujo" },
          { label: "Partitiivi", form: "ujoa" },
          { label: "Genetiivi", form: "ujon" },
          { label: "Inessiivi", form: "ujossa" },
          { label: "Elatiivi", form: "ujosta" },
          { label: "Illatiivi", form: "ujoon" },
          { label: "Adessiivi", form: "ujolla" },
          { label: "Ablatiivi", form: "ujolta" },
          { label: "Allatiivi", form: "ujolle" },
          { label: "Essiivi", form: "ujona" },
          { label: "Translatiivi", form: "ujoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ujot" },
          { label: "Partitiivi", form: "ujoja" },
          { label: "Genetiivi", form: "ujojen" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusaste", form: "ujo" },
          { label: "Komparatiivi", form: "ujompi" },
          { label: "Superlatiivi", form: "ujoin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ujous",
      en: "shyness",
      taso: "B2",
      esim: { fi: "Hän voitti ujoutensa.", en: "He overcame his shyness." },
    },
    {
      fi: "ujostella",
      en: "to be shy, act bashfully",
      taso: "B2",
      esim: { fi: "Älä ujostele, tule mukaan!", en: "Don't be shy, come along!" },
    },
    {
      fi: "ujosti",
      en: "shyly",
      taso: "B1",
      esim: { fi: "Hän hymyili ujosti.", en: "She smiled shyly." },
    },
  ],
  synonyymit: [
    { fi: "arka", en: "timid, fearful" },
    { fi: "kaino", en: "bashful, modest" },
  ],
  esimerkit: {
    A2: { fi: "Olen vähän ujo uusien ihmisten seurassa.", en: "I'm a bit shy around new people." },
    B1: { fi: "Ujo oppilas ei uskaltanut vastata.", en: "The shy pupil didn't dare to answer." },
    B2: {
      fi: "Vaikka hän vaikuttaa ujolta, hän on lavalla aivan eri ihminen.",
      en: "Although he seems shy, on stage he is a completely different person.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ujo;
