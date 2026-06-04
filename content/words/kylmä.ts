import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation. Genitive kylmän,
// partitive kylmää, illative kylmään, partitive pl kylmiä. Comp kylmempi, superl kylmin.
const kylma: Word = {
  fi: "kylmä",
  slug: "kylmä",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "A1",
  en: "cold",
  selitys:
    "Matalan lämpötilan; vastakohta lämmin/kuuma. Tyyppi 10, ei astevaihtelua. Myös substantiivina: 'kylmä' = pakkanen/kylmyys.",
  kuva: { emoji: "🥶", alt: "kylmä – kylmä ja jäätävä sää" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kylmän", merkitys: "of the cold" },
      { sija: "partitiivi (yks.)", muoto: "kylmää", merkitys: "cold (partitive)" },
      { sija: "komparatiivi", muoto: "kylmempi", merkitys: "colder" },
    ],
    huom:
      "Ei astevaihtelua. Säästä: 'On kylmä.' = It's cold. Vastakohta lämmin (= warm) ja kuuma (= hot).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "kylmä" },
          { label: "Partitiivi", form: "kylmää" },
          { label: "Genetiivi", form: "kylmän" },
          { label: "Inessiivi", form: "kylmässä" },
          { label: "Illatiivi", form: "kylmään" },
          { label: "Adessiivi", form: "kylmällä" },
          { label: "Essiivi", form: "kylmänä" },
          { label: "Translatiivi", form: "kylmäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kylmät" },
          { label: "Partitiivi", form: "kylmiä" },
          { label: "Genetiivi", form: "kylmien" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "kylmempi" },
          { label: "Komparatiivi (gen.)", form: "kylmemmän" },
          { label: "Komparatiivi (part.)", form: "kylmempää" },
          { label: "Superlatiivi (nom.)", form: "kylmin" },
          { label: "Superlatiivi (gen.)", form: "kylmimmän" },
          { label: "Superlatiivi (part.)", form: "kylmintä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kylmyys",
      en: "coldness",
      taso: "B1",
      esim: { fi: "Talven kylmyys yllätti.", en: "The coldness of winter took us by surprise." },
    },
    {
      fi: "kylmettyä",
      en: "to get cold, catch a chill",
      taso: "B2",
      esim: { fi: "Kylmetyin odottaessa bussia.", en: "I caught a chill waiting for the bus." },
    },
    {
      fi: "viileä",
      en: "cool (less cold)",
      taso: "A2",
      esim: { fi: "Ilta oli mukavan viileä.", en: "The evening was pleasantly cool." },
    },
  ],
  synonyymit: [
    { fi: "viileä", en: "cool" },
    { fi: "jäinen", en: "icy" },
  ],
  esimerkit: {
    A2: { fi: "Ulkona on kylmä.", en: "It's cold outside." },
    B1: { fi: "Juon kylmää vettä.", en: "I drink cold water." },
    B2: {
      fi: "Tämä talvi on ollut kylmempi kuin edellinen.",
      en: "This winter has been colder than the last one.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kylma;
