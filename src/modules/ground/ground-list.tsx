import { Icons } from "@/components/icons";
import { GROUNDS_DATA } from "@/constants";
import { cn } from "@/lib/utils";

type Props = {
    activeIndex: number;
    onChange: (index: number) => void;
};

export const GroupList = ({ activeIndex, onChange }: Props) => {
    return (
        <ul className="mt-8 inline-flex h-[300px] flex-col space-y-4">
            {GROUNDS_DATA.map((ground, index) => {
                const isActive = activeIndex === index;
                return (
                    <li
                        key={index}
                        className={cn(
                            "flex cursor-pointer items-center gap-x-3 border-b pb-1 text-lg text-[#C5B9A6]/50 transition-all",
                            isActive &&
                                "text-secondary-foreground border-b-primary border-b-2 font-semibold opacity-100",
                        )}
                        onClick={() => onChange(index)}
                    >
                        {ground.name}
                        <Icons.arrowLeft className="ml-auto rotate-180" />
                    </li>
                );
            })}
        </ul>
    );
};
