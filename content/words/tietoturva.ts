import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (turva): Kotus type 10/koira, no gradation, stem tietoturva-.
// Genitive tietoturvan, partitive tietoturvaa, partitive pl tietoturvia.
const tietoturva: Word = {
  fi: "tietoturva",
  slug: "tietoturva",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B2",
  en: "information security, cybersecurity",
  selitys:
    "Tietojen suojaaminen luvattomalta käytöltä: 'huolehtia tietoturvasta'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko tietoturvia (harvinainen, yleensä yksikössä). Yhdyssana tieto + turva. Vrt. turva, tieto, salasana.",
  kuva: { alt: "tietoturva – tietojen suojaaminen luvattomalta käytöltä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo tietoturva-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tietoturvan", merkitys: "of information security" },
      { sija: "partitiivi (yks.)", muoto: "tietoturvaa", merkitys: "information security (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "tietoturvaan", merkitys: "into information security" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Yhdyssana tieto + turva. Yleensä yksikössä. 'Tietoturva' kattaa salasanat, suojaukset ja yksityisyyden. Vrt. turva = safety, salasana = password.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tietoturva" },
          { label: "Partitiivi", form: "tietoturvaa" },
          { label: "Genetiivi", form: "tietoturvan" },
          { label: "Inessiivi", form: "tietoturvassa" },
          { label: "Elatiivi", form: "tietoturvasta" },
          { label: "Illatiivi", form: "tietoturvaan" },
          { label: "Adessiivi", form: "tietoturvalla" },
          { label: "Ablatiivi", form: "tietoturvalta" },
          { label: "Allatiivi", form: "tietoturvalle" },
          { label: "Essiivi", form: "tietoturvana" },
          { label: "Translatiivi", form: "tietoturvaksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "turva",
      en: "safety, security",
      taso: "B2",
      esim: { fi: "Olen turvassa.", en: "I am safe." },
    },
    {
      fi: "tietosuoja",
      en: "data protection, privacy",
      taso: "B2",
      esim: { fi: "Tietosuoja on lakisääteistä.", en: "Data protection is required by law." },
    },
  ],
  synonyymit: [
    { fi: "kyberturvallisuus", en: "cybersecurity" },
  ],
  esimerkit: {
    A2: { fi: "Tietoturva on tärkeää.", en: "Information security is important." },
    B1: { fi: "Vahva salasana parantaa tietoturvaa.", en: "A strong password improves security." },
    B2: {
      fi: "Yritys panostaa tietoturvaan suojellakseen asiakkaidensa tietoja.",
      en: "The company invests in information security to protect its customers' data.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tietoturva;
