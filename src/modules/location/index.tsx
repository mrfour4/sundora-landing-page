"use client";

import { albra, sparkling } from "@/app/fonts";
import { LOCATION_IMG } from "@/constants";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { TravelTimeline } from "./travel-timelines";

export const Location = () => {
    useSectionObserver(ESectionId.LOCATION);
    return (
        <section
            id={ESectionId.LOCATION}
            className="flex h-screen flex-col justify-center bg-cover bg-no-repeat px-24 pt-20"
            style={{ backgroundImage: `url(${LOCATION_IMG})` }}
        >
            <div
                className={cn(
                    "text-shadow-secondary text-5xl font-light text-white uppercase text-shadow-[0_0_10px]",
                    albra.className,
                )}
            >
                <h1>vị trí trung tâm</h1>
                <h2 className="ml-20">của trung tâm</h2>
            </div>
            <h2
                className={cn(
                    "from-secondary to-secondary-foreground -mt-3 bg-gradient-to-b bg-clip-text text-xl leading-16 text-transparent",
                    sparkling.className,
                )}
            >
                Hiếm hoi còn lại bên Sông Hàn
            </h2>

            <div className="w-1/2 text-sm text-white">
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
