"use client";

import { albra, sparkling } from "@/app/fonts";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { ApartmentList } from "./apartment-list";

export const Apartment = () => {
    useSectionObserver(ESectionId.APARTMENT);
    const isMobile = useIsMobile();

    return (
        <section
            id={ESectionId.APARTMENT}
            className="relative flex h-dvh flex-col justify-center gap-x-20 pt-20 lg:flex-row lg:items-center lg:pt-0"
        >
            <div className="text-center lg:-translate-y-8">
                <h2
                    className={cn(
                        "text-primary-foreground text-lg lg:text-xl",
                        sparkling.className,
                    )}
                >
                    Bộ sưu tập giới hạn
                </h2>
                <div className="mt-3 flex items-center justify-center text-center uppercase">
                    <p className="text-secondary-foreground -rotate-90 text-xs leading-6 tracking-widest lg:text-sm">
                        chỉ
                    </p>
                    <h1
                        className={cn(
                            "text-primary text-4xl font-light lg:text-5xl",
                            albra.className,
                        )}
                    >
                        236 căn hộ
                    </h1>
                </div>
            </div>
            <ApartmentList />
        </section>
    );
};
