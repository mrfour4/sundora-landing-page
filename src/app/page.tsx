import { Header } from "@/components/header";
import { NavigationDots } from "@/components/navigation-dots";
import { Home } from "@/modules/home";
import { Inspiration } from "@/modules/inspiration";
import { Location } from "@/modules/location";
import { Overview } from "@/modules/overview";
import { Privilege } from "@/modules/privilege";
import { Utilities } from "@/modules/utilities";
import { Video } from "@/modules/video";

export default function AppPage() {
    return (
        <main className="relative flex flex-col">
            <Header />
            <NavigationDots />
            <Home />
            <Video />
            <Overview />
            <Inspiration />
            <Location />
            <Privilege />
            <Utilities />
        </main>
    );
}
