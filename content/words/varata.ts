import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, no gradation, stem varaa- ~ vara-.
// Present minä varaan, hän varaa; imperfect minä varasin, hän varasi; NUT varannut.
const varata: Word = {
  fi: "varata",
  slug: "varata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to reserve, book; to set aside",
  selitys:
    "Pidättää jotakin itselleen etukäteen, esim. pöytä tai aika: 'varata lippu'. Tyyppi 4 (-ata), ei astevaihtelua; vartalo varaa-. Johdettu sanasta vara. Vrt. varaus (reservation), varata aika.",
  kuva: { emoji: "📅", alt: "varata – pidättää jotakin itselleen etukäteen" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata), Kotus 73/salata; ei astevaihtelua; vartalo varaa- ~ vara-",
    muodot: [
      { sija: "preesens (minä)", muoto: "varaan", merkitys: "I reserve" },
      { sija: "imperfekti (minä)", muoto: "varasin", merkitys: "I reserved" },
      { sija: "NUT-partisiippi", muoto: "varannut", merkitys: "(have) reserved" },
    ],
    huom:
      "Ei astevaihtelua (vartalo varaa- ~ vara-). 'Varata aika' = to book an appointment, 'varata pöytä' = to reserve a table. NUT-partisiippi varannut. Vrt. varaus = booking, vara = reserve.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "varaan" },
          { label: "sinä", form: "varaat" },
          { label: "hän", form: "varaa" },
          { label: "me", form: "varaamme" },
          { label: "te", form: "varaatte" },
          { label: "he", form: "varaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en varaa" },
          { label: "hän", form: "ei varaa" },
          { label: "he", form: "eivät varaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "varasin" },
          { label: "sinä", form: "varasit" },
          { label: "hän", form: "varasi" },
          { label: "me", form: "varasimme" },
          { label: "te", form: "varasitte" },
          { label: "he", form: "varasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen varannut" },
          { label: "hän", form: "on varannut" },
          { label: "he", form: "ovat varanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "varaa!" },
          { label: "te", form: "varatkaa!" },
          { label: "kielto (sinä)", form: "älä varaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "varaus",
      en: "reservation, booking",
      taso: "B1",
      esim: { fi: "Teimme pöytävarauksen ravintolaan.", en: "We made a table reservation at the restaurant." },
    },
    {
      fi: "varattu",
      en: "reserved, taken, busy",
      taso: "B1",
      esim: { fi: "Tämä paikka on varattu.", en: "This seat is reserved." },
    },
    {
      fi: "varautua",
      en: "to prepare, be prepared",
      taso: "B2",
      esim: { fi: "Varauduimme sateeseen.", en: "We prepared for rain." },
    },
  ],
  synonyymit: [
    { fi: "buukata", en: "to book (colloquial)" },
    { fi: "tilata", en: "to order, reserve" },
  ],
  esimerkit: {
    A2: { fi: "Varaan pöydän kahdelle.", en: "I'll reserve a table for two." },
    B1: { fi: "Varasin lennot jo viime viikolla.", en: "I booked the flights already last week." },
    B2: {
      fi: "Suosittu kurssi täyttyy nopeasti, joten kannattaa varata paikka ajoissa.",
      en: "The popular course fills up quickly, so it's worth reserving a spot in time.",
    },
  },
  updatedAt: "2026-06-07",
};

export default varata;
