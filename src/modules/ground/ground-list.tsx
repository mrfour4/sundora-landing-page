import { Icons } from "@/components/icons";
import { GROUNDS_DATA } from "@/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const GroupList = () => {
    const [activeId, setActiveId] = useState(3);
    return (
        <ul className="mt-8 inline-flex flex-col space-y-4">
            {GROUNDS_DATA.map((ground, index) => (
                <li
                    key={index}
                    className={cn(
                        "flex cursor-pointer items-center gap-x-3 border-b pb-1 text-lg text-[#C5B9A6]/50 transition-all",
                        activeId === index &&
                            "text-secondary-foreground border-b-primary border-b-2 font-semibold opacity-100",
                    )}
                    onClick={() => setActiveId(index)}
                >
                    {ground}
                    <Icons.arrowLeft className="ml-auto rotate-180" />
                </li>
            ))}
        </ul>
    );
};
