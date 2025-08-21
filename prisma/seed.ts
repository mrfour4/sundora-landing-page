import { PostStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.post.deleteMany();

    await prisma.post.createMany({
        data: [
            {
                title: "Bài viết nháp đầu tiên",
                slug: "bai-viet-nhap-dau-tien",
                content: "Đây là nội dung bài viết nháp để test.",
                status: PostStatus.DRAFT,
            },
            {
                title: "Bài viết đã xuất bản",
                slug: "bai-viet-da-xuat-ban",
                thumbnail: "https://picsum.photos/seed/published/400/200",
                content: "Nội dung bài viết đã xuất bản.",
                status: PostStatus.PUBLISHED,
                publishedAt: new Date(),
            },
            {
                title: "Bài viết đã lưu trữ",
                slug: "bai-viet-da-luu-tru",
                content: "Nội dung bài viết đã bị lưu trữ.",
                status: PostStatus.ARCHIVED,
                publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 ngày trước
            },
        ],
    });

    console.log("✅ Seed data đã được tạo!");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
