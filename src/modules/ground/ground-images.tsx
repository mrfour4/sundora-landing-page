import { GROUNDS_DATA } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

type Props = {
    index: number;
};

export const GroundImages = ({ index }: Props) => {
    const currentItem = GROUNDS_DATA[index];

    return (
        <div className="relative mt-auto h-[272px] w-full overflow-hidden lg:mt-20 lg:h-[460px] lg:w-[650px]">
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
                    className="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <div className="absolute inset-0 -z-10 h-[272px] translate-y-4 animate-pulse bg-gray-200 lg:h-[400px]" />
                    <Image
                        src={currentItem.imageUrl}
                        alt={currentItem.name}
                        width={650}
                        height={460}
                        className="h-[272px] w-full object-cover lg:h-[460px] lg:w-[650px]"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
