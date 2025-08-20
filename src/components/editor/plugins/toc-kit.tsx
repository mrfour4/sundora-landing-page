"use client";

import { TocPlugin } from "@platejs/toc/react";

import { TocElement } from "@/components/custom/toc-node";

export const TocKit = [
    TocPlugin.configure({
        options: {
            // isScroll: true,
            topOffset: 80,
        },
    }).withComponent(TocElement),
];
