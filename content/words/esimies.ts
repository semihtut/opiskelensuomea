import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 42/mies, no gradation, stem esimiehe- (consonant
// stem esimies-). Genitive esimiehen, partitive esimiestä, illative esimieheen, part. pl esimiehiä.
const esimies: Word = {
  fi: "esimies",
  slug: "esimies",
  pos: "substantiivi (tyyppi 42/mies)",
  posClass: "substantiivi",
  level: "B1",
  en: "supervisor, manager, boss, superior",
  selitys:
    "Henkilö, joka johtaa ja ohjaa toisten työtä: 'oma esimies', 'puhua esimiehelle'. Tyyppi 42/mies (kuten mies → miehen). Yhdyssana esi- + mies. Sukupuolineutraali vaihtoehto: esihenkilö. Vrt. pomo, johtaja, alainen.",
  kuva: { emoji: "👔", alt: "esimies – henkilö joka johtaa toisten työtä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 42/mies; ei astevaihtelua (vartalo esimiehe-, konsonanttivartalo esimies-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "esimiehen", merkitys: "of the supervisor" },
      { sija: "partitiivi (yks.)", muoto: "esimiestä", merkitys: "supervisor (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "esimieheen", merkitys: "into the supervisor" },
    ],
    huom:
      "Tyyppi 42/mies: vokaalivartalo esimiehe- (esimiehen, esimiehellä, esimiehiä), mutta partitiivi käyttää konsonanttivartaloa esimies- → esimiestä. Sukupuolineutraali synonyymi esihenkilö. Vrt. mies, pomo.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "esimies" },
          { label: "Partitiivi", form: "esimiestä" },
          { label: "Genetiivi", form: "esimiehen" },
          { label: "Inessiivi", form: "esimiehessä" },
          { label: "Elatiivi", form: "esimiehestä" },
          { label: "Illatiivi", form: "esimieheen" },
          { label: "Adessiivi", form: "esimiehellä" },
          { label: "Ablatiivi", form: "esimieheltä" },
          { label: "Allatiivi", form: "esimiehelle" },
          { label: "Essiivi", form: "esimiehenä" },
          { label: "Translatiivi", form: "esimieheksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "esimiehet" },
          { label: "Partitiivi", form: "esimiehiä" },
          { label: "Genetiivi", form: "esimiesten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "esihenkilö",
      en: "supervisor (gender-neutral)",
      taso: "B1",
      esim: { fi: "Esihenkilö hyväksyy lomat.", en: "The supervisor approves the holidays." },
    },
    {
      fi: "alainen",
      en: "subordinate",
      taso: "B2",
      esim: { fi: "Hänellä on kymmenen alaista.", en: "She has ten subordinates." },
    },
  ],
  synonyymit: [
    { fi: "pomo", en: "boss" },
    { fi: "esihenkilö", en: "supervisor" },
  ],
  esimerkit: {
    A2: { fi: "Esimieheni on mukava.", en: "My supervisor is nice." },
    B1: { fi: "Puhuin asiasta esimiehelleni.", en: "I talked about the matter with my supervisor." },
    B2: {
      fi: "Hyvä esimies kuuntelee alaisiaan ja antaa rakentavaa palautetta.",
      en: "A good supervisor listens to their subordinates and gives constructive feedback.",
    },
  },
  updatedAt: "2026-06-07",
};

export default esimies;
