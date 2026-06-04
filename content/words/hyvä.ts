import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: SUPPLETIVE comparison hyvä → parempi → paras
// (NOT *hyvempi). Superlative paras: gen parhaan, part parasta, pl parhaat.
const hyvä: Word = {
  fi: "hyvä",
  slug: "hyvä",
  pos: "adjektiivi",
  posClass: "adjektiivi",
  level: "A1",
  en: "good",
  selitys:
    "Myönteistä laatua ilmaiseva adjektiivi. Vertailu on epäsäännöllinen (suppletiivinen): hyvä – parempi – paras.",
  kielioppi: {
    tyyppi: "adjektiivi; suppletiivinen vertailu hyvä – parempi – paras",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "hyvää", merkitys: "good (partitive)" },
      { sija: "komparatiivi", muoto: "parempi", merkitys: "better" },
      { sija: "superlatiivi", muoto: "paras", merkitys: "best" },
    ],
    huom:
      "Vertailu on epäsäännöllinen: EI *hyvempi vaan parempi, paras. Komparatiivin partitiivi parempaa, superlatiivin parasta; superlatiivin genetiivi parhaan.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "hyvä" },
          { label: "Partitiivi", form: "hyvää" },
          { label: "Genetiivi", form: "hyvän" },
          { label: "Inessiivi", form: "hyvässä" },
          { label: "Illatiivi", form: "hyvään" },
          { label: "Adessiivi", form: "hyvällä" },
          { label: "Essiivi", form: "hyvänä" },
          { label: "Translatiivi", form: "hyväksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hyvät" },
          { label: "Partitiivi", form: "hyviä" },
          { label: "Genetiivi", form: "hyvien" },
        ],
      },
      {
        title: "Vertailu (epäsäännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "parempi" },
          { label: "Komparatiivi (gen.)", form: "paremman" },
          { label: "Komparatiivi (part.)", form: "parempaa" },
          { label: "Superlatiivi (nom.)", form: "paras" },
          { label: "Superlatiivi (gen.)", form: "parhaan" },
          { label: "Superlatiivi (part.)", form: "parasta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hyvin",
      en: "well; very",
      taso: "A2",
      esim: { fi: "Voin hyvin, kiitos.", en: "I'm well, thanks." },
    },
    {
      fi: "hyväksyä",
      en: "to accept, approve",
      taso: "B1",
      esim: { fi: "Hyväksyn ehdotuksesi.", en: "I accept your proposal." },
    },
    {
      fi: "hyvyys",
      en: "goodness, kindness",
      taso: "B2",
      esim: { fi: "Hän uskoo ihmisten hyvyyteen.", en: "She believes in the goodness of people." },
    },
  ],
  synonyymit: [
    { fi: "erinomainen", en: "excellent" },
    { fi: "mainio", en: "splendid, great" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on hyvä kirja.", en: "This is a good book." },
    B1: { fi: "Hän puhuu hyvää suomea.", en: "He speaks good Finnish." },
    B2: {
      fi: "Mitä parempi suunnitelma, sitä helpompi toteutus.",
      en: "The better the plan, the easier the execution.",
    },
  },
  updatedAt: "2026-06-04",
};

export default hyvä;
