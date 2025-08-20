import { BaseMentionPlugin } from "@platejs/mention";

import { MentionElementStatic } from "@/components/custom/mention-node-static";

export const BaseMentionKit = [
    BaseMentionPlugin.withComponent(MentionElementStatic),
];
