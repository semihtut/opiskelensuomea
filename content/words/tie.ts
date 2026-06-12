import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 19/suo, no gradation. Genitive tien,
// partitive tietä, illative tiehen, partitive pl teitä, genitive pl teiden.
const tie: Word = {
  fi: "tie",
  slug: "tie",
  pos: "substantiivi (tyyppi 19/suo)",
  posClass: "substantiivi",
  level: "A1",
  en: "road, way",
  selitys:
    "Reitti paikasta toiseen; myös kuvallisesti 'keino' tai 'reitti'. Tyyppi 19, ei astevaihtelua. Monikkovartalo te- (teitä, teiden).",
  kuva: { alt: "tie – maantie kohti horisonttia" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 19/suo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tien", merkitys: "of the road" },
      { sija: "partitiivi (yks.)", muoto: "tietä", merkitys: "road (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "teitä", merkitys: "roads (partitive pl.)" },
    ],
    huom:
      "Monikossa vartalo te-: teitä, teiden ~ teitten, teillä. Illatiivi yks. tiehen. Vrt. katu (= kaupungin katu).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tie" },
          { label: "Partitiivi", form: "tietä" },
          { label: "Genetiivi", form: "tien" },
          { label: "Inessiivi", form: "tiessä" },
          { label: "Elatiivi", form: "tiestä" },
          { label: "Illatiivi", form: "tiehen" },
          { label: "Adessiivi", form: "tiellä" },
          { label: "Ablatiivi", form: "tieltä" },
          { label: "Allatiivi", form: "tielle" },
          { label: "Essiivi", form: "tienä" },
          { label: "Translatiivi", form: "tieksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tiet" },
          { label: "Partitiivi", form: "teitä" },
          { label: "Genetiivi", form: "teiden" },
          { label: "Inessiivi", form: "teissä" },
          { label: "Illatiivi", form: "teihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "maantie",
      en: "highway, country road",
      taso: "A2",
      esim: { fi: "Ajoimme maantietä pitkin.", en: "We drove along the highway." },
    },
    {
      fi: "tienviitta",
      en: "road sign, signpost",
      taso: "B1",
      esim: { fi: "Tienviitta osoitti vasemmalle.", en: "The signpost pointed left." },
    },
    {
      fi: "elämäntie",
      en: "path of life, life journey",
      taso: "B2",
      esim: { fi: "Jokaisella on oma elämäntiensä.", en: "Everyone has their own path in life." },
    },
  ],
  synonyymit: [
    { fi: "väylä", en: "route, thoroughfare" },
    { fi: "reitti", en: "route" },
  ],
  esimerkit: {
    A2: { fi: "Tie on pitkä ja suora.", en: "The road is long and straight." },
    B1: { fi: "Kysyin tietä asemalle.", en: "I asked for directions to the station." },
    B2: {
      fi: "Talvella tiet ovat usein liukkaita.",
      en: "In winter the roads are often slippery.",
    },
  },
  updatedAt: "2026-06-04",
};

export default tie;
