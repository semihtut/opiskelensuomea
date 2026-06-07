import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation (st cluster), stem muodostu-.
// Present hän muodostuu; imperfect hän muodostui; NUT muodostunut. Intransitive, governs elative.
const muodostua: Word = {
  fi: "muodostua",
  slug: "muodostua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to be formed, consist of, come to be",
  selitys:
    "Syntyä tai koostua osista: 'ryhmä muodostuu kymmenestä jäsenestä'. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Intransitiivinen (transit. muodostaa). Hallitsee elatiivia ('muodostua jostakin'). Vrt. muodostaa, muoto, syntyä.",
  kuva: { emoji: "🧩", alt: "muodostua – syntyä tai koostua osista" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo muodostu-",
    muodot: [
      { sija: "preesens (se)", muoto: "muodostuu", merkitys: "(it) is formed" },
      { sija: "imperfekti (se)", muoto: "muodostui", merkitys: "(it) was formed" },
      { sija: "NUT-partisiippi", muoto: "muodostunut", merkitys: "(has) been formed" },
    ],
    huom:
      "Ei astevaihtelua (st säilyy). Intransitiivinen; transitiivinen pari on muodostaa. Hallitsee elatiivia: 'muodostua jostakin' = to consist of sth. Useimmiten 3. persoonassa. Vrt. koostua (synonyymi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "se / asia", form: "muodostuu" },
          { label: "ne / asiat", form: "muodostuvat" },
          { label: "kielto", form: "ei muodostu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se / asia", form: "muodostui" },
          { label: "ne / asiat", form: "muodostuivat" },
          { label: "kielto", form: "ei muodostunut" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se / asia", form: "on muodostunut" },
          { label: "ne / asiat", form: "ovat muodostuneet" },
        ],
      },
      {
        title: "Persoonamuodot (harv.)",
        rows: [
          { label: "minä", form: "muodostun" },
          { label: "imperfekti (minä)", form: "muodostuin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "muodostaa",
      en: "to form (sth)",
      taso: "B1",
      esim: { fi: "He muodostivat ringin.", en: "They formed a circle." },
    },
    {
      fi: "muodostuminen",
      en: "formation",
      taso: "B2",
      esim: { fi: "Jään muodostuminen kesti yön.", en: "The formation of ice took the night." },
    },
  ],
  synonyymit: [
    { fi: "koostua", en: "to consist of" },
    { fi: "syntyä", en: "to be born, come into being" },
  ],
  esimerkit: {
    A2: { fi: "Sana muodostuu kahdesta osasta.", en: "The word consists of two parts." },
    B1: { fi: "Tiimi muodostui eri alojen osaajista.", en: "The team was formed from experts of different fields." },
    B2: {
      fi: "Lopputuloksesta muodostui paljon parempi kuin kukaan oli odottanut.",
      en: "The end result turned out much better than anyone had expected.",
    },
  },
  updatedAt: "2026-06-07",
};

export default muodostua;
