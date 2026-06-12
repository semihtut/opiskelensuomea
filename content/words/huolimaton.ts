import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 34/onneton, tt:t gradation, stem huolimattoma- ~ huolimaton.
// Genitive huolimattoman, partitive huolimatonta, partitive pl huolimattomia.
const huolimaton: Word = {
  fi: "huolimaton",
  slug: "huolimaton",
  pos: "adjektiivi (tyyppi 34/onneton)",
  posClass: "adjektiivi",
  level: "B1",
  en: "careless, negligent",
  selitys:
    "Sellainen, joka ei tee asioita huolella; huolimattomasti toimiva: 'huolimaton virhe'. Tyyppi 34/onneton, astevaihtelu tt:t (huolimaton → huolimattoman). Kieltojohdos (huoli + -maton). Vastakohta huolellinen. Vrt. huoli, huolimattomuus.",
  kuva: { alt: "huolimaton – asioita huolimattomasti tekevä" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 34/onneton; astevaihtelu tt:t (vartalo huolimattoma-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "huolimattoman", merkitys: "of careless" },
      { sija: "partitiivi (yks.)", muoto: "huolimatonta", merkitys: "careless (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "huolimattomia", merkitys: "careless (partitive pl.)" },
    ],
    huom:
      "Tyyppi 34 (-ton): nominatiivi huolimaton (heikko t), vartalo huolimattoma- vahvistuu (huolimattoman), partitiivi huolimatonta. Kieltojohdos huoli + -maton. Vastakohta huolellinen. Vrt. huolimattomuus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "huolimaton" },
          { label: "Partitiivi", form: "huolimatonta" },
          { label: "Genetiivi", form: "huolimattoman" },
          { label: "Inessiivi", form: "huolimattomassa" },
          { label: "Elatiivi", form: "huolimattomasta" },
          { label: "Illatiivi", form: "huolimattomaan" },
          { label: "Adessiivi", form: "huolimattomalla" },
          { label: "Allatiivi", form: "huolimattomalle" },
          { label: "Translatiivi", form: "huolimattomaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "huolimattomat" },
          { label: "Partitiivi", form: "huolimattomia" },
          { label: "Genetiivi", form: "huolimattomien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "huolimaton" },
          { label: "Komparatiivi", form: "huolimattomampi" },
          { label: "Superlatiivi", form: "huolimattomin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "huolimattomuus",
      en: "carelessness, negligence",
      taso: "B2",
      esim: { fi: "Virhe johtui huolimattomuudesta.", en: "The mistake was due to carelessness." },
    },
    {
      fi: "huolimattomasti",
      en: "carelessly",
      taso: "B2",
      esim: { fi: "Työ oli tehty huolimattomasti.", en: "The work was done carelessly." },
    },
  ],
  synonyymit: [
    { fi: "leväperäinen", en: "slipshod, lax" },
    { fi: "varomaton", en: "incautious" },
  ],
  esimerkit: {
    A2: { fi: "Älä ole huolimaton.", en: "Don't be careless." },
    B1: { fi: "Se oli huolimaton virhe.", en: "It was a careless mistake." },
    B2: {
      fi: "Huolimaton kirjoitusvirhe muutti koko lauseen merkityksen.",
      en: "A careless typo changed the meaning of the whole sentence.",
    },
  },
  updatedAt: "2026-06-07",
};

export default huolimaton;
