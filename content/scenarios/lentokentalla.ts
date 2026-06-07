import type { Scenario } from "@/lib/content-types";

// Dialogue, Week 8 (Laajennus), B1. Checking in at the airport.
// "tarkastuskortti" = boarding pass (verified via Wiktionary).
const lentokentalla: Scenario = {
  slug: "lentokentalla",
  week: 8,
  category: "matka",
  format: "dialogi",
  title: "Lentokentällä",
  titleEn: "At the airport",
  level: "B1",
  topic: "Checking in at the airport: luggage, boarding pass and the gate.",
  lines: [
    {
      speaker: "Matkustaja",
      fi: "Hei, haluaisin tehdä [[lähtöselvityksen|check-in]] Lontooseen.",
      en: "Hi, I'd like to check in for London.",
    },
    {
      speaker: "Virkailija",
      fi: "Saanko passinne? Onko teillä [[matkatavaraa|luggage]] ruumaan?",
      en: "May I have your passport? Do you have luggage for the hold?",
    },
    {
      speaker: "Matkustaja",
      fi: "Kyllä, yksi laukku.",
      en: "Yes, one suitcase.",
    },
    {
      speaker: "Virkailija",
      fi: "Hyvä. Tässä [[tarkastuskortti|boarding pass]]. [[Portti|The gate]] on numero 24.",
      en: "Good. Here's your boarding pass. The gate is number 24.",
    },
    {
      speaker: "Matkustaja",
      fi: "Mihin aikaan [[koneeseen nousu|boarding]] alkaa?",
      en: "What time does boarding start?",
    },
    {
      speaker: "Virkailija",
      fi: "Kello 14.30. Muistakaa mennä ajoissa [[turvatarkastukseen|to security]].",
      en: "At 2:30 p.m. Remember to go to security in good time.",
    },
    {
      speaker: "Matkustaja",
      fi: "Kiitos! Hyvää päivänjatkoa.",
      en: "Thanks! Have a good rest of the day.",
    },
  ],
  focus: [
    { fi: "lähtöselvitys", en: "check-in" },
    { fi: "matkatavara", en: "luggage" },
    { fi: "tarkastuskortti", en: "boarding pass" },
    { fi: "portti", en: "gate" },
    { fi: "turvatarkastus", en: "security check" },
  ],
  updatedAt: "2026-06-07",
};

export default lentokentalla;
