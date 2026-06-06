import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (kenttä): Kotus type 10/koira, tt:t gradation, stem lentokenttä- ~ lentokentä-.
// Genitive lentokentän, partitive lentokenttää, illative lentokenttään, partitive pl lentokenttiä.
const lentokenttä: Word = {
  fi: "lentokenttä",
  slug: "lentokenttä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "airport",
  selitys:
    "Alue, jolta lentokoneet lähtevät ja jonne ne laskeutuvat: 'mennä lentokentälle'. Yhdyssana lento + kenttä. Tyyppi 10, astevaihtelu tt:t (lentokenttä → lentokentän). Partitiivin monikko lentokenttiä.",
  kuva: { emoji: "🛫", alt: "lentokenttä – alue, jolta lentokoneet lähtevät" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; astevaihtelu tt:t (lentokenttä ↔ lentokentä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lentokentän", merkitys: "of the airport" },
      { sija: "partitiivi (yks.)", muoto: "lentokenttää", merkitys: "airport (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lentokenttiä", merkitys: "airports (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa tt → t: genetiivi lentokentän, adessiivi lentokentällä. Vahva aste tt säilyy partitiivissa lentokenttää ja monikossa lentokenttiä. Synonyymi lentoasema. Vrt. kenttä = field.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lentokenttä" },
          { label: "Partitiivi", form: "lentokenttää" },
          { label: "Genetiivi", form: "lentokentän" },
          { label: "Inessiivi", form: "lentokentässä" },
          { label: "Elatiivi", form: "lentokentästä" },
          { label: "Illatiivi", form: "lentokenttään" },
          { label: "Adessiivi", form: "lentokentällä" },
          { label: "Ablatiivi", form: "lentokentältä" },
          { label: "Allatiivi", form: "lentokentälle" },
          { label: "Essiivi", form: "lentokenttänä" },
          { label: "Translatiivi", form: "lentokentäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lentokentät" },
          { label: "Partitiivi", form: "lentokenttiä" },
          { label: "Genetiivi", form: "lentokenttien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lentoasema",
      en: "airport (formal synonym)",
      taso: "B1",
      esim: { fi: "Helsinki-Vantaan lentoasema on suuri.", en: "Helsinki-Vantaa Airport is large." },
    },
    {
      fi: "lentokone",
      en: "airplane",
      taso: "A2",
      esim: { fi: "Lentokone nousi ajoissa.", en: "The plane took off on time." },
    },
    {
      fi: "kenttä",
      en: "field, ground",
      taso: "B1",
      esim: { fi: "Jalkapallokenttä oli märkä.", en: "The football field was wet." },
    },
  ],
  synonyymit: [
    { fi: "lentoasema", en: "airport" },
    { fi: "kenttä", en: "airfield (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Menemme lentokentälle taksilla.", en: "We're going to the airport by taxi." },
    B1: { fi: "Lentokentällä oli paljon matkustajia.", en: "There were many passengers at the airport." },
    B2: {
      fi: "Lennon peruuntuessa jouduimme odottamaan lentokentällä koko yön.",
      en: "When the flight was cancelled, we had to wait at the airport all night.",
    },
  },
  updatedAt: "2026-06-06",
};

export default lentokenttä;
