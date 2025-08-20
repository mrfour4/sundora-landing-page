"use client";

import { TogglePlugin } from "@platejs/toggle/react";

import { ToggleElement } from "@/components/custom/toggle-node";
import { IndentKit } from "@/components/editor/plugins/indent-kit";

export const ToggleKit = [
    ...IndentKit,
    TogglePlugin.withComponent(ToggleElement),
];
