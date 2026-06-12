import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem luotta- ~ luota-.
// Present minä luotan, hän luottaa; imperfect minä luotin; NUT luottanut. Governs illative.
const luottaa: Word = {
  fi: "luottaa",
  slug: "luottaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to trust, rely on, count on",
  selitys:
    "Uskoa, että joku tai jokin on luotettava: 'luotan sinuun'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (luotan). Hallitsee illatiivia ('luottaa johonkin/johonkuhun'). Vrt. luottamus, luotettava, luottavainen.",
  kuva: { alt: "luottaa – uskoa että joku on luotettava" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (luota- ~ luotta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "luotan", merkitys: "I trust" },
      { sija: "imperfekti (minä)", muoto: "luotin", merkitys: "I trusted" },
      { sija: "NUT-partisiippi", muoto: "luottanut", merkitys: "(have) trusted" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva luotta- (luottaa, luottanut), heikko luota- (luotan, luotin). Hallitsee illatiivia: 'luottaa sinuun, omaan kokemukseen'. Vrt. luottamus = trust, luotettava = reliable.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "luotan" },
          { label: "sinä", form: "luotat" },
          { label: "hän", form: "luottaa" },
          { label: "me", form: "luotamme" },
          { label: "te", form: "luotatte" },
          { label: "he", form: "luottavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en luota" },
          { label: "hän", form: "ei luota" },
          { label: "he", form: "eivät luota" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "luotin" },
          { label: "sinä", form: "luotit" },
          { label: "hän", form: "luotti" },
          { label: "me", form: "luotimme" },
          { label: "te", form: "luotitte" },
          { label: "he", form: "luottivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen luottanut" },
          { label: "hän", form: "on luottanut" },
          { label: "he", form: "ovat luottaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "luota!" },
          { label: "te", form: "luottakaa!" },
          { label: "kielto (sinä)", form: "älä luota" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luottamus",
      en: "trust, confidence",
      taso: "B1",
      esim: { fi: "Luottamus on ansaittava.", en: "Trust must be earned." },
    },
    {
      fi: "luotettava",
      en: "reliable, trustworthy",
      taso: "B1",
      esim: { fi: "Hän on luotettava ystävä.", en: "She is a reliable friend." },
    },
  ],
  synonyymit: [
    { fi: "uskoa", en: "to believe (in)" },
    { fi: "turvautua", en: "to rely on" },
  ],
  esimerkit: {
    A2: { fi: "Luotan sinuun.", en: "I trust you." },
    B1: { fi: "Voit luottaa siihen, että autan.", en: "You can count on the fact that I'll help." },
    B2: {
      fi: "Hyvä johtaja luottaa tiimiinsä eikä yritä tehdä kaikkea itse.",
      en: "A good leader trusts their team and doesn't try to do everything themselves.",
    },
  },
  updatedAt: "2026-06-07",
};

export default luottaa;
