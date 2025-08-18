"use client";

import { albra, sparkling } from "@/app/fonts";
import { HERO_IMG_URL, HERO_IMG_URL_MOBILE } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import Image from "next/image";
import { RegisterForm } from "./register-form";

export const Home = () => {
    useSectionObserver(ESectionId.HOME);
    const isMobile = useIsMobile();

    return (
        <section
            id={ESectionId.HOME}
            className="flex h-screen flex-col bg-cover bg-no-repeat"
            style={{
                backgroundImage: isMobile
                    ? `url(${HERO_IMG_URL_MOBILE})`
                    : `url(${HERO_IMG_URL})`,
            }}
        >
            <div className="relative flex flex-1 flex-col items-center justify-end text-white lg:mx-20 lg:flex-row-reverse xl:mx-36 2xl:mx-56">
                <div className="top-40 right-32 text-center lg:absolute lg:top-36 lg:right-28">
                    <h1
                        className={cn(
                            "text-4xl font-light uppercase lg:text-[55px]",
                            albra.className,
                        )}
                    >
                        Nắng Vàng
                    </h1>
                    <h2
                        className={cn(
                            "text-2xl lg:-ml-16 lg:text-3xl",
                            sparkling.className,
                        )}
                    >
                        Bên dòng sông thơ
                    </h2>
                </div>

                <div className="relative flex flex-col items-center justify-end lg:static">
                    <h2 className="mt-5 mb-6 text-base uppercase lg:ml-8 lg:-rotate-90">
                        sundora tower đà nẵng
                    </h2>
                    {isMobile && (
                        <Image
                            src="/images_avif/home-1-mobile.avif"
                            alt="Sundora house"
                            width={414}
                            height={679}
                            className="-mt-28 -mb-32 h-[600px] w-[414px] object-cover"
                        />
                    )}
                    <p className="absolute top-40 right-0 bottom-0 mt-40 -translate-x-1/6 text-sm leading-5 tracking-widest italic lg:top-2/3 lg:right-72 lg:mt-0 lg:text-lg lg:leading-8">
                        Sunshine <br />
                        Riverside <br />
                        Redefined
                    </p>
                </div>
            </div>

            <RegisterForm />
        </section>
    );
};
