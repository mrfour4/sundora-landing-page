"use client";

import { albra, sparkling } from "@/app/fonts";
import { INSPIRATION_IMG } from "@/constants";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";

export const Inspiration = () => {
    useSectionObserver(ESectionId.INSPIRATION);
    return (
        <section
            id={ESectionId.INSPIRATION}
            className="flex h-dvh flex-col items-center justify-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${INSPIRATION_IMG})` }}
        >
            <div className="flex flex-1 items-center gap-x-16">
                <div className="relative z-10 shrink-0 pb-8 pl-8">
                    <Image
                        src="/images_avif/inspiration-view-1.avif"
                        alt="Trái tim thành phố Đà Nẵng"
                        width={450}
                        height={450}
                        unoptimized
                        className="size-[450px]object-cover aspect-square"
                    />
                    <Image
                        src="/images_avif/inspiration-view-2.avif"
                        alt="Trái tim thành phố Đà Nẵng"
                        width={292}
                        height={184}
                        className="absolute -bottom-0 left-0 -z-10 object-cover"
                    />
                </div>
                <div className="pl-20">
                    <h1
                        className={cn(
                            "text-primary text-5xl font-light uppercase",
                            albra.className,
                        )}
                    >
                        CHẤT TINH TẾ
                        <br />
                        RIÊNG NƠI
                    </h1>
                    <h2
                        className={cn(
                            "text-primary-foreground mt-2 -translate-x-11 text-xl",
                            sparkling.className,
                        )}
                    >
                        Trái tim thành phố Đà Nẵng
                    </h2>

                    <div className="text-muted-foreground mt-6 w-md space-y-5 text-justify text-sm">
                        <p>
                            Giữa nhịp sống rộn ràng của thành phố trẻ, Sundora
                            chọn cách hiện diện khác biệt nhẹ nhàng nhưng đủ
                            cuốn hút để tạo dấu ấn riêng.
                        </p>
                        <p>
                            Như một nốt ngân tuyệt đẹp nơi ánh sáng, thiên nhiên
                            và kiến trúc hòa quyện để tạo nên chất sống thanh
                            lịch cho những ai quý trọng sự bình yên.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
