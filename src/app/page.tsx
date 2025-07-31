import { Header } from "@/components/header";
import { NavigationDots } from "@/components/navigation-dots";
import { Home } from "@/modules/home";
import { Video } from "@/modules/video";

export default function AppPage() {
    return (
        <main className="relative flex flex-col">
            <Header />
            <NavigationDots />
            <Home />
            <Video />
        </main>
    );
}
