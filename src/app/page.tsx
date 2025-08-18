import { Header } from "@/components/header";
import { NavigationDots } from "@/components/navigation-dots";
// import { Apartment } from "@/modules/apartment";
// import { Contact } from "@/modules/contact";
// import { Ground } from "@/modules/ground";
import { Home } from "@/modules/home";
import { Inspiration } from "@/modules/inspiration";
// import { Library } from "@/modules/library";
// import { Location } from "@/modules/location";
// import { News } from "@/modules/news";
import { Overview } from "@/modules/overview";
// import { Partner } from "@/modules/partner";
// import { Privilege } from "@/modules/privilege";
// import { Utilities } from "@/modules/utilities";
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
            {/* <Location /> */}
            {/* <Privilege /> */}
            {/* <Utilities /> */}
            {/* <Ground /> */}
            {/* <Apartment /> */}
            {/* <Library /> */}
            {/* <Partner /> */}
            {/* <News /> */}
            {/* <Contact /> */}
        </main>
    );
}
