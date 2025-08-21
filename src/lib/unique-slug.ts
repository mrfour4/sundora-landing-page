import { prisma } from './prisma';
import { slugify } from './slugify';

export async function makeUniqueSlug(title: string) {
  const base = slugify(title);
  let slug = base || 'post';
  let i = 1;

  while (await prisma.post.findUnique({ where: { slug } })) {
    slug = `${base}-${i++}`;
  }
  return slug;
}
