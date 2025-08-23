"use client";

import { useState } from "react";
import { albra } from "@/app/fonts";
import { Icons } from "@/components/icons";
import { NewsDialog } from "@/components/news-dialog";
import { NEWS } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId, TNews } from "@/types";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

export const News = () => {
    useSectionObserver(ESectionId.NEWS);
    const [selectedNews, setSelectedNews] = useState<TNews | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const isMobile = useIsMobile();

    const handleNewsClick = (news: TNews) => {
        setSelectedNews(news);
        setDialogOpen(true);
    };

    if (isMobile) {
        return (
            <>
                <section
                    id={ESectionId.NEWS}
                    className="flex h-dvh flex-col overflow-hidden bg-white"
                >
                    <div className="px-6 pt-20 pb-6">
                        <h1
                            className={cn("text-3xl font-light uppercase text-center", albra.className)}
                        >
                            tin tức
                        </h1>
                    </div>

                    <div className="flex-1 flex items-center">
                        <Swiper
                            slidesPerView={1.2}
                            centeredSlides={true}
                            spaceBetween={20}
                            loop={false}
                            initialSlide={0}
                            grabCursor={true}
                            className="w-full h-full"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 15,
                                },
                                375: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 20,
                                },
                                425: {
                                    slidesPerView: 1.4,
                                    spaceBetween: 25,
                                },
                            }}
                        >
                            {NEWS.map((news, index) => (
                                <SwiperSlide key={index} className="pb-20">
                                    <div className="flex flex-col items-center h-full">
                                        <button
                                            onClick={() => handleNewsClick(news)}
                                            className="block cursor-pointer w-full"
                                        >
                                            <Image
                                                src={news.imageUrl}
                                                alt={news.title}
                                                width={300}
                                                height={400}
                                                className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
                                            />
                                        </button>
                                        <p className="text-primary mt-4 text-center px-4 text-sm font-semibold line-clamp-2">
                                            {news.title}
                                        </p>
                                        <button
                                            onClick={() => handleNewsClick(news)}
                                            className="text-secondary-foreground mt-3 flex items-center gap-x-2 text-xs font-semibold"
                                        >
                                            Xem chi tiết
                                            <Icons.arrowLeft className="text-secondary-foreground rotate-180" />
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                {selectedNews && (
                    <NewsDialog
                        open={dialogOpen}
                        onOpenChange={setDialogOpen}
                        title={selectedNews.title}
                        date={selectedNews.date || ""}
                        description={selectedNews.description || ""}
                        content={selectedNews.content}
                        markdownFile={selectedNews.markdownFile}
                        htmlFile={selectedNews.htmlFile}
                        imageUrl={selectedNews.imageUrl}
                    />
                )}
            </>
        );
    }

    return (
        <>
            <section
                id={ESectionId.NEWS}
                className="flex h-dvh flex-col overflow-auto justify-center px-24"
            >
                <h1
                    className={cn("text-5xl font-light uppercase", albra.className)}
                >
                    tin tức
                </h1>

                <div className="mt-7 flex justify-between gap-x-10">
                    {NEWS.map((news, index) => (
                        <div
                            key={index}
                            className={cn(index % 2 === 1 && "-translate-y-32")}
                        >
                            <button
                                onClick={() => handleNewsClick(news)}
                                className="block cursor-pointer"
                            >
                                <Image
                                    src={news.imageUrl}
                                    alt={news.title}
                                    width={270}
                                    height={357}
                                    className="shrink-0 object-cover transition-transform hover:scale-105"
                                />
                            </button>
                            <p className="text-primary mt-3 line-clamp-2 w-[180px] text-xs font-semibold">
                                {news.title}
                            </p>
                            <button
                                onClick={() => handleNewsClick(news)}
                                className="text-secondary-foreground mt-2 flex items-center gap-x-2 text-xs font-semibold hover:underline"
                            >
                                Xem chi tiết
                                <Icons.arrowLeft className="text-secondary-foreground rotate-180" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {selectedNews && (
                <NewsDialog
                    open={dialogOpen}
                    onOpenChange={setDialogOpen}
                    title={selectedNews.title}
                    date={selectedNews.date || ""}
                    description={selectedNews.description || ""}
                    content={selectedNews.content}
                    markdownFile={selectedNews.markdownFile}
                    htmlFile={selectedNews.htmlFile}
                    imageUrl={selectedNews.imageUrl}
                />
            )}
        </>
    );
};
