"use client";

import { albra } from "@/app/fonts";
import { Icons } from "@/components/icons";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { Post } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { PostContentDialog } from "./post-dialog";

type Props = {
    data: Post[];
};

export const Posts = ({ data }: Props) => {
    useSectionObserver(ESectionId.NEWS);
    const [selected, setSelected] = useState<string | null>(null);

    const post = data.find((p) => p.id === selected) || null;

    return (
        <>
            <PostContentDialog
                open={!!post?.content}
                onOpenChange={() => setSelected(null)}
                post={post}
            />

            <section
                id={ESectionId.NEWS}
                className="flex h-dvh w-full flex-col justify-center overflow-hidden px-24"
            >
                <h1
                    className={cn(
                        "text-5xl font-light uppercase",
                        albra.className,
                    )}
                >
                    tin tức
                </h1>

                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="relative mt-7 w-full"
                >
                    <CarouselContent className="md:-ml-4 lg:-ml-10">
                        {data.map((post, index) => (
                            <CarouselItem
                                key={post.id}
                                className="xs:basis-1 cursor-pointer md:basis-1/2 md:pl-4 lg:basis-1/3 lg:pl-10"
                                onClick={() => setSelected(post.id)}
                            >
                                <div className="pt-10">
                                    <div
                                        className={cn(
                                            index % 2 === 1 &&
                                                "-translate-y-10",
                                        )}
                                    >
                                        <Image
                                            src={post.thumbnail!}
                                            alt={post.title}
                                            width={270}
                                            height={357}
                                            className="h-[270px] w-full shrink-0 rounded-t-md object-cover"
                                        />
                                        <p className="text-sundora-primary mt-3 line-clamp-2 text-xs font-semibold">
                                            {post.title}
                                        </p>
                                        <p className="text-sundora-secondary-foreground mt-2 flex items-center gap-x-2 text-xs font-semibold hover:underline">
                                            Xem chi tiết
                                            <Icons.arrowLeft className="text-sundora-secondary-foreground rotate-180" />
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Keep buttons clickable above slides */}
                    <CarouselPrevious className="pointer-events-auto z-50" />
                    <CarouselNext className="pointer-events-auto z-50" />
                </Carousel>
            </section>
        </>
    );
};
