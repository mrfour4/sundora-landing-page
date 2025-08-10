"use client";

import { albra, sparkling } from "@/app/fonts";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { UtilityImage } from "./utility-image";
import { UtilityList } from "./utility-list";

export const Utilities = () => {
    useSectionObserver(ESectionId.UTILITIES);

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            id={ESectionId.UTILITIES}
            className="flex h-screen items-center justify-between pl-40"
        >
            <div className="relative shrink-0 pt-8 pr-7">
                <UtilityImage
                    index={activeIndex}
                    direction={1}
                />

                <Image
                    src="/images_avif/utilities-placeholder.avif"
                    alt="Sundora"
                    width={478}
                    height={212}
                    className="absolute top-0 right-0 -z-10 shrink-0 object-cover"
                />
            </div>
            <div>
                <h1
                    className={cn(
                        "text-primary ml-14 text-5xl font-light uppercase",
                        albra.className,
                    )}
                >
                    hệ tiện ích <br />
                    trọn vẹn
                </h1>
                <h2
                    className={cn(
                        "text-primary-foreground ml-5 text-lg",
                        sparkling.className,
                    )}
                >
                    Chạm đến mọi giác quan
                </h2>
                <p className="text-muted-foreground mt-5 ml-14 w-[339px] text-justify text-sm">
                    Sundora được kiến tạo như một tổ hợp sống hoàn chỉnh, nơi
                    mọi chức năng - từ sống, làm việc đến nghỉ dưỡng đều được
                    tích hợp mạch lạc trong một tổng thể kiến trúc tối ưu.
                </p>
                <UtilityList
                    activeIndex={activeIndex}
                    onChange={setActiveIndex}
                />
            </div>
        </section>
    );
};
