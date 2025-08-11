import { GROUNDS_DATA } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

type Props = {
    index: number;
};

export const GroundImages = ({ index }: Props) => {
    const currentItem = GROUNDS_DATA[index];

    return (
        <div className="relative mt-20 h-[460px] w-[650px] overflow-hidden">
            {/* dùng mode="wait" để chờ item cũ exit xong rồi mới enter → tránh chồng chéo gây giật */}
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={currentItem.imageUrl}
                    // Luôn vào từ PHẢI → 0
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            // dùng tween để không overshoot
                            type: "tween",
                            duration: 0.4,
                            ease: [0.2, 0, 0, 1], // easeOut mượt, không nảy
                        },
                    }}
                    // Luôn thoát sang TRÁI
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
