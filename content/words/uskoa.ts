import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem usko-.
// Present uskon, past uskoin, past participle uskonut. Governs illative (uskoa johonkin).
const uskoa: Word = {
  fi: "uskoa",
  slug: "uskoa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to believe, to have faith; to trust",
  selitys:
    "Pitää totena tai luottaa: 'uskon sinua' (I believe you). Suuntaan: 'uskoa johonkin' (illatiivi) = uskoa jonkin olemassaoloon. Vrt. luulla (oletus), luottaa (trust).",
  kuva: { alt: "uskoa – pitää totena, luottaa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-oa); ei astevaihtelua; vartalo usko-",
    muodot: [
      { sija: "preesens (minä)", muoto: "uskon", merkitys: "I believe" },
      { sija: "imperfekti (minä)", muoto: "uskoin", merkitys: "I believed" },
      { sija: "NUT-partisiippi", muoto: "uskonut", merkitys: "(have) believed" },
    ],
    huom:
      "Henkilöä uskotaan partitiivissa: 'uskon sinua'. Asiaan uskotaan illatiivissa: 'uskon Jumalaan', 'uskon onneen'. Vrt. luulla = olettaa, ehkä virheellisesti.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "uskon" },
          { label: "sinä", form: "uskot" },
          { label: "hän", form: "uskoo" },
          { label: "me", form: "uskomme" },
          { label: "te", form: "uskotte" },
          { label: "he", form: "uskovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en usko" },
          { label: "hän", form: "ei usko" },
          { label: "he", form: "eivät usko" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "uskoin" },
          { label: "sinä", form: "uskoit" },
          { label: "hän", form: "uskoi" },
          { label: "me", form: "uskoimme" },
          { label: "te", form: "uskoitte" },
          { label: "he", form: "uskoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen uskonut" },
          { label: "hän", form: "on uskonut" },
          { label: "he", form: "ovat uskoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "usko!" },
          { label: "te", form: "uskokaa!" },
          { label: "kielto (sinä)", form: "älä usko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "usko",
      en: "belief, faith",
      taso: "B1",
      esim: { fi: "Hänellä on vahva usko tulevaisuuteen.", en: "She has strong faith in the future." },
    },
    {
      fi: "uskonto",
      en: "religion",
      taso: "B1",
      esim: { fi: "Suomessa on uskonnonvapaus.", en: "Finland has freedom of religion." },
    },
    {
      fi: "uskomaton",
      en: "incredible, unbelievable",
      taso: "B2",
      esim: { fi: "Se oli uskomaton tarina.", en: "It was an incredible story." },
    },
  ],
  synonyymit: [
    { fi: "luottaa", en: "to trust" },
    { fi: "olla varma", en: "to be sure" },
  ],
  esimerkit: {
    A2: { fi: "Uskon sinua.", en: "I believe you." },
    B1: { fi: "En uskonut, että se on totta.", en: "I didn't believe it was true." },
    B2: {
      fi: "Vaikka kaikki epäilivät, hän uskoi vahvasti suunnitelmaansa.",
      en: "Even though everyone doubted, he believed strongly in his plan.",
    },
  },
  updatedAt: "2026-06-06",
};

export default uskoa;
