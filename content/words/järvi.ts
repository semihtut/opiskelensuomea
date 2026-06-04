import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation. Genitive järven,
// partitive järveä, illative järveen, partitive pl järviä.
const jarvi: Word = {
  fi: "järvi",
  slug: "järvi",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "A1",
  en: "lake",
  selitys:
    "Maan ympäröimä makean veden allas. Tyyppi 7, ei astevaihtelua. Suomi on tuhansien järvien maa.",
  kuva: { emoji: "🏞️", alt: "järvi – tyyni järvi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "järven", merkitys: "of the lake" },
      { sija: "partitiivi (yks.)", muoto: "järveä", merkitys: "lake (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "järviä", merkitys: "lakes (partitive pl.)" },
    ],
    huom:
      "Vartalo järve-: järven, järveen, järvessä. Monikon partitiivi järviä. 'Järvessä' = in the lake, 'järvellä' = on the lake.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "järvi" },
          { label: "Partitiivi", form: "järveä" },
          { label: "Genetiivi", form: "järven" },
          { label: "Inessiivi", form: "järvessä" },
          { label: "Elatiivi", form: "järvestä" },
          { label: "Illatiivi", form: "järveen" },
          { label: "Adessiivi", form: "järvellä" },
          { label: "Ablatiivi", form: "järveltä" },
          { label: "Allatiivi", form: "järvelle" },
          { label: "Essiivi", form: "järvenä" },
          { label: "Translatiivi", form: "järveksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "järvet" },
          { label: "Partitiivi", form: "järviä" },
          { label: "Genetiivi", form: "järvien" },
          { label: "Inessiivi", form: "järvissä" },
          { label: "Illatiivi", form: "järviin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "järvimaisema",
      en: "lake scenery",
      taso: "B1",
      esim: { fi: "Mökiltä avautuu kaunis järvimaisema.", en: "The cabin has a beautiful lake view." },
    },
    {
      fi: "järviseutu",
      en: "lake district",
      taso: "B2",
      esim: { fi: "Vietimme loman järviseudulla.", en: "We spent the holiday in the lake district." },
    },
    {
      fi: "tekojärvi",
      en: "artificial lake, reservoir",
      taso: "B2",
      esim: { fi: "Voimalan viereen rakennettiin tekojärvi.", en: "A reservoir was built next to the plant." },
    },
  ],
  synonyymit: [
    { fi: "lampi", en: "pond" },
    { fi: "vesistö", en: "body of water" },
  ],
  esimerkit: {
    A2: { fi: "Uimme järvessä kesällä.", en: "We swim in the lake in summer." },
    B1: { fi: "Järvi jäätyi talvella umpeen.", en: "The lake froze over in winter." },
    B2: {
      fi: "Tyyni järvi heijasti taivaan kuin peili.",
      en: "The calm lake reflected the sky like a mirror.",
    },
  },
  updatedAt: "2026-06-04",
};

export default jarvi;
