import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 53/muistaa (verb type 1), tt:t gradation,
// stem otta-. Present otan (tt:t), past otin/otti, past participle ottanut.
const ottaa: Word = {
  fi: "ottaa",
  slug: "ottaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to take",
  selitys:
    "Tarttua johonkin ja saada se haltuun. Tyyppi 1, astevaihtelu tt:t (otta- → ota-). Vastakohta antaa.",
  kuva: { alt: "ottaa – käsi ottaa jotakin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu tt:t (otta- → ota-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "otan", merkitys: "I take" },
      { sija: "imperfekti (minä)", muoto: "otin", merkitys: "I took" },
      { sija: "kielto (minä)", muoto: "en ota", merkitys: "I don't take" },
    ],
    huom:
      "Heikossa asteessa tt → t: otan, otat, otin (mutta ottaa, ottavat, ottanut). Imperatiivi ota! Idiomeja: 'ottaa yhteyttä', 'ottaa kuva'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "otan" },
          { label: "sinä", form: "otat" },
          { label: "hän", form: "ottaa" },
          { label: "me", form: "otamme" },
          { label: "te", form: "otatte" },
          { label: "he", form: "ottavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ota" },
          { label: "sinä", form: "et ota" },
          { label: "hän", form: "ei ota" },
          { label: "me", form: "emme ota" },
          { label: "te", form: "ette ota" },
          { label: "he", form: "eivät ota" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "otin" },
          { label: "sinä", form: "otit" },
          { label: "hän", form: "otti" },
          { label: "me", form: "otimme" },
          { label: "te", form: "otitte" },
          { label: "he", form: "ottivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en ottanut" },
          { label: "sinä", form: "et ottanut" },
          { label: "hän", form: "ei ottanut" },
          { label: "me", form: "emme ottaneet" },
          { label: "te", form: "ette ottaneet" },
          { label: "he", form: "eivät ottaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ottanut" },
          { label: "sinä", form: "olet ottanut" },
          { label: "hän", form: "on ottanut" },
          { label: "me", form: "olemme ottaneet" },
          { label: "te", form: "olette ottaneet" },
          { label: "he", form: "ovat ottaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole ottanut" },
          { label: "hän", form: "ei ole ottanut" },
          { label: "he", form: "eivät ole ottaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ota!" },
          { label: "te", form: "ottakaa!" },
          { label: "kielto (sinä)", form: "älä ota" },
          { label: "kielto (te)", form: "älkää ottako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "otto",
      en: "taking; withdrawal",
      taso: "B2",
      esim: { fi: "Rahan otto automaatista on helppoa.", en: "Withdrawing cash from the ATM is easy." },
    },
    {
      fi: "ote",
      en: "grip; excerpt",
      taso: "B1",
      esim: { fi: "Sain hyvän otteen.", en: "I got a good grip." },
    },
    {
      fi: "vastaanotto",
      en: "reception",
      taso: "B1",
      esim: { fi: "Hotellin vastaanotto on auki.", en: "The hotel reception is open." },
    },
  ],
  synonyymit: [
    { fi: "napata", en: "to grab, snatch" },
    { fi: "poimia", en: "to pick (up)" },
  ],
  esimerkit: {
    A2: { fi: "Otan kupin kahvia.", en: "I'll take a cup of coffee." },
    B1: { fi: "Otin kuvan maisemasta.", en: "I took a picture of the scenery." },
    B2: {
      fi: "Ota yhteyttä, jos tarvitset apua.",
      en: "Get in touch if you need help.",
    },
  },
  updatedAt: "2026-06-05",
};

export default ottaa;
