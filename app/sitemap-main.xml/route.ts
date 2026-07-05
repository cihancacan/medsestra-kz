const BASE_URL = 'https://medsestra-kz.vercel.app';

const priorityUrls = [
  '/',
  '/services/',
  '/prices/',
  '/contact/',
  '/corporate/',
  '/services/medsestra-na-dom/almaty/',
  '/services/medsestra-na-dom/medeuskiy/',
  '/services/medsestra-na-dom/bostandyk/',
  '/services/medsestra-na-dom/almaly/',
  '/services/medsestra-na-dom/auezov/',
  '/services/medsestra-na-dom/talgar/',
  '/services/ukoly-na-dom/almaty/',
  '/services/ukoly-na-dom/medeuskiy/',
  '/services/kapelnitsa-na-dom/almaty/',
  '/services/kapelnitsa-na-dom/medeuskiy/',
  '/services/perevyazka-na-dom/almaty/',
  '/services/snyatie-shvov-na-dom/almaty/',
  '/services/family-care/almaty/',
  '/services/corporate-care/almaty/',
  '/services/recovery-iv/almaty/'
];

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = priorityUrls
    .map((path) => '  <url>\n    <loc>' + BASE_URL + path + '</loc>\n    <lastmod>' + lastmod + '</lastmod>\n  </url>')
    .join('\n');

  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls +
    '\n</urlset>\n';

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate'
    }
  });
}
