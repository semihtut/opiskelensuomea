import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem virasto-.
// Genitive viraston, partitive virastoa, partitive pl virastoja.
const virasto: Word = {
  fi: "virasto",
  slug: "virasto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "(government) office, agency, bureau",
  selitys:
    "Julkinen toimisto, jossa hoidetaan viranomaisasioita: 'verovirasto', 'asioida virastossa'. Tyyppi 1/valo, ei astevaihtelua (kollektiivijohdos -sto). Sanasta virka. Vrt. virka, virkailija, viranomainen.",
  kuva: { alt: "virasto – julkinen toimisto jossa hoidetaan viranomaisasioita" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo virasto-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "viraston", merkitys: "of the office" },
      { sija: "partitiivi (yks.)", muoto: "virastoa", merkitys: "office (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "virastoja", merkitys: "offices (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua. Kollektiivijohdos virka + -sto. Verovirasto, työvoimavirasto, maistraatti. Vrt. virka = office/post, virkailija, viranomainen = authority.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "virasto" },
          { label: "Partitiivi", form: "virastoa" },
          { label: "Genetiivi", form: "viraston" },
          { label: "Inessiivi", form: "virastossa" },
          { label: "Elatiivi", form: "virastosta" },
          { label: "Illatiivi", form: "virastoon" },
          { label: "Adessiivi", form: "virastolla" },
          { label: "Ablatiivi", form: "virastolta" },
          { label: "Allatiivi", form: "virastolle" },
          { label: "Essiivi", form: "virastona" },
          { label: "Translatiivi", form: "virastoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "virastot" },
          { label: "Partitiivi", form: "virastoja" },
          { label: "Genetiivi", form: "virastojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "viranomainen",
      en: "authority, official body",
      taso: "B2",
      esim: { fi: "Viranomainen tekee päätöksen.", en: "The authority makes the decision." },
    },
    {
      fi: "verovirasto",
      en: "tax office",
      taso: "B1",
      esim: { fi: "Soitin verovirastoon.", en: "I called the tax office." },
    },
  ],
  synonyymit: [
    { fi: "toimisto", en: "office" },
  ],
  esimerkit: {
    A2: { fi: "Virasto on auki kello neljään.", en: "The office is open until four." },
    B1: { fi: "Kävin virastossa hoitamassa asian.", en: "I went to the office to take care of the matter." },
    B2: {
      fi: "Monet viraston palvelut hoituvat nykyään kokonaan verkossa.",
      en: "Many of the office's services are nowadays handled entirely online.",
    },
  },
  updatedAt: "2026-06-07",
};

export default virasto;
