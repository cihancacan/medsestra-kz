import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { site } from '@/lib/content';
import { getSeoLocation, getSeoService, locationLabel, seoLocations, seoServices } from '@/lib/seo-service-data';

type Props = {
  params: { service: string; location: string };
};

export function generateStaticParams() {
  return seoServices.flatMap((service) => seoLocations.map((location) => ({ service: service.slug, location: location.slug })));
}

function placeName(location: NonNullable<ReturnType<typeof getSeoLocation>>) {
  if (location.type === 'district') return `${location.nameRu}, Алматы`;
  if (location.type === 'region') return `${location.nameRu}, Алматинская область`;
  return location.nameRu;
}

function patientAreaText(location: NonNullable<ReturnType<typeof getSeoLocation>>) {
  if (location.type === 'district') {
    return `Услуга доступна для пациентов в районе ${location.nameRu} города Алматы. Перед визитом мы уточняем адрес, удобное время, формат процедуры и контакт для связи.`;
  }
  if (location.type === 'region') {
    return `Услуга доступна для пациентов в ${location.nameRu} и рядом расположенных населённых пунктах Алматинской области. Возможность выезда подтверждается заранее с учётом времени, расстояния и выбранной услуги.`;
  }
  return 'Услуга доступна для пациентов в Алматы. Мы уточняем район, удобный адрес, время визита и подтверждаем детали до выезда медсестры.';
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getSeoService(params.service);
  const location = getSeoLocation(params.location);
  if (!service || !location) return {};

  const place = placeName(location);
  const title = `${service.titleRu} ${place} | Medsestra.kz`;
  const description = `${service.titleRu} ${locationLabel(location)}. ${service.shortRu} Проверенные медсёстры, контроль качества, запись через WhatsApp. Русский, қазақша, English.`;

  return {
    title,
    description,
    keywords: [
      `${service.titleRu} ${place}`,
      `${service.titleRu} ${location.nameRu}`,
      `${service.titleKz} ${location.nameKz ?? location.nameRu}`,
      `${service.titleEn} ${place}`,
      ...service.keywords.map((keyword) => `${keyword} ${location.nameRu}`),
      ...location.nearby.map((near) => `${service.titleRu} ${near}`)
    ],
    alternates: {
      canonical: `/services/${service.slug}/${location.slug}/`
    },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}/${location.slug}/`,
      siteName: 'Medsestra.kz',
      type: 'website'
    }
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const service = getSeoService(params.service);
  const location = getSeoLocation(params.location);
  if (!service || !location) notFound();

  const place = placeName(location);
  const whatsappText = `Здравствуйте, хочу записаться: ${service.titleRu} — ${place}`;
  const relatedServices = seoServices.filter((item) => item.slug !== service.slug).slice(0, 6);
  const relatedLocations = seoLocations.filter((item) => item.slug !== location.slug && (item.parentSlug === location.parentSlug || item.parentSlug === 'almaty' || item.slug === 'almaty')).slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `Medsestra.kz — ${service.titleRu} ${place}`,
    url: `https://medsestra.kz/services/${service.slug}/${location.slug}/`,
    telephone: site.phone,
    email: site.email,
    areaServed: [place, ...location.nearby],
    medicalSpecialty: ['Nursing', 'HomeHealthCare'],
    availableLanguage: ['ru', 'kk', 'en'],
    description: `${service.titleRu} ${place}. ${service.shortRu}`
  };

  const faq = [
    {
      q: `Как заказать ${service.titleRu.toLowerCase()} ${locationLabel(location)}?`,
      a: 'Напишите в WhatsApp, укажите услугу, район или адрес, удобное время и имя для связи. Мы подтвердим детали до визита.'
    },
    {
      q: 'Кто приедет на визит?',
      a: 'На визит приезжает выбранная медсестра. Мы проверяем документы, опыт, аккуратность, качество общения и контролируем уровень сервиса.'
    },
    {
      q: 'Можно ли получить срочный выезд?',
      a: 'Срочный выезд возможен при наличии свободной медсестры. Время и стоимость подтверждаются заранее.'
    },
    {
      q: 'На каких языках можно обратиться?',
      a: 'Основной язык обслуживания — русский. Также поддерживаются казахский и английский для удобной коммуникации с пациентами и семьями.'
    }
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };

  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section id="ru" className="relative min-h-[92svh] overflow-hidden bg-white pt-20">
        <picture>
          <source media="(max-width: 768px)" srcSet={service.image.mobile} />
          <img src={service.image.desktop} alt={`${service.titleRu} ${place}`} className="absolute inset-0 h-full w-full object-cover object-right" />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(240,250,255,0.84)_36%,rgba(214,242,252,0.40)_66%,rgba(214,242,252,0.10)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl items-center px-5 py-12 md:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7] backdrop-blur">
              Медицинский уход на дому · RU / KZ / EN
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl lg:text-8xl">
              {service.titleRu} {place}
            </h1>
            <p className="mt-4 text-base font-semibold text-[#071827]/45">{service.translitRu} — {place}</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#071827]/68 md:text-xl md:leading-9">{service.descriptionRu}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappText)}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">Записаться в WhatsApp</a>
              <a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="kk" className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">Русский</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">{service.titleRu}</h2>
            <p className="mt-4 leading-7 text-[#071827]/62">{service.shortRu} {patientAreaText(location)}</p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">Қазақша</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">{service.titleKz}</h2>
            <p className="mt-1 text-sm font-semibold text-[#071827]/45">{service.translitKz}</p>
            <p className="mt-4 leading-7 text-[#071827]/62">{service.descriptionKz}</p>
          </div>
          <div id="en" className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">English</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">{service.titleEn}</h2>
            <p className="mt-4 leading-7 text-[#071827]/62">{service.descriptionEn}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Pourquoi choisir Medsestra.kz</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Une société d’infirmières avec un contrôle clair</h2>
            <p className="mt-6 text-lg leading-8 text-[#071827]/62">
              Medsestra.kz organise le service de manière structurée : sélection des infirmières, vérification des documents, contrôle de l’expérience, qualité de communication et suivi du patient. Vous avez un interlocuteur clair avant, pendant et après le rendez-vous.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {Array.from(new Set(service.bullets.concat(['Infirmières sélectionnées', 'Documents vérifiés', 'Qualité contrôlée', 'Suivi après le rendez-vous']))).map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-[#F5FBFE] p-5 font-black text-[#071827] ring-1 ring-[#D7EEF7]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">Zone de service</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{service.titleRu} {locationLabel(location)}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">{patientAreaText(location)}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {[location.nameRu, ...(location.nameKz ? [location.nameKz] : []), ...location.nearby].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-black ring-1 ring-white/10">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Autres services disponibles</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Continuer vers un autre soin</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {relatedServices.map((item) => (
              <a key={item.slug} href={`/services/${item.slug}/${location.slug}/`} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7] transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">{item.titleEn}</p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#071827]">{item.titleRu}</h3>
                <p className="mt-2 text-sm font-semibold text-[#071827]/45">{item.translitRu}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Zones proches</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Trouver le service dans une autre zone</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {relatedLocations.map((item) => (
              <a key={item.slug} href={`/services/${service.slug}/${item.slug}/`} className="rounded-[1.6rem] bg-[#F5FBFE] p-5 ring-1 ring-[#D7EEF7] transition hover:-translate-y-1 hover:bg-[#EAF6FB]">
                <h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{item.nameRu}</h3>
                {item.nameKz && <p className="mt-1 text-sm font-semibold text-[#071827]/45">{item.nameKz}</p>}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">FAQ</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Questions fréquentes</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.q} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
                <h3 className="text-xl font-black tracking-[-0.03em]">{item.q}</h3>
                <p className="mt-4 leading-7 text-[#071827]/62">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
