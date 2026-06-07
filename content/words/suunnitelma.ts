import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem suunnitelma-.
// Genitive suunnitelman, partitive suunnitelmaa, partitive pl suunnitelmia.
const suunnitelma: Word = {
  fi: "suunnitelma",
  slug: "suunnitelma",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "plan",
  selitys:
    "Etukäteen mietitty tapa toteuttaa jokin asia: 'tehdä suunnitelma'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko suunnitelmia. Johdettu verbistä suunnitella. Vrt. tavoite, suunnitella.",
  kuva: { emoji: "📋", alt: "suunnitelma – etukäteen mietitty toimintatapa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo suunnitelma-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "suunnitelman", merkitys: "of the plan" },
      { sija: "partitiivi (yks.)", muoto: "suunnitelmaa", merkitys: "plan (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "suunnitelmia", merkitys: "plans (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10 (-ma): partitiivin monikko -ia (suunnitelmia), ei astevaihtelua. Johdettu verbistä suunnitella. 'Suunnitelman mukaan' = according to plan; 'B-suunnitelma' = plan B.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "suunnitelma" },
          { label: "Partitiivi", form: "suunnitelmaa" },
          { label: "Genetiivi", form: "suunnitelman" },
          { label: "Inessiivi", form: "suunnitelmassa" },
          { label: "Elatiivi", form: "suunnitelmasta" },
          { label: "Illatiivi", form: "suunnitelmaan" },
          { label: "Adessiivi", form: "suunnitelmalla" },
          { label: "Ablatiivi", form: "suunnitelmalta" },
          { label: "Allatiivi", form: "suunnitelmalle" },
          { label: "Essiivi", form: "suunnitelmana" },
          { label: "Translatiivi", form: "suunnitelmaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "suunnitelmat" },
          { label: "Partitiivi", form: "suunnitelmia" },
          { label: "Genetiivi", form: "suunnitelmien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suunnitella",
      en: "to plan, design",
      taso: "B1",
      esim: { fi: "Suunnittelemme matkaa.", en: "We are planning a trip." },
    },
    {
      fi: "suunnittelu",
      en: "planning, design",
      taso: "B1",
      esim: { fi: "Hyvä suunnittelu säästää aikaa.", en: "Good planning saves time." },
    },
  ],
  synonyymit: [
    { fi: "aikomus", en: "intention" },
    { fi: "ohjelma", en: "programme, plan" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on suunnitelmasi viikonlopuksi?", en: "What's your plan for the weekend?" },
    B1: { fi: "Suunnitelma muuttui viime hetkellä.", en: "The plan changed at the last moment." },
    B2: {
      fi: "Hyvä suunnitelma ottaa huomioon myös mahdolliset ongelmat.",
      en: "A good plan also takes possible problems into account.",
    },
  },
  updatedAt: "2026-06-07",
};

export default suunnitelma;
