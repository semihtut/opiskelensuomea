import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem oikeute- ~ oikeude-.
// Genitive oikeuden, partitive oikeutta, illative oikeuteen, partitive pl oikeuksia.
const oikeus: Word = {
  fi: "oikeus",
  slug: "oikeus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "right, entitlement; justice; court",
  selitys:
    "Lupa tai oikeutus johonkin, oikeudenmukaisuus tai tuomioistuin: 'oikeus äänestää' / 'oikeus ja kohtuus'. Tyyppi 40, astevaihtelu t:d (oikeute- → oikeude-). Johdettu sanasta oikea. Vrt. oikeudenmukainen (just).",
  kuva: { emoji: "⚖️", alt: "oikeus – oikeutus, oikeudenmukaisuus tai tuomioistuin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (oikeute- ↔ oikeude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "oikeuden", merkitys: "of the right" },
      { sija: "partitiivi (yks.)", muoto: "oikeutta", merkitys: "right (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "oikeuksia", merkitys: "rights (partitive pl.)" },
    ],
    huom:
      "Genetiivissä -ude- (oikeuden), partitiivissa -utta (oikeutta), monikossa -uksi- (oikeuksia, oikeuksien). Oikeus johonkin: illatiivi. Monikko 'oikeudet' = rights. 'Oikeus' voi tarkoittaa myös tuomioistuinta.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "oikeus" },
          { label: "Partitiivi", form: "oikeutta" },
          { label: "Genetiivi", form: "oikeuden" },
          { label: "Inessiivi", form: "oikeudessa" },
          { label: "Elatiivi", form: "oikeudesta" },
          { label: "Illatiivi", form: "oikeuteen" },
          { label: "Adessiivi", form: "oikeudella" },
          { label: "Ablatiivi", form: "oikeudelta" },
          { label: "Allatiivi", form: "oikeudelle" },
          { label: "Essiivi", form: "oikeutena" },
          { label: "Translatiivi", form: "oikeudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "oikeudet" },
          { label: "Partitiivi", form: "oikeuksia" },
          { label: "Genetiivi", form: "oikeuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "oikeudenmukainen",
      en: "just, fair",
      taso: "B2",
      esim: { fi: "Tuomio oli oikeudenmukainen.", en: "The verdict was just." },
    },
    {
      fi: "ihmisoikeus",
      en: "human right",
      taso: "B2",
      esim: { fi: "Koulutus on ihmisoikeus.", en: "Education is a human right." },
    },
    {
      fi: "oikeuttaa",
      en: "to entitle, justify",
      taso: "B2",
      esim: { fi: "Lippu oikeuttaa yhteen matkaan.", en: "The ticket entitles you to one trip." },
    },
  ],
  synonyymit: [
    { fi: "lupa", en: "permission, licence" },
    { fi: "oikeudenmukaisuus", en: "justice, fairness" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on oikeus tietää.", en: "I have the right to know." },
    B1: { fi: "Jokaisella on oikeus lepoon.", en: "Everyone has the right to rest." },
    B2: {
      fi: "Asia ratkaistiin lopulta oikeudessa.",
      en: "The matter was finally settled in court.",
    },
  },
  updatedAt: "2026-06-06",
};

export default oikeus;
