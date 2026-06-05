import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus nominal type 10/koira, no gradation.
// Genitive mukavan, partitive mukavaa. Comparative mukavampi, superlative mukavin.
const mukava: Word = {
  fi: "mukava",
  slug: "mukava",
  pos: "adjektiivi",
  posClass: "adjektiivi",
  level: "A1",
  en: "nice, pleasant, comfortable",
  selitys:
    "Miellyttävä; helppo olla. Tyyppi 10/koira, ei astevaihtelua. Vertailu mukava – mukavampi – mukavin. Käytetään ihmisistä ja asioista.",
  kuva: { emoji: "😊", alt: "mukava – miellyttävä ja rento" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi", muoto: "mukavan", merkitys: "nice (genitive)" },
      { sija: "partitiivi", muoto: "mukavaa", merkitys: "nice (partitive)" },
      { sija: "komparatiivi", muoto: "mukavampi", merkitys: "nicer" },
      { sija: "superlatiivi", muoto: "mukavin", merkitys: "nicest" },
    ],
    huom:
      "Vertailu säännöllinen: mukava – mukavampi – mukavin. Ihmisestä: 'mukava ihminen'; asiasta: 'mukava ilta'. Vrt. kiva (puhekielinen synonyymi).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö",
        rows: [
          { label: "Nominatiivi", form: "mukava" },
          { label: "Genetiivi", form: "mukavan" },
          { label: "Partitiivi", form: "mukavaa" },
          { label: "Inessiivi", form: "mukavassa" },
          { label: "Illatiivi", form: "mukavaan" },
          { label: "Adessiivi", form: "mukavalla" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusmuoto", form: "mukava" },
          { label: "Komparatiivi", form: "mukavampi" },
          { label: "Superlatiivi", form: "mukavin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mukavuus",
      en: "comfort, convenience",
      taso: "B1",
      esim: { fi: "Asunnossa on kaikki mukavuudet.", en: "The flat has all the comforts." },
    },
    {
      fi: "epämukava",
      en: "uncomfortable",
      taso: "B1",
      esim: { fi: "Tuoli oli epämukava.", en: "The chair was uncomfortable." },
    },
    {
      fi: "mukavasti",
      en: "comfortably, nicely",
      taso: "B1",
      esim: { fi: "Istuin mukavasti sohvalla.", en: "I sat comfortably on the sofa." },
    },
  ],
  synonyymit: [
    { fi: "kiva", en: "nice (colloquial)" },
    { fi: "miellyttävä", en: "pleasant" },
  ],
  esimerkit: {
    A2: { fi: "Hän on tosi mukava ihminen.", en: "She is a really nice person." },
    B1: { fi: "Vietimme mukavan illan yhdessä.", en: "We spent a pleasant evening together." },
    B2: {
      fi: "Uusi sohva on paljon mukavampi kuin vanha, jonka annoimme naapurille.",
      en: "The new sofa is much more comfortable than the old one we gave to the neighbour.",
    },
  },
  updatedAt: "2026-06-05",
};

export default mukava;
