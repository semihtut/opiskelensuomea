import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 56/kaivaa, nt–nn gradation, stem kanta-.
// Present kannan, past kannoin, hän kantoi, past participle kantanut.
const kantaa: Word = {
  fi: "kantaa",
  slug: "kantaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to carry, to bear; to support",
  selitys:
    "Kuljettaa jotain mukana tai kannatella painoa: 'kannan laukkua' / 'jää kantaa auton'. Astevaihtelu nt:nn (kantaa → kannan), tyypin 56 imperfekti -oi-: kannoin.",
  kuva: { emoji: "🎒", alt: "kantaa – kuljettaa mukana, kannatella" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-taa, malli kaivaa); astevaihtelu nt:nn; vartalo kanta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kannan", merkitys: "I carry" },
      { sija: "imperfekti (minä)", muoto: "kannoin", merkitys: "I carried" },
      { sija: "NUT-partisiippi", muoto: "kantanut", merkitys: "(have) carried" },
    ],
    huom:
      "Astevaihtelu nt:nn: kannan, kannat, kantaa. Tyypin 56 imperfekti -oi-: kannoin, kannoit, kantoi. Vrt. kanto = stump, kantaja = carrier, kantava = load-bearing.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kannan" },
          { label: "sinä", form: "kannat" },
          { label: "hän", form: "kantaa" },
          { label: "me", form: "kannamme" },
          { label: "te", form: "kannatte" },
          { label: "he", form: "kantavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kanna" },
          { label: "hän", form: "ei kanna" },
          { label: "he", form: "eivät kanna" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kannoin" },
          { label: "sinä", form: "kannoit" },
          { label: "hän", form: "kantoi" },
          { label: "me", form: "kannoimme" },
          { label: "te", form: "kannoitte" },
          { label: "he", form: "kantoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kantanut" },
          { label: "hän", form: "on kantanut" },
          { label: "he", form: "ovat kantaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kanna!" },
          { label: "te", form: "kantakaa!" },
          { label: "kielto (sinä)", form: "älä kanna" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kantaja",
      en: "carrier, bearer; plaintiff",
      taso: "B2",
      esim: { fi: "Matkalaukun kantaja odotti aulassa.", en: "The luggage porter waited in the lobby." },
    },
    {
      fi: "kantava",
      en: "load-bearing, supporting",
      taso: "B2",
      esim: { fi: "Tämä on kantava seinä.", en: "This is a load-bearing wall." },
    },
    {
      fi: "kannettava",
      en: "portable; laptop",
      taso: "B1",
      esim: { fi: "Ostin uuden kannettavan.", en: "I bought a new laptop." },
    },
  ],
  synonyymit: [
    { fi: "kuljettaa", en: "to transport" },
    { fi: "kannatella", en: "to hold up, support" },
  ],
  esimerkit: {
    A2: { fi: "Kannan ostokset kotiin.", en: "I carry the groceries home." },
    B1: { fi: "Hän kantoi lasta sylissään.", en: "She carried the child in her arms." },
    B2: {
      fi: "Jokaisen on kannettava vastuunsa yhteisestä projektista.",
      en: "Everyone must carry their responsibility for the shared project.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kantaa;
