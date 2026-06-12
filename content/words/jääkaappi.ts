import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (kaappi): Kotus type 5/risti, pp:p gradation, stem jääkaappi- ~ jääkaapi-.
// Genitive jääkaapin, partitive jääkaappia, illative jääkaappiin, partitive pl jääkaappeja.
const jääkaappi: Word = {
  fi: "jääkaappi",
  slug: "jääkaappi",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "fridge, refrigerator",
  selitys:
    "Kylmä kaappi ruoan säilyttämiseen: 'maito on jääkaapissa'. Yhdyssana jää + kaappi. Tyyppi 5, astevaihtelu pp:p (jääkaappi → jääkaapin). Partitiivin monikko jääkaappeja.",
  kuva: { alt: "jääkaappi – kylmä kaappi ruoan säilyttämiseen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu pp:p (jääkaappi ↔ jääkaapi-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "jääkaapin", merkitys: "of the fridge" },
      { sija: "partitiivi (yks.)", muoto: "jääkaappia", merkitys: "fridge (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "jääkaappeja", merkitys: "fridges (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa pp → p: genetiivi jääkaapin, inessiivi jääkaapissa. Vahva aste pp säilyy partitiivissa jääkaappia ja monikossa jääkaappeja. 'Jääkaapissa' = in the fridge. Vrt. pakastin = freezer.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "jääkaappi" },
          { label: "Partitiivi", form: "jääkaappia" },
          { label: "Genetiivi", form: "jääkaapin" },
          { label: "Inessiivi", form: "jääkaapissa" },
          { label: "Elatiivi", form: "jääkaapista" },
          { label: "Illatiivi", form: "jääkaappiin" },
          { label: "Adessiivi", form: "jääkaapilla" },
          { label: "Ablatiivi", form: "jääkaapilta" },
          { label: "Allatiivi", form: "jääkaapille" },
          { label: "Essiivi", form: "jääkaappina" },
          { label: "Translatiivi", form: "jääkaapiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "jääkaapit" },
          { label: "Partitiivi", form: "jääkaappeja" },
          { label: "Genetiivi", form: "jääkaappien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pakastin",
      en: "freezer",
      taso: "B1",
      esim: { fi: "Marjat ovat pakastimessa.", en: "The berries are in the freezer." },
    },
    {
      fi: "kaappi",
      en: "cabinet, cupboard",
      taso: "A2",
      esim: { fi: "Lasit ovat kaapissa.", en: "The glasses are in the cupboard." },
    },
    {
      fi: "jääkaappimagneetti",
      en: "fridge magnet",
      taso: "B2",
      esim: { fi: "Keräilen jääkaappimagneetteja.", en: "I collect fridge magnets." },
    },
  ],
  synonyymit: [
    { fi: "kylmäkaappi", en: "cold cabinet" },
    { fi: "viileäkaappi", en: "cooler cabinet" },
  ],
  esimerkit: {
    A2: { fi: "Maito on jääkaapissa.", en: "The milk is in the fridge." },
    B1: { fi: "Jääkaappi pitää sulattaa joskus.", en: "The fridge needs defrosting sometimes." },
    B2: {
      fi: "Ostimme uuden jääkaapin, koska vanha kulutti liikaa sähköä.",
      en: "We bought a new fridge because the old one used too much electricity.",
    },
  },
  updatedAt: "2026-06-06",
};

export default jääkaappi;
