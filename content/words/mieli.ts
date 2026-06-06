import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni, no gradation, stem miele- ~ miel-.
// Genitive mielen, partitive mieltä, illative mieleen, partitive pl mieliä.
const mieli: Word = {
  fi: "mieli",
  slug: "mieli",
  pos: "substantiivi (tyyppi 26/pieni)",
  posClass: "substantiivi",
  level: "B1",
  en: "mind; mood; mind to do something",
  selitys:
    "Ihmisen ajatusten ja tunteiden kokonaisuus, tai halu tehdä jotakin: 'tulla mieleen' / 'hyvällä mielellä'. Tyyppi 26, ei astevaihtelua; partitiivi mieltä. Vrt. mielipide (opinion), mieliala (mood).",
  kuva: { emoji: "💭", alt: "mieli – ajatusten ja tunteiden kokonaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 26/pieni; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "mielen", merkitys: "of the mind" },
      { sija: "partitiivi (yks.)", muoto: "mieltä", merkitys: "mind (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "mieliä", merkitys: "minds (partitive pl.)" },
    ],
    huom:
      "Tyyppi 26: partitiivi mieltä (-tä). Monissa kiteytyneissä ilmauksissa: 'tulla mieleen' = to come to mind, 'olla hyvällä mielellä' = to be in a good mood, 'tehdä mieli' = to feel like (doing).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "mieli" },
          { label: "Partitiivi", form: "mieltä" },
          { label: "Genetiivi", form: "mielen" },
          { label: "Inessiivi", form: "mielessä" },
          { label: "Elatiivi", form: "mielestä" },
          { label: "Illatiivi", form: "mieleen" },
          { label: "Adessiivi", form: "mielellä" },
          { label: "Ablatiivi", form: "mieleltä" },
          { label: "Allatiivi", form: "mielelle" },
          { label: "Essiivi", form: "mielenä" },
          { label: "Translatiivi", form: "mieleksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "mielet" },
          { label: "Partitiivi", form: "mieliä" },
          { label: "Genetiivi", form: "mielien / mielten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mielipide",
      en: "opinion",
      taso: "B1",
      esim: { fi: "Mikä on sinun mielipiteesi?", en: "What is your opinion?" },
    },
    {
      fi: "mieliala",
      en: "mood",
      taso: "B2",
      esim: { fi: "Hänen mielialansa parani.", en: "His mood improved." },
    },
    {
      fi: "mielenkiintoinen",
      en: "interesting",
      taso: "B1",
      esim: { fi: "Se oli mielenkiintoinen luento.", en: "It was an interesting lecture." },
    },
  ],
  synonyymit: [
    { fi: "mieliala", en: "mood, frame of mind" },
    { fi: "halu", en: "desire, inclination" },
  ],
  esimerkit: {
    A2: { fi: "Tulin hyvälle mielelle.", en: "I got into a good mood." },
    B1: { fi: "Minulle tuli mieleen hyvä idea.", en: "A good idea came to my mind." },
    B2: {
      fi: "Pidä mielessä, että jokainen tekee joskus virheitä.",
      en: "Keep in mind that everyone makes mistakes sometimes.",
    },
  },
  updatedAt: "2026-06-06",
};

export default mieli;
