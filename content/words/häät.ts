import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: plurale tantum, no singular. Genitive häiden, partitive häitä, illative häihin.
const haat: Word = {
  fi: "häät",
  slug: "häät",
  pos: "substantiivi (monikkosana)",
  posClass: "substantiivi",
  level: "A2",
  en: "wedding",
  selitys:
    "Avioliiton solmimisen juhla. Monikkosana (plurale tantum): aina monikossa, 'mennä häihin', 'pitää häät'. Yksikkövartalo hää- esiintyy vain yhdyssanoissa (häämatka). Vrt. avioliitto, juhla, häämatka.",
  kuva: { emoji: "👰", alt: "häät – avioliiton solmimisen juhla" },

  kielioppi: {
    tyyppi: "substantiivi, monikkosana (plurale tantum); ei yksikkömuotoa",
    muodot: [
      { sija: "nominatiivi (mon.)", muoto: "häät", merkitys: "wedding" },
      { sija: "genetiivi (mon.)", muoto: "häiden", merkitys: "of the wedding" },
      { sija: "partitiivi (mon.)", muoto: "häitä", merkitys: "wedding (partitive)" },
    ],
    huom:
      "Monikkosana: ei yksikkömuotoa (kuten kasvot, hautajaiset). 'Mennä häihin' (illat.), 'olla häissä' (iness.). Yksikkövartalo hää- vain yhdyssanoissa: hääpäivä, häämatka. Vrt. avioliitto, hautajaiset.",
  },
  taivutus: {
    sections: [
      {
        title: "Monikko (sijat)",
        rows: [
          { label: "Nominatiivi", form: "häät" },
          { label: "Partitiivi", form: "häitä" },
          { label: "Genetiivi", form: "häiden" },
          { label: "Inessiivi", form: "häissä" },
          { label: "Elatiivi", form: "häistä" },
          { label: "Illatiivi", form: "häihin" },
          { label: "Adessiivi", form: "häillä" },
          { label: "Ablatiivi", form: "häiltä" },
          { label: "Allatiivi", form: "häille" },
          { label: "Essiivi", form: "häinä" },
          { label: "Translatiivi", form: "häiksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hääpäivä",
      en: "wedding day; anniversary",
      taso: "B1",
      esim: { fi: "Tänään on heidän hääpäivänsä.", en: "Today is their wedding day." },
    },
    {
      fi: "häämatka",
      en: "honeymoon",
      taso: "B1",
      esim: { fi: "He lähtivät häämatkalle.", en: "They went on their honeymoon." },
    },
  ],
  synonyymit: [
    { fi: "vihkiäiset", en: "wedding ceremony" },
  ],
  esimerkit: {
    A2: { fi: "Olin ystäväni häissä.", en: "I was at my friend's wedding." },
    B1: { fi: "Häät pidettiin kesällä rannalla.", en: "The wedding was held on the beach in summer." },
    B2: {
      fi: "Häihin oli kutsuttu lähes kaksisataa vierasta.",
      en: "Almost two hundred guests had been invited to the wedding.",
    },
  },
  updatedAt: "2026-06-07",
};

export default haat;
