import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem kunnioitta- ~ kunnioita-.
// Present minä kunnioitan, hän kunnioittaa; imperfect minä kunnioitin; NUT kunnioittanut.
const kunnioittaa: Word = {
  fi: "kunnioittaa",
  slug: "kunnioittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to respect, honour",
  selitys:
    "Arvostaa jotakuta tai jotakin syvästi: 'kunnioittaa vanhempiaan'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (kunnioitan). Objekti partitiivissa. Johdettu sanasta kunnia. Vrt. kunnia, kunnioitus, arvostaa.",
  kuva: { alt: "kunnioittaa – arvostaa jotakuta syvästi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (kunnioita- ~ kunnioitta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kunnioitan", merkitys: "I respect" },
      { sija: "imperfekti (minä)", muoto: "kunnioitin", merkitys: "I respected" },
      { sija: "NUT-partisiippi", muoto: "kunnioittanut", merkitys: "(have) respected" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva kunnioitta- (kunnioittaa, kunnioittanut), heikko kunnioita- (kunnioitan, kunnioitin). Objekti partitiivissa: 'kunnioittaa jotakuta'. Johdettu sanasta kunnia. Vrt. kunnioitus = respect.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kunnioitan" },
          { label: "sinä", form: "kunnioitat" },
          { label: "hän", form: "kunnioittaa" },
          { label: "me", form: "kunnioitamme" },
          { label: "te", form: "kunnioitatte" },
          { label: "he", form: "kunnioittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kunnioita" },
          { label: "hän", form: "ei kunnioita" },
          { label: "he", form: "eivät kunnioita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kunnioitin" },
          { label: "sinä", form: "kunnioitit" },
          { label: "hän", form: "kunnioitti" },
          { label: "me", form: "kunnioitimme" },
          { label: "te", form: "kunnioititte" },
          { label: "he", form: "kunnioittivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kunnioittanut" },
          { label: "hän", form: "on kunnioittanut" },
          { label: "he", form: "ovat kunnioittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kunnioita!" },
          { label: "te", form: "kunnioittakaa!" },
          { label: "kielto (sinä)", form: "älä kunnioita" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kunnioitus",
      en: "respect, esteem",
      taso: "B1",
      esim: { fi: "Hän ansaitsee kunnioitusta.", en: "She deserves respect." },
    },
    {
      fi: "kunnia",
      en: "honour, glory",
      taso: "B1",
      esim: { fi: "Se on suuri kunnia.", en: "It is a great honour." },
    },
  ],
  synonyymit: [
    { fi: "arvostaa", en: "to value, appreciate" },
    { fi: "pitää arvossa", en: "to hold in high regard" },
  ],
  esimerkit: {
    A2: { fi: "Kunnioitan päätöstäsi.", en: "I respect your decision." },
    B1: { fi: "Lapset kunnioittavat opettajaansa.", en: "The children respect their teacher." },
    B2: {
      fi: "Toisten mielipiteitä kannattaa kunnioittaa, vaikka olisi eri mieltä.",
      en: "It's worth respecting others' opinions, even if you disagree.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kunnioittaa;
