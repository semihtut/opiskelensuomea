import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 69/valita, no gradation, stem mainitse-.
// Present mainitsen, past mainitsin, past participle maininnut, passive past mainittu.
const mainita: Word = {
  fi: "mainita",
  slug: "mainita",
  pos: "verbi (tyyppi 5)",
  posClass: "verbi",
  level: "B1",
  en: "to mention",
  selitys:
    "Sanoa jokin lyhyesti, tuoda esiin ohimennen: 'mainita nimi'. Tyyppi 69/valita: vartalo -tse- (mainitsen), partisiippi maininnut. Vrt. maininta (mention), mainio (excellent — eri sana!).",
  kuva: { emoji: "💡", alt: "mainita – tuoda jokin lyhyesti esiin" },

  kielioppi: {
    tyyppi: "tyyppi 69/valita (-ita); ei astevaihtelua; vartalo mainitse-",
    muodot: [
      { sija: "preesens (minä)", muoto: "mainitsen", merkitys: "I mention" },
      { sija: "imperfekti (minä)", muoto: "mainitsin", merkitys: "I mentioned" },
      { sija: "NUT-partisiippi", muoto: "maininnut", merkitys: "(have) mentioned" },
    ],
    huom:
      "Persoona- ja imperfektimuodot -tse-: mainitsen, mainitsin. Partisiippi kuitenkin maininnut, passiivi mainittu. 'Mainita jostakin / jokin.' Vrt. maininta = a mention.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "mainitsen" },
          { label: "sinä", form: "mainitset" },
          { label: "hän", form: "mainitsee" },
          { label: "me", form: "mainitsemme" },
          { label: "te", form: "mainitsette" },
          { label: "he", form: "mainitsevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en mainitse" },
          { label: "hän", form: "ei mainitse" },
          { label: "he", form: "eivät mainitse" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "mainitsin" },
          { label: "sinä", form: "mainitsit" },
          { label: "hän", form: "mainitsi" },
          { label: "me", form: "mainitsimme" },
          { label: "te", form: "mainitsitte" },
          { label: "he", form: "mainitsivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen maininnut" },
          { label: "hän", form: "on maininnut" },
          { label: "he", form: "ovat maininneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "mainitse!" },
          { label: "te", form: "mainitkaa!" },
          { label: "kielto (sinä)", form: "älä mainitse" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "maininta",
      en: "mention, reference",
      taso: "B2",
      esim: { fi: "Sain kunniamaininnan kilpailussa.", en: "I got an honorable mention in the contest." },
    },
    {
      fi: "mainittu",
      en: "mentioned, said",
      taso: "B2",
      esim: { fi: "Edellä mainittu sääntö pätee yhä.", en: "The aforementioned rule still applies." },
    },
    {
      fi: "mainitsematta",
      en: "without mentioning",
      taso: "B2",
      esim: { fi: "Hän jätti syyn mainitsematta.", en: "He left the reason unmentioned." },
    },
  ],
  synonyymit: [
    { fi: "todeta", en: "to state, note" },
    { fi: "kertoa", en: "to tell" },
  ],
  esimerkit: {
    A2: { fi: "Hän mainitsi nimesi.", en: "She mentioned your name." },
    B1: { fi: "Mainitsin asiasta jo eilen.", en: "I already mentioned the matter yesterday." },
    B2: {
      fi: "Raportissa mainittiin useita riskejä, joita ei aiemmin ollut huomattu.",
      en: "The report mentioned several risks that hadn't been noticed before.",
    },
  },
  updatedAt: "2026-06-06",
};

export default mainita;
