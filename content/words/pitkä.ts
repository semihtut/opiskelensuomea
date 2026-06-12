import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation. IRREGULAR
// comparison: comparative pidempi (~pitempi), superlative pisin (not *pitkempi/*pitkin).
const pitka: Word = {
  fi: "pitkä",
  slug: "pitkä",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "A1",
  en: "long; tall",
  selitys:
    "Mitaltaan suuri (pituus tai kesto). Tyyppi 10, ei astevaihtelua. Vertailu on POIKKEAVA: pidempi, pisin. Vastakohta lyhyt.",
  kuva: { alt: "pitkä – pitkä mitta" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; poikkeava vertailu (pidempi, pisin)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pitkän", merkitys: "of the long" },
      { sija: "partitiivi (yks.)", muoto: "pitkää", merkitys: "long (partitive)" },
      { sija: "komparatiivi", muoto: "pidempi", merkitys: "longer" },
    ],
    huom:
      "Vertailu on poikkeava: komparatiivi pidempi (~pitempi), superlatiivi pisin. Muodot *pitkempi/*pitkin EIVÄT ole oikein. Vastakohta lyhyt (myös poikkeava).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "pitkä" },
          { label: "Partitiivi", form: "pitkää" },
          { label: "Genetiivi", form: "pitkän" },
          { label: "Inessiivi", form: "pitkässä" },
          { label: "Illatiivi", form: "pitkään" },
          { label: "Adessiivi", form: "pitkällä" },
          { label: "Essiivi", form: "pitkänä" },
          { label: "Translatiivi", form: "pitkäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pitkät" },
          { label: "Partitiivi", form: "pitkiä" },
          { label: "Genetiivi", form: "pitkien" },
        ],
      },
      {
        title: "Vertailu (poikkeava)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "pidempi" },
          { label: "Komparatiivi (gen.)", form: "pidemmän" },
          { label: "Komparatiivi (part.)", form: "pidempää" },
          { label: "Superlatiivi (nom.)", form: "pisin" },
          { label: "Superlatiivi (gen.)", form: "pisimmän" },
          { label: "Superlatiivi (part.)", form: "pisintä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pituus",
      en: "length, height",
      taso: "B1",
      esim: { fi: "Mikä on huoneen pituus?", en: "What is the length of the room?" },
    },
    {
      fi: "pidentää",
      en: "to lengthen, extend",
      taso: "B2",
      esim: { fi: "Pidensimme lomaa viikolla.", en: "We extended the holiday by a week." },
    },
    {
      fi: "pitkästyä",
      en: "to get bored",
      taso: "B2",
      esim: { fi: "Pitkästyin pitkän luennon aikana.", en: "I got bored during the long lecture." },
    },
  ],
  synonyymit: [
    { fi: "pitkäkestoinen", en: "long-lasting" },
    { fi: "korkea", en: "tall (of height)" },
  ],
  esimerkit: {
    A2: { fi: "Matka oli pitkä.", en: "The journey was long." },
    B1: { fi: "Hän on pidempi kuin minä.", en: "He is taller than me." },
    B2: {
      fi: "Tämä on vuoden pisin päivä.",
      en: "This is the longest day of the year.",
    },
  },
  updatedAt: "2026-06-05",
};

export default pitka;
