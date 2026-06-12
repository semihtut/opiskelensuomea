import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 56/kaivaa (type 1), no gradation,
// stem kasva-. Present kasvan, past kasvoin, past participle kasvanut.
const kasvaa: Word = {
  fi: "kasvaa",
  slug: "kasvaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to grow",
  selitys:
    "Tulla suuremmaksi tai vanhemmaksi; lisääntyä. Tyyppi 1, ei astevaihtelua: kasvaa → kasvan (imperfekti kasvoin). Vrt. kasvattaa (kasvattaa jotakin).",
  kuva: { alt: "kasvaa – kasvi tai määrä kasvaa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); ei astevaihtelua; imperfekti a → o (kasvoin)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kasvan", merkitys: "I grow" },
      { sija: "imperfekti (minä)", muoto: "kasvoin", merkitys: "I grew" },
      { sija: "NUT-partisiippi", muoto: "kasvanut", merkitys: "(have) grown" },
    ],
    huom:
      "Kaksitavuisen verbin imperfektissä a → o: kasvoin, kasvoi. Kasvaa = tulla suuremmaksi (lapsi, kasvi, määrä). Vrt. transitiivinen kasvattaa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kasvan" },
          { label: "sinä", form: "kasvat" },
          { label: "hän", form: "kasvaa" },
          { label: "me", form: "kasvamme" },
          { label: "te", form: "kasvatte" },
          { label: "he", form: "kasvavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kasva" },
          { label: "hän", form: "ei kasva" },
          { label: "he", form: "eivät kasva" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kasvoin" },
          { label: "sinä", form: "kasvoit" },
          { label: "hän", form: "kasvoi" },
          { label: "me", form: "kasvoimme" },
          { label: "te", form: "kasvoitte" },
          { label: "he", form: "kasvoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kasvanut" },
          { label: "hän", form: "on kasvanut" },
          { label: "he", form: "ovat kasvaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kasva!" },
          { label: "te", form: "kasvakaa!" },
          { label: "kielto (sinä)", form: "älä kasva" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kasvi",
      en: "plant",
      taso: "A2",
      esim: { fi: "Ikkunalla on monta kasvia.", en: "There are many plants on the windowsill." },
    },
    {
      fi: "kasvattaa",
      en: "to grow (something), raise",
      taso: "B1",
      esim: { fi: "He kasvattavat vihanneksia.", en: "They grow vegetables." },
    },
    {
      fi: "kasvu",
      en: "growth",
      taso: "B1",
      esim: { fi: "Talouden kasvu hidastui.", en: "Economic growth slowed down." },
    },
  ],
  synonyymit: [
    { fi: "lisääntyä", en: "to increase" },
    { fi: "suureta", en: "to get bigger" },
  ],
  esimerkit: {
    A2: { fi: "Lapset kasvavat nopeasti.", en: "Children grow quickly." },
    B1: { fi: "Kasvoin pienessä kylässä.", en: "I grew up in a small village." },
    B2: {
      fi: "Kaupunki on kasvanut niin paljon, etten enää tunnista vanhaa kotikatuani.",
      en: "The city has grown so much that I no longer recognise my old home street.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kasvaa;
