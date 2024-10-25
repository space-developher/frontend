import { convertEntities } from "../../../../src/fake_data/entity";
import { DemoConfig } from "../types";

export const demoEntitiesSections: DemoConfig["entities"] = () =>
  convertEntities({
    "summary.registry": {
      entity_id: "summary.registry",
      state: "open",
      attributes: {
        used: 4,
      },
    },
    "summary.user": {
      entity_id: "summary.registry",
      state: "open",
      attributes: {
        used: 4,
      },
    },
    "summary.group": {
      entity_id: "summary.registry",
      state: "open",
      attributes: {
        used: 5,
      },
    },
  });
