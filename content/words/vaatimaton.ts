import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 34/onneton, tt:t gradation, stem vaatimattoma- ~ vaatimaton.
// Genitive vaatimattoman, partitive vaatimatonta, partitive pl vaatimattomia.
const vaatimaton: Word = {
  fi: "vaatimaton",
  slug: "vaatimaton",
  pos: "adjektiivi (tyyppi 34/onneton)",
  posClass: "adjektiivi",
  level: "B2",
  en: "modest, humble, unassuming",
  selitys:
    "Sellainen, joka ei kersku eikä vaadi paljon; myös: pieni tai yksinkertainen: 'vaatimaton koti'. Tyyppi 34/onneton, astevaihtelu tt:t (vaatimaton → vaatimattoman). Kieltojohdos (vaatia + -maton). Vastakohta vaativa, ylpeä. Vrt. vaatia, vaatimattomuus.",
  kuva: { emoji: "🙇", alt: "vaatimaton – vähään tyytyvä, kerskumaton" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 34/onneton; astevaihtelu tt:t (vartalo vaatimattoma-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vaatimattoman", merkitys: "of modest" },
      { sija: "partitiivi (yks.)", muoto: "vaatimatonta", merkitys: "modest (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vaatimattomia", merkitys: "modest (partitive pl.)" },
    ],
    huom:
      "Tyyppi 34 (-ton/-tön): nominatiivi vaatimaton (heikko t), vartalo vaatimattoma- vahvistuu (vaatimattoman, vaatimattomalla), partitiivi vaatimatonta. Kieltojohdos vaatia + -maton. Vrt. vaatimattomuus = modesty.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vaatimaton" },
          { label: "Partitiivi", form: "vaatimatonta" },
          { label: "Genetiivi", form: "vaatimattoman" },
          { label: "Inessiivi", form: "vaatimattomassa" },
          { label: "Elatiivi", form: "vaatimattomasta" },
          { label: "Illatiivi", form: "vaatimattomaan" },
          { label: "Adessiivi", form: "vaatimattomalla" },
          { label: "Allatiivi", form: "vaatimattomalle" },
          { label: "Translatiivi", form: "vaatimattomaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vaatimattomat" },
          { label: "Partitiivi", form: "vaatimattomia" },
          { label: "Genetiivi", form: "vaatimattomien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "vaatimaton" },
          { label: "Komparatiivi", form: "vaatimattomampi" },
          { label: "Superlatiivi", form: "vaatimattomin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaatimattomuus",
      en: "modesty, humility",
      taso: "B2",
      esim: { fi: "Vaatimattomuus kaunistaa.", en: "Modesty becomes one." },
    },
    {
      fi: "vaatia",
      en: "to demand, require",
      taso: "B1",
      esim: { fi: "Hän ei vaadi paljon.", en: "He doesn't demand much." },
    },
  ],
  synonyymit: [
    { fi: "nöyrä", en: "humble" },
    { fi: "yksinkertainen", en: "simple, plain" },
  ],
  esimerkit: {
    A2: { fi: "Hän on hyvin vaatimaton.", en: "He is very modest." },
    B1: { fi: "He asuvat vaatimattomassa kodissa.", en: "They live in a modest home." },
    B2: {
      fi: "Menestyksestään huolimatta hän pysyi vaatimattomana ja maanläheisenä.",
      en: "Despite his success he remained modest and down-to-earth.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vaatimaton;
