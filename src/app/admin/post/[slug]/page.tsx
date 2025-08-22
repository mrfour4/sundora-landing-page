import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = await prisma.post.findFirst({
        where: {
            slug,
        },
    });

    if (!slug) {
        notFound();
    }

    return <div>{post?.title}</div>;
}
