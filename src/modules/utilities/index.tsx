"use client";

import { albra, sparkling } from "@/app/fonts";
import { useIsMobile } from "@/hooks/use-mobile";
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

    const isMobile = useIsMobile();

    return (
        <section
            id={ESectionId.UTILITIES}
            className="flex h-dvh flex-col pt-20 lg:flex-row lg:items-center lg:justify-between lg:pt-0 lg:pl-40"
        >
            <div
                className={cn(
                    "relative shrink-0 pt-8 pr-7",
                    isMobile && "hidden",
                )}
            >
                <UtilityImage index={activeIndex} />
                <Image
                    src="/images_avif/utilities-placeholder.avif"
                    alt="Sundora"
                    width={478}
                    height={212}
                    className="absolute top-0 right-0 -z-10 shrink-0 object-cover"
                />
            </div>
            <div className="text-center lg:text-start">
                <h1
                    className={cn(
                        "text-primary text-3xl font-light uppercase lg:ml-14 lg:text-5xl",
                        albra.className,
                    )}
                >
                    hệ tiện ích {!isMobile && <br />}
                    trọn vẹn
                </h1>
                <h2
                    className={cn(
                        "text-primary-foreground text-lg lg:ml-5",
                        sparkling.className,
                    )}
                >
                    Chạm đến mọi giác quan
                </h2>
                <p className="text-muted-foreground mt-2 px-6 text-justify text-sm lg:mt-5 lg:ml-14 lg:w-[339px] lg:px-0">
                    Sundora được kiến tạo như một tổ hợp sống hoàn chỉnh, nơi
                    mọi chức năng - từ sống, làm việc đến nghỉ dưỡng đều được
                    tích hợp mạch lạc trong một tổng thể kiến trúc tối ưu.
                </p>

                {isMobile && (
                    <div className="relative mt-5 pb-8 pl-6">
                        <UtilityImage index={activeIndex} />
                        <Image
                            src="/images_avif/utilities-placeholder.avif"
                            alt="Sundora"
                            width={478}
                            height={212}
                            className="absolute bottom-0 left-0 -z-10 shrink-0 object-cover"
                        />
                    </div>
                )}

                <UtilityList
                    activeIndex={activeIndex}
                    onChange={setActiveIndex}
                />
            </div>
        </section>
    );
};
