import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem kustannukse-.
// Genitive kustannuksen, partitive kustannusta, partitive pl kustannuksia.
const kustannus: Word = {
  fi: "kustannus",
  slug: "kustannus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "cost, expense",
  selitys:
    "Rahamäärä, joka jonkin tekeminen vaatii: 'matkan kustannukset'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Usein monikossa 'kustannukset' = costs. Johdettu verbistä kustantaa. Vrt. kulu, meno, hinta.",
  kuva: { emoji: "🧾", alt: "kustannus – rahamäärä jonka jokin vaatii" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo kustannukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kustannuksen", merkitys: "of the cost" },
      { sija: "partitiivi (yks.)", muoto: "kustannusta", merkitys: "cost (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kustannuksia", merkitys: "costs (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Usein monikossa: kustannukset = costs. 'Jonkin kustannuksella' = at the expense of. Vrt. kulu = expense, meno = expenditure.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kustannus" },
          { label: "Partitiivi", form: "kustannusta" },
          { label: "Genetiivi", form: "kustannuksen" },
          { label: "Inessiivi", form: "kustannuksessa" },
          { label: "Elatiivi", form: "kustannuksesta" },
          { label: "Illatiivi", form: "kustannukseen" },
          { label: "Adessiivi", form: "kustannuksella" },
          { label: "Ablatiivi", form: "kustannukselta" },
          { label: "Allatiivi", form: "kustannukselle" },
          { label: "Essiivi", form: "kustannuksena" },
          { label: "Translatiivi", form: "kustannukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kustannukset" },
          { label: "Partitiivi", form: "kustannuksia" },
          { label: "Genetiivi", form: "kustannuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kustantaa",
      en: "to cost; to fund, publish",
      taso: "B2",
      esim: { fi: "Kuinka paljon se kustantaa?", en: "How much does it cost?" },
    },
    {
      fi: "kustannustehokas",
      en: "cost-effective",
      taso: "B2",
      esim: { fi: "Ratkaisu on kustannustehokas.", en: "The solution is cost-effective." },
    },
  ],
  synonyymit: [
    { fi: "kulu", en: "expense" },
    { fi: "meno", en: "expenditure" },
  ],
  esimerkit: {
    A2: { fi: "Matkan kustannukset olivat suuret.", en: "The trip's costs were high." },
    B1: { fi: "Yritimme pienentää kustannuksia.", en: "We tried to reduce the costs." },
    B2: {
      fi: "Hanke toteutettiin alhaisin kustannuksin ja silti laadukkaasti.",
      en: "The project was carried out at low cost and yet with quality.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kustannus;
