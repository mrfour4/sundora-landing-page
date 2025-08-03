import { albra } from "@/app/fonts";
import { Icons } from "@/components/icons";
import { UTILITIES_DATA } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const UtilityList = () => {
    const [activeId, setActiveId] = useState(0);
    return (
        <div className="mt-16 ml-24 flex items-end gap-10">
            <ul className="space-y-8">
                {UTILITIES_DATA.map((uti, index) => {
                    const isActive = activeId === index;
                    return (
                        <li
                            key={index}
                            className={cn(
                                "flex w-fit cursor-pointer items-center gap-7 transition-transform ease-linear",
                                isActive &&
                                    "border-primary -translate-x-20 border-b-2",
                            )}
                            onClick={() => setActiveId(index)}
                        >
                            <span
                                className={cn(
                                    "text-muted text-3xl font-light opacity-40",
                                    albra.className,
                                    isActive &&
                                        "from-secondary to-secondary-foreground bg-gradient-to-b bg-clip-text text-5xl text-transparent opacity-100",
                                )}
                            >
                                0{index + 1}
                            </span>
                            <p
                                className={cn(
                                    "text-muted border-muted flex-1 border-b text-lg leading-loose uppercase",
                                    isActive &&
                                        "text-secondary-foreground border-none text-2xl font-semibold",
                                )}
                            >
                                {uti}
                            </p>
                        </li>
                    );
                })}
            </ul>
            <div className="relative ml-auto flex h-40 items-center gap-x-1.5 overflow-hidden">
                <Icons.arrowLeft className="absolute top-1/2 right-1/6 rotate-180 cursor-pointer text-white" />
                <Image
                    src="/images_avif/utilities-3.avif"
                    alt=""
                    width={232}
                    height={162}
                    className="shrink-0 object-cover"
                />
                <Image
                    src="/images_avif/utilities-4.avif"
                    alt=""
                    width={232}
                    height={162}
                    className="shrink-0 object-cover"
                />
            </div>
        </div>
    );
};
