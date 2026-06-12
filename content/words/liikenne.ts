import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, nt:nn gradation, stem liikentee- ~ liikenne.
// Genitive liikenteen, partitive liikennettä, illative liikenteeseen. Usually singular.
const liikenne: Word = {
  fi: "liikenne",
  slug: "liikenne",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "traffic",
  selitys:
    "Teillä tai ilmassa liikkuvat ajoneuvot ja ihmiset: 'vilkas liikenne'. Tyyppi 48, astevaihtelu nt:nn (liikenne → liikenteen). Yleensä yksikössä. Johdettu sanasta liike. Vrt. joukkoliikenne, liikennevalo.",
  kuva: { alt: "liikenne – teillä liikkuvat ajoneuvot ja ihmiset" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu nt:nn (liikenne ↔ liikentee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "liikenteen", merkitys: "of the traffic" },
      { sija: "partitiivi (yks.)", muoto: "liikennettä", merkitys: "traffic (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "liikenteeseen", merkitys: "into the traffic" },
    ],
    huom:
      "Nominatiivi liikenne (nn, heikko aste), vahva aste nt obliikvimuodoissa (liikenteen, liikenteessä). Yleensä yksikössä. Vrt. joukkoliikenne = public transport, liikenneonnettomuus = traffic accident.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "liikenne" },
          { label: "Partitiivi", form: "liikennettä" },
          { label: "Genetiivi", form: "liikenteen" },
          { label: "Inessiivi", form: "liikenteessä" },
          { label: "Elatiivi", form: "liikenteestä" },
          { label: "Illatiivi", form: "liikenteeseen" },
          { label: "Adessiivi", form: "liikenteellä" },
          { label: "Ablatiivi", form: "liikenteeltä" },
          { label: "Allatiivi", form: "liikenteelle" },
          { label: "Essiivi", form: "liikenteenä" },
          { label: "Translatiivi", form: "liikenteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "liikenteet" },
          { label: "Partitiivi", form: "liikenteitä" },
          { label: "Genetiivi", form: "liikenteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "joukkoliikenne",
      en: "public transport",
      taso: "B1",
      esim: { fi: "Käytän usein joukkoliikennettä.", en: "I often use public transport." },
    },
    {
      fi: "liikennevalo",
      en: "traffic light",
      taso: "A2",
      esim: { fi: "Pysähdy punaisella liikennevalolla.", en: "Stop at the red traffic light." },
    },
    {
      fi: "liikenneonnettomuus",
      en: "traffic accident",
      taso: "B2",
      esim: { fi: "Liikenneonnettomuus tukki tien.", en: "A traffic accident blocked the road." },
    },
  ],
  synonyymit: [
    { fi: "liikennevirta", en: "traffic flow" },
    { fi: "ajoneuvoliikenne", en: "vehicle traffic" },
  ],
  esimerkit: {
    A2: { fi: "Aamulla on paljon liikennettä.", en: "There is a lot of traffic in the morning." },
    B1: { fi: "Liikenne ruuhkautui onnettomuuden takia.", en: "Traffic jammed because of the accident." },
    B2: {
      fi: "Kaupunki yrittää vähentää liikennettä keskustassa pyöräteillä.",
      en: "The city is trying to reduce traffic in the centre with bike lanes.",
    },
  },
  updatedAt: "2026-06-06",
};

export default liikenne;
