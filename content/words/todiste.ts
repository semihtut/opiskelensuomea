import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem todistee-.
// Genitive todisteen, partitive todistetta, illative todisteeseen, partitive pl todisteita.
const todiste: Word = {
  fi: "todiste",
  slug: "todiste",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "evidence, proof",
  selitys:
    "Asia, joka osoittaa jonkin todeksi: 'todiste syyllisyydestä'. Tyyppi 48/hame, ei astevaihtelua; vartalo todistee-. Johdettu verbistä todistaa. Vrt. todistaa, todistus, tosi.",
  kuva: { alt: "todiste – asia joka osoittaa jonkin todeksi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo todistee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "todisteen", merkitys: "of the evidence" },
      { sija: "partitiivi (yks.)", muoto: "todistetta", merkitys: "evidence (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "todisteita", merkitys: "evidence (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48 (-e): nominatiivi todiste, vartalo todistee- (todisteen, todisteeseen), partitiivi todistetta. Ei astevaihtelua. Asiasta elatiivi: 'todiste jostakin'. Vrt. todistaa = to prove, todistus = certificate.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "todiste" },
          { label: "Partitiivi", form: "todistetta" },
          { label: "Genetiivi", form: "todisteen" },
          { label: "Inessiivi", form: "todisteessa" },
          { label: "Elatiivi", form: "todisteesta" },
          { label: "Illatiivi", form: "todisteeseen" },
          { label: "Adessiivi", form: "todisteella" },
          { label: "Ablatiivi", form: "todisteelta" },
          { label: "Allatiivi", form: "todisteelle" },
          { label: "Essiivi", form: "todisteena" },
          { label: "Translatiivi", form: "todisteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "todisteet" },
          { label: "Partitiivi", form: "todisteita" },
          { label: "Genetiivi", form: "todisteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "todistaa",
      en: "to prove; to witness",
      taso: "B1",
      esim: { fi: "Voitko todistaa sen?", en: "Can you prove it?" },
    },
    {
      fi: "todistus",
      en: "certificate; testimony",
      taso: "B1",
      esim: { fi: "Sain todistuksen kurssista.", en: "I got a certificate for the course." },
    },
  ],
  synonyymit: [
    { fi: "näyttö", en: "proof, evidence" },
    { fi: "osoitus", en: "indication, sign" },
  ],
  esimerkit: {
    A2: { fi: "Heillä ei ollut todistetta.", en: "They had no evidence." },
    B1: { fi: "Kuitti on todiste ostoksesta.", en: "A receipt is proof of purchase." },
    B2: {
      fi: "Tuomioistuin vaati vahvoja todisteita ennen päätöksen tekemistä.",
      en: "The court demanded strong evidence before making a decision.",
    },
  },
  updatedAt: "2026-06-07",
};

export default todiste;
