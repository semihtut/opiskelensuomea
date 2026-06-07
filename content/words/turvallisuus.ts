import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem turvallisuude- ~ turvallisuute-.
// Genitive turvallisuuden, partitive turvallisuutta, partitive pl turvallisuuksia.
const turvallisuus: Word = {
  fi: "turvallisuus",
  slug: "turvallisuus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "safety, security",
  selitys:
    "Tila tai tunne siitä, että ei ole vaaraa tai uhkaa: 'lasten turvallisuus', 'kansallinen turvallisuus'. Tyyppi 40/kalleus, astevaihtelu t:d (turvallisuus → turvallisuuden). Adjektiivista turvallinen. Vrt. turva, turvallinen, tietoturva.",
  kuva: { emoji: "🛡️", alt: "turvallisuus – tila tai tunne siitä että ei ole vaaraa tai uhkaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (turvallisuute- ~ turvallisuude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "turvallisuuden", merkitys: "of safety" },
      { sija: "partitiivi (yks.)", muoto: "turvallisuutta", merkitys: "safety (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "turvallisuuksia", merkitys: "securities (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40/kalleus (-uus): genetiivi -uuden (t:d), partitiivi -uutta, partitiivin monikko -uuksia. Ominaisuudennimi adjektiivista turvallinen. Yleensä yksikössä. Työturvallisuus, kyberturvallisuus. Vrt. turva, turvallinen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "turvallisuus" },
          { label: "Partitiivi", form: "turvallisuutta" },
          { label: "Genetiivi", form: "turvallisuuden" },
          { label: "Inessiivi", form: "turvallisuudessa" },
          { label: "Elatiivi", form: "turvallisuudesta" },
          { label: "Illatiivi", form: "turvallisuuteen" },
          { label: "Adessiivi", form: "turvallisuudella" },
          { label: "Ablatiivi", form: "turvallisuudelta" },
          { label: "Allatiivi", form: "turvallisuudelle" },
          { label: "Essiivi", form: "turvallisuutena" },
          { label: "Translatiivi", form: "turvallisuudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "turvallisuudet" },
          { label: "Partitiivi", form: "turvallisuuksia" },
          { label: "Genetiivi", form: "turvallisuuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "turvallinen",
      en: "safe, secure",
      taso: "A2",
      esim: { fi: "Tämä alue on turvallinen.", en: "This area is safe." },
    },
    {
      fi: "työturvallisuus",
      en: "occupational safety",
      taso: "B2",
      esim: { fi: "Työturvallisuus on etusijalla.", en: "Occupational safety comes first." },
    },
  ],
  synonyymit: [
    { fi: "turva", en: "safety, protection" },
  ],
  esimerkit: {
    A2: { fi: "Turvallisuus on tärkeää.", en: "Safety is important." },
    B1: { fi: "Liikenneturvallisuus on parantunut.", en: "Traffic safety has improved." },
    B2: {
      fi: "Yhteiskunnan turvallisuus rakentuu luottamukselle ja toimiville palveluille.",
      en: "A society's security is built on trust and functioning services.",
    },
  },
  updatedAt: "2026-06-07",
};

export default turvallisuus;
