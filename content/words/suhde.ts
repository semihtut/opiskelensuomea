import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, t:d gradation, stem suhtee- (NOM weak -de).
// Genitive suhteen, partitive suhdetta, illative suhteeseen, partitive pl suhteita.
const suhde: Word = {
  fi: "suhde",
  slug: "suhde",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "relationship, relation; ratio",
  selitys:
    "Kahden asian tai ihmisen välinen yhteys: 'läheinen suhde', 'kahden luvun suhde'. Tyyppi 48/hame, astevaihtelu t:d (nominatiivi suhde heikko, vartalo suhtee-). Vrt. suhtautua, ihmissuhde, suhteellinen.",
  kuva: { alt: "suhde – kahden asian tai ihmisen välinen yhteys" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu t:d (vartalo suhtee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "suhteen", merkitys: "of the relationship" },
      { sija: "partitiivi (yks.)", muoto: "suhdetta", merkitys: "relationship (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "suhteita", merkitys: "relationships (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48: nominatiivi suhde (heikko -de), vartalo suhtee- vahvistuu (suhteen, suhteeseen), partitiivi suhdetta. Merkitykset: ihmissuhde, lukusuhde (ratio). 'Olla suhteessa johonkin' = to be in relation to. Vrt. ihmissuhde.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "suhde" },
          { label: "Partitiivi", form: "suhdetta" },
          { label: "Genetiivi", form: "suhteen" },
          { label: "Inessiivi", form: "suhteessa" },
          { label: "Elatiivi", form: "suhteesta" },
          { label: "Illatiivi", form: "suhteeseen" },
          { label: "Adessiivi", form: "suhteella" },
          { label: "Ablatiivi", form: "suhteelta" },
          { label: "Allatiivi", form: "suhteelle" },
          { label: "Essiivi", form: "suhteena" },
          { label: "Translatiivi", form: "suhteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "suhteet" },
          { label: "Partitiivi", form: "suhteita" },
          { label: "Genetiivi", form: "suhteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ihmissuhde",
      en: "human/interpersonal relationship",
      taso: "B1",
      esim: { fi: "Ihmissuhteet ovat tärkeitä.", en: "Relationships are important." },
    },
    {
      fi: "suhtautua",
      en: "to relate to, take an attitude",
      taso: "B2",
      esim: { fi: "Miten suhtaudut muutokseen?", en: "How do you feel about the change?" },
    },
    {
      fi: "suhteellinen",
      en: "relative, proportional",
      taso: "B2",
      esim: { fi: "Kaikki on suhteellista.", en: "Everything is relative." },
    },
  ],
  synonyymit: [
    { fi: "yhteys", en: "connection" },
    { fi: "side", en: "bond, tie" },
  ],
  esimerkit: {
    A2: { fi: "Meillä on hyvä suhde.", en: "We have a good relationship." },
    B1: { fi: "Heidän suhteensa parani vähitellen.", en: "Their relationship improved gradually." },
    B2: {
      fi: "Hintojen suhde laatuun on tässä tuotteessa erinomainen.",
      en: "The ratio of price to quality is excellent in this product.",
    },
  },
  updatedAt: "2026-06-07",
};

export default suhde;
