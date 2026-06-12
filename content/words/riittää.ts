import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem riittä-.
// Present (3rd) riittää, past (3rd) riitti, past participle riittänyt. Mostly impersonal.
const riittaa: Word = {
  fi: "riittää",
  slug: "riittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to be enough, to suffice",
  selitys:
    "Olla tarpeeksi: 'raha riittää'. Astevaihtelu tt:t (riittää → riitän). Usein yksikön 3. persoonassa: 'Riittää jo!' = That's enough! Vrt. tarpeeksi (enough).",
  kuva: { alt: "riittää – olla tarpeeksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttää); astevaihtelu tt:t; vartalo riittä-",
    muodot: [
      { sija: "preesens (yks. 3.)", muoto: "riittää", merkitys: "it is enough" },
      { sija: "imperfekti (yks. 3.)", muoto: "riitti", merkitys: "it was enough" },
      { sija: "NUT-partisiippi", muoto: "riittänyt", merkitys: "(has) been enough" },
    ],
    huom:
      "Useimmiten yksikön 3. persoonassa: 'ruoka riittää', 'aika ei riitä'. Tarkoitukseen translatiivilla: 'riittää kolmeksi päiväksi'. Vrt. riittävä = sufficient, riittävästi = enough.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "riitän" },
          { label: "sinä", form: "riität" },
          { label: "hän/se", form: "riittää" },
          { label: "me", form: "riitämme" },
          { label: "te", form: "riitätte" },
          { label: "he/ne", form: "riittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "se", form: "ei riitä" },
          { label: "ne", form: "eivät riitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se", form: "riitti" },
          { label: "ne", form: "riittivät" },
          { label: "kielto (se)", form: "ei riittänyt" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se", form: "on riittänyt" },
          { label: "ne", form: "ovat riittäneet" },
        ],
      },
      {
        title: "Imperatiivi / fraasi",
        rows: [
          { label: "yleinen", form: "Riittää!" },
          { label: "merkitys", form: "That's enough!" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "riittävä",
      en: "sufficient, adequate",
      taso: "B1",
      esim: { fi: "Saimme riittävät tiedot.", en: "We got sufficient information." },
    },
    {
      fi: "riittävästi",
      en: "enough, sufficiently",
      taso: "B1",
      esim: { fi: "Nuku riittävästi.", en: "Sleep enough." },
    },
    {
      fi: "riittämätön",
      en: "insufficient, inadequate",
      taso: "B2",
      esim: { fi: "Palkka oli riittämätön.", en: "The salary was insufficient." },
    },
  ],
  synonyymit: [
    { fi: "olla tarpeeksi", en: "to be enough" },
    { fi: "kelvata", en: "to do, be acceptable" },
  ],
  esimerkit: {
    A2: { fi: "Riittääkö tämä?", en: "Is this enough?" },
    B1: { fi: "Rahat eivät riittäneet lomaan.", en: "The money wasn't enough for a holiday." },
    B2: {
      fi: "Pelkkä hyvä tahto ei riitä, tarvitaan myös tekoja.",
      en: "Good will alone isn't enough; actions are needed too.",
    },
  },
  updatedAt: "2026-06-06",
};

export default riittaa;
