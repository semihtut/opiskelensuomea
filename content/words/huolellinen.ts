import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem huolellise-.
// Genitive huolellisen, partitive huolellista, partitive pl huolellisia.
const huolellinen: Word = {
  fi: "huolellinen",
  slug: "huolellinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "careful, meticulous, thorough",
  selitys:
    "Sellainen, joka tekee asiat tarkasti ja huolella: 'huolellinen työ'. Tyyppi 38/nainen, ei astevaihtelua. Johdettu sanasta huoli. Vastakohta huolimaton. Vrt. huoli, huolellisesti, huolellisuus.",
  kuva: { emoji: "🧐", alt: "huolellinen – asiat tarkasti ja huolella tekevä" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo huolellise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "huolellisen", merkitys: "of careful" },
      { sija: "partitiivi (yks.)", muoto: "huolellista", merkitys: "careful (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "huolellisia", merkitys: "careful (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo huolellise-, partitiivi huolellista, monikon partitiivi huolellisia. Vastakohta huolimaton. Vrt. huolellisuus = carefulness, huolellisesti = carefully.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "huolellinen" },
          { label: "Partitiivi", form: "huolellista" },
          { label: "Genetiivi", form: "huolellisen" },
          { label: "Inessiivi", form: "huolellisessa" },
          { label: "Elatiivi", form: "huolellisesta" },
          { label: "Illatiivi", form: "huolelliseen" },
          { label: "Adessiivi", form: "huolellisella" },
          { label: "Allatiivi", form: "huolelliselle" },
          { label: "Translatiivi", form: "huolelliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "huolelliset" },
          { label: "Partitiivi", form: "huolellisia" },
          { label: "Genetiivi", form: "huolellisten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "huolellinen" },
          { label: "Komparatiivi", form: "huolellisempi" },
          { label: "Superlatiivi", form: "huolellisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "huolellisesti",
      en: "carefully, meticulously",
      taso: "B1",
      esim: { fi: "Lue ohjeet huolellisesti.", en: "Read the instructions carefully." },
    },
    {
      fi: "huolellisuus",
      en: "carefulness, diligence",
      taso: "B2",
      esim: { fi: "Työ vaatii huolellisuutta.", en: "The work requires diligence." },
    },
  ],
  synonyymit: [
    { fi: "tarkka", en: "precise, careful" },
    { fi: "perusteellinen", en: "thorough" },
  ],
  esimerkit: {
    A2: { fi: "Hän on huolellinen työntekijä.", en: "She is a careful worker." },
    B1: { fi: "Tein huolellisen suunnitelman.", en: "I made a careful plan." },
    B2: {
      fi: "Huolellinen valmistautuminen vähensi virheiden määrää selvästi.",
      en: "Careful preparation clearly reduced the number of mistakes.",
    },
  },
  updatedAt: "2026-06-07",
};

export default huolellinen;
