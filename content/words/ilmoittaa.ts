import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem ilmoitta- ~ ilmoita-.
// Present ilmoitan, past ilmoitin, past participle ilmoittanut.
const ilmoittaa: Word = {
  fi: "ilmoittaa",
  slug: "ilmoittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to announce, to notify, to report",
  selitys:
    "Tehdä jokin virallisesti tiedoksi: 'ilmoittaa muutoksesta'. Tyyppi 1 (-aa), astevaihtelu tt:t (ilmoitan, mutta ilmoittaa). Vrt. ilmoitus (notice, ad), ilmoittautua (to enroll/register).",
  kuva: { emoji: "📢", alt: "ilmoittaa – tehdä jokin tiedoksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu tt:t (ilmoitta- ↔ ilmoita-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "ilmoitan", merkitys: "I announce" },
      { sija: "imperfekti (minä)", muoto: "ilmoitin", merkitys: "I announced" },
      { sija: "NUT-partisiippi", muoto: "ilmoittanut", merkitys: "(have) announced" },
    ],
    huom:
      "Persoonamuodoissa heikko aste t (ilmoitan, ilmoitin), infinitiivissä ja partisiipissa vahva tt (ilmoittaa, ilmoittanut). Asiasta elatiivi: 'ilmoittaa muutoksesta'. Vrt. ilmoittautua = to register.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ilmoitan" },
          { label: "sinä", form: "ilmoitat" },
          { label: "hän", form: "ilmoittaa" },
          { label: "me", form: "ilmoitamme" },
          { label: "te", form: "ilmoitatte" },
          { label: "he", form: "ilmoittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ilmoita" },
          { label: "hän", form: "ei ilmoita" },
          { label: "he", form: "eivät ilmoita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ilmoitin" },
          { label: "sinä", form: "ilmoitit" },
          { label: "hän", form: "ilmoitti" },
          { label: "me", form: "ilmoitimme" },
          { label: "te", form: "ilmoititte" },
          { label: "he", form: "ilmoittivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ilmoittanut" },
          { label: "hän", form: "on ilmoittanut" },
          { label: "he", form: "ovat ilmoittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ilmoita!" },
          { label: "te", form: "ilmoittakaa!" },
          { label: "kielto (sinä)", form: "älä ilmoita" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ilmoitus",
      en: "notice, announcement; advertisement",
      taso: "B1",
      esim: { fi: "Näin työpaikkailmoituksen lehdessä.", en: "I saw a job ad in the paper." },
    },
    {
      fi: "ilmoittautua",
      en: "to register, enroll, sign up",
      taso: "B1",
      esim: { fi: "Ilmoittauduin kurssille.", en: "I signed up for the course." },
    },
    {
      fi: "ennakkoilmoitus",
      en: "advance notice",
      taso: "B2",
      esim: { fi: "Saimme ennakkoilmoituksen muutoksesta.", en: "We got advance notice of the change." },
    },
  ],
  synonyymit: [
    { fi: "tiedottaa", en: "to inform, give notice" },
    { fi: "kertoa", en: "to tell" },
  ],
  esimerkit: {
    A2: { fi: "Ilmoitan sinulle huomenna.", en: "I'll let you know tomorrow." },
    B1: { fi: "Yritys ilmoitti uusista hinnoista.", en: "The company announced new prices." },
    B2: {
      fi: "Viranomaiset ilmoittivat, että alue suljetaan toistaiseksi.",
      en: "The authorities announced that the area will be closed until further notice.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ilmoittaa;
