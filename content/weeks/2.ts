import type { Week } from "@/lib/content-types";

// Week 2 — Reaktivointi phase. Themes cover movement/places, work/study, body/health,
// clothes/colors, weather/nature and feelings. Days are populated in verified batches.
// The reading text uses only words that already exist in content/words.
const week2: Week = {
  week: 2,
  phase: "Reaktivointi",
  theme: "Liikkuminen, arki ja kuvailu",
  days: [
    {
      day: 1,
      theme: "Liikkuminen ja paikat",
      wordSlugs: [
        "mennä",
        "tulla",
        "kävellä",
        "ajaa",
        "lähteä",
        "kaupunki",
        "katu",
        "tie",
        "auto",
        "juna",
        "asema",
        "matka",
      ],
    },
    {
      day: 2,
      theme: "Työ ja opiskelu",
      wordSlugs: [
        "työ",
        "opiskella",
        "oppia",
        "lukea",
        "kirjoittaa",
        "koulu",
        "opettaja",
        "oppilas",
        "kirja",
        "kysymys",
        "vastaus",
        "tietää",
      ],
    },
    {
      day: 3,
      theme: "Keho ja terveys",
      wordSlugs: [
        "pää",
        "käsi",
        "silmä",
        "jalka",
        "suu",
        "korva",
        "sydän",
        "terve",
        "sairas",
        "kipu",
        "lääkäri",
        "terveys",
      ],
    },
    {
      day: 4,
      theme: "Vaatteet ja värit",
      wordSlugs: [
        "vaate",
        "paita",
        "housut",
        "kenkä",
        "takki",
        "väri",
        "valkoinen",
        "musta",
        "punainen",
        "sininen",
        "keltainen",
        "vihreä",
      ],
    },
    {
      day: 5,
      theme: "Sää ja luonto",
      wordSlugs: [
        "sää",
        "ilma",
        "sade",
        "lumi",
        "aurinko",
        "tuuli",
        "taivas",
        "metsä",
        "järvi",
        "meri",
        "puu",
        "kylmä",
      ],
    },
    {
      day: 6,
      theme: "Tunteet ja kuvailu",
      wordSlugs: [
        "iloinen",
        "surullinen",
        "väsynyt",
        "vihainen",
        "iso",
        "pieni",
        "kaunis",
        "ruma",
        "uusi",
        "helppo",
        "vaikea",
        "tärkeä",
      ],
    },
  ],
  teksti: {
    title: "Matka kaupunkiin ja metsään",
    level: "A2",
    topic: "Tavallinen päivä: matka kaupunkiin töihin ja illalla luontoon.",
    paragraph:
      "Aamulla minä [[lähden]] kotoa aikaisin. " +
      "Ensin [[kävelen]] [[asemalle]], ja sitten [[juna]] vie minut [[kaupunkiin]]. " +
      "[[Sää]] on kaunis: [[aurinko]] paistaa, vaikka [[ilma]] on vielä [[kylmä]]. " +
      "[[Työ]] on joskus [[vaikeaa]], mutta se on minulle [[tärkeää]]. " +
      "Illalla olen [[väsynyt]], joten [[menen]] [[metsään]] kävelylle [[meren]] rantaan. " +
      "[[Puut]] ovat [[vihreitä]] ja maisema on [[kaunis]]. " +
      "Kun palaan kotiin, olen taas [[iloinen]].",
    translation:
      "In the morning I leave home early. " +
      "First I walk to the station, and then the train takes me to the city. " +
      "The weather is beautiful: the sun shines, even though the air is still cold. " +
      "Work is sometimes difficult, but it is important to me. " +
      "In the evening I'm tired, so I go to the forest for a walk by the sea. " +
      "The trees are green and the scenery is beautiful. " +
      "When I get home, I'm happy again.",
    targets: [
      "lähteä",
      "kävellä",
      "asema",
      "juna",
      "kaupunki",
      "sää",
      "aurinko",
      "ilma",
      "kylmä",
      "työ",
      "vaikea",
      "tärkeä",
      "väsynyt",
      "mennä",
      "metsä",
      "meri",
      "puu",
      "vihreä",
      "kaunis",
      "iloinen",
    ],
  },
};

export default week2;
