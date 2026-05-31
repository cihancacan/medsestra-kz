'use client';

import { useEffect, useState } from 'react';
import { CTA } from '@/components/CTA';
import { imageFiles, pillars, prices, steps, trustItems, zones, site } from '@/lib/content';
import { seoLocations, seoServices } from '@/lib/seo-service-data';

type Lang = 'RU' | 'KZ' | 'EN';

const copy = {
  RU: {
    badge: 'Медицинский уход на дому',
    heroTitle: 'Уход на дому, как удобный сервис',
    heroSub: 'Ukhod na domu, kak udobnyy servis',
    heroText: 'Медсестра на дом, Family Care, Corporate Care и Beauty IV. Напишите в WhatsApp или позвоните — мы организуем визит.',
    whatsapp: 'Написать в WhatsApp',
    aboutEyebrow: 'О Medsestra.kz',
    aboutTitle: 'Медсестра на дом как понятный премиальный сервис.',
    aboutText: 'Medsestra.kz создан для пациентов, семей и компаний, которым нужен аккуратный медицинский уход на дому без хаоса. Мы отбираем медсестёр, проверяем документы, контролируем качество визита и остаёмся на связи до завершения услуги.',
    servicesEyebrow: 'Услуги',
    servicesTitle: 'Выберите нужный уход',
    allServices: 'Все услуги',
    processEyebrow: 'Запись',
    processTitle: 'Как проходит визит',
    processText: 'Пациенту не нужно разбираться в сложных формах. Мы уточняем только то, что нужно для организации визита: услуга, район, время и контакт.',
    seoEyebrow: 'Популярные услуги',
    seoTitle: 'Найдите услугу в своём районе',
    seoText: 'Быстрый переход к нужной услуге: медсестра на дом, уколы, капельницы, перевязки, снятие швов, Family Care, Corporate Care и Recovery IV.',
    priceEyebrow: 'Цены',
    priceTitle: 'Стартовые тарифы',
    priceCta: 'Открыть цены',
    zonesEyebrow: 'Алматы и область',
    zonesTitle: 'Город, районы и ближайшие зоны',
    languagesEyebrow: 'Языки обслуживания',
    languagesTitle: 'Русский, қазақша и English',
    faqEyebrow: 'FAQ',
    faqTitle: 'Частые вопросы',
    contactEyebrow: 'Контакты',
    contactTitle: 'Нужен визит медсестры?',
    contactText: 'Напишите в WhatsApp, позвоните или отправьте email. Один номер работает для обычного звонка и WhatsApp.',
    book: 'Записаться'
  },
  KZ: {
    badge: 'Үйдегі медициналық күтім',
    heroTitle: 'Үйдегі күтім — ыңғайлы сервис сияқты',
    heroSub: 'Uydegi kutim — ynhaily servis siyaqty',
    heroText: 'Үйге медбике шақыру, Family Care, Corporate Care және Beauty IV. WhatsApp арқылы жазыңыз немесе қоңырау шалыңыз — біз визитті ұйымдастырамыз.',
    whatsapp: 'WhatsApp арқылы жазу',
    aboutEyebrow: 'Medsestra.kz туралы',
    aboutTitle: 'Үйге медбике шақыру — түсінікті әрі сенімді сервис.',
    aboutText: 'Medsestra.kz пациенттерге, отбасыларға және компанияларға үй жағдайында медициналық күтімді тыныш әрі ұйымдасқан түрде алуға көмектеседі. Біз медбикелерді таңдаймыз, құжаттарын тексереміз және визит сапасын бақылаймыз.',
    servicesEyebrow: 'Қызметтер',
    servicesTitle: 'Қажетті күтімді таңдаңыз',
    allServices: 'Барлық қызметтер',
    processEyebrow: 'Жазылу',
    processTitle: 'Визит қалай өтеді',
    processText: 'Пациентке күрделі форма толтырудың қажеті жоқ. Біз тек визитті ұйымдастыруға керек ақпаратты нақтылаймыз: қызмет, аудан, уақыт және байланыс.',
    seoEyebrow: 'Танымал қызметтер',
    seoTitle: 'Өз ауданыңыздағы қызметті табыңыз',
    seoText: 'Қажетті қызметке жылдам өтіңіз: үйге медбике, үйде укол, тамшылату, таңу, тігіс алу, Family Care, Corporate Care және Recovery IV.',
    priceEyebrow: 'Бағалар',
    priceTitle: 'Бастапқы тарифтер',
    priceCta: 'Бағаларды көру',
    zonesEyebrow: 'Алматы және облыс',
    zonesTitle: 'Қала, аудандар және жақын аймақтар',
    languagesEyebrow: 'Қызмет көрсету тілдері',
    languagesTitle: 'Русский, қазақша және English',
    faqEyebrow: 'FAQ',
    faqTitle: 'Жиі қойылатын сұрақтар',
    contactEyebrow: 'Байланыс',
    contactTitle: 'Медбике визиті керек пе?',
    contactText: 'WhatsApp арқылы жазыңыз, қоңырау шалыңыз немесе email жіберіңіз. Бір нөмір қоңырау және WhatsApp үшін жұмыс істейді.',
    book: 'Жазылу'
  },
  EN: {
    badge: 'Home medical care',
    heroTitle: 'Home care, like a convenient service',
    heroSub: 'Nurse care at home in Kazakhstan',
    heroText: 'Nurse at home, Family Care, Corporate Care and Beauty IV. Message us on WhatsApp or call — we will organize the visit.',
    whatsapp: 'Message on WhatsApp',
    aboutEyebrow: 'About Medsestra.kz',
    aboutTitle: 'Nurse at home as a clear premium service.',
    aboutText: 'Medsestra.kz is designed for patients, families and companies that need calm, organized home medical care. We select nurses, check documents, control visit quality and stay in touch until the service is completed.',
    servicesEyebrow: 'Services',
    servicesTitle: 'Choose the care you need',
    allServices: 'All services',
    processEyebrow: 'Booking',
    processTitle: 'How the visit works',
    processText: 'The patient does not need complex forms. We only confirm what is needed to organize the visit: service, district, time and contact.',
    seoEyebrow: 'Popular services',
    seoTitle: 'Find a service in your area',
    seoText: 'Quick access to the right service: nurse at home, injections, IV drips, wound dressing, stitch removal, Family Care, Corporate Care and Recovery IV.',
    priceEyebrow: 'Prices',
    priceTitle: 'Starting prices',
    priceCta: 'View prices',
    zonesEyebrow: 'Almaty and region',
    zonesTitle: 'City, districts and nearby areas',
    languagesEyebrow: 'Supported languages',
    languagesTitle: 'Русский, қазақша and English',
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    contactEyebrow: 'Contact',
    contactTitle: 'Need a nurse visit?',
    contactText: 'Message us on WhatsApp, call or send an email. The same number works for calls and WhatsApp.',
    book: 'Book a visit'
  }
};

