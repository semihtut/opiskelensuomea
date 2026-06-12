import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni, no gradation, stem vere-.
// Genitive veren, partitive verta (back vowel!), illative vereen, partitive pl veriä.
const veri: Word = {
  fi: "veri",
  slug: "veri",
  pos: "substantiivi (tyyppi 26/pieni)",
  posClass: "substantiivi",
  level: "A2",
  en: "blood",
  selitys:
    "Punainen neste, joka kiertää kehossa: 'verta vuotaa'. Tyyppi 26, ei astevaihtelua, vartalo vere-. Poikkeus: partitiivi verta on takavokaalinen, muut muodot etuvokaalisia. Vrt. verinen (bloody), verisuoni (blood vessel).",
  kuva: { alt: "veri – kehossa kiertävä punainen neste" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 26/pieni; ei astevaihtelua (vartalo vere-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "veren", merkitys: "of blood" },
      { sija: "partitiivi (yks.)", muoto: "verta", merkitys: "blood (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "veriä", merkitys: "bloods (partitive pl.)" },
    ],
    huom:
      "Poikkeus: sana on etuvokaalinen (veressä, vereen), mutta partitiivi yksikössä on takavokaalinen verta (ei *vertä). Vrt. verenpaine = blood pressure, verikoe = blood test.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "veri" },
          { label: "Partitiivi", form: "verta" },
          { label: "Genetiivi", form: "veren" },
          { label: "Inessiivi", form: "veressä" },
          { label: "Elatiivi", form: "verestä" },
          { label: "Illatiivi", form: "vereen" },
          { label: "Adessiivi", form: "verellä" },
          { label: "Ablatiivi", form: "vereltä" },
          { label: "Allatiivi", form: "verelle" },
          { label: "Essiivi", form: "verenä" },
          { label: "Translatiivi", form: "vereksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "veret" },
          { label: "Partitiivi", form: "veriä" },
          { label: "Genetiivi", form: "verien / verten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "verinen",
      en: "bloody",
      taso: "B2",
      esim: { fi: "Ottelu oli verinen.", en: "The battle was bloody." },
    },
    {
      fi: "verenpaine",
      en: "blood pressure",
      taso: "B1",
      esim: { fi: "Lääkäri mittasi verenpaineen.", en: "The doctor measured the blood pressure." },
    },
    {
      fi: "verikoe",
      en: "blood test",
      taso: "B1",
      esim: { fi: "Kävin verikokeessa aamulla.", en: "I had a blood test in the morning." },
    },
  ],
  synonyymit: [
    { fi: "verineste", en: "blood (as fluid)" },
    { fi: "punasolut", en: "red blood cells" },
  ],
  esimerkit: {
    A2: { fi: "Haavasta vuoti verta.", en: "Blood flowed from the wound." },
    B1: { fi: "Hän pelkää veren näkemistä.", en: "She is afraid of seeing blood." },
    B2: {
      fi: "Verenluovutus on yksinkertainen tapa auttaa muita.",
      en: "Blood donation is a simple way to help others.",
    },
  },
  updatedAt: "2026-06-06",
};

export default veri;
