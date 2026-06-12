import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem keskeyttä- ~ keskeytä-.
// Present minä keskeytän, hän keskeyttää; imperfect minä keskeytin; NUT keskeyttänyt.
const keskeyttaa: Word = {
  fi: "keskeyttää",
  slug: "keskeyttää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to interrupt, suspend, discontinue",
  selitys:
    "Lopettaa jokin kesken tai katkaista toisen toiminta: 'keskeyttää puhuja'. Tyyppi 1 (-ää), Kotus 53/muistaa, astevaihtelu tt:t (keskeytän). Objekti partitiivissa. Johdettu sanasta kesken/keskeinen. Vrt. keskeytys, keskeytyä.",
  kuva: { alt: "keskeyttää – lopettaa jokin kesken tai katkaista toiminta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (keskeytä- ~ keskeyttä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "keskeytän", merkitys: "I interrupt" },
      { sija: "imperfekti (minä)", muoto: "keskeytin", merkitys: "I interrupted" },
      { sija: "NUT-partisiippi", muoto: "keskeyttänyt", merkitys: "(have) interrupted" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva keskeyttä- (keskeyttää, keskeyttänyt), heikko keskeytä- (keskeytän, keskeytin). Objekti partitiivissa: 'keskeyttää opinnot'. Vrt. keskeytys = interruption, keskeytyä = to be interrupted.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "keskeytän" },
          { label: "sinä", form: "keskeytät" },
          { label: "hän", form: "keskeyttää" },
          { label: "me", form: "keskeytämme" },
          { label: "te", form: "keskeytätte" },
          { label: "he", form: "keskeyttävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en keskeytä" },
          { label: "hän", form: "ei keskeytä" },
          { label: "he", form: "eivät keskeytä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "keskeytin" },
          { label: "sinä", form: "keskeytit" },
          { label: "hän", form: "keskeytti" },
          { label: "me", form: "keskeytimme" },
          { label: "te", form: "keskeytitte" },
          { label: "he", form: "keskeyttivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen keskeyttänyt" },
          { label: "hän", form: "on keskeyttänyt" },
          { label: "he", form: "ovat keskeyttäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "keskeytä!" },
          { label: "te", form: "keskeyttäkää!" },
          { label: "kielto (sinä)", form: "älä keskeytä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "keskeytys",
      en: "interruption, break",
      taso: "B2",
      esim: { fi: "Sähkökatko aiheutti keskeytyksen.", en: "The power cut caused an interruption." },
    },
    {
      fi: "keskeytyä",
      en: "to be interrupted (intransitive)",
      taso: "B2",
      esim: { fi: "Peli keskeytyi sateen takia.", en: "The game was interrupted because of rain." },
    },
  ],
  synonyymit: [
    { fi: "katkaista", en: "to cut off" },
    { fi: "lopettaa kesken", en: "to stop midway" },
  ],
  esimerkit: {
    A2: { fi: "Älä keskeytä minua.", en: "Don't interrupt me." },
    B1: { fi: "Hän keskeytti opinnot vuodeksi.", en: "She suspended her studies for a year." },
    B2: {
      fi: "Esitys jouduttiin keskeyttämään teknisten ongelmien vuoksi.",
      en: "The presentation had to be interrupted due to technical problems.",
    },
  },
  updatedAt: "2026-06-07",
};

export default keskeyttaa;
