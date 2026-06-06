import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem sumu-.
// Genitive sumun, partitive sumua, illative sumuun, partitive pl sumuja.
const sumu: Word = {
  fi: "sumu",
  slug: "sumu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "fog, mist",
  selitys:
    "Ilmassa leijuva pieni vesipisarapilvi maan tasalla, joka huonontaa näkyvyyttä: 'paksu sumu'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko sumuja. Vrt. sumuinen (foggy), aamusumu.",
  kuva: { emoji: "🌫️", alt: "sumu – näkyvyyttä huonontava vesipisarapilvi maan tasalla" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sumun", merkitys: "of the fog" },
      { sija: "partitiivi (yks.)", muoto: "sumua", merkitys: "fog (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sumuja", merkitys: "fogs (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1, ei astevaihtelua. 'Sumussa' = in the fog (inessiivi). Vrt. sumuinen = foggy, aamusumu = morning mist, sumuverho = veil of fog.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sumu" },
          { label: "Partitiivi", form: "sumua" },
          { label: "Genetiivi", form: "sumun" },
          { label: "Inessiivi", form: "sumussa" },
          { label: "Elatiivi", form: "sumusta" },
          { label: "Illatiivi", form: "sumuun" },
          { label: "Adessiivi", form: "sumulla" },
          { label: "Ablatiivi", form: "sumulta" },
          { label: "Allatiivi", form: "sumulle" },
          { label: "Essiivi", form: "sumuna" },
          { label: "Translatiivi", form: "sumuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sumut" },
          { label: "Partitiivi", form: "sumuja" },
          { label: "Genetiivi", form: "sumujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sumuinen",
      en: "foggy, misty",
      taso: "B1",
      esim: { fi: "Aamu oli sumuinen.", en: "The morning was foggy." },
    },
    {
      fi: "aamusumu",
      en: "morning mist",
      taso: "B2",
      esim: { fi: "Aamusumu hälveni pian.", en: "The morning mist soon cleared." },
    },
    {
      fi: "sumuverho",
      en: "veil of fog",
      taso: "B2",
      esim: { fi: "Sumuverho peitti vuoret.", en: "A veil of fog covered the mountains." },
    },
  ],
  synonyymit: [
    { fi: "usva", en: "haze, mist" },
    { fi: "utu", en: "light mist" },
  ],
  esimerkit: {
    A2: { fi: "Aamulla oli paksu sumu.", en: "There was thick fog in the morning." },
    B1: { fi: "Sumussa on vaikea ajaa.", en: "It's hard to drive in fog." },
    B2: {
      fi: "Sumu laskeutui laaksoon ja peitti kylän näkyvistä.",
      en: "The fog descended into the valley and hid the village from view.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sumu;
