import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem elokuva-.
// Genitive elokuvan, partitive elokuvaa, illative elokuvaan, partitive pl elokuvia.
const elokuva: Word = {
  fi: "elokuva",
  slug: "elokuva",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "film, movie",
  selitys:
    "Liikkuvista kuvista koostuva teos: 'katsoa elokuva'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko elokuvia. Yhdyssana elo (life) + kuva. Vrt. elokuvateatteri (cinema), leffa (movie, colloquial).",
  kuva: { emoji: "🎬", alt: "elokuva – liikkuvista kuvista koostuva teos" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "elokuvan", merkitys: "of the film" },
      { sija: "partitiivi (yks.)", muoto: "elokuvaa", merkitys: "film (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "elokuvia", merkitys: "films (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikko elokuvia (i-vartalo). 'Mennä elokuviin' = to go to the movies. Vrt. leffa = movie (arkikieli), elokuvaohjaaja = film director.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "elokuva" },
          { label: "Partitiivi", form: "elokuvaa" },
          { label: "Genetiivi", form: "elokuvan" },
          { label: "Inessiivi", form: "elokuvassa" },
          { label: "Elatiivi", form: "elokuvasta" },
          { label: "Illatiivi", form: "elokuvaan" },
          { label: "Adessiivi", form: "elokuvalla" },
          { label: "Ablatiivi", form: "elokuvalta" },
          { label: "Allatiivi", form: "elokuvalle" },
          { label: "Essiivi", form: "elokuvana" },
          { label: "Translatiivi", form: "elokuvaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "elokuvat" },
          { label: "Partitiivi", form: "elokuvia" },
          { label: "Genetiivi", form: "elokuvien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "elokuvateatteri",
      en: "cinema, movie theater",
      taso: "B1",
      esim: { fi: "Elokuvateatteri on aivan keskustassa.", en: "The cinema is right in the city center." },
    },
    {
      fi: "elokuvaohjaaja",
      en: "film director",
      taso: "B2",
      esim: { fi: "Tunnettu elokuvaohjaaja sai palkinnon.", en: "A well-known film director won an award." },
    },
    {
      fi: "lyhytelokuva",
      en: "short film",
      taso: "B2",
      esim: { fi: "Festivaalilla esitettiin lyhytelokuvia.", en: "Short films were shown at the festival." },
    },
  ],
  synonyymit: [
    { fi: "leffa", en: "movie (colloquial)" },
    { fi: "filmi", en: "film" },
  ],
  esimerkit: {
    A2: { fi: "Katsoimme hyvän elokuvan.", en: "We watched a good film." },
    B1: { fi: "Tämä elokuva perustuu tositapahtumiin.", en: "This film is based on true events." },
    B2: {
      fi: "Elokuva kuvaa erään perheen elämää sodan jälkeisinä vuosina.",
      en: "The film depicts a family's life in the post-war years.",
    },
  },
  updatedAt: "2026-06-06",
};

export default elokuva;
