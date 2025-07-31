"use client";

import { albra, sparkling } from "@/app/fonts";
import { CallButton } from "@/components/call-button";
import { Logo } from "@/components/logo";
import { Sidebar } from "@/components/sidebar";
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
            className="from-secondary to-secondary-foreground flex h-screen flex-col bg-gradient-to-r bg-cover bg-no-repeat pt-16"
            style={{ backgroundImage: `url(${HERO_IMG_URL})` }}
        >
            <div className="flex items-center justify-between px-14">
                <Logo />
                <div className="flex items-center gap-6">
                    <CallButton />
                    <Sidebar />
                </div>
            </div>

            <div className="relative mt-9 flex flex-1 items-center justify-center px-14 text-white">
                <h2 className="absolute top-52 left-32 -rotate-90 text-4xl uppercase">
                    sundora tower đà nẵng
                </h2>
                <div className="absolute top-36 right-80 space-y-4">
                    <h1
                        className={cn(
                            "text-8xl font-light uppercase",
                            albra.className,
                        )}
                    >
                        Nắng Vàng
                    </h1>
                    <h2 className={cn("-ml-20 text-5xl", sparkling.className)}>
                        Bên dòng sông thơ
                    </h2>
                    <p className="mt-32 text-3xl leading-12 tracking-widest italic">
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
