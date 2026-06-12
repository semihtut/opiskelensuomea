import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, nt:nn gradation, stem heikenty- ~ heikenny-.
// Present minä heikennyn, hän heikentyy; imperfect minä heikennyin; NUT heikentynyt. Intransitive.
const heikentya: Word = {
  fi: "heikentyä",
  slug: "heikentyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to weaken, deteriorate, decline",
  selitys:
    "Tulla heikommaksi tai huonommaksi: 'näkö heikentyi iän myötä'. Tyyppi 1 (-yä), Kotus 52/sanoa, astevaihtelu nt:nn (heikennyn). Intransitiivinen (transit. heikentää). Johdettu sanasta heikko. Vastakohta vahvistua. Vrt. heikko, heikentää.",
  kuva: { alt: "heikentyä – tulla heikommaksi tai huonommaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; astevaihtelu nt:nn (heikenty- ~ heikenny-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "heikennyn", merkitys: "I weaken" },
      { sija: "imperfekti (minä)", muoto: "heikennyin", merkitys: "I weakened" },
      { sija: "NUT-partisiippi", muoto: "heikentynyt", merkitys: "(have) weakened" },
    ],
    huom:
      "Astevaihtelu nt:nn: heikko heikenny- (heikennyn, heikennyin), vahva heikenty- (heikentyä, heikentyy, heikentynyt). Intransitiivinen; transitiivinen pari on heikentää. Johdettu sanasta heikko. Vastakohta vahvistua.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "heikennyn" },
          { label: "sinä", form: "heikennyt" },
          { label: "hän / se", form: "heikentyy" },
          { label: "me", form: "heikennymme" },
          { label: "te", form: "heikennytte" },
          { label: "he / ne", form: "heikentyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en heikenny" },
          { label: "se", form: "ei heikenny" },
          { label: "ne", form: "eivät heikenny" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "heikennyin" },
          { label: "hän / se", form: "heikentyi" },
          { label: "ne", form: "heikentyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se", form: "on heikentynyt" },
          { label: "ne", form: "ovat heikentyneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "heikentää",
      en: "to weaken (sth)",
      taso: "B2",
      esim: { fi: "Stressi heikentää keskittymistä.", en: "Stress weakens concentration." },
    },
    {
      fi: "heikko",
      en: "weak",
      taso: "A2",
      esim: { fi: "Signaali on heikko.", en: "The signal is weak." },
    },
  ],
  synonyymit: [
    { fi: "huonontua", en: "to get worse" },
    { fi: "hidastua", en: "to slow down" },
  ],
  esimerkit: {
    A2: { fi: "Sää heikentyi illaksi.", en: "The weather got worse towards evening." },
    B1: { fi: "Talous heikentyi nopeasti.", en: "The economy weakened quickly." },
    B2: {
      fi: "Jos luottamus heikentyy, yhteistyötä on vaikea jatkaa.",
      en: "If trust weakens, it is hard to continue the cooperation.",
    },
  },
  updatedAt: "2026-06-07",
};

export default heikentya;
