"use client";

import { albra } from "@/app/fonts";
import { PARTNER_IMG, PARTNERS } from "@/constants";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";

export const Partner = () => {
    useSectionObserver(ESectionId.PARTNERS);
    return (
        <section
            id={ESectionId.PARTNERS}
            className="flex h-dvh flex-col items-center justify-center bg-no-repeat"
            style={{ backgroundImage: `url(${PARTNER_IMG})` }}
        >
            <h2 className="text-lg font-semibold text-white uppercase">
                một sản phẩm kiến tạo bởi
            </h2>
            <h1
                className={cn(
                    "text-[55px] leading-20 font-light text-white uppercase",
                    albra.className,
                )}
            >
                PHÚC HOÀNG NGUYÊN GROUP
            </h1>
            <div className="mt-5 flex items-center justify-between gap-x-8">
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
                            className="h-20 shrink-0 object-contain"
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
