"use client";

import { APARTMENTS } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const ApartmentList = () => {
    const [active, setActive] = useState(0);
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const [prev, setPrev] = useState(0);

    const direction = active > prev ? 1 : -1;

    useEffect(() => {
        const el = tabRefs.current[active];
        if (el) {
            setUnderlineStyle({
                left: el.offsetLeft,
                width: el.offsetWidth,
            });
        }
    }, [active]);

    const onClick = (idx: number) => {
        if (idx !== active) {
            setPrev(active);
            setActive(idx);
        }
    };

    return (
        <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-6 overflow-hidden">
            <div className="border-secondary-foreground relative flex w-fit items-center rounded-full border-2 bg-white px-14">
                {APARTMENTS.map((tab, idx) => (
                    <div
                        key={tab.name}
                        ref={(el) => void (tabRefs.current[idx] = el)}
                        onClick={() => onClick(idx)}
                        className={cn(
                            "text-secondary-foreground cursor-pointer px-4 py-2 text-sm font-medium transition-colors",
                            idx === active && "text-primary font-bold",
                        )}
                    >
                        {tab.name}
                    </div>
                ))}
                <motion.div
                    className="bg-secondary-foreground absolute bottom-0 h-[6px] translate-y-1 rounded-t-[4px]"
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{
                        left: underlineStyle.left,
                        width: underlineStyle.width,
                    }}
                />
            </div>

            <div className="relative flex w-full items-center justify-center gap-4 overflow-auto pr-4">
                <AnimatePresence mode="wait" initial={false}>
                    {APARTMENTS[active].imageUrls.map((url, index) => (
                        <motion.div
                            key={url}
                            initial={{ x: direction * 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -direction * 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative h-[339px] w-[500px]"
                        >
                            <Image
                                src={url}
                                alt={`Image ${index + 1}`}
                                width={500}
                                height={339}
                                className="size-full rounded-md object-cover"
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
