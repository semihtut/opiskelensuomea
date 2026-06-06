import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem piha-.
// Genitive pihan, partitive pihaa, illative pihaan, partitive pl pihoja.
const piha: Word = {
  fi: "piha",
  slug: "piha",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "yard, courtyard",
  selitys:
    "Talon ympärillä oleva alue: 'leikkiä pihalla'. Tyyppi 9, ei astevaihtelua. Partitiivin monikko pihoja. Vrt. takapiha (backyard), pihapuu, sisäpiha.",
  kuva: { emoji: "🏡", alt: "piha – talon ympärillä oleva alue" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pihan", merkitys: "of the yard" },
      { sija: "partitiivi (yks.)", muoto: "pihaa", merkitys: "yard (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pihoja", merkitys: "yards (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9, ei astevaihtelua. Partitiivin monikossa a → o: pihoja. 'Pihalla' = in the yard (adessiivi). Vrt. takapiha = backyard, sisäpiha = inner courtyard.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "piha" },
          { label: "Partitiivi", form: "pihaa" },
          { label: "Genetiivi", form: "pihan" },
          { label: "Inessiivi", form: "pihassa" },
          { label: "Elatiivi", form: "pihasta" },
          { label: "Illatiivi", form: "pihaan" },
          { label: "Adessiivi", form: "pihalla" },
          { label: "Ablatiivi", form: "pihalta" },
          { label: "Allatiivi", form: "pihalle" },
          { label: "Essiivi", form: "pihana" },
          { label: "Translatiivi", form: "pihaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pihat" },
          { label: "Partitiivi", form: "pihoja" },
          { label: "Genetiivi", form: "pihojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "takapiha",
      en: "backyard",
      taso: "B1",
      esim: { fi: "Lapset leikkivät takapihalla.", en: "The children play in the backyard." },
    },
    {
      fi: "pihapuu",
      en: "yard tree",
      taso: "B2",
      esim: { fi: "Vanha pihapuu antaa varjoa.", en: "The old yard tree gives shade." },
    },
    {
      fi: "sisäpiha",
      en: "inner courtyard",
      taso: "B2",
      esim: { fi: "Talon sisäpiha on rauhallinen.", en: "The building's inner courtyard is peaceful." },
    },
  ],
  synonyymit: [
    { fi: "piha-alue", en: "yard area" },
    { fi: "tanhua", en: "farmyard (dialectal)" },
  ],
  esimerkit: {
    A2: { fi: "Koira juoksee pihalla.", en: "The dog runs in the yard." },
    B1: { fi: "Pihassa on iso omenapuu.", en: "There is a big apple tree in the yard." },
    B2: {
      fi: "Kesällä vietämme paljon aikaa pihalla grillaten.",
      en: "In summer we spend a lot of time in the yard grilling.",
    },
  },
  updatedAt: "2026-06-06",
};

export default piha;
