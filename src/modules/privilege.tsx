"use client";

import { albra, sparkling } from "@/app/fonts";
import { Icons } from "@/components/icons";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";

export const Privilege = () => {
    useSectionObserver(ESectionId.PRIVILEGE);
    return (
        <section
            id={ESectionId.PRIVILEGE}
            className="relative flex h-dvh items-center justify-between gap-x-10"
        >
            <Image
                src="/images_avif/bg-privilege.avif"
                alt=""
                width={596}
                height={576}
                className="absolute inset-y-0 left-0 -z-10 h-full w-7/12 object-cover"
            />
            <div className="pl-24">
                <h1
                    className={cn(
                        "from-secondary to-secondary-foreground -translate-x-8 bg-gradient-to-b bg-clip-text text-xl leading-16 text-transparent",
                        sparkling.className,
                    )}
                >
                    Bến du thuyền
                </h1>
                <h2
                    className={cn(
                        "text-5xl font-light text-white uppercase",
                        albra.className,
                    )}
                >
                    đặc quyền
                </h2>
                <h2 className="text-secondary mt-2 text-xl font-semibold uppercase">
                    của nhịp sống bên sông
                </h2>
                <div className="mt-4 w-[300px] space-y-5 text-left text-sm text-white">
                    <p>
                        Giữa nhịp sống rộn ràng của thành phố trẻ, Sundora chọn
                        cách hiện diện khác biệt nhẹ nhàng nhưng đủ cuốn hút để
                        tạo dấu ấn riêng.
                    </p>
                    <p>
                        Như một nốt ngân tuyệt đẹp nơi ánh sáng, thiên nhiên và
                        kiến trúc hòa quyện để tạo nên chất sống thanh lịch cho
                        những ai quý trọng sự bình yên.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-y-4">
                <Image
                    src="/images_avif/privilege-1.avif"
                    alt="Bến du thuyền"
                    width={500}
                    height={767}
                    className="shrink-0 object-cover"
                />

                <div className="flex items-baseline gap-x-2.5">
                    <Icons.arrowLeft className="text-secondary-foreground" />
                    <div
                        className={cn(
                            "text-secondary inline-flex items-baseline gap-x-1",
                            albra.className,
                        )}
                    >
                        <span className="text-2xl text-white">01</span>
                        <span>/</span>
                        <span>02</span>
                    </div>
                    <Icons.arrowLeft className="text-secondary rotate-180" />
                </div>
            </div>

            <Image
                src="/images_avif/privilege-2.avif"
                alt="Bến du thuyền"
                width={400}
                height={350}
                className="shrink-0 object-cover"
            />
        </section>
    );
};
