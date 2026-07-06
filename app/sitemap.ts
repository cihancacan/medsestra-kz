import type { MetadataRoute } from 'next';
import { getSeoServiceSlugs, seoLocations, seoServices } from '@/lib/seo-service-data';

const BASE_URL = 'https://medsestra-kz.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now },
    { url: `${BASE_URL}/services/`, lastModified: now },
    { url: `${BASE_URL}/prices/`, lastModified: now },
    { url: `${BASE_URL}/corporate/`, lastModified: now },
    { url: `${BASE_URL}/contact/`, lastModified: now }
  ];

  const serviceLocationPages: MetadataRoute.Sitemap = seoServices.flatMap((service) =>
    getSeoServiceSlugs(service).flatMap((serviceSlug) =>
      seoLocations.map((location) => ({
        url: `${BASE_URL}/services/${serviceSlug}/${location.slug}/`,
        lastModified: now
      }))
    )
  );

  return [...staticPages, ...serviceLocationPages];
}
