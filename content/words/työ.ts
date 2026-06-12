import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 19/suo, no gradation. Genitive työn,
// partitive työtä, illative työhön, partitive pl töitä. Locational cases usually
// in the plural: töissä (at work), töihin (to work), töistä (from work).
const tyo: Word = {
  fi: "työ",
  slug: "työ",
  pos: "substantiivi (tyyppi 19/suo)",
  posClass: "substantiivi",
  level: "A1",
  en: "work, job",
  selitys:
    "Toiminta, josta yleensä saa palkkaa; myös tehtävä tai teos. Tyyppi 19, ei astevaihtelua. Paikallissijat usein monikossa: töissä, töihin.",
  kuva: { alt: "työ – salkku ja työnteko" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 19/suo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "työn", merkitys: "of the work" },
      { sija: "partitiivi (yks.)", muoto: "työtä", merkitys: "work (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "töitä", merkitys: "works/jobs (partitive pl.)" },
    ],
    huom:
      "'At work / to work / from work' ilmaistaan monikon paikallissijoilla: töissä, töihin, töistä. Monikkovartalo tö- (töitä, töiden).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "työ" },
          { label: "Partitiivi", form: "työtä" },
          { label: "Genetiivi", form: "työn" },
          { label: "Inessiivi", form: "työssä" },
          { label: "Elatiivi", form: "työstä" },
          { label: "Illatiivi", form: "työhön" },
          { label: "Adessiivi", form: "työllä" },
          { label: "Ablatiivi", form: "työltä" },
          { label: "Allatiivi", form: "työlle" },
          { label: "Essiivi", form: "työnä" },
          { label: "Translatiivi", form: "työksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "työt" },
          { label: "Partitiivi", form: "töitä" },
          { label: "Genetiivi", form: "töiden" },
          { label: "Inessiivi", form: "töissä" },
          { label: "Illatiivi", form: "töihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työntekijä",
      en: "employee, worker",
      taso: "A2",
      esim: { fi: "Yrityksessä on sata työntekijää.", en: "The company has a hundred employees." },
    },
    {
      fi: "työpaikka",
      en: "workplace, job",
      taso: "A2",
      esim: { fi: "Hän sai uuden työpaikan.", en: "She got a new job." },
    },
    {
      fi: "työtön",
      en: "unemployed",
      taso: "B1",
      esim: { fi: "Hän oli vuoden työtön.", en: "He was unemployed for a year." },
    },
  ],
  synonyymit: [
    { fi: "homma", en: "job, task (colloquial)" },
    { fi: "duuni", en: "work, gig (slang)" },
  ],
  esimerkit: {
    A2: { fi: "Menen töihin kello kahdeksan.", en: "I go to work at eight." },
    B1: { fi: "Tämä työ on raskasta mutta palkitsevaa.", en: "This work is hard but rewarding." },
    B2: {
      fi: "Olen ollut töissä samassa firmassa kymmenen vuotta.",
      en: "I have worked at the same firm for ten years.",
    },
  },
  updatedAt: "2026-06-04",
};

export default tyo;
