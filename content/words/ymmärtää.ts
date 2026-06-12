import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 54/huutaa (verb type 1), rt:rr gradation,
// stem ymmärtä-. Present ymmärrän (rt:rr), IRREGULAR past ymmärsin (rt → rs).
const ymmartaa: Word = {
  fi: "ymmärtää",
  slug: "ymmärtää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to understand",
  selitys:
    "Käsittää merkitys tai syy. Tyyppi 1, astevaihtelu rt:rr (ymmärtä- → ymmärrä-). Imperfekti on poikkeava: ymmärsin (rt → rs).",
  kuva: { alt: "ymmärtää – ymmärryksen oivallus" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää); rt:rr-astevaihtelu; poikkeava imperfekti ymmärsin",
    muodot: [
      { sija: "preesens (minä)", muoto: "ymmärrän", merkitys: "I understand" },
      { sija: "imperfekti (minä)", muoto: "ymmärsin", merkitys: "I understood" },
      { sija: "kielto (minä)", muoto: "en ymmärrä", merkitys: "I don't understand" },
    ],
    huom:
      "Preesensissä rt → rr (ymmärrän), mutta imperfektissä rt → rs (ymmärsin, ymmärsi). Partisiippi ymmärtänyt. Vrt. tajuta (= grasp, colloquial).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ymmärrän" },
          { label: "sinä", form: "ymmärrät" },
          { label: "hän", form: "ymmärtää" },
          { label: "me", form: "ymmärrämme" },
          { label: "te", form: "ymmärrätte" },
          { label: "he", form: "ymmärtävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ymmärrä" },
          { label: "sinä", form: "et ymmärrä" },
          { label: "hän", form: "ei ymmärrä" },
          { label: "me", form: "emme ymmärrä" },
          { label: "te", form: "ette ymmärrä" },
          { label: "he", form: "eivät ymmärrä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ymmärsin" },
          { label: "sinä", form: "ymmärsit" },
          { label: "hän", form: "ymmärsi" },
          { label: "me", form: "ymmärsimme" },
          { label: "te", form: "ymmärsitte" },
          { label: "he", form: "ymmärsivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en ymmärtänyt" },
          { label: "sinä", form: "et ymmärtänyt" },
          { label: "hän", form: "ei ymmärtänyt" },
          { label: "me", form: "emme ymmärtäneet" },
          { label: "te", form: "ette ymmärtäneet" },
          { label: "he", form: "eivät ymmärtäneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ymmärtänyt" },
          { label: "sinä", form: "olet ymmärtänyt" },
          { label: "hän", form: "on ymmärtänyt" },
          { label: "me", form: "olemme ymmärtäneet" },
          { label: "te", form: "olette ymmärtäneet" },
          { label: "he", form: "ovat ymmärtäneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole ymmärtänyt" },
          { label: "hän", form: "ei ole ymmärtänyt" },
          { label: "he", form: "eivät ole ymmärtäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ymmärrä!" },
          { label: "te", form: "ymmärtäkää!" },
          { label: "kielto (sinä)", form: "älä ymmärrä" },
          { label: "kielto (te)", form: "älkää ymmärtäkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ymmärrys",
      en: "understanding, comprehension",
      taso: "B2",
      esim: { fi: "Sain asiasta paremman ymmärryksen.", en: "I got a better understanding of the matter." },
    },
    {
      fi: "ymmärrettävä",
      en: "understandable",
      taso: "B2",
      esim: { fi: "Ohje oli selkeä ja ymmärrettävä.", en: "The instruction was clear and understandable." },
    },
    {
      fi: "väärinymmärrys",
      en: "misunderstanding",
      taso: "B2",
      esim: { fi: "Kyse oli väärinymmärryksestä.", en: "It was a misunderstanding." },
    },
  ],
  synonyymit: [
    { fi: "tajuta", en: "to grasp (colloquial)" },
    { fi: "käsittää", en: "to comprehend" },
  ],
  esimerkit: {
    A2: { fi: "Ymmärrätkö suomea?", en: "Do you understand Finnish?" },
    B1: { fi: "En ymmärtänyt kysymystä.", en: "I didn't understand the question." },
    B2: {
      fi: "Vasta myöhemmin ymmärsin, mitä hän oikeasti tarkoitti.",
      en: "Only later did I understand what she really meant.",
    },
  },
  updatedAt: "2026-06-05",
};

export default ymmartaa;
