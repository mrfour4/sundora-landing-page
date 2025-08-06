"use client";

import { UTILITIES_DATA } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

type Props = {
    index: number;
    direction: number;
};

export const UtilityImage = ({ index, direction }: Props) => {
    const currentItem = UTILITIES_DATA[index];

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
