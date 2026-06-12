import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa (type 1), no gradation,
// stem rakasta-. Present rakastan, past rakastin, past participle rakastanut.
// Governs the partitive: "rakastan sinua".
const rakastaa: Word = {
  fi: "rakastaa",
  slug: "rakastaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to love",
  selitys:
    "Tuntea voimakasta rakkautta. Tyyppi 1, ei astevaihtelua: rakastaa → rakastan. Vaatii partitiivin: 'rakastan sinua'. Substantiivi rakkaus = love.",
  kuva: { alt: "rakastaa – rakkaus" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-staa); ei astevaihtelua; vaatii partitiivin",
    muodot: [
      { sija: "preesens (minä)", muoto: "rakastan", merkitys: "I love" },
      { sija: "imperfekti (minä)", muoto: "rakastin", merkitys: "I loved" },
      { sija: "kielto (minä)", muoto: "en rakasta", merkitys: "I don't love" },
    ],
    huom:
      "Objekti aina partitiivissa: 'rakastan sinua', 'rakastan kahvia'. Yli kaksitavuisessa imperfektissä a katoaa: rakastin (ei *rakastoin). Vrt. tykätä, pitää (+ -sta).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "rakastan" },
          { label: "sinä", form: "rakastat" },
          { label: "hän", form: "rakastaa" },
          { label: "me", form: "rakastamme" },
          { label: "te", form: "rakastatte" },
          { label: "he", form: "rakastavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en rakasta" },
          { label: "hän", form: "ei rakasta" },
          { label: "he", form: "eivät rakasta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "rakastin" },
          { label: "sinä", form: "rakastit" },
          { label: "hän", form: "rakasti" },
          { label: "me", form: "rakastimme" },
          { label: "te", form: "rakastitte" },
          { label: "he", form: "rakastivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen rakastanut" },
          { label: "hän", form: "on rakastanut" },
          { label: "he", form: "ovat rakastaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "rakasta!" },
          { label: "te", form: "rakastakaa!" },
          { label: "kielto (sinä)", form: "älä rakasta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rakkaus",
      en: "love",
      taso: "B1",
      esim: { fi: "Rakkaus voittaa kaiken.", en: "Love conquers all." },
    },
    {
      fi: "rakas",
      en: "dear, beloved",
      taso: "A2",
      esim: { fi: "Rakas ystäväni!", en: "My dear friend!" },
    },
    {
      fi: "rakastua",
      en: "to fall in love",
      taso: "B1",
      esim: { fi: "Rakastuin häneen heti.", en: "I fell in love with her immediately." },
    },
  ],
  synonyymit: [
    { fi: "tykätä", en: "to like (colloquial)" },
    { fi: "pitää (+ -sta)", en: "to like (of)" },
  ],
  esimerkit: {
    A2: { fi: "Rakastan sinua.", en: "I love you." },
    B1: { fi: "Rakastimme tuota kahvilaa, mutta se suljettiin.", en: "We loved that café, but it closed." },
    B2: {
      fi: "Hän rakasti työtään niin paljon, ettei huomannut ajan kulumista.",
      en: "She loved her work so much that she didn't notice time passing.",
    },
  },
  updatedAt: "2026-06-05",
};

export default rakastaa;
