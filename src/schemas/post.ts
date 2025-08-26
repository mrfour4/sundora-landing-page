import { PostStatus } from "@prisma/client";
import z from "zod";

export const createPostSchema = z.object({
    title: z
        .string()
        .min(1, { message: "Tiêu đề không được để trống" })
        .max(200, { message: "Tiêu đề tối đa 200 ký tự" }),
    thumbnail: z.url().nullish(),
    content: z.string().min(1),
    status: z.enum(PostStatus).default("DRAFT"),
});

export const updatePostSchema = createPostSchema.partial();
export const idSchema = z.cuid();

export type TCreatePost = z.infer<typeof createPostSchema>;
export type TUpdatePost = z.infer<typeof updatePostSchema>;
