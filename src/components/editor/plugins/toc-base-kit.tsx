import { BaseTocPlugin } from "@platejs/toc";

import { TocElementStatic } from "@/components/custom/toc-node-static";

export const BaseTocKit = [BaseTocPlugin.withComponent(TocElementStatic)];
