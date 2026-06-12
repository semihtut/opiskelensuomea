import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem haastee-.
// Genitive haasteen, partitive haastetta, illative haasteeseen, partitive pl haasteita.
const haaste: Word = {
  fi: "haaste",
  slug: "haaste",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "challenge",
  selitys:
    "Vaativa tehtävä tai tilanne, joka vaatii ponnistelua: 'ottaa haaste vastaan'. Tyyppi 48/hame, ei astevaihtelua; vartalo haastee-. Johdettu verbistä haastaa. Vrt. haastava, haastaa.",
  kuva: { alt: "haaste – vaativa tehtävä tai tilanne" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo haastee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "haasteen", merkitys: "of the challenge" },
      { sija: "partitiivi (yks.)", muoto: "haastetta", merkitys: "challenge (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "haasteita", merkitys: "challenges (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48 (-e): nominatiivi haaste, muut muodot vartalosta haastee- (haasteen, haasteeseen), partitiivi haastetta. Ei astevaihtelua. 'Ottaa haaste vastaan' = to take on a challenge. Vrt. haastava = challenging.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "haaste" },
          { label: "Partitiivi", form: "haastetta" },
          { label: "Genetiivi", form: "haasteen" },
          { label: "Inessiivi", form: "haasteessa" },
          { label: "Elatiivi", form: "haasteesta" },
          { label: "Illatiivi", form: "haasteeseen" },
          { label: "Adessiivi", form: "haasteella" },
          { label: "Ablatiivi", form: "haasteelta" },
          { label: "Allatiivi", form: "haasteelle" },
          { label: "Essiivi", form: "haasteena" },
          { label: "Translatiivi", form: "haasteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "haasteet" },
          { label: "Partitiivi", form: "haasteita" },
          { label: "Genetiivi", form: "haasteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "haastava",
      en: "challenging, demanding",
      taso: "B1",
      esim: { fi: "Työ on haastavaa mutta palkitsevaa.", en: "The job is challenging but rewarding." },
    },
    {
      fi: "haastaa",
      en: "to challenge",
      taso: "B2",
      esim: { fi: "Hän haastoi minut kilpailuun.", en: "He challenged me to a competition." },
    },
  ],
  synonyymit: [
    { fi: "vaikeus", en: "difficulty" },
    { fi: "koettelemus", en: "ordeal, trial" },
  ],
  esimerkit: {
    A2: { fi: "Uusi työ on iso haaste.", en: "The new job is a big challenge." },
    B1: { fi: "Otan haasteen mielelläni vastaan.", en: "I gladly take on the challenge." },
    B2: {
      fi: "Ilmastonmuutos on yksi aikamme suurimmista haasteista.",
      en: "Climate change is one of the biggest challenges of our time.",
    },
  },
  updatedAt: "2026-06-07",
};

export default haaste;
