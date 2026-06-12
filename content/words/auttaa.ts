import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 56/kaivaa (verb type 1) with tt:t
// gradation. Weak t in 1st/2nd person (autan, autat), strong tt in 3rd (auttaa).
// Imperfect autoin / auttoi.
const auttaa: Word = {
  fi: "auttaa",
  slug: "auttaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to help",
  selitys:
    "Tehdä jonkun olo tai tilanne paremmaksi. Tyyppi 1, astevaihtelu tt:t (autan, mutta hän auttaa).",
  kuva: { alt: "auttaa – auttavat kädet" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-a); astevaihtelu tt:t",
    muodot: [
      { sija: "preesens (minä)", muoto: "autan", merkitys: "I help" },
      { sija: "imperfekti (minä)", muoto: "autoin", merkitys: "I helped" },
      { sija: "kielto (minä)", muoto: "en auta", merkitys: "I don't help" },
    ],
    huom:
      "tt:t astevaihtelu: heikko t 1./2. persoonassa (autan, autat), vahva tt 3. persoonassa (auttaa, auttavat). Autettava on partitiivissa: 'autan sinua'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "autan" },
          { label: "sinä", form: "autat" },
          { label: "hän", form: "auttaa" },
          { label: "me", form: "autamme" },
          { label: "te", form: "autatte" },
          { label: "he", form: "auttavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en auta" },
          { label: "sinä", form: "et auta" },
          { label: "hän", form: "ei auta" },
          { label: "me", form: "emme auta" },
          { label: "te", form: "ette auta" },
          { label: "he", form: "eivät auta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "autoin" },
          { label: "sinä", form: "autoit" },
          { label: "hän", form: "auttoi" },
          { label: "me", form: "autoimme" },
          { label: "te", form: "autoitte" },
          { label: "he", form: "auttoivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en auttanut" },
          { label: "sinä", form: "et auttanut" },
          { label: "hän", form: "ei auttanut" },
          { label: "me", form: "emme auttaneet" },
          { label: "te", form: "ette auttaneet" },
          { label: "he", form: "eivät auttaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen auttanut" },
          { label: "sinä", form: "olet auttanut" },
          { label: "hän", form: "on auttanut" },
          { label: "me", form: "olemme auttaneet" },
          { label: "te", form: "olette auttaneet" },
          { label: "he", form: "ovat auttaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole auttanut" },
          { label: "hän", form: "ei ole auttanut" },
          { label: "he", form: "eivät ole auttaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "auta!" },
          { label: "te", form: "auttakaa!" },
          { label: "kielto (sinä)", form: "älä auta" },
          { label: "kielto (te)", form: "älkää auttako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "apu",
      en: "help, aid",
      taso: "A2",
      esim: { fi: "Tarvitsen apua.", en: "I need help." },
    },
    {
      fi: "auttaja",
      en: "helper",
      taso: "B1",
      esim: { fi: "Vapaaehtoiset auttajat saapuivat paikalle.", en: "Volunteer helpers arrived on the scene." },
    },
    {
      fi: "avustaa",
      en: "to assist",
      taso: "B1",
      esim: { fi: "Avustan opettajaa tunnilla.", en: "I assist the teacher in class." },
    },
  ],
  synonyymit: [
    { fi: "avustaa", en: "to assist" },
    { fi: "tukea", en: "to support" },
  ],
  esimerkit: {
    A2: { fi: "Voitko auttaa minua?", en: "Can you help me?" },
    B1: { fi: "Naapuri auttoi meitä muutossa.", en: "The neighbor helped us with the move." },
    B2: {
      fi: "Hän on aina valmis auttamaan muita pyyteettömästi.",
      en: "She is always ready to help others selflessly.",
    },
  },
  updatedAt: "2026-06-04",
};

export default auttaa;
