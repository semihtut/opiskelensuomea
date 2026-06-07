import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem helpotukse-.
// Genitive helpotuksen, partitive helpotusta, partitive pl helpotuksia.
const helpotus: Word = {
  fi: "helpotus",
  slug: "helpotus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "relief; easing",
  selitys:
    "Hyvä tunne, kun huoli tai vaikeus väistyy: 'huokaista helpotuksesta'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu sanasta helppo/helpottaa. Vrt. helpottaa, helppo, pettymys.",
  kuva: { emoji: "😌", alt: "helpotus – hyvä tunne kun huoli väistyy" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo helpotukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "helpotuksen", merkitys: "of the relief" },
      { sija: "partitiivi (yks.)", muoto: "helpotusta", merkitys: "relief (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "helpotuksia", merkitys: "reliefs (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Johdettu verbistä helpottaa. 'Helpotukseksi' = to one's relief. Vrt. helpottaa = to relieve/ease, helppo = easy.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "helpotus" },
          { label: "Partitiivi", form: "helpotusta" },
          { label: "Genetiivi", form: "helpotuksen" },
          { label: "Inessiivi", form: "helpotuksessa" },
          { label: "Elatiivi", form: "helpotuksesta" },
          { label: "Illatiivi", form: "helpotukseen" },
          { label: "Adessiivi", form: "helpotuksella" },
          { label: "Ablatiivi", form: "helpotukselta" },
          { label: "Allatiivi", form: "helpotukselle" },
          { label: "Essiivi", form: "helpotuksena" },
          { label: "Translatiivi", form: "helpotukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "helpotukset" },
          { label: "Partitiivi", form: "helpotuksia" },
          { label: "Genetiivi", form: "helpotuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "helpottaa",
      en: "to ease, relieve; to make easier",
      taso: "B1",
      esim: { fi: "Lääke helpotti kipua.", en: "The medicine eased the pain." },
    },
    {
      fi: "helppo",
      en: "easy",
      taso: "A1",
      esim: { fi: "Tehtävä oli helppo.", en: "The task was easy." },
    },
  ],
  synonyymit: [
    { fi: "huojennus", en: "relief, alleviation" },
    { fi: "kevennys", en: "easing" },
  ],
  esimerkit: {
    A2: { fi: "Tunsin suurta helpotusta.", en: "I felt great relief." },
    B1: { fi: "Helpotukseksi sade lakkasi.", en: "To our relief, the rain stopped." },
    B2: {
      fi: "Koeviikon päätyttyä opiskelijat huokaisivat helpotuksesta.",
      en: "When the exam week ended, the students sighed with relief.",
    },
  },
  updatedAt: "2026-06-07",
};

export default helpotus;
