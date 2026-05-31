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
  return {
    title: `${service.titleRu} ${place} | Medsestra.kz`,
    description: `${service.titleRu} ${locationLabel(location)}. ${service.shortRu} Проверенные медсёстры, контроль качества, запись через WhatsApp.`,
    keywords: [`${service.titleRu} ${place}`, `${service.titleRu} ${location.nameRu}`, `${service.titleKz} ${location.nameKz ?? location.nameRu}`, `${service.titleEn} ${place}`, ...service.keywords.map((keyword) => `${keyword} ${location.nameRu}`)],
    alternates: { canonical: `/services/${service.slug}/${location.slug}/` },
    openGraph: { title: `${service.titleRu} ${place} | Medsestra.kz`, description: service.shortRu, url: `/services/${service.slug}/${location.slug}/`, siteName: 'Medsestra.kz', type: 'website' }
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
