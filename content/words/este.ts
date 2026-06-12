import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem estee-.
// Genitive esteen, partitive estettä, illative esteeseen, partitive pl esteitä.
const este: Word = {
  fi: "este",
  slug: "este",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "obstacle, barrier, impediment",
  selitys:
    "Asia, joka estää tai vaikeuttaa etenemistä tai tekemistä: 'voittaa esteet'. Tyyppi 48/hame, ei astevaihtelua; vartalo estee-. Johdettu verbistä estää. Vrt. estää, este-este (urheilussa hurdle).",
  kuva: { alt: "este – asia, joka estää etenemistä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo estee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "esteen", merkitys: "of the obstacle" },
      { sija: "partitiivi (yks.)", muoto: "estettä", merkitys: "obstacle (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "esteitä", merkitys: "obstacles (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48 (-e): nominatiivi este, muut muodot vartalosta estee- (esteen, esteeseen), partitiivi estettä. Ei astevaihtelua. Johdettu verbistä estää. 'Esteenä jollekin' = an obstacle to sth.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "este" },
          { label: "Partitiivi", form: "estettä" },
          { label: "Genetiivi", form: "esteen" },
          { label: "Inessiivi", form: "esteessä" },
          { label: "Elatiivi", form: "esteestä" },
          { label: "Illatiivi", form: "esteeseen" },
          { label: "Adessiivi", form: "esteellä" },
          { label: "Ablatiivi", form: "esteeltä" },
          { label: "Allatiivi", form: "esteelle" },
          { label: "Essiivi", form: "esteenä" },
          { label: "Translatiivi", form: "esteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "esteet" },
          { label: "Partitiivi", form: "esteitä" },
          { label: "Genetiivi", form: "esteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "estää",
      en: "to prevent, block",
      taso: "B1",
      esim: { fi: "Sade esti pelin.", en: "The rain prevented the game." },
    },
    {
      fi: "esteetön",
      en: "barrier-free, accessible",
      taso: "B2",
      esim: { fi: "Sisäänkäynti on esteetön.", en: "The entrance is accessible." },
    },
  ],
  synonyymit: [
    { fi: "haitta", en: "drawback, hindrance" },
    { fi: "vaikeus", en: "difficulty" },
  ],
  esimerkit: {
    A2: { fi: "Tiellä oli este.", en: "There was an obstacle on the road." },
    B1: { fi: "Kieli ei ole este oppimiselle.", en: "Language is not an obstacle to learning." },
    B2: {
      fi: "Suurin este hankkeelle oli rahoituksen puute.",
      en: "The biggest obstacle to the project was the lack of funding.",
    },
  },
  updatedAt: "2026-06-07",
};

export default este;
