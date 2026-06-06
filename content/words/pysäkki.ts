import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, kk:k gradation, stem pysäkki- ~ pysäki-.
// Genitive pysäkin, partitive pysäkkiä, illative pysäkkiin, partitive pl pysäkkejä.
const pysäkki: Word = {
  fi: "pysäkki",
  slug: "pysäkki",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "(bus/tram) stop",
  selitys:
    "Paikka, jossa bussi tai ratikka pysähtyy: 'nousta bussiin pysäkillä'. Tyyppi 5, astevaihtelu kk:k (pysäkki → pysäkin). Partitiivin monikko pysäkkejä. Johdettu verbistä pysähtyä. Vrt. bussipysäkki.",
  kuva: { emoji: "🚏", alt: "pysäkki – paikka, jossa bussi pysähtyy" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu kk:k (pysäkki ↔ pysäki-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pysäkin", merkitys: "of the stop" },
      { sija: "partitiivi (yks.)", muoto: "pysäkkiä", merkitys: "stop (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pysäkkejä", merkitys: "stops (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa kk → k: genetiivi pysäkin, adessiivi pysäkillä. Vahva aste kk säilyy partitiivissa pysäkkiä ja monikossa pysäkkejä. 'Pysäkillä' = at the stop (adessiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pysäkki" },
          { label: "Partitiivi", form: "pysäkkiä" },
          { label: "Genetiivi", form: "pysäkin" },
          { label: "Inessiivi", form: "pysäkissä" },
          { label: "Elatiivi", form: "pysäkistä" },
          { label: "Illatiivi", form: "pysäkkiin" },
          { label: "Adessiivi", form: "pysäkillä" },
          { label: "Ablatiivi", form: "pysäkiltä" },
          { label: "Allatiivi", form: "pysäkille" },
          { label: "Essiivi", form: "pysäkkinä" },
          { label: "Translatiivi", form: "pysäkiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pysäkit" },
          { label: "Partitiivi", form: "pysäkkejä" },
          { label: "Genetiivi", form: "pysäkkien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "bussipysäkki",
      en: "bus stop",
      taso: "A2",
      esim: { fi: "Bussipysäkki on talon edessä.", en: "The bus stop is in front of the house." },
    },
    {
      fi: "päätepysäkki",
      en: "terminal stop",
      taso: "B2",
      esim: { fi: "Jäin pois päätepysäkillä.", en: "I got off at the terminal stop." },
    },
    {
      fi: "pysäkkikatos",
      en: "bus shelter",
      taso: "B2",
      esim: { fi: "Odotin sateessa pysäkkikatoksessa.", en: "I waited in the rain at the bus shelter." },
    },
  ],
  synonyymit: [
    { fi: "bussipysäkki", en: "bus stop" },
    { fi: "asema", en: "station" },
  ],
  esimerkit: {
    A2: { fi: "Nousen bussiin seuraavalla pysäkillä.", en: "I'll get on the bus at the next stop." },
    B1: { fi: "Bussi ei pysähtynyt pysäkille.", en: "The bus didn't stop at the stop." },
    B2: {
      fi: "Uusi pysäkki rakennettiin lähemmäs koulua.",
      en: "The new stop was built closer to the school.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pysäkki;
