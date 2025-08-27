"use client";

import { albra } from "@/app/fonts";
import { Icons } from "@/components/icons";
import { VRButton } from "@/components/vr-button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const Library = () => {
    useSectionObserver(ESectionId.LIBRARY);
    const isMobile = useIsMobile();

    const IMAGES_URL = [
        "/images_avif/library-4.avif",
        "/images_avif/library-5.avif",
    ];

    return (
        <section
            id={ESectionId.LIBRARY}
            className="bg-sundora-accent-foreground flex min-h-screen pt-20 pb-6 lg:items-center lg:gap-x-32 lg:pt-10"
        >
            <div className="mt-10 w-full lg:w-auto">
                {isMobile && (
                    <div className="mb-9 flex flex-col items-center gap-y-3">
                        <h1
                            className={cn(
                                "text-4xl font-light text-white uppercase",
                                albra.className,
                            )}
                        >
                            thư viện
                        </h1>

                        <VRButton showDetail />
                    </div>
                )}
                <Image
                    src="/images_avif/library-4.avif"
                    alt="Hình ảnh dự án"
                    width={385}
                    height={371}
                    className="w-full shrink-0 object-cover lg:w-auto"
                />
                <div className="from-sundora-secondary-foreground to-sundora-secondary flex h-14 items-center bg-gradient-to-b pl-8">
                    <p className="text-sundora-primary text-sm font-semibold">
                        Hình ảnh dự án
                    </p>
                </div>

                <div className="mt-6 flex items-baseline justify-center gap-x-2.5">
                    <Icons.arrowLeft className="text-sundora-secondary-foreground" />
                    <div
                        className={cn(
                            "text-sundora-secondary inline-flex items-baseline gap-x-1",
                            albra.className,
                        )}
                    >
                        <span className="text-2xl text-white">01</span>
                        <span>/</span>
                        <span>02</span>
                    </div>
                    <Icons.arrowLeft className="text-sundora-secondary rotate-180" />
                </div>
            </div>
            <div className={cn(isMobile && "hidden")}>
                <div className="flex items-center gap-8">
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
                <div className="mt-10 flex gap-x-24">
                    <div>
                        <Link href="#!" className="relative">
                            <Image
                                src="/images_avif/library-2.avif"
                                alt="Video dự án"
                                width={336}
                                height={243}
                            />
                            <Icons.play className="absolute top-1/2 left-1/2 size-12 -translate-1/2" />
                        </Link>
                        <p className="mt-4 text-sm font-medium text-white">
                            Video dự án
                        </p>
                    </div>
                    <div className="translate-y-24">
                        <Link href="#!">
                            <Image
                                src="/images_avif/library-3.avif"
                                alt="Tài liệu & CSBH"
                                width={336}
                                height={243}
                            />
                        </Link>
                        <p className="mt-4 text-sm font-medium text-white">
                            Tài liệu & CSBH
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
