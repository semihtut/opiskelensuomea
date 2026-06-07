import type { Scenario } from "@/lib/content-types";

// Dialogue, Week 3 (Reaktivointi), A2. Asking a local for directions.
const tienKysyminen: Scenario = {
  slug: "tien-kysyminen",
  week: 3,
  category: "liikenne",
  format: "dialogi",
  title: "Tien kysyminen",
  titleEn: "Asking for directions",
  level: "A2",
  topic: "Asking a local how to get to the railway station and understanding the directions.",
  lines: [
    {
      speaker: "Matkailija",
      fi: "Anteeksi, voitteko [[neuvoa|give directions]]? Etsin [[rautatieasemaa|the railway station]].",
      en: "Excuse me, can you give me directions? I'm looking for the railway station.",
    },
    {
      speaker: "Paikallinen",
      fi: "Toki. Mene suoraan eteenpäin ja [[käänny|turn]] toisesta [[risteyksestä|intersection]] oikealle.",
      en: "Sure. Go straight ahead and turn right at the second intersection.",
    },
    {
      speaker: "Matkailija",
      fi: "Onko se kaukana?",
      en: "Is it far?",
    },
    {
      speaker: "Paikallinen",
      fi: "Ei, noin viiden minuutin [[kävelymatka|walk]]. Asema on kirjaston vieressä.",
      en: "No, about a five-minute walk. The station is next to the library.",
    },
    {
      speaker: "Matkailija",
      fi: "Pitääkö minun ylittää tie?",
      en: "Do I need to cross the road?",
    },
    {
      speaker: "Paikallinen",
      fi: "Kyllä, ylitä tie [[suojatietä|the pedestrian crossing]] pitkin. Sitten näet aseman heti.",
      en: "Yes, cross the road using the pedestrian crossing. Then you'll see the station right away.",
    },
    {
      speaker: "Matkailija",
      fi: "Kiitos paljon avusta!",
      en: "Thank you very much for the help!",
    },
  ],
  focus: [
    { fi: "neuvoa", en: "to advise / give directions" },
    { fi: "rautatieasema", en: "railway station" },
    { fi: "kääntyä", en: "to turn" },
    { fi: "risteys", en: "intersection, crossroads" },
    { fi: "suojatie", en: "pedestrian crossing" },
  ],
  updatedAt: "2026-06-07",
};

export default tienKysyminen;
