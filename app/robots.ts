import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: [
      SITE_URL + '/sitemap-main.xml',
      SITE_URL + '/sitemap.xml'
    ],
    host: 'medsestra.kz'
  };
}
