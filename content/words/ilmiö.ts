import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation, stem ilmiö-.
// Genitive ilmiön, partitive ilmiötä, illative ilmiöön, partitive pl ilmiöitä.
const ilmio: Word = {
  fi: "ilmiö",
  slug: "ilmiö",
  pos: "substantiivi (tyyppi 3/valtio)",
  posClass: "substantiivi",
  level: "B2",
  en: "phenomenon",
  selitys:
    "Havaittava tapahtuma tai asia luonnossa tai yhteiskunnassa: 'yhteiskunnallinen ilmiö', 'luonnonilmiö'. Tyyppi 3/valtio, ei astevaihtelua. Sanasta ilmetä / ilma. Vrt. ilmetä, tapahtuma, luonnonilmiö.",
  kuva: { alt: "ilmiö – havaittava tapahtuma tai asia luonnossa tai yhteiskunnassa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua (vartalo ilmiö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ilmiön", merkitys: "of the phenomenon" },
      { sija: "partitiivi (yks.)", muoto: "ilmiötä", merkitys: "phenomenon (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ilmiöitä", merkitys: "phenomena (partitive pl.)" },
    ],
    huom:
      "Tyyppi 3/valtio: ei astevaihtelua. Partitiivi ilmiötä, partitiivin monikko ilmiöitä, illatiivi ilmiöön. Luonnonilmiö = natural phenomenon, kasvihuoneilmiö = greenhouse effect. Vrt. ilmetä, tapahtuma.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ilmiö" },
          { label: "Partitiivi", form: "ilmiötä" },
          { label: "Genetiivi", form: "ilmiön" },
          { label: "Inessiivi", form: "ilmiössä" },
          { label: "Elatiivi", form: "ilmiöstä" },
          { label: "Illatiivi", form: "ilmiöön" },
          { label: "Adessiivi", form: "ilmiöllä" },
          { label: "Ablatiivi", form: "ilmiöltä" },
          { label: "Allatiivi", form: "ilmiölle" },
          { label: "Essiivi", form: "ilmiönä" },
          { label: "Translatiivi", form: "ilmiöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ilmiöt" },
          { label: "Partitiivi", form: "ilmiöitä" },
          { label: "Genetiivi", form: "ilmiöiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luonnonilmiö",
      en: "natural phenomenon",
      taso: "B2",
      esim: { fi: "Revontulet ovat kaunis luonnonilmiö.", en: "The northern lights are a beautiful natural phenomenon." },
    },
    {
      fi: "ilmetä",
      en: "to appear, manifest",
      taso: "B2",
      esim: { fi: "Ongelma ilmeni vasta myöhemmin.", en: "The problem appeared only later." },
    },
  ],
  synonyymit: [
    { fi: "tapahtuma", en: "occurrence" },
  ],
  esimerkit: {
    A2: { fi: "Se on uusi ilmiö.", en: "It is a new phenomenon." },
    B1: { fi: "Sosiaalinen media on maailmanlaajuinen ilmiö.", en: "Social media is a worldwide phenomenon." },
    B2: {
      fi: "Tutkijat yrittävät selittää ilmiötä, jota ei ole ennen havaittu.",
      en: "Researchers are trying to explain a phenomenon that has not been observed before.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ilmio;
