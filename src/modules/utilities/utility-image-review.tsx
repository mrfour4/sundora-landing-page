"use client";

import { UTILITIES_DATA } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    active: string;
};

export const UtilityImageSlider = ({ active }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(() =>
        UTILITIES_DATA.findIndex((u) => u.imageUrl === active),
    );
    const [prevIndex, setPrevIndex] = useState(currentIndex);

    useEffect(() => {
        const newIndex = UTILITIES_DATA.findIndex((u) => u.imageUrl === active);
        if (newIndex !== currentIndex) {
            setPrevIndex(currentIndex);
            setCurrentIndex(newIndex);
        }
    }, [active, currentIndex]);

    const direction = currentIndex > prevIndex ? 1 : -1;
    const currentItem = UTILITIES_DATA[currentIndex];

    return (
        <div className="relative h-[480px] w-[550px] overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                    key={currentItem.imageUrl}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: "spring",
                            duration: 0.5,
                            bounce: 0.2,
                        },
                    }}
                    exit={{ opacity: 0, x: direction * -100 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={currentItem.imageUrl}
                        alt={currentItem.name}
                        width={550}
                        height={480}
                        className="h-full w-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
