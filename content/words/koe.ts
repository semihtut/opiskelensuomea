import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, k:∅ gradation, stem koe ~ koke-.
// Genitive kokeen, partitive koetta, illative kokeeseen, partitive pl kokeita.
const koe: Word = {
  fi: "koe",
  slug: "koe",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "test, exam; experiment",
  selitys:
    "Tilanne, jossa mitataan osaamista, tai tieteellinen kokeilu: 'matematiikan koe'. Tyyppi 48, astevaihtelu k:∅ (koe ↔ kokeen). Partitiivin monikko kokeita. Johdettu verbistä kokea. Vrt. kokeilla (to try).",
  kuva: { emoji: "🧪", alt: "koe – osaamisen mittaaminen tai tieteellinen kokeilu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu k:∅ (koe ↔ koke-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kokeen", merkitys: "of the test" },
      { sija: "partitiivi (yks.)", muoto: "koetta", merkitys: "test (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kokeita", merkitys: "tests (partitive pl.)" },
    ],
    huom:
      "Nominatiivi koe ja partitiivi koetta ovat heikossa asteessa (ei k:ta); vahva aste k näkyy muodoissa kokeen, kokeessa, kokeita. 'Tehdä koe' = to take/run a test/experiment.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "koe" },
          { label: "Partitiivi", form: "koetta" },
          { label: "Genetiivi", form: "kokeen" },
          { label: "Inessiivi", form: "kokeessa" },
          { label: "Elatiivi", form: "kokeesta" },
          { label: "Illatiivi", form: "kokeeseen" },
          { label: "Adessiivi", form: "kokeella" },
          { label: "Ablatiivi", form: "kokeelta" },
          { label: "Allatiivi", form: "kokeelle" },
          { label: "Essiivi", form: "kokeena" },
          { label: "Translatiivi", form: "kokeeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kokeet" },
          { label: "Partitiivi", form: "kokeita" },
          { label: "Genetiivi", form: "kokeiden / kokeitten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kokeilla",
      en: "to try, experiment",
      taso: "B1",
      esim: { fi: "Haluan kokeilla uutta reseptiä.", en: "I want to try a new recipe." },
    },
    {
      fi: "koetulos",
      en: "test result",
      taso: "B2",
      esim: { fi: "Koetulokset tulivat viikon päästä.", en: "The test results came a week later." },
    },
    {
      fi: "kokeellinen",
      en: "experimental",
      taso: "B2",
      esim: { fi: "Se on kokeellinen hoito.", en: "It is an experimental treatment." },
    },
  ],
  synonyymit: [
    { fi: "tentti", en: "exam (university)" },
    { fi: "testi", en: "test" },
  ],
  esimerkit: {
    A2: { fi: "Meillä on huomenna koe.", en: "We have a test tomorrow." },
    B1: { fi: "Pääsin kokeesta läpi.", en: "I passed the exam." },
    B2: {
      fi: "Tutkijat toistivat kokeen useita kertoja varmistaakseen tuloksen.",
      en: "The researchers repeated the experiment several times to confirm the result.",
    },
  },
  updatedAt: "2026-06-06",
};

export default koe;
