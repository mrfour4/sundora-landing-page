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
            <div className="absolute inset-0 -z-10 h-[480px] w-[550px] animate-pulse bg-gray-200" />
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={currentItem.imageUrl}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: "tween",
                            duration: 0.4,
                            ease: [0.2, 0, 0, 1],
                        },
                    }}
                    exit={{
                        opacity: 0,
                        x: -100,
                        transition: {
                            type: "tween",
                            duration: 0.3,
                            ease: "easeInOut",
                        },
                    }}
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
