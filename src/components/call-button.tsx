import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const CallButton = () => {
    return (
        <Button className="gap-2 rounded-full" asChild>
            <Link href="tel:0984868463">
                <Phone className="text-secondary size-5!" />
                <span className="from-secondary to-secondary-foreground bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                    0984 868 463
                </span>
            </Link>
        </Button>
    );
};
