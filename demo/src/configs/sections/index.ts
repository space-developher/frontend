import { DemoConfig } from "../types";
import { demoLovelaceDescription } from "./description";
import { demoEntitiesSections } from "./entities";
import { demoLovelaceSections } from "./lovelace";

export const demoSections: DemoConfig = {
  authorName: "Accordion",
  authorUrl: "https://github.com/home-assistant/frontend/",
  name: "Accordion",
  description: demoLovelaceDescription,
  lovelace: demoLovelaceSections,
  entities: demoEntitiesSections,
  theme: () => ({}),
};
