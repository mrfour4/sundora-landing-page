import { PostStatus } from '@prisma/client';
import z from 'zod';

export const createNewsSchema = z.object({
  title: z.string().min(1).max(200),
  thumbnail: z.url().optional(),
  content: z.string().min(1),
  status: z.enum(PostStatus).default('DRAFT'),
});

export const updateNewsSchema = createNewsSchema.partial();

export type TCreatePostInput = z.infer<typeof createNewsSchema>;
export type TUpdatePostInput = z.infer<typeof updateNewsSchema>;
