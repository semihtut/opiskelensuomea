import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem kiittä-.
// Present kiitän, past kiitin, past participle kiittänyt. Thing thanked for in elative (-sta).
const kiittaa: Word = {
  fi: "kiittää",
  slug: "kiittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to thank; to praise",
  selitys:
    "Ilmaista kiitollisuutta: 'kiitän sinua' + asiasta elatiivissa: 'kiitin häntä illasta'. Astevaihtelu tt:t (kiittää → kiitän). Vrt. kiitos (thanks).",
  kuva: { alt: "kiittää – ilmaista kiitollisuutta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttää); astevaihtelu tt:t; vartalo kiittä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kiitän", merkitys: "I thank" },
      { sija: "imperfekti (minä)", muoto: "kiitin", merkitys: "I thanked" },
      { sija: "NUT-partisiippi", muoto: "kiittänyt", merkitys: "(have) thanked" },
    ],
    huom:
      "Henkilö partitiivissa, asia elatiivissa: 'Kiitän sinua avusta.' Astevaihtelu tt:t: kiitän, kiität, kiitti. Idiomi: 'Ei kiittämistä!' = Don't mention it.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kiitän" },
          { label: "sinä", form: "kiität" },
          { label: "hän", form: "kiittää" },
          { label: "me", form: "kiitämme" },
          { label: "te", form: "kiitätte" },
          { label: "he", form: "kiittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kiitä" },
          { label: "hän", form: "ei kiitä" },
          { label: "he", form: "eivät kiitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kiitin" },
          { label: "sinä", form: "kiitit" },
          { label: "hän", form: "kiitti" },
          { label: "me", form: "kiitimme" },
          { label: "te", form: "kiititte" },
          { label: "he", form: "kiittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kiittänyt" },
          { label: "hän", form: "on kiittänyt" },
          { label: "he", form: "ovat kiittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kiitä!" },
          { label: "te", form: "kiittäkää!" },
          { label: "kielto (sinä)", form: "älä kiitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kiitos",
      en: "thanks, thank you",
      taso: "A1",
      esim: { fi: "Kiitos avusta!", en: "Thanks for the help!" },
    },
    {
      fi: "kiitollinen",
      en: "grateful",
      taso: "B1",
      esim: { fi: "Olen sinulle hyvin kiitollinen.", en: "I am very grateful to you." },
    },
    {
      fi: "kiitollisuus",
      en: "gratitude",
      taso: "B2",
      esim: { fi: "Tunnen suurta kiitollisuutta.", en: "I feel great gratitude." },
    },
  ],
  synonyymit: [
    { fi: "ylistää", en: "to praise" },
    { fi: "kehua", en: "to compliment" },
  ],
  esimerkit: {
    A2: { fi: "Kiitän sinua avusta.", en: "Thank you for the help." },
    B1: { fi: "Hän kiitti kaikkia vieraita.", en: "She thanked all the guests." },
    B2: {
      fi: "Haluan kiittää tiimiäni siitä, että he eivät koskaan luovuttaneet.",
      en: "I want to thank my team for never giving up.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kiittaa;
