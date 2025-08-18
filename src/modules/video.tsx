"use client";

import { Icons } from "@/components/icons";
import { HERO_IMG_URL_MOBILE } from "@/constants";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { ESectionId } from "@/types";
import { useEffect, useRef, useState } from "react";

export const Video = () => {
    useSectionObserver(ESectionId.VIDEO);

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);

        video.addEventListener("play", onPlay);
        video.addEventListener("pause", onPause);

        return () => {
            video.removeEventListener("play", onPlay);
            video.removeEventListener("pause", onPause);
        };
    }, []);

    const handleToggle = () => {
        const video = videoRef.current;

        if (!video) return;

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    return (
        <section
            id={ESectionId.VIDEO}
            className="relative h-dvh w-full"
            style={{ backgroundImage: `url(${HERO_IMG_URL_MOBILE})` }}
        >
            <video
                ref={videoRef}
                controls
                preload="none"
                playsInline
                poster="/images_avif/thumbnail.avif"
                loop
                className="aspect-video h-full"
            >
                <source src="/video/sundora-final.webm" type="video/webm" />
                <source src="/video/sundora-final.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
            </video>
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/50">
                    <button
                        onClick={handleToggle}
                        className="flex items-center justify-center"
                    >
                        <Icons.play className="size-14 xl:size-24 2xl:size-32" />
                    </button>
                </div>
            )}
        </section>
    );
};
