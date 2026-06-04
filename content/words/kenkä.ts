import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, nk:ng gradation. Genitive
// kengän, partitive kenkää, illative kenkään, partitive pl kenkiä, nom pl kengät.
const kenka: Word = {
  fi: "kenkä",
  slug: "kenkä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "shoe",
  selitys:
    "Jalkaan puettava jalkine. Tyyppi 10, astevaihtelu nk:ng (kenkä → kengän). Pari yleensä monikossa: kengät.",
  kuva: { emoji: "👟", alt: "kenkä – kenkä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; astevaihtelu nk:ng",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kengän", merkitys: "of the shoe" },
      { sija: "partitiivi (yks.)", muoto: "kenkää", merkitys: "shoe (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kenkiä", merkitys: "shoes (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa nk → ng: kengän, kengässä, kengät. Vahva aste säilyy: kenkää, kenkään, kenkiä. Arjessa pari: kengät.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kenkä" },
          { label: "Partitiivi", form: "kenkää" },
          { label: "Genetiivi", form: "kengän" },
          { label: "Inessiivi", form: "kengässä" },
          { label: "Elatiivi", form: "kengästä" },
          { label: "Illatiivi", form: "kenkään" },
          { label: "Adessiivi", form: "kengällä" },
          { label: "Ablatiivi", form: "kengältä" },
          { label: "Allatiivi", form: "kengälle" },
          { label: "Essiivi", form: "kenkänä" },
          { label: "Translatiivi", form: "kengäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kengät" },
          { label: "Partitiivi", form: "kenkiä" },
          { label: "Genetiivi", form: "kenkien" },
          { label: "Inessiivi", form: "kengissä" },
          { label: "Illatiivi", form: "kenkiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kengännauha",
      en: "shoelace",
      taso: "B1",
      esim: { fi: "Solmi kengännauhat.", en: "Tie your shoelaces." },
    },
    {
      fi: "urheilukenkä",
      en: "sports shoe, sneaker",
      taso: "A2",
      esim: { fi: "Ostin uudet urheilukengät.", en: "I bought new sneakers." },
    },
    {
      fi: "kengittää",
      en: "to shoe (a horse)",
      taso: "B2",
      esim: { fi: "Seppä kengitti hevosen.", en: "The smith shod the horse." },
    },
  ],
  synonyymit: [
    { fi: "jalkine", en: "footwear" },
    { fi: "saapas", en: "boot" },
  ],
  esimerkit: {
    A2: { fi: "Nämä kengät ovat liian pienet.", en: "These shoes are too small." },
    B1: { fi: "Riisu kengät ovella.", en: "Take off your shoes at the door." },
    B2: {
      fi: "Etsin mukavaa kenkää, jolla voi kävellä koko päivän.",
      en: "I'm looking for a comfortable shoe I can walk in all day.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kenka;
