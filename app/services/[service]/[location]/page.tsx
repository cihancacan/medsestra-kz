import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { ServiceLocationClient } from '@/components/ServiceLocationClient';
import { getSeoLocation, getSeoService, locationLabel, seoLocations, seoServices } from '@/lib/seo-service-data';

type Props = { params: { service: string; location: string } };

export function generateStaticParams() {
  return seoServices.flatMap((service) => seoLocations.map((location) => ({ service: service.slug, location: location.slug })));
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
    alternates: { canonical: `/services/${service.slug}/${location.slug}/` },
    openGraph: {
      title: `${service.titleRu} ${place} | Medsestra.kz`,
      description: `${service.titleRu} в формате премиального ухода: дом, офис, семья, контроль качества и удобная запись через WhatsApp.`,
      url: `/services/${service.slug}/${location.slug}/`,
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

  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <ServiceLocationClient service={service} location={location} />
    </main>
  );
}
