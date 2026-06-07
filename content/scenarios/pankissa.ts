import type { Scenario } from "@/lib/content-types";

// Dialogue, Week 6 (Laajennus), B1. Opening a bank account.
const pankissa: Scenario = {
  slug: "pankissa",
  week: 6,
  category: "raha",
  format: "dialogi",
  title: "Pankissa",
  titleEn: "At the bank",
  level: "B1",
  topic: "Opening a bank account: what documents are needed, getting a card and online banking.",
  lines: [
    {
      speaker: "Asiakas",
      fi: "Hei, haluaisin [[avata tilin|open an account]]. Mitä tarvitsen?",
      en: "Hi, I'd like to open an account. What do I need?",
    },
    {
      speaker: "Virkailija",
      fi: "Tarvitset [[henkilöllisyystodistuksen|an ID document]] ja osoitteen Suomessa.",
      en: "You need an ID document and an address in Finland.",
    },
    {
      speaker: "Asiakas",
      fi: "Tässä passini. Saanko myös [[pankkikortin|a bank card]]?",
      en: "Here's my passport. Can I also get a bank card?",
    },
    {
      speaker: "Virkailija",
      fi: "Kyllä. Kortti tulee postitse noin viikossa. Otatko [[verkkopankin|online banking]] käyttöön?",
      en: "Yes. The card comes by post in about a week. Will you start using online banking?",
    },
    {
      speaker: "Asiakas",
      fi: "Kyllä, kiitos. Onko tilin avaamisesta maksu?",
      en: "Yes, please. Is there a fee for opening the account?",
    },
    {
      speaker: "Virkailija",
      fi: "Ei ole. Mutta kortilla on pieni [[vuosimaksu|annual fee]].",
      en: "There isn't. But the card has a small annual fee.",
    },
    {
      speaker: "Asiakas",
      fi: "Selvä. Kiitos avusta.",
      en: "Alright. Thanks for the help.",
    },
  ],
  focus: [
    { fi: "avata tili", en: "to open an account" },
    { fi: "henkilöllisyystodistus", en: "ID document" },
    { fi: "pankkikortti", en: "bank card" },
    { fi: "verkkopankki", en: "online banking" },
    { fi: "vuosimaksu", en: "annual fee" },
  ],
  updatedAt: "2026-06-07",
};

export default pankissa;
