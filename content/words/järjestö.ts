import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem järjestö-.
// Genitive järjestön, partitive järjestöä, partitive pl järjestöjä.
const jarjesto: Word = {
  fi: "järjestö",
  slug: "järjestö",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B1",
  en: "organization, association",
  selitys:
    "Ihmisten muodostama yhteenliittymä yhteistä tarkoitusta varten: 'kansalaisjärjestö'. Tyyppi 2/palvelu, ei astevaihtelua; partitiivin monikko järjestöjä. Johdettu verbistä järjestää. Vrt. järjestää, järjestys, yhdistys.",
  kuva: { alt: "järjestö – ihmisten yhteenliittymä yhteistä tarkoitusta varten" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua (vartalo järjestö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "järjestön", merkitys: "of the organization" },
      { sija: "partitiivi (yks.)", muoto: "järjestöä", merkitys: "organization (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "järjestöjä", merkitys: "organizations (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2 (-stö): partitiivin monikko -jä (järjestöjä), ei astevaihtelua. Johdettu verbistä järjestää. 'Kansalaisjärjestö' = NGO; 'avustusjärjestö' = aid organization. Vrt. yhdistys = association.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "järjestö" },
          { label: "Partitiivi", form: "järjestöä" },
          { label: "Genetiivi", form: "järjestön" },
          { label: "Inessiivi", form: "järjestössä" },
          { label: "Elatiivi", form: "järjestöstä" },
          { label: "Illatiivi", form: "järjestöön" },
          { label: "Adessiivi", form: "järjestöllä" },
          { label: "Ablatiivi", form: "järjestöltä" },
          { label: "Allatiivi", form: "järjestölle" },
          { label: "Essiivi", form: "järjestönä" },
          { label: "Translatiivi", form: "järjestöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "järjestöt" },
          { label: "Partitiivi", form: "järjestöjä" },
          { label: "Genetiivi", form: "järjestöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "järjestää",
      en: "to organize, arrange",
      taso: "A2",
      esim: { fi: "He järjestävät tapahtuman.", en: "They organize the event." },
    },
    {
      fi: "kansalaisjärjestö",
      en: "non-governmental organization (NGO)",
      taso: "B2",
      esim: { fi: "Kansalaisjärjestöt auttavat hädässä.", en: "NGOs help in emergencies." },
    },
  ],
  synonyymit: [
    { fi: "yhdistys", en: "association" },
    { fi: "organisaatio", en: "organization" },
  ],
  esimerkit: {
    A2: { fi: "Hän kuuluu järjestöön.", en: "He belongs to an organization." },
    B1: { fi: "Järjestö auttaa vähävaraisia perheitä.", en: "The organization helps low-income families." },
    B2: {
      fi: "Kansainväliset järjestöt koordinoivat apua kriisialueille.",
      en: "International organizations coordinate aid to crisis areas.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jarjesto;
