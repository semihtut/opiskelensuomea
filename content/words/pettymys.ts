import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem pettymykse-.
// Genitive pettymyksen, partitive pettymystä, partitive pl pettymyksiä.
const pettymys: Word = {
  fi: "pettymys",
  slug: "pettymys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "disappointment",
  selitys:
    "Paha mieli, kun odotukset eivät täyty: 'suuri pettymys'. Tyyppi 39/vastaus, ei astevaihtelua (-ys → -ykse-). Johdettu verbistä pettyä. Vrt. pettyä, pettää, helpotus (vastakkainen tunne).",
  kuva: { alt: "pettymys – paha mieli kun odotukset eivät täyty" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo pettymykse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pettymyksen", merkitys: "of the disappointment" },
      { sija: "partitiivi (yks.)", muoto: "pettymystä", merkitys: "disappointment (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pettymyksiä", merkitys: "disappointments (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-ys): genetiivi -ykse-n, partitiivi -ys-tä, partitiivin monikko -yksiä. Johdettu verbistä pettyä. 'Tuottaa pettymys' = to cause disappointment. Vrt. pettyä = to be disappointed.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pettymys" },
          { label: "Partitiivi", form: "pettymystä" },
          { label: "Genetiivi", form: "pettymyksen" },
          { label: "Inessiivi", form: "pettymyksessä" },
          { label: "Elatiivi", form: "pettymyksestä" },
          { label: "Illatiivi", form: "pettymykseen" },
          { label: "Adessiivi", form: "pettymyksellä" },
          { label: "Ablatiivi", form: "pettymykseltä" },
          { label: "Allatiivi", form: "pettymykselle" },
          { label: "Essiivi", form: "pettymyksenä" },
          { label: "Translatiivi", form: "pettymykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pettymykset" },
          { label: "Partitiivi", form: "pettymyksiä" },
          { label: "Genetiivi", form: "pettymyksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pettyä",
      en: "to be disappointed",
      taso: "B1",
      esim: { fi: "Petyin tulokseen.", en: "I was disappointed with the result." },
    },
    {
      fi: "pettynyt",
      en: "disappointed",
      taso: "B1",
      esim: { fi: "Hän näytti pettyneeltä.", en: "He looked disappointed." },
    },
  ],
  synonyymit: [
    { fi: "mielipaha", en: "displeasure" },
    { fi: "harmi", en: "annoyance, pity" },
  ],
  esimerkit: {
    A2: { fi: "Se oli iso pettymys.", en: "It was a big disappointment." },
    B1: { fi: "Tappio oli pettymys koko joukkueelle.", en: "The loss was a disappointment for the whole team." },
    B2: {
      fi: "Pettymyksistä huolimatta hän ei menettänyt toivoaan.",
      en: "Despite the disappointments he did not lose hope.",
    },
  },
  updatedAt: "2026-06-07",
};

export default pettymys;
