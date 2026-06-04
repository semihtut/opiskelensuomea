import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation. Partitive sg rahaa,
// partitive pl rahoja (a → o), genitive pl rahojen.
const raha: Word = {
  fi: "raha",
  slug: "raha",
  pos: "substantiivi (tyyppi: kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "money",
  selitys:
    "Maksuväline, jolla ostetaan tavaroita ja palveluita. Ei astevaihtelua. Usein yksikössä; monikko (rahat) tarkoittaa rahavaroja.",
  kuva: { emoji: "💶", alt: "raha – seteleitä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "rahaa", merkitys: "money (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "rahan", merkitys: "of the money" },
      { sija: "partitiivi (mon.)", muoto: "rahoja", merkitys: "moneys (partitive pl.)" },
    ],
    huom: "Monikon partitiivi rahoja (a → o). 'Rahat' tarkoittaa kaikkia rahavaroja: 'Missä rahani ovat?'",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "raha" },
          { label: "Partitiivi", form: "rahaa" },
          { label: "Genetiivi", form: "rahan" },
          { label: "Inessiivi", form: "rahassa" },
          { label: "Elatiivi", form: "rahasta" },
          { label: "Illatiivi", form: "rahaan" },
          { label: "Adessiivi", form: "rahalla" },
          { label: "Ablatiivi", form: "rahalta" },
          { label: "Allatiivi", form: "rahalle" },
          { label: "Essiivi", form: "rahana" },
          { label: "Translatiivi", form: "rahaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "rahat" },
          { label: "Partitiivi", form: "rahoja" },
          { label: "Genetiivi", form: "rahojen" },
          { label: "Illatiivi", form: "rahoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käteinen",
      en: "cash",
      taso: "B1",
      esim: { fi: "Maksan mieluummin käteisellä.", en: "I prefer to pay in cash." },
    },
    {
      fi: "rahasto",
      en: "fund",
      taso: "B2",
      esim: { fi: "Hän sijoittaa rahastoon.", en: "She invests in a fund." },
    },
    {
      fi: "rahaton",
      en: "penniless, broke",
      taso: "B2",
      esim: { fi: "Olin opiskelijana täysin rahaton.", en: "As a student I was completely broke." },
    },
  ],
  synonyymit: [
    { fi: "käteinen", en: "cash" },
    { fi: "valuutta", en: "currency" },
  ],
  esimerkit: {
    A2: { fi: "Minulla ei ole rahaa mukana.", en: "I don't have money with me." },
    B1: { fi: "Säästän rahaa matkaa varten.", en: "I'm saving money for a trip." },
    B2: {
      fi: "Rahalla ei voi ostaa onnea.",
      en: "Money can't buy happiness.",
    },
  },
  updatedAt: "2026-06-04",
};

export default raha;
