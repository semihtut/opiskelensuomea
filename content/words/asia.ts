import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation, stem asia-.
// Genitive asian, partitive asiaa, illative asiaan, partitive pl asioita.
const asia: Word = {
  fi: "asia",
  slug: "asia",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "A2",
  en: "matter, thing, issue, affair",
  selitys:
    "Abstrakti asia, aihe tai juttu — ei konkreettinen esine: 'tärkeä asia'. Tyyppi 12, ei astevaihtelua. Monikon partitiivi asioita. Vrt. juttu (colloquial), aihe (topic).",
  kuva: { emoji: "📋", alt: "asia – abstrakti aihe tai juttu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "asian", merkitys: "of the matter" },
      { sija: "partitiivi (yks.)", muoto: "asiaa", merkitys: "matter (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "asioita", merkitys: "matters (partitive pl.)" },
    ],
    huom:
      "Monikon vartalo asioi-: asioita, asioissa. 'Asia on niin, että…' = The thing is that… 'Ei se ole sinun asiasi.' = It's none of your business. Vrt. asioida = to run errands.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "asia" },
          { label: "Partitiivi", form: "asiaa" },
          { label: "Genetiivi", form: "asian" },
          { label: "Inessiivi", form: "asiassa" },
          { label: "Elatiivi", form: "asiasta" },
          { label: "Illatiivi", form: "asiaan" },
          { label: "Adessiivi", form: "asialla" },
          { label: "Ablatiivi", form: "asialta" },
          { label: "Allatiivi", form: "asialle" },
          { label: "Essiivi", form: "asiana" },
          { label: "Translatiivi", form: "asiaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "asiat" },
          { label: "Partitiivi", form: "asioita" },
          { label: "Genetiivi", form: "asioiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "asiakas",
      en: "customer, client",
      taso: "A2",
      esim: { fi: "Asiakas oli tyytyväinen.", en: "The customer was satisfied." },
    },
    {
      fi: "asioida",
      en: "to run errands, do business",
      taso: "B2",
      esim: { fi: "Asioin pankissa aamulla.", en: "I did business at the bank in the morning." },
    },
    {
      fi: "asiallinen",
      en: "matter-of-fact, proper",
      taso: "B2",
      esim: { fi: "Hänen vastauksensa oli asiallinen.", en: "His answer was matter-of-fact." },
    },
  ],
  synonyymit: [
    { fi: "juttu", en: "thing, matter (colloquial)" },
    { fi: "aihe", en: "topic, subject" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on tärkeä asia.", en: "I have an important matter." },
    B1: { fi: "Puhutaan tästä asiasta myöhemmin.", en: "Let's talk about this matter later." },
    B2: {
      fi: "Hoidan asian kuntoon ennen viikonloppua.",
      en: "I'll take care of the matter before the weekend.",
    },
  },
  updatedAt: "2026-06-06",
};

export default asia;
