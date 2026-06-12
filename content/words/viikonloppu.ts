import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo with pp:p gradation. Compound of
// viikon (gen. of viikko) + loppu. Strong pp in open syllables (viikonloppua,
// viikonloppuun), weak p in closed (viikonlopun, viikonlopulla).
const viikonloppu: Word = {
  fi: "viikonloppu",
  slug: "viikonloppu",
  pos: "substantiivi (tyyppi: valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "weekend",
  selitys:
    "Viikon loppu, lauantai ja sunnuntai. Yhdyssana: viikon + loppu. Astevaihtelu pp:p (viikonloppu → viikonlopun).",
  kuva: { alt: "viikonloppu – vapaapäivien juhla" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu pp:p (viikonloppu → viikonlopun)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "viikonloppua", merkitys: "weekend (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "viikonlopun", merkitys: "of the weekend" },
      { sija: "essiivi (yks.)", muoto: "viikonloppuna", merkitys: "on the weekend" },
    ],
    huom:
      "Vahva pp avotavussa (viikonloppua, viikonloppuun), heikko p umpitavussa (viikonlopun). 'Viikonloppuna' / 'tänä viikonloppuna' = on the/this weekend.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "viikonloppu" },
          { label: "Partitiivi", form: "viikonloppua" },
          { label: "Genetiivi", form: "viikonlopun" },
          { label: "Inessiivi", form: "viikonlopussa" },
          { label: "Elatiivi", form: "viikonlopusta" },
          { label: "Illatiivi", form: "viikonloppuun" },
          { label: "Adessiivi", form: "viikonlopulla" },
          { label: "Ablatiivi", form: "viikonlopulta" },
          { label: "Allatiivi", form: "viikonlopulle" },
          { label: "Essiivi", form: "viikonloppuna" },
          { label: "Translatiivi", form: "viikonlopuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "viikonloput" },
          { label: "Partitiivi", form: "viikonloppuja" },
          { label: "Genetiivi", form: "viikonloppujen" },
          { label: "Illatiivi", form: "viikonloppuihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "viikonloppuisin",
      en: "on weekends",
      taso: "B1",
      esim: { fi: "Viikonloppuisin nukun pidempään.", en: "On weekends I sleep longer." },
    },
    {
      fi: "pitkäviikonloppu",
      en: "long weekend",
      taso: "B2",
      esim: { fi: "Saamme pitkän viikonlopun juhlapyhän takia.", en: "We get a long weekend because of the holiday." },
    },
    {
      fi: "viikonloppumatka",
      en: "weekend trip",
      taso: "B1",
      esim: { fi: "Teimme viikonloppumatkan Tallinnaan.", en: "We took a weekend trip to Tallinn." },
    },
  ],
  synonyymit: [
    { fi: "vapaapäivät", en: "days off" },
    { fi: "viikonvaihde", en: "the turn of the week (weekend)" },
  ],
  esimerkit: {
    A2: { fi: "Mitä teet tänä viikonloppuna?", en: "What are you doing this weekend?" },
    B1: { fi: "Vietimme viikonlopun mökillä.", en: "We spent the weekend at the cottage." },
    B2: {
      fi: "Rentouttava viikonloppu antoi uutta energiaa työviikkoon.",
      en: "A relaxing weekend gave new energy for the working week.",
    },
  },
  updatedAt: "2026-06-04",
};

export default viikonloppu;
