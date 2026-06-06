import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation, stem valtio-.
// Genitive valtion, partitive valtiota, illative valtioon, partitive pl valtioita.
const valtio: Word = {
  fi: "valtio",
  slug: "valtio",
  pos: "substantiivi (tyyppi 3/valtio)",
  posClass: "substantiivi",
  level: "B1",
  en: "state, country (as a political entity)",
  selitys:
    "Itsenäinen poliittinen yhteisö ja sen hallinto: 'Suomen valtio'. Tyyppi 3, ei astevaihtelua. Johdettu sanasta valta (+ -io). Vrt. valtiollinen (state-, political), hyvinvointivaltio (welfare state).",
  kuva: { emoji: "🏛️", alt: "valtio – itsenäinen poliittinen yhteisö" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "valtion", merkitys: "of the state" },
      { sija: "partitiivi (yks.)", muoto: "valtiota", merkitys: "state (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "valtioita", merkitys: "states (partitive pl.)" },
    ],
    huom:
      "Tyyppi 3: o-loppuinen vartalo, partitiivi -ta (valtiota), monikon partitiivi -ita (valtioita). 'Valtio maksaa' = the state pays. Vrt. valta = power, valtiovalta = state authority.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "valtio" },
          { label: "Partitiivi", form: "valtiota" },
          { label: "Genetiivi", form: "valtion" },
          { label: "Inessiivi", form: "valtiossa" },
          { label: "Elatiivi", form: "valtiosta" },
          { label: "Illatiivi", form: "valtioon" },
          { label: "Adessiivi", form: "valtiolla" },
          { label: "Ablatiivi", form: "valtiolta" },
          { label: "Allatiivi", form: "valtiolle" },
          { label: "Essiivi", form: "valtiona" },
          { label: "Translatiivi", form: "valtioksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "valtiot" },
          { label: "Partitiivi", form: "valtioita" },
          { label: "Genetiivi", form: "valtioiden / valtioitten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "valtiollinen",
      en: "state-, political",
      taso: "B2",
      esim: { fi: "Kyse on valtiollisesta päätöksestä.", en: "It is a matter of a state decision." },
    },
    {
      fi: "hyvinvointivaltio",
      en: "welfare state",
      taso: "B2",
      esim: { fi: "Suomea pidetään hyvinvointivaltiona.", en: "Finland is considered a welfare state." },
    },
    {
      fi: "valtionhallinto",
      en: "state administration",
      taso: "B2",
      esim: { fi: "Hän työskentelee valtionhallinnossa.", en: "He works in state administration." },
    },
  ],
  synonyymit: [
    { fi: "maa", en: "country" },
    { fi: "valtakunta", en: "realm, state" },
  ],
  esimerkit: {
    A2: { fi: "Suomi on pieni valtio.", en: "Finland is a small state." },
    B1: { fi: "Valtio tukee opiskelijoita.", en: "The state supports students." },
    B2: {
      fi: "Useat valtiot allekirjoittivat sopimuksen ilmastonmuutoksen hillitsemiseksi.",
      en: "Several states signed the agreement to curb climate change.",
    },
  },
  updatedAt: "2026-06-06",
};

export default valtio;
