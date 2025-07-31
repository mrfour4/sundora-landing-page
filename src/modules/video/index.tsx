"use client";

import { useSectionObserver } from "@/hooks/use-section-observer";
import { ESectionId } from "@/types";
import { useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";

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
        <div
            id={ESectionId.VIDEO}
            className="bg-secondary relative aspect-video w-full"
        >
            <video
                ref={videoRef}
                controls
                preload="none"
                playsInline
                poster="/images/thumbnail.png"
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
                        <ReactSVG src="/play.svg" className="size-40" />
                    </button>
                </div>
            )}
        </div>
    );
};
