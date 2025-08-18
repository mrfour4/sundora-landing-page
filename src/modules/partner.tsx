"use client";

import { albra } from "@/app/fonts";
import { PARTNER_IMG, PARTNER_IMG_MOBILE, PARTNERS } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";

export const Partner = () => {
    useSectionObserver(ESectionId.PARTNERS);
    const isMobile = useIsMobile();

    return (
        <section
            id={ESectionId.PARTNERS}
            className="flex h-dvh flex-col items-center justify-center bg-cover bg-no-repeat pt-20 lg:pt-0"
            style={{
                backgroundImage: isMobile
                    ? `url(${PARTNER_IMG_MOBILE})`
                    : `url(${PARTNER_IMG})`,
            }}
        >
            <h2 className="mt-auto text-lg font-semibold text-white uppercase lg:mt-0">
                một sản phẩm kiến tạo bởi
            </h2>
            <h1
                className={cn(
                    "mt-1.5 text-center text-4xl font-light text-white uppercase lg:mt-0 lg:text-[55px] lg:leading-20",
                    albra.className,
                )}
            >
                PHÚC HOÀNG NGUYÊN GROUP
            </h1>
            <div className="mt-5 flex flex-col items-center justify-between gap-x-8 gap-y-2.5 lg:flex-row">
                {PARTNERS.map((p, index) => (
                    <div
                        key={index}
                        className="flex w-[200px] flex-col items-center justify-center rounded-md bg-linear-180 from-[#301C0E]/70 from-40% to-transparent px-4 py-2"
                    >
                        <Image
                            src={p.imageUrl}
                            alt={p.title}
                            width={130}
                            height={80}
                            className="h-[60px] shrink-0 object-contain lg:h-20"
                        />
                        <p className="text-center text-sm font-semibold whitespace-pre-line text-white uppercase">
                            {p.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
