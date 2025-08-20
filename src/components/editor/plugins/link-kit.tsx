"use client";

import { LinkPlugin } from "@platejs/link/react";

import { LinkElement } from "@/components/custom/link-node";
import { LinkFloatingToolbar } from "@/components/custom/link-toolbar";

export const LinkKit = [
    LinkPlugin.configure({
        render: {
            node: LinkElement,
            afterEditable: () => <LinkFloatingToolbar />,
        },
    }),
];
