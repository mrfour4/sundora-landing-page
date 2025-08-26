"use server";

import { DEFAULT_TITLE } from "@/constants";
import { ensureAdmin } from "@/lib/admin";
import { parseFormData } from "@/lib/parse-form-data";
import { prisma } from "@/lib/prisma";
import { utapi } from "@/lib/server-upload";
import { makeUniqueSlug } from "@/lib/unique-slug";
import { errorMsg } from "@/lib/utils";
import { idSchema, updatePostSchema } from "@/schemas/post";
import { PostStatus, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

export async function createPost(_: unknown, _fd: FormData) {
    try {
        await ensureAdmin();
        const slug = await makeUniqueSlug(DEFAULT_TITLE);
        const post = await prisma.post.create({
            data: {
                title: DEFAULT_TITLE,
                slug,
            },
        });
        revalidatePath("/admin");
        revalidatePath("/");
        redirect(`/admin/post/${post.slug}`);
    } catch (error) {
        if (isRedirectError(error)) throw error;
        return errorMsg(error, "Không thể tạo bài viết.");
    }
}

export async function updatePost(_: unknown, formData: FormData) {
    try {
        await ensureAdmin();

        const id = idSchema.parse(formData.get("id"));
        const existing = await prisma.post.findUnique({
            where: { id },
            select: { id: true, thumbnail: true },
        });
        if (!existing)
            return { ok: false, message: "Không tìm thấy bài viết." };

        const data = parseFormData(formData, updatePostSchema);

        if (existing.thumbnail && existing.thumbnail !== data.thumbnail) {
            await deleteThumbnails([existing.thumbnail]);
        }

        let slug = data.slug;
        if (slug) {
            slug = await makeUniqueSlug(slug);
        }

        const updated = await prisma.post.update({
            where: { id },
            data: {
                ...data,
                slug,
            },
            select: { slug: true },
        });

        revalidatePath("/admin");
        revalidatePath("/");
        revalidatePath(`/admin/post/${updated.slug}`);

        return { ok: true, message: "Cập nhật thành công." };
    } catch (error) {
        return errorMsg(error, "Không thể cập nhật bài viết.");
    }
}

export async function deletePost(_: unknown, formData: FormData) {
    try {
        await ensureAdmin();
        const id = idSchema.parse(formData.get("id"));

        const post = await prisma.post.delete({ where: { id } });
        if (post.thumbnail) {
            await deleteThumbnails([post.thumbnail]);
        }

        revalidatePath("/admin");
        revalidatePath("/");

        return { ok: true, message: "Xóa thành công." };
    } catch (error) {
        return errorMsg(error, "Không thể xóa bài viết.");
    }
}

export async function deletePostsBulk(ids: string[]) {
    try {
        await ensureAdmin();
        const posts = await prisma.post.findMany({
            where: { id: { in: ids } },
            select: { thumbnail: true, slug: true },
        });

        const thumbnails = posts.reduce((acc, p) => {
            if (p.thumbnail !== null) acc.push(p.thumbnail);
            return acc;
        }, [] as string[]);

        await Promise.all([
            deleteThumbnails(thumbnails),
            prisma.post.deleteMany({ where: { id: { in: ids } } }),
        ]);

        revalidatePath("/admin");
        revalidatePath("/");

        posts.forEach((p) => {
            revalidatePath(`/admin/${p.slug}`);
        });

        return { ok: true, message: "Xóa thành công các bài viết đã chọn." };
    } catch (error) {
        return errorMsg(error, "Không thể xóa các bài viết đã chọn.");
    }
}

export async function archivePostsBulk(ids: string[]) {
    try {
        await ensureAdmin();
        const posts = await prisma.post.updateManyAndReturn({
            where: { id: { in: ids } },
            data: { status: PostStatus.ARCHIVED },
        });

        revalidatePath("/admin");
        revalidatePath("/");

        posts.forEach((p) => {
            revalidatePath(`/admin/${p.slug}`);
        });

        return {
            ok: true,
            message: "Lưu trữ thành công các bài viết đã chọn.",
        };
    } catch (error) {
        return errorMsg(error, "Không thể lưu trữ các bài viết đã chọn.");
    }
}

export async function savePost(slug: string, content: unknown) {
    try {
        await ensureAdmin();
        const existing = await prisma.post.findFirst({ where: { slug } });

        if (!existing) {
            return { ok: false, message: "Không tìm thấy bài viết." };
        }

        const updated = await prisma.post.update({
            where: { id: existing.id },
            data: {
                content: content as Prisma.JsonArray,
                status: PostStatus.ARCHIVED,
            },
            select: { slug: true },
        });

        revalidatePath("/admin");
        revalidatePath("/");
        revalidatePath(`/admin/post/${updated.slug}`);

        return { ok: true, message: "Lưu bài viết thành công." };
    } catch (error) {
        return errorMsg(error, "Không thể lưu bài viết.");
    }
}

export async function editPost(slug: string) {
    try {
        await ensureAdmin();
        const existing = await prisma.post.findFirst({ where: { slug } });

        if (!existing) {
            return { ok: false, message: "Không tìm thấy bài viết." };
        }

        const updated = await prisma.post.update({
            where: { id: existing.id },
            data: { status: PostStatus.DRAFT },
            select: { slug: true },
        });

        revalidatePath("/admin");
        revalidatePath("/");
        revalidatePath(`/admin/post/${updated.slug}`);

        return { ok: true, message: "Lưu bài viết thành công." };
    } catch (error) {
        return errorMsg(error, "Không thể lưu bài viết.");
    }
}

export async function getPostBySlug(slug: string) {
    return prisma.post.findFirst({
        where: {
            slug,
        },
    });
}

async function deleteThumbnails(thumbnails: string[]) {
    const validThumbnails = thumbnails.filter((t) => isValidUrl(t));
    if (!validThumbnails.length) return;

    const fileKeys = validThumbnails.map(
        (thumbnail) => new URL(thumbnail).pathname.split("/f/")[1],
    );
    await utapi.deleteFiles(fileKeys);
}

function isValidUrl(url: string | null) {
    if (!url) return false;
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}
