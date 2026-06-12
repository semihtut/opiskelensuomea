import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem erotta- ~ erota-.
// Present minä erotan, hän erottaa; imperfect minä erotin; NUT erottanut.
const erottaa: Word = {
  fi: "erottaa",
  slug: "erottaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to distinguish, separate; to dismiss, fire",
  selitys:
    "1) Havaita ero kahden asian välillä: 'erottaa värit'. 2) Pitää erillään tai irrottaa: 'erottaa työstä'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (erotan). Vrt. ero, erota, erottua.",
  kuva: { alt: "erottaa – havaita ero tai pitää erillään" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (erota- ~ erotta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "erotan", merkitys: "I distinguish" },
      { sija: "imperfekti (minä)", muoto: "erotin", merkitys: "I distinguished" },
      { sija: "NUT-partisiippi", muoto: "erottanut", merkitys: "(have) distinguished" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva erotta- (erottaa, erottanut), heikko erota- (erotan, erotin). 'Erottaa A B:stä' = to distinguish/separate A from B (elatiivi). Eri sana kuin erota (intransit., to differ/resign). Vrt. ero = difference.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "erotan" },
          { label: "sinä", form: "erotat" },
          { label: "hän", form: "erottaa" },
          { label: "me", form: "erotamme" },
          { label: "te", form: "erotatte" },
          { label: "he", form: "erottavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en erota" },
          { label: "hän", form: "ei erota" },
          { label: "he", form: "eivät erota" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "erotin" },
          { label: "sinä", form: "erotit" },
          { label: "hän", form: "erotti" },
          { label: "me", form: "erotimme" },
          { label: "te", form: "erotitte" },
          { label: "he", form: "erottivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen erottanut" },
          { label: "hän", form: "on erottanut" },
          { label: "he", form: "ovat erottaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "erota!" },
          { label: "te", form: "erottakaa!" },
          { label: "kielto (sinä)", form: "älä erota" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ero",
      en: "difference; separation",
      taso: "B1",
      esim: { fi: "Huomaatko eron?", en: "Do you notice the difference?" },
    },
    {
      fi: "erottua",
      en: "to stand out, be distinguishable",
      taso: "B2",
      esim: { fi: "Hän erottuu joukosta.", en: "She stands out from the crowd." },
    },
  ],
  synonyymit: [
    { fi: "tehdä ero", en: "to make a distinction" },
    { fi: "irrottaa", en: "to detach" },
  ],
  esimerkit: {
    A2: { fi: "En erota näitä kahta toisistaan.", en: "I can't tell these two apart." },
    B1: { fi: "Hyvä silmä erottaa pienetkin sävyerot.", en: "A good eye distinguishes even small shade differences." },
    B2: {
      fi: "On tärkeää erottaa mielipiteet tosiasioista.",
      en: "It is important to distinguish opinions from facts.",
    },
  },
  updatedAt: "2026-06-07",
};

export default erottaa;
