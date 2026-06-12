import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem hallitukse-.
// Genitive hallituksen, partitive hallitusta, illative hallitukseen, partitive pl hallituksia.
const hallitus: Word = {
  fi: "hallitus",
  slug: "hallitus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "government; board (of a company/organization)",
  selitys:
    "Maata johtava elin tai yhteisön johtokunta: 'Suomen hallitus' / 'yhdistyksen hallitus'. Tyyppi 39, verbijohdos sanasta hallita (-us → -ukse-), ei astevaihtelua. Vrt. hallita (to rule), hallinto (administration).",
  kuva: { alt: "hallitus – maata johtava elin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; verbijohdos (-us → -ukse-); ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hallituksen", merkitys: "of the government" },
      { sija: "partitiivi (yks.)", muoto: "hallitusta", merkitys: "government (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hallituksia", merkitys: "governments (partitive pl.)" },
    ],
    huom:
      "Vartalo -ukse-: hallitus → hallituksen, mutta partitiivi hallitusta. 'Hallitus päätti' = the government decided. Vrt. hallita = to rule, hallinto = administration.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hallitus" },
          { label: "Partitiivi", form: "hallitusta" },
          { label: "Genetiivi", form: "hallituksen" },
          { label: "Inessiivi", form: "hallituksessa" },
          { label: "Elatiivi", form: "hallituksesta" },
          { label: "Illatiivi", form: "hallitukseen" },
          { label: "Adessiivi", form: "hallituksella" },
          { label: "Ablatiivi", form: "hallitukselta" },
          { label: "Allatiivi", form: "hallitukselle" },
          { label: "Essiivi", form: "hallituksena" },
          { label: "Translatiivi", form: "hallitukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hallitukset" },
          { label: "Partitiivi", form: "hallituksia" },
          { label: "Genetiivi", form: "hallitusten / hallituksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hallituspuolue",
      en: "governing party",
      taso: "B2",
      esim: { fi: "Hallituspuolueet pääsivät sopuun.", en: "The governing parties reached an agreement." },
    },
    {
      fi: "hallituksen jäsen",
      en: "board member",
      taso: "B1",
      esim: { fi: "Hänet valittiin hallituksen jäseneksi.", en: "She was elected a board member." },
    },
    {
      fi: "hallitustenvälinen",
      en: "intergovernmental",
      taso: "B2",
      esim: { fi: "Kyseessä on hallitustenvälinen sopimus.", en: "It is an intergovernmental agreement." },
    },
  ],
  synonyymit: [
    { fi: "johtokunta", en: "board, committee" },
    { fi: "valtioneuvosto", en: "council of state (Finnish government)" },
  ],
  esimerkit: {
    A2: { fi: "Hallitus kokoontuu tänään.", en: "The government meets today." },
    B1: { fi: "Uusi hallitus lupasi alentaa veroja.", en: "The new government promised to lower taxes." },
    B2: {
      fi: "Yhdistyksen hallitus hyväksyi talousarvion yksimielisesti.",
      en: "The association's board approved the budget unanimously.",
    },
  },
  updatedAt: "2026-06-06",
};

export default hallitus;
