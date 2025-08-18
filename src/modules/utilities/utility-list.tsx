import { albra } from "@/app/fonts";
import { UTILITIES_DATA } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    activeIndex: number;
    onChange: (index: number) => void;
};

export const UtilityList = ({ activeIndex, onChange }: Props) => {
    const isMobile = useIsMobile();

    return (
        <div className="mt-4 flex justify-between px-6 lg:ml-20 lg:px-0">
            <ul className="ml-auto flex h-[200px] flex-col justify-between lg:h-[258px] lg:w-[300px] lg:flex-1">
                {UTILITIES_DATA.map((uti, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <li
                            key={uti.imageUrl}
                            className={cn(
                                "flex w-fit cursor-pointer items-center gap-x-4 transition-transform ease-linear lg:gap-7",
                                isActive &&
                                    "border-primary -translate-x-20 border-b-2",
                            )}
                            onClick={() => onChange(index)}
                        >
                            <span
                                className={cn(
                                    "text-muted font-light opacity-40",
                                    albra.className,
                                    isActive &&
                                        "from-secondary to-secondary-foreground bg-gradient-to-b bg-clip-text text-2xl text-transparent opacity-100",
                                )}
                            >
                                0{index + 1}
                            </span>
                            <p
                                className={cn(
                                    "text-muted border-muted flex-1 border-b text-xs leading-loose uppercase lg:text-sm",
                                    isActive &&
                                        "text-secondary-foreground border-none font-semibold",
                                )}
                            >
                                {uti.name}
                            </p>
                        </li>
                    );
                })}
            </ul>
            <div
                className={cn(
                    "invisible relative ml-auto flex h-[88px] items-center gap-x-1.5 overflow-hidden",
                    isMobile && "hidden",
                )}
            >
                <Image
                    src={UTILITIES_DATA[activeIndex].imageUrl}
                    alt={UTILITIES_DATA[activeIndex].name}
                    width={126}
                    height={88}
                    className="shrink-0 object-cover"
                />
                <Image
                    src={UTILITIES_DATA[activeIndex].imageUrl}
                    alt={UTILITIES_DATA[activeIndex].name}
                    width={126}
                    height={88}
                    className="shrink-0 object-cover"
                />
            </div>
        </div>
    );
};
