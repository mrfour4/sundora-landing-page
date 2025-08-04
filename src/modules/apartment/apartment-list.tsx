"use client";

import { APARTMENTS } from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ApartmentList = () => {
    const [active, setActive] = useState("STUDIO");
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const el = tabRefs.current[APARTMENTS.indexOf(active)];
        if (el) {
            setUnderlineStyle({
                left: el.offsetLeft,
                width: el.offsetWidth,
            });
        }
    }, [active]);

    return (
        <div className="border-secondary-foreground relative flex w-fit items-center rounded-full border-2 bg-white px-14">
            {APARTMENTS.map((tab, idx) => (
                <div
                    key={tab}
                    ref={(el) => void (tabRefs.current[idx] = el)}
                    onClick={() => setActive(tab)}
                    className={`cursor-pointer px-4 py-2 text-sm font-medium transition-colors ${
                        tab === active
                            ? "text-primary font-bold!"
                            : "text-secondary-foreground"
                    }`}
                >
                    {tab}
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
    );
};
