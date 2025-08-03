"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { EXCEPTIONS, SECTION_TITLES } from "@/constants";
import { useIsSecondary } from "@/hooks/use-is-secondary";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./icons";
import { useNavigationContext } from "./navigation-context";

export const NavigationDots = () => {
    const { sectionId } = useNavigationContext();

    let isSecondary = useIsSecondary();

    const isException = !!sectionId && EXCEPTIONS.includes(sectionId);
    if (isException) {
        isSecondary = !isSecondary;
    }

    return (
        <nav className="fixed top-1/2 right-16 z-50 flex -translate-y-1/2 flex-col items-end gap-5">
            {Object.entries(SECTION_TITLES).map(([id, title]) =>
                id === sectionId ? (
                    <div className="flex items-center gap-3" key={id}>
                        <p
                            className={cn(
                                "text-primary text-sm font-semibold",
                                isSecondary && "text-secondary",
                            )}
                        >
                            {title}
                        </p>
                        <Link href={`#${id}`}>
                            <button
                                className={cn(
                                    "bg-primary text-secondary flex size-6 translate-x-1 cursor-pointer items-center justify-center rounded-full",
                                    isSecondary && "bg-secondary text-primary",
                                )}
                            >
                                <Icons.dot />
                            </button>
                        </Link>
                    </div>
                ) : (
                    <Tooltip delayDuration={0} key={id}>
                        <TooltipTrigger asChild>
                            <Link href={`#${id}`}>
                                <button
                                    className={cn(
                                        "border-primary/50 hover:bg-primary size-4 cursor-pointer rounded-full border-2",
                                        isSecondary &&
                                            "border-secondary/50 hover:bg-secondary",
                                    )}
                                />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent
                            side="left"
                            className={cn(
                                "bg-primary text-secondary",
                                isSecondary && "bg-secondary text-primary",
                            )}
                        >
                            <p>{title}</p>
                        </TooltipContent>
                    </Tooltip>
                ),
            )}
        </nav>
    );
};
