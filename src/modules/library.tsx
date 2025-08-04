"use client";

import { albra } from "@/app/fonts";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const Library = () => {
    useSectionObserver(ESectionId.LIBRARY);
    return (
        <section
            id={ESectionId.LIBRARY}
            className="bg-accent-foreground flex h-screen items-center gap-x-32 pt-10"
        >
            <div>
                <Image
                    src="/images_avif/library-1.avif"
                    alt="Hình ảnh dự án"
                    width={385}
                    height={371}
                    className="shrink-0 object-cover"
                />
                <div className="from-secondary-foreground to-secondary flex h-14 items-center bg-gradient-to-b pl-8">
                    <p className="text-primary text-sm font-semibold">
                        Hình ảnh dự án
                    </p>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-8">
                    <h1
                        className={cn(
                            "text-5xl font-light text-white uppercase",
                            albra.className,
                        )}
                    >
                        thư viện
                    </h1>
                    <Button
                        variant="ghost"
                        className="border-secondary hover:text-secondary cursor-pointer rounded-full border-2 text-sm font-medium text-white hover:bg-transparent!"
                    >
                        <Icons.isolation className="shrink-0" />
                        <span>VR 360 DỰ ÁN</span>
                        <Icons.arrowLeft className="text-secondary shrink-0 rotate-180" />
                    </Button>
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
