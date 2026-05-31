'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/content';
import { contactText, type Lang } from '@/lib/pages-i18n';

const services = {
  RU: ['Медсестра на дом','Уколы на дому','Капельница на дому','Перевязка на дому','Снятие швов','Забота о родителях','Медсестра в офис','Beauty & Wellness IV','Recovery IV'],
  KZ: ['Үйге медбике','Үйде укол салу','Үйде тамшылату','Үйде таңу жасау','Тігіс алу','Ата-анаға күтім','Кеңсеге медбике','Beauty & Wellness IV','Recovery IV'],
  EN: ['Nurse at home','Home injections','IV drip at home','Home dressing','Stitch removal','Family Care','Corporate nurse','Beauty & Wellness IV','Recovery IV']
};

export function ContactClient() {
  const [lang, setLang] = useState<Lang>('RU');
  const t = contactText[lang];
  useEffect(() => {
    const saved = window.localStorage.getItem('medsestra_lang') as Lang | null;
    if (saved === 'RU' || saved === 'KZ' || saved === 'EN') setLang(saved);
    const onLang = (event: Event) => { const next = (event as CustomEvent<Lang>).detail; if (next === 'RU' || next === 'KZ' || next === 'EN') setLang(next); };
    window.addEventListener('medsestra-language-change', onLang);
    return () => window.removeEventListener('medsestra-language-change', onLang);
  }, []);

  return <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pt-32">
    <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#EAF6FB] to-white" />
    <div className="absolute -right-24 top-24 h-[520px] w-[520px] rounded-full bg-[#8ED8F8]/24 blur-3xl" />
    <div className="absolute -left-28 bottom-10 h-[360px] w-[360px] rounded-full bg-[#BDEBFF]/18 blur-3xl" />
    <div className="relative mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
      <div>
        <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">{t.badge}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl lg:text-8xl">{t.h1}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">{t.lead}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">{t.whatsapp}</a><a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{t.call}</a><a href={site.emailHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{t.email}</a></div>
      </div>
      <div className="rounded-[2.4rem] bg-white p-6 shadow-2xl ring-1 ring-[#DDE8EE] md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.formH}</p>
        <div className="mt-5 grid gap-2">{services[lang].map((service) => <a key={service} href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(service)}`} className="flex items-center justify-between rounded-2xl bg-[#F5FBFE] px-4 py-3.5 font-black text-[#071827] ring-1 ring-[#D7EEF7]">{service}<span className="text-[#1677A8]">→</span></a>)}</div>
        <div className="mt-6 grid gap-2 border-t border-[#E2EEF4] pt-5">{t.items.map((item) => <div key={item} className="rounded-2xl bg-white px-4 py-3 font-bold text-[#071827] ring-1 ring-[#D7EEF7]">✓ {item}</div>)}</div>
        <div className="mt-6 grid gap-2 border-t border-[#E2EEF4] pt-5 text-center font-black"><a href={site.phoneHref} className="rounded-2xl bg-[#F5FBFE] px-4 py-3 text-[#071827] ring-1 ring-[#D7EEF7]">{site.phone}</a><a href={site.emailHref} className="rounded-2xl bg-[#F5FBFE] px-4 py-3 text-[#071827] ring-1 ring-[#D7EEF7]">{site.email}</a></div>
      </div>
    </div>
  </section>;
}
