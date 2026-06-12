import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem meno-.
// Genitive menon, partitive menoa, illative menoon, partitive pl menoja. Plural menot = expenses.
const meno: Word = {
  fi: "meno",
  slug: "meno",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "going, departure; (pl.) expenses",
  selitys:
    "Meneminen tai kulutettu raha: 'meno ja paluu' / 'kuukauden menot'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko menoja. Monikossa menot = expenses. Johdettu verbistä mennä. Vastakohta tulo.",
  kuva: { alt: "meno – kulutettu raha tai meneminen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "menon", merkitys: "of the going/expense" },
      { sija: "partitiivi (yks.)", muoto: "menoa", merkitys: "going (partitive)" },
      { sija: "nominatiivi (mon.)", muoto: "menot", merkitys: "expenses (the costs)" },
    ],
    huom:
      "Monikko menot tarkoittaa usein 'expenses' (kulut). 'Meno ja paluu' = there and back (return ticket). Vastakohta tulo (income/arrival). Johdettu verbistä mennä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "meno" },
          { label: "Partitiivi", form: "menoa" },
          { label: "Genetiivi", form: "menon" },
          { label: "Inessiivi", form: "menossa" },
          { label: "Elatiivi", form: "menosta" },
          { label: "Illatiivi", form: "menoon" },
          { label: "Adessiivi", form: "menolla" },
          { label: "Ablatiivi", form: "menolta" },
          { label: "Allatiivi", form: "menolle" },
          { label: "Essiivi", form: "menona" },
          { label: "Translatiivi", form: "menoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "menot" },
          { label: "Partitiivi", form: "menoja" },
          { label: "Genetiivi", form: "menojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "menolippu",
      en: "one-way ticket",
      taso: "B1",
      esim: { fi: "Ostin vain menolipun.", en: "I bought only a one-way ticket." },
    },
    {
      fi: "elinkustannukset",
      en: "living costs",
      taso: "B2",
      esim: { fi: "Elinkustannukset nousivat.", en: "Living costs rose." },
    },
    {
      fi: "mennä",
      en: "to go",
      taso: "A2",
      esim: { fi: "Menen töihin bussilla.", en: "I go to work by bus." },
    },
  ],
  synonyymit: [
    { fi: "kulut", en: "costs, expenses" },
    { fi: "lähtö", en: "departure" },
  ],
  esimerkit: {
    A2: { fi: "Menot ovat suuremmat kuin tulot.", en: "The expenses are bigger than the income." },
    B1: { fi: "Yritimme pienentää menoja.", en: "We tried to reduce expenses." },
    B2: {
      fi: "Kun kirjaat kaikki menot ylös, näet helposti, mihin raha kuluu.",
      en: "When you write down all expenses, you easily see where the money goes.",
    },
  },
  updatedAt: "2026-06-06",
};

export default meno;
