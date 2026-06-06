import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, nt–nn gradation, stem työntä-.
// Present työnnän, IRREGULAR past työnsin (t→s before i), past participle työntänyt.
const tyontaa: Word = {
  fi: "työntää",
  slug: "työntää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to push",
  selitys:
    "Liikuttaa jotain itsestä poispäin voimalla: 'työnnä ovea' (push the door). Astevaihtelu nt:nn (työntää → työnnän), imperfekti poikkeava: työnsin. Vastakohta vetää (pull).",
  kuva: { emoji: "🤚", alt: "työntää – liikuttaa poispäin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-tää); astevaihtelu nt:nn; vartalo työntä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "työnnän", merkitys: "I push" },
      { sija: "imperfekti (minä)", muoto: "työnsin", merkitys: "I pushed" },
      { sija: "NUT-partisiippi", muoto: "työntänyt", merkitys: "(have) pushed" },
    ],
    huom:
      "Astevaihtelu nt:nn preesensissä: työnnän, työnnät, työntää. Imperfektissä t→s: työnsin, työnsit, työnsi. Vastakohta vetää. Vrt. työ (work) — sama alku, eri merkitys.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "työnnän" },
          { label: "sinä", form: "työnnät" },
          { label: "hän", form: "työntää" },
          { label: "me", form: "työnnämme" },
          { label: "te", form: "työnnätte" },
          { label: "he", form: "työntävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en työnnä" },
          { label: "hän", form: "ei työnnä" },
          { label: "he", form: "eivät työnnä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "työnsin" },
          { label: "sinä", form: "työnsit" },
          { label: "hän", form: "työnsi" },
          { label: "me", form: "työnsimme" },
          { label: "te", form: "työnsitte" },
          { label: "he", form: "työnsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen työntänyt" },
          { label: "hän", form: "on työntänyt" },
          { label: "he", form: "ovat työntäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "työnnä!" },
          { label: "te", form: "työntäkää!" },
          { label: "kielto (sinä)", form: "älä työnnä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työntö",
      en: "push, thrust",
      taso: "B2",
      esim: { fi: "Auto lähti yhdellä työnnöllä.", en: "The car started with one push." },
    },
    {
      fi: "työntäjä",
      en: "pusher",
      taso: "B2",
      esim: { fi: "Hän on kuulantyöntäjä.", en: "He is a shot putter." },
    },
    {
      fi: "työntövoima",
      en: "thrust, driving force",
      taso: "B2",
      esim: { fi: "Raketin työntövoima on valtava.", en: "The rocket's thrust is enormous." },
    },
  ],
  synonyymit: [
    { fi: "tönäistä", en: "to give a shove" },
    { fi: "sysätä", en: "to thrust, shove" },
  ],
  esimerkit: {
    A2: { fi: "Työnnä ovea, niin se aukeaa.", en: "Push the door and it opens." },
    B1: { fi: "Työnsin vaunuja koko matkan.", en: "I pushed the pram the whole way." },
    B2: {
      fi: "Häntä työnnettiin tekemään päätös, johon hän ei ollut valmis.",
      en: "He was pushed into making a decision he wasn't ready for.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tyontaa;
