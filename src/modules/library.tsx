"use client";

import { albra } from "@/app/fonts";
import { Icons } from "@/components/icons";
import { VRButton } from "@/components/vr-button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const Library = () => {
    useSectionObserver(ESectionId.LIBRARY);
    const isMobile = useIsMobile();

    const IMAGES_URL = [
        "/images_avif/library-4.avif",
        "/images_avif/library-5.avif",
    ];

    const [idx, setIdx] = useState(0);
    const [dir, setDir] = useState<1 | -1>(1);

    const paginate = (d: 1 | -1) => {
        setDir(d);
        setIdx((i) => (i + d + IMAGES_URL.length) % IMAGES_URL.length);
    };

    const current = String(idx + 1).padStart(2, "0");
    const total = String(IMAGES_URL.length).padStart(2, "0");

    const variants = {
        enter: (d: 1 | -1) => ({ x: `${d * 100}%`, opacity: 0 }),
        center: { x: "0%", opacity: 1 },
        exit: (d: 1 | -1) => ({ x: `${-d * 100}%`, opacity: 0 }),
    };

    return (
        <section
            id={ESectionId.LIBRARY}
            className="bg-sundora-accent-foreground flex min-h-screen flex-col items-center justify-center gap-4 pt-20 pb-6 lg:gap-10"
        >
            <div className="space-y-2 text-center">
                <h1
                    className={cn(
                        "text-5xl font-light text-white uppercase",
                        albra.className,
                    )}
                >
                    thư viện
                </h1>

                <VRButton showDetail />
            </div>
            <div className="flex w-full items-center lg:gap-x-10 lg:px-16">
                <div className="flex-1">
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden lg:h-[350px]">
                        <div className="bg-sundora-secondary-foreground/40 absolute inset-0 -z-0 animate-pulse" />

                        <AnimatePresence
                            initial={false}
                            custom={dir}
                            mode="wait"
                        >
                            <motion.div
                                key={IMAGES_URL[idx]}
                                className="absolute inset-0"
                                custom={dir}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.35,
                                    ease: "easeInOut",
                                }}
                            >
                                <Image
                                    src={IMAGES_URL[idx]}
                                    alt="Hình ảnh dự án"
                                    fill
                                    quality={100}
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="from-sundora-secondary-foreground to-sundora-secondary flex h-14 items-center bg-gradient-to-b pl-8">
                        <p className="text-sundora-primary text-sm font-semibold">
                            Hình ảnh dự án
                        </p>
                    </div>

                    <div className="mt-6 flex items-baseline justify-center gap-x-2.5">
                        <Icons.arrowLeft
                            className="text-sundora-secondary-foreground cursor-pointer"
                            onClick={() => paginate(-1)}
                        />
                        <div
                            className={cn(
                                "text-sundora-secondary inline-flex items-baseline gap-x-1",
                                albra.className,
                            )}
                        >
                            <span className="text-2xl text-white">
                                {current}
                            </span>
                            <span>/</span>
                            <span>{total}</span>
                        </div>
                        <Icons.arrowLeft
                            className="text-sundora-secondary rotate-180 cursor-pointer"
                            onClick={() => paginate(1)}
                        />
                    </div>
                </div>
                <div className="hidden flex-1 lg:block">
                    <video
                        controls
                        preload="none"
                        playsInline
                        poster="/images_avif/thumbnail.avif"
                        loop
                        className="aspect-video h-full"
                    >
                        <source
                            src="/video/sundora-final.webm"
                            type="video/webm"
                        />
                        <source
                            src="/video/sundora-final.mp4"
                            type="video/mp4"
                        />
                        Trình duyệt của bạn không hỗ trợ video.
                    </video>
                    <p className="mt-4 text-sm font-medium text-white">
                        Video dự án
                    </p>
                </div>
            </div>
        </section>
    );
};
