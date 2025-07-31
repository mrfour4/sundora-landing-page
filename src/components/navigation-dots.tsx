"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { SECTION_TITLES } from "@/constants";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useNavigationContext } from "./navigation-context";

export const NavigationDots = () => {
    const { sectionId } = useNavigationContext();
    return (
        <nav className="fixed top-1/2 right-16 z-50 flex -translate-y-1/2 flex-col items-end gap-5">
            {Object.entries(SECTION_TITLES).map(([id, title]) =>
                id === sectionId ? (
                    <div className="flex items-center gap-3" key={id}>
                        <p className="text-secondary text-sm font-semibold">
                            {title}
                        </p>
                        <ReactSVG
                            src="/nav-dot.svg"
                            className="size-6 translate-x-1"
                        />
                    </div>
                ) : (
                    <Tooltip delayDuration={0} key={id}>
                        <TooltipTrigger asChild>
                            <Link href={`#${id}`}>
                                <button className="border-primary/50 hover:bg-primary size-4 cursor-pointer rounded-full border-2" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="left">
                            <p className="text-secondary">{title}</p>
                        </TooltipContent>
                    </Tooltip>
                ),
            )}
        </nav>
    );
};
