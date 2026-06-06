import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 6/paperi, no gradation, stem sokeri-.
// Genitive sokerin, partitive sokeria, illative sokeriin, partitive pl sokereita. Usually singular.
const sokeri: Word = {
  fi: "sokeri",
  slug: "sokeri",
  pos: "substantiivi (tyyppi 6/paperi)",
  posClass: "substantiivi",
  level: "A2",
  en: "sugar",
  selitys:
    "Makea valkoinen ainesosa, jota lisätään ruokaan ja juomaan: 'kahvi ilman sokeria'. Tyyppi 6, ei astevaihtelua. Käytetään useimmiten yksikössä (ainesana). Vrt. verensokeri, sokeriton.",
  kuva: { emoji: "🧂", alt: "sokeri – makea valkoinen ainesosa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 6/paperi; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sokerin", merkitys: "of the sugar" },
      { sija: "partitiivi (yks.)", muoto: "sokeria", merkitys: "sugar (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sokereita", merkitys: "sugars (partitive pl.)" },
    ],
    huom:
      "Tyyppi 6: partitiivin monikko -eita (sokereita). Käytetään useimmiten yksikössä (ainesana). 'Ilman sokeria' = without sugar. Vrt. verensokeri = blood sugar, sokeriton = sugar-free.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sokeri" },
          { label: "Partitiivi", form: "sokeria" },
          { label: "Genetiivi", form: "sokerin" },
          { label: "Inessiivi", form: "sokerissa" },
          { label: "Elatiivi", form: "sokerista" },
          { label: "Illatiivi", form: "sokeriin" },
          { label: "Adessiivi", form: "sokerilla" },
          { label: "Ablatiivi", form: "sokerilta" },
          { label: "Allatiivi", form: "sokerille" },
          { label: "Essiivi", form: "sokerina" },
          { label: "Translatiivi", form: "sokeriksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sokerit" },
          { label: "Partitiivi", form: "sokereita" },
          { label: "Genetiivi", form: "sokereiden / sokerien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "verensokeri",
      en: "blood sugar",
      taso: "B2",
      esim: { fi: "Verensokeri nousi aterian jälkeen.", en: "Blood sugar rose after the meal." },
    },
    {
      fi: "sokeriton",
      en: "sugar-free",
      taso: "B1",
      esim: { fi: "Juon sokeritonta limonadia.", en: "I drink sugar-free lemonade." },
    },
    {
      fi: "sokeritauti",
      en: "diabetes",
      taso: "B2",
      esim: { fi: "Hänellä on sokeritauti.", en: "He has diabetes." },
    },
  ],
  synonyymit: [
    { fi: "sakkaroosi", en: "sucrose" },
    { fi: "makeutusaine", en: "sweetener" },
  ],
  esimerkit: {
    A2: { fi: "Otatko sokeria kahviin?", en: "Do you take sugar in your coffee?" },
    B1: { fi: "Resepti vaatii kaksi desiä sokeria.", en: "The recipe requires two decilitres of sugar." },
    B2: {
      fi: "Liiallinen sokerin käyttö ei ole hyväksi terveydelle.",
      en: "Excessive use of sugar is not good for one's health.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sokeri;
