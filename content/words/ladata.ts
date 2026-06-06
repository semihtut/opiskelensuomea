import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, t:d gradation, stem lataa- ~ lada-.
// Present minä lataan, hän lataa; imperfect minä latasin, hän latasi; NUT ladannut.
const ladata: Word = {
  fi: "ladata",
  slug: "ladata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to charge; to load; to download/upload",
  selitys:
    "Täyttää akku energialla tai siirtää tiedostoa verkossa: 'ladata puhelin' / 'ladata sovellus'. Tyyppi 4 (-ata), astevaihtelu t:d (lataan ~ ladata). Johdettu ruotsista (ladda). Vrt. lataus, laturi.",
  kuva: { emoji: "🔋", alt: "ladata – täyttää akku energialla tai siirtää tiedostoa" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata), Kotus 73/salata; astevaihtelu t:d (lataa- ↔ lada-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "lataan", merkitys: "I charge/download" },
      { sija: "imperfekti (minä)", muoto: "latasin", merkitys: "I charged/downloaded" },
      { sija: "NUT-partisiippi", muoto: "ladannut", merkitys: "(have) charged/downloaded" },
    ],
    huom:
      "Vahva aste t taipuvissa muodoissa (lataan, latasin), heikko aste d perusmuodossa, NUT-partisiipissa ja te-imperatiivissa (ladata, ladannut, ladatkaa). 'Ladata netistä' = to download from the net.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "lataan" },
          { label: "sinä", form: "lataat" },
          { label: "hän", form: "lataa" },
          { label: "me", form: "lataamme" },
          { label: "te", form: "lataatte" },
          { label: "he", form: "lataavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en lataa" },
          { label: "hän", form: "ei lataa" },
          { label: "he", form: "eivät lataa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "latasin" },
          { label: "sinä", form: "latasit" },
          { label: "hän", form: "latasi" },
          { label: "me", form: "latasimme" },
          { label: "te", form: "latasitte" },
          { label: "he", form: "latasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ladannut" },
          { label: "hän", form: "on ladannut" },
          { label: "he", form: "ovat ladanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "lataa!" },
          { label: "te", form: "ladatkaa!" },
          { label: "kielto (sinä)", form: "älä lataa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lataus",
      en: "charge, charging; download",
      taso: "B2",
      esim: { fi: "Lataus on melkein täynnä.", en: "The charge is almost full." },
    },
    {
      fi: "laturi",
      en: "charger",
      taso: "B1",
      esim: { fi: "Unohdin laturin kotiin.", en: "I forgot the charger at home." },
    },
    {
      fi: "latauskaapeli",
      en: "charging cable",
      taso: "B2",
      esim: { fi: "Latauskaapeli meni rikki.", en: "The charging cable broke." },
    },
  ],
  synonyymit: [
    { fi: "tallentaa", en: "to save, store (related)" },
    { fi: "imuroida", en: "to download (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Lataan puhelimen yöllä.", en: "I charge the phone at night." },
    B1: { fi: "Latasin sovelluksen ilmaiseksi.", en: "I downloaded the app for free." },
    B2: {
      fi: "Muista ladata akku täyteen ennen pitkää matkaa.",
      en: "Remember to charge the battery fully before a long trip.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ladata;
