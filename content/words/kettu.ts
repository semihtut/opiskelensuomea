import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, tt:t gradation, stem kettu- ~ ketu-.
// Genitive ketun, partitive kettua, partitive pl kettuja.
const kettu: Word = {
  fi: "kettu",
  slug: "kettu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "fox",
  selitys:
    "Punaturkkinen metsäeläin; kuvaannollisesti ovela ihminen: 'ovela kuin kettu'. Tyyppi 1/valo, astevaihtelu tt:t (kettu → ketun). Vrt. metsä, jänis, ovela.",
  kuva: { alt: "kettu – punaturkkinen metsäeläin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu tt:t (kettu ~ ketu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ketun", merkitys: "of the fox" },
      { sija: "partitiivi (yks.)", muoto: "kettua", merkitys: "fox (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kettuja", merkitys: "foxes (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva kettu (nominatiivi, partitiivi kettua), heikko ketu- (ketun, ketulla). Kuvaannollisesti 'kettu' = ovela ihminen. Vrt. jänis, ovela.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kettu" },
          { label: "Partitiivi", form: "kettua" },
          { label: "Genetiivi", form: "ketun" },
          { label: "Inessiivi", form: "ketussa" },
          { label: "Elatiivi", form: "ketusta" },
          { label: "Illatiivi", form: "kettuun" },
          { label: "Adessiivi", form: "ketulla" },
          { label: "Ablatiivi", form: "ketulta" },
          { label: "Allatiivi", form: "ketulle" },
          { label: "Essiivi", form: "kettuna" },
          { label: "Translatiivi", form: "ketuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ketut" },
          { label: "Partitiivi", form: "kettuja" },
          { label: "Genetiivi", form: "kettujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kettutarha",
      en: "fox farm",
      taso: "B2",
      esim: { fi: "Kettutarhaus on kiistanalaista.", en: "Fox farming is controversial." },
    },
    {
      fi: "naali",
      en: "arctic fox",
      taso: "B2",
      esim: { fi: "Naali on uhanalainen Suomessa.", en: "The arctic fox is endangered in Finland." },
    },
  ],
  synonyymit: [
    { fi: "repo", en: "fox (folk byname)" },
  ],
  esimerkit: {
    A2: { fi: "Kettu juoksi metsään.", en: "The fox ran into the forest." },
    B1: { fi: "Ketulla on punainen turkki.", en: "The fox has red fur." },
    B2: {
      fi: "Hän on ovela kuin kettu eikä helposti jää kiinni.",
      en: "He is sly as a fox and does not get caught easily.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kettu;
