import { AlignLeft } from "lucide-react";
import { Button } from "./ui/button";

export const Sidebar = () => {
    return (
        <Button className="rounded-full" size="icon">
            <AlignLeft className="text-secondary" />
        </Button>
    );
};
