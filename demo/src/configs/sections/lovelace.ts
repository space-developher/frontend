import { DemoConfig } from "../types";

export const demoLovelaceSections: DemoConfig["lovelace"] = (localize) => ({
  title: "Home Assistant Demo",
  views: [
    {
      type: "sections",
      title: "Custom-UI-Demo",
      path: "home",
      icon: "mdi:home-assistant",
      badges: [
        {
          type: "entity",
          entity: "sensor.outdoor_temperature",
          color: "red",
        },
      ],
      sections: [
        {
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.sections.titles.living_room"
              ),
              icon: "mdi:sofa",
              badges: [
                {
                  type: "entity",
                  entity: "sensor.living_room_temperature",
                  color: "red",
                },
                {
                  type: "entity",
                  entity: "sensor.living_room_humidity",
                  color: "indigo",
                },
              ],
            },
            {
              type: "tile",
              entity: "light.floor_lamp",
            },
            {
              type: "tile",
              entity: "light.living_room_spotlights",
              name: "Spotlights",
              features: [
                {
                  type: "light-brightness",
                },
              ],
            },
            {
              type: "tile",
              entity: "light.bar_lamp",
            },
            {
              type: "tile",
              entity: "cover.living_room_garden_shutter",
              name: "Blinds",
            },
            {
              type: "tile",
              entity: "media_player.living_room_nest_mini",
            },
          ],
        },
      ],
    },
  ],
});
