"use client";

import { albra } from "@/app/fonts";
import { Icons } from "@/components/icons";
import { NEWS } from "@/constants";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const News = () => {
    useSectionObserver(ESectionId.NEWS);

    return (
        <section id={ESectionId.NEWS} className="h-screen px-40 pt-72">
            <h1
                className={cn("text-7xl font-light uppercase", albra.className)}
            >
                tin tức
            </h1>

            <div className="mt-14 flex gap-20">
                {NEWS.map((news, index) => (
                    <div
                        key={index}
                        className={cn(index % 2 === 1 && "-translate-y-32")}
                    >
                        <Link href={news.href}>
                            <Image
                                src={news.imageUrl}
                                alt={news.title}
                                width={336}
                                height={446}
                                className="shrink-0 object-cover"
                            />
                        </Link>
                        <p className="text-primary mt-5 font-semibold">
                            {news.title}
                        </p>
                        <Link
                            href={news.href}
                            className="text-secondary-foreground mt-2.5 flex items-center gap-x-2 font-semibold hover:underline"
                        >
                            Xem chi tiết
                            <Icons.arrowLeft className="text-secondary-foreground rotate-180" />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};
