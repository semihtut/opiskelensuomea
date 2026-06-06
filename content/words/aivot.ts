import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation; used as plurale tantum (aivot).
// Singular aivo is rare. Genitive pl aivojen, partitive pl aivoja, inessive pl aivoissa.
const aivot: Word = {
  fi: "aivot",
  slug: "aivot",
  pos: "substantiivi (monikkosana, tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "brain(s)",
  selitys:
    "Pään sisällä oleva ajattelun ja hermoston keskus: 'ihmisen aivot'. Käytetään yleensä monikossa (aivot). Tyyppi 1, ei astevaihtelua. Vrt. aivosolu (brain cell), aivotyö (brain work).",
  kuva: { emoji: "🧠", alt: "aivot – ajattelun ja hermoston keskus" },

  kielioppi: {
    tyyppi: "substantiivi, monikkosana (plurale tantum); tyyppi 1/valo, ei astevaihtelua",
    muodot: [
      { sija: "nominatiivi (mon.)", muoto: "aivot", merkitys: "the brain" },
      { sija: "partitiivi (mon.)", muoto: "aivoja", merkitys: "brain (partitive pl.)" },
      { sija: "genetiivi (mon.)", muoto: "aivojen", merkitys: "of the brain" },
    ],
    huom:
      "Monikkosana: käytetään lähes aina monikossa (vrt. housut, kasvot). Yksikkö 'aivo' on harvinainen ja viittaa aivopuoliskoon. 'Aivoissa' = in the brain. Vrt. aivosolu, aivotutkimus.",
  },
  taivutus: {
    sections: [
      {
        title: "Monikko (sijat)",
        rows: [
          { label: "Nominatiivi", form: "aivot" },
          { label: "Partitiivi", form: "aivoja" },
          { label: "Genetiivi", form: "aivojen" },
          { label: "Inessiivi", form: "aivoissa" },
          { label: "Elatiivi", form: "aivoista" },
          { label: "Illatiivi", form: "aivoihin" },
          { label: "Adessiivi", form: "aivoilla" },
          { label: "Ablatiivi", form: "aivoilta" },
          { label: "Allatiivi", form: "aivoille" },
          { label: "Essiivi", form: "aivoina" },
          { label: "Translatiivi", form: "aivoiksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "aivosolu",
      en: "brain cell, neuron",
      taso: "B2",
      esim: { fi: "Aivosolut viestivät keskenään.", en: "Brain cells communicate with each other." },
    },
    {
      fi: "aivotutkimus",
      en: "brain research, neuroscience",
      taso: "B2",
      esim: { fi: "Aivotutkimus on edennyt nopeasti.", en: "Brain research has advanced rapidly." },
    },
    {
      fi: "aivoriihi",
      en: "brainstorming session",
      taso: "B2",
      esim: { fi: "Pidimme aivoriihen uusista ideoista.", en: "We held a brainstorming session on new ideas." },
    },
  ],
  synonyymit: [
    { fi: "aivokuori", en: "cerebral cortex" },
    { fi: "äly", en: "intellect (figurative)" },
  ],
  esimerkit: {
    A2: { fi: "Aivot tarvitsevat lepoa.", en: "The brain needs rest." },
    B1: { fi: "Liikunta on hyväksi aivoille.", en: "Exercise is good for the brain." },
    B2: {
      fi: "Ihmisen aivot kuluttavat yllättävän paljon energiaa.",
      en: "The human brain consumes a surprising amount of energy.",
    },
  },
  updatedAt: "2026-06-06",
};

export default aivot;
