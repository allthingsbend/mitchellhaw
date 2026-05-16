import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const pages = [
    '/',
    '/about/',
    '/contact/',
    '/services/seo/',
    '/services/ai-search/',
    '/services/video-marketing/',
    '/sitemap-html/',
  ];

  const site = 'https://mitchellhaw.com';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${site}${page}</loc>
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
