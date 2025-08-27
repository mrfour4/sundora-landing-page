"use client";

import { useIsSecondary } from "@/hooks/use-is-secondary";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { CallButton } from "./call-button";
import { Logo } from "./logo";
import { VRButton } from "./vr-button";

export const Header = () => {
    const isSecondary = useIsSecondary();
    const isMobile = useIsMobile();

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex flex-col justify-between px-6 lg:top-4 lg:flex-row lg:items-center lg:px-8">
            <Logo />
            <div className="flex items-center gap-x-2">
                <CallButton />

                <VRButton
                    className={cn(
                        isMobile && "text-sundora-secondary ml-auto",
                        isSecondary
                            ? "bg-sundora-accent-foreground"
                            : "bg-sundora-primary",
                    )}
                    showDetail
                />
            </div>
        </header>
    );
};
