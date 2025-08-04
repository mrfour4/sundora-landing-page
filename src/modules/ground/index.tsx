"use client";

import { albra } from "@/app/fonts";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";
import { FloorTabs } from "./floor-tabs";
import { GroupList } from "./ground-list";

export const Ground = () => {
    useSectionObserver(ESectionId.GROUND);
    return (
        <section
            id={ESectionId.GROUND}
            className="flex h-screen items-center justify-center gap-x-20"
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
                <GroupList />
            </div>
            <div>
                <Image
                    src="/images_avif/ground-1.avif"
                    alt="mặt bằng tầng điển hình"
                    width={600}
                    height={360}
                    unoptimized
                    className="shrink-0"
                />
                <FloorTabs />
            </div>
        </section>
    );
};
