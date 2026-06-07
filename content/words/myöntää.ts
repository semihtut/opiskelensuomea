import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, nt:nn gradation, imperfect t→s.
// Present minä myönnän, hän myöntää; imperfect minä myönsin; NUT myöntänyt.
const myontaa: Word = {
  fi: "myöntää",
  slug: "myöntää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to admit, concede; to grant",
  selitys:
    "1) Tunnustaa jokin todeksi: 'myöntää virheensä'. 2) Antaa lupa, etuus tai asiakirja: 'myöntää viisumi'. Tyyppi 1 (-ää), Kotus 54/huutaa, astevaihtelu nt:nn (myönnän) ja imperfektissä t→s (myönsin). Vastakohta kieltää.",
  kuva: { emoji: "🤝", alt: "myöntää – tunnustaa todeksi tai antaa lupa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 54/huutaa; astevaihtelu nt:nn + imperfektin t→s",
    muodot: [
      { sija: "preesens (minä)", muoto: "myönnän", merkitys: "I admit" },
      { sija: "imperfekti (minä)", muoto: "myönsin", merkitys: "I admitted" },
      { sija: "NUT-partisiippi", muoto: "myöntänyt", merkitys: "(have) admitted" },
    ],
    huom:
      "Tyyppi 54: preesensissä nt:nn (myönnän, myönnät), mutta imperfektissä vartalon t muuttuu s:ksi (myönsin), kuten lentää→lensin. NUT-partisiippi säilyttää nt:n (myöntänyt). Vastakohta kieltää.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "myönnän" },
          { label: "sinä", form: "myönnät" },
          { label: "hän", form: "myöntää" },
          { label: "me", form: "myönnämme" },
          { label: "te", form: "myönnätte" },
          { label: "he", form: "myöntävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en myönnä" },
          { label: "hän", form: "ei myönnä" },
          { label: "he", form: "eivät myönnä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "myönsin" },
          { label: "sinä", form: "myönsit" },
          { label: "hän", form: "myönsi" },
          { label: "me", form: "myönsimme" },
          { label: "te", form: "myönsitte" },
          { label: "he", form: "myönsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen myöntänyt" },
          { label: "hän", form: "on myöntänyt" },
          { label: "he", form: "ovat myöntäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "myönnä!" },
          { label: "te", form: "myöntäkää!" },
          { label: "kielto (sinä)", form: "älä myönnä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "myöntö",
      en: "concession, granting",
      taso: "B2",
      esim: { fi: "Luvan myöntö kesti kauan.", en: "Granting the permit took a long time." },
    },
    {
      fi: "myönteinen",
      en: "positive, affirmative",
      taso: "B1",
      esim: { fi: "Saimme myönteisen vastauksen.", en: "We got a positive answer." },
    },
    {
      fi: "myönnytys",
      en: "concession (in negotiation)",
      taso: "B2",
      esim: { fi: "Molemmat osapuolet tekivät myönnytyksiä.", en: "Both parties made concessions." },
    },
  ],
  synonyymit: [
    { fi: "tunnustaa", en: "to confess, acknowledge" },
    { fi: "antaa", en: "to give, grant" },
  ],
  esimerkit: {
    A2: { fi: "Myönnän, että olin väärässä.", en: "I admit that I was wrong." },
    B1: { fi: "Pankki myönsi heille lainan.", en: "The bank granted them a loan." },
    B2: {
      fi: "Hänen oli vaikea myöntää, ettei ollut valmistautunut tarpeeksi.",
      en: "It was hard for him to admit that he hadn't prepared enough.",
    },
  },
  updatedAt: "2026-06-07",
};

export default myontaa;
