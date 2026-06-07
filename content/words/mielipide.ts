import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, t:d gradation, stem mielipitee-.
// Genitive mielipiteen, partitive mielipidettä, illative mielipiteeseen, partitive pl mielipiteitä.
const mielipide: Word = {
  fi: "mielipide",
  slug: "mielipide",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "opinion, view",
  selitys:
    "Henkilön käsitys tai kanta johonkin asiaan: 'minun mielipiteeni mukaan'. Tyyppi 48/hame, astevaihtelu t:d (nominatiivi mielipide on heikko aste, vartalo mielipitee-). Asiasta käytetään elatiivia: 'mielipide jostakin'. Yhdyssana mieli + pitää.",
  kuva: { emoji: "💬", alt: "mielipide – henkilön käsitys jostakin asiasta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu t:d (vartalo mielipitee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "mielipiteen", merkitys: "of the opinion" },
      { sija: "partitiivi (yks.)", muoto: "mielipidettä", merkitys: "opinion (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "mielipiteitä", merkitys: "opinions (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48: nominatiivi mielipide (heikko aste -de), muut muodot vartalosta mielipitee- (mielipiteen, mielipiteeseen). Asiasta elatiivi: 'mielipide ilmastosta'. 'Olla samaa/eri mieltä' = to agree/disagree.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "mielipide" },
          { label: "Partitiivi", form: "mielipidettä" },
          { label: "Genetiivi", form: "mielipiteen" },
          { label: "Inessiivi", form: "mielipiteessä" },
          { label: "Elatiivi", form: "mielipiteestä" },
          { label: "Illatiivi", form: "mielipiteeseen" },
          { label: "Adessiivi", form: "mielipiteellä" },
          { label: "Ablatiivi", form: "mielipiteeltä" },
          { label: "Allatiivi", form: "mielipiteelle" },
          { label: "Essiivi", form: "mielipiteenä" },
          { label: "Translatiivi", form: "mielipiteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "mielipiteet" },
          { label: "Partitiivi", form: "mielipiteitä" },
          { label: "Genetiivi", form: "mielipiteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mielipidekysely",
      en: "opinion poll, survey",
      taso: "B2",
      esim: { fi: "Mielipidekysely julkaistiin eilen.", en: "The opinion poll was published yesterday." },
    },
    {
      fi: "mielipidekirjoitus",
      en: "opinion piece, op-ed",
      taso: "B2",
      esim: { fi: "Hän kirjoitti mielipidekirjoituksen lehteen.", en: "She wrote an op-ed for the paper." },
    },
  ],
  synonyymit: [
    { fi: "näkemys", en: "view" },
    { fi: "kanta", en: "stance, position" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on sinun mielipiteesi?", en: "What is your opinion?" },
    B1: { fi: "Olen eri mieltä tästä asiasta.", en: "I disagree about this matter." },
    B2: {
      fi: "Jokaisella on oikeus omaan mielipiteeseensä, mutta se kannattaa perustella.",
      en: "Everyone has a right to their own opinion, but it's worth justifying it.",
    },
  },
  updatedAt: "2026-06-07",
};

export default mielipide;
