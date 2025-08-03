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
            className="h-screen bg-no-repeat px-44 pt-80 text-center"
            style={{ backgroundImage: `url(${PARTNER_IMG})` }}
        >
            <h2 className="text-4xl font-semibold text-white uppercase">
                một sản phẩm kiến tạo bởi
            </h2>
            <h1
                className={cn(
                    "mt-6 text-8xl font-light text-white uppercase",
                    albra.className,
                )}
            >
                PHÚC HOÀNG NGUYÊN GROUP
            </h1>
            <div className="mt-16 flex items-center justify-between gap-x-8">
                {PARTNERS.map((p, index) => (
                    <div
                        key={index}
                        className="rounded-md bg-linear-180 from-[#301C0E]/70 from-40% to-transparent px-8 py-2"
                    >
                        <Image
                            src={p.imageUrl}
                            alt={p.title}
                            width={266}
                            height={177}
                            className="shrink-0 object-cover"
                        />
                        <p className="text-2xl font-semibold whitespace-pre-line text-white uppercase">
                            {p.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
