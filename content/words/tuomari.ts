import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 6/paperi, no gradation, stem tuomari-.
// Genitive tuomarin, partitive tuomaria, partitive pl tuomareita.
const tuomari: Word = {
  fi: "tuomari",
  slug: "tuomari",
  pos: "substantiivi (tyyppi 6/paperi)",
  posClass: "substantiivi",
  level: "B1",
  en: "judge; referee, umpire",
  selitys:
    "1) Oikeudessa tuomioita antava henkilö. 2) Urheilussa ottelua valvova erotuomari. Tyyppi 6/paperi, ei astevaihtelua; partitiivin monikko tuomareita. Sanasta tuomita. Vrt. tuomita, tuomio, erotuomari.",
  kuva: { alt: "tuomari – oikeudessa tuomioita antava tai urheilussa ottelua valvova henkilö" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 6/paperi; ei astevaihtelua (vartalo tuomari-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tuomarin", merkitys: "of the judge" },
      { sija: "partitiivi (yks.)", muoto: "tuomaria", merkitys: "judge (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tuomareita", merkitys: "judges (partitive pl.)" },
    ],
    huom:
      "Tyyppi 6/paperi (-ri): partitiivin monikko -eita (tuomareita), genetiivin monikko -eiden (tuomareiden). Urheilussa erotuomari = referee. Vrt. tuomita, tuomio.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tuomari" },
          { label: "Partitiivi", form: "tuomaria" },
          { label: "Genetiivi", form: "tuomarin" },
          { label: "Inessiivi", form: "tuomarissa" },
          { label: "Elatiivi", form: "tuomarista" },
          { label: "Illatiivi", form: "tuomariin" },
          { label: "Adessiivi", form: "tuomarilla" },
          { label: "Ablatiivi", form: "tuomarilta" },
          { label: "Allatiivi", form: "tuomarille" },
          { label: "Essiivi", form: "tuomarina" },
          { label: "Translatiivi", form: "tuomariksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tuomarit" },
          { label: "Partitiivi", form: "tuomareita" },
          { label: "Genetiivi", form: "tuomareiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "erotuomari",
      en: "referee",
      taso: "B1",
      esim: { fi: "Erotuomari vihelsi rangaistuksen.", en: "The referee whistled for a penalty." },
    },
    {
      fi: "käräjätuomari",
      en: "district court judge",
      taso: "B2",
      esim: { fi: "Käräjätuomari luki tuomion.", en: "The district judge read the verdict." },
    },
  ],
  synonyymit: [
    { fi: "erotuomari", en: "referee" },
  ],
  esimerkit: {
    A2: { fi: "Tuomari teki päätöksen.", en: "The judge made the decision." },
    B1: { fi: "Tuomari kuunteli molempia osapuolia.", en: "The judge listened to both parties." },
    B2: {
      fi: "Tuomarin on oltava puolueeton ja arvioitava vain esitetyt todisteet.",
      en: "A judge must be impartial and assess only the evidence presented.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tuomari;
