import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem rangaistukse-.
// Genitive rangaistuksen, partitive rangaistusta, partitive pl rangaistuksia.
const rangaistus: Word = {
  fi: "rangaistus",
  slug: "rangaistus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "punishment, penalty, sentence",
  selitys:
    "Seuraamus, joka annetaan rikoksesta tai väärästä teosta: 'ankara rangaistus', 'saada rangaistus'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä rangaista. Vrt. rangaista, rikos, tuomio.",
  kuva: { emoji: "⚖️", alt: "rangaistus – seuraamus rikoksesta tai väärästä teosta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo rangaistukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "rangaistuksen", merkitys: "of the punishment" },
      { sija: "partitiivi (yks.)", muoto: "rangaistusta", merkitys: "punishment (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "rangaistuksia", merkitys: "punishments (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Teonnimi verbistä rangaista. Urheilussa: rangaistus(potku) = penalty (kick). Vrt. rangaista, sakko.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "rangaistus" },
          { label: "Partitiivi", form: "rangaistusta" },
          { label: "Genetiivi", form: "rangaistuksen" },
          { label: "Inessiivi", form: "rangaistuksessa" },
          { label: "Elatiivi", form: "rangaistuksesta" },
          { label: "Illatiivi", form: "rangaistukseen" },
          { label: "Adessiivi", form: "rangaistuksella" },
          { label: "Ablatiivi", form: "rangaistukselta" },
          { label: "Allatiivi", form: "rangaistukselle" },
          { label: "Essiivi", form: "rangaistuksena" },
          { label: "Translatiivi", form: "rangaistukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "rangaistukset" },
          { label: "Partitiivi", form: "rangaistuksia" },
          { label: "Genetiivi", form: "rangaistuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rangaista",
      en: "to punish",
      taso: "B2",
      esim: { fi: "Lapsia ei pidä rangaista kovasti.", en: "Children should not be punished harshly." },
    },
    {
      fi: "sakko",
      en: "fine",
      taso: "B1",
      esim: { fi: "Sain ylinopeudesta sakon.", en: "I got a fine for speeding." },
    },
  ],
  synonyymit: [
    { fi: "seuraamus", en: "consequence, sanction" },
    { fi: "tuomio", en: "sentence" },
  ],
  esimerkit: {
    A2: { fi: "Rangaistus oli sakko.", en: "The punishment was a fine." },
    B1: { fi: "Hän sai rangaistuksen rikoksesta.", en: "He received a punishment for the crime." },
    B2: {
      fi: "Tuomioistuin määräsi ankaran rangaistuksen, koska teko oli harkittu.",
      en: "The court imposed a severe punishment because the act was premeditated.",
    },
  },
  updatedAt: "2026-06-07",
};

export default rangaistus;
