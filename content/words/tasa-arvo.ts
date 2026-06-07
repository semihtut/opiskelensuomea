import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo (arvo), no gradation, stem tasa-arvo-.
// Genitive tasa-arvon, partitive tasa-arvoa, illative tasa-arvoon.
const tasaArvo: Word = {
  fi: "tasa-arvo",
  slug: "tasa-arvo",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B2",
  en: "equality",
  selitys:
    "Ihmisten yhdenvertainen ja samanarvoinen kohtelu: 'sukupuolten tasa-arvo', 'edistää tasa-arvoa'. Tyyppi 1/valo, ei astevaihtelua. Yhdyssana tasa + arvo. Vastakohta eriarvoisuus. Vrt. arvo, tasa-arvoinen, yhdenvertaisuus.",
  kuva: { emoji: "⚖️", alt: "tasa-arvo – ihmisten yhdenvertainen ja samanarvoinen kohtelu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo tasa-arvo-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tasa-arvon", merkitys: "of equality" },
      { sija: "partitiivi (yks.)", muoto: "tasa-arvoa", merkitys: "equality (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "tasa-arvoon", merkitys: "into equality" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua (arvo → arvon). Yhdyssana tasa + arvo; yhdysmerkki säilyy taivutettaessa (tasa-arvon). Yleensä yksikössä. Vastakohta eriarvoisuus. Vrt. tasa-arvoinen, yhdenvertaisuus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tasa-arvo" },
          { label: "Partitiivi", form: "tasa-arvoa" },
          { label: "Genetiivi", form: "tasa-arvon" },
          { label: "Inessiivi", form: "tasa-arvossa" },
          { label: "Elatiivi", form: "tasa-arvosta" },
          { label: "Illatiivi", form: "tasa-arvoon" },
          { label: "Adessiivi", form: "tasa-arvolla" },
          { label: "Ablatiivi", form: "tasa-arvolta" },
          { label: "Allatiivi", form: "tasa-arvolle" },
          { label: "Essiivi", form: "tasa-arvona" },
          { label: "Translatiivi", form: "tasa-arvoksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tasa-arvoinen",
      en: "equal, egalitarian",
      taso: "B2",
      esim: { fi: "Kohtelu oli tasa-arvoista.", en: "The treatment was equal." },
    },
    {
      fi: "epätasa-arvo",
      en: "inequality",
      taso: "B2",
      esim: { fi: "Epätasa-arvo näkyy palkoissa.", en: "Inequality shows in wages." },
    },
  ],
  synonyymit: [
    { fi: "yhdenvertaisuus", en: "equality (before the law)" },
  ],
  esimerkit: {
    A2: { fi: "Tasa-arvo on tärkeää.", en: "Equality is important." },
    B1: { fi: "Koulu opettaa tasa-arvoa.", en: "The school teaches equality." },
    B2: {
      fi: "Sukupuolten tasa-arvo on parantunut, mutta työtä on yhä jäljellä.",
      en: "Gender equality has improved, but there is still work to be done.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tasaArvo;
