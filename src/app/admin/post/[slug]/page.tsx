import { EditorClient } from "@/components/editor";
import { prisma } from "@/lib/prisma";
import { PostStatus } from "@prisma/client";
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

    if (!post) {
        notFound();
    }

    return (
        <EditorClient
            value={post?.content}
            readOnly={post.status !== PostStatus.DRAFT}
        />
    );
}
