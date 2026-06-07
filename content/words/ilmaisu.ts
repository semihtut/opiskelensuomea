import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem ilmaisu-.
// Genitive ilmaisun, partitive ilmaisua, partitive pl ilmaisuja.
const ilmaisu: Word = {
  fi: "ilmaisu",
  slug: "ilmaisu",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B2",
  en: "expression; phrase",
  selitys:
    "Tapa ilmaista ajatus tai tunne, tai kielen sanonta: 'taiteellinen ilmaisu', 'kohtelias ilmaisu'. Tyyppi 2/palvelu, ei astevaihtelua. Johdettu verbistä ilmaista. Vrt. ilmaista, sanonta, ilme.",
  kuva: { emoji: "💬", alt: "ilmaisu – tapa ilmaista ajatus tai tunne" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua (vartalo ilmaisu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ilmaisun", merkitys: "of the expression" },
      { sija: "partitiivi (yks.)", muoto: "ilmaisua", merkitys: "expression (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ilmaisuja", merkitys: "expressions (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2/palvelu: ei astevaihtelua. Teonnimi verbistä ilmaista. 'Sananvapaus' = freedom of expression; 'ilmaisuvapaus'. Vrt. ilmaista, sanonta = saying.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ilmaisu" },
          { label: "Partitiivi", form: "ilmaisua" },
          { label: "Genetiivi", form: "ilmaisun" },
          { label: "Inessiivi", form: "ilmaisussa" },
          { label: "Elatiivi", form: "ilmaisusta" },
          { label: "Illatiivi", form: "ilmaisuun" },
          { label: "Adessiivi", form: "ilmaisulla" },
          { label: "Ablatiivi", form: "ilmaisulta" },
          { label: "Allatiivi", form: "ilmaisulle" },
          { label: "Essiivi", form: "ilmaisuna" },
          { label: "Translatiivi", form: "ilmaisuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ilmaisut" },
          { label: "Partitiivi", form: "ilmaisuja" },
          { label: "Genetiivi", form: "ilmaisujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ilmaista",
      en: "to express",
      taso: "B2",
      esim: { fi: "Hän ilmaisi mielipiteensä selvästi.", en: "He expressed his opinion clearly." },
    },
    {
      fi: "ilmaisuvoima",
      en: "expressive power",
      taso: "B2",
      esim: { fi: "Runolla on suuri ilmaisuvoima.", en: "The poem has great expressive power." },
    },
  ],
  synonyymit: [
    { fi: "sanonta", en: "saying, phrase" },
  ],
  esimerkit: {
    A2: { fi: "Se on vanha ilmaisu.", en: "That is an old expression." },
    B1: { fi: "Opin uuden ilmaisun.", en: "I learned a new expression." },
    B2: {
      fi: "Taide antaa tunteille ilmaisun, jota sanat eivät aina tavoita.",
      en: "Art gives feelings an expression that words cannot always reach.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ilmaisu;
