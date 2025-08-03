"use client";

import { albra, sparkling } from "@/app/fonts";
import { Icons } from "@/components/icons";
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
            className="h-screen bg-cover bg-no-repeat px-20"
            style={{ backgroundImage: `url(${INSPIRATION_IMG})` }}
        >
            <div className="mt-56 flex items-center gap-x-20">
                <div className="relative">
                    <Image
                        src="/images/inspiration-view-1.png"
                        alt="Trái tim thành phố Đà Nẵng"
                        width={799}
                        height={723}
                        className="relative z-10 ml-24 object-cover"
                    />
                    <Image
                        src="/images/inspiration-view-2.png"
                        alt="Trái tim thành phố Đà Nẵng"
                        width={639}
                        height={403}
                        className="absolute -bottom-16 left-0 object-cover"
                    />

                    <div className="absolute right-10 -bottom-16 flex items-baseline gap-x-2.5">
                        <Icons.arrowLeft className="text-secondary-foreground" />
                        <div
                            className={cn(
                                "text-secondary-foreground inline-flex items-baseline gap-x-1",
                                albra.className,
                            )}
                        >
                            <span className="text-primary-foreground text-3xl">
                                01
                            </span>
                            <span>/</span>
                            <span>02</span>
                        </div>
                        <Icons.arrowLeft className="text-secondary-foreground rotate-180" />
                    </div>
                </div>
                <div className="pl-20">
                    <h1
                        className={cn(
                            "text-primary text-7xl font-light uppercase",
                            albra.className,
                        )}
                    >
                        CHẤT TINH TẾ
                        <br />
                        RIÊNG NƠI
                    </h1>
                    <h2
                        className={cn(
                            "text-primary-foreground mt-6 -translate-x-20 text-4xl",
                            sparkling.className,
                        )}
                    >
                        Trái tim thành phố Đà Nẵng
                    </h2>

                    <div className="text-muted-foreground mt-12 w-md space-y-10 text-justify text-lg">
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
