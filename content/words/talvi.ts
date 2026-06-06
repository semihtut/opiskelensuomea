import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation, stem talve- ~ talv-.
// Genitive talven, partitive talvea, illative talveen, partitive pl talvia.
const talvi: Word = {
  fi: "talvi",
  slug: "talvi",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "A2",
  en: "winter",
  selitys:
    "Vuodenaika, kylmin aika syksyn ja kevään välissä: 'kylmä talvi'. Tyyppi 7, ei astevaihtelua. Partitiivin monikko talvia. 'Talvella' = in winter (adessiivi). Vastakohta kesä. Vrt. talvinen, talviurheilu.",
  kuva: { emoji: "❄️", alt: "talvi – kylmin vuodenaika" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "talven", merkitys: "of the winter" },
      { sija: "partitiivi (yks.)", muoto: "talvea", merkitys: "winter (partitive)" },
      { sija: "adessiivi (yks.)", muoto: "talvella", merkitys: "in winter" },
    ],
    huom:
      "Tyyppi 7, ei astevaihtelua. Partitiivin monikko talvia. 'Talvella' = in winter; 'viime talvena' = last winter (essiivi). Vrt. talvinen = wintry, talviurheilu = winter sports.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "talvi" },
          { label: "Partitiivi", form: "talvea" },
          { label: "Genetiivi", form: "talven" },
          { label: "Inessiivi", form: "talvessa" },
          { label: "Elatiivi", form: "talvesta" },
          { label: "Illatiivi", form: "talveen" },
          { label: "Adessiivi", form: "talvella" },
          { label: "Ablatiivi", form: "talvelta" },
          { label: "Allatiivi", form: "talvelle" },
          { label: "Essiivi", form: "talvena" },
          { label: "Translatiivi", form: "talveksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "talvet" },
          { label: "Partitiivi", form: "talvia" },
          { label: "Genetiivi", form: "talvien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "talvinen",
      en: "wintry",
      taso: "B1",
      esim: { fi: "Maisema oli talvinen.", en: "The landscape was wintry." },
    },
    {
      fi: "talviurheilu",
      en: "winter sports",
      taso: "B2",
      esim: { fi: "Hiihto on suosittua talviurheilua.", en: "Skiing is a popular winter sport." },
    },
    {
      fi: "talvirengas",
      en: "winter tyre",
      taso: "B2",
      esim: { fi: "Vaihdoin talvirenkaat autoon.", en: "I changed the winter tyres on the car." },
    },
  ],
  synonyymit: [
    { fi: "talviaika", en: "wintertime" },
  ],
  esimerkit: {
    A2: { fi: "Talvella sataa lunta.", en: "In winter it snows." },
    B1: { fi: "Suomen talvi on pitkä ja pimeä.", en: "Finland's winter is long and dark." },
    B2: {
      fi: "Ankaran talven jälkeen kevät tuntuu erityisen ihanalta.",
      en: "After a harsh winter, spring feels especially wonderful.",
    },
  },
  updatedAt: "2026-06-07",
};

export default talvi;
