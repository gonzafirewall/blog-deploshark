import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      // Imagen de portada: puede ser un archivo local (optimizado por Astro)
      // o una URL externa (p. ej. imágenes viejas que quedaron en Blogger CDN).
      cover: z.union([image(), z.url()]).optional(),
      coverAlt: z.string().optional(),
      // Posts migrados desde el Blogger viejo (blog.deploshark.com en Blogger).
      legacy: z.boolean().default(false),
      originalUrl: z.url().optional(),
    }),
});

export const collections = { blog };
