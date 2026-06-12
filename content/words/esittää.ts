import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem esittä-.
// Present esitän, past esitin, past participle esittänyt.
const esittaa: Word = {
  fi: "esittää",
  slug: "esittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to present, show; to perform; to propose",
  selitys:
    "Tuoda esiin, näyttää tai esiintyä: 'esitän kysymyksen' (I pose a question), 'esittää roolia' (play a role). Astevaihtelu tt:t (esittää → esitän). Vrt. esitys (presentation).",
  kuva: { alt: "esittää – tuoda esiin, esiintyä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttää); astevaihtelu tt:t; vartalo esittä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "esitän", merkitys: "I present" },
      { sija: "imperfekti (minä)", muoto: "esitin", merkitys: "I presented" },
      { sija: "NUT-partisiippi", muoto: "esittänyt", merkitys: "(have) presented" },
    ],
    huom:
      "Monta merkitystä: esittää kysymys/toive (present), esittää roolia (perform), esittää sairasta (pretend). Astevaihtelu tt:t: esitän, esität, esitti. Vrt. esi- = fore-.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "esitän" },
          { label: "sinä", form: "esität" },
          { label: "hän", form: "esittää" },
          { label: "me", form: "esitämme" },
          { label: "te", form: "esitätte" },
          { label: "he", form: "esittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en esitä" },
          { label: "hän", form: "ei esitä" },
          { label: "he", form: "eivät esitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "esitin" },
          { label: "sinä", form: "esitit" },
          { label: "hän", form: "esitti" },
          { label: "me", form: "esitimme" },
          { label: "te", form: "esititte" },
          { label: "he", form: "esittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen esittänyt" },
          { label: "hän", form: "on esittänyt" },
          { label: "he", form: "ovat esittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "esitä!" },
          { label: "te", form: "esittäkää!" },
          { label: "kielto (sinä)", form: "älä esitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "esitys",
      en: "presentation, performance",
      taso: "B1",
      esim: { fi: "Esitys alkaa kello seitsemän.", en: "The performance starts at seven." },
    },
    {
      fi: "esitelmä",
      en: "talk, lecture, presentation",
      taso: "B2",
      esim: { fi: "Pidän huomenna esitelmän.", en: "I'm giving a presentation tomorrow." },
    },
    {
      fi: "esiintyä",
      en: "to perform, appear",
      taso: "B1",
      esim: { fi: "Hän esiintyy lavalla illalla.", en: "She performs on stage in the evening." },
    },
  ],
  synonyymit: [
    { fi: "näyttää", en: "to show" },
    { fi: "ehdottaa", en: "to propose" },
  ],
  esimerkit: {
    A2: { fi: "Esitän sinulle kysymyksen.", en: "I'll ask you a question." },
    B1: { fi: "Hän esitti pääroolia näytelmässä.", en: "She played the lead role in the play." },
    B2: {
      fi: "Kokouksessa esitettiin useita uusia ehdotuksia.",
      en: "Several new proposals were presented at the meeting.",
    },
  },
  updatedAt: "2026-06-06",
};

export default esittaa;
