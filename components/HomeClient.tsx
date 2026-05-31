'use client';

import { useEffect, useState } from 'react';
import { imageFiles, site } from '@/lib/content';
import { seoLocations, seoServices } from '@/lib/seo-service-data';
import { homeFaq, homePrices, homeServices, homeSteps, homeText, homeTrust, type Lang } from '@/lib/home-i18n';

const hrefs = ['/services/medsestra-na-dom/almaty/','/services/family-care/almaty/','/services/corporate-care/almaty/','/services/beauty-wellness-iv/almaty/'];
const imgs = [imageFiles.atHome, imageFiles.family, imageFiles.corporate, imageFiles.beauty];

export function HomeClient() {
  const [lang, setLang] = useState<Lang>('RU');
  const t = homeText[lang];
  const zones = seoLocations.filter((z) => z.slug === 'almaty' || z.parentSlug === 'almaty').slice(0, 18);

  useEffect(() => {
    const saved = window.localStorage.getItem('medsestra_lang') as Lang | null;
    if (saved === 'RU' || saved === 'KZ' || saved === 'EN') setLang(saved);
    const onLang = (event: Event) => {
      const next = (event as CustomEvent<Lang>).detail;
      if (next === 'RU' || next === 'KZ' || next === 'EN') setLang(next);
    };
    window.addEventListener('medsestra-language-change', onLang);
    return () => window.removeEventListener('medsestra-language-change', onLang);
  }, []);

  return (
    <>
      <section id="ru" className="relative min-h-[100svh] overflow-hidden bg-white pt-20">
        <picture><source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} /><img src={imageFiles.home.desktop} alt="Medsestra.kz" className="absolute inset-0 h-full w-full object-cover object-[50%_18%] md:object-[70%_50%] lg:object-right" /></picture>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(234,246,251,0.74)_0%,rgba(255,255,255,0.48)_34%,rgba(255,255,255,0.10)_60%,rgba(255,255,255,0.58)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.90)_0%,rgba(240,250,255,0.76)_30%,rgba(214,242,252,0.34)_58%,rgba(214,242,252,0.08)_80%,rgba(214,242,252,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl px-5 pb-8 pt-4 md:items-center md:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#1677A8] ring-1 ring-[#D7EEF7]">{t.badge}</p>
            <h1 className="mt-[14svh] max-w-3xl text-[2.38rem] font-black leading-[0.94] tracking-[-0.065em] text-[#071827] md:mt-7 md:text-7xl lg:text-[5.4rem]">{t.h1}</h1>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#071827]/68 md:mt-7 md:text-xl md:leading-9">{t.text}</p>
            <div className="mt-10 flex max-w-xl flex-col gap-2 sm:flex-row"><a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-6 py-3.5 text-center font-bold text-white shadow-xl">{t.wa}</a><a href={site.phoneHref} className="rounded-2xl bg-white px-6 py-3.5 text-center font-bold text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{site.phone}</a></div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">{t.about}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.aboutH}</h2></div><p className="max-w-2xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">{t.aboutT}</p></div><div className="mt-12 grid gap-4 md:grid-cols-4">{homeTrust[lang].map(([title, text]) => <div key={title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em]">{title}</h3><p className="mt-4 leading-7 text-[#071827]/62">{text}</p></div>)}</div></div></section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">{t.services}</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{t.servicesH}</h2></div><a href="/services/" className="w-fit rounded-2xl bg-[#071827] px-6 py-4 font-bold text-white shadow-xl">{t.all}</a></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{homeServices[lang].map(([title, text], i) => <a key={title} href={hrefs[i]} className="group overflow-hidden rounded-[2.2rem] bg-white shadow-sm ring-1 ring-[#DDE8EE]"><picture><source media="(max-width: 768px)" srcSet={imgs[i].mobile} /><img src={imgs[i].desktop} alt={title} className={`h-72 w-full object-cover transition duration-700 group-hover:scale-105 ${i > 0 ? 'object-[right_66%] md:object-right' : 'object-right'}`} /></picture><div className="p-6"><h3 className="text-2xl font-black tracking-[-0.04em]">{title}</h3><p className="mt-4 leading-7 text-[#071827]/62">{text}</p></div></a>)}</div></div></section>

      <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">{t.how}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.howH}</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#071827]/62">{t.howT}</p></div><div className="grid gap-4">{homeSteps[lang].map(([n, title, text]) => <div key={title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-2xl font-black tracking-[-0.03em]">{n} · {title}</h3><p className="mt-2 leading-7 text-[#071827]/62">{text}</p></div>)}</div></div></section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.popular}</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.popularH}</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{seoServices.slice(0, 9).map((s) => <a key={s.slug} href={`/services/${s.slug}/almaty/`} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-2xl font-black tracking-[-0.04em] text-[#071827]">{lang === 'RU' ? s.titleRu : lang === 'KZ' ? s.titleKz : s.titleEn}</h3></a>)}</div></div></section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#23A6D5]">{t.prices}</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{t.pricesH}</h2></div><a href="/prices/" className="w-fit rounded-2xl bg-white px-6 py-4 font-bold text-[#071827]">{t.priceBtn}</a></div><div className="grid gap-4 md:grid-cols-3">{homePrices[lang].map(([name, price, note]) => <div key={name} className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10"><h3 className="text-2xl font-black tracking-[-0.03em]">{name}</h3><p className="mt-7 text-3xl font-black">{price}</p><p className="mt-2 text-sm text-white/55">{note}</p></div>)}</div></div></section>

      <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl rounded-[2.4rem] bg-[#F5FBFE] p-7 ring-1 ring-[#D7EEF7] md:p-12"><div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">{t.zones}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.zonesH}</h2></div><div className="flex flex-wrap gap-3">{zones.map((z) => <a key={z.slug} href={`/services/medsestra-na-dom/${z.slug}/`} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#071827] shadow-sm">{lang === 'KZ' && z.nameKz ? z.nameKz : z.nameRu}</a>)}</div></div></div></section>

      <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.faq}</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">{t.faqH}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{homeFaq[lang].map(([q, a]) => <div key={q} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em]">{q}</h3><p className="mt-4 leading-7 text-[#071827]/62">{a}</p></div>)}</div></div></section>

      <section id="contact" className="bg-[#EAF6FB] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">{t.contact}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.contactH}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#071827]/62">{t.contactT}</p></div><div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-[#D7EEF7]"><a href={`https://wa.me/${site.whatsapp}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a><a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a><a href={site.emailHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.email}</a></div></div></section>
    </>
  );
}
