import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem kansa-.
// Genitive kansan, partitive kansaa, illative kansaan, partitive pl kansoja.
const kansa: Word = {
  fi: "kansa",
  slug: "kansa",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "people, nation, folk",
  selitys:
    "Yhteisen kielen tai kulttuurin jakavat ihmiset: 'Suomen kansa'. Tyyppi 9, ei astevaihtelua (ns säilyy). Partitiivin monikko kansoja. Vrt. kansalainen (citizen), kansallinen (national), kansakunta (nation).",
  kuva: { alt: "kansa – yhteisen kulttuurin jakavat ihmiset" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua (ns säilyy)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kansan", merkitys: "of the people" },
      { sija: "partitiivi (yks.)", muoto: "kansaa", merkitys: "people (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kansoja", merkitys: "peoples (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikossa a → o: kansoja. Yksikössä tarkoittaa usein koko kansaa: 'kansa äänesti'. Vrt. kansalainen = citizen, kansanedustaja = MP.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kansa" },
          { label: "Partitiivi", form: "kansaa" },
          { label: "Genetiivi", form: "kansan" },
          { label: "Inessiivi", form: "kansassa" },
          { label: "Elatiivi", form: "kansasta" },
          { label: "Illatiivi", form: "kansaan" },
          { label: "Adessiivi", form: "kansalla" },
          { label: "Ablatiivi", form: "kansalta" },
          { label: "Allatiivi", form: "kansalle" },
          { label: "Essiivi", form: "kansana" },
          { label: "Translatiivi", form: "kansaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kansat" },
          { label: "Partitiivi", form: "kansoja" },
          { label: "Genetiivi", form: "kansojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kansalainen",
      en: "citizen",
      taso: "B1",
      esim: { fi: "Hän on Suomen kansalainen.", en: "He is a Finnish citizen." },
    },
    {
      fi: "kansallinen",
      en: "national",
      taso: "B1",
      esim: { fi: "Itsenäisyyspäivä on kansallinen juhlapäivä.", en: "Independence Day is a national holiday." },
    },
    {
      fi: "kansanedustaja",
      en: "member of parliament",
      taso: "B2",
      esim: { fi: "Hänet valittiin kansanedustajaksi.", en: "She was elected a member of parliament." },
    },
  ],
  synonyymit: [
    { fi: "väestö", en: "population" },
    { fi: "kansakunta", en: "nation" },
  ],
  esimerkit: {
    A2: { fi: "Suomen kansa on pieni.", en: "The Finnish people are few in number." },
    B1: { fi: "Koko kansa seurasi peliä televisiosta.", en: "The whole nation watched the game on TV." },
    B2: {
      fi: "Eri kansat ovat eläneet alueella rinnakkain vuosisatojen ajan.",
      en: "Different peoples have lived side by side in the region for centuries.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kansa;
