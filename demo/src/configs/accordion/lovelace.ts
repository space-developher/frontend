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
          icon: "registry",
          title: "레지스트리",
          value: "4",
          iconPath: "registry",
        },
        {
          type: "custom:accordion-user",
          icon: "user",
          title: "사용자",
          value: "10",
          iconPath: "user",
        },
        {
          type: "custom:accordion-user",
          icon: "group",
          title: "그룹",
          value: "5",
          iconPath: "group",
        },
      ],
    },
  ],
});
