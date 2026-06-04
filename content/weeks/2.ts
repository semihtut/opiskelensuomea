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
      wordSlugs: [],
    },
    {
      day: 4,
      theme: "Vaatteet ja värit",
      wordSlugs: [],
    },
    {
      day: 5,
      theme: "Sää ja luonto",
      wordSlugs: [],
    },
    {
      day: 6,
      theme: "Tunteet ja kuvailu",
      wordSlugs: [],
    },
  ],
  teksti: {
    title: "Matka kaupunkiin",
    level: "A2",
    topic: "Tavallinen aamumatka kotoa keskustaan eri kulkuvälineillä.",
    paragraph:
      "Aamulla minä [[lähden]] kotoa aikaisin. " +
      "Ensin [[kävelen]] [[asemalle]] pitkin hiljaista [[katua]]. " +
      "Sitten [[tulee]] [[juna]], ja minä [[menen]] sisään. " +
      "[[Matka]] keskustaan kestää vain vartin. " +
      "[[Kaupunki]] on jo täynnä ihmisiä ja [[autoja]]. " +
      "Joskus [[ajan]] itse, mutta [[tie]] on usein ruuhkainen.",
    translation:
      "In the morning I leave home early. " +
      "First I walk to the station along the quiet street. " +
      "Then the train comes, and I go inside. " +
      "The trip to the center takes only fifteen minutes. " +
      "The city is already full of people and cars. " +
      "Sometimes I drive myself, but the road is often congested.",
    targets: [
      "lähteä",
      "kävellä",
      "asema",
      "katu",
      "tulla",
      "juna",
      "mennä",
      "matka",
      "kaupunki",
      "auto",
      "ajaa",
      "tie",
    ],
  },
};

export default week2;
