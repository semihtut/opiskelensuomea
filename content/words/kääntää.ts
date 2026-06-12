import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, nt–nn gradation, stem kääntä-.
// Present käännän, IRREGULAR past käänsin (t→s before i), past participle kääntänyt.
const kaantaa: Word = {
  fi: "kääntää",
  slug: "kääntää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to turn; to translate",
  selitys:
    "Muuttaa suuntaa tai kieltä: 'käännä vasemmalle' / 'käännän tekstin suomeksi'. Astevaihtelu nt:nn (kääntää → käännän), imperfekti poikkeava: käänsin.",
  kuva: { alt: "kääntää – muuttaa suuntaa tai kieltä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-tää); astevaihtelu nt:nn; vartalo kääntä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "käännän", merkitys: "I turn / translate" },
      { sija: "imperfekti (minä)", muoto: "käänsin", merkitys: "I turned / translated" },
      { sija: "NUT-partisiippi", muoto: "kääntänyt", merkitys: "(have) turned / translated" },
    ],
    huom:
      "Astevaihtelu nt:nn: käännän, käännät, kääntää. Imperfektissä t→s: käänsin, käänsit, käänsi. Kääntää kielestä toiseen: 'englannista suomeen'. Vrt. kääntyä = to turn (intransitiivinen), käännös = translation.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "käännän" },
          { label: "sinä", form: "käännät" },
          { label: "hän", form: "kääntää" },
          { label: "me", form: "käännämme" },
          { label: "te", form: "käännätte" },
          { label: "he", form: "kääntävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en käännä" },
          { label: "hän", form: "ei käännä" },
          { label: "he", form: "eivät käännä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "käänsin" },
          { label: "sinä", form: "käänsit" },
          { label: "hän", form: "käänsi" },
          { label: "me", form: "käänsimme" },
          { label: "te", form: "käänsitte" },
          { label: "he", form: "käänsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kääntänyt" },
          { label: "hän", form: "on kääntänyt" },
          { label: "he", form: "ovat kääntäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "käännä!" },
          { label: "te", form: "kääntäkää!" },
          { label: "kielto (sinä)", form: "älä käännä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käännös",
      en: "translation; turn",
      taso: "B1",
      esim: { fi: "Käännös oli erittäin hyvä.", en: "The translation was very good." },
    },
    {
      fi: "kääntäjä",
      en: "translator",
      taso: "B1",
      esim: { fi: "Hän työskentelee kääntäjänä.", en: "She works as a translator." },
    },
    {
      fi: "kääntyä",
      en: "to turn (oneself)",
      taso: "B1",
      esim: { fi: "Käänny seuraavasta kulmasta.", en: "Turn at the next corner." },
    },
  ],
  synonyymit: [
    { fi: "suomentaa", en: "to translate into Finnish" },
    { fi: "väännellä", en: "to twist, turn" },
  ],
  esimerkit: {
    A2: { fi: "Käännä sivua.", en: "Turn the page." },
    B1: { fi: "Käänsin kirjeen englanniksi.", en: "I translated the letter into English." },
    B2: {
      fi: "Keskustelu kääntyi yllättäen aivan toiseen aiheeseen.",
      en: "The conversation suddenly turned to a completely different topic.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kaantaa;
