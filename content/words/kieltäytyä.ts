import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, t:d gradation, stem kieltäyty- ~ kieltäydy-.
// Present minä kieltäydyn, hän kieltäytyy; imperfect minä kieltäydyin; NUT kieltäytynyt. Gov. elative.
const kieltaytya: Word = {
  fi: "kieltäytyä",
  slug: "kieltäytyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to refuse, decline",
  selitys:
    "Olla suostumatta tai vastaanottamatta jotakin: 'kieltäytyä tarjouksesta'. Tyyppi 1 (-yä), Kotus 52/sanoa, astevaihtelu t:d (kieltäydyn). Refleksiivijohdos verbistä kieltää. Rektio: elatiivi (kieltäytyä jostakin). Vrt. kieltää, suostua, kieltäytyminen.",
  kuva: { alt: "kieltäytyä – olla suostumatta tai vastaanottamatta jotakin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; astevaihtelu t:d (kieltäyty- ~ kieltäydy-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kieltäydyn", merkitys: "I refuse" },
      { sija: "imperfekti (minä)", muoto: "kieltäydyin", merkitys: "I refused" },
      { sija: "NUT-partisiippi", muoto: "kieltäytynyt", merkitys: "(have) refused" },
    ],
    huom:
      "Astevaihtelu t:d: vahva kieltäyty- (kieltäytyä, kieltäytyy, kieltäytynyt), heikko kieltäydy- (kieltäydyn). Refleksiivi verbistä kieltää. Rektio: 'kieltäytyä jostakin' (elatiivi) tai 'kieltäytyä tekemästä' (3. inf.). Vastakohta suostua. Vrt. kieltää.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kieltäydyn" },
          { label: "sinä", form: "kieltäydyt" },
          { label: "hän", form: "kieltäytyy" },
          { label: "me", form: "kieltäydymme" },
          { label: "te", form: "kieltäydytte" },
          { label: "he", form: "kieltäytyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kieltäydy" },
          { label: "hän", form: "ei kieltäydy" },
          { label: "he", form: "eivät kieltäydy" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kieltäydyin" },
          { label: "sinä", form: "kieltäydyit" },
          { label: "hän", form: "kieltäytyi" },
          { label: "me", form: "kieltäydyimme" },
          { label: "te", form: "kieltäydyitte" },
          { label: "he", form: "kieltäytyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kieltäytynyt" },
          { label: "hän", form: "on kieltäytynyt" },
          { label: "he", form: "ovat kieltäytyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kieltäydy!" },
          { label: "te", form: "kieltäytykää!" },
          { label: "kielto (sinä)", form: "älä kieltäydy" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kieltäytyminen",
      en: "refusal",
      taso: "B2",
      esim: { fi: "Kieltäytyminen oli kohteliasta.", en: "The refusal was polite." },
    },
    {
      fi: "suostua",
      en: "to agree, consent",
      taso: "B1",
      esim: { fi: "Hän suostui pyyntööni.", en: "She agreed to my request." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Kieltäydyin kohteliaasti.", en: "I declined politely." },
    B1: { fi: "Hän kieltäytyi tarjouksesta.", en: "He refused the offer." },
    B2: {
      fi: "Työntekijällä on oikeus kieltäytyä vaarallisesta työstä.",
      en: "An employee has the right to refuse dangerous work.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kieltaytya;
