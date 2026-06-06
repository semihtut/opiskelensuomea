import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation, stem pilve-.
// Genitive pilven, partitive pilveä, illative pilveen, partitive pl pilviä.
const pilvi: Word = {
  fi: "pilvi",
  slug: "pilvi",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "A2",
  en: "cloud",
  selitys:
    "Taivaalla leijuva vesihöyrymassa: 'tumma pilvi'. Tyyppi 7, ei astevaihtelua, vartalo pilve-. Partitiivin monikko pilviä. Vrt. pilvinen (cloudy), pilvenpiirtäjä (skyscraper).",
  kuva: { emoji: "☁️", alt: "pilvi – taivaalla leijuva vesihöyrymassa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua (vartalo pilve-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pilven", merkitys: "of the cloud" },
      { sija: "partitiivi (yks.)", muoto: "pilveä", merkitys: "cloud (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pilviä", merkitys: "clouds (partitive pl.)" },
    ],
    huom:
      "Loppu-i → vartalo -e-: pilvi → pilven, pilveä. 'Taivas on pilvessä' = the sky is overcast. Vrt. pilvinen = cloudy, sadepilvi = rain cloud.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pilvi" },
          { label: "Partitiivi", form: "pilveä" },
          { label: "Genetiivi", form: "pilven" },
          { label: "Inessiivi", form: "pilvessä" },
          { label: "Elatiivi", form: "pilvestä" },
          { label: "Illatiivi", form: "pilveen" },
          { label: "Adessiivi", form: "pilvellä" },
          { label: "Ablatiivi", form: "pilveltä" },
          { label: "Allatiivi", form: "pilvelle" },
          { label: "Essiivi", form: "pilvenä" },
          { label: "Translatiivi", form: "pilveksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pilvet" },
          { label: "Partitiivi", form: "pilviä" },
          { label: "Genetiivi", form: "pilvien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pilvinen",
      en: "cloudy, overcast",
      taso: "A2",
      esim: { fi: "Sää on tänään pilvinen.", en: "The weather is cloudy today." },
    },
    {
      fi: "sadepilvi",
      en: "rain cloud",
      taso: "B1",
      esim: { fi: "Tummat sadepilvet lähestyivät.", en: "Dark rain clouds were approaching." },
    },
    {
      fi: "pilvenpiirtäjä",
      en: "skyscraper",
      taso: "B2",
      esim: { fi: "Kaupungissa on monta pilvenpiirtäjää.", en: "The city has many skyscrapers." },
    },
  ],
  synonyymit: [
    { fi: "pilvimassa", en: "cloud mass" },
    { fi: "usva", en: "haze, mist" },
  ],
  esimerkit: {
    A2: { fi: "Taivaalla on valkoisia pilviä.", en: "There are white clouds in the sky." },
    B1: { fi: "Aurinko piiloutui pilven taakse.", en: "The sun hid behind a cloud." },
    B2: {
      fi: "Pilvet purkautuivat illalla rankkana sateena.",
      en: "The clouds broke into a heavy rain in the evening.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pilvi;
