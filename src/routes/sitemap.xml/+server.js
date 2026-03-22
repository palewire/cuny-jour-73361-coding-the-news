import { SITE_URL } from '$lib/config.js';
import { base } from '$app/paths';

export const prerender = true;

const scriptModules = import.meta.glob('/src/content/scripts/*.svx');
const gradingModules = import.meta.glob('/src/content/grading/*.svx');

export function GET() {
  const siteBase = `${SITE_URL}${base}`;

  const scriptSlugs = Object.keys(scriptModules).map((path) =>
    path.split('/').pop().replace('.svx', '')
  );

  const gradingSlugs = Object.keys(gradingModules).map((path) =>
    path.split('/').pop().replace('.svx', '')
  );

  const urls = [
    `${siteBase}/`,
    ...scriptSlugs.map((slug) => `${siteBase}/scripts/${slug}/`),
    ...gradingSlugs.map((slug) => `${siteBase}/grading/${slug}/`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url>\n    <loc>${loc}</loc>\n  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
