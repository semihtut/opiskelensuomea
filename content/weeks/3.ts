import type { Week } from "@/lib/content-types";

// Week 3 — Reaktivointi phase. Pronouns/question words, common verbs, city services,
// household objects and size/quantity. Days are populated in verified batches.
// The reading text uses only words that already exist in content/words.
const week3: Week = {
  week: 3,
  phase: "Reaktivointi",
  theme: "Pronominit, yleiset verbit ja arki",
  days: [
    {
      day: 1,
      theme: "Pronominit ja kysymyssanat",
      wordSlugs: [
        "minä",
        "sinä",
        "hän",
        "me",
        "te",
        "he",
        "tämä",
        "tuo",
        "se",
        "kuka",
        "mikä",
        "milloin",
      ],
    },
    {
      day: 2,
      theme: "Yleiset verbit I: havainnot ja viestintä",
      wordSlugs: [
        "sanoa",
        "puhua",
        "kuulla",
        "kuunnella",
        "nähdä",
        "katsoa",
        "antaa",
        "ottaa",
        "pitää",
        "soittaa",
        "näyttää",
        "kertoa",
      ],
    },
    {
      day: 3,
      theme: "Yleiset verbit II: toiminta ja muutos",
      wordSlugs: [
        "alkaa",
        "loppua",
        "jäädä",
        "käydä",
        "päästä",
        "löytää",
        "etsiä",
        "muistaa",
        "unohtaa",
        "ymmärtää",
        "ajatella",
        "haluta",
      ],
    },
    {
      day: 4,
      theme: "Kaupunki ja palvelut",
      wordSlugs: [
        "pankki",
        "posti",
        "ravintola",
        "hotelli",
        "kirjasto",
        "museo",
        "apteekki",
        "tori",
        "kahvila",
        "puisto",
        "kirkko",
        "sairaala",
      ],
    },
    {
      day: 5,
      theme: "Koti ja esineet",
      wordSlugs: [
        "tuoli",
        "peili",
        "lamppu",
        "seinä",
        "lattia",
        "katto",
        "kaappi",
        "sohva",
        "televisio",
        "puhelin",
        "tietokone",
        "kello",
      ],
    },
    {
      day: 6,
      theme: "Koko ja määrä",
      wordSlugs: [
        "pitkä",
        "lyhyt",
        "korkea",
        "matala",
        "nopea",
        "hidas",
        "raskas",
        "kevyt",
        "paljon",
        "vähän",
        "kaikki",
        "moni",
      ],
    },
  ],
  teksti: {
    title: "Päivä kaupungissa",
    level: "A2",
    topic: "Aino kertoo päivästään: asiointia kaupungilla ja illan suunnitelmat.",
    paragraph:
      "[[Minä]] [[ajattelen]] usein, että päivässä on liian [[vähän]] aikaa. " +
      "Aamulla [[käyn]] [[pankissa]] ja sitten [[kahvilassa]], jossa juon [[kaikki]] kahvit liian [[nopeasti]]. " +
      "[[Hän]], [[kuka]]? No, ystäväni — [[hän]] [[soittaa]] ja [[kysyy]]: ”[[Mikä]] sinulla kestää?” " +
      "[[Minä]] [[etsin]] vielä uutta [[puhelinta]], koska vanha on liian [[hidas]]. " +
      "Illalla [[me]] [[menemme]] [[ravintolaan]] — se ei ole [[pitkä]] matka, mutta [[kaikki]] [[haluavat]] eri paikkaan!",
    translation:
      "I often think there's too little time in a day. " +
      "In the morning I visit the bank and then the café, where I drink all the coffees too quickly. " +
      "Who is she? Well, my friend — she calls and asks: “What's taking you so long?” " +
      "I'm still looking for a new phone, because the old one is too slow. " +
      "In the evening we go to a restaurant — it isn't a long trip, but everyone wants a different place!",
    targets: [
      "minä",
      "ajatella",
      "vähän",
      "käydä",
      "pankki",
      "kahvila",
      "kaikki",
      "nopea",
      "hän",
      "kuka",
      "soittaa",
      "kysyä",
      "mikä",
      "etsiä",
      "puhelin",
      "hidas",
      "me",
      "mennä",
      "ravintola",
      "pitkä",
      "haluta",
    ],
  },
};

export default week3;
