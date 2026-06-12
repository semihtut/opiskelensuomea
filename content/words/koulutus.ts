import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem koulutukse-.
// Genitive koulutuksen, partitive koulutusta, partitive pl koulutuksia.
const koulutus: Word = {
  fi: "koulutus",
  slug: "koulutus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "education, training",
  selitys:
    "Opetus, jonka avulla hankitaan tietoja ja taitoja: 'saada koulutus', 'ammatillinen koulutus'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä kouluttaa. Vrt. kouluttaa, koulu, opetus.",
  kuva: { alt: "koulutus – opetus jonka avulla hankitaan tietoja ja taitoja" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo koulutukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "koulutuksen", merkitys: "of the education" },
      { sija: "partitiivi (yks.)", muoto: "koulutusta", merkitys: "education (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "koulutuksia", merkitys: "trainings (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Teonnimi verbistä kouluttaa. Korkeakoulutus, ammattikoulutus, täydennyskoulutus. Vrt. kouluttaa, opetus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "koulutus" },
          { label: "Partitiivi", form: "koulutusta" },
          { label: "Genetiivi", form: "koulutuksen" },
          { label: "Inessiivi", form: "koulutuksessa" },
          { label: "Elatiivi", form: "koulutuksesta" },
          { label: "Illatiivi", form: "koulutukseen" },
          { label: "Adessiivi", form: "koulutuksella" },
          { label: "Ablatiivi", form: "koulutukselta" },
          { label: "Allatiivi", form: "koulutukselle" },
          { label: "Essiivi", form: "koulutuksena" },
          { label: "Translatiivi", form: "koulutukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "koulutukset" },
          { label: "Partitiivi", form: "koulutuksia" },
          { label: "Genetiivi", form: "koulutuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kouluttaa",
      en: "to train, educate",
      taso: "B2",
      esim: { fi: "Yritys kouluttaa uudet työntekijät.", en: "The company trains the new employees." },
    },
    {
      fi: "kouluttautua",
      en: "to get trained, educate oneself",
      taso: "B2",
      esim: { fi: "Hän kouluttautui uuteen ammattiin.", en: "She trained for a new profession." },
    },
  ],
  synonyymit: [
    { fi: "opetus", en: "teaching, instruction" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on hyvä koulutus.", en: "She has a good education." },
    B1: { fi: "Ala vaatii pitkän koulutuksen.", en: "The field requires long training." },
    B2: {
      fi: "Jatkuva koulutus auttaa pysymään mukana työelämän muutoksissa.",
      en: "Continuous education helps keep up with changes in working life.",
    },
  },
  updatedAt: "2026-06-07",
};

export default koulutus;
