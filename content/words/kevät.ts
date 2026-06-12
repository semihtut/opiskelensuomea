import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 44/kevät, no gradation, stem kevää- ~ kevät.
// Genitive kevään, partitive kevättä, illative kevääseen, partitive pl keväitä.
const kevät: Word = {
  fi: "kevät",
  slug: "kevät",
  pos: "substantiivi (tyyppi 44/kevät)",
  posClass: "substantiivi",
  level: "A2",
  en: "spring (season)",
  selitys:
    "Vuodenaika talven ja kesän välissä, jolloin luonto herää: 'aikainen kevät'. Tyyppi 44, ei astevaihtelua; vartalo kevää-. Partitiivi kevättä. 'Keväällä' = in spring (adessiivi). Vrt. kevätloma.",
  kuva: { alt: "kevät – vuodenaika, jolloin luonto herää" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 44/kevät; ei astevaihtelua; vartalo kevää-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kevään", merkitys: "of the spring" },
      { sija: "partitiivi (yks.)", muoto: "kevättä", merkitys: "spring (partitive)" },
      { sija: "adessiivi (yks.)", muoto: "keväällä", merkitys: "in spring" },
    ],
    huom:
      "Tyyppi 44: nominatiivi kevät, vartalo kevää- (genetiivi kevään, illatiivi kevääseen). Partitiivi kevättä, partitiivin monikko keväitä. 'Keväällä' = in spring; 'tänä keväänä' = this spring.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kevät" },
          { label: "Partitiivi", form: "kevättä" },
          { label: "Genetiivi", form: "kevään" },
          { label: "Inessiivi", form: "keväässä" },
          { label: "Elatiivi", form: "keväästä" },
          { label: "Illatiivi", form: "kevääseen" },
          { label: "Adessiivi", form: "keväällä" },
          { label: "Ablatiivi", form: "keväältä" },
          { label: "Allatiivi", form: "keväälle" },
          { label: "Essiivi", form: "keväänä" },
          { label: "Translatiivi", form: "kevääksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "keväät" },
          { label: "Partitiivi", form: "keväitä" },
          { label: "Genetiivi", form: "keväiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kevätloma",
      en: "spring break",
      taso: "A2",
      esim: { fi: "Kevätloma on maaliskuussa.", en: "The spring break is in March." },
    },
    {
      fi: "keväinen",
      en: "spring-like, vernal",
      taso: "B2",
      esim: { fi: "Ilmassa on keväinen tuoksu.", en: "There's a spring-like scent in the air." },
    },
    {
      fi: "kevätpäivä",
      en: "spring day",
      taso: "B1",
      esim: { fi: "Aurinkoinen kevätpäivä piristää.", en: "A sunny spring day is uplifting." },
    },
  ],
  synonyymit: [
    { fi: "kevätaika", en: "springtime" },
  ],
  esimerkit: {
    A2: { fi: "Keväällä lumi sulaa.", en: "In spring the snow melts." },
    B1: { fi: "Odotan kevättä kovasti.", en: "I'm really looking forward to spring." },
    B2: {
      fi: "Keväällä luonto herää eloon ja päivät pitenevät nopeasti.",
      en: "In spring nature comes alive and the days lengthen quickly.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kevät;
