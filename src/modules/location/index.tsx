"use client";

import { albra, sparkling } from "@/app/fonts";
import { LOCATION_IMG, LOCATION_IMG_MOBILE } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { TravelTimeline } from "./travel-timelines";

export const Location = () => {
    useSectionObserver(ESectionId.LOCATION);
    const isMobile = useIsMobile();

    return (
        <section
            id={ESectionId.LOCATION}
            className="flex h-dvh flex-col bg-cover bg-no-repeat px-6 pt-20 lg:justify-center lg:px-24"
            style={{
                backgroundImage: isMobile
                    ? `url(${LOCATION_IMG_MOBILE})`
                    : `url(${LOCATION_IMG})`,
            }}
        >
            <div
                className={cn(
                    "text-shadow-secondary text-center text-4xl font-light text-white uppercase text-shadow-[0_0_10px] lg:text-start lg:text-5xl",
                    albra.className,
                )}
            >
                <h1>vị trí trung tâm</h1>
                <h2 className="lg:ml-20">của trung tâm</h2>
            </div>
            <h2
                className={cn(
                    "from-secondary to-secondary-foreground -mt-3 bg-gradient-to-b bg-clip-text text-center text-base leading-16 text-transparent lg:text-start lg:text-xl",
                    sparkling.className,
                )}
            >
                Hiếm hoi còn lại bên Sông Hàn
            </h2>

            <div className="text-[9px] text-white lg:w-1/2 lg:text-sm">
                <p>
                    Giữa lòng Đà Nẵng nơi quỹ đất ven sông ngày càng trở nên
                    khan hiếm, dự án sở hữu vị trí vàng, gắn liền với bản sắc và
                    sự phát triển thịnh vượng của thành phố. Một giao điểm của
                    các trục kết nối hành chính thương mại du lịch trọng yếu,
                    một tọa độ kim cương có khả năng sinh lời bền vững theo thời
                    gian.
                </p>
            </div>

            <TravelTimeline />
        </section>
    );
};
