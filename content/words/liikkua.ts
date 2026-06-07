import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, kk:k gradation, stem liikku- ~ liiku-.
// Present minä liikun, hän liikkuu; imperfect minä liikuin; NUT liikkunut. Intransitive.
const liikkua: Word = {
  fi: "liikkua",
  slug: "liikkua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to move; to exercise, be active",
  selitys:
    "Vaihtaa paikkaa tai olla fyysisesti aktiivinen: 'liikkua säännöllisesti'. Tyyppi 1 (-ua), Kotus 52/sanoa, astevaihtelu kk:k (liikun). Intransitiivinen (transit. liikuttaa). Vrt. liike, liikunta, liikuttaa.",
  kuva: { emoji: "🚶", alt: "liikkua – vaihtaa paikkaa tai olla fyysisesti aktiivinen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; astevaihtelu kk:k (liikku- ~ liiku-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "liikun", merkitys: "I move" },
      { sija: "imperfekti (minä)", muoto: "liikuin", merkitys: "I moved" },
      { sija: "NUT-partisiippi", muoto: "liikkunut", merkitys: "(have) moved" },
    ],
    huom:
      "Astevaihtelu kk:k: heikko liiku- (liikun, liikuin), vahva liikku- (liikkua, liikkuu, liikkunut). Intransitiivinen; transitiivinen pari liikuttaa. Merkitys myös 'urheilla'. Vrt. liike = movement, liikunta = exercise.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "liikun" },
          { label: "sinä", form: "liikut" },
          { label: "hän", form: "liikkuu" },
          { label: "me", form: "liikumme" },
          { label: "te", form: "liikutte" },
          { label: "he", form: "liikkuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en liiku" },
          { label: "hän", form: "ei liiku" },
          { label: "he", form: "eivät liiku" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "liikuin" },
          { label: "sinä", form: "liikuit" },
          { label: "hän", form: "liikkui" },
          { label: "me", form: "liikuimme" },
          { label: "te", form: "liikuitte" },
          { label: "he", form: "liikkuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen liikkunut" },
          { label: "hän", form: "on liikkunut" },
          { label: "he", form: "ovat liikkuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "liiku!" },
          { label: "te", form: "liikkukaa!" },
          { label: "kielto (sinä)", form: "älä liiku" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "liikunta",
      en: "exercise, physical activity",
      taso: "B1",
      esim: { fi: "Liikunta on terveellistä.", en: "Exercise is healthy." },
    },
    {
      fi: "liike",
      en: "movement, motion; shop",
      taso: "B1",
      esim: { fi: "Tein nopean liikkeen.", en: "I made a quick movement." },
    },
    {
      fi: "liikuttaa",
      en: "to move (sth); to touch emotionally",
      taso: "B2",
      esim: { fi: "Tarina liikutti minua.", en: "The story moved me." },
    },
  ],
  synonyymit: [
    { fi: "siirtyä", en: "to shift, move" },
    { fi: "urheilla", en: "to do sports" },
  ],
  esimerkit: {
    A2: { fi: "Liikun joka päivä.", en: "I exercise every day." },
    B1: { fi: "Älä liiku, kun otan kuvan.", en: "Don't move while I take a picture." },
    B2: {
      fi: "Säännöllinen liikkuminen parantaa sekä kuntoa että mielialaa.",
      en: "Regular exercise improves both fitness and mood.",
    },
  },
  updatedAt: "2026-06-07",
};

export default liikkua;
