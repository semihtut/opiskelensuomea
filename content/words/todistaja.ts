import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem todistaja-.
// Genitive todistajan, partitive todistajaa, partitive pl todistajia.
const todistaja: Word = {
  fi: "todistaja",
  slug: "todistaja",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "witness",
  selitys:
    "Henkilö, joka on nähnyt tapahtuman ja kertoo siitä, esim. oikeudessa: 'kuulla todistajaa', 'silminnäkijä'. Tyyppi 10/koira, ei astevaihtelua. Sanasta todistaa + -ja. Vrt. todistaa, todiste, silminnäkijä.",
  kuva: { alt: "todistaja – henkilö joka kertoo näkemästään, esim. oikeudessa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo todistaja-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "todistajan", merkitys: "of the witness" },
      { sija: "partitiivi (yks.)", muoto: "todistajaa", merkitys: "witness (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "todistajia", merkitys: "witnesses (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko todistajia (-ja-agenttisana). Sanasta todistaa = to testify/prove. Vrt. todiste = piece of evidence, silminnäkijä = eyewitness.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "todistaja" },
          { label: "Partitiivi", form: "todistajaa" },
          { label: "Genetiivi", form: "todistajan" },
          { label: "Inessiivi", form: "todistajassa" },
          { label: "Elatiivi", form: "todistajasta" },
          { label: "Illatiivi", form: "todistajaan" },
          { label: "Adessiivi", form: "todistajalla" },
          { label: "Ablatiivi", form: "todistajalta" },
          { label: "Allatiivi", form: "todistajalle" },
          { label: "Essiivi", form: "todistajana" },
          { label: "Translatiivi", form: "todistajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "todistajat" },
          { label: "Partitiivi", form: "todistajia" },
          { label: "Genetiivi", form: "todistajien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "todistaa",
      en: "to testify; to prove",
      taso: "B1",
      esim: { fi: "Hän todisti oikeudessa.", en: "She testified in court." },
    },
    {
      fi: "silminnäkijä",
      en: "eyewitness",
      taso: "B2",
      esim: { fi: "Silminnäkijä kertoi näkemästään.", en: "The eyewitness described what they saw." },
    },
  ],
  synonyymit: [
    { fi: "silminnäkijä", en: "eyewitness" },
  ],
  esimerkit: {
    A2: { fi: "Hän oli onnettomuuden todistaja.", en: "He was a witness to the accident." },
    B1: { fi: "Oikeus kuuli useita todistajia.", en: "The court heard several witnesses." },
    B2: {
      fi: "Todistajan kertomus oli ratkaiseva koko oikeudenkäynnin kannalta.",
      en: "The witness's account was decisive for the entire trial.",
    },
  },
  updatedAt: "2026-06-07",
};

export default todistaja;
