import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation (sk stays), stem lasku-.
// Genitive laskun, partitive laskua, illative laskuun, partitive pl laskuja.
const lasku: Word = {
  fi: "lasku",
  slug: "lasku",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "bill, invoice; descent, decline",
  selitys:
    "Maksuvaatimus tai aleneminen: 'maksaa lasku' / 'hintojen lasku'. Tyyppi 1, ei astevaihtelua (sk säilyy). Juuri verbistä laskea. Vastakohta (nousu).",
  kuva: { emoji: "🧾", alt: "lasku – maksuvaatimus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (sk säilyy)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "laskun", merkitys: "of the bill" },
      { sija: "partitiivi (yks.)", muoto: "laskua", merkitys: "bill (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "laskuja", merkitys: "bills (partitive pl.)" },
    ],
    huom:
      "Kaksi merkitystä: 1) maksulasku ('maksaa lasku'), 2) aleneminen ('hintojen lasku', vastakohta nousu). Vrt. laskea = to lower / to count, laskuri = counter.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lasku" },
          { label: "Partitiivi", form: "laskua" },
          { label: "Genetiivi", form: "laskun" },
          { label: "Inessiivi", form: "laskussa" },
          { label: "Elatiivi", form: "laskusta" },
          { label: "Illatiivi", form: "laskuun" },
          { label: "Adessiivi", form: "laskulla" },
          { label: "Ablatiivi", form: "laskulta" },
          { label: "Allatiivi", form: "laskulle" },
          { label: "Essiivi", form: "laskuna" },
          { label: "Translatiivi", form: "laskuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "laskut" },
          { label: "Partitiivi", form: "laskuja" },
          { label: "Genetiivi", form: "laskujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "verkkolasku",
      en: "e-invoice",
      taso: "B2",
      esim: { fi: "Sain verkkolaskun sähköpostiin.", en: "I got an e-invoice by email." },
    },
    {
      fi: "laskuttaa",
      en: "to invoice, bill",
      taso: "B2",
      esim: { fi: "Yritys laskuttaa kuukausittain.", en: "The company invoices monthly." },
    },
    {
      fi: "hinnanlasku",
      en: "price drop",
      taso: "B2",
      esim: { fi: "Odotin hinnanlaskua.", en: "I waited for a price drop." },
    },
  ],
  synonyymit: [
    { fi: "maksu", en: "payment, fee" },
    { fi: "aleneminen", en: "decline, decrease" },
  ],
  esimerkit: {
    A2: { fi: "Maksoin laskun eilen.", en: "I paid the bill yesterday." },
    B1: { fi: "Sähkölasku oli tällä kertaa suuri.", en: "The electricity bill was big this time." },
    B2: {
      fi: "Korkojen lasku helpotti monen velallisen tilannetta.",
      en: "The drop in interest rates eased the situation of many debtors.",
    },
  },
  updatedAt: "2026-06-06",
};

export default lasku;
