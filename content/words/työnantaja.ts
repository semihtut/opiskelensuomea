import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem työnantaja-.
// Genitive työnantajan, partitive työnantajaa, partitive pl työnantajia.
const tyonantaja: Word = {
  fi: "työnantaja",
  slug: "työnantaja",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "employer",
  selitys:
    "Henkilö tai yritys, joka palkkaa ja maksaa palkkaa: 'hyvä työnantaja'. Tyyppi 10/koira, ei astevaihtelua. Yhdyssana työ (genetiivi työn) + antaja ('työn antaja'). Vastakohta työntekijä. Vrt. antaa, palkata, työntekijä.",
  kuva: { alt: "työnantaja – yritys tai henkilö joka palkkaa työntekijöitä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo työnantaja-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "työnantajan", merkitys: "of the employer" },
      { sija: "partitiivi (yks.)", muoto: "työnantajaa", merkitys: "employer (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "työnantajia", merkitys: "employers (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko työnantajia (-ja-agenttisana). Yhdyssana työn + antaja. Vastakohta työntekijä = employee. Vrt. antaa, palkata.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "työnantaja" },
          { label: "Partitiivi", form: "työnantajaa" },
          { label: "Genetiivi", form: "työnantajan" },
          { label: "Inessiivi", form: "työnantajassa" },
          { label: "Elatiivi", form: "työnantajasta" },
          { label: "Illatiivi", form: "työnantajaan" },
          { label: "Adessiivi", form: "työnantajalla" },
          { label: "Ablatiivi", form: "työnantajalta" },
          { label: "Allatiivi", form: "työnantajalle" },
          { label: "Essiivi", form: "työnantajana" },
          { label: "Translatiivi", form: "työnantajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "työnantajat" },
          { label: "Partitiivi", form: "työnantajia" },
          { label: "Genetiivi", form: "työnantajien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työntekijä",
      en: "employee, worker",
      taso: "A2",
      esim: { fi: "Yrityksessä on sata työntekijää.", en: "The company has a hundred employees." },
    },
    {
      fi: "työnantajamaine",
      en: "employer reputation, employer brand",
      taso: "B2",
      esim: { fi: "Hyvä työnantajamaine houkuttelee osaajia.", en: "A good employer reputation attracts talent." },
    },
  ],
  synonyymit: [
    { fi: "palkanmaksaja", en: "the one who pays the wages" },
  ],
  esimerkit: {
    A2: { fi: "Työnantajani on iso yritys.", en: "My employer is a big company." },
    B1: { fi: "Työnantaja maksaa palkan kerran kuussa.", en: "The employer pays the salary once a month." },
    B2: {
      fi: "Hyvä työnantaja huolehtii työntekijöidensä hyvinvoinnista ja kehityksestä.",
      en: "A good employer takes care of its employees' well-being and development.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tyonantaja;
