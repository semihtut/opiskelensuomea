import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem ongelma-.
// Genitive ongelman, partitive ongelmaa, illative ongelmaan, partitive pl ongelmia.
const ongelma: Word = {
  fi: "ongelma",
  slug: "ongelma",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "problem, issue",
  selitys:
    "Vaikea tilanne, joka pitää ratkaista: 'iso ongelma'. Tyyppi 10, ei astevaihtelua. Vrt. ratkaista (to solve), ratkaisu (solution). 'Ei ongelmaa!' = No problem!",
  kuva: { alt: "ongelma – vaikea ratkaistava tilanne" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ongelman", merkitys: "of the problem" },
      { sija: "partitiivi (yks.)", muoto: "ongelmaa", merkitys: "problem (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ongelmia", merkitys: "problems (partitive pl.)" },
    ],
    huom:
      "Helppo tyypin 10 sana: ongelma → ongelman, ongelmaa, ongelmia. 'Ratkaista ongelma' = to solve a problem. Vrt. ongelmallinen = problematic, pulma = puzzle.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ongelma" },
          { label: "Partitiivi", form: "ongelmaa" },
          { label: "Genetiivi", form: "ongelman" },
          { label: "Inessiivi", form: "ongelmassa" },
          { label: "Elatiivi", form: "ongelmasta" },
          { label: "Illatiivi", form: "ongelmaan" },
          { label: "Adessiivi", form: "ongelmalla" },
          { label: "Ablatiivi", form: "ongelmalta" },
          { label: "Allatiivi", form: "ongelmalle" },
          { label: "Essiivi", form: "ongelmana" },
          { label: "Translatiivi", form: "ongelmaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ongelmat" },
          { label: "Partitiivi", form: "ongelmia" },
          { label: "Genetiivi", form: "ongelmien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ongelmallinen",
      en: "problematic",
      taso: "B2",
      esim: { fi: "Tilanne on hieman ongelmallinen.", en: "The situation is a bit problematic." },
    },
    {
      fi: "ongelmaton",
      en: "trouble-free, unproblematic",
      taso: "B2",
      esim: { fi: "Matka sujui ongelmattomasti.", en: "The trip went off without a hitch." },
    },
    {
      fi: "ratkaisu",
      en: "solution",
      taso: "B1",
      esim: { fi: "Löysimme hyvän ratkaisun.", en: "We found a good solution." },
    },
  ],
  synonyymit: [
    { fi: "pulma", en: "puzzle, predicament" },
    { fi: "vaikeus", en: "difficulty" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on pieni ongelma.", en: "I have a small problem." },
    B1: { fi: "Ratkaisimme ongelman yhdessä.", en: "We solved the problem together." },
    B2: {
      fi: "Ongelma ei ole tekniikassa vaan siinä, miten sitä käytetään.",
      en: "The problem is not in the technology but in how it is used.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ongelma;
