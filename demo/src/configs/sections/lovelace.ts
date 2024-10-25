import { DemoConfig } from "../types";

export const demoLovelaceSections: DemoConfig["lovelace"] = () => ({
  views: [
    {
      cards: [
        {
          type: "custom:accordion-card",
        },
        {
          type: "custom:accordion-user",
        },
      ],
    },
  ],
});
