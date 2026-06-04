import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, no gradation. Consonant stem:
// genitive oppilaan, partitive oppilasta, illative oppilaaseen, partitive pl oppilaita.
const oppilas: Word = {
  fi: "oppilas",
  slug: "oppilas",
  pos: "substantiivi (tyyppi 41/vieras)",
  posClass: "substantiivi",
  level: "A2",
  en: "pupil, student (at school)",
  selitys:
    "Koulussa oppia saava henkilö, etenkin peruskoulussa. Tyyppi 41, ei astevaihtelua. Vrt. opiskelija (= korkeakouluopiskelija).",
  kuva: { emoji: "🧑‍🎓", alt: "oppilas – koululainen pulpetin ääressä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 41/vieras; ei astevaihtelua, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "oppilaan", merkitys: "of the pupil" },
      { sija: "partitiivi (yks.)", muoto: "oppilasta", merkitys: "pupil (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "oppilaita", merkitys: "pupils (partitive pl.)" },
    ],
    huom:
      "Konsonanttivartalo näkyy partitiivissa oppilasta. Vokaalivartalo oppilaa-: oppilaan, oppilaaseen. Yleensä peruskoululainen; korkeakoulussa opiskelija.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "oppilas" },
          { label: "Partitiivi", form: "oppilasta" },
          { label: "Genetiivi", form: "oppilaan" },
          { label: "Inessiivi", form: "oppilaassa" },
          { label: "Elatiivi", form: "oppilaasta" },
          { label: "Illatiivi", form: "oppilaaseen" },
          { label: "Adessiivi", form: "oppilaalla" },
          { label: "Ablatiivi", form: "oppilaalta" },
          { label: "Allatiivi", form: "oppilaalle" },
          { label: "Essiivi", form: "oppilaana" },
          { label: "Translatiivi", form: "oppilaaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "oppilaat" },
          { label: "Partitiivi", form: "oppilaita" },
          { label: "Genetiivi", form: "oppilaiden" },
          { label: "Inessiivi", form: "oppilaissa" },
          { label: "Illatiivi", form: "oppilaisiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "oppilaitos",
      en: "educational institution",
      taso: "B2",
      esim: { fi: "Kaupungissa on monta oppilaitosta.", en: "The city has many educational institutions." },
    },
    {
      fi: "luokkatoveri",
      en: "classmate",
      taso: "B1",
      esim: { fi: "Tapasin vanhan luokkatoverini.", en: "I met an old classmate." },
    },
    {
      fi: "ylioppilas",
      en: "graduate of upper secondary school",
      taso: "B1",
      esim: { fi: "Hänestä tuli ylioppilas keväällä.", en: "She graduated (matriculated) in the spring." },
    },
  ],
  synonyymit: [
    { fi: "koululainen", en: "schoolchild" },
    { fi: "opiskelija", en: "student (higher education)" },
  ],
  esimerkit: {
    A2: { fi: "Luokassa on kaksikymmentä oppilasta.", en: "There are twenty pupils in the class." },
    B1: { fi: "Opettaja kehui oppilaan työtä.", en: "The teacher praised the pupil's work." },
    B2: {
      fi: "Oppilaat saivat valita aiheen itse.",
      en: "The pupils were allowed to choose the topic themselves.",
    },
  },
  updatedAt: "2026-06-04",
};

export default oppilas;
