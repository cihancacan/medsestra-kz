'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/content';
import { corporateBenefits, corporateOffers, corporateText, type Lang } from '@/lib/corporate-i18n';

export function CorporateClient() {
  const [lang, setLang] = useState<Lang>('RU');
  const t = corporateText[lang];
  useEffect(() => {
    const saved = window.localStorage.getItem('medsestra_lang') as Lang | null;
    if (saved === 'RU' || saved === 'KZ' || saved === 'EN') setLang(saved);
    const onLang = (event: Event) => { const next = (event as CustomEvent<Lang>).detail; if (next === 'RU' || next === 'KZ' || next === 'EN') setLang(next); };
    window.addEventListener('medsestra-language-change', onLang);
    return () => window.removeEventListener('medsestra-language-change', onLang);
  }, []);

  return <>
    <section className="relative min-h-[92svh] overflow-hidden bg-white pt-20">
      <picture><source media="(max-width: 768px)" srcSet="/images/corporate.team.mobile.jpg" /><img src="/images/corporate.team.jpg" alt="Corporate Care for Executives and Teams" className="absolute inset-0 h-full w-full object-cover object-[58%_50%] md:object-right" /></picture>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(234,246,251,0.82)_0%,rgba(255,255,255,0.66)_42%,rgba(255,255,255,0.22)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.94)_0%,rgba(245,251,254,0.86)_36%,rgba(234,246,251,0.38)_64%,rgba(234,246,251,0.04)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl items-center px-5 py-12 md:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">{t.badge}</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#071827] md:text-7xl lg:text-8xl">{t.h1}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">{t.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">{t.cta}</a><a href="/contact/" className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{t.second}</a></div>
        </div>
      </div>
    </section>
    <section className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.benefitsEyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.benefitsH}</h2><p className="mt-6 text-lg leading-8 text-[#071827]/62">{t.promiseT}</p></div><div className="grid gap-4 md:grid-cols-2">{corporateBenefits[lang].map(([title, text]) => <div key={title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{title}</h3><p className="mt-4 leading-7 text-[#071827]/62">{text}</p></div>)}</div></div></section>
    <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.offerEyebrow}</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#071827] md:text-6xl">{t.offerH}</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{corporateOffers[lang].map(([title, text]) => <div key={title} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#DDE8EE]"><h3 className="text-2xl font-black tracking-[-0.04em] text-[#071827]">{title}</h3><p className="mt-4 leading-7 text-[#071827]/62">{text}</p></div>)}</div></div></section>
    <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">{t.quoteEyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.quoteH}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">{t.quoteT}</p><p className="mt-5 max-w-2xl rounded-2xl bg-white/8 p-5 text-sm font-bold leading-7 text-white/62 ring-1 ring-white/10">{t.taxNote}</p></div><div className="rounded-[2rem] bg-white p-6 text-[#071827] shadow-xl"><h3 className="text-3xl font-black tracking-[-0.05em]">{t.finalH}</h3><p className="mt-5 leading-7 text-[#071827]/62">{t.finalT}</p><a href={`https://wa.me/${site.whatsapp}`} className="mt-7 block rounded-2xl bg-[#071827] px-6 py-4 text-center font-black text-white">{t.book}</a></div></div></section>
  </>;
}
