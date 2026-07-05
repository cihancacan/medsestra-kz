import type { MetadataRoute } from 'next';

const BASE_URL = 'https://medsestra-kz.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: [
      BASE_URL + '/sitemap-main.xml',
      BASE_URL + '/sitemap.xml'
    ],
    host: 'medsestra-kz.vercel.app'
  };
}
