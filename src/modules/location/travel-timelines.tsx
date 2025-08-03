import { albra } from "@/app/fonts";
import { TRAVEL_NEARBY_DATA } from "@/constants";
import { cn } from "@/lib/utils";

export const TravelTimeline = () => {
    return (
        <div className="mt-8">
            {TRAVEL_NEARBY_DATA.map((group) => (
                <div key={group.duration}>
                    <div className="relative pl-3">
                        <div className="bg-secondary-foreground absolute top-1/2 left-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        <h3
                            className={cn(
                                "text-shadow-secondary text-2xl font-light text-white uppercase text-shadow-[0_0_10px]",
                                albra.className,
                            )}
                        >
                            {group.duration}
                        </h3>
                    </div>
                    <ul
                        className={cn(
                            "text-secondary border-secondary-foreground relative grid w-lg grid-cols-2 gap-x-4 gap-y-0.5 border-l border-dashed pt-2 pb-4 pl-3 text-[10px] leading-3.5",
                            group.locations.length < 5 && "grid-cols-1",
                        )}
                    >
                        {group.locations.map((loc, idx) => (
                            <li key={idx}>
                                {loc.name} ({loc.distance})
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
