import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem ryhmä-.
// Genitive ryhmän, partitive ryhmää, partitive pl ryhmiä.
const ryhma: Word = {
  fi: "ryhmä",
  slug: "ryhmä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "group",
  selitys:
    "Yhteen kuuluvien ihmisten tai asioiden joukko: 'opiskeluryhmä', 'pieni ryhmä'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko ryhmiä. Vrt. joukko, ryhmittää, tiimi.",
  kuva: { alt: "ryhmä – yhteen kuuluvien ihmisten tai asioiden joukko" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo ryhmä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ryhmän", merkitys: "of the group" },
      { sija: "partitiivi (yks.)", muoto: "ryhmää", merkitys: "group (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ryhmiä", merkitys: "groups (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko ryhmiä. Pienempi ja järjestäytyneempi kuin joukko. Ryhmätyö, ikäryhmä. Vrt. joukko, tiimi.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ryhmä" },
          { label: "Partitiivi", form: "ryhmää" },
          { label: "Genetiivi", form: "ryhmän" },
          { label: "Inessiivi", form: "ryhmässä" },
          { label: "Elatiivi", form: "ryhmästä" },
          { label: "Illatiivi", form: "ryhmään" },
          { label: "Adessiivi", form: "ryhmällä" },
          { label: "Ablatiivi", form: "ryhmältä" },
          { label: "Allatiivi", form: "ryhmälle" },
          { label: "Essiivi", form: "ryhmänä" },
          { label: "Translatiivi", form: "ryhmäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ryhmät" },
          { label: "Partitiivi", form: "ryhmiä" },
          { label: "Genetiivi", form: "ryhmien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ryhmätyö",
      en: "group work",
      taso: "B1",
      esim: { fi: "Teimme ryhmätyön yhdessä.", en: "We did the group work together." },
    },
    {
      fi: "ikäryhmä",
      en: "age group",
      taso: "B2",
      esim: { fi: "Kurssi sopii kaikille ikäryhmille.", en: "The course suits all age groups." },
    },
  ],
  synonyymit: [
    { fi: "joukko", en: "group" },
    { fi: "tiimi", en: "team" },
  ],
  esimerkit: {
    A2: { fi: "Olen suomen kielen ryhmässä.", en: "I'm in the Finnish language group." },
    B1: { fi: "Ryhmä jaettiin kahteen osaan.", en: "The group was divided into two parts." },
    B2: {
      fi: "Pienessä ryhmässä jokainen saa enemmän huomiota.",
      en: "In a small group everyone gets more attention.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ryhma;
