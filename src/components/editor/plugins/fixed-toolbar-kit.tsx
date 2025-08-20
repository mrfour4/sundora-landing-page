"use client";

import { createPlatePlugin } from "platejs/react";

import { FixedToolbar } from "@/components/custom/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/custom/fixed-toolbar-buttons";

export const FixedToolbarKit = [
    createPlatePlugin({
        key: "fixed-toolbar",
        render: {
            beforeEditable: () => (
                <FixedToolbar>
                    <FixedToolbarButtons />
                </FixedToolbar>
            ),
        },
    }),
];
