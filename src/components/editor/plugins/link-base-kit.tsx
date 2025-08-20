import { BaseLinkPlugin } from "@platejs/link";

import { LinkElementStatic } from "@/components/custom/link-node-static";

export const BaseLinkKit = [BaseLinkPlugin.withComponent(LinkElementStatic)];
