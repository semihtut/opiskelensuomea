import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 15/korkea, no gradation, stem rohkea-.
// Genitive rohkean, partitive rohkeaa, illative rohkeaan, partitive pl rohkeita.
const rohkea: Word = {
  fi: "rohkea",
  slug: "rohkea",
  pos: "adjektiivi (tyyppi 15/korkea)",
  posClass: "adjektiivi",
  level: "B1",
  en: "brave, bold, courageous",
  selitys:
    "Sellainen, joka uskaltaa toimia pelosta huolimatta: 'rohkea päätös'. Tyyppi 15, ei astevaihtelua. Vrt. rohkeus (courage), uskaltaa (to dare). Vastakohta arka.",
  kuva: { emoji: "🦁", alt: "rohkea – uskaltava, peloton" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 15/korkea; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "rohkean", merkitys: "of the brave" },
      { sija: "partitiivi (yks.)", muoto: "rohkeaa", merkitys: "brave (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "rohkeita", merkitys: "brave (partitive pl.)" },
    ],
    huom:
      "Partitiivi rohkeaa (myös vanh. rohkeata). Monikon partitiivi rohkeita. 'Olla rohkea tekemään jotain.' Vrt. rohkeus = courage, rohkaista = to encourage.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "rohkea" },
          { label: "Partitiivi", form: "rohkeaa" },
          { label: "Genetiivi", form: "rohkean" },
          { label: "Inessiivi", form: "rohkeassa" },
          { label: "Illatiivi", form: "rohkeaan" },
          { label: "Adessiivi", form: "rohkealla" },
          { label: "Essiivi", form: "rohkeana" },
          { label: "Translatiivi", form: "rohkeaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "rohkeat" },
          { label: "Partitiivi", form: "rohkeita" },
          { label: "Genetiivi", form: "rohkeiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "rohkeampi" },
          { label: "Komparatiivi (gen.)", form: "rohkeamman" },
          { label: "Superlatiivi (nom.)", form: "rohkein" },
          { label: "Superlatiivi (gen.)", form: "rohkeimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rohkeus",
      en: "courage, bravery",
      taso: "B1",
      esim: { fi: "Tarvitaan rohkeutta sanoa ei.", en: "It takes courage to say no." },
    },
    {
      fi: "rohkaista",
      en: "to encourage",
      taso: "B2",
      esim: { fi: "Opettaja rohkaisi oppilaita.", en: "The teacher encouraged the students." },
    },
    {
      fi: "rohkeasti",
      en: "boldly, bravely",
      taso: "B1",
      esim: { fi: "Hän puhui rohkeasti.", en: "She spoke boldly." },
    },
  ],
  synonyymit: [
    { fi: "urhea", en: "valiant, brave" },
    { fi: "peloton", en: "fearless" },
  ],
  esimerkit: {
    A2: { fi: "Sinä olet rohkea.", en: "You are brave." },
    B1: { fi: "Se oli rohkea mutta oikea päätös.", en: "It was a bold but right decision." },
    B2: {
      fi: "Vain rohkeimmat uskalsivat hypätä kylmään veteen.",
      en: "Only the bravest dared to jump into the cold water.",
    },
  },
  updatedAt: "2026-06-06",
};

export default rohkea;
