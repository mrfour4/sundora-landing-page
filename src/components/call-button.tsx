"use client";

import { useIsSecondary } from "@/hooks/use-is-secondary";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const CallButton = () => {
    const isSecondary = useIsSecondary();

    return (
        <Button
            className="gap-1 rounded-full xl:size-auto"
            asChild
            variant={isSecondary ? "secondary" : "default"}
        >
            <Link href="tel:0984868463">
                <Phone className="size-3!" />
                <span
                    className={cn(
                        "from-secondary to-secondary-foreground bg-gradient-to-r bg-clip-text text-sm font-bold tracking-wider text-transparent",
                        isSecondary && "text-primary",
                    )}
                >
                    0984 868 463
                </span>
            </Link>
        </Button>
    );
};
