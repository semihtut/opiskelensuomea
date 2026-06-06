import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 18/maa, no gradation, stem syy-.
// Genitive syyn, partitive syytä, illative syyhyn, partitive pl syitä.
const syy: Word = {
  fi: "syy",
  slug: "syy",
  pos: "substantiivi (tyyppi 18/maa)",
  posClass: "substantiivi",
  level: "A2",
  en: "reason, cause; fault",
  selitys:
    "Se, mikä aiheuttaa jonkin: 'mistä syystä?'. Tyyppi 18 (yksitavuinen pitkä vokaali), ei astevaihtelua. Illatiivi syyhyn. Vrt. takia (because of), johtua (to be due to).",
  kuva: { emoji: "❓", alt: "syy – se mikä aiheuttaa jonkin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "syyn", merkitys: "of the reason" },
      { sija: "partitiivi (yks.)", muoto: "syytä", merkitys: "reason (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "syitä", merkitys: "reasons (partitive pl.)" },
    ],
    huom:
      "Illatiivi on syyhyn (yksitavuiset saavat -hVn). 'Syystä tai toisesta' = for one reason or another. 'Olla syyllinen' = to be guilty. Vrt. syyttää = to accuse, johtua = to result from.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "syy" },
          { label: "Partitiivi", form: "syytä" },
          { label: "Genetiivi", form: "syyn" },
          { label: "Inessiivi", form: "syyssä" },
          { label: "Elatiivi", form: "syystä" },
          { label: "Illatiivi", form: "syyhyn" },
          { label: "Adessiivi", form: "syyllä" },
          { label: "Ablatiivi", form: "syyltä" },
          { label: "Allatiivi", form: "syylle" },
          { label: "Essiivi", form: "syynä" },
          { label: "Translatiivi", form: "syyksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "syyt" },
          { label: "Partitiivi", form: "syitä" },
          { label: "Genetiivi", form: "syiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "syyllinen",
      en: "guilty; the guilty one",
      taso: "B1",
      esim: { fi: "Kuka on syyllinen?", en: "Who is guilty?" },
    },
    {
      fi: "syyttää",
      en: "to accuse, blame",
      taso: "B1",
      esim: { fi: "Älä syytä minua.", en: "Don't blame me." },
    },
    {
      fi: "syyttä",
      en: "without reason, for nothing",
      taso: "B2",
      esim: { fi: "Hän suuttui aivan syyttä.", en: "She got angry for no reason at all." },
    },
  ],
  synonyymit: [
    { fi: "peruste", en: "grounds, basis" },
    { fi: "aihe", en: "cause, occasion" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on syy?", en: "What is the reason?" },
    B1: { fi: "Myöhästyin sään takia.", en: "I was late because of the weather." },
    B2: {
      fi: "Ei ole mitään syytä huoleen — kaikki on hallinnassa.",
      en: "There is no reason to worry — everything is under control.",
    },
  },
  updatedAt: "2026-06-06",
};

export default syy;
