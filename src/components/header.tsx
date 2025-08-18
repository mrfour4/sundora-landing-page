"use client";

import { ESectionId } from "@/types";
import { CallButton } from "./call-button";
import { Logo } from "./logo";
import { useNavigationContext } from "./navigation-context";
import { VRButton } from "./vr-button";

export const Header = () => {
    const { sectionId } = useNavigationContext();

    return (
        <header className="fixed inset-x-0 top-4 z-50 flex items-center justify-between px-8">
            <Logo />
            <div className="flex items-center gap-x-2">
                {sectionId === ESectionId.HOME && (
                    <VRButton className="bg-primary text-secondary border-0" />
                )}
                <CallButton />
            </div>
        </header>
    );
};