const faq = {
  RU: [
    ['Как вызвать медсестру на дом в Алматы?', 'Напишите в WhatsApp или позвоните. Достаточно указать услугу, район, удобное время и имя для связи.'],
    ['Кто приезжает к пациенту?', 'На визит приезжает выбранная медсестра. Мы проверяем документы, опыт, аккуратность и качество общения.'],
    ['Это сервис объявлений?', 'Нет. Medsestra.kz — организованная компания медсестёр с отбором специалистов и контролем качества.']
  ],
  KZ: [
    ['Алматыда үйге медбике қалай шақырылады?', 'WhatsApp арқылы жазыңыз немесе қоңырау шалыңыз. Қызметті, ауданды, ыңғайлы уақытты және байланыс атын көрсету жеткілікті.'],
    ['Пациентке кім келеді?', 'Визитке таңдалған медбике келеді. Біз құжаттарын, тәжірибесін және қарым-қатынас сапасын тексереміз.'],
    ['Бұл хабарландыру сервисі ме?', 'Жоқ. Medsestra.kz — медбикелерді таңдайтын және қызмет сапасын бақылайтын ұйымдасқан компания.']
  ],
  EN: [
    ['How do I call a nurse at home in Almaty?', 'Message us on WhatsApp or call. Share the service, district, preferred time and contact name.'],
    ['Who comes to the patient?', 'A selected nurse comes to the visit. We check documents, experience, accuracy and communication quality.'],
    ['Is this a listing platform?', 'No. Medsestra.kz is an organized nurse service with selected specialists and quality control.']
  ]
};

const serviceLinks = seoServices.slice(0, 9);
const locationLinks = seoLocations.filter((location) => location.slug === 'almaty' || location.parentSlug === 'almaty').slice(0, 18);

