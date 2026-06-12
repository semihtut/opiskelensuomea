import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, NO gradation (the tk cluster
// does not gradate). Genitive matkan, partitive matkaa, illative matkaan,
// partitive pl matkoja, genitive pl matkojen.
const matka: Word = {
  fi: "matka",
  slug: "matka",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "trip, journey; distance",
  selitys:
    "Siirtyminen paikasta toiseen tai sen pituus. Tyyppi 9, EI astevaihtelua (matka → matkan). Myös 'matkalla' = on the way.",
  kuva: { alt: "matka – matkalaukku ja reitti" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "matkan", merkitys: "of the trip" },
      { sija: "partitiivi (yks.)", muoto: "matkaa", merkitys: "trip (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "matkoja", merkitys: "trips (partitive pl.)" },
    ],
    huom:
      "EI astevaihtelua: matka → matkan (tk säilyy). 'Matkalla' = on the way / on a trip; 'Hyvää matkaa!' = Have a good trip!",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "matka" },
          { label: "Partitiivi", form: "matkaa" },
          { label: "Genetiivi", form: "matkan" },
          { label: "Inessiivi", form: "matkassa" },
          { label: "Elatiivi", form: "matkasta" },
          { label: "Illatiivi", form: "matkaan" },
          { label: "Adessiivi", form: "matkalla" },
          { label: "Ablatiivi", form: "matkalta" },
          { label: "Allatiivi", form: "matkalle" },
          { label: "Essiivi", form: "matkana" },
          { label: "Translatiivi", form: "matkaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "matkat" },
          { label: "Partitiivi", form: "matkoja" },
          { label: "Genetiivi", form: "matkojen" },
          { label: "Inessiivi", form: "matkoissa" },
          { label: "Illatiivi", form: "matkoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "matkustaa",
      en: "to travel",
      taso: "A2",
      esim: { fi: "Matkustamme ulkomaille kesällä.", en: "We travel abroad in the summer." },
    },
    {
      fi: "matkalaukku",
      en: "suitcase",
      taso: "A2",
      esim: { fi: "Pakkasin matkalaukun illalla.", en: "I packed the suitcase in the evening." },
    },
    {
      fi: "matkailija",
      en: "traveler, tourist",
      taso: "B1",
      esim: { fi: "Kaupunki on täynnä matkailijoita.", en: "The city is full of tourists." },
    },
  ],
  synonyymit: [
    { fi: "reissu", en: "trip (colloquial)" },
    { fi: "retki", en: "excursion, outing" },
  ],
  esimerkit: {
    A2: { fi: "Hyvää matkaa!", en: "Have a good trip!" },
    B1: { fi: "Matka kestää kolme tuntia.", en: "The journey takes three hours." },
    B2: {
      fi: "Pitkän matkan jälkeen olimme kaikki väsyneitä.",
      en: "After the long journey we were all tired.",
    },
  },
  updatedAt: "2026-06-04",
};

export default matka;
