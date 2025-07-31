"use client";

import { albra, sparkling } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { OVERVIEW_IMG, PROJECT_INFO } from "@/constants";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { ReactSVG } from "react-svg";

export const Overview = () => {
    useSectionObserver(ESectionId.OVERVIEW);
    return (
        <div
            id={ESectionId.OVERVIEW}
            className="h-screen bg-cover bg-no-repeat px-40 pt-44"
            style={{ backgroundImage: `url(${OVERVIEW_IMG})` }}
        >
            <h1 className={cn("text-5xl text-white", sparkling.className)}>
                Được thiết kế dành riêng
            </h1>
            <div
                className={cn("mt-8 flex items-center gap-5", albra.className)}
            >
                <h3 className="text-secondary text-4xl font-light">
                    Cho những <br />
                    chủ nhân
                </h3>
                <div className="text-shadow-secondary flex items-center gap-1 text-7xl font-light text-white uppercase text-shadow-[0_0_10px]">
                    <h2>Duy mỹ</h2>
                    <ReactSVG src="/and.svg" />
                    <h2>Tinh tế</h2>
                </div>
            </div>
            <p className="text-secondary-foreground mt-1 w-1/2 text-lg">
                Với vị trí tuyệt đẹp bên bờ sông Hàn, sở hữu tầm nhìn không giới
                hạn cùng thiết kế ấn tượng và hệ tiện ích cao cấp, Sundora Tower
                tạo nên phong cách sống mới tại Đà Nẵng.
            </p>

            <div className="mt-8 grid w-1/2 grid-cols-2 gap-x-12 gap-y-4">
                {PROJECT_INFO.map((item) => (
                    <div key={item.label}>
                        <p className="text-lg text-white">
                            {item.label}:{" "}
                            <span className="text-xl font-bold">
                                {item.value}
                            </span>
                        </p>
                    </div>
                ))}
            </div>

            <Button
                variant="secondary"
                className="mt-10 rounded-full px-6 text-lg"
            >
                khám phá vị trí dự án
            </Button>
        </div>
    );
};
