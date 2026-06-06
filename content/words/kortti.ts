import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, tt:t gradation, stem kortti- ~ korti-.
// Genitive kortin, partitive korttia, illative korttiin, partitive pl kortteja.
const kortti: Word = {
  fi: "kortti",
  slug: "kortti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "card",
  selitys:
    "Pieni jäykkä kortti: maksukortti, pelikortti tai postikortti: 'maksaa kortilla'. Tyyppi 5, astevaihtelu tt:t (kortti → kortin). Partitiivin monikko kortteja. Vrt. pankkikortti, postikortti.",
  kuva: { emoji: "💳", alt: "kortti – maksukortti tai postikortti" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu tt:t (kortti ↔ korti-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kortin", merkitys: "of the card" },
      { sija: "partitiivi (yks.)", muoto: "korttia", merkitys: "card (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kortteja", merkitys: "cards (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa tt → t: genetiivi kortin, adessiivi kortilla. Vahva aste tt säilyy partitiivissa korttia ja monikossa kortteja. 'Maksaa kortilla' = to pay by card.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kortti" },
          { label: "Partitiivi", form: "korttia" },
          { label: "Genetiivi", form: "kortin" },
          { label: "Inessiivi", form: "kortissa" },
          { label: "Elatiivi", form: "kortista" },
          { label: "Illatiivi", form: "korttiin" },
          { label: "Adessiivi", form: "kortilla" },
          { label: "Ablatiivi", form: "kortilta" },
          { label: "Allatiivi", form: "kortille" },
          { label: "Essiivi", form: "korttina" },
          { label: "Translatiivi", form: "kortiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kortit" },
          { label: "Partitiivi", form: "kortteja" },
          { label: "Genetiivi", form: "korttien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pankkikortti",
      en: "bank card, debit card",
      taso: "A2",
      esim: { fi: "Maksoin pankkikortilla.", en: "I paid with my bank card." },
    },
    {
      fi: "postikortti",
      en: "postcard",
      taso: "A2",
      esim: { fi: "Lähetin postikortin lomalta.", en: "I sent a postcard from the holiday." },
    },
    {
      fi: "luottokortti",
      en: "credit card",
      taso: "B1",
      esim: { fi: "Varasin hotellin luottokortilla.", en: "I booked the hotel with a credit card." },
    },
  ],
  synonyymit: [
    { fi: "maksukortti", en: "payment card" },
    { fi: "korttipakka", en: "deck of cards" },
  ],
  esimerkit: {
    A2: { fi: "Voinko maksaa kortilla?", en: "Can I pay by card?" },
    B1: { fi: "Kortti ei toiminut kaupassa.", en: "The card didn't work in the shop." },
    B2: {
      fi: "Monessa paikassa käteinen on korvautunut kokonaan korteilla.",
      en: "In many places cash has been replaced entirely by cards.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kortti;
