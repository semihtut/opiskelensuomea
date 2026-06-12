import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, nt:nn gradation, stem havainto- ~ havainno-.
// Genitive havainnon, partitive havaintoa, partitive pl havaintoja.
const havainto: Word = {
  fi: "havainto",
  slug: "havainto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B2",
  en: "observation, perception, finding",
  selitys:
    "Se, mitä havaitaan tai pannaan merkille: 'tehdä havainto'. Tyyppi 1/valo, astevaihtelu nt:nn (havainto → havainnon). Johdettu verbistä havaita. Vrt. havaita, huomio, tutkimus.",
  kuva: { alt: "havainto – se mitä havaitaan tai pannaan merkille" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nt:nn (vartalo havainno-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "havainnon", merkitys: "of the observation" },
      { sija: "partitiivi (yks.)", muoto: "havaintoa", merkitys: "observation (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "havaintoja", merkitys: "observations (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu nt:nn: nominatiivi havainto (vahva nt), genetiivi havainnon (heikko nn). Partitiivin monikko havaintoja. Johdettu verbistä havaita. 'Tehdä havainto' = to make an observation. Vrt. huomio = attention.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "havainto" },
          { label: "Partitiivi", form: "havaintoa" },
          { label: "Genetiivi", form: "havainnon" },
          { label: "Inessiivi", form: "havainnossa" },
          { label: "Elatiivi", form: "havainnosta" },
          { label: "Illatiivi", form: "havaintoon" },
          { label: "Adessiivi", form: "havainnolla" },
          { label: "Ablatiivi", form: "havainnolta" },
          { label: "Allatiivi", form: "havainnolle" },
          { label: "Essiivi", form: "havaintona" },
          { label: "Translatiivi", form: "havainnoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "havainnot" },
          { label: "Partitiivi", form: "havaintoja" },
          { label: "Genetiivi", form: "havaintojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "havaita",
      en: "to observe, perceive",
      taso: "B1",
      esim: { fi: "Havaitsin saman ilmiön.", en: "I observed the same phenomenon." },
    },
    {
      fi: "havainnollinen",
      en: "illustrative, concrete",
      taso: "B2",
      esim: { fi: "Hän antoi havainnollisen esimerkin.", en: "She gave an illustrative example." },
    },
  ],
  synonyymit: [
    { fi: "huomio", en: "observation, remark" },
    { fi: "löydös", en: "finding" },
  ],
  esimerkit: {
    A2: { fi: "Tein tärkeän havainnon.", en: "I made an important observation." },
    B1: { fi: "Havaintojen perusteella sää paranee.", en: "Based on the observations, the weather will improve." },
    B2: {
      fi: "Tutkimus perustuu vuosien aikana kerättyihin havaintoihin.",
      en: "The study is based on observations collected over the years.",
    },
  },
  updatedAt: "2026-06-07",
};

export default havainto;
