"use client";

import { albra, sparkling } from "@/app/fonts";
import { Icons } from "@/components/icons";
import { OVERVIEW_IMG, PROJECT_INFO } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";

export const Overview = () => {
    useSectionObserver(ESectionId.OVERVIEW);

    const isMobile = useIsMobile();

    return (
        <section
            id={ESectionId.OVERVIEW}
            className="flex h-screen flex-col justify-center bg-[#002349] bg-cover bg-no-repeat"
            style={{
                backgroundImage: !isMobile ? `url(${OVERVIEW_IMG})` : undefined,
            }}
        >
            <div className="relative flex-1 pt-20 lg:px-20">
                <div className="relative z-20 h-full bg-gradient-to-b from-[#002349] to-[#00254B10] px-6 lg:bg-none lg:px-0">
                    <h1
                        className={cn(
                            "text-lg text-white lg:text-3xl",
                            sparkling.className,
                        )}
                    >
                        Được thiết kế dành riêng
                    </h1>
                    <div
                        className={cn(
                            "flex items-center gap-5 lg:mt-4",
                            albra.className,
                        )}
                    >
                        <h3 className="text-sundora-secondary text-sm font-light lg:text-xl">
                            Cho những <br />
                            chủ nhân
                        </h3>
                        <div className="xs:text-3xl text-shadow-sundora-secondary mt-2 flex items-center gap-1 text-2xl font-light whitespace-nowrap text-white uppercase text-shadow-[0_0_10px] lg:text-5xl">
                            <h2 className="">Duy mỹ</h2>
                            <Icons.and className="w-4 lg:w-8" />
                            <h2>Tinh tế</h2>
                        </div>
                    </div>
                    <p className="text-sundora-secondary-foreground w-full text-justify text-xs lg:mt-2 lg:w-1/2 lg:pr-20 lg:text-sm">
                        Với vị trí tuyệt đẹp bên bờ sông Hàn, sở hữu tầm nhìn
                        không giới hạn cùng thiết kế ấn tượng và hệ tiện ích cao
                        cấp, Sundora Tower tạo nên phong cách sống mới tại Đà
                        Nẵng.
                    </p>

                    <div className="mt-4 grid w-full grid-cols-1 gap-x-12 gap-y-2 lg:mt-8 lg:w-1/2 lg:grid-cols-2 lg:gap-y-4">
                        {PROJECT_INFO.map((item) => (
                            <div key={item.label}>
                                <p className="text-xs text-white lg:text-sm">
                                    {item.label}:{" "}
                                    <span className="font-bold">
                                        {item.value}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {isMobile && (
                    <Image
                        src="/images_avif/bg-overview-mobile.avif"
                        alt=""
                        width={414}
                        height={344}
                        className="absolute inset-x-0 bottom-0 z-10 h-[300px] object-cover"
                    />
                )}
            </div>
        </section>
    );
};
