import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem jännitykse-.
// Genitive jännityksen, partitive jännitystä, partitive pl jännityksiä.
const jannitys: Word = {
  fi: "jännitys",
  slug: "jännitys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "excitement, suspense, tension; (electrical) voltage",
  selitys:
    "Innostunut tai pelonsekainen odotus; myös fyysinen kireys tai sähköjännite: 'jännitys ennen koetta'. Tyyppi 39/vastaus, ei astevaihtelua (-ys → -ykse-). Johdettu verbistä jännittää. Vrt. jännittää, jännittävä.",
  kuva: { emoji: "😬", alt: "jännitys – innostunut tai pelonsekainen odotus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo jännitykse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "jännityksen", merkitys: "of the excitement" },
      { sija: "partitiivi (yks.)", muoto: "jännitystä", merkitys: "excitement (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "jännityksiä", merkitys: "tensions (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-ys): genetiivi -ykse-n, partitiivi -ys-tä, partitiivin monikko -yksiä. Johdettu verbistä jännittää. Merkitykset: tunne (suspense), lihasjännitys, sähköjännite (voltage). Vrt. jännittävä = exciting.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "jännitys" },
          { label: "Partitiivi", form: "jännitystä" },
          { label: "Genetiivi", form: "jännityksen" },
          { label: "Inessiivi", form: "jännityksessä" },
          { label: "Elatiivi", form: "jännityksestä" },
          { label: "Illatiivi", form: "jännitykseen" },
          { label: "Adessiivi", form: "jännityksellä" },
          { label: "Ablatiivi", form: "jännitykseltä" },
          { label: "Allatiivi", form: "jännitykselle" },
          { label: "Essiivi", form: "jännityksenä" },
          { label: "Translatiivi", form: "jännitykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "jännitykset" },
          { label: "Partitiivi", form: "jännityksiä" },
          { label: "Genetiivi", form: "jännityksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jännittää",
      en: "to be nervous; to excite; to tense",
      taso: "B1",
      esim: { fi: "Minua jännittää.", en: "I'm nervous." },
    },
    {
      fi: "jännittävä",
      en: "exciting, thrilling",
      taso: "B1",
      esim: { fi: "Elokuva oli jännittävä.", en: "The film was exciting." },
    },
  ],
  synonyymit: [
    { fi: "kireys", en: "tension, tightness" },
    { fi: "odotus", en: "anticipation" },
  ],
  esimerkit: {
    A2: { fi: "Tunnen jännitystä.", en: "I feel excitement." },
    B1: { fi: "Ottelussa oli kova jännitys loppuun asti.", en: "There was great suspense in the match until the end." },
    B2: {
      fi: "Jännitys ilmassa oli käsin kosketeltavaa ennen tulosten julkistamista.",
      en: "The tension in the air was palpable before the results were announced.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jannitys;
