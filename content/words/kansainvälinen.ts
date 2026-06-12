import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem kansainvälise-.
// Genitive kansainvälisen, partitive kansainvälistä, partitive pl kansainvälisiä.
const kansainvälinen: Word = {
  fi: "kansainvälinen",
  slug: "kansainvälinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "international",
  selitys:
    "Useita maita tai kansoja koskeva: 'kansainvälinen yhteistyö'. Tyyppi 38, ei astevaihtelua; vartalo kansainvälise-. Partitiivin monikko kansainvälisiä. Sanoista kansa + väli. Vrt. kansallinen (national).",
  kuva: { alt: "kansainvälinen – useita maita koskeva" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua; vartalo kansainvälise-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kansainvälisen", merkitys: "of the international (one)" },
      { sija: "partitiivi (yks.)", muoto: "kansainvälistä", merkitys: "international (partitive)" },
      { sija: "komparatiivi", muoto: "kansainvälisempi", merkitys: "more international" },
    ],
    huom:
      "Vartalo kansainvälise- (genetiivi kansainvälisen, partitiivi kansainvälistä). Sanoista kansojen väli(nen). Vrt. kansallinen = national, kansainvälistyä = to internationalize.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kansainvälinen" },
          { label: "Partitiivi", form: "kansainvälistä" },
          { label: "Genetiivi", form: "kansainvälisen" },
          { label: "Inessiivi", form: "kansainvälisessä" },
          { label: "Elatiivi", form: "kansainvälisestä" },
          { label: "Illatiivi", form: "kansainväliseen" },
          { label: "Adessiivi", form: "kansainvälisellä" },
          { label: "Ablatiivi", form: "kansainväliseltä" },
          { label: "Allatiivi", form: "kansainväliselle" },
          { label: "Essiivi", form: "kansainvälisenä" },
          { label: "Translatiivi", form: "kansainväliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kansainväliset" },
          { label: "Partitiivi", form: "kansainvälisiä" },
          { label: "Genetiivi", form: "kansainvälisten / kansainvälisien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusaste", form: "kansainvälinen" },
          { label: "Komparatiivi", form: "kansainvälisempi" },
          { label: "Superlatiivi", form: "kansainvälisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kansallinen",
      en: "national",
      taso: "B2",
      esim: { fi: "Se on kansallinen juhlapäivä.", en: "It is a national holiday." },
    },
    {
      fi: "kansainvälistyä",
      en: "to become international",
      taso: "B2",
      esim: { fi: "Yritys kansainvälistyi nopeasti.", en: "The company internationalized quickly." },
    },
    {
      fi: "kansa",
      en: "people, nation",
      taso: "B1",
      esim: { fi: "Suomen kansa äänesti.", en: "The Finnish people voted." },
    },
  ],
  synonyymit: [
    { fi: "globaali", en: "global" },
    { fi: "ylikansallinen", en: "transnational" },
  ],
  esimerkit: {
    A2: { fi: "Helsinki on kansainvälinen kaupunki.", en: "Helsinki is an international city." },
    B1: { fi: "Konferenssiin osallistui kansainvälisiä vieraita.", en: "International guests attended the conference." },
    B2: {
      fi: "Kansainvälinen yhteistyö on välttämätöntä ilmastonmuutoksen torjunnassa.",
      en: "International cooperation is essential in combating climate change.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kansainvälinen;
