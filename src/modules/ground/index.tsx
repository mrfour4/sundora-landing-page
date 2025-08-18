"use client";

import { albra } from "@/app/fonts";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { useState } from "react";
import { GroundImages } from "./ground-images";
import { GroupList } from "./ground-list";

export const Ground = () => {
    useSectionObserver(ESectionId.GROUND);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            id={ESectionId.GROUND}
            className="flex h-dvh items-center justify-center gap-x-10"
        >
            <div>
                <h1
                    className={cn(
                        "text-primary text-5xl leading-16 font-light uppercase",
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
