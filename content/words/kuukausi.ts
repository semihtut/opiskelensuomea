import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 27/käsi with t:d gradation. Consonant
// stem in partitive (kuukautta), weak d in closed syllables (kuukauden), strong t
// before the illative (kuukauteen). Plural stem kuukaus-.
const kuukausi: Word = {
  fi: "kuukausi",
  slug: "kuukausi",
  pos: "substantiivi (tyyppi: käsi)",
  posClass: "substantiivi",
  level: "A1",
  en: "month",
  selitys:
    "Noin 30 päivän jakso; vuosi jakautuu 12 kuukauteen. Konsonanttivartalo (partitiivi kuukautta), astevaihtelu t:d.",
  kuva: { emoji: "📅", alt: "kuukausi – kuukauden kalenteri" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 27/käsi; astevaihtelu t:d, konsonanttivartalo",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "kuukautta", merkitys: "month (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "kuukauden", merkitys: "of the month" },
      { sija: "partitiivi (mon.)", muoto: "kuukausia", merkitys: "months (partitive pl.)" },
    ],
    huom:
      "Partitiivi kuukautta (konsonanttivartalo kuukaut-), genetiivi kuukauden (heikko d), illatiivi kuukauteen (vahva t). Monikon vartalo kuukaus-: kuukausia, kuukausien.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kuukausi" },
          { label: "Partitiivi", form: "kuukautta" },
          { label: "Genetiivi", form: "kuukauden" },
          { label: "Inessiivi", form: "kuukaudessa" },
          { label: "Elatiivi", form: "kuukaudesta" },
          { label: "Illatiivi", form: "kuukauteen" },
          { label: "Adessiivi", form: "kuukaudella" },
          { label: "Ablatiivi", form: "kuukaudelta" },
          { label: "Allatiivi", form: "kuukaudelle" },
          { label: "Essiivi", form: "kuukautena" },
          { label: "Translatiivi", form: "kuukaudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kuukaudet" },
          { label: "Partitiivi", form: "kuukausia" },
          { label: "Genetiivi", form: "kuukausien" },
          { label: "Illatiivi", form: "kuukausiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuukausittain",
      en: "monthly, every month",
      taso: "B1",
      esim: { fi: "Maksan vuokran kuukausittain.", en: "I pay the rent monthly." },
    },
    {
      fi: "kuukausipalkka",
      en: "monthly salary",
      taso: "B1",
      esim: { fi: "Hänellä on hyvä kuukausipalkka.", en: "He has a good monthly salary." },
    },
    {
      fi: "kuukautinen",
      en: "monthly (adjective)",
      taso: "B2",
      esim: { fi: "Saimme kuukautisen raportin.", en: "We received the monthly report." },
    },
  ],
  synonyymit: [
    { fi: "kuu", en: "month (poetic / in compounds)" },
    { fi: "kalenterikuukausi", en: "calendar month" },
  ],
  esimerkit: {
    A2: { fi: "Vuodessa on kaksitoista kuukautta.", en: "There are twelve months in a year." },
    B1: { fi: "Olen asunut täällä kolme kuukautta.", en: "I have lived here for three months." },
    B2: {
      fi: "Ensi kuukauden aikana sää lämpenee.",
      en: "During next month the weather will get warmer.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kuukausi;
