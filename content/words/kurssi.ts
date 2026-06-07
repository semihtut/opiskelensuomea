import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem kurssi-.
// Genitive kurssin, partitive kurssia, partitive pl kursseja.
const kurssi: Word = {
  fi: "kurssi",
  slug: "kurssi",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "course; exchange rate; (ship's) course",
  selitys:
    "1) Oppijakso tietystä aiheesta: 'käydä kielikurssi', 'ilmoittautua kurssille'. 2) Valuutan tai osakkeen kurssi. 3) Aluksen suunta. Tyyppi 5/risti, ei astevaihtelua; partitiivin monikko kursseja. Vrt. opiskella, valuuttakurssi.",
  kuva: { emoji: "📚", alt: "kurssi – oppijakso tietystä aiheesta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua (vartalo kurssi-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kurssin", merkitys: "of the course" },
      { sija: "partitiivi (yks.)", muoto: "kurssia", merkitys: "course (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kursseja", merkitys: "courses (partitive pl.)" },
    ],
    huom:
      "Tyyppi 5/risti: ei astevaihtelua. Partitiivin monikko kursseja, illatiivi kurssiin, kurssille (= onto the course). 'Mennä kurssille' = to go on a course. Vrt. valuuttakurssi, osakekurssi.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kurssi" },
          { label: "Partitiivi", form: "kurssia" },
          { label: "Genetiivi", form: "kurssin" },
          { label: "Inessiivi", form: "kurssissa" },
          { label: "Elatiivi", form: "kurssista" },
          { label: "Illatiivi", form: "kurssiin" },
          { label: "Adessiivi", form: "kurssilla" },
          { label: "Ablatiivi", form: "kurssilta" },
          { label: "Allatiivi", form: "kurssille" },
          { label: "Essiivi", form: "kurssina" },
          { label: "Translatiivi", form: "kurssiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kurssit" },
          { label: "Partitiivi", form: "kursseja" },
          { label: "Genetiivi", form: "kurssien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "verkkokurssi",
      en: "online course",
      taso: "B1",
      esim: { fi: "Suoritin verkkokurssin kotona.", en: "I completed an online course at home." },
    },
    {
      fi: "valuuttakurssi",
      en: "exchange rate",
      taso: "B2",
      esim: { fi: "Valuuttakurssi vaihtelee päivittäin.", en: "The exchange rate varies daily." },
    },
  ],
  synonyymit: [
    { fi: "oppijakso", en: "study period" },
  ],
  esimerkit: {
    A2: { fi: "Aloitan suomen kurssin.", en: "I'm starting a Finnish course." },
    B1: { fi: "Kurssi kestää kymmenen viikkoa.", en: "The course lasts ten weeks." },
    B2: {
      fi: "Ilmoittauduin edistyneelle kurssille, jolla puhutaan vain suomea.",
      en: "I enrolled in an advanced course where only Finnish is spoken.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kurssi;
