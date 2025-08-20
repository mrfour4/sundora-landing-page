import { BaseTogglePlugin } from "@platejs/toggle";

import { ToggleElementStatic } from "@/components/custom/toggle-node-static";

export const BaseToggleKit = [
    BaseTogglePlugin.withComponent(ToggleElementStatic),
];
