"use client";

import { albra, sparkling } from "@/app/fonts";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";
import { ApartmentList } from "./apartment-list";

export const Apartment = () => {
    useSectionObserver(ESectionId.APARTMENT);
    return (
        <section
            id={ESectionId.APARTMENT}
            className="relative flex h-screen items-center gap-x-10 pt-10 pl-20"
        >
            <Image
                src="/images/apartment-1.png"
                alt=""
                width={660}
                height={569}
                className="absolute top-0 right-0 -z-10 h-screen w-2/3 shrink-0"
            />
            <div className="w-[362px] shrink-0">
                <h2
                    className={cn(
                        "text-primary-foreground text-xl",
                        sparkling.className,
                    )}
                >
                    Bộ sưu tập giới hạn
                </h2>
                <div className="mt-3 flex items-center uppercase">
                    <p className="text-secondary-foreground -rotate-90 text-sm leading-6 tracking-widest">
                        chỉ
                    </p>
                    <h1
                        className={cn(
                            "text-primary text-5xl font-light",
                            albra.className,
                        )}
                    >
                        236 căn hộ
                    </h1>
                </div>
                <h2 className="text-secondary-foreground border-primary mt-5 inline-flex border-b-2 pr-20 pb-4 text-2xl font-semibold uppercase">
                    studio
                </h2>
                <h2 className="text-primary mt-5 text-xl font-medium uppercase">
                    tối giản và riêng tư
                </h2>
                <Image
                    src="/images_avif/apartment-2.avif"
                    alt=" Bộ sưu tập giới hạn"
                    width={250}
                    height={387}
                    className="-mt-14 shrink-0 translate-x-10 rotate-90"
                />
            </div>
            <ApartmentList />
        </section>
    );
};
