import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, t:d gradation, stem tapahtu- ~ tapahdu-.
// Present hän tapahtuu; imperfect hän tapahtui; NUT participle tapahtunut. Mainly 3rd person.
const tapahtua: Word = {
  fi: "tapahtua",
  slug: "tapahtua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to happen, take place, occur",
  selitys:
    "Sattua tai käydä toteen: 'mitä tapahtui?'. Tyyppi 1 (-ua), tyyppi 52/sanoa, astevaihtelu t:d (tapahtuu ~ tapahdun). Käytetään lähes aina 3. persoonassa. Vrt. tapahtuma (event), tapaus (case).",
  kuva: { alt: "tapahtua – sattua tai käydä toteen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; astevaihtelu t:d; useimmiten 3. persoonassa",
    muodot: [
      { sija: "preesens (hän/se)", muoto: "tapahtuu", merkitys: "it happens" },
      { sija: "imperfekti (hän/se)", muoto: "tapahtui", merkitys: "it happened" },
      { sija: "NUT-partisiippi", muoto: "tapahtunut", merkitys: "(has) happened" },
    ],
    huom:
      "Käytetään lähes aina 3. persoonassa (jokin tapahtuu). Vahva aste tt... ei — vahva aste t säilyy muodoissa tapahtuu, tapahtui; heikko aste d esiintyy harvinaisissa minä-muodoissa (tapahdun). 'Mitä sinulle tapahtui?' = What happened to you?",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "hän / se", form: "tapahtuu" },
          { label: "he / ne", form: "tapahtuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "se", form: "ei tapahdu" },
          { label: "ne", form: "eivät tapahdu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "hän / se", form: "tapahtui" },
          { label: "he / ne", form: "tapahtuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se", form: "on tapahtunut" },
          { label: "ne", form: "ovat tapahtuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tapahtuma",
      en: "event, occurrence",
      taso: "A2",
      esim: { fi: "Konsertti on suuri tapahtuma.", en: "The concert is a big event." },
    },
    {
      fi: "tapaus",
      en: "case, incident",
      taso: "B1",
      esim: { fi: "Poliisi tutkii tapausta.", en: "The police are investigating the case." },
    },
    {
      fi: "tapahtumarikas",
      en: "eventful",
      taso: "B2",
      esim: { fi: "Vuosi oli tapahtumarikas.", en: "The year was eventful." },
    },
  ],
  synonyymit: [
    { fi: "sattua", en: "to happen, occur" },
    { fi: "käydä toteen", en: "to come true" },
  ],
  esimerkit: {
    A2: { fi: "Mitä täällä tapahtuu?", en: "What's happening here?" },
    B1: { fi: "Onnettomuus tapahtui aamulla.", en: "The accident happened in the morning." },
    B2: {
      fi: "Kukaan ei tiennyt, mitä seuraavaksi tapahtuisi.",
      en: "No one knew what would happen next.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tapahtua;
