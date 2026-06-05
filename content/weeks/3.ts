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
    { day: 6, theme: "Koko ja määrä", wordSlugs: [] },
  ],
  teksti: {
    title: "Kuka sinä olet?",
    level: "A2",
    topic: "Lyhyt esittäytyminen ja kysymyksiä uudelle tuttavalle.",
    paragraph:
      "”[[Kuka]] sinä olet?” minä kysyn. " +
      "”[[Minä]] olen Aino, ja [[tämä]] on ystäväni Leo.” " +
      "”[[Mikä]] tuo on?” [[hän]] kysyy ja osoittaa kirjaa. " +
      "”[[Se]] on suomen kirja. [[Me]] opiskelemme suomea yhdessä.” " +
      "”[[Milloin]] [[te]] aloititte?” " +
      "”Viime vuonna. [[Tuo]] toinen kirja on myös meidän.”",
    translation:
      "“Who are you?” I ask. " +
      "“I am Aino, and this is my friend Leo.” " +
      "“What is that?” she asks, pointing at a book. " +
      "“It is a Finnish book. We study Finnish together.” " +
      "“When did you start?” " +
      "“Last year. That other book is also ours.”",
    targets: [
      "kuka",
      "minä",
      "tämä",
      "mikä",
      "hän",
      "se",
      "me",
      "milloin",
      "te",
      "tuo",
    ],
  },
};

export default week3;
