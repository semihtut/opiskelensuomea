import type { Scenario } from "@/lib/content-types";

// Dialogue, Week 2 (Reaktivointi), A2. Ordering at a café and paying.
const kahvilassa: Scenario = {
  slug: "kahvilassa",
  week: 2,
  category: "ruoka",
  format: "dialogi",
  title: "Kahvilassa",
  titleEn: "At the café",
  level: "A2",
  topic: "Ordering a coffee and a bun at a café, choosing eat-in or takeaway, and paying by card.",
  lines: [
    {
      speaker: "Asiakas",
      fi: "Hei! Saisinko ison kahvin ja yhden [[korvapuustin|cinnamon bun]]?",
      en: "Hi! Could I get a large coffee and one cinnamon bun?",
    },
    {
      speaker: "Myyjä",
      fi: "Totta kai. Tässä vai [[mukaan|to take away]]?",
      en: "Of course. To eat in or to take away?",
    },
    {
      speaker: "Asiakas",
      fi: "Mukaan, kiitos. Paljonko se [[maksaa|costs]]?",
      en: "To take away, thanks. How much does it cost?",
    },
    {
      speaker: "Myyjä",
      fi: "[[Yhteensä|In total]] kuusi euroa viisikymmentä.",
      en: "Six euros fifty in total.",
    },
    {
      speaker: "Asiakas",
      fi: "Voinko [[maksaa kortilla|pay by card]]?",
      en: "Can I pay by card?",
    },
    {
      speaker: "Myyjä",
      fi: "Toki. Ole hyvä, tässä [[kuitti|receipt]].",
      en: "Sure. Here you go, here's the receipt.",
    },
    {
      speaker: "Asiakas",
      fi: "Kiitos! Mukavaa päivänjatkoa.",
      en: "Thanks! Have a nice rest of the day.",
    },
  ],
  focus: [
    { fi: "korvapuusti", en: "cinnamon bun" },
    { fi: "mukaan", en: "to take away" },
    { fi: "maksaa kortilla", en: "to pay by card" },
    { fi: "yhteensä", en: "in total, altogether" },
    { fi: "kuitti", en: "receipt" },
  ],
  updatedAt: "2026-06-07",
};

export default kahvilassa;
