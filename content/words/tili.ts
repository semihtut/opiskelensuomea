import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem tili-.
// Genitive tilin, partitive tiliä, illative tiliin, partitive pl tilejä.
const tili: Word = {
  fi: "tili",
  slug: "tili",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "account",
  selitys:
    "Pankkitili tai käyttäjätili, jolle rahaa tai tietoa kertyy: 'pankkitili'. Tyyppi 5, ei astevaihtelua. Partitiivin monikko tilejä. Vrt. tilata (to order), tilitys (settlement, account report).",
  kuva: { emoji: "🏦", alt: "tili – pankkitili tai käyttäjätili" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tilin", merkitys: "of the account" },
      { sija: "partitiivi (yks.)", muoto: "tiliä", merkitys: "account (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tilejä", merkitys: "accounts (partitive pl.)" },
    ],
    huom:
      "Tyyppi 5: ei astevaihtelua. Partitiivin monikko tilejä (e-vartalo). 'Avata tili' = to open an account; 'rahaa tilillä' = money in the account. Vrt. pankkitili, käyttäjätili.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tili" },
          { label: "Partitiivi", form: "tiliä" },
          { label: "Genetiivi", form: "tilin" },
          { label: "Inessiivi", form: "tilissä" },
          { label: "Elatiivi", form: "tilistä" },
          { label: "Illatiivi", form: "tiliin" },
          { label: "Adessiivi", form: "tilillä" },
          { label: "Ablatiivi", form: "tililtä" },
          { label: "Allatiivi", form: "tilille" },
          { label: "Essiivi", form: "tilinä" },
          { label: "Translatiivi", form: "tiliksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tilit" },
          { label: "Partitiivi", form: "tilejä" },
          { label: "Genetiivi", form: "tilien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pankkitili",
      en: "bank account",
      taso: "A2",
      esim: { fi: "Palkka maksetaan pankkitilille.", en: "The salary is paid into the bank account." },
    },
    {
      fi: "tiliote",
      en: "bank statement",
      taso: "B2",
      esim: { fi: "Tarkistin tiliotteen.", en: "I checked the bank statement." },
    },
    {
      fi: "tilittää",
      en: "to settle, account for; to vent",
      taso: "B2",
      esim: { fi: "Hän tilitti tunteensa ystävälle.", en: "She poured out her feelings to a friend." },
    },
  ],
  synonyymit: [
    { fi: "pankkitili", en: "bank account" },
    { fi: "käyttäjätili", en: "user account" },
  ],
  esimerkit: {
    A2: { fi: "Avasin uuden tilin pankissa.", en: "I opened a new account at the bank." },
    B1: { fi: "Tililläni ei ole tarpeeksi rahaa.", en: "There isn't enough money in my account." },
    B2: {
      fi: "Siirsin osan palkasta toiselle tilille säästöön.",
      en: "I moved part of my salary to another account as savings.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tili;
