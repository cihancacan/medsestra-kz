'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/content';
import { seoLocations, seoServices, type SeoLocation, type SeoService } from '@/lib/seo-service-data';
import { type Lang } from '@/lib/pages-i18n';

function serviceTitle(service: SeoService, lang: Lang) { if (lang === 'KZ') return service.titleKz; if (lang === 'EN') return service.titleEn; return service.titleRu; }
function serviceText(service: SeoService, lang: Lang) { if (lang === 'KZ') return service.descriptionKz; if (lang === 'EN') return service.descriptionEn; return service.descriptionRu; }
function areaName(location: SeoLocation, lang: Lang) { if (lang === 'EN') return location.slug === 'almaty' ? 'Almaty' : location.nameRu; if (lang === 'KZ' && location.nameKz) return location.nameKz; return location.nameRu; }
function place(location: SeoLocation, lang: Lang) { const name = areaName(location, lang); if (location.type === 'district') return `${name}, Алматы`; if (location.type === 'region') return lang === 'KZ' ? `${name}, Алматы облысы` : lang === 'EN' ? `${name}, Almaty Region` : `${name}, Алматинская область`; return name; }

const ui = {
  RU: { badge: 'Медицинский уход на дому', book: 'Записаться в WhatsApp', steps: 'Как проходит визит', trust: 'Почему Medsestra.kz', trustH: 'Не объявление, а организованный сервис', trustT: 'Medsestra.kz отбирает медсестёр, проверяет документы, контролирует опыт, качество общения и уровень сервиса. У пациента есть понятный контакт до визита, во время визита и после него.', zone: 'Зона обслуживания', other: 'Другие услуги', otherH: 'Выбрать другой уход', near: 'Близкие зоны', nearH: 'Найти услугу рядом' },
  KZ: { badge: 'Үйдегі медициналық күтім', book: 'WhatsApp арқылы жазылу', steps: 'Визит қалай өтеді', trust: 'Неге Medsestra.kz', trustH: 'Бұл хабарландыру емес, ұйымдасқан сервис', trustT: 'Medsestra.kz медбикелерді таңдайды, құжаттарын тексереді, тәжірибесін, қарым-қатынас сапасын және қызмет деңгейін бақылайды. Пациент визитке дейін, визит кезінде және одан кейін түсінікті байланыс алады.', zone: 'Қызмет көрсету аймағы', other: 'Басқа қызметтер', otherH: 'Басқа күтімді таңдау', near: 'Жақын аймақтар', nearH: 'Қызметті жақын жерден табу' },
  EN: { badge: 'Home medical care', book: 'Book on WhatsApp', steps: 'How the visit works', trust: 'Why Medsestra.kz', trustH: 'Not a listing, an organized service', trustT: 'Medsestra.kz selects nurses, checks documents, controls experience, communication quality and service level. The patient has a clear contact before, during and after the visit.', zone: 'Service area', other: 'Other services', otherH: 'Choose another care service', near: 'Nearby areas', nearH: 'Find the service nearby' }
};

const stepText = {
  RU: [['Вы оставляете заявку','Напишите в WhatsApp или позвоните. Укажите услугу, район и удобное время.'],['Мы подтверждаем детали','Уточняем адрес, формат процедуры, стоимость и возможность выезда.'],['Медсестра приезжает','Медсестра выполняет визит аккуратно и спокойно.'],['Мы остаёмся на связи','После визита можно уточнить организационные вопросы.']],
  KZ: [['Өтінім қалдырасыз','WhatsApp арқылы жазыңыз немесе қоңырау шалыңыз. Қызметті, ауданды және уақытты көрсетіңіз.'],['Біз мәліметтерді растаймыз','Мекенжайды, процедура форматын, құнын және шығу мүмкіндігін нақтылаймыз.'],['Медбике келеді','Медбике визитті мұқият және тыныш орындайды.'],['Байланыста боламыз','Визиттен кейін ұйымдастыру сұрақтарын нақтылауға болады.']],
  EN: [['You send a request','Message us on WhatsApp or call. Share the service, district and preferred time.'],['We confirm details','We confirm the address, procedure format, price and availability.'],['The nurse arrives','The nurse performs the visit carefully and calmly.'],['We stay in touch','After the visit you can ask organizational questions.']]
};

const bulletCards = { RU: ['Медсёстры отобраны', 'Документы проверены', 'Качество контролируется', 'Связь после визита'], KZ: ['Медбикелер таңдалған', 'Құжаттар тексерілген', 'Сапа бақыланады', 'Визиттен кейін байланыс бар'], EN: ['Selected nurses', 'Documents checked', 'Quality controlled', 'Support after the visit'] };

