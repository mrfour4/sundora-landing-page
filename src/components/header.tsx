"use client";

import { useIsSecondary } from "@/hooks/use-is-secondary";
import { cn } from "@/lib/utils";
import { CallButton } from "./call-button";
import { Logo } from "./logo";
import { VRButton } from "./vr-button";
import { Button } from "./ui/button";
import Link from "next/link";
import { Icons } from "./icons";

export const Header = () => {
    const isSecondary = useIsSecondary();

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 lg:top-4 lg:px-8">
            <Logo />
            <div className="flex items-center gap-x-2">
                <Button
                    className="gap-1 rounded-full px-3 py-1 lg:px-4 lg:py-1.5"
                    asChild
                    variant={isSecondary ? "secondary" : "default"}
                >
                    <Link target="_blank" href="https://tour.panoee.net/iframe/Sundora-Tower-Danang">
                        <Icons.isolation className="size-3!" />
                        <span
                            className={cn(
                                "from-secondary to-secondary-foreground bg-gradient-to-r bg-clip-text text-xs font-bold tracking-wider text-transparent lg:text-sm",
                                isSecondary && "text-primary",
                            )}
                        >
                            VR 360
                        </span>
                    </Link>
                </Button>
                <CallButton />

                {/* <VRButton
                    className={cn(
                        "size-6 border-0 lg:size-7",
                        isSecondary ? "bg-accent-foreground" : "bg-primary",
                    )}
                /> */}
            </div>
        </header>
    );
};
