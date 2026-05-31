'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/content';
import { seoLocations, seoServices, type SeoLocation, type SeoService } from '@/lib/seo-service-data';
import type { Lang } from '@/lib/pages-i18n';

type Props = { service: SeoService; location: SeoLocation };

function place(location: SeoLocation, lang: Lang) {
  const name = lang === 'KZ' && location.nameKz ? location.nameKz : location.nameRu;
  if (location.type === 'district') return lang === 'EN' ? `${location.nameRu}, Almaty` : `${name}, ${lang === 'KZ' ? 'Алматы' : 'Алматы'}`;
  if (location.type === 'region') return lang === 'EN' ? `${location.nameRu}, Almaty Region` : `${name}, ${lang === 'KZ' ? 'Алматы облысы' : 'Алматинская область'}`;
  return name;
}

function serviceTitle(service: SeoService, lang: Lang) {
  if (lang === 'KZ') return service.titleKz;
  if (lang === 'EN') return service.titleEn;
  return service.titleRu;
}

function serviceDescription(service: SeoService, lang: Lang) {
  if (lang === 'KZ') return service.descriptionKz;
  if (lang === 'EN') return service.descriptionEn;
  return service.descriptionRu;
}

const ui = {
  RU: {
    badge: 'Медицинский уход на дому', cta: 'Записаться в WhatsApp', call: 'Позвонить', how: 'Как проходит визит', why: 'Почему Medsestra.kz', whyH: 'Не объявление, а организованный сервис', whyT: 'Medsestra.kz отбирает медсестёр, проверяет документы, контролирует опыт, качество общения и уровень сервиса. У пациента есть понятный контакт до визита, во время визита и после него.', zone: 'Зона обслуживания', other: 'Другие услуги', otherH: 'Выбрать другой уход', nearby: 'Близкие зоны', nearbyH: 'Найти услугу рядом', faq: 'Частые вопросы', steps: [['Вы оставляете заявку','Напишите в WhatsApp или позвоните. Укажите услугу, район и удобное время.'],['Мы подтверждаем детали','Уточняем адрес, формат процедуры, стоимость и возможность выезда.'],['Медсестра приезжает','Специалист выполняет визит аккуратно и спокойно.']] },
  KZ: {
    badge: 'Үйдегі медициналық күтім', cta: 'WhatsApp арқылы жазылу', call: 'Қоңырау шалу', how: 'Визит қалай өтеді', why: 'Неге Medsestra.kz', whyH: 'Хабарландыру емес, ұйымдасқан сервис', whyT: 'Medsestra.kz медбикелерді таңдайды, құжаттарын тексереді, тәжірибесін және қарым-қатынас сапасын бақылайды. Пациентте визитке дейін, визит кезінде және кейін түсінікті байланыс болады.', zone: 'Қызмет көрсету аймағы', other: 'Басқа қызметтер', otherH: 'Басқа күтімді таңдау', nearby: 'Жақын аймақтар', nearbyH: 'Қызметті жақын жерден табу', faq: 'Жиі қойылатын сұрақтар', steps: [['Өтінім қалдырасыз','WhatsApp арқылы жазыңыз немесе қоңырау шалыңыз. Қызметті, ауданды және уақытты көрсетіңіз.'],['Біз мәліметтерді растаймыз','Мекенжайды, процедура форматын, бағаны және шығу мүмкіндігін нақтылаймыз.'],['Медбике келеді','Маман визитті мұқият және тыныш орындайды.']] },
  EN: {
    badge: 'Home medical care', cta: 'Book on WhatsApp', call: 'Call', how: 'How the visit works', why: 'Why Medsestra.kz', whyH: 'An organized service, not a random listing', whyT: 'Medsestra.kz selects nurses, checks documents, controls experience, communication quality and service level. The patient has a clear contact before, during and after the visit.', zone: 'Service area', other: 'Other services', otherH: 'Choose another care service', nearby: 'Nearby areas', nearbyH: 'Find the service nearby', faq: 'Frequently asked questions', steps: [['You send a request','Message us on WhatsApp or call. Share the service, district and preferred time.'],['We confirm the details','We confirm the address, procedure format, price and availability.'],['The nurse arrives','The specialist performs the visit carefully and calmly.']] }
};

export function ServiceLocationClient({ service, location }: Props) {
  const [lang, setLang] = useState<Lang>('RU');
  useEffect(() => {
    const saved = window.localStorage.getItem('medsestra_lang') as Lang | null;
    if (saved === 'RU' || saved === 'KZ' || saved === 'EN') setLang(saved);
    const onLang = (event: Event) => { const next = (event as CustomEvent<Lang>).detail; if (next === 'RU' || next === 'KZ' || next === 'EN') setLang(next); };
    window.addEventListener('medsestra-language-change', onLang);
    return () => window.removeEventListener('medsestra-language-change', onLang);
  }, []);

  const t = ui[lang];
  const p = place(location, lang);
  const title = `${serviceTitle(service, lang)} ${p}`;
  const description = serviceDescription(service, lang);
  const relatedServices = seoServices.filter((item) => item.slug !== service.slug).slice(0, 6);
  const relatedLocations = seoLocations.filter((item) => item.slug !== location.slug && (item.parentSlug === location.parentSlug || item.parentSlug === 'almaty' || item.slug === 'almaty')).slice(0, 8);

  return <>
    <section id="ru" className="relative min-h-[92svh] overflow-hidden bg-white pt-20"><picture><source media="(max-width: 768px)" srcSet={service.image.mobile} /><img src={service.image.desktop} alt={title} className="absolute inset-0 h-full w-full object-cover object-right" /></picture><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(240,250,255,0.86)_38%,rgba(214,242,252,0.42)_66%,rgba(214,242,252,0.10)_100%)]" /><div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" /><div className="relative z-10 mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl items-center px-5 py-12 md:px-8"><div className="max-w-3xl"><p className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">{t.badge}</p><h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl lg:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#071827]/68 md:text-xl md:leading-9">{description}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(title)}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">{t.cta}</a><a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{t.call}</a></div></div></div></section>
    <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{t.steps.map(([a,b], i) => <div key={a} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071827] text-sm font-black text-white">{i+1}</div><h2 className="text-2xl font-black tracking-[-0.04em]">{a}</h2><p className="mt-4 leading-7 text-[#071827]/62">{b}</p></div>)}</div></section>
    <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.why}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.whyH}</h2><p className="mt-6 text-lg leading-8 text-[#071827]/62">{t.whyT}</p></div><div className="grid gap-3 md:grid-cols-2">{service.bullets.map((item) => <div key={item} className="rounded-[1.5rem] bg-[#F5FBFE] p-5 font-black text-[#071827] ring-1 ring-[#D7EEF7]">{item}</div>)}</div></div></section>
    <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">{t.zone}</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{title}</h2><div className="mt-10 flex flex-wrap gap-3">{[p, ...location.nearby].map((item) => <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-black ring-1 ring-white/10">{item}</span>)}</div></div></section>
    <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.other}</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{t.otherH}</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{relatedServices.map((item) => <a key={item.slug} href={`/services/${item.slug}/${location.slug}/`} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-2xl font-black tracking-[-0.04em] text-[#071827]">{serviceTitle(item, lang)}</h3></a>)}</div></div></section>
    <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.nearby}</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{t.nearbyH}</h2><div className="mt-10 grid gap-4 md:grid-cols-4">{relatedLocations.map((item) => <a key={item.slug} href={`/services/${service.slug}/${item.slug}/`} className="rounded-[1.6rem] bg-[#F5FBFE] p-5 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{place(item, lang)}</h3></a>)}</div></div></section>
  </>;
}
