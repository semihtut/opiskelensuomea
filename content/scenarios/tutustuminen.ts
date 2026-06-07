import type { Scenario } from "@/lib/content-types";

// Dialogue scenario, Week 1 (Reaktivointi), level A2. Everyday small talk when meeting
// someone new. Marked words use [[surface|english]] — tap reveals the English only.
const tutustuminen: Scenario = {
  slug: "tutustuminen",
  week: 1,
  category: "sosiaalinen",
  format: "dialogi",
  title: "Tutustuminen",
  titleEn: "Getting to know someone",
  level: "A2",
  topic: "Meeting a new person and making small talk: name, where you're from, and what you do.",
  lines: [
    {
      speaker: "Anna",
      fi: "Hei! Minä olen Anna. Mikä sinun nimesi on?",
      en: "Hi! I'm Anna. What's your name?",
    },
    {
      speaker: "Sam",
      fi: "Moi! Olen Sam. [[Hauska tutustua|Nice to meet you]].",
      en: "Hi! I'm Sam. Nice to meet you.",
    },
    {
      speaker: "Anna",
      fi: "Samoin! Mistä sinä olet [[kotoisin|from (one's home country/place)]]?",
      en: "Likewise! Where are you from?",
    },
    {
      speaker: "Sam",
      fi: "Olen kotoisin Turkista, mutta asun nyt Espoossa. Entä sinä?",
      en: "I'm from Turkey, but I live in Espoo now. And you?",
    },
    {
      speaker: "Anna",
      fi: "Minä olen suomalainen. Mitä sinä teet [[työksesi|for a living]]?",
      en: "I'm Finnish. What do you do for a living?",
    },
    {
      speaker: "Sam",
      fi: "Opiskelen ja teen töitä [[osa-aikaisesti|part-time]]. [[Opettelen|I'm learning]] myös suomea.",
      en: "I study and work part-time. I'm also learning Finnish.",
    },
    {
      speaker: "Anna",
      fi: "Hienoa! Suomi on vaikea kieli, mutta sinä puhut jo hyvin.",
      en: "Great! Finnish is a difficult language, but you already speak it well.",
    },
    {
      speaker: "Sam",
      fi: "Kiitos! [[Harjoittelen|I practise]] joka päivä.",
      en: "Thanks! I practise every day.",
    },
  ],
  focus: [
    { fi: "Hauska tutustua", en: "Nice to meet you" },
    { fi: "kotoisin", en: "from (one's home place)" },
    { fi: "työksesi", en: "for a living (lit. as your work)" },
    { fi: "osa-aikaisesti", en: "part-time" },
    { fi: "harjoitella", en: "to practise" },
  ],
  updatedAt: "2026-06-07",
};

export default tutustuminen;
