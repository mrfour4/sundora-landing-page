// apartments.tsx (logic-only)
"use client";

import { APARTMENTS } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FloorTabs } from "./floor-tabs";

export const ApartmentList = () => {
    const [active, setActive] = useState(0);
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [floorIdx, setFloorIdx] = useState(0);

    const onClick = (idx: number) => {
        if (idx !== active) {
            setActive(idx);
            setFloorIdx(0);
        }
    };

    const floors = APARTMENTS[active].imageUrls;
    const hasFloors = floors.length > 1;

    return (
        <div className="relative flex flex-col items-center justify-center gap-6 overflow-hidden">
            <div
                className="relative flex w-fit items-center rounded-full px-10"
                style={{
                    backgroundImage: `url(/images_avif/apartment-1.avif)`,
                }}
            >
                {APARTMENTS.map((tab, idx) => (
                    <div
                        key={tab.name}
                        ref={(el) => void (tabRefs.current[idx] = el)}
                        onClick={() => onClick(idx)}
                        className={cn(
                            "cursor-pointer px-5 py-2 text-xs font-medium text-[#BEC0C4] transition-colors",
                            idx === active && "text-secondary font-bold",
                        )}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>

            <div className="relative flex w-full items-center justify-center gap-4 overflow-auto">
                <div className="relative h-[440px] w-[650px]">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={`${active}-${floorIdx}`}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={floors[floorIdx] ?? floors[0]}
                                alt={`${APARTMENTS[active].name} - tầng ${floorIdx + 1}`}
                                width={650}
                                height={440}
                                className="size-full object-cover"
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
                className={cn("invisible mt-1", hasFloors && "visible")}
            />
        </div>
    );
};