const familyCare = {
  RU: {
    eyebrow: 'Family Care',
    h: 'Когда вы не можете быть рядом каждый день, кто-то должен спокойно присматривать за вашими близкими.',
    text: 'Family Care создан для детей, которые живут далеко от родителей, для семей, где один человек уже несёт всю нагрузку по уходу, и для тех, кто хочет быть уверенным: дома к близкому человеку регулярно заходит внимательная медсестра, смотрит на общее состояние и сообщает семье, что всё в порядке.',
    cards: [
      ['Регулярные визиты домой', '1, 2, 4 или больше визитов в месяц — формат подбирается по состоянию человека и спокойствию семьи.'],
      ['Взгляд со стороны', 'Медсестра замечает изменения: слабость, давление, самочувствие, порядок приёма лекарств, настроение и бытовые сигналы.'],
      ['Короткий отчёт семье', 'После визита семья получает спокойную обратную связь: как прошёл визит, что заметили, нужно ли что-то организовать.'],
      ['Поддержка без давления', 'Мы не заменяем семью. Мы помогаем семье быть спокойнее и не оставлять родителя без внимания.']
    ],
    visitsH: 'Форматы посещений',
    visits: [['1 раз в месяц', 'Профилактический визит и контроль общего состояния.'], ['2 раза в месяц', 'Оптимальный формат для пожилого родителя, который живёт один.'], ['1 раз в неделю', 'Регулярное присутствие, больше внимания и стабильный контакт с семьёй.'], ['Индивидуально', 'Можно согласовать частоту под состояние, район и семейную ситуацию.']],
    emotional: 'Для многих семей самое важное — не процедура, а чувство, что мама, папа или близкий человек не остался один.'
  },
  KZ: {
    eyebrow: 'Отбасылық күтім',
    h: 'Күн сайын қасында бола алмасаңыз, жақыныңызға біреу мұқият қарап жүргені маңызды.',
    text: 'Отбасылық күтім ата-анасынан алыста тұратын балаларға, жақынына өзі қарап жүрген отбасы мүшелеріне және үйде ата-анасының жағдайы бақылауда болғанын қалайтын адамдарға арналған. Медбике үйге тұрақты барып, жалпы жағдайын қарап, отбасыға қысқа әрі түсінікті хабар береді.',
    cards: [
      ['Үйге тұрақты визиттер', 'Айына 1, 2, 4 немесе одан да көп визит — формат адамның жағдайына және отбасының тыныштығына қарай таңдалады.'],
      ['Сырт көзбен бақылау', 'Медбике әлсіздік, қысым, көңіл-күй, дәрі қабылдау тәртібі және тұрмыстық белгілерді байқайды.'],
      ['Отбасыға қысқа есеп', 'Визиттен кейін отбасы визит қалай өткенін, не байқалғанын және не ұйымдастыру керегін түсінеді.'],
      ['Қысымсыз қолдау', 'Біз отбасының орнын баспаймыз. Біз отбасының тыныштығына және жақын адамның назарсыз қалмауына көмектесеміз.']
    ],
    visitsH: 'Визит форматтары',
    visits: [['Айына 1 рет', 'Профилактикалық визит және жалпы жағдайды бақылау.'], ['Айына 2 рет', 'Жалғыз тұратын қарт ата-ана үшін ыңғайлы формат.'], ['Аптасына 1 рет', 'Тұрақты қатысу, көбірек көңіл және отбасыға тұрақты байланыс.'], ['Жеке формат', 'Жиілікті жағдайға, ауданға және отбасы жағдайына қарай келісуге болады.']],
    emotional: 'Көп отбасы үшін ең маңыздысы — процедура емес, анасы, әкесі немесе жақыны жалғыз қалмағанын сезіну.'
  },
  EN: {
    eyebrow: 'Family Care',
    h: 'When you cannot be there every day, someone trusted should quietly check on the people you love.',
    text: 'Family Care is designed for children who live far from their parents, for relatives already carrying the care burden, and for families who want reassurance: a nurse regularly visits the home, checks the general condition and gives the family a calm update.',
    cards: [
      ['Regular home visits', '1, 2, 4 or more visits per month — the format is adapted to the person’s condition and the family’s peace of mind.'],
      ['An attentive outside view', 'The nurse can notice weakness, blood pressure issues, mood changes, medication routine and small home signals.'],
      ['Short family update', 'After the visit, the family receives a clear update: how the visit went, what was noticed and whether something should be arranged.'],
      ['Support without pressure', 'We do not replace the family. We help the family feel calmer and make sure the parent is not left without attention.']
    ],
    visitsH: 'Visit formats',
    visits: [['Once a month', 'Preventive visit and general condition check.'], ['Twice a month', 'A balanced format for an elderly parent living alone.'], ['Once a week', 'Regular presence, more attention and stable contact with the family.'], ['Tailored plan', 'Frequency can be adapted to condition, district and family situation.']],
    emotional: 'For many families, the most important thing is not a procedure — it is knowing that a mother, father or loved one is not alone.'
  }
};

