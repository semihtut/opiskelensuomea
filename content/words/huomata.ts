import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata (type 4), no gradation, stem huomaa-.
// Present huomaan, past huomasin, past participle huomannut.
const huomata: Word = {
  fi: "huomata",
  slug: "huomata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to notice, to realize",
  selitys:
    "Havaita tai tajuta jokin: 'Huomasin virheen' (I noticed the mistake). Tyyppi 4 (-ata): huomata → huomaan. Vrt. nähdä (see), tajuta (realize).",
  kuva: { emoji: "👀", alt: "huomata – havaita, tajuta jokin" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata); ei astevaihtelua; vartalo huomaa-",
    muodot: [
      { sija: "preesens (minä)", muoto: "huomaan", merkitys: "I notice" },
      { sija: "imperfekti (minä)", muoto: "huomasin", merkitys: "I noticed" },
      { sija: "NUT-partisiippi", muoto: "huomannut", merkitys: "(have) noticed" },
    ],
    huom:
      "Tyypin 4 imperfektissä -si: huomasin, huomasit, huomasi. Usein 'että'-lauseen kanssa: 'Huomasin, että ovi oli auki.' Vrt. huomio = attention, huomenna = tomorrow (eri sana!).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "huomaan" },
          { label: "sinä", form: "huomaat" },
          { label: "hän", form: "huomaa" },
          { label: "me", form: "huomaamme" },
          { label: "te", form: "huomaatte" },
          { label: "he", form: "huomaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en huomaa" },
          { label: "hän", form: "ei huomaa" },
          { label: "he", form: "eivät huomaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "huomasin" },
          { label: "sinä", form: "huomasit" },
          { label: "hän", form: "huomasi" },
          { label: "me", form: "huomasimme" },
          { label: "te", form: "huomasitte" },
          { label: "he", form: "huomasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen huomannut" },
          { label: "hän", form: "on huomannut" },
          { label: "he", form: "ovat huomanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "huomaa!" },
          { label: "te", form: "huomatkaa!" },
          { label: "kielto (sinä)", form: "älä huomaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "huomio",
      en: "attention; observation",
      taso: "B1",
      esim: { fi: "Kiinnitä huomiota yksityiskohtiin.", en: "Pay attention to the details." },
    },
    {
      fi: "huomaavainen",
      en: "considerate, attentive",
      taso: "B2",
      esim: { fi: "Hän on aina huomaavainen muita kohtaan.", en: "She is always considerate toward others." },
    },
    {
      fi: "huomautus",
      en: "remark, note",
      taso: "B2",
      esim: { fi: "Sain pienen huomautuksen.", en: "I got a small remark." },
    },
  ],
  synonyymit: [
    { fi: "havaita", en: "to perceive, detect" },
    { fi: "tajuta", en: "to realize" },
  ],
  esimerkit: {
    A2: { fi: "Huomasin, että sataa.", en: "I noticed that it's raining." },
    B1: { fi: "Etkö huomannut uutta kampaustani?", en: "Didn't you notice my new haircut?" },
    B2: {
      fi: "Vasta myöhemmin huomasin, kuinka väsynyt todella olin.",
      en: "Only later did I notice how tired I really was.",
    },
  },
  updatedAt: "2026-06-06",
};

export default huomata;
