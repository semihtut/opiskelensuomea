import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem vatsa-.
// Genitive vatsan, partitive vatsaa, illative vatsaan, partitive pl vatsoja.
const vatsa: Word = {
  fi: "vatsa",
  slug: "vatsa",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "stomach, belly",
  selitys:
    "Kehon osa, jossa ruoka sulaa: 'vatsa on kipeä'. Tyyppi 9, ei astevaihtelua (ts säilyy). Partitiivin monikko vatsoja. Vrt. vatsakipu (stomach ache), maha (tummy, colloquial).",
  kuva: { alt: "vatsa – kehon osa, jossa ruoka sulaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua (ts säilyy)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vatsan", merkitys: "of the stomach" },
      { sija: "partitiivi (yks.)", muoto: "vatsaa", merkitys: "stomach (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vatsoja", merkitys: "stomachs (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikossa a → o: vatsoja. 'Tyhjään vatsaan' = on an empty stomach. Vrt. maha = belly (arkinen), vatsalihas = abdominal muscle.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vatsa" },
          { label: "Partitiivi", form: "vatsaa" },
          { label: "Genetiivi", form: "vatsan" },
          { label: "Inessiivi", form: "vatsassa" },
          { label: "Elatiivi", form: "vatsasta" },
          { label: "Illatiivi", form: "vatsaan" },
          { label: "Adessiivi", form: "vatsalla" },
          { label: "Ablatiivi", form: "vatsalta" },
          { label: "Allatiivi", form: "vatsalle" },
          { label: "Essiivi", form: "vatsana" },
          { label: "Translatiivi", form: "vatsaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vatsat" },
          { label: "Partitiivi", form: "vatsoja" },
          { label: "Genetiivi", form: "vatsojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vatsakipu",
      en: "stomach ache",
      taso: "B1",
      esim: { fi: "Minulla on vatsakipua.", en: "I have a stomach ache." },
    },
    {
      fi: "vatsalihas",
      en: "abdominal muscle",
      taso: "B2",
      esim: { fi: "Hän treenaa vatsalihaksia.", en: "He trains his abdominal muscles." },
    },
    {
      fi: "vatsatauti",
      en: "stomach bug, gastroenteritis",
      taso: "B2",
      esim: { fi: "Koko perhe sai vatsataudin.", en: "The whole family got a stomach bug." },
    },
  ],
  synonyymit: [
    { fi: "maha", en: "belly, tummy (colloquial)" },
    { fi: "mahalaukku", en: "stomach (organ)" },
  ],
  esimerkit: {
    A2: { fi: "Vatsani on täynnä.", en: "My stomach is full." },
    B1: { fi: "Söin liikaa, ja nyt vatsaan koskee.", en: "I ate too much, and now my stomach hurts." },
    B2: {
      fi: "Stressi voi aiheuttaa vatsavaivoja monelle ihmiselle.",
      en: "Stress can cause stomach troubles for many people.",
    },
  },
  updatedAt: "2026-06-06",
};

export default vatsa;
