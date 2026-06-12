import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo (arvo), no gradation, stem keskiarvo-.
// Genitive keskiarvon, partitive keskiarvoa, partitive pl keskiarvoja.
const keskiarvo: Word = {
  fi: "keskiarvo",
  slug: "keskiarvo",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "average, mean",
  selitys:
    "Lukujen summa jaettuna niiden määrällä: 'arvosanojen keskiarvo'. Tyyppi 1/valo, ei astevaihtelua. Yhdyssana keski + arvo. Vrt. arvo, keskimäärin, summa.",
  kuva: { alt: "keskiarvo – lukujen summa jaettuna niiden määrällä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo keskiarvo-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "keskiarvon", merkitys: "of the average" },
      { sija: "partitiivi (yks.)", muoto: "keskiarvoa", merkitys: "average (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "keskiarvoja", merkitys: "averages (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua. Yhdyssana keski + arvo. Adverbi keskimäärin = on average. Vrt. arvo, keskimäärin, summa.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "keskiarvo" },
          { label: "Partitiivi", form: "keskiarvoa" },
          { label: "Genetiivi", form: "keskiarvon" },
          { label: "Inessiivi", form: "keskiarvossa" },
          { label: "Elatiivi", form: "keskiarvosta" },
          { label: "Illatiivi", form: "keskiarvoon" },
          { label: "Adessiivi", form: "keskiarvolla" },
          { label: "Ablatiivi", form: "keskiarvolta" },
          { label: "Allatiivi", form: "keskiarvolle" },
          { label: "Essiivi", form: "keskiarvona" },
          { label: "Translatiivi", form: "keskiarvoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "keskiarvot" },
          { label: "Partitiivi", form: "keskiarvoja" },
          { label: "Genetiivi", form: "keskiarvojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "keskimäärin",
      en: "on average",
      taso: "B1",
      esim: { fi: "Nukun keskimäärin seitsemän tuntia.", en: "I sleep seven hours on average." },
    },
    {
      fi: "arvo",
      en: "value, worth",
      taso: "B1",
      esim: { fi: "Talon arvo nousi.", en: "The value of the house rose." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Mikä on keskiarvosi?", en: "What is your grade average?" },
    B1: { fi: "Laske lukujen keskiarvo.", en: "Calculate the average of the numbers." },
    B2: {
      fi: "Palkkojen keskiarvo ei kerro kaikkea, koska erot ovat suuria.",
      en: "The average of the salaries doesn't tell everything, because the differences are large.",
    },
  },
  updatedAt: "2026-06-07",
};

export default keskiarvo;
