import { MainContentClient } from "@/components/main-client";
import { prisma } from "@/lib/prisma";
import { PostStatus } from "@prisma/client";

export default async function AppPage() {
    const posts = await prisma.post.findMany({
        where: { status: PostStatus.PUBLISHED },
        orderBy: { publishedAt: "desc" },
    });

    return <MainContentClient posts={posts} />;
}
