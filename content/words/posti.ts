import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation (st does not gradate).
// Genitive postin, partitive postia, illative postiin, partitive pl posteja.
const posti: Word = {
  fi: "posti",
  slug: "posti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "post, mail; post office",
  selitys:
    "Kirjeiden ja pakettien kuljetus; myös postitoimisto. Tyyppi 5, ei astevaihtelua (st ei vaihtele).",
  kuva: { emoji: "📮", alt: "posti – postilaatikko ja kirjeet" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "postin", merkitys: "of the post" },
      { sija: "partitiivi (yks.)", muoto: "postia", merkitys: "mail (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "posteja", merkitys: "posts (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua: postin, postissa. 'Mennä postiin' = go to the post office; 'tuli postia' = mail arrived.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "posti" },
          { label: "Partitiivi", form: "postia" },
          { label: "Genetiivi", form: "postin" },
          { label: "Inessiivi", form: "postissa" },
          { label: "Elatiivi", form: "postista" },
          { label: "Illatiivi", form: "postiin" },
          { label: "Adessiivi", form: "postilla" },
          { label: "Ablatiivi", form: "postilta" },
          { label: "Allatiivi", form: "postille" },
          { label: "Essiivi", form: "postina" },
          { label: "Translatiivi", form: "postiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "postit" },
          { label: "Partitiivi", form: "posteja" },
          { label: "Genetiivi", form: "postien" },
          { label: "Inessiivi", form: "posteissa" },
          { label: "Illatiivi", form: "posteihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "postimerkki",
      en: "postage stamp",
      taso: "A2",
      esim: { fi: "Liimasin postimerkin kirjeeseen.", en: "I stuck a stamp on the letter." },
    },
    {
      fi: "postilaatikko",
      en: "mailbox",
      taso: "A2",
      esim: { fi: "Laitoin kortin postilaatikkoon.", en: "I put the card in the mailbox." },
    },
    {
      fi: "postittaa",
      en: "to mail, post",
      taso: "B1",
      esim: { fi: "Postitin paketin eilen.", en: "I mailed the parcel yesterday." },
    },
  ],
  synonyymit: [
    { fi: "postitoimisto", en: "post office" },
    { fi: "kirjeposti", en: "letter mail" },
  ],
  esimerkit: {
    A2: { fi: "Saitko tänään postia?", en: "Did you get any mail today?" },
    B1: { fi: "Hain paketin postista.", en: "I picked up the parcel from the post office." },
    B2: {
      fi: "Posti tuo paketit yleensä iltapäivällä.",
      en: "The post usually delivers parcels in the afternoon.",
    },
  },
  updatedAt: "2026-06-05",
};

export default posti;
