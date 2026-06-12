import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://luismiguelagud.com';

function url(path: string, lastmod?: string): string {
  const lm = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
  return `  <url>\n    <loc>${SITE}${path}</loc>${lm}\n    <changefreq>monthly</changefreq>\n  </url>`;
}

export const GET: APIRoute = async () => {
  const libros    = await getCollection('libros');
  const articulos = await getCollection('articulos', ({ data }) =>
    data.tipo === 'propio' && data.publicado !== false
  );

  const today = new Date().toISOString().split('T')[0];

  const staticUrls = [
    url('/', today),
    url('/#sobre-mi'),
    url('/#libros'),
    url('/#articulos'),
    url('/#contacto'),
    url('/aviso-legal'),
    url('/politica-privacidad'),
  ];

  const libroUrls = libros.map(l =>
    url(`/libros/${l.slug}`, l.data.fecha_publicacion
      ? new Date(l.data.fecha_publicacion).toISOString().split('T')[0]
      : today)
  );

  const articuloUrls = articulos.map(a =>
    url(`/articulos/${a.slug}`, new Date(a.data.fecha).toISOString().split('T')[0])
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...libroUrls, ...articuloUrls].join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
