"use client";

import { useIsSecondary } from "@/hooks/use-is-secondary";
import { AlignLeft } from "lucide-react";
import { Button } from "./ui/button";

export const Sidebar = () => {
    const isSecondary = useIsSecondary();

    return (
        <Button
            className="rounded-full"
            size="icon"
            variant={isSecondary ? "secondary" : "default"}
        >
            <AlignLeft className="text-secondary" />
        </Button>
    );
};
