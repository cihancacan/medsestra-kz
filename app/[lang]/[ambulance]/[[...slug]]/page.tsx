import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AmbulanceSeoPage } from '@/components/AmbulanceSeoPage';
import {
  ambulanceHreflang,
  ambulanceLanguages,
  ambulanceLocale,
  ambulanceRouteSegments,
  ambulanceUi,
  getAllAmbulanceKeywords,
  getAllAmbulanceStaticParams,
  getAmbulanceAlternates,
  getAmbulanceHubUrl,
  getAmbulanceLocationUrl,
  getAmbulanceServiceUrl,
  getLocationKeywordCombinations,
  locationDisplayName,
  resolveAmbulancePage,
  type AmbulanceLang,
  type AmbulanceResolvedPage
} from '@/lib/ambulance-seo-data';
import { SITE_URL } from '@/lib/site-url';

type Props = {
  params: {
    lang: string;
    ambulance: string;
    slug?: string[];
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllAmbulanceStaticParams();
}

function validLanguage(value: string): value is AmbulanceLang {
  return ambulanceLanguages.includes(value as AmbulanceLang);
}

function canonicalPath(lang: AmbulanceLang, page: AmbulanceResolvedPage) {
  if (page.kind === 'service') return getAmbulanceServiceUrl(lang, page.service);
  if (page.kind === 'location') return getAmbulanceLocationUrl(lang, page.location);
  return getAmbulanceHubUrl(lang);
}

function metadataTitle(lang: AmbulanceLang, page: AmbulanceResolvedPage) {
  if (page.kind === 'service') return `${page.service.titles[lang]} | Medsestra.kz`;
  if (page.kind === 'location') {
    const place = locationDisplayName(lang, page.location);
    if (lang === 'ru') return `Частная скорая помощь ${place} | Medsestra.kz`;
    if (lang === 'kk') return `${place} жеке жедел жәрдем | Medsestra.kz`;
    return `Private ambulance in ${place} | Medsestra.kz`;
  }
  return `${ambulanceUi[lang].hubH1} | Medsestra.kz`;
}

function metadataDescription(lang: AmbulanceLang, page: AmbulanceResolvedPage) {
  if (page.kind === 'service') return page.service.descriptions[lang];
  if (page.kind === 'location') {
    const place = locationDisplayName(lang, page.location);
    if (lang === 'ru') return `Частная скорая помощь, медицинская транспортировка, перевозка лежачих пациентов, реанимобиль и корпоративные заявки — ${place}. Доступность и цена подтверждаются диспетчером.`;
    if (lang === 'kk') return `${place}: жеке жедел жәрдем, медициналық тасымалдау, төсек тартып жатқан пациенттерді тасымалдау, реанимобиль және корпоративтік өтінімдер. Қолжетімділік пен бағаны диспетчер растайды.`;
    return `Private ambulance, patient transportation, bedridden transport, critical care vehicles and corporate requests in ${place}. Availability and price are confirmed by dispatch.`;
  }
  return ambulanceUi[lang].hubLead;
}

export function generateMetadata({ params }: Props): Metadata {
  if (!validLanguage(params.lang)) return {};
  const page = resolveAmbulancePage(params.lang, params.ambulance, params.slug);
  if (!page) return {};

  const path = canonicalPath(params.lang, page);
  const alternates = getAmbulanceAlternates(
    page.kind === 'service'
      ? { service: page.service }
      : page.kind === 'location'
        ? { location: page.location }
        : undefined
  );
  const keywords = page.kind === 'service'
    ? page.service.keywords[params.lang]
    : page.kind === 'location'
      ? getLocationKeywordCombinations(params.lang, page.location)
      : getAllAmbulanceKeywords(params.lang);

  return {
    title: metadataTitle(params.lang, page),
    description: metadataDescription(params.lang, page),
    keywords,
    alternates: {
      canonical: path,
      languages: {
        ...alternates,
        'x-default': alternates['ru-KZ']
      }
    },
    openGraph: {
      title: metadataTitle(params.lang, page),
      description: metadataDescription(params.lang, page),
      url: `${SITE_URL}${path}`,
      siteName: 'Medsestra.kz',
      locale: ambulanceLocale[params.lang],
      alternateLocale: ambulanceLanguages
        .filter((lang) => lang !== params.lang)
        .map((lang) => ambulanceLocale[lang]),
      images: ['/images/Home.jpg'],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: metadataTitle(params.lang, page),
      description: metadataDescription(params.lang, page),
      images: ['/images/Home.jpg']
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    },
    other: {
      'content-language': ambulanceHreflang[params.lang]
    }
  };
}

export default function AmbulancePage({ params }: Props) {
  if (!validLanguage(params.lang)) notFound();
  if (params.ambulance !== ambulanceRouteSegments[params.lang].root) notFound();
  const page = resolveAmbulancePage(params.lang, params.ambulance, params.slug);
  if (!page) notFound();

  return <AmbulanceSeoPage lang={params.lang} page={page} />;
}
