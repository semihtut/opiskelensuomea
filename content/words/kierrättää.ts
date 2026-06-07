import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem kierrättä- ~ kierrätä-.
// Present minä kierrätän, hän kierrättää; imperfect minä kierrätin; NUT kierrättänyt.
const kierrattaa: Word = {
  fi: "kierrättää",
  slug: "kierrättää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to recycle",
  selitys:
    "Käyttää uudelleen tai ohjata jäte uusiokäyttöön: 'kierrättää pullot'. Tyyppi 1 (-ää), Kotus 53/muistaa, astevaihtelu tt:t (kierrätän). Johdettu sanasta kierto/kiertää. Vrt. kierrätys, kierto, jäte.",
  kuva: { emoji: "♻️", alt: "kierrättää – käyttää uudelleen, ohjata uusiokäyttöön" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (kierrätä- ~ kierrättä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kierrätän", merkitys: "I recycle" },
      { sija: "imperfekti (minä)", muoto: "kierrätin", merkitys: "I recycled" },
      { sija: "NUT-partisiippi", muoto: "kierrättänyt", merkitys: "(have) recycled" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva kierrättä- (kierrättää, kierrättänyt), heikko kierrätä- (kierrätän, kierrätin). Johdettu sanasta kierto/kiertää. Vrt. kierrätys = recycling, jäte = waste.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kierrätän" },
          { label: "sinä", form: "kierrätät" },
          { label: "hän", form: "kierrättää" },
          { label: "me", form: "kierrätämme" },
          { label: "te", form: "kierrätätte" },
          { label: "he", form: "kierrättävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kierrätä" },
          { label: "hän", form: "ei kierrätä" },
          { label: "he", form: "eivät kierrätä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kierrätin" },
          { label: "sinä", form: "kierrätit" },
          { label: "hän", form: "kierrätti" },
          { label: "me", form: "kierrätimme" },
          { label: "te", form: "kierrätitte" },
          { label: "he", form: "kierrättivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kierrättänyt" },
          { label: "hän", form: "on kierrättänyt" },
          { label: "he", form: "ovat kierrättäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kierrätä!" },
          { label: "te", form: "kierrättäkää!" },
          { label: "kielto (sinä)", form: "älä kierrätä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kierrätys",
      en: "recycling",
      taso: "B1",
      esim: { fi: "Kierrätys on helppoa.", en: "Recycling is easy." },
    },
    {
      fi: "kiertää",
      en: "to circle, go around",
      taso: "B1",
      esim: { fi: "Maa kiertää aurinkoa.", en: "The Earth orbits the Sun." },
    },
  ],
  synonyymit: [
    { fi: "käyttää uudelleen", en: "to reuse" },
    { fi: "lajitella", en: "to sort (waste)" },
  ],
  esimerkit: {
    A2: { fi: "Kierrätän paperin ja lasin.", en: "I recycle paper and glass." },
    B1: { fi: "Perheemme kierrättää kaiken mahdollisen.", en: "Our family recycles everything possible." },
    B2: {
      fi: "Kun materiaaleja kierrätetään, luonnonvaroja säästyy huomattavasti.",
      en: "When materials are recycled, considerable natural resources are saved.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kierrattaa;
