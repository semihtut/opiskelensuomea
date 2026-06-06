import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem yhteyde-.
// Genitive yhteyden, partitive yhteyttä, illative yhteyteen, partitive pl yhteyksiä.
const yhteys: Word = {
  fi: "yhteys",
  slug: "yhteys",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "connection, contact, link",
  selitys:
    "Yhteys kahden asian tai ihmisen välillä; myös nettiyhteys: 'ottaa yhteyttä'. Tyyppi 40, astevaihtelu t:d (yhteys → yhteyden). Partitiivin monikko yhteyksiä. Johdettu sanasta yksi/yhte-.",
  kuva: { emoji: "🔗", alt: "yhteys – yhteys kahden asian välillä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (vartalo yhteyde-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "yhteyden", merkitys: "of the connection" },
      { sija: "partitiivi (yks.)", muoto: "yhteyttä", merkitys: "connection (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "yhteyksiä", merkitys: "connections (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40 (-ys): genetiivi -yden, partitiivi -yttä, partitiivin monikko -yksiä. 'Ottaa yhteyttä' = to make contact, 'olla yhteydessä' = to be in touch. Vrt. nettiyhteys = internet connection.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "yhteys" },
          { label: "Partitiivi", form: "yhteyttä" },
          { label: "Genetiivi", form: "yhteyden" },
          { label: "Inessiivi", form: "yhteydessä" },
          { label: "Elatiivi", form: "yhteydestä" },
          { label: "Illatiivi", form: "yhteyteen" },
          { label: "Adessiivi", form: "yhteydellä" },
          { label: "Ablatiivi", form: "yhteydeltä" },
          { label: "Allatiivi", form: "yhteydelle" },
          { label: "Essiivi", form: "yhteytenä" },
          { label: "Translatiivi", form: "yhteydeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "yhteydet" },
          { label: "Partitiivi", form: "yhteyksiä" },
          { label: "Genetiivi", form: "yhteyksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nettiyhteys",
      en: "internet connection",
      taso: "B1",
      esim: { fi: "Nettiyhteys on hidas.", en: "The internet connection is slow." },
    },
    {
      fi: "yhteyshenkilö",
      en: "contact person",
      taso: "B2",
      esim: { fi: "Kuka on projektin yhteyshenkilö?", en: "Who is the project's contact person?" },
    },
    {
      fi: "yhdistää",
      en: "to connect, combine",
      taso: "B1",
      esim: { fi: "Silta yhdistää kaksi rantaa.", en: "The bridge connects two shores." },
    },
  ],
  synonyymit: [
    { fi: "kontakti", en: "contact" },
    { fi: "kytkös", en: "link, tie" },
  ],
  esimerkit: {
    A2: { fi: "Otan sinuun yhteyttä huomenna.", en: "I'll contact you tomorrow." },
    B1: { fi: "Yhteys katkesi kesken puhelun.", en: "The connection cut off during the call." },
    B2: {
      fi: "Tutkijat löysivät selvän yhteyden unen ja terveyden välillä.",
      en: "Researchers found a clear connection between sleep and health.",
    },
  },
  updatedAt: "2026-06-07",
};

export default yhteys;
