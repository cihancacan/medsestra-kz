import {
  ambulanceLanguages,
  ambulanceServices,
  getAmbulanceHubUrl,
  getAmbulanceServiceUrl
} from '@/lib/ambulance-seo-data';
import { SITE_URL } from '@/lib/site-url';

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
  '/services/kapelnitsa-na-dom/almaty/',
  '/services/perevyazka-na-dom/almaty/',
  '/services/snyatie-shvov-na-dom/almaty/',
  '/services/nurse-at-home/almaty/',
  '/services/home-nurse/almaty/',
  '/services/private-nurse/almaty/',
  '/services/nurse-at-home/medeuskiy/',
  '/services/nurse-at-home/bostandyk/',
  '/services/nurse-at-home/talgar/',
  '/services/injections-at-home/almaty/',
  '/services/iv-drip-at-home/almaty/',
  '/services/wound-dressing-at-home/almaty/',
  '/services/stitch-removal-at-home/almaty/',
  '/services/family-care/almaty/',
  '/services/elderly-care-at-home/almaty/',
  '/services/corporate-care/almaty/',
  '/services/corporate-nurse/almaty/',
  '/services/recovery-iv/almaty/',
  '/services/wellness-iv-at-home/almaty/'
];

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const ambulancePriorityUrls = ambulanceLanguages.flatMap((lang) => [
    getAmbulanceHubUrl(lang),
    ...ambulanceServices.map((service) => getAmbulanceServiceUrl(lang, service))
  ]);
  const urls = [...priorityUrls, ...ambulancePriorityUrls]
    .map((path) => '  <url>\n    <loc>' + SITE_URL + path + '</loc>\n    <lastmod>' + lastmod + '</lastmod>\n  </url>')
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
