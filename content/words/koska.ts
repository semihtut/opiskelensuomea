import type { Word } from "@/lib/content-types";

// Subordinating conjunction "koska" (because). Invariant. Introduces a reason clause.
const koska: Word = {
  fi: "koska",
  slug: "koska",
  pos: "konjunktio (alistuskonjunktio)",
  posClass: "konjunktio",
  level: "A1",
  en: "because",
  selitys:
    "Alistuskonjunktio, joka ilmaisee syytä. Ei taivuteta. Aloittaa sivulauseen: 'Jäin kotiin, koska olin sairas.' Vastaa kysymykseen miksi?",
  kuva: { emoji: "❓", alt: "koska – syy: miksi?" },

  kielioppi: {
    tyyppi: "alistuskonjunktio (syy); taipumaton; aloittaa sivulauseen",
    muodot: [
      { sija: "perusmuoto", muoto: "koska", merkitys: "because" },
      { sija: "vrt.", muoto: "kun", merkitys: "as, since (causal too)" },
      { sija: "vrt.", muoto: "siksi (että)", merkitys: "for the reason (that)" },
    ],
    huom:
      "Vastaa kysymykseen 'miksi?'. Sivulauseen sanajärjestys on suora: 'koska olin väsynyt'. Puhekielessä myös 'kun' ilmaisee syytä.",
  },
  johdokset: [
    {
      fi: "koska tahansa",
      en: "any time, whenever",
      taso: "B2",
      esim: { fi: "Voit soittaa koska tahansa.", en: "You can call any time." },
    },
    {
      fi: "siksi",
      en: "therefore, for that reason",
      taso: "A2",
      esim: { fi: "Satoi, siksi jäin kotiin.", en: "It rained, therefore I stayed home." },
    },
    {
      fi: "sen takia",
      en: "because of that",
      taso: "B1",
      esim: { fi: "Bussi myöhästyi, sen takia myöhästyin.", en: "The bus was late, because of that I was late." },
    },
  ],
  synonyymit: [
    { fi: "kun", en: "as, since" },
    { fi: "sillä", en: "for, because (formal)" },
  ],
  esimerkit: {
    A2: { fi: "En tule, koska olen sairas.", en: "I'm not coming, because I'm sick." },
    B1: { fi: "Pidän talvesta, koska rakastan lunta.", en: "I like winter, because I love snow." },
    B2: {
      fi: "Hän myöhästyi kokouksesta, koska juna oli pysähtynyt keskelle matkaa.",
      en: "She was late for the meeting, because the train had stopped midway.",
    },
  },
  updatedAt: "2026-06-05",
};

export default koska;
