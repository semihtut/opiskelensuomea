import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, t:d gradation, stem löytö- ~ löydö-.
// Genitive löydön, partitive löytöä, partitive pl löytöjä.
const loyto: Word = {
  fi: "löytö",
  slug: "löytö",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "discovery, find; bargain",
  selitys:
    "Se, mikä löydetään; myös edullinen osto: 'tehdä löytö'. Tyyppi 1/valo, astevaihtelu t:d (löytö → löydön). Johdettu verbistä löytää. Vrt. löytää, keksintö, aarre.",
  kuva: { emoji: "💎", alt: "löytö – se mikä löydetään, tai edullinen osto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu t:d (vartalo löydö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "löydön", merkitys: "of the discovery" },
      { sija: "partitiivi (yks.)", muoto: "löytöä", merkitys: "discovery (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "löytöjä", merkitys: "discoveries (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu t:d: nominatiivi löytö (vahva t), genetiivi löydön (heikko d). Partitiivin monikko löytöjä. Johdettu verbistä löytää. 'Tehdä löytö' = to make a find; arkikielessä myös 'hyvä löytö' = a bargain.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "löytö" },
          { label: "Partitiivi", form: "löytöä" },
          { label: "Genetiivi", form: "löydön" },
          { label: "Inessiivi", form: "löydössä" },
          { label: "Elatiivi", form: "löydöstä" },
          { label: "Illatiivi", form: "löytöön" },
          { label: "Adessiivi", form: "löydöllä" },
          { label: "Ablatiivi", form: "löydöltä" },
          { label: "Allatiivi", form: "löydölle" },
          { label: "Essiivi", form: "löytönä" },
          { label: "Translatiivi", form: "löydöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "löydöt" },
          { label: "Partitiivi", form: "löytöjä" },
          { label: "Genetiivi", form: "löytöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "löytää",
      en: "to find, discover",
      taso: "A2",
      esim: { fi: "Löysin avaimet.", en: "I found the keys." },
    },
    {
      fi: "löydös",
      en: "finding (e.g. medical, archaeological)",
      taso: "B2",
      esim: { fi: "Arkeologinen löydös oli arvokas.", en: "The archaeological finding was valuable." },
    },
  ],
  synonyymit: [
    { fi: "keksintö", en: "invention, discovery" },
    { fi: "aarre", en: "treasure" },
  ],
  esimerkit: {
    A2: { fi: "Se oli hieno löytö.", en: "It was a great find." },
    B1: { fi: "Tutkijat tekivät tärkeän löydön.", en: "The researchers made an important discovery." },
    B2: {
      fi: "Sattumalta tehty löytö johti kokonaan uuteen tutkimussuuntaan.",
      en: "A chance discovery led to a completely new line of research.",
    },
  },
  updatedAt: "2026-06-07",
};

export default loyto;
