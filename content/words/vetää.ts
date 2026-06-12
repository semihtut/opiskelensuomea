import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, t–d gradation, stem vetä-.
// Present vedän, past vedin, hän veti, past participle vetänyt.
const vetaa: Word = {
  fi: "vetää",
  slug: "vetää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to pull, drag, draw",
  selitys:
    "Liikuttaa jotain itseä kohti voimalla: 'vedä ovea' (pull the door). Astevaihtelu t:d (vetää → vedän). Vastakohta työntää (push).",
  kuva: { alt: "vetää – liikuttaa itseä kohti" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-tää); astevaihtelu t:d; vartalo vetä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "vedän", merkitys: "I pull" },
      { sija: "imperfekti (minä)", muoto: "vedin", merkitys: "I pulled" },
      { sija: "NUT-partisiippi", muoto: "vetänyt", merkitys: "(have) pulled" },
    ],
    huom:
      "Astevaihtelu t:d: vedän, vedät, vetää. Imperfekti: vedin, vedit, veti. Vastakohta työntää. Hyvin monikäyttöinen: vetää viiva, vetää naruista, vetää johtoa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vedän" },
          { label: "sinä", form: "vedät" },
          { label: "hän", form: "vetää" },
          { label: "me", form: "vedämme" },
          { label: "te", form: "vedätte" },
          { label: "he", form: "vetävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vedä" },
          { label: "hän", form: "ei vedä" },
          { label: "he", form: "eivät vedä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vedin" },
          { label: "sinä", form: "vedit" },
          { label: "hän", form: "veti" },
          { label: "me", form: "vedimme" },
          { label: "te", form: "veditte" },
          { label: "he", form: "vetivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen vetänyt" },
          { label: "hän", form: "on vetänyt" },
          { label: "he", form: "ovat vetäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vedä!" },
          { label: "te", form: "vetäkää!" },
          { label: "kielto (sinä)", form: "älä vedä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "veto",
      en: "draught, pull; bet",
      taso: "B1",
      esim: { fi: "Ikkunasta tulee veto.", en: "There's a draught from the window." },
    },
    {
      fi: "vetoketju",
      en: "zipper",
      taso: "B1",
      esim: { fi: "Takin vetoketju on rikki.", en: "The jacket's zipper is broken." },
    },
    {
      fi: "vetävä",
      en: "catchy, compelling",
      taso: "B2",
      esim: { fi: "Laulussa on vetävä melodia.", en: "The song has a catchy melody." },
    },
  ],
  synonyymit: [
    { fi: "raahata", en: "to drag" },
    { fi: "kiskoa", en: "to yank, haul" },
  ],
  esimerkit: {
    A2: { fi: "Vedä ovea, älä työnnä.", en: "Pull the door, don't push." },
    B1: { fi: "Hevonen veti raskasta kärryä.", en: "The horse pulled a heavy cart." },
    B2: {
      fi: "Hän veti puoleensa katseet heti astuessaan sisään.",
      en: "She drew everyone's gaze the moment she stepped in.",
    },
  },
  updatedAt: "2026-06-06",
};

export default vetaa;
