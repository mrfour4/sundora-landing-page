import { parseFormData } from '@/lib/parse-form-data';
import { prisma } from '@/lib/prisma';
import { makeUniqueSlug } from '@/lib/unique-slug';
import { createNewsSchema, updateNewsSchema } from '@/schemas/news';

export async function createNews(formData: FormData) {
  const data = parseFormData(formData, createNewsSchema);
  const slug = await makeUniqueSlug(data.title);

  return prisma.post.create({
    data: {
      ...data,
      slug,
    },
  });
}

export async function updateNews(id: string, formData: FormData) {
  const data = parseFormData(formData, updateNewsSchema);
  return prisma.post.update({
    where: { id },
    data,
  });
}

export async function deleteNews(id: string) {
  await prisma.post.delete({ where: { id } });
  return { ok: true };
}

export async function listNews() {
  return prisma.post.findMany();
}

export async function getPublishedNews() {
  return prisma.post.findMany({
    where: {
      status: 'PUBLISHED',
    },
  });
}

export async function getNewsById(id: string) {
  return prisma.post.findUnique({ where: { id } });
}
