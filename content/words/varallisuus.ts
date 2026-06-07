import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem varallisuude- ~ varallisuute-.
// Genitive varallisuuden, partitive varallisuutta, partitive pl varallisuuksia.
const varallisuus: Word = {
  fi: "varallisuus",
  slug: "varallisuus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B2",
  en: "wealth, assets",
  selitys:
    "Ihmisen tai kotitalouden omaisuuden ja varojen kokonaisuus: 'kasvattaa varallisuutta'. Tyyppi 40/kalleus, astevaihtelu t:d (varallisuus → varallisuuden). Sanasta varallinen / vara. Vastakohta köyhyys. Vrt. vara, omaisuus, köyhyys.",
  kuva: { emoji: "💎", alt: "varallisuus – ihmisen tai kotitalouden omaisuuden ja varojen kokonaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (varallisuute- ~ varallisuude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "varallisuuden", merkitys: "of the wealth" },
      { sija: "partitiivi (yks.)", muoto: "varallisuutta", merkitys: "wealth (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "varallisuuksia", merkitys: "wealth (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40/kalleus (-uus): genetiivi -uuden (t:d), partitiivi -uutta, partitiivin monikko -uuksia. Ominaisuudennimi sanasta vara. Yleensä yksikössä. Vastakohta köyhyys. Vrt. omaisuus, vara.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "varallisuus" },
          { label: "Partitiivi", form: "varallisuutta" },
          { label: "Genetiivi", form: "varallisuuden" },
          { label: "Inessiivi", form: "varallisuudessa" },
          { label: "Elatiivi", form: "varallisuudesta" },
          { label: "Illatiivi", form: "varallisuuteen" },
          { label: "Adessiivi", form: "varallisuudella" },
          { label: "Ablatiivi", form: "varallisuudelta" },
          { label: "Allatiivi", form: "varallisuudelle" },
          { label: "Essiivi", form: "varallisuutena" },
          { label: "Translatiivi", form: "varallisuudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "varallisuudet" },
          { label: "Partitiivi", form: "varallisuuksia" },
          { label: "Genetiivi", form: "varallisuuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "omaisuus",
      en: "property, possessions",
      taso: "B2",
      esim: { fi: "Hän peri suuren omaisuuden.", en: "He inherited a large fortune." },
    },
    {
      fi: "varakas",
      en: "wealthy, well-off",
      taso: "B2",
      esim: { fi: "He ovat varakkaita.", en: "They are wealthy." },
    },
  ],
  synonyymit: [
    { fi: "vauraus", en: "affluence, prosperity" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on suuri varallisuus.", en: "He has great wealth." },
    B1: { fi: "Varallisuus jakautuu epätasaisesti.", en: "Wealth is distributed unevenly." },
    B2: {
      fi: "Suuri osa väestön varallisuudesta on kiinni asunnoissa.",
      en: "A large part of the population's wealth is tied up in housing.",
    },
  },
  updatedAt: "2026-06-07",
};

export default varallisuus;
