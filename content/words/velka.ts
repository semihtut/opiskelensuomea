import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, k:∅ gradation (lk:l), stem velka- ~ vela-.
// Genitive velan, partitive velkaa, illative velkaan, partitive pl velkoja.
const velka: Word = {
  fi: "velka",
  slug: "velka",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "debt",
  selitys:
    "Raha, joka on lainattu ja pitää maksaa takaisin: 'olla velkaa'. Tyyppi 9, astevaihtelu k:∅ (velka → velan). Partitiivin monikko velkoja. Vrt. velallinen (debtor), velaton (debt-free).",
  kuva: { emoji: "📉", alt: "velka – takaisin maksettava raha" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu k:∅ (velka ↔ vela-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "velan", merkitys: "of the debt" },
      { sija: "partitiivi (yks.)", muoto: "velkaa", merkitys: "debt (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "velkoja", merkitys: "debts (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa lk → l: genetiivi velan, adessiivi velalla. Vahva aste säilyy partitiivissa velkaa ja monikossa velkoja (a → o). 'Olla velkaa jollekulle' = to owe someone.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "velka" },
          { label: "Partitiivi", form: "velkaa" },
          { label: "Genetiivi", form: "velan" },
          { label: "Inessiivi", form: "velassa" },
          { label: "Elatiivi", form: "velasta" },
          { label: "Illatiivi", form: "velkaan" },
          { label: "Adessiivi", form: "velalla" },
          { label: "Ablatiivi", form: "velalta" },
          { label: "Allatiivi", form: "velalle" },
          { label: "Essiivi", form: "velkana" },
          { label: "Translatiivi", form: "velaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "velat" },
          { label: "Partitiivi", form: "velkoja" },
          { label: "Genetiivi", form: "velkojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "velallinen",
      en: "debtor",
      taso: "B2",
      esim: { fi: "Velallinen sai maksuaikaa.", en: "The debtor was given more time to pay." },
    },
    {
      fi: "velaton",
      en: "debt-free",
      taso: "B2",
      esim: { fi: "Asunto on nyt velaton.", en: "The apartment is now debt-free." },
    },
    {
      fi: "velkaantua",
      en: "to get into debt",
      taso: "B2",
      esim: { fi: "Moni velkaantuu opiskeluaikana.", en: "Many get into debt during their studies." },
    },
  ],
  synonyymit: [
    { fi: "laina", en: "loan" },
    { fi: "maksettava", en: "amount payable" },
  ],
  esimerkit: {
    A2: { fi: "Olen sinulle velkaa kymmenen euroa.", en: "I owe you ten euros." },
    B1: { fi: "Hän maksoi velkansa pois.", en: "He paid off his debt." },
    B2: {
      fi: "Suuri velka voi aiheuttaa jatkuvaa stressiä.",
      en: "A large debt can cause constant stress.",
    },
  },
  updatedAt: "2026-06-06",
};

export default velka;
