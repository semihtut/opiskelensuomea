import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem seuraukse-.
// Genitive seurauksen, partitive seurausta, partitive pl seurauksia.
const seuraus: Word = {
  fi: "seuraus",
  slug: "seuraus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "consequence, result",
  selitys:
    "Se, mitä jostakin toiminnasta tai tapahtumasta seuraa: 'tekojen seuraukset'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä seurata. 'Olla seurausta jostakin' = to be a result of sth.",
  kuva: { alt: "seuraus – se, mitä jostakin seuraa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo seuraukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "seurauksen", merkitys: "of the consequence" },
      { sija: "partitiivi (yks.)", muoto: "seurausta", merkitys: "consequence (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "seurauksia", merkitys: "consequences (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Ei astevaihtelua. Johdettu verbistä seurata. 'Seurauksena' = as a consequence; 'olla seurausta jostakin' = to result from sth.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "seuraus" },
          { label: "Partitiivi", form: "seurausta" },
          { label: "Genetiivi", form: "seurauksen" },
          { label: "Inessiivi", form: "seurauksessa" },
          { label: "Elatiivi", form: "seurauksesta" },
          { label: "Illatiivi", form: "seuraukseen" },
          { label: "Adessiivi", form: "seurauksella" },
          { label: "Ablatiivi", form: "seuraukselta" },
          { label: "Allatiivi", form: "seuraukselle" },
          { label: "Essiivi", form: "seurauksena" },
          { label: "Translatiivi", form: "seuraukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "seuraukset" },
          { label: "Partitiivi", form: "seurauksia" },
          { label: "Genetiivi", form: "seurauksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "seurata",
      en: "to follow; to result",
      taso: "B1",
      esim: { fi: "Tästä seuraa ongelmia.", en: "Problems result from this." },
    },
    {
      fi: "seurauksellinen",
      en: "consequential",
      taso: "B2",
      esim: { fi: "Päätös oli seurauksiltaan vakava.", en: "The decision was serious in its consequences." },
    },
  ],
  synonyymit: [
    { fi: "vaikutus", en: "effect, impact" },
    { fi: "tulos", en: "result, outcome" },
  ],
  esimerkit: {
    A2: { fi: "Joka teolla on seuraus.", en: "Every act has a consequence." },
    B1: { fi: "Myöhästyminen oli huolimattomuuden seuraus.", en: "Being late was a result of carelessness." },
    B2: {
      fi: "Päätöksen seurauksia ei mietitty tarpeeksi etukäteen.",
      en: "The consequences of the decision weren't considered enough in advance.",
    },
  },
  updatedAt: "2026-06-07",
};

export default seuraus;
