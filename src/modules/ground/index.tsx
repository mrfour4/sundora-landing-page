"use client";

import { albra } from "@/app/fonts";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { useState } from "react";
import { GroundImages } from "./ground-images";
import { GroupList } from "./ground-list";

export const Ground = () => {
    useSectionObserver(ESectionId.GROUND);
    const [activeIndex, setActiveIndex] = useState(0);
    const isMobile = useIsMobile();

    return (
        <section
            id={ESectionId.GROUND}
            className="flex h-dvh flex-col items-center justify-center pt-20 lg:flex-row lg:gap-x-10 lg:pt-0"
        >
            <div>
                <h1
                    className={cn(
                        "text-primary text-center text-3xl font-light uppercase lg:text-start lg:text-5xl lg:leading-16",
                        albra.className,
                    )}
                >
                    mặt bằng tầng <br /> điển hình
                </h1>
                <GroupList
                    activeIndex={activeIndex}
                    onChange={setActiveIndex}
                />
            </div>
            <GroundImages index={activeIndex} />
        </section>
    );
};
