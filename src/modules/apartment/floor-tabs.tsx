import { cn } from "@/lib/utils";
import { Underline } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
    count: number;
    active: number;
    onChange: (i: number) => void;
    className?: HTMLDivElement["className"];
};

export const FloorTabs = ({ count, active, onChange, className }: Props) => {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const [u, setU] = useState<Underline>({ left: 0, width: 0 });

    useEffect(() => {
        const el = refs.current[active];
        if (el) setU({ left: el.offsetLeft, width: el.offsetWidth });
    }, [active, count]);

    return (
        <div className={cn("relative w-fit pb-2", className)}>
            <div className="flex items-center gap-6">
                {Array.from({ length: count }).map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => void (refs.current[i] = el)}
                        onClick={() => onChange(i)}
                        className={cn(
                            "cursor-pointer px-3 py-2 text-[10px] text-[#5C5C5C] transition-colors",
                            i === active &&
                                "text-secondary-foreground font-bold",
                        )}
                    >
                        {`TẦNG ${i + 1}`}
                    </div>
                ))}
            </div>

            <div className="bg-muted pointer-events-none absolute right-0 bottom-0 left-0 h-px -translate-y-1.5" />
            <motion.div
                className="bg-primary absolute h-1"
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ left: u.left, width: u.width }}
            />
        </div>
    );
};
