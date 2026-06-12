import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 71/nähdä (verb type 2-like), k:∅ gradation,
// irregular. Present näen (k drops), 3sg näkee, past näin/näki, participle nähnyt.
const nahda: Word = {
  fi: "nähdä",
  slug: "nähdä",
  pos: "verbi (tyyppi 2, epäsäännöllinen)",
  posClass: "verbi",
  level: "A1",
  en: "to see",
  selitys:
    "Aistia silmillä; myös tavata tai ymmärtää. Epäsäännöllinen, astevaihtelu k:∅ (näke- → näe-). Vrt. katsoa (= look at, tahallinen).",
  kuva: { alt: "nähdä – näkevät silmät" },

  kielioppi: {
    tyyppi: "tyyppi 71/nähdä (epäsäännöllinen); astevaihtelu k:∅",
    muodot: [
      { sija: "preesens (minä)", muoto: "näen", merkitys: "I see" },
      { sija: "imperfekti (minä)", muoto: "näin", merkitys: "I saw" },
      { sija: "kielto (minä)", muoto: "en näe", merkitys: "I don't see" },
    ],
    huom:
      "Vahva aste k näkyy 3. persoonissa (näkee, näkevät), muuten k katoaa (näen, näet, näemme). Imperfekti näin/näit/näki. Partisiippi nähnyt, monikko nähneet. Vrt. katsoa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "näen" },
          { label: "sinä", form: "näet" },
          { label: "hän", form: "näkee" },
          { label: "me", form: "näemme" },
          { label: "te", form: "näette" },
          { label: "he", form: "näkevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en näe" },
          { label: "sinä", form: "et näe" },
          { label: "hän", form: "ei näe" },
          { label: "me", form: "emme näe" },
          { label: "te", form: "ette näe" },
          { label: "he", form: "eivät näe" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "näin" },
          { label: "sinä", form: "näit" },
          { label: "hän", form: "näki" },
          { label: "me", form: "näimme" },
          { label: "te", form: "näitte" },
          { label: "he", form: "näkivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en nähnyt" },
          { label: "sinä", form: "et nähnyt" },
          { label: "hän", form: "ei nähnyt" },
          { label: "me", form: "emme nähneet" },
          { label: "te", form: "ette nähneet" },
          { label: "he", form: "eivät nähneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen nähnyt" },
          { label: "sinä", form: "olet nähnyt" },
          { label: "hän", form: "on nähnyt" },
          { label: "me", form: "olemme nähneet" },
          { label: "te", form: "olette nähneet" },
          { label: "he", form: "ovat nähneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole nähnyt" },
          { label: "hän", form: "ei ole nähnyt" },
          { label: "he", form: "eivät ole nähneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "näe!" },
          { label: "te", form: "nähkää!" },
          { label: "kielto (sinä)", form: "älä näe" },
          { label: "kielto (te)", form: "älkää nähkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "näkö",
      en: "sight, vision",
      taso: "B1",
      esim: { fi: "Hänellä on hyvä näkö.", en: "She has good eyesight." },
    },
    {
      fi: "näkymä",
      en: "view, scene",
      taso: "B1",
      esim: { fi: "Ikkunasta on kaunis näkymä.", en: "There's a beautiful view from the window." },
    },
    {
      fi: "nähtävyys",
      en: "sight, attraction",
      taso: "B1",
      esim: { fi: "Kävimme katsomassa nähtävyyksiä.", en: "We went sightseeing." },
    },
  ],
  synonyymit: [
    { fi: "havaita", en: "to perceive, notice" },
    { fi: "katsoa", en: "to look at" },
  ],
  esimerkit: {
    A2: { fi: "Näetkö tuon talon?", en: "Do you see that house?" },
    B1: { fi: "Näin sinut eilen kaupassa.", en: "I saw you at the shop yesterday." },
    B2: {
      fi: "En ole koskaan nähnyt mitään yhtä kaunista.",
      en: "I have never seen anything so beautiful.",
    },
  },
  updatedAt: "2026-06-05",
};

export default nahda;
