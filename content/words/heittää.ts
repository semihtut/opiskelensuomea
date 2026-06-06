import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem heittä-.
// Present heitän, past heitin, past participle heittänyt.
const heittaa: Word = {
  fi: "heittää",
  slug: "heittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to throw, toss, cast",
  selitys:
    "Saattaa esine lentämään kädellä: 'heitän pallon'. Astevaihtelu tt:t (heittää → heitän). Puhekielessä myös 'heittää kyydin' = give a ride.",
  kuva: { emoji: "🤾", alt: "heittää – saattaa esine lentämään" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttää); astevaihtelu tt:t; vartalo heittä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "heitän", merkitys: "I throw" },
      { sija: "imperfekti (minä)", muoto: "heitin", merkitys: "I threw" },
      { sija: "NUT-partisiippi", muoto: "heittänyt", merkitys: "(have) thrown" },
    ],
    huom:
      "Astevaihtelu tt:t: heitän, heität, heitti. Heitettävä asia partitiivissa tai akkusatiivissa; kohde usein illatiivissa (heitän pallon koriin). Vrt. heitto = throw.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "heitän" },
          { label: "sinä", form: "heität" },
          { label: "hän", form: "heittää" },
          { label: "me", form: "heitämme" },
          { label: "te", form: "heitätte" },
          { label: "he", form: "heittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en heitä" },
          { label: "hän", form: "ei heitä" },
          { label: "he", form: "eivät heitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "heitin" },
          { label: "sinä", form: "heitit" },
          { label: "hän", form: "heitti" },
          { label: "me", form: "heitimme" },
          { label: "te", form: "heititte" },
          { label: "he", form: "heittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen heittänyt" },
          { label: "hän", form: "on heittänyt" },
          { label: "he", form: "ovat heittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "heitä!" },
          { label: "te", form: "heittäkää!" },
          { label: "kielto (sinä)", form: "älä heitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "heitto",
      en: "throw, toss",
      taso: "B1",
      esim: { fi: "Se oli hyvä heitto.", en: "That was a good throw." },
    },
    {
      fi: "heittäytyä",
      en: "to throw oneself, fling oneself",
      taso: "B2",
      esim: { fi: "Hän heittäytyi sohvalle.", en: "She flung herself onto the sofa." },
    },
    {
      fi: "poisheitettävä",
      en: "disposable",
      taso: "B2",
      esim: { fi: "Käytämme poisheitettäviä mukeja.", en: "We use disposable cups." },
    },
  ],
  synonyymit: [
    { fi: "viskata", en: "to fling, hurl" },
    { fi: "nakata", en: "to chuck (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Heitän pallon sinulle.", en: "I throw the ball to you." },
    B1: { fi: "Heitin roskat roskikseen.", en: "I threw the trash in the bin." },
    B2: {
      fi: "Voitko heittää minut asemalle, jos sinulla on aikaa?",
      en: "Can you give me a ride to the station if you have time?",
    },
  },
  updatedAt: "2026-06-06",
};

export default heittaa;
