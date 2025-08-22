"use server";

import { DEFAULT_TITLE } from "@/constants";
import { ensureAdmin } from "@/lib/admin";
import { parseFormData } from "@/lib/parse-form-data";
import { prisma } from "@/lib/prisma";
import { makeUniqueSlug } from "@/lib/unique-slug";
import { errorMsg } from "@/lib/utils";
import { idSchema, updatePostSchema } from "@/schemas/post";
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
                content: "",
                slug,
            },
        });
        revalidatePath("/admin");
        revalidatePath("/");
        redirect(`/admin/post/${post.slug}`);
    } catch (error) {
        if (isRedirectError(error)) throw error;
        return errorMsg(error, "Tạo bài viết thất bại.");
    }
}

export async function updatePost(_: unknown, formData: FormData) {
    try {
        await ensureAdmin();

        const id = idSchema.parse(formData.get("id"));
        const existing = await prisma.post.findUnique({
            where: { id },
            select: { id: true, title: true, slug: true },
        });
        if (!existing) return { ok: false, message: "Bài viết không tồn tại." };

        const data = parseFormData(formData, updatePostSchema);

        const updated = await prisma.post.update({
            where: { id },
            data,
            select: { slug: true },
        });

        revalidatePath("/admin");
        revalidatePath("/");
        revalidatePath(`/admin/post/${updated.slug}`);

        return { ok: true, message: "Cập nhật thành công." };
    } catch (error) {
        return errorMsg(error, "Cập nhật thất bại.");
    }
}

export async function deletePost(_: unknown, formData: FormData) {
    try {
        await ensureAdmin();
        const id = idSchema.parse(formData.get("id"));

        await prisma.post.delete({ where: { id } });
        revalidatePath("/admin");
        revalidatePath("/");

        return { ok: true, message: "Đã xóa bài viết." };
    } catch (error) {
        return errorMsg(error, "Không thể xóa bài viết.");
    }
}
