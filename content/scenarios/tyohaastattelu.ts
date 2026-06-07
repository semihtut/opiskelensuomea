import type { Scenario } from "@/lib/content-types";

// Dialogue, Week 5 (Laajennus), A2–B1. A job interview.
const tyohaastattelu: Scenario = {
  slug: "tyohaastattelu",
  week: 5,
  category: "tyo",
  format: "dialogi",
  title: "Työhaastattelu",
  titleEn: "Job interview",
  level: "B1",
  topic: "A job interview: talking about experience, strengths, and a notice period.",
  lines: [
    {
      speaker: "Haastattelija",
      fi: "Tervetuloa! Kertoisitko hieman itsestäsi ja [[työkokemuksestasi|your work experience]]?",
      en: "Welcome! Could you tell me a little about yourself and your work experience?",
    },
    {
      speaker: "Hakija",
      fi: "Kiitos. Olen työskennellyt kolme vuotta [[ohjelmistokehittäjänä|as a software developer]]. Haen tätä paikkaa, koska haluan uusia [[haasteita|challenges]].",
      en: "Thank you. I've worked for three years as a software developer. I'm applying for this position because I want new challenges.",
    },
    {
      speaker: "Haastattelija",
      fi: "Mitkä ovat [[vahvuutesi|your strengths]]?",
      en: "What are your strengths?",
    },
    {
      speaker: "Hakija",
      fi: "Olen huolellinen ja opin nopeasti. [[Tulen toimeen|I get along]] hyvin tiimissä.",
      en: "I'm careful and I learn quickly. I get along well in a team.",
    },
    {
      speaker: "Haastattelija",
      fi: "Hyvä. Milloin voisit aloittaa?",
      en: "Good. When could you start?",
    },
    {
      speaker: "Hakija",
      fi: "Voisin aloittaa kuukauden [[irtisanomisajan|notice period]] jälkeen.",
      en: "I could start after a one-month notice period.",
    },
    {
      speaker: "Haastattelija",
      fi: "Selvä. Olemme yhteydessä ensi viikolla.",
      en: "Alright. We'll be in touch next week.",
    },
  ],
  focus: [
    { fi: "työkokemus", en: "work experience" },
    { fi: "vahvuus", en: "strength" },
    { fi: "tulla toimeen", en: "to get along, manage" },
    { fi: "irtisanomisaika", en: "notice period" },
    { fi: "aloittaa", en: "to start, begin" },
  ],
  updatedAt: "2026-06-07",
};

export default tyohaastattelu;
