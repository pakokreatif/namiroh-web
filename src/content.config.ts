import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/blog' }),
  schema: z.object({
    judul: z.string(),
    tanggal: z.string().optional(),
    ringkasan: z.string().optional(),
    gambar: z.string().optional(),
  }),
});

const produk = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/produk' }),
  schema: z.object({
    nama: z.string(),
    harga: z.string(),
    kategori: z.enum(['umroh', 'haji', 'wisata']),
    gambar: z.string().optional(),
    tersedia: z.boolean().default(true),
  }),
});

export const collections = { blog, produk };
