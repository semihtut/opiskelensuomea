import type { Scenario } from "@/lib/content-types";

// Dialogue, Week 12 (Sujuvuus), B1. Applying for a residence permit at an office.
const virastossaAsiointi: Scenario = {
  slug: "virastossa-asiointi",
  week: 12,
  category: "asiointi",
  format: "dialogi",
  title: "Virastossa asiointi",
  titleEn: "Dealing with an office",
  level: "B1",
  topic: "Applying for a residence permit: documents, signing, and processing time.",
  lines: [
    {
      speaker: "Asiakas",
      fi: "Hei, haluaisin hakea [[oleskelulupaa|a residence permit]]. Mitä [[asiakirjoja|documents]] tarvitsen?",
      en: "Hi, I'd like to apply for a residence permit. What documents do I need?",
    },
    {
      speaker: "Virkailija",
      fi: "Tarvitset täytetyn [[lomakkeen|form]], passin ja [[työsopimuksen|employment contract]].",
      en: "You need a completed form, a passport and an employment contract.",
    },
    {
      speaker: "Asiakas",
      fi: "Tässä ne ovat. Olen myös [[varannut ajan|booked an appointment]] verkossa.",
      en: "Here they are. I've also booked an appointment online.",
    },
    {
      speaker: "Virkailija",
      fi: "Hyvä. [[Allekirjoittakaa|Sign]] tähän, olkaa hyvä.",
      en: "Good. Please sign here.",
    },
    {
      speaker: "Asiakas",
      fi: "Kuinka kauan [[käsittely|the processing]] kestää?",
      en: "How long does the processing take?",
    },
    {
      speaker: "Virkailija",
      fi: "Noin kaksi kuukautta. Saatte [[päätöksen|the decision]] postitse.",
      en: "About two months. You'll get the decision by post.",
    },
    {
      speaker: "Asiakas",
      fi: "Kiitos paljon!",
      en: "Thank you very much!",
    },
  ],
  focus: [
    { fi: "oleskelulupa", en: "residence permit" },
    { fi: "asiakirja", en: "document" },
    { fi: "lomake", en: "form" },
    { fi: "käsittely", en: "processing, handling" },
    { fi: "päätös", en: "decision" },
  ],
  updatedAt: "2026-06-07",
};

export default virastossaAsiointi;
