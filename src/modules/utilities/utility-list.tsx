import { albra } from "@/app/fonts";
import { UTILITIES_DATA } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    activeIndex: number;
    onChange: (index: number) => void;
};

export const UtilityList = ({ activeIndex, onChange }: Props) => {
    return (
        <div className="mt-4 ml-20 flex items-end justify-between">
            <ul className="flex h-[258px] w-[300px] flex-1 flex-col justify-between">
                {UTILITIES_DATA.map((uti, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <li
                            key={uti.imageUrl}
                            className={cn(
                                "flex w-fit cursor-pointer items-center gap-7 transition-transform ease-linear",
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
                                    "text-muted border-muted flex-1 border-b text-sm leading-loose uppercase",
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
            <div className="invisible relative ml-auto flex h-[88px] items-center gap-x-1.5 overflow-hidden">
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
