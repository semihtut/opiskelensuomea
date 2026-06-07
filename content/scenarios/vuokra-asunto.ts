import type { Scenario } from "@/lib/content-types";

// Narrative, Week 4 (Reaktivointi), A2. Renting an apartment: viewing, deposit, lease.
const vuokraAsunto: Scenario = {
  slug: "vuokra-asunto",
  week: 4,
  category: "asuminen",
  format: "kerronta",
  title: "Vuokra-asunto",
  titleEn: "Rental apartment",
  level: "A2",
  topic: "Finding a rental apartment, going to a viewing, paying a deposit and signing the lease.",
  paragraph:
    "Etsin uutta [[vuokra-asuntoa|rental apartment]] Helsingistä. Löysin netistä kaksion ja varasin [[asuntonäytön|apartment viewing]]. [[Vuokranantaja|The landlord]] esitteli asunnon ja kertoi, että [[vuokra|the rent]] on 900 euroa kuukaudessa. Lisäksi piti maksaa [[takuuvuokra|deposit]], joka oli yhden kuukauden vuokra. Asunto oli valoisa ja siisti, joten päätin ottaa sen. Allekirjoitin [[vuokrasopimuksen|the lease]] ja sain avaimet. Pääsen muuttamaan ensi viikolla.",
  translation:
    "I was looking for a new rental apartment in Helsinki. I found a one-bedroom online and booked a viewing. The landlord showed the apartment and said the rent is 900 euros a month. In addition, I had to pay a deposit, which was one month's rent. The apartment was bright and tidy, so I decided to take it. I signed the lease and got the keys. I get to move in next week.",
  focus: [
    { fi: "vuokra-asunto", en: "rental apartment" },
    { fi: "asuntonäyttö", en: "apartment viewing" },
    { fi: "vuokranantaja", en: "landlord" },
    { fi: "takuuvuokra", en: "(rental) deposit" },
    { fi: "vuokrasopimus", en: "lease, rental agreement" },
  ],
  updatedAt: "2026-06-07",
};

export default vuokraAsunto;