export function ServiceLocationClient({ service, location }: { service: SeoService; location: SeoLocation }) {
  const [lang, setLang] = useState<Lang>('RU');
  const t = ui[lang];
  const where = place(location, lang);
  const h1 = `${serviceTitle(service, lang)} ${where}`;
  const relatedServices = seoServices.filter((item) => item.slug !== service.slug).slice(0, 6);
  const relatedLocations = seoLocations.filter((item) => item.slug !== location.slug && (item.parentSlug === location.parentSlug || item.parentSlug === 'almaty' || item.slug === 'almaty')).slice(0, 8);
  const isFamilyCare = service.slug === 'family-care';
  const fc = familyCare[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem('medsestra_lang') as Lang | null;
    if (saved === 'RU' || saved === 'KZ' || saved === 'EN') setLang(saved);
    const onLang = (event: Event) => { const next = (event as CustomEvent<Lang>).detail; if (next === 'RU' || next === 'KZ' || next === 'EN') setLang(next); };
    window.addEventListener('medsestra-language-change', onLang);
    return () => window.removeEventListener('medsestra-language-change', onLang);
  }, []);

  return <>
    <section className="relative min-h-[92svh] overflow-hidden bg-white pt-20"><picture><source media="(max-width: 768px)" srcSet={service.image.mobile} /><img src={service.image.desktop} alt={h1} className="absolute inset-0 h-full w-full object-cover object-right" /></picture><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(240,250,255,0.86)_38%,rgba(214,242,252,0.42)_66%,rgba(214,242,252,0.10)_100%)]" /><div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" /><div className="relative z-10 mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl items-center px-5 py-12 md:px-8"><div className="max-w-3xl"><p className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">{isFamilyCare ? fc.eyebrow : t.badge}</p><h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl lg:text-8xl">{h1}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#071827]/68 md:text-xl md:leading-9">{isFamilyCare ? fc.text : serviceText(service, lang)}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(h1)}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">{t.book}</a><a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{site.phone}</a></div></div></div></section>
    {isFamilyCare && <section className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{fc.eyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{fc.h}</h2></div><div><p className="text-xl leading-9 text-[#071827]/68">{fc.text}</p><p className="mt-6 rounded-[2rem] bg-[#F5FBFE] p-6 text-lg font-black leading-8 text-[#071827] ring-1 ring-[#D7EEF7]">{fc.emotional}</p></div></div><div className="mt-12 grid gap-4 md:grid-cols-4">{fc.cards.map(([title, text]) => <div key={title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{title}</h3><p className="mt-4 leading-7 text-[#071827]/62">{text}</p></div>)}</div></div></section>}
    {isFamilyCare && <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">{fc.eyebrow}</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{fc.visitsH}</h2><div className="mt-10 grid gap-4 md:grid-cols-4">{fc.visits.map(([title, text]) => <div key={title} className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10"><h3 className="text-2xl font-black tracking-[-0.04em]">{title}</h3><p className="mt-4 leading-7 text-white/62">{text}</p></div>)}</div></div></section>}
    <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.steps}</p><div className="mt-8 grid gap-5 md:grid-cols-4">{stepText[lang].map(([title, text], index) => <div key={title} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071827] text-sm font-black text-white">{index + 1}</div><h2 className="text-2xl font-black tracking-[-0.04em]">{title}</h2><p className="mt-4 leading-7 text-[#071827]/62">{text}</p></div>)}</div></div></section>
    <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.trust}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.trustH}</h2><p className="mt-6 text-lg leading-8 text-[#071827]/62">{t.trustT}</p></div><div className="grid gap-3 md:grid-cols-2">{bulletCards[lang].map((item) => <div key={item} className="rounded-[1.5rem] bg-[#F5FBFE] p-5 font-black text-[#071827] ring-1 ring-[#D7EEF7]">{item}</div>)}</div></div></section>
    <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">{t.zone}</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{h1}</h2><div className="mt-10 flex flex-wrap gap-3">{[where, ...location.nearby].map((item) => <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-black ring-1 ring-white/10">{item}</span>)}</div></div></section>
    <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.other}</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{t.otherH}</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{relatedServices.map((item) => <a key={item.slug} href={`/services/${item.slug}/${location.slug}/`} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-2xl font-black tracking-[-0.04em] text-[#071827]">{serviceTitle(item, lang)}</h3></a>)}</div></div></section>
    <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.near}</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{t.nearH}</h2><div className="mt-10 grid gap-4 md:grid-cols-4">{relatedLocations.map((item) => <a key={item.slug} href={`/services/${service.slug}/${item.slug}/`} className="rounded-[1.6rem] bg-[#F5FBFE] p-5 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{place(item, lang)}</h3></a>)}</div></div></section>
  </>;
}
