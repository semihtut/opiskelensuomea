import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, t:d gradation, stem tieto- ~ tiedo-.
// Genitive tiedon, partitive tietoa, illative tietoon, partitive pl tietoja.
const tieto: Word = {
  fi: "tieto",
  slug: "tieto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "knowledge, information; a piece of data",
  selitys:
    "Se, mitä ihminen tietää; informaatio: 'hyödyllistä tietoa'. Tyyppi 1, astevaihtelu t:d (tieto → tiedon). Partitiivin monikko tietoja. Vrt. tietää (to know), tietokone (computer), tieteellinen tieto.",
  kuva: { alt: "tieto – se, mitä ihminen tietää; informaatio" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu t:d (tieto ↔ tiedo-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tiedon", merkitys: "of knowledge" },
      { sija: "partitiivi (yks.)", muoto: "tietoa", merkitys: "knowledge (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tietoja", merkitys: "data, pieces of information (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa t → d: genetiivi tiedon, inessiivi tiedossa. Vahva aste t säilyy partitiivissa tietoa ja monikossa tietoja. 'Saada tietoa' = to get information. Vrt. tietää = to know.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tieto" },
          { label: "Partitiivi", form: "tietoa" },
          { label: "Genetiivi", form: "tiedon" },
          { label: "Inessiivi", form: "tiedossa" },
          { label: "Elatiivi", form: "tiedosta" },
          { label: "Illatiivi", form: "tietoon" },
          { label: "Adessiivi", form: "tiedolla" },
          { label: "Ablatiivi", form: "tiedolta" },
          { label: "Allatiivi", form: "tiedolle" },
          { label: "Essiivi", form: "tietona" },
          { label: "Translatiivi", form: "tiedoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tiedot" },
          { label: "Partitiivi", form: "tietoja" },
          { label: "Genetiivi", form: "tietojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tietää",
      en: "to know",
      taso: "A2",
      esim: { fi: "Tiedätkö, mihin aikaan juna lähtee?", en: "Do you know what time the train leaves?" },
    },
    {
      fi: "tietoinen",
      en: "aware, conscious",
      taso: "B2",
      esim: { fi: "Olin tietoinen riskistä.", en: "I was aware of the risk." },
    },
    {
      fi: "tietämys",
      en: "knowledge, expertise",
      taso: "B2",
      esim: { fi: "Hänellä on laaja tietämys historiasta.", en: "He has broad knowledge of history." },
    },
  ],
  synonyymit: [
    { fi: "informaatio", en: "information" },
    { fi: "tietämys", en: "knowledge" },
  ],
  esimerkit: {
    A2: { fi: "Tarvitsen lisää tietoa kurssista.", en: "I need more information about the course." },
    B1: { fi: "Internetistä löytyy paljon tietoa.", en: "A lot of information can be found online." },
    B2: {
      fi: "Luotettavan tiedon erottaminen huhuista on yhä tärkeämpää.",
      en: "Telling reliable information apart from rumours is increasingly important.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tieto;
