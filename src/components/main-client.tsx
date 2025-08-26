"use client";

import { Header } from "@/components/header";
import { NavigationDots } from "@/components/navigation-dots";
import { useMounted } from "@/hooks/use-mounted";
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
import { Post } from "@prisma/client";

type Props = {
    posts: Post[];
};

export const MainContentClient = ({ posts }: Props) => {
    const mounted = useMounted();

    if (!mounted) return null;

    return (
        <main className="relative flex w-full flex-col overflow-x-hidden">
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
};
