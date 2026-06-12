import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem sanasto-.
// Genitive sanaston, partitive sanastoa, partitive pl sanastoja.
const sanasto: Word = {
  fi: "sanasto",
  slug: "sanasto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "vocabulary; glossary, word list",
  selitys:
    "1) Kielen tai aihealueen sanavarasto: 'laajentaa sanastoa'. 2) Sanaluettelo selityksineen. Tyyppi 1/valo, ei astevaihtelua (kollektiivijohdos -sto). Sanasta sana. Vrt. sana, sanavarasto, sanakirja.",
  kuva: { alt: "sanasto – kielen tai aihealueen sanavarasto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo sanasto-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sanaston", merkitys: "of the vocabulary" },
      { sija: "partitiivi (yks.)", muoto: "sanastoa", merkitys: "vocabulary (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sanastoja", merkitys: "vocabularies (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua. Kollektiivijohdos sana + -sto (vrt. aineisto, tiedosto). 'Laajentaa sanastoa' = to expand one's vocabulary. Vrt. sanavarasto = lexical store.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sanasto" },
          { label: "Partitiivi", form: "sanastoa" },
          { label: "Genetiivi", form: "sanaston" },
          { label: "Inessiivi", form: "sanastossa" },
          { label: "Elatiivi", form: "sanastosta" },
          { label: "Illatiivi", form: "sanastoon" },
          { label: "Adessiivi", form: "sanastolla" },
          { label: "Ablatiivi", form: "sanastolta" },
          { label: "Allatiivi", form: "sanastolle" },
          { label: "Essiivi", form: "sanastona" },
          { label: "Translatiivi", form: "sanastoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sanastot" },
          { label: "Partitiivi", form: "sanastoja" },
          { label: "Genetiivi", form: "sanastojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sanavarasto",
      en: "vocabulary (one's word store)",
      taso: "B1",
      esim: { fi: "Hänellä on laaja sanavarasto.", en: "He has a wide vocabulary." },
    },
    {
      fi: "erikoissanasto",
      en: "specialized terminology",
      taso: "B2",
      esim: { fi: "Lääketieteen erikoissanasto on vaikeaa.", en: "Medical terminology is difficult." },
    },
  ],
  synonyymit: [
    { fi: "sanavarasto", en: "vocabulary" },
  ],
  esimerkit: {
    A2: { fi: "Opettelen uutta sanastoa.", en: "I'm learning new vocabulary." },
    B1: { fi: "Kirjan lopussa on hyödyllinen sanasto.", en: "There is a useful glossary at the end of the book." },
    B2: {
      fi: "Ammattikielen sanasto karttuu vähitellen työtä tehdessä.",
      en: "The vocabulary of professional language builds up gradually as one works.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sanasto;
