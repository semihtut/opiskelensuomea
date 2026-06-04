import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, plurale tantum
// (only plural). Genitive housujen, partitive housuja, inessive housuissa.
const housut: Word = {
  fi: "housut",
  slug: "housut",
  pos: "substantiivi (monikkosana, tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "trousers, pants",
  selitys:
    "Alavartalon vaate, jossa on kaksi lahjetta. Monikkosana (pluratiivi): esiintyy vain monikossa. Tyyppi 1, ei astevaihtelua.",
  kuva: { emoji: "👖", alt: "housut – housut" },

  kielioppi: {
    tyyppi: "substantiivi, monikkosana (plurale tantum), tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "nominatiivi (mon.)", muoto: "housut", merkitys: "trousers" },
      { sija: "partitiivi (mon.)", muoto: "housuja", merkitys: "trousers (partitive)" },
      { sija: "genetiivi (mon.)", muoto: "housujen", merkitys: "of the trousers" },
    ],
    huom:
      "Vain monikossa, kuten 'silmälasit' tai 'sakset'. Yksi vaatekappale on silti 'housut'. Yhdyssanat: farkut (= jeans), shortsit, verkkarit.",
  },
  taivutus: {
    sections: [
      {
        title: "Monikko (sijat)",
        rows: [
          { label: "Nominatiivi", form: "housut" },
          { label: "Partitiivi", form: "housuja" },
          { label: "Genetiivi", form: "housujen" },
          { label: "Inessiivi", form: "housuissa" },
          { label: "Elatiivi", form: "housuista" },
          { label: "Illatiivi", form: "housuihin" },
          { label: "Adessiivi", form: "housuilla" },
          { label: "Ablatiivi", form: "housuilta" },
          { label: "Allatiivi", form: "housuille" },
          { label: "Essiivi", form: "housuina" },
          { label: "Translatiivi", form: "housuiksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "farkut",
      en: "jeans",
      taso: "A2",
      esim: { fi: "Pidän mukavista farkuista.", en: "I like comfortable jeans." },
    },
    {
      fi: "shortsit",
      en: "shorts",
      taso: "A2",
      esim: { fi: "Kesällä käytän shortseja.", en: "In summer I wear shorts." },
    },
    {
      fi: "housunlahje",
      en: "trouser leg",
      taso: "B2",
      esim: { fi: "Housunlahje kastui sateessa.", en: "The trouser leg got wet in the rain." },
    },
  ],
  synonyymit: [
    { fi: "pöksyt", en: "pants (colloquial)" },
    { fi: "verkkarit", en: "sweatpants (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Nämä housut ovat liian pitkät.", en: "These trousers are too long." },
    B1: { fi: "Ostin mustat housut juhliin.", en: "I bought black trousers for the party." },
    B2: {
      fi: "Housut olivat niin mukavat, että ostin samat kahdessa värissä.",
      en: "The trousers were so comfortable that I bought the same in two colors.",
    },
  },
  updatedAt: "2026-06-04",
};

export default housut;
