import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem maksu-.
// Genitive maksun, partitive maksua, partitive pl maksuja.
const maksu: Word = {
  fi: "maksu",
  slug: "maksu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "payment, fee, charge",
  selitys:
    "Rahasumma, joka maksetaan jostakin, tai maksamisen tapahtuma: 'maksaa lasku', 'kuukausimaksu'. Tyyppi 1/valo, ei astevaihtelua. Johdettu verbistä maksaa. Vrt. maksaa, lasku, palkkio.",
  kuva: { emoji: "💳", alt: "maksu – rahasumma joka maksetaan jostakin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo maksu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "maksun", merkitys: "of the payment" },
      { sija: "partitiivi (yks.)", muoto: "maksua", merkitys: "payment (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "maksuja", merkitys: "payments (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua. Teonnimi verbistä maksaa. Kuukausimaksu, jäsenmaksu, käsittelymaksu. Vrt. maksaa, lasku, maksaja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "maksu" },
          { label: "Partitiivi", form: "maksua" },
          { label: "Genetiivi", form: "maksun" },
          { label: "Inessiivi", form: "maksussa" },
          { label: "Elatiivi", form: "maksusta" },
          { label: "Illatiivi", form: "maksuun" },
          { label: "Adessiivi", form: "maksulla" },
          { label: "Ablatiivi", form: "maksulta" },
          { label: "Allatiivi", form: "maksulle" },
          { label: "Essiivi", form: "maksuna" },
          { label: "Translatiivi", form: "maksuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "maksut" },
          { label: "Partitiivi", form: "maksuja" },
          { label: "Genetiivi", form: "maksujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "maksaa",
      en: "to pay; to cost",
      taso: "A1",
      esim: { fi: "Maksan kortilla.", en: "I'll pay by card." },
    },
    {
      fi: "jäsenmaksu",
      en: "membership fee",
      taso: "B1",
      esim: { fi: "Jäsenmaksu on kymmenen euroa.", en: "The membership fee is ten euros." },
    },
  ],
  synonyymit: [
    { fi: "korvaus", en: "compensation, charge" },
  ],
  esimerkit: {
    A2: { fi: "Maksu on viisi euroa.", en: "The fee is five euros." },
    B1: { fi: "Maksu erääntyy ensi viikolla.", en: "The payment is due next week." },
    B2: {
      fi: "Palveluun liittyy pieni käsittelymaksu, joka veloitetaan kerran kuussa.",
      en: "The service involves a small handling fee, which is charged once a month.",
    },
  },
  updatedAt: "2026-06-07",
};

export default maksu;
