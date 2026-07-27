import type { MetadataRoute } from 'next';
import {
  ambulanceLanguages,
  ambulanceLocations,
  ambulanceServices,
  getAmbulanceHubUrl,
  getAmbulanceLocationUrl,
  getAmbulanceServiceUrl
} from '@/lib/ambulance-seo-data';
import { getSeoServiceSlugs, seoLocations, seoServices } from '@/lib/seo-service-data';
import { SITE_URL } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now },
    { url: `${SITE_URL}/services/`, lastModified: now },
    { url: `${SITE_URL}/prices/`, lastModified: now },
    { url: `${SITE_URL}/corporate/`, lastModified: now },
    { url: `${SITE_URL}/contact/`, lastModified: now }
  ];

  const serviceLocationPages: MetadataRoute.Sitemap = seoServices.flatMap((service) =>
    getSeoServiceSlugs(service).flatMap((serviceSlug) =>
      seoLocations.map((location) => ({
        url: `${SITE_URL}/services/${serviceSlug}/${location.slug}/`,
        lastModified: now
      }))
    )
  );

  const ambulancePages: MetadataRoute.Sitemap = ambulanceLanguages.flatMap((lang) => [
    { url: `${SITE_URL}${getAmbulanceHubUrl(lang)}`, lastModified: now },
    ...ambulanceServices.map((service) => ({
      url: `${SITE_URL}${getAmbulanceServiceUrl(lang, service)}`,
      lastModified: now
    })),
    ...ambulanceLocations.map((location) => ({
      url: `${SITE_URL}${getAmbulanceLocationUrl(lang, location)}`,
      lastModified: now
    }))
  ]);

  return [...staticPages, ...serviceLocationPages, ...ambulancePages];
}
