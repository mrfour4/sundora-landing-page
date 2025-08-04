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
            className="flex h-screen flex-col items-center justify-center bg-no-repeat pb-16"
            style={{ backgroundImage: `url(${PARTNER_IMG})` }}
        >
            <h2 className="mt-auto text-lg font-semibold text-white uppercase">
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
                        className="flex flex-col items-center justify-center rounded-md bg-linear-180 from-[#301C0E]/70 from-40% to-transparent px-4 py-1.5"
                    >
                        <Image
                            src={p.imageUrl}
                            alt={p.title}
                            width={151}
                            height={100}
                            className="shrink-0 object-cover"
                        />
                        <p className="-translate-y-2 text-center text-sm font-semibold whitespace-pre-line text-white uppercase">
                            {p.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
