import { BaseSuggestionPlugin } from "@platejs/suggestion";

import { SuggestionLeafStatic } from "@/components/custom/suggestion-node-static";

export const BaseSuggestionKit = [
    BaseSuggestionPlugin.withComponent(SuggestionLeafStatic),
];
