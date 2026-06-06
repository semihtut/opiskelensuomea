import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem vessa-.
// Genitive vessan, partitive vessaa, illative vessaan, partitive pl vessoja.
const vessa: Word = {
  fi: "vessa",
  slug: "vessa",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "toilet, bathroom (WC)",
  selitys:
    "Huone tai paikka, jossa on wc: 'käydä vessassa'. Tyyppi 9, ei astevaihtelua. Partitiivin monikko vessoja. Lyhenne sanasta WC; nykyään yleiskielinen. Vrt. wc, käymälä (virallisempi).",
  kuva: { emoji: "🚽", alt: "vessa – huone, jossa on wc" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vessan", merkitys: "of the toilet" },
      { sija: "partitiivi (yks.)", muoto: "vessaa", merkitys: "toilet (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vessoja", merkitys: "toilets (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9, ei astevaihtelua. Partitiivin monikossa a → o: vessoja. 'Käydä vessassa' = to go to the toilet. Lähtöisin lyhenteestä WC, nyt yleiskielinen. Vrt. käymälä = lavatory (muodollinen).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vessa" },
          { label: "Partitiivi", form: "vessaa" },
          { label: "Genetiivi", form: "vessan" },
          { label: "Inessiivi", form: "vessassa" },
          { label: "Elatiivi", form: "vessasta" },
          { label: "Illatiivi", form: "vessaan" },
          { label: "Adessiivi", form: "vessalla" },
          { label: "Ablatiivi", form: "vessalta" },
          { label: "Allatiivi", form: "vessalle" },
          { label: "Essiivi", form: "vessana" },
          { label: "Translatiivi", form: "vessaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vessat" },
          { label: "Partitiivi", form: "vessoja" },
          { label: "Genetiivi", form: "vessojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vessapaperi",
      en: "toilet paper",
      taso: "A2",
      esim: { fi: "Vessapaperi loppui.", en: "The toilet paper ran out." },
    },
    {
      fi: "wc",
      en: "WC, toilet",
      taso: "A2",
      esim: { fi: "Missä wc on?", en: "Where is the toilet?" },
    },
    {
      fi: "käymälä",
      en: "lavatory (formal)",
      taso: "B2",
      esim: { fi: "Yleinen käymälä on aukion laidalla.", en: "The public lavatory is at the edge of the square." },
    },
  ],
  synonyymit: [
    { fi: "wc", en: "WC" },
    { fi: "käymälä", en: "lavatory" },
  ],
  esimerkit: {
    A2: { fi: "Voinko käydä vessassa?", en: "May I go to the toilet?" },
    B1: { fi: "Vessa on käytävän päässä.", en: "The toilet is at the end of the corridor." },
    B2: {
      fi: "Ravintolan vessat olivat siistit ja hyvin merkityt.",
      en: "The restaurant's toilets were clean and well signposted.",
    },
  },
  updatedAt: "2026-06-06",
};

export default vessa;
