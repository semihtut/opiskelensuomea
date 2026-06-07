import type { Scenario } from "@/lib/content-types";

// Narrative scenario, Week 11 (Sujuvuus), level B1. Falling ill, calling the health
// centre, booking an appointment and getting medicine. Forms verified against
// Wiktionary/Kotus (heräsin type 73; varasin ajan type 73; levätä type 73; lääkkeet
// type 48; "paranen" from parata, Kotus 72/vanheta — common modern form).
const sairastuminen: Scenario = {
  slug: "sairastuminen",
  week: 11,
  category: "terveys",
  format: "kerronta",
  title: "Sairastuminen",
  titleEn: "Falling ill",
  level: "B1",
  topic: "Calling the health centre, booking an appointment with a doctor, and getting medicine.",
  paragraph:
    "Eilen heräsin ja huomasin, että minulla on kova [[kuume|fever]]. [[Kurkkuni|My throat]] oli myös todella [[kipeä|sore]] ja olo oli [[heikko|weak]]. Soitin Espoon [[terveysasemalle|to the health centre]] ja [[varasin ajan|booked an appointment]] lääkärille. Puhelimessa [[hoitaja|nurse]] kysyi minulta [[oireista|about the symptoms]] ja sanoi, että minun täytyy [[levätä|rest]]. Iltapäivällä menin lääkäriin. Lääkäri [[tutki|examined]] minut nopeasti ja kirjoitti [[reseptin|a prescription]] apteekkiin. Ostin [[lääkkeet|the medicines]] ja menin takaisin kotiin nukkumaan. Toivottavasti [[paranen|I'll get well]] pian.",
  translation:
    "Yesterday I woke up and noticed that I have a high fever. My throat was also really sore, and I felt weak. I called the Espoo health centre and booked an appointment with a doctor. On the phone, the nurse asked me about the symptoms and said that I need to rest. In the afternoon, I went to the doctor. The doctor examined me quickly and wrote a prescription for the pharmacy. I bought the medicines and went back home to sleep. Hopefully, I'll get well soon.",
  focus: [
    { fi: "kuume", en: "fever" },
    { fi: "oire", en: "symptom" },
    { fi: "varata aika", en: "to book an appointment" },
    { fi: "terveysasema", en: "health centre" },
    { fi: "resepti", en: "prescription" },
  ],
  updatedAt: "2026-06-07",
};

export default sairastuminen;
