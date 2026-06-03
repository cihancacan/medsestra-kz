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
    const onLang = (event: Event) => {
      const next = (event as CustomEvent<Lang>).detail;
      if (next === 'RU' || next === 'KZ' || next === 'EN') setLang(next);
    };
    window.addEventListener('medsestra-language-change', onLang);
    return () => window.removeEventListener('medsestra-language-change', onLang);
  }, []);

  return <>
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-[640px] bg-gradient-to-b from-[#EAF6FB] via-white to-white" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">{t.badge}</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#071827] md:text-7xl lg:text-8xl">{t.h1}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">{t.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">{t.cta}</a><a href="/contact/" className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{t.second}</a></div>
        </div>
        <div className="rounded-[2.6rem] bg-white p-6 shadow-2xl ring-1 ring-[#DDE8EE] md:p-8"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Medsestra.kz</p><h2 className="mt-4 text-3xl font-black leading-[1] tracking-[-0.05em] text-[#071827]">{t.promiseH}</h2><p className="mt-5 text-base leading-7 text-[#071827]/62">{t.promiseT}</p><div className="mt-6 grid gap-2">{corporateOffers[lang].slice(0, 2).map(([title, text]) => <div key={title} className="rounded-2xl bg-[#F5FBFE] p-4 ring-1 ring-[#D7EEF7]"><h3 className="font-black text-[#071827]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#071827]/58">{text}</p></div>)}</div></div>
      </div>
    </section>

    <section className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.promiseEyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.promiseH}</h2><p className="mt-6 text-lg leading-8 text-[#071827]/62">{t.promiseT}</p></div><div className="grid gap-4 md:grid-cols-2">{corporateBenefits[lang].map(([title, text]) => <div key={title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{title}</h3><p className="mt-4 leading-7 text-[#071827]/62">{text}</p></div>)}</div></div></section>

    <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.offerEyebrow}</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#071827] md:text-6xl">{t.offerH}</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{corporateOffers[lang].map(([title, text]) => <div key={title} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#DDE8EE]"><h3 className="text-2xl font-black tracking-[-0.04em] text-[#071827]">{title}</h3><p className="mt-4 leading-7 text-[#071827]/62">{text}</p></div>)}</div></div></section>

    <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">{t.benefitsEyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.benefitsH}</h2></div><div className="grid gap-4 md:grid-cols-2">{corporateBenefits[lang].map(([title, text]) => <div key={title} className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10"><h3 className="text-xl font-black tracking-[-0.03em]">{title}</h3><p className="mt-4 leading-7 text-white/62">{text}</p></div>)}</div></div></section>

    <section className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.quoteEyebrow}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#071827] md:text-6xl">{t.quoteH}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#071827]/62">{t.quoteT}</p><p className="mt-5 max-w-2xl rounded-2xl bg-[#F5FBFE] p-5 text-sm font-bold leading-7 text-[#071827]/62 ring-1 ring-[#D7EEF7]">{t.taxNote}</p></div><div className="rounded-[2.4rem] bg-[#F5FBFE] p-7 ring-1 ring-[#D7EEF7] md:p-8"><h3 className="text-3xl font-black leading-[1] tracking-[-0.05em] text-[#071827]">{t.finalH}</h3><p className="mt-5 leading-7 text-[#071827]/62">{t.finalT}</p><a href={`https://wa.me/${site.whatsapp}`} className="mt-7 block rounded-2xl bg-[#071827] px-6 py-4 text-center font-black text-white shadow-xl">{t.book}</a></div></div></section>
  </>;
}
