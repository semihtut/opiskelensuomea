import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem sujuva-.
// Genitive sujuvan, partitive sujuvaa, partitive pl sujuvia. Comparative sujuvampi, superlative sujuvin.
const sujuva: Word = {
  fi: "sujuva",
  slug: "sujuva",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "B1",
  en: "fluent, smooth",
  selitys:
    "Vaivattomasti etenevä, esteetön: 'sujuva suomen kieli', 'sujuva yhteistyö'. Tyyppi 10/koira, ei astevaihtelua. Verbin sujua partisiippi. Vrt. sujua, sujuvuus, sujuvasti.",
  kuva: { emoji: "🌊", alt: "sujuva – vaivattomasti etenevä, esteetön" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua (vartalo sujuva-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sujuvan", merkitys: "of the fluent" },
      { sija: "partitiivi (yks.)", muoto: "sujuvaa", merkitys: "fluent (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sujuvia", merkitys: "fluent (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko sujuvia. Verbin sujua partisiippi ('asia sujuu'). Adverbi sujuvasti = fluently. Vrt. sujua, sujuvuus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sujuva" },
          { label: "Partitiivi", form: "sujuvaa" },
          { label: "Genetiivi", form: "sujuvan" },
          { label: "Inessiivi", form: "sujuvassa" },
          { label: "Elatiivi", form: "sujuvasta" },
          { label: "Illatiivi", form: "sujuvaan" },
          { label: "Adessiivi", form: "sujuvalla" },
          { label: "Allatiivi", form: "sujuvalle" },
          { label: "Translatiivi", form: "sujuvaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sujuvat" },
          { label: "Partitiivi", form: "sujuvia" },
          { label: "Genetiivi", form: "sujuvien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "sujuva" },
          { label: "Komparatiivi", form: "sujuvampi" },
          { label: "Superlatiivi", form: "sujuvin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sujuvuus",
      en: "fluency",
      taso: "B2",
      esim: { fi: "Tavoitteeni on kielen sujuvuus.", en: "My goal is fluency in the language." },
    },
    {
      fi: "sujuvasti",
      en: "fluently, smoothly",
      taso: "B1",
      esim: { fi: "Hän puhuu sujuvasti suomea.", en: "She speaks Finnish fluently." },
    },
  ],
  synonyymit: [
    { fi: "vaivaton", en: "effortless" },
  ],
  esimerkit: {
    A2: { fi: "Hänen suomensa on sujuvaa.", en: "Her Finnish is fluent." },
    B1: { fi: "Yhteistyö oli sujuvaa alusta asti.", en: "The cooperation was smooth from the start." },
    B2: {
      fi: "Sujuva kielitaito ei tarkoita virheettömyyttä vaan kykyä viestiä luontevasti.",
      en: "Fluency does not mean being error-free but the ability to communicate naturally.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sujuva;
