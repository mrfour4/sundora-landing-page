import { NavigationDots } from "@/components/navigation-dots";
import { Home } from "@/modules/home";

export default function AppPage() {
    return (
        <main className="relative flex flex-col">
            <NavigationDots />
            <Home />
        </main>
    );
}
