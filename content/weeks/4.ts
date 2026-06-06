import type { Week } from "@/lib/content-types";

// Week 4 — last week of the Reaktivointi phase. The "glue" of the language:
// everyday action verbs, life & relationships, place/direction words, conjunctions,
// and time/degree adverbs. The reading text uses only words that already exist.
const week4: Week = {
  week: 4,
  phase: "Reaktivointi",
  theme: "Arjen verbit, sidesanat ja adverbit",
  days: [
    {
      day: 1,
      theme: "Yleiset verbit III: arjen toiminnot",
      wordSlugs: [
        "istua",
        "seisoa",
        "nousta",
        "avata",
        "sulkea",
        "laittaa",
        "pestä",
        "odottaa",
        "yrittää",
        "osata",
        "korjata",
        "käyttää",
      ],
    },
    {
      day: 2,
      theme: "Elämä ja ihmissuhteet",
      wordSlugs: [
        "elää",
        "kuolla",
        "syntyä",
        "kasvaa",
        "rakastaa",
        "tavata",
        "tuntea",
        "muuttaa",
        "naapuri",
        "suku",
        "mukava",
        "yksin",
      ],
    },
    {
      day: 3,
      theme: "Sijainti ja suunta",
      wordSlugs: [
        "edessä",
        "takana",
        "vieressä",
        "alla",
        "päällä",
        "välissä",
        "lähellä",
        "kaukana",
        "oikealla",
        "vasemmalla",
        "ylös",
        "alas",
      ],
    },
    {
      day: 4,
      theme: "Konjunktiot ja sidesanat",
      wordSlugs: [
        "mutta",
        "koska",
        "että",
        "jos",
        "kun",
        "vaikka",
        "tai",
        "vai",
        "sekä",
        "joten",
        "kuitenkin",
        "siksi",
      ],
    },
    {
      day: 5,
      theme: "Aika ja toistuvuus",
      wordSlugs: [
        "aina",
        "usein",
        "joskus",
        "harvoin",
        "jo",
        "vielä",
        "heti",
        "pian",
        "taas",
        "yleensä",
        "ennen",
        "sitten",
      ],
    },
    {
      day: 6,
      theme: "Määrä ja aste",
      wordSlugs: [
        "hyvin",
        "todella",
        "melko",
        "liian",
        "erittäin",
        "vain",
        "myös",
        "ehkä",
        "varmasti",
        "tietysti",
        "juuri",
        "vasta",
      ],
    },
  ],
  teksti: {
    title: "Tavallinen päivä",
    level: "A2",
    topic: "Anna kertoo tavallisesta arkipäivästään: aamusta iltaan, pienin sanoin sidottuna.",
    paragraph:
      "[[Nousen]] [[aina]] aikaisin, [[koska]] pidän hiljaisesta aamusta. " +
      "Ensin [[avaan]] ikkunan ja [[laitan]] kahvia, [[mutta]] juon sen [[usein]] [[liian]] nopeasti. " +
      "[[Naapurini]] asuu [[vieressä]], ja [[tapaamme]] [[joskus]], [[kun]] molemmat lähdemme töihin. " +
      "Bussipysäkki on [[lähellä]], [[mutta]] [[jos]] sää on hyvä, kävelen mielelläni. " +
      "Töissä [[käytän]] tietokonetta koko päivän, [[joten]] illalla olen [[jo]] [[melko]] väsynyt. " +
      "Silloin [[istun]] sohvalle ja luen kirjaa, [[vaikka]] [[ehkä]] katson [[myös]] vähän televisiota. " +
      "[[Pian]] menen nukkumaan, [[koska]] seuraava päivä alkaa [[taas]] aikaisin — [[tietysti]]!",
    translation:
      "I always get up early, because I like the quiet morning. " +
      "First I open the window and make coffee, but I often drink it too quickly. " +
      "My neighbour lives next door, and we sometimes meet when we both leave for work. " +
      "The bus stop is near, but if the weather is good, I gladly walk. " +
      "At work I use the computer all day, so in the evening I'm already quite tired. " +
      "Then I sit down on the sofa and read a book, although maybe I also watch a little television. " +
      "Soon I go to sleep, because the next day starts early again — of course!",
    targets: [
      "nousta",
      "aina",
      "koska",
      "avata",
      "laittaa",
      "mutta",
      "usein",
      "liian",
      "naapuri",
      "vieressä",
      "tavata",
      "joskus",
      "kun",
      "lähellä",
      "jos",
      "käyttää",
      "joten",
      "jo",
      "melko",
      "istua",
      "vaikka",
      "ehkä",
      "myös",
      "pian",
      "taas",
      "tietysti",
    ],
  },
};

export default week4;
