import { Header } from "@/components/header";
import { NavigationDots } from "@/components/navigation-dots";
import { prisma } from "@/lib/prisma";
import { Apartment } from "@/modules/apartment";
import { Contact } from "@/modules/contact";
import { Ground } from "@/modules/ground";
import { Home } from "@/modules/home";
import { Inspiration } from "@/modules/inspiration";
import { Library } from "@/modules/library";
import { Location } from "@/modules/location";
import { Overview } from "@/modules/overview";
import { Partner } from "@/modules/partner";
import { Posts } from "@/modules/posts";
import { Privilege } from "@/modules/privilege";
import { Utilities } from "@/modules/utilities";
import { Video } from "@/modules/video";
import { PostStatus } from "@prisma/client";

export default async function AppPage() {
    const posts = await prisma.post.findMany({
        where: { status: PostStatus.PUBLISHED },
        orderBy: { updatedAt: "desc" },
    });

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
            <Ground />
            <Apartment />
            <Library />
            <Partner />
            <Posts data={posts} />
            <Contact />
        </main>
    );
}
