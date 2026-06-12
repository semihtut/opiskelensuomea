import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (kone): Kotus type 48/hame, no gradation, stem lentokone ~ lentokonee-.
// Genitive lentokoneen, partitive lentokonetta, illative lentokoneeseen, partitive pl lentokoneita.
const lentokone: Word = {
  fi: "lentokone",
  slug: "lentokone",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "A2",
  en: "airplane, aircraft",
  selitys:
    "Ilmassa lentävä kulkuneuvo: 'nousta lentokoneeseen'. Yhdyssana lento + kone. Tyyppi 48, ei astevaihtelua; vartalo lentokonee-. Partitiivin monikko lentokoneita. Arkikielessä myös lentsikka.",
  kuva: { alt: "lentokone – ilmassa lentävä kulkuneuvo" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua; vartalo lentokonee-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lentokoneen", merkitys: "of the airplane" },
      { sija: "partitiivi (yks.)", muoto: "lentokonetta", merkitys: "airplane (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lentokoneita", merkitys: "airplanes (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48 (kone-tyyppi): genetiivi lentokoneen, partitiivi lentokonetta, partitiivin monikko lentokoneita. 'Lentokoneella' = by plane. Vrt. kone = machine, lentää = to fly.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lentokone" },
          { label: "Partitiivi", form: "lentokonetta" },
          { label: "Genetiivi", form: "lentokoneen" },
          { label: "Inessiivi", form: "lentokoneessa" },
          { label: "Elatiivi", form: "lentokoneesta" },
          { label: "Illatiivi", form: "lentokoneeseen" },
          { label: "Adessiivi", form: "lentokoneella" },
          { label: "Ablatiivi", form: "lentokoneelta" },
          { label: "Allatiivi", form: "lentokoneelle" },
          { label: "Essiivi", form: "lentokoneena" },
          { label: "Translatiivi", form: "lentokoneeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lentokoneet" },
          { label: "Partitiivi", form: "lentokoneita" },
          { label: "Genetiivi", form: "lentokoneiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lentää",
      en: "to fly",
      taso: "A2",
      esim: { fi: "Lentokone lensi pilvien yläpuolella.", en: "The plane flew above the clouds." },
    },
    {
      fi: "lento",
      en: "flight",
      taso: "B1",
      esim: { fi: "Lento Helsinkiin kestää kaksi tuntia.", en: "The flight to Helsinki takes two hours." },
    },
    {
      fi: "matkustajakone",
      en: "passenger aircraft",
      taso: "B2",
      esim: { fi: "Iso matkustajakone laskeutui radalle.", en: "A large passenger aircraft landed on the runway." },
    },
  ],
  synonyymit: [
    { fi: "kone", en: "plane (colloquial)" },
    { fi: "ilma-alus", en: "aircraft (formal)" },
  ],
  esimerkit: {
    A2: { fi: "Matkustamme lentokoneella.", en: "We travel by airplane." },
    B1: { fi: "Lentokone lähtee aikataulussa.", en: "The plane departs on schedule." },
    B2: {
      fi: "Lentokone joutui kääntymään takaisin teknisen vian vuoksi.",
      en: "The plane had to turn back due to a technical fault.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lentokone;
