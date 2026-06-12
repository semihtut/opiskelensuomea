import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem velvollisuude-.
// Genitive velvollisuuden, partitive velvollisuutta, partitive pl velvollisuuksia.
const velvollisuus: Word = {
  fi: "velvollisuus",
  slug: "velvollisuus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "duty, obligation",
  selitys:
    "Asia, joka on tehtävä tai johon on velvoitettu: 'kansalaisen velvollisuudet'. Tyyppi 40/kalleus, astevaihtelu t:d (velvollisuus → velvollisuuden). Johdettu sanasta velvollinen. Vastakohta oikeus. Vrt. velvoittaa, vastuu.",
  kuva: { alt: "velvollisuus – asia joka on tehtävä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (vartalo velvollisuude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "velvollisuuden", merkitys: "of the duty" },
      { sija: "partitiivi (yks.)", muoto: "velvollisuutta", merkitys: "duty (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "velvollisuuksia", merkitys: "duties (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40 (-uus): genetiivi -uden, partitiivi -utta, partitiivin monikko -uksia. Johdettu sanasta velvollinen. Vastakohta oikeus. 'Oikeudet ja velvollisuudet' = rights and duties. Vrt. velvoittaa = to oblige.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "velvollisuus" },
          { label: "Partitiivi", form: "velvollisuutta" },
          { label: "Genetiivi", form: "velvollisuuden" },
          { label: "Inessiivi", form: "velvollisuudessa" },
          { label: "Elatiivi", form: "velvollisuudesta" },
          { label: "Illatiivi", form: "velvollisuuteen" },
          { label: "Adessiivi", form: "velvollisuudella" },
          { label: "Ablatiivi", form: "velvollisuudelta" },
          { label: "Allatiivi", form: "velvollisuudelle" },
          { label: "Essiivi", form: "velvollisuutena" },
          { label: "Translatiivi", form: "velvollisuudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "velvollisuudet" },
          { label: "Partitiivi", form: "velvollisuuksia" },
          { label: "Genetiivi", form: "velvollisuuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "velvollinen",
      en: "obliged, liable",
      taso: "B2",
      esim: { fi: "Olet velvollinen ilmoittamaan tulosi.", en: "You are obliged to report your income." },
    },
    {
      fi: "velvoittaa",
      en: "to oblige, require",
      taso: "B2",
      esim: { fi: "Laki velvoittaa kaikkia.", en: "The law obliges everyone." },
    },
  ],
  synonyymit: [
    { fi: "vastuu", en: "responsibility" },
    { fi: "velvoite", en: "obligation" },
  ],
  esimerkit: {
    A2: { fi: "Se on minun velvollisuuteni.", en: "That is my duty." },
    B1: { fi: "Jokaisella on oikeuksia ja velvollisuuksia.", en: "Everyone has rights and duties." },
    B2: {
      fi: "Äänestäminen ei ole pakko, mutta moni kokee sen kansalaisvelvollisuudeksi.",
      en: "Voting is not compulsory, but many see it as a civic duty.",
    },
  },
  updatedAt: "2026-06-07",
};

export default velvollisuus;
