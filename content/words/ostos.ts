import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem ostokse-.
// Genitive ostoksen, partitive ostosta, illative ostokseen, partitive pl ostoksia.
const ostos: Word = {
  fi: "ostos",
  slug: "ostos",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "A2",
  en: "purchase; (pl.) shopping",
  selitys:
    "Ostettu tavara tai ostamisen tapahtuma: 'tehdä ostoksia'. Tyyppi 39, ei astevaihtelua; vartalo ostokse-. Partitiivin monikko ostoksia. Johdettu verbistä ostaa. Monikossa ostokset = the shopping.",
  kuva: { alt: "ostos – ostettu tavara" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua; vartalo ostokse-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ostoksen", merkitys: "of the purchase" },
      { sija: "partitiivi (yks.)", muoto: "ostosta", merkitys: "purchase (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ostoksia", merkitys: "purchases (partitive pl.)" },
    ],
    huom:
      "Verbijohdos ostaa → -os; vartalo ostokse- (genetiivi ostoksen). 'Tehdä ostoksia' = to do the shopping; 'käydä ostoksilla' = to go shopping (adessiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ostos" },
          { label: "Partitiivi", form: "ostosta" },
          { label: "Genetiivi", form: "ostoksen" },
          { label: "Inessiivi", form: "ostoksessa" },
          { label: "Elatiivi", form: "ostoksesta" },
          { label: "Illatiivi", form: "ostokseen" },
          { label: "Adessiivi", form: "ostoksella" },
          { label: "Ablatiivi", form: "ostokselta" },
          { label: "Allatiivi", form: "ostokselle" },
          { label: "Essiivi", form: "ostoksena" },
          { label: "Translatiivi", form: "ostokseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ostokset" },
          { label: "Partitiivi", form: "ostoksia" },
          { label: "Genetiivi", form: "ostosten / ostoksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ostoskori",
      en: "shopping basket",
      taso: "A2",
      esim: { fi: "Laitoin maidon ostoskoriin.", en: "I put the milk in the shopping basket." },
    },
    {
      fi: "ostoslista",
      en: "shopping list",
      taso: "A2",
      esim: { fi: "Tein ostoslistan ennen kauppaa.", en: "I made a shopping list before the shop." },
    },
    {
      fi: "ostaa",
      en: "to buy",
      taso: "A2",
      esim: { fi: "Ostin uudet kengät.", en: "I bought new shoes." },
    },
  ],
  synonyymit: [
    { fi: "hankinta", en: "acquisition, purchase" },
    { fi: "kauppa", en: "deal, purchase" },
  ],
  esimerkit: {
    A2: { fi: "Teen ostokset lauantaina.", en: "I do the shopping on Saturday." },
    B1: { fi: "Kävimme ostoksilla kauppakeskuksessa.", en: "We went shopping at the mall." },
    B2: {
      fi: "Verkkokaupasta tehdyt ostokset saapuivat jo seuraavana päivänä.",
      en: "The purchases made from the online shop arrived the very next day.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ostos;
