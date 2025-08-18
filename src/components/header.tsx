"use client";

import { useIsSecondary } from "@/hooks/use-is-secondary";
import { cn } from "@/lib/utils";
import { CallButton } from "./call-button";
import { Logo } from "./logo";
import { VRButton } from "./vr-button";

export const Header = () => {
    const isSecondary = useIsSecondary();

    return (
        <header className="fixed inset-x-0 top-4 z-50 flex items-center justify-between px-8">
            <Logo />
            <div className="flex items-center gap-x-2">
                <CallButton />

                <VRButton
                    className={cn(
                        "size-7 border-0",
                        isSecondary ? "bg-accent-foreground" : "bg-primary",
                    )}
                />
            </div>
        </header>
    );
};
