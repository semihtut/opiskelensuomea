import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation. Genitive
// opettajan, partitive opettajaa, illative opettajaan, partitive pl opettajia.
const opettaja: Word = {
  fi: "opettaja",
  slug: "opettaja",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "A1",
  en: "teacher",
  selitys:
    "Henkilö, joka opettaa. Tyyppi 12, ei astevaihtelua. Tekijännimi verbistä opettaa (= teach).",
  kuva: { emoji: "👩‍🏫", alt: "opettaja – opettaja luokan edessä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "opettajan", merkitys: "of the teacher" },
      { sija: "partitiivi (yks.)", muoto: "opettajaa", merkitys: "teacher (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "opettajia", merkitys: "teachers (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi opettajia, genetiivi opettajien ~ opettajain. Erota opettaja (teacher), oppilas (pupil) ja opiskelija (student).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "opettaja" },
          { label: "Partitiivi", form: "opettajaa" },
          { label: "Genetiivi", form: "opettajan" },
          { label: "Inessiivi", form: "opettajassa" },
          { label: "Elatiivi", form: "opettajasta" },
          { label: "Illatiivi", form: "opettajaan" },
          { label: "Adessiivi", form: "opettajalla" },
          { label: "Ablatiivi", form: "opettajalta" },
          { label: "Allatiivi", form: "opettajalle" },
          { label: "Essiivi", form: "opettajana" },
          { label: "Translatiivi", form: "opettajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "opettajat" },
          { label: "Partitiivi", form: "opettajia" },
          { label: "Genetiivi", form: "opettajien" },
          { label: "Inessiivi", form: "opettajissa" },
          { label: "Illatiivi", form: "opettajiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "opettaa",
      en: "to teach",
      taso: "A2",
      esim: { fi: "Hän opettaa matematiikkaa.", en: "She teaches mathematics." },
    },
    {
      fi: "luokanopettaja",
      en: "class teacher (primary)",
      taso: "B1",
      esim: { fi: "Luokanopettaja tuntee jokaisen oppilaan.", en: "The class teacher knows every pupil." },
    },
    {
      fi: "opettajainhuone",
      en: "teachers' lounge",
      taso: "B2",
      esim: { fi: "Opettajat kokoontuivat opettajainhuoneeseen.", en: "The teachers gathered in the lounge." },
    },
  ],
  synonyymit: [
    { fi: "opettajatar", en: "female teacher (dated)" },
    { fi: "kouluttaja", en: "trainer, instructor" },
  ],
  esimerkit: {
    A2: { fi: "Opettaja on luokassa.", en: "The teacher is in the classroom." },
    B1: { fi: "Opettaja antoi meille kotitehtäviä.", en: "The teacher gave us homework." },
    B2: {
      fi: "Hyvä opettaja osaa innostaa myös vaikeasta aiheesta.",
      en: "A good teacher can inspire interest even in a difficult subject.",
    },
  },
  updatedAt: "2026-06-04",
};

export default opettaja;
