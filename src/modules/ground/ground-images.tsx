import { GROUNDS_DATA } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

type Props = {
    index: number;
    direction: number;
};

export const GroundImages = ({ index, direction }: Props) => {
    const currentItem = GROUNDS_DATA[index];
    return (
        <div className="relative mt-20 h-[460px] w-[650px] overflow-hidden">
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
                    className="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <Image
                        src={currentItem.imageUrl}
                        alt={currentItem.name}
                        width={650}
                        height={460}
                        className="w-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
