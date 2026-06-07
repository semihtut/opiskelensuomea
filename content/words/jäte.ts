import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, tt:t gradation, stem jättee- ~ jäte-.
// Genitive jätteen, partitive jätettä, illative jätteeseen, partitive pl jätteitä.
const jate: Word = {
  fi: "jäte",
  slug: "jäte",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "waste, garbage, rubbish",
  selitys:
    "Käytöstä poistettu, tarpeeton aine: 'lajitella jätteet'. Tyyppi 48/hame, astevaihtelu tt:t (jätteen vahva, jäte/jätettä heikko). Johdettu verbistä jättää. Vrt. roska, kierrättää, jätehuolto.",
  kuva: { emoji: "🗑️", alt: "jäte – käytöstä poistettu tarpeeton aine" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu tt:t (vartalo jättee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "jätteen", merkitys: "of the waste" },
      { sija: "partitiivi (yks.)", muoto: "jätettä", merkitys: "waste (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "jätteitä", merkitys: "wastes (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48: nominatiivi jäte (heikko t), vartalo jättee- vahvistuu (jätteen, jätteeseen), partitiivi jätettä. Johdettu verbistä jättää. Usein monikossa: jätteet. Vrt. roska = trash, jätehuolto = waste management.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "jäte" },
          { label: "Partitiivi", form: "jätettä" },
          { label: "Genetiivi", form: "jätteen" },
          { label: "Inessiivi", form: "jätteessä" },
          { label: "Elatiivi", form: "jätteestä" },
          { label: "Illatiivi", form: "jätteeseen" },
          { label: "Adessiivi", form: "jätteellä" },
          { label: "Ablatiivi", form: "jätteeltä" },
          { label: "Allatiivi", form: "jätteelle" },
          { label: "Essiivi", form: "jätteenä" },
          { label: "Translatiivi", form: "jätteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "jätteet" },
          { label: "Partitiivi", form: "jätteitä" },
          { label: "Genetiivi", form: "jätteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jätehuolto",
      en: "waste management",
      taso: "B2",
      esim: { fi: "Jätehuolto toimii hyvin.", en: "Waste management works well." },
    },
    {
      fi: "biojäte",
      en: "biowaste, organic waste",
      taso: "B2",
      esim: { fi: "Biojäte menee omaan astiaan.", en: "Biowaste goes in its own bin." },
    },
  ],
  synonyymit: [
    { fi: "roska", en: "trash, litter" },
    { fi: "jäännös", en: "remnant, residue" },
  ],
  esimerkit: {
    A2: { fi: "Vie jätteet ulos.", en: "Take the waste out." },
    B1: { fi: "Jätteet lajitellaan tarkasti.", en: "The waste is sorted carefully." },
    B2: {
      fi: "Muovijätteen määrä on kasvanut huolestuttavasti viime vuosina.",
      en: "The amount of plastic waste has grown alarmingly in recent years.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jate;
