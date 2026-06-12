import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 72/vanheta, t:d gradation, stem etene- ~ eden-.
// Present minä etenen, hän etenee; imperfect minä etenin; NUT edennyt.
const edeta: Word = {
  fi: "edetä",
  slug: "edetä",
  pos: "verbi (tyyppi 5)",
  posClass: "verbi",
  level: "B1",
  en: "to advance, proceed, make progress",
  selitys:
    "Liikkua eteenpäin tai kehittyä kohti tavoitetta: 'projekti etenee hyvin'. Tyyppi 5 (-etä), Kotus 72/vanheta, astevaihtelu t:d (etenen vahva t, edetä/edennyt heikko d). Intransitiivinen. Vrt. eteenpäin, edistyä.",
  kuva: { alt: "edetä – liikkua eteenpäin, kehittyä" },

  kielioppi: {
    tyyppi: "tyyppi 5 (-etä), Kotus 72/vanheta; astevaihtelu t:d (etene- ~ eden-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "etenen", merkitys: "I advance" },
      { sija: "imperfekti (minä)", muoto: "etenin", merkitys: "I advanced" },
      { sija: "NUT-partisiippi", muoto: "edennyt", merkitys: "(have) advanced" },
    ],
    huom:
      "Tyyppi 72: preesensin vartalo etene- (etenen, etenee), mutta infinitiivi edetä ja NUT-partisiippi edennyt ovat heikossa asteessa (d). Imperfekti etenin. Intransitiivinen: 'asia etenee'. Vrt. edistyä, eteenpäin.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "etenen" },
          { label: "sinä", form: "etenet" },
          { label: "hän", form: "etenee" },
          { label: "me", form: "etenemme" },
          { label: "te", form: "etenette" },
          { label: "he", form: "etenevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en etene" },
          { label: "hän", form: "ei etene" },
          { label: "he", form: "eivät etene" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "etenin" },
          { label: "sinä", form: "etenit" },
          { label: "hän", form: "eteni" },
          { label: "me", form: "etenimme" },
          { label: "te", form: "etenitte" },
          { label: "he", form: "etenivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen edennyt" },
          { label: "hän", form: "on edennyt" },
          { label: "he", form: "ovat edenneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "etene!" },
          { label: "te", form: "edetkää!" },
          { label: "kielto (sinä)", form: "älä etene" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "edistyä",
      en: "to make progress, improve",
      taso: "B1",
      esim: { fi: "Suomen taitoni edistyy.", en: "My Finnish is improving." },
    },
    {
      fi: "eteneminen",
      en: "advancement, progress",
      taso: "B2",
      esim: { fi: "Työn eteneminen oli hidasta.", en: "The work's progress was slow." },
    },
    {
      fi: "edistys",
      en: "progress, advancement",
      taso: "B2",
      esim: { fi: "Tieteen edistys on nopeaa.", en: "The progress of science is fast." },
    },
  ],
  synonyymit: [
    { fi: "edistyä", en: "to progress" },
    { fi: "mennä eteenpäin", en: "to move forward" },
  ],
  esimerkit: {
    A2: { fi: "Projekti etenee hyvin.", en: "The project is progressing well." },
    B1: { fi: "Etenimme suunnitelman mukaan.", en: "We proceeded according to plan." },
    B2: {
      fi: "Neuvottelut etenivät hitaasti, koska osapuolet olivat eri mieltä monesta asiasta.",
      en: "The negotiations proceeded slowly, because the parties disagreed on many things.",
    },
  },
  updatedAt: "2026-06-07",
};

export default edeta;
