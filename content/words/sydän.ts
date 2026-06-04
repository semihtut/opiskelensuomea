import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 33/kytkin, no gradation, IRREGULAR stem
// sydäme-. Genitive sydämen, partitive sydäntä, illative sydämeen, partitive pl sydämiä.
const sydan: Word = {
  fi: "sydän",
  slug: "sydän",
  pos: "substantiivi (tyyppi 33/kytkin)",
  posClass: "substantiivi",
  level: "A2",
  en: "heart",
  selitys:
    "Verta pumppaava elin; myös tunteiden ja jonkin keskuksen vertauskuva. Tyyppi 33, ei astevaihtelua, mutta vartalo on poikkeava: sydän → sydäme-.",
  kuva: { emoji: "❤️", alt: "sydän – sydän" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 33/kytkin; ei astevaihtelua, poikkeava vartalo sydäme-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sydämen", merkitys: "of the heart" },
      { sija: "partitiivi (yks.)", muoto: "sydäntä", merkitys: "heart (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sydämiä", merkitys: "hearts (partitive pl.)" },
    ],
    huom:
      "Nominatiivi sydän, mutta muut muodot vartalosta sydäme-: sydämen, sydämeen, sydämessä. Konsonanttivartalo näkyy partitiivissa sydäntä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sydän" },
          { label: "Partitiivi", form: "sydäntä" },
          { label: "Genetiivi", form: "sydämen" },
          { label: "Inessiivi", form: "sydämessä" },
          { label: "Elatiivi", form: "sydämestä" },
          { label: "Illatiivi", form: "sydämeen" },
          { label: "Adessiivi", form: "sydämellä" },
          { label: "Ablatiivi", form: "sydämeltä" },
          { label: "Allatiivi", form: "sydämelle" },
          { label: "Essiivi", form: "sydämenä" },
          { label: "Translatiivi", form: "sydämeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sydämet" },
          { label: "Partitiivi", form: "sydämiä" },
          { label: "Genetiivi", form: "sydämien" },
          { label: "Inessiivi", form: "sydämissä" },
          { label: "Illatiivi", form: "sydämiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sydämellinen",
      en: "warm-hearted, cordial",
      taso: "B2",
      esim: { fi: "Saimme sydämellisen vastaanoton.", en: "We got a warm welcome." },
    },
    {
      fi: "sydänkohtaus",
      en: "heart attack",
      taso: "B2",
      esim: { fi: "Hän sai sydänkohtauksen.", en: "He had a heart attack." },
    },
    {
      fi: "sydämetön",
      en: "heartless",
      taso: "B2",
      esim: { fi: "Se oli sydämetön teko.", en: "It was a heartless act." },
    },
  ],
  synonyymit: [
    { fi: "ydin", en: "core, heart (of a matter)" },
    { fi: "keskus", en: "center" },
  ],
  esimerkit: {
    A2: { fi: "Sydän lyö nopeasti juoksun jälkeen.", en: "The heart beats fast after running." },
    B1: { fi: "Kaupungin sydän on tori.", en: "The heart of the city is the market square." },
    B2: {
      fi: "Hän puhui suoraan sydämestään.",
      en: "She spoke straight from her heart.",
    },
  },
  updatedAt: "2026-06-04",
};

export default sydan;
