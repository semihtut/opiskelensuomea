import type { Scenario } from "@/lib/content-types";

// Narrative, Week 7 (Laajennus), B1. Bad weather forces a plan change.
const saaMuuttaaSuunnitelmat: Scenario = {
  slug: "saa-muuttaa-suunnitelmat",
  week: 7,
  category: "vapaa-aika",
  format: "kerronta",
  title: "Sää muuttaa suunnitelmat",
  titleEn: "The weather changes the plans",
  level: "B1",
  topic: "A planned trip to the lake has to be postponed because of a thunderstorm.",
  paragraph:
    "Olimme suunnitelleet retken järvelle lauantaiksi. Aamulla [[sääennuste|the weather forecast]] kuitenkin lupasi [[ukkosta|thunder]] ja kovaa tuulta. Päätimme [[siirtää|postpone]] retken sunnuntaille. Iltapäivällä alkoi sataa kaatamalla, ja [[salamat|the lightning]] välkkyivät taivaalla. Olin tyytyväinen päätökseemme. Sunnuntaina sää oli [[poutainen|dry (no rain)]] ja aurinkoinen, joten retki [[onnistui|succeeded]] hienosti.",
  translation:
    "We had planned a trip to the lake for Saturday. In the morning, however, the weather forecast promised thunder and strong wind. We decided to postpone the trip to Sunday. In the afternoon it started pouring with rain, and the lightning flashed in the sky. I was happy with our decision. On Sunday the weather was dry and sunny, so the trip went wonderfully.",
  focus: [
    { fi: "sääennuste", en: "weather forecast" },
    { fi: "ukkonen", en: "thunder, thunderstorm" },
    { fi: "siirtää", en: "to move, postpone" },
    { fi: "salama", en: "lightning" },
    { fi: "poutainen", en: "dry, rainless" },
  ],
  updatedAt: "2026-06-07",
};

export default saaMuuttaaSuunnitelmat;
