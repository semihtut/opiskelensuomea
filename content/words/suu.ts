import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 18/maa, no gradation. Genitive suun,
// partitive suuta, illative suuhun, partitive pl suita.
const suu: Word = {
  fi: "suu",
  slug: "suu",
  pos: "substantiivi (tyyppi 18/maa)",
  posClass: "substantiivi",
  level: "A1",
  en: "mouth",
  selitys:
    "Kasvojen aukko, jolla syödään ja puhutaan; myös 'suu' = aukko (joen suu). Tyyppi 18, ei astevaihtelua.",
  kuva: { alt: "suu – ihmisen suu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "suun", merkitys: "of the mouth" },
      { sija: "partitiivi (yks.)", muoto: "suuta", merkitys: "mouth (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "suita", merkitys: "mouths (partitive pl.)" },
    ],
    huom:
      "Illatiivi suuhun, monikko suut/suita/suiden. Idiomeja: 'pitää suu kiinni' (keep quiet), 'joen suu' (river mouth).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "suu" },
          { label: "Partitiivi", form: "suuta" },
          { label: "Genetiivi", form: "suun" },
          { label: "Inessiivi", form: "suussa" },
          { label: "Elatiivi", form: "suusta" },
          { label: "Illatiivi", form: "suuhun" },
          { label: "Adessiivi", form: "suulla" },
          { label: "Ablatiivi", form: "suulta" },
          { label: "Allatiivi", form: "suulle" },
          { label: "Essiivi", form: "suuna" },
          { label: "Translatiivi", form: "suuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "suut" },
          { label: "Partitiivi", form: "suita" },
          { label: "Genetiivi", form: "suiden" },
          { label: "Inessiivi", form: "suissa" },
          { label: "Illatiivi", form: "suihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suukko",
      en: "kiss (peck)",
      taso: "B1",
      esim: { fi: "Hän antoi lapselle suukon.", en: "She gave the child a kiss." },
    },
    {
      fi: "suullinen",
      en: "oral, verbal",
      taso: "B2",
      esim: { fi: "Pidimme suullisen sopimuksen.", en: "We made an oral agreement." },
    },
    {
      fi: "suupala",
      en: "a bite, morsel",
      taso: "B1",
      esim: { fi: "Otin vain suupalan leipää.", en: "I took just a bite of bread." },
    },
  ],
  synonyymit: [
    { fi: "aukko", en: "opening, mouth (of an opening)" },
    { fi: "huulet", en: "lips" },
  ],
  esimerkit: {
    A2: { fi: "Avaa suu, sanoo hammaslääkäri.", en: "Open your mouth, says the dentist." },
    B1: { fi: "Älä puhu suu täynnä.", en: "Don't talk with your mouth full." },
    B2: {
      fi: "Joen suu levenee hitaasti kohti merta.",
      en: "The river's mouth widens slowly toward the sea.",
    },
  },
  updatedAt: "2026-06-04",
};

export default suu;
