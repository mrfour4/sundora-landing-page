"use client";

import { APARTMENTS } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FloorTabs } from "./floor-tabs";

export const ApartmentList = () => {
    const [active, setActive] = useState(0);
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [floorIdx, setFloorIdx] = useState(0);
    const isMobile = useIsMobile();

    const onClick = (idx: number) => {
        if (idx !== active) {
            setActive(idx);
            setFloorIdx(0);
        }
    };

    const floors = APARTMENTS[active].imageUrls;
    const hasFloors = floors.length > 1;

    return (
        <div className="relative mt-6 flex flex-col items-center justify-center overflow-hidden">
            <div
                className="relative flex w-fit flex-col items-center gap-y-3 bg-[#071230] px-10 lg:flex-row lg:rounded-full"
                style={{
                    backgroundImage: !isMobile
                        ? `url(/images_avif/apartment-1.avif)`
                        : undefined,
                }}
            >
                {APARTMENTS.map((tab, idx) => (
                    <div
                        key={tab.name}
                        ref={(el) => void (tabRefs.current[idx] = el)}
                        onClick={() => onClick(idx)}
                        className={cn(
                            "flex w-[204px] cursor-pointer items-center justify-center rounded-full px-5 py-2 text-xs font-medium text-[#BEC0C4] transition-colors lg:w-auto",
                            idx === active &&
                                "text-sundora-secondary font-bold",
                        )}
                        style={{
                            backgroundImage: `url(/images_avif/apartment-1.avif)`,
                        }}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>

            <div className="relative mt-6 flex w-full items-center justify-center gap-4 overflow-auto px-3">
                <div className="relative h-[350px] w-full overflow-hidden lg:h-[440px] lg:w-[650px]">
                    <div className="absolute inset-0 -z-10 animate-pulse bg-gray-200 lg:h-[440px] lg:w-[650px]" />
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={`${active}-${floorIdx}`}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={floors[floorIdx] ?? floors[0]}
                                alt={`${APARTMENTS[active].name} - tầng ${floorIdx + 1}`}
                                width={650}
                                height={440}
                                className="size-full object-contain lg:object-cover"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <FloorTabs
                count={floors.length}
                active={floorIdx}
                onChange={setFloorIdx}
                className={cn("invisible mt-2", hasFloors && "visible")}
            />
        </div>
    );
};
