import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation. Genitive junan,
// partitive junaa, illative junaan, partitive pl junia.
const juna: Word = {
  fi: "juna",
  slug: "juna",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "train",
  selitys:
    "Raiteilla kulkeva ajoneuvojono. Tyyppi 9, ei astevaihtelua. Monikon partitiivi junia.",
  kuva: { alt: "juna – raiteilla kulkeva juna" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "junan", merkitys: "of the train" },
      { sija: "partitiivi (yks.)", muoto: "junaa", merkitys: "train (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "junia", merkitys: "trains (partitive pl.)" },
    ],
    huom:
      "Kulkuvälineenä adessiivissa: 'Menen junalla.' 'Junaan' (illatiivi) = onto/into the train; 'junassa' = on the train.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "juna" },
          { label: "Partitiivi", form: "junaa" },
          { label: "Genetiivi", form: "junan" },
          { label: "Inessiivi", form: "junassa" },
          { label: "Elatiivi", form: "junasta" },
          { label: "Illatiivi", form: "junaan" },
          { label: "Adessiivi", form: "junalla" },
          { label: "Ablatiivi", form: "junalta" },
          { label: "Allatiivi", form: "junalle" },
          { label: "Essiivi", form: "junana" },
          { label: "Translatiivi", form: "junaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "junat" },
          { label: "Partitiivi", form: "junia" },
          { label: "Genetiivi", form: "junien" },
          { label: "Inessiivi", form: "junissa" },
          { label: "Illatiivi", form: "juniin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "junarata",
      en: "railway, railroad",
      taso: "B1",
      esim: { fi: "Junarata kulkee metsän halki.", en: "The railway runs through the forest." },
    },
    {
      fi: "junalippu",
      en: "train ticket",
      taso: "A2",
      esim: { fi: "Ostin junalipun netistä.", en: "I bought a train ticket online." },
    },
    {
      fi: "tavarajuna",
      en: "freight train",
      taso: "B1",
      esim: { fi: "Pitkä tavarajuna kulki ohi.", en: "A long freight train passed by." },
    },
  ],
  synonyymit: [
    { fi: "raitiovaunu", en: "tram (related rail vehicle)" },
    { fi: "metro", en: "metro, subway" },
  ],
  esimerkit: {
    A2: { fi: "Juna lähtee kello kahdeksan.", en: "The train leaves at eight." },
    B1: { fi: "Matkustimme junalla Tampereelle.", en: "We traveled to Tampere by train." },
    B2: {
      fi: "Juna oli myöhässä, joten myöhästyin kokouksesta.",
      en: "The train was late, so I missed the meeting.",
    },
  },
  updatedAt: "2026-06-04",
};

export default juna;
