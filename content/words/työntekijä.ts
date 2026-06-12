import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation, stem työntekijä-.
// Genitive työntekijän, partitive työntekijää, illative työntekijään, partitive pl työntekijöitä.
const tyontekija: Word = {
  fi: "työntekijä",
  slug: "työntekijä",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "B1",
  en: "employee, worker",
  selitys:
    "Henkilö, joka tekee palkkatyötä: 'uusi työntekijä'. Tyyppi 12, ei astevaihtelua. Yhdyssana työ + tekijä. Vastakohta työnantaja. Vrt. tehdä (to do).",
  kuva: { alt: "työntekijä – palkkatyötä tekevä henkilö" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "työntekijän", merkitys: "of the employee" },
      { sija: "partitiivi (yks.)", muoto: "työntekijää", merkitys: "employee (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "työntekijöitä", merkitys: "employees (partitive pl.)" },
    ],
    huom:
      "Monikon vartalo työntekijöi-: työntekijöitä, työntekijöissä. Vastakohta työnantaja = employer. Vrt. työ = work, tekijä = doer, tehdä = to do.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "työntekijä" },
          { label: "Partitiivi", form: "työntekijää" },
          { label: "Genetiivi", form: "työntekijän" },
          { label: "Inessiivi", form: "työntekijässä" },
          { label: "Elatiivi", form: "työntekijästä" },
          { label: "Illatiivi", form: "työntekijään" },
          { label: "Adessiivi", form: "työntekijällä" },
          { label: "Ablatiivi", form: "työntekijältä" },
          { label: "Allatiivi", form: "työntekijälle" },
          { label: "Essiivi", form: "työntekijänä" },
          { label: "Translatiivi", form: "työntekijäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "työntekijät" },
          { label: "Partitiivi", form: "työntekijöitä" },
          { label: "Genetiivi", form: "työntekijöiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työnantaja",
      en: "employer",
      taso: "B1",
      esim: { fi: "Työnantaja maksaa palkan.", en: "The employer pays the salary." },
    },
    {
      fi: "työpaikka",
      en: "workplace, job",
      taso: "A2",
      esim: { fi: "Sain uuden työpaikan.", en: "I got a new job." },
    },
    {
      fi: "työtön",
      en: "unemployed",
      taso: "B1",
      esim: { fi: "Hän on tällä hetkellä työtön.", en: "He is currently unemployed." },
    },
  ],
  synonyymit: [
    { fi: "palkansaaja", en: "wage earner" },
    { fi: "duunari", en: "worker (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Yrityksessä on kymmenen työntekijää.", en: "The company has ten employees." },
    B1: { fi: "Uudet työntekijät saavat koulutuksen.", en: "New employees receive training." },
    B2: {
      fi: "Tyytyväiset työntekijät ovat yrityksen tärkein voimavara.",
      en: "Satisfied employees are a company's most important asset.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tyontekija;
