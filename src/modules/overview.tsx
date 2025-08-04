"use client";

import { albra, sparkling } from "@/app/fonts";
import { OVERVIEW_IMG, PROJECT_INFO } from "@/constants";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { ReactSVG } from "react-svg";

export const Overview = () => {
    useSectionObserver(ESectionId.OVERVIEW);
    return (
        <section
            id={ESectionId.OVERVIEW}
            className="flex h-screen flex-col justify-center bg-cover bg-no-repeat px-20 pt-20"
            style={{ backgroundImage: `url(${OVERVIEW_IMG})` }}
        >
            <h1 className={cn("text-3xl text-white", sparkling.className)}>
                Được thiết kế dành riêng
            </h1>
            <div
                className={cn("mt-4 flex items-center gap-5", albra.className)}
            >
                <h3 className="text-secondary text-xl font-light">
                    Cho những <br />
                    chủ nhân
                </h3>
                <div className="text-shadow-secondary mt-2 flex items-center gap-1 text-5xl font-light text-white uppercase text-shadow-[0_0_10px]">
                    <h2>Duy mỹ</h2>
                    <ReactSVG src="/and.svg" className="" />
                    <h2>Tinh tế</h2>
                </div>
            </div>
            <p className="text-secondary-foreground mt-2 w-1/2 pr-20 text-sm">
                Với vị trí tuyệt đẹp bên bờ sông Hàn, sở hữu tầm nhìn không giới
                hạn cùng thiết kế ấn tượng và hệ tiện ích cao cấp, Sundora Tower
                tạo nên phong cách sống mới tại Đà Nẵng.
            </p>

            <div className="mt-8 grid w-1/2 grid-cols-2 gap-x-12 gap-y-4">
                {PROJECT_INFO.map((item) => (
                    <div key={item.label}>
                        <p className="text-sm text-white">
                            {item.label}:{" "}
                            <span className="font-bold">{item.value}</span>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
