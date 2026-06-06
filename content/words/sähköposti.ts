import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (posti): Kotus type 5/risti, no gradation, stem sähköposti-.
// Genitive sähköpostin, partitive sähköpostia, illative sähköpostiin, partitive pl sähköposteja.
const sähköposti: Word = {
  fi: "sähköposti",
  slug: "sähköposti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "email",
  selitys:
    "Sähköinen viesti tai sen järjestelmä: 'lähettää sähköposti'. Yhdyssana sähkö + posti. Tyyppi 5, ei astevaihtelua (st säilyy). Partitiivin monikko sähköposteja. Arkikielessä myös meili. Vrt. sähköpostiosoite.",
  kuva: { emoji: "📧", alt: "sähköposti – sähköinen viesti" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sähköpostin", merkitys: "of the email" },
      { sija: "partitiivi (yks.)", muoto: "sähköpostia", merkitys: "email (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sähköposteja", merkitys: "emails (partitive pl.)" },
    ],
    huom:
      "Tyyppi 5, ei astevaihtelua (st säilyy). Partitiivin monikko sähköposteja (e-vartalo). Arkikielessä lyhennetään 'meili'. Vrt. sähköpostiosoite = email address, posti = mail.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sähköposti" },
          { label: "Partitiivi", form: "sähköpostia" },
          { label: "Genetiivi", form: "sähköpostin" },
          { label: "Inessiivi", form: "sähköpostissa" },
          { label: "Elatiivi", form: "sähköpostista" },
          { label: "Illatiivi", form: "sähköpostiin" },
          { label: "Adessiivi", form: "sähköpostilla" },
          { label: "Ablatiivi", form: "sähköpostilta" },
          { label: "Allatiivi", form: "sähköpostille" },
          { label: "Essiivi", form: "sähköpostina" },
          { label: "Translatiivi", form: "sähköpostiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sähköpostit" },
          { label: "Partitiivi", form: "sähköposteja" },
          { label: "Genetiivi", form: "sähköpostien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sähköpostiosoite",
      en: "email address",
      taso: "B1",
      esim: { fi: "Mikä on sähköpostiosoitteesi?", en: "What is your email address?" },
    },
    {
      fi: "meili",
      en: "email (colloquial)",
      taso: "A2",
      esim: { fi: "Laitan sinulle meiliä.", en: "I'll send you an email." },
    },
    {
      fi: "roskaposti",
      en: "spam, junk mail",
      taso: "B2",
      esim: { fi: "Poistin roskapostit.", en: "I deleted the spam." },
    },
  ],
  synonyymit: [
    { fi: "meili", en: "email (colloquial)" },
    { fi: "sähköinen viesti", en: "electronic message" },
  ],
  esimerkit: {
    A2: { fi: "Sain sinulta sähköpostin.", en: "I got an email from you." },
    B1: { fi: "Vastaan sähköpostiin huomenna.", en: "I'll answer the email tomorrow." },
    B2: {
      fi: "Lähetin asiakkaalle sähköpostin, jossa selitin tilanteen tarkasti.",
      en: "I sent the customer an email in which I explained the situation precisely.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sähköposti;
