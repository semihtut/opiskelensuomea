import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, k:j gradation (rk:rj), stem järke- ~ järje-.
// Genitive järjen, partitive järkeä, illative järkeen, partitive pl järkiä.
const järki: Word = {
  fi: "järki",
  slug: "järki",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "B1",
  en: "reason, sense, common sense",
  selitys:
    "Kyky ajatella loogisesti ja arvioida järkevästi: 'käyttää järkeä'. Tyyppi 7, astevaihtelu k:j (järki → järjen). Yleensä yksikössä. Vrt. järkevä (sensible), järjetön (senseless).",
  kuva: { emoji: "⚖️", alt: "järki – kyky ajatella loogisesti" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; astevaihtelu k:j (järki ↔ järje-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "järjen", merkitys: "of reason" },
      { sija: "partitiivi (yks.)", muoto: "järkeä", merkitys: "reason (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "järkiä", merkitys: "reasons/minds (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa rk → rj: genetiivi järjen, adessiivi järjellä. Vahva aste rk säilyy partitiivissa järkeä. Yleensä yksikössä. 'Siinä ei ole järkeä' = that makes no sense. 'Terve järki' = common sense.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "järki" },
          { label: "Partitiivi", form: "järkeä" },
          { label: "Genetiivi", form: "järjen" },
          { label: "Inessiivi", form: "järjessä" },
          { label: "Elatiivi", form: "järjestä" },
          { label: "Illatiivi", form: "järkeen" },
          { label: "Adessiivi", form: "järjellä" },
          { label: "Ablatiivi", form: "järjeltä" },
          { label: "Allatiivi", form: "järjelle" },
          { label: "Essiivi", form: "järkenä" },
          { label: "Translatiivi", form: "järjeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "järjet" },
          { label: "Partitiivi", form: "järkiä" },
          { label: "Genetiivi", form: "järkien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "järkevä",
      en: "sensible, reasonable",
      taso: "B1",
      esim: { fi: "Se oli järkevä päätös.", en: "It was a sensible decision." },
    },
    {
      fi: "järjetön",
      en: "senseless, absurd",
      taso: "B2",
      esim: { fi: "Hinta on aivan järjetön.", en: "The price is utterly absurd." },
    },
    {
      fi: "arkijärki",
      en: "common sense",
      taso: "B2",
      esim: { fi: "Käytä arkijärkeä.", en: "Use common sense." },
    },
  ],
  synonyymit: [
    { fi: "äly", en: "intellect, intelligence" },
    { fi: "ymmärrys", en: "understanding" },
  ],
  esimerkit: {
    A2: { fi: "Käytä järkeä!", en: "Use your head!" },
    B1: { fi: "Siinä ei ole mitään järkeä.", en: "That makes no sense at all." },
    B2: {
      fi: "Kun tunteet kuohuvat, on vaikea käyttää järkeä.",
      en: "When emotions run high, it's hard to use reason.",
    },
  },
  updatedAt: "2026-06-06",
};

export default järki;
