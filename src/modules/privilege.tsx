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
            className="relative flex h-screen items-center"
        >
            <Image
                src="/images_avif/bg-privilege.avif"
                alt="Sundora"
                width={1119}
                height={1080}
                className="absolute top-0 left-0 -z-10 object-cover"
            />
            <div className="pr-20 pl-36">
                <h1
                    className={cn(
                        "from-secondary to-secondary-foreground -translate-x-12 bg-gradient-to-b bg-clip-text text-4xl leading-24 text-transparent",
                        sparkling.className,
                    )}
                >
                    Bến du thuyền
                </h1>
                <h2
                    className={cn(
                        "text-7xl font-light text-white uppercase",
                        albra.className,
                    )}
                >
                    đặc quyền
                </h2>
                <h2 className="text-secondary mt-3 text-3xl font-semibold uppercase">
                    của nhịp sống bên sông
                </h2>
                <div className="w-96 space-y-5 pt-10 text-justify text-lg text-white">
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

            <div className="flex flex-col">
                <Image
                    src="/images_avif/privilege-1.avif"
                    alt="Bến du thuyền"
                    width={743}
                    height={528}
                    className="shrink-0 object-cover"
                />

                <div className="flex translate-y-12 items-baseline gap-x-2.5">
                    <Icons.arrowLeft className="text-secondary-foreground" />
                    <div
                        className={cn(
                            "text-secondary inline-flex items-baseline gap-x-1",
                            albra.className,
                        )}
                    >
                        <span className="text-3xl text-white">01</span>
                        <span>/</span>
                        <span>02</span>
                    </div>
                    <Icons.arrowLeft className="text-secondary rotate-180" />
                </div>
            </div>

            <Image
                src="/images_avif/privilege-2.avif"
                alt="Bến du thuyền"
                width={455}
                height={398}
                className="ml-auto shrink-0 object-cover"
            />
        </section>
    );
};
