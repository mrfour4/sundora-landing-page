"use client";

import { albra, sparkling } from "@/app/fonts";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";
import { UtilityList } from "./utility-list";

export const Utilities = () => {
    useSectionObserver(ESectionId.UTILITIES);
    return (
        <section
            id={ESectionId.UTILITIES}
            className="flex h-screen pt-48 pl-40"
        >
            <div className="relative pt-14 pr-14">
                <Image
                    src="/images/utilities-1.png"
                    alt="Sundora"
                    width={799}
                    height={696}
                    className="shrink-0 object-cover"
                />
                <Image
                    src="/images/utilities-2.png"
                    alt="Sundora"
                    width={639}
                    height={283}
                    className="absolute top-0 right-0 -z-10 shrink-0 object-cover"
                />
            </div>
            <div>
                <h1
                    className={cn(
                        "text-primary ml-24 text-7xl font-light uppercase",
                        albra.className,
                    )}
                >
                    hệ tiện ích <br />
                    trọn vẹn
                </h1>
                <h2
                    className={cn(
                        "text-primary-foreground mt-2 ml-8 text-4xl",
                        sparkling.className,
                    )}
                >
                    Chạm đến mọi giác quan
                </h2>
                <p className="text-muted-foreground mt-10 ml-28 w-[539px] text-justify text-lg">
                    Sundora được kiến tạo như một tổ hợp sống hoàn chỉnh, nơi
                    mọi chức năng - từ sống, làm việc đến nghỉ dưỡng đều được
                    tích hợp mạch lạc trong một tổng thể kiến trúc tối ưu.
                </p>
                <UtilityList />
            </div>
        </section>
    );
};
