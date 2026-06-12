import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation (ll does not gradate).
// Genitive hotellin, partitive hotellia, illative hotelliin, partitive pl hotelleja.
const hotelli: Word = {
  fi: "hotelli",
  slug: "hotelli",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "hotel",
  selitys:
    "Majoitusliike, jossa voi yöpyä maksua vastaan. Tyyppi 5, ei astevaihtelua.",
  kuva: { alt: "hotelli – hotellirakennus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hotellin", merkitys: "of the hotel" },
      { sija: "partitiivi (yks.)", muoto: "hotellia", merkitys: "hotel (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hotelleja", merkitys: "hotels (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. 'Yöpyä hotellissa' = stay at a hotel. Monikon partitiivi hotelleja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hotelli" },
          { label: "Partitiivi", form: "hotellia" },
          { label: "Genetiivi", form: "hotellin" },
          { label: "Inessiivi", form: "hotellissa" },
          { label: "Elatiivi", form: "hotellista" },
          { label: "Illatiivi", form: "hotelliin" },
          { label: "Adessiivi", form: "hotellilla" },
          { label: "Ablatiivi", form: "hotellilta" },
          { label: "Allatiivi", form: "hotellille" },
          { label: "Essiivi", form: "hotellina" },
          { label: "Translatiivi", form: "hotelliksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hotellit" },
          { label: "Partitiivi", form: "hotelleja" },
          { label: "Genetiivi", form: "hotellien" },
          { label: "Inessiivi", form: "hotelleissa" },
          { label: "Illatiivi", form: "hotelleihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hotellihuone",
      en: "hotel room",
      taso: "A2",
      esim: { fi: "Hotellihuone oli iso ja valoisa.", en: "The hotel room was big and bright." },
    },
    {
      fi: "majoittua",
      en: "to lodge, check in",
      taso: "B1",
      esim: { fi: "Majoituimme keskustan hotelliin.", en: "We stayed at a downtown hotel." },
    },
    {
      fi: "vastaanotto",
      en: "reception (front desk)",
      taso: "B1",
      esim: { fi: "Avaimet saa vastaanotosta.", en: "You get the keys at reception." },
    },
  ],
  synonyymit: [
    { fi: "majatalo", en: "inn, guesthouse" },
    { fi: "majapaikka", en: "lodging, place to stay" },
  ],
  esimerkit: {
    A2: { fi: "Yövymme hotellissa kaksi yötä.", en: "We're staying at the hotel for two nights." },
    B1: { fi: "Hotelli sijaitsee aivan rannan vieressä.", en: "The hotel is located right by the beach." },
    B2: {
      fi: "Varasin hotellin etukäteen, koska kaupunki oli täynnä turisteja.",
      en: "I booked the hotel in advance because the city was full of tourists.",
    },
  },
  updatedAt: "2026-06-05",
};

export default hotelli;
