import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala with pp:p gradation. Strong pp in
// open syllables (kauppaa, kauppaan), weak p in closed (kaupan, kaupalla).
const kauppa: Word = {
  fi: "kauppa",
  slug: "kauppa",
  pos: "substantiivi (tyyppi: kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "shop, store; trade, deal",
  selitys:
    "Paikka, jossa myydään tavaroita; myös kaupankäynti tai sopimus. Astevaihtelu pp:p (kauppa → kaupan).",
  kuva: { alt: "kauppa – ostoskärry" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu pp:p (kauppa → kaupan)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "kauppaa", merkitys: "shop (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "kaupan", merkitys: "of the shop" },
      { sija: "partitiivi (mon.)", muoto: "kauppoja", merkitys: "shops (partitive pl.)" },
    ],
    huom:
      "Vahva pp avotavussa (kauppaa, kauppaan), heikko p umpitavussa (kaupan, kaupassa). 'Mennä kauppaan' = go to the store.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kauppa" },
          { label: "Partitiivi", form: "kauppaa" },
          { label: "Genetiivi", form: "kaupan" },
          { label: "Inessiivi", form: "kaupassa" },
          { label: "Elatiivi", form: "kaupasta" },
          { label: "Illatiivi", form: "kauppaan" },
          { label: "Adessiivi", form: "kaupalla" },
          { label: "Ablatiivi", form: "kaupalta" },
          { label: "Allatiivi", form: "kaupalle" },
          { label: "Essiivi", form: "kauppana" },
          { label: "Translatiivi", form: "kaupaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kaupat" },
          { label: "Partitiivi", form: "kauppoja" },
          { label: "Genetiivi", form: "kauppojen" },
          { label: "Illatiivi", form: "kauppoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ruokakauppa",
      en: "grocery store",
      taso: "A2",
      esim: { fi: "Käyn ruokakaupassa joka päivä.", en: "I go to the grocery store every day." },
    },
    {
      fi: "kauppias",
      en: "merchant, shopkeeper",
      taso: "B1",
      esim: { fi: "Kauppias avasi liikkeen aamulla.", en: "The shopkeeper opened the store in the morning." },
    },
    {
      fi: "kaupallinen",
      en: "commercial",
      taso: "B2",
      esim: { fi: "Elokuva oli suuri kaupallinen menestys.", en: "The film was a big commercial success." },
    },
  ],
  synonyymit: [
    { fi: "myymälä", en: "store, retail outlet" },
    { fi: "liike", en: "shop, business" },
  ],
  esimerkit: {
    A2: { fi: "Kauppa on auki kello yhdeksään.", en: "The shop is open until nine." },
    B1: { fi: "Ostin kaupasta leipää ja maitoa.", en: "I bought bread and milk from the shop." },
    B2: {
      fi: "Kauppa syntyi, kun osapuolet pääsivät sopuun hinnasta.",
      en: "The deal came about when the parties agreed on the price.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kauppa;
