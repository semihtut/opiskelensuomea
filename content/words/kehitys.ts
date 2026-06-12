import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem kehitykse-.
// Genitive kehityksen, partitive kehitystä, illative kehitykseen, partitive pl kehityksiä.
const kehitys: Word = {
  fi: "kehitys",
  slug: "kehitys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "development, progress",
  selitys:
    "Vähittäinen muuttuminen parempaan tai eteenpäin: 'nopea kehitys'. Tyyppi 39, ei astevaihtelua; vartalo kehitykse-. Partitiivin monikko kehityksiä (usein yksikössä). Johdettu verbistä kehittyä.",
  kuva: { alt: "kehitys – vähittäinen muuttuminen eteenpäin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua; vartalo kehitykse-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kehityksen", merkitys: "of the development" },
      { sija: "partitiivi (yks.)", muoto: "kehitystä", merkitys: "development (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kehityksiä", merkitys: "developments (partitive pl.)" },
    ],
    huom:
      "Verbijohdos kehittyä → -ys; vartalo kehitykse- (genetiivi kehityksen). Yleensä yksikössä. 'Talouden kehitys' = economic development. Vrt. kehittää = to develop (transit.), kehittyä = to develop (intransit.).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kehitys" },
          { label: "Partitiivi", form: "kehitystä" },
          { label: "Genetiivi", form: "kehityksen" },
          { label: "Inessiivi", form: "kehityksessä" },
          { label: "Elatiivi", form: "kehityksestä" },
          { label: "Illatiivi", form: "kehitykseen" },
          { label: "Adessiivi", form: "kehityksellä" },
          { label: "Ablatiivi", form: "kehitykseltä" },
          { label: "Allatiivi", form: "kehitykselle" },
          { label: "Essiivi", form: "kehityksenä" },
          { label: "Translatiivi", form: "kehitykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kehitykset" },
          { label: "Partitiivi", form: "kehityksiä" },
          { label: "Genetiivi", form: "kehitysten / kehityksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kehittyä",
      en: "to develop, evolve",
      taso: "B1",
      esim: { fi: "Hänen suomensa kehittyi nopeasti.", en: "Her Finnish developed quickly." },
    },
    {
      fi: "kehittää",
      en: "to develop, improve (something)",
      taso: "B1",
      esim: { fi: "Yritys kehittää uusia tuotteita.", en: "The company develops new products." },
    },
    {
      fi: "kehittyvä",
      en: "developing, emerging",
      taso: "B2",
      esim: { fi: "Se on kehittyvä talous.", en: "It is a developing economy." },
    },
  ],
  synonyymit: [
    { fi: "edistys", en: "progress, advancement" },
    { fi: "kasvu", en: "growth" },
  ],
  esimerkit: {
    A2: { fi: "Tekniikan kehitys on nopeaa.", en: "The development of technology is fast." },
    B1: { fi: "Seuraamme lapsen kehitystä.", en: "We follow the child's development." },
    B2: {
      fi: "Talouden kehitys vaikuttaa suoraan ihmisten arkeen.",
      en: "Economic development directly affects people's everyday lives.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kehitys;
