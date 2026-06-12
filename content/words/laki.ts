import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, k:∅ gradation, stem laki- ~ lai-.
// Genitive lain, partitive lakia, illative lakiin, nominative pl lait, partitive pl lakeja.
const laki: Word = {
  fi: "laki",
  slug: "laki",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "B1",
  en: "law, statute",
  selitys:
    "Yhteiskunnan sitova sääntö: 'noudattaa lakia'. Tyyppi 5, astevaihtelu k:∅ (laki → lain). Vrt. laillinen (legal), laiton (illegal), lakimies (lawyer).",
  kuva: { alt: "laki – yhteiskunnan sitova sääntö" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu k:∅ (laki ↔ lai-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lain", merkitys: "of the law" },
      { sija: "partitiivi (yks.)", muoto: "lakia", merkitys: "law (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lakeja", merkitys: "laws (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa k katoaa: genetiivi lain, monikon nominatiivi lait, mutta partitiivi säilyttää k:n (lakia, lakeja). 'Lain mukaan' = according to the law. Vrt. laillinen, lakiehdotus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "laki" },
          { label: "Partitiivi", form: "lakia" },
          { label: "Genetiivi", form: "lain" },
          { label: "Inessiivi", form: "laissa" },
          { label: "Elatiivi", form: "laista" },
          { label: "Illatiivi", form: "lakiin" },
          { label: "Adessiivi", form: "lailla" },
          { label: "Ablatiivi", form: "lailta" },
          { label: "Allatiivi", form: "laille" },
          { label: "Essiivi", form: "lakina" },
          { label: "Translatiivi", form: "laiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lait" },
          { label: "Partitiivi", form: "lakeja" },
          { label: "Genetiivi", form: "lakien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laillinen",
      en: "legal, lawful",
      taso: "B1",
      esim: { fi: "Toiminta oli täysin laillista.", en: "The activity was entirely legal." },
    },
    {
      fi: "laiton",
      en: "illegal, unlawful",
      taso: "B1",
      esim: { fi: "Pysäköinti oli laitonta.", en: "The parking was illegal." },
    },
    {
      fi: "lakiehdotus",
      en: "bill, legislative proposal",
      taso: "B2",
      esim: { fi: "Eduskunta käsittelee lakiehdotusta.", en: "Parliament is processing the bill." },
    },
  ],
  synonyymit: [
    { fi: "säädös", en: "statute, enactment" },
    { fi: "sääntö", en: "rule" },
  ],
  esimerkit: {
    A2: { fi: "Laki kieltää tupakoinnin täällä.", en: "The law forbids smoking here." },
    B1: { fi: "Kaikkien on noudatettava lakia.", en: "Everyone must obey the law." },
    B2: {
      fi: "Uusi laki astuu voimaan ensi vuoden alusta.",
      en: "The new law takes effect at the beginning of next year.",
    },
  },
  updatedAt: "2026-06-06",
};

export default laki;
