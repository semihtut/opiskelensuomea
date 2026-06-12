import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation, stem opiskelija-.
// Genitive opiskelijan, partitive opiskelijaa, partitive pl opiskelijoita.
const opiskelija: Word = {
  fi: "opiskelija",
  slug: "opiskelija",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "A2",
  en: "student",
  selitys:
    "Henkilö, joka opiskelee oppilaitoksessa, erityisesti lukiossa tai korkeakoulussa: 'yliopisto-opiskelija'. Tyyppi 12/kulkija, ei astevaihtelua; partitiivin monikko opiskelijoita. Sanasta opiskella + -ja. HUOM: nuoremmasta käytetään usein sanaa oppilas. Vrt. opiskella, oppilas, opettaja.",
  kuva: { alt: "opiskelija – henkilö joka opiskelee oppilaitoksessa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua (vartalo opiskelija-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "opiskelijan", merkitys: "of the student" },
      { sija: "partitiivi (yks.)", muoto: "opiskelijaa", merkitys: "student (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "opiskelijoita", merkitys: "students (partitive pl.)" },
    ],
    huom:
      "Tyyppi 12/kulkija: ei astevaihtelua. Partitiivin monikko opiskelijoita, genetiivin monikko opiskelijoiden (ei opiskelijia!). Sanasta opiskella. Vrt. oppilas = pupil (younger), opettaja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "opiskelija" },
          { label: "Partitiivi", form: "opiskelijaa" },
          { label: "Genetiivi", form: "opiskelijan" },
          { label: "Inessiivi", form: "opiskelijassa" },
          { label: "Elatiivi", form: "opiskelijasta" },
          { label: "Illatiivi", form: "opiskelijaan" },
          { label: "Adessiivi", form: "opiskelijalla" },
          { label: "Ablatiivi", form: "opiskelijalta" },
          { label: "Allatiivi", form: "opiskelijalle" },
          { label: "Essiivi", form: "opiskelijana" },
          { label: "Translatiivi", form: "opiskelijaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "opiskelijat" },
          { label: "Partitiivi", form: "opiskelijoita" },
          { label: "Genetiivi", form: "opiskelijoiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "opiskella",
      en: "to study",
      taso: "A1",
      esim: { fi: "Opiskelen suomea.", en: "I study Finnish." },
    },
    {
      fi: "vaihto-opiskelija",
      en: "exchange student",
      taso: "B2",
      esim: { fi: "Hän on vaihto-opiskelija Saksasta.", en: "She is an exchange student from Germany." },
    },
  ],
  synonyymit: [
    { fi: "oppilas", en: "pupil (younger)" },
  ],
  esimerkit: {
    A2: { fi: "Olen opiskelija.", en: "I am a student." },
    B1: { fi: "Yliopistossa on tuhansia opiskelijoita.", en: "There are thousands of students at the university." },
    B2: {
      fi: "Moni opiskelija käy töissä opintojen ohella selvitäkseen kuluista.",
      en: "Many students work alongside their studies to cover their costs.",
    },
  },
  updatedAt: "2026-06-07",
};

export default opiskelija;
