"use client";

import { albra, sparkling } from "@/app/fonts";
import { HERO_IMG_URL } from "@/constants";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";
import { ESectionId } from "@/types";
import { RegisterForm } from "./register-form";

export const Home = () => {
    useSectionObserver(ESectionId.HOME);

    return (
        <section
            id={ESectionId.HOME}
            className="flex h-screen flex-col bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${HERO_IMG_URL})` }}
        >
            <div className="relative flex-1 px-20 text-white xl:px-36 2xl:px-56">
                <h2 className="absolute top-56 left-24 -rotate-90 text-lg uppercase xl:top-64 xl:left-48 2xl:top-72 2xl:left-56">
                    sundora tower đà nẵng
                </h2>
                <div className="absolute top-40 right-32 xl:top-48 xl:right-80 2xl:top-56">
                    <h1
                        className={cn(
                            "text-[55px] font-light uppercase",
                            albra.className,
                        )}
                    >
                        Nắng Vàng
                    </h1>
                    <h2
                        className={cn(
                            "-ml-16 text-3xl xl:-ml-20",
                            sparkling.className,
                        )}
                    >
                        Bên dòng sông thơ
                    </h2>
                    <p className="mt-20 text-lg leading-8 tracking-widest italic">
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
