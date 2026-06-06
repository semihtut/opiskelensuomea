import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 1/nukkua, tt–t gradation, stem tarttu-.
// Present tartun, past tartuin, hän tarttui, past participle tarttunut. Governs illative.
const tarttua: Word = {
  fi: "tarttua",
  slug: "tarttua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to grab, grasp; to stick, catch (on)",
  selitys:
    "Ottaa kiinni tai takertua: 'tartun puhelimeen' (illatiivi). Astevaihtelu tt:t (tarttua → tartun). Myös tarttuva tauti = contagious disease.",
  kuva: { emoji: "✊", alt: "tarttua – ottaa kiinni" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua); astevaihtelu tt:t; vartalo tarttu-",
    muodot: [
      { sija: "preesens (minä)", muoto: "tartun", merkitys: "I grab" },
      { sija: "imperfekti (minä)", muoto: "tartuin", merkitys: "I grabbed" },
      { sija: "NUT-partisiippi", muoto: "tarttunut", merkitys: "(have) grabbed" },
    ],
    huom:
      "Kohde illatiivissa: 'tartu kahvaan'. Astevaihtelu tt:t: tartun, tartut, tarttuu. Imperfekti: tartuin, tartuit, tarttui. Vrt. tarttuva = contagious, tartunta = infection.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tartun" },
          { label: "sinä", form: "tartut" },
          { label: "hän", form: "tarttuu" },
          { label: "me", form: "tartumme" },
          { label: "te", form: "tartutte" },
          { label: "he", form: "tarttuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tartu" },
          { label: "hän", form: "ei tartu" },
          { label: "he", form: "eivät tartu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tartuin" },
          { label: "sinä", form: "tartuit" },
          { label: "hän", form: "tarttui" },
          { label: "me", form: "tartuimme" },
          { label: "te", form: "tartuitte" },
          { label: "he", form: "tarttuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tarttunut" },
          { label: "hän", form: "on tarttunut" },
          { label: "he", form: "ovat tarttuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tartu!" },
          { label: "te", form: "tarttukaa!" },
          { label: "kielto (sinä)", form: "älä tartu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tartunta",
      en: "infection",
      taso: "B2",
      esim: { fi: "Hän sai tartunnan matkalla.", en: "He got an infection during the trip." },
    },
    {
      fi: "tarttuva",
      en: "contagious; catchy",
      taso: "B1",
      esim: { fi: "Flunssa on tarttuva.", en: "The flu is contagious." },
    },
    {
      fi: "ote",
      en: "grip, hold",
      taso: "B1",
      esim: { fi: "Sain hyvän otteen köydestä.", en: "I got a good grip on the rope." },
    },
  ],
  synonyymit: [
    { fi: "ottaa kiinni", en: "to take hold of" },
    { fi: "takertua", en: "to cling, get stuck" },
  ],
  esimerkit: {
    A2: { fi: "Tartu kaiteeseen!", en: "Grab the railing!" },
    B1: { fi: "Tartuin tilaisuuteen heti.", en: "I seized the opportunity right away." },
    B2: {
      fi: "Hänen innostuksensa tarttui koko tiimiin.",
      en: "His enthusiasm spread to the whole team.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tarttua;
