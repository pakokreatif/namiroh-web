import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'pakokreatif/namiroh-web',
    branchPrefix: 'keystatic/',
  },
  ui: {
    brand: { name: 'An Namiroh CMS' },
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'judul',
      path: 'src/content/blog/*',
      format: { contentField: 'isi' },
      schema: {
        judul: fields.slug({ name: { label: 'Judul' } }),
        tanggal: fields.date({ label: 'Tanggal Terbit' }),
        ringkasan: fields.text({ label: 'Ringkasan', multiline: true }),
        gambar: fields.image({ label: 'Gambar Utama', directory: 'public/images/blog' }),
        isi: fields.markdoc({ label: 'Isi Artikel' }),
      },
    }),
    produk: collection({
      label: 'Katalog Produk',
      slugField: 'nama',
      path: 'src/content/produk/*',
      format: { contentField: 'deskripsi' },
      schema: {
        nama: fields.slug({ name: { label: 'Nama Produk' } }),
        harga: fields.text({ label: 'Harga' }),
        kategori: fields.select({
          label: 'Kategori',
          options: [
            { label: 'Paket Umroh', value: 'umroh' },
            { label: 'Paket Haji', value: 'haji' },
            { label: 'Wisata Religi', value: 'wisata' },
          ],
          defaultValue: 'umroh',
        }),
        gambar: fields.image({ label: 'Foto Produk', directory: 'public/images/produk' }),
        tersedia: fields.checkbox({ label: 'Masih Tersedia', defaultValue: true }),
        deskripsi: fields.markdoc({ label: 'Deskripsi Produk' }),
      },
    }),
  },
});
