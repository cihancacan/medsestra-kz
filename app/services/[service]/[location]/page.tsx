import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { ServiceLocationClient } from '@/components/ServiceLocationClient';
import {
  englishLocationLabel,
  getSeoLocation,
  getSeoService,
  getSeoServiceSlugs,
  isEnglishServiceSlug,
  locationLabel,
  seoLocations,
  seoServices
} from '@/lib/seo-service-data';
import { SITE_URL } from '@/lib/site-url';

type Props = { params: { service: string; location: string } };

export function generateStaticParams() {
  return seoServices.flatMap((service) =>
    getSeoServiceSlugs(service).flatMap((serviceSlug) =>
      seoLocations.map((location) => ({ service: serviceSlug, location: location.slug }))
    )
  );
}

function placeName(location: NonNullable<ReturnType<typeof getSeoLocation>>) {
  if (location.type === 'district') return `${location.nameRu}, Алматы`;
  if (location.type === 'region') return `${location.nameRu}, Алматинская область`;
  return location.nameRu;
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getSeoService(params.service);
  const location = getSeoLocation(params.location);
  if (!service || !location) return {};

  const isEnglishRoute = isEnglishServiceSlug(params.service, service);
  const canonicalServiceSlug = isEnglishRoute ? params.service : service.slug;
  const canonicalPath = `/services/${canonicalServiceSlug}/${location.slug}/`;

  if (isEnglishRoute) {
    const place = englishLocationLabel(location);
    const description = `${service.titleEn} in ${place}: selected nurses, organized home visits, WhatsApp booking and RU/KZ/EN support. ${service.descriptionEn}`;

    return {
      title: `${service.titleEn} in ${place} | Medsestra.kz`,
      description,
      keywords: [
        `${service.titleEn} ${place}`,
        `${service.titleEn} Almaty`,
        `home nurse ${place}`,
        `private nurse ${place}`,
        `nurse at home ${place}`,
        `nursing services ${place}`,
        ...service.keywords.map((keyword) => `${keyword} ${place}`)
      ],
      alternates: { canonical: canonicalPath },
      openGraph: {
        title: `${service.titleEn} in ${place} | Medsestra.kz`,
        description,
        url: `${SITE_URL}${canonicalPath}`,
        siteName: 'Medsestra.kz',
        locale: 'en_US',
        alternateLocale: ['ru_KZ', 'kk_KZ'],
        type: 'website'
      }
    };
  }

  const place = placeName(location);
  const kzPlace = location.nameKz ?? location.nameRu;
  const description = `${service.titleRu} ${locationLabel(location)}: аккуратная организация визита, проверенные медсёстры, запись через WhatsApp и поддержка RU/KZ/EN. ${service.shortRu}`;
  return {
    title: `${service.titleRu} ${place} | Medsestra.kz`,
    description,
    keywords: [
      `${service.titleRu} ${place}`,
      `${service.titleRu} ${location.nameRu}`,
      `${service.titleKz} ${kzPlace}`,
      `${service.titleEn} ${place}`,
      `${service.titleEn} Almaty`,
      ...service.keywords.map((keyword) => `${keyword} ${location.nameRu}`)
    ],
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${service.titleRu} ${place} | Medsestra.kz`,
      description: `${service.titleRu} в формате премиального ухода: дом, офис, семья, контроль качества и удобная запись через WhatsApp.`,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: 'Medsestra.kz',
      locale: 'ru_KZ',
      alternateLocale: ['kk_KZ', 'en_US'],
      type: 'website'
    }
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const service = getSeoService(params.service);
  const location = getSeoLocation(params.location);
  if (!service || !location) notFound();

  const isEnglishRoute = isEnglishServiceSlug(params.service, service);

  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <ServiceLocationClient service={service} location={location} initialLang={isEnglishRoute ? 'EN' : 'RU'} serviceSlug={params.service} />
    </main>
  );
}
