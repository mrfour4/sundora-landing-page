"use client";

import { albra, sparkling } from "@/app/fonts";
import { Icons } from "@/components/icons";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";

export const Privilege = () => {
    useSectionObserver(ESectionId.PRIVILEGE);
    const isMobile = useIsMobile();

    return (
        <section
            id={ESectionId.PRIVILEGE}
            className="relative flex h-dvh flex-col justify-center gap-x-10 pt-20 lg:flex-row lg:items-center lg:justify-between lg:pt-0"
        >
            {!isMobile && (
                <Image
                    src="/images_avif/bg-privilege.avif"
                    alt=""
                    width={596}
                    height={576}
                    className="absolute inset-y-0 left-0 -z-10 h-full w-7/12 object-cover"
                />
            )}
            <div className="text-center lg:pl-24 lg:text-start">
                <h1
                    className={cn(
                        "lg:from-secondary lg:to-secondary-foreground from-primary to-primary-foreground bg-gradient-to-b bg-clip-text text-lg leading-16 text-transparent lg:-translate-x-8 lg:text-xl",
                        sparkling.className,
                    )}
                >
                    Bến du thuyền
                </h1>
                <h2
                    className={cn(
                        "text-primary text-3xl font-light uppercase lg:text-5xl lg:text-white",
                        albra.className,
                    )}
                >
                    đặc quyền
                </h2>
                <h2 className="text-primary lg:text-secondary mt-1 text-lg font-semibold uppercase lg:mt-2 lg:text-xl">
                    của nhịp sống bên sông
                </h2>

                <div
                    className={cn(
                        "relative mt-3 flex flex-col gap-y-4 px-6",
                        !isMobile && "hidden",
                    )}
                >
                    <Image
                        src="/images_avif/bg-privilege.avif"
                        alt=""
                        width={596}
                        height={576}
                        className="absolute inset-x-0 bottom-0 -z-10"
                    />
                    <Image
                        src="/images_avif/privilege-1.avif"
                        alt="Bến du thuyền"
                        width={500}
                        height={767}
                        className="h-[426px] w-full shrink-0 object-cover"
                    />

                    <div className="flex items-baseline justify-center gap-x-2.5 pb-4 lg:justify-start">
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
                <div className="space-y-3 p-6 text-justify text-sm text-[#444] lg:mt-4 lg:w-[300px] lg:space-y-5 lg:p-0 lg:text-white">
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

            {!isMobile && (
                <>
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
                </>
            )}
        </section>
    );
};
