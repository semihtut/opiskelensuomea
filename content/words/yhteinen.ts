import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem yhteise-.
// Genitive yhteisen, partitive yhteistä, partitive pl yhteisiä.
const yhteinen: Word = {
  fi: "yhteinen",
  slug: "yhteinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A2",
  en: "common, shared, joint",
  selitys:
    "Useammalle kuuluva tai useamman jakama: 'yhteinen tavoite'. Tyyppi 38/nainen, ei astevaihtelua. Johdettu sanasta yksi/yhdessä. Vastakohta yksityinen, erillinen. Vrt. yhteisö, yhdessä, yhteistyö.",
  kuva: { alt: "yhteinen – useammalle kuuluva tai jaettu" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo yhteise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "yhteisen", merkitys: "of common" },
      { sija: "partitiivi (yks.)", muoto: "yhteistä", merkitys: "common (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "yhteisiä", merkitys: "common (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo yhteise-, partitiivi yhteistä, monikon partitiivi yhteisiä. Vastakohta yksityinen. 'Yhteistä on…' = what is common is…. Vrt. yhteisö = community, yhteistyö = cooperation.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "yhteinen" },
          { label: "Partitiivi", form: "yhteistä" },
          { label: "Genetiivi", form: "yhteisen" },
          { label: "Inessiivi", form: "yhteisessä" },
          { label: "Elatiivi", form: "yhteisestä" },
          { label: "Illatiivi", form: "yhteiseen" },
          { label: "Adessiivi", form: "yhteisellä" },
          { label: "Allatiivi", form: "yhteiselle" },
          { label: "Translatiivi", form: "yhteiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "yhteiset" },
          { label: "Partitiivi", form: "yhteisiä" },
          { label: "Genetiivi", form: "yhteisten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "yhteinen" },
          { label: "Komparatiivi", form: "yhteisempi" },
          { label: "Superlatiivi", form: "yhteisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yhteisö",
      en: "community",
      taso: "B2",
      esim: { fi: "Kuulun pieneen yhteisöön.", en: "I belong to a small community." },
    },
    {
      fi: "yhteistyö",
      en: "cooperation, collaboration",
      taso: "B1",
      esim: { fi: "Yhteistyö sujui hyvin.", en: "The cooperation went well." },
    },
  ],
  synonyymit: [
    { fi: "jaettu", en: "shared" },
    { fi: "yhteinen kaikille", en: "common to all" },
  ],
  esimerkit: {
    A2: { fi: "Meillä on yhteinen tavoite.", en: "We have a common goal." },
    B1: { fi: "Etsimme yhteistä ratkaisua.", en: "We're looking for a common solution." },
    B2: {
      fi: "Yhteisten pelisääntöjen sopiminen helpotti ryhmän työskentelyä.",
      en: "Agreeing on common ground rules made the group's work easier.",
    },
  },
  updatedAt: "2026-06-07",
};

export default yhteinen;
