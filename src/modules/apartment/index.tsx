"use client";

import { albra, sparkling } from "@/app/fonts";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { ApartmentList } from "./apartment-list";

export const Apartment = () => {
    useSectionObserver(ESectionId.APARTMENT);
    return (
        <section
            id={ESectionId.APARTMENT}
            className="relative flex h-screen items-center justify-center gap-x-20"
        >
            <div className="-translate-y-8">
                <h2
                    className={cn(
                        "text-primary-foreground text-xl",
                        sparkling.className,
                    )}
                >
                    Bộ sưu tập giới hạn
                </h2>
                <div className="mt-3 flex items-center text-center uppercase">
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
            </div>
            <ApartmentList />
        </section>
    );
};