export function LocalizedHome() {
  const [lang, setLang] = useState<Lang>('RU');
  const t = copy[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem('medsestra_lang') as Lang | null;
    if (saved === 'RU' || saved === 'KZ' || saved === 'EN') setLang(saved);

    function handleLanguage(event: Event) {
      const next = (event as CustomEvent<Lang>).detail;
      if (next === 'RU' || next === 'KZ' || next === 'EN') setLang(next);
    }

    window.addEventListener('medsestra-language-change', handleLanguage);
    return () => window.removeEventListener('medsestra-language-change', handleLanguage);
  }, []);

  return (
    <>
      <section id="ru" className="relative min-h-[100svh] overflow-hidden bg-white pt-20">
        <picture>
          <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
          <img src={imageFiles.home.desktop} alt="Medsestra.kz — nurse care at home in Almaty" className="absolute inset-0 h-full w-full object-cover object-[50%_18%] md:object-[70%_50%] lg:object-right" />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(234,246,251,0.74)_0%,rgba(255,255,255,0.48)_34%,rgba(255,255,255,0.10)_60%,rgba(255,255,255,0.58)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.90)_0%,rgba(240,250,255,0.76)_30%,rgba(214,242,252,0.34)_58%,rgba(214,242,252,0.08)_80%,rgba(214,242,252,0)_100%)]" />
        <div className="absolute -right-12 top-10 h-[520px] w-[520px] rounded-full bg-[#8ED8F8]/30 blur-3xl" />
        <div className="absolute left-[-90px] top-20 h-[420px] w-[420px] rounded-full bg-[#BDEBFF]/24 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col px-5 pb-8 pt-4 md:items-start md:justify-center md:px-8 md:py-12 lg:py-16">
          <div className="max-w-2xl md:w-full md:pt-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7] backdrop-blur md:px-4 md:py-2 md:text-xs md:tracking-[0.16em]"><span className="h-2 w-2 rounded-full bg-[#23A6D5]" />{t.badge}</div>
            <div className="mt-[14svh] md:mt-0">
              <h1 className="max-w-3xl text-[2.38rem] font-black leading-[0.94] tracking-[-0.065em] text-[#071827] md:mt-7 md:text-7xl lg:text-[5.4rem]">{t.heroTitle}</h1>
              <p className="mt-2 text-sm font-medium text-[#071827]/45 md:mt-4 md:text-base">{t.heroSub}</p>
              <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#071827]/68 md:mt-7 md:text-xl md:leading-9">{t.heroText}</p>
            </div>
            <div className="mt-16 flex max-w-xl flex-col gap-2 sm:flex-row md:mt-8 md:gap-3">
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-6 py-3.5 text-center font-bold text-white shadow-xl transition hover:-translate-y-0.5 md:px-7 md:py-4">{t.whatsapp}</a>
              <a href={site.phoneHref} className="rounded-2xl bg-white px-6 py-3.5 text-center font-bold text-[#071827] shadow-sm ring-1 ring-[#DDE8EE] transition hover:-translate-y-0.5 md:px-7 md:py-4">{site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">{t.aboutEyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.aboutTitle}</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">{t.aboutText}</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">{trustItems.map((item) => <div key={item.title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-black text-[#1677A8] shadow-sm">✓</div><h3 className="text-xl font-black tracking-[-0.03em]">{item.title}</h3><p className="mt-1 text-sm font-medium text-[#071827]/42">{item.translit}</p><p className="mt-4 leading-7 text-[#071827]/62">{item.text}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">{t.servicesEyebrow}</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{t.servicesTitle}</h2></div><a href="/services/" className="w-fit rounded-2xl bg-[#071827] px-6 py-4 font-bold text-white shadow-xl">{t.allServices}</a></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{pillars.map((pillar, index) => <a key={pillar.key} href={pillar.href} className="group overflow-hidden rounded-[2.2rem] bg-white shadow-sm ring-1 ring-[#DDE8EE] transition hover:-translate-y-1 hover:shadow-2xl"><picture><source media="(max-width: 768px)" srcSet={pillar.image.mobile} /><img src={pillar.image.desktop} alt={pillar.eyebrow} className={`h-72 w-full object-cover transition duration-700 group-hover:scale-105 ${index > 0 ? 'object-[right_66%] md:object-right' : 'object-right'}`} /></picture><div className="p-6"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">{pillar.title}</p><h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]">{pillar.eyebrow}</h3><p className="mt-1 text-sm font-medium text-[#071827]/42">{pillar.translit}</p><p className="mt-4 leading-7 text-[#071827]/62">{pillar.text}</p></div></a>)}</div></div></section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">{t.processEyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.processTitle}</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#071827]/62">{t.processText}</p></div><div className="grid gap-4">{steps.map((step, index) => <div key={step.title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><div className="flex gap-5"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#071827] font-black text-white">0{index + 1}</span><div><h3 className="text-2xl font-black tracking-[-0.03em]">{step.title}</h3><p className="mt-2 leading-7 text-[#071827]/62">{step.text}</p></div></div></div>)}</div></div></section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.seoEyebrow}</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.seoTitle}</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-[#071827]/62">{t.seoText}</p><div className="mt-10 grid gap-4 md:grid-cols-3">{serviceLinks.map((service) => <a key={service.slug} href={`/services/${service.slug}/almaty/`} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7] transition hover:-translate-y-1 hover:shadow-xl"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">{service.titleEn}</p><h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#071827]">{service.titleRu}</h3><p className="mt-1 text-sm font-semibold text-[#071827]/45">{service.translitRu}</p></a>)}</div></div></section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#23A6D5]">{t.priceEyebrow}</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{t.priceTitle}</h2></div><a href="/prices/" className="w-fit rounded-2xl bg-white px-6 py-4 font-bold text-[#071827]">{t.priceCta}</a></div><div className="grid gap-4 md:grid-cols-3">{prices.map((item) => <div key={item.service} className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#23A6D5]">{item.category}</p><h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">{item.service}</h3><p className="mt-1 text-sm font-medium text-white/42">{item.translit}</p><p className="mt-7 text-3xl font-black">{item.price}</p><p className="mt-2 text-sm text-white/55">{item.note}</p></div>)}</div></div></section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl rounded-[2.4rem] bg-[#F5FBFE] p-7 ring-1 ring-[#D7EEF7] md:p-12"><div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">{t.zonesEyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.zonesTitle}</h2><p className="mt-4 text-[#071827]/52">Almaty i blizhayshiye zony</p></div><div className="flex flex-wrap gap-3">{locationLinks.map((location) => <a key={location.slug} href={`/services/medsestra-na-dom/${location.slug}/`} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#071827] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#EAF6FB]">{location.nameRu}</a>)}</div></div></div></section>

      <section id="languages" className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.languagesEyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.languagesTitle}</h2></div><div className="grid gap-3 sm:grid-cols-3"><button onClick={() => window.dispatchEvent(new CustomEvent('medsestra-language-change', { detail: 'RU' }))} className="rounded-[1.5rem] bg-white p-5 text-left ring-1 ring-[#D7EEF7]"><p className="text-xs font-black text-[#1677A8]">RU</p><h3 className="mt-2 text-xl font-black">Русский</h3></button><button onClick={() => window.dispatchEvent(new CustomEvent('medsestra-language-change', { detail: 'KZ' }))} className="rounded-[1.5rem] bg-white p-5 text-left ring-1 ring-[#D7EEF7]"><p className="text-xs font-black text-[#1677A8]">KZ</p><h3 className="mt-2 text-xl font-black">Қазақша</h3></button><button onClick={() => window.dispatchEvent(new CustomEvent('medsestra-language-change', { detail: 'EN' }))} className="rounded-[1.5rem] bg-white p-5 text-left ring-1 ring-[#D7EEF7]"><p className="text-xs font-black text-[#1677A8]">EN</p><h3 className="mt-2 text-xl font-black">English</h3></button></div></div></section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.faqEyebrow}</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{t.faqTitle}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{faq[lang].map(([q, a]) => <div key={q} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em]">{q}</h3><p className="mt-4 leading-7 text-[#071827]/62">{a}</p></div>)}</div></div></section>

      <section id="contact" className="bg-[#EAF6FB] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">{t.contactEyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.contactTitle}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#071827]/62">{t.contactText}</p></div><div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-[#D7EEF7]"><a href={`https://wa.me/${site.whatsapp}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a><a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a><a href={site.emailHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.email}</a></div></div></section>
      <CTA />
    </>
  );
}
