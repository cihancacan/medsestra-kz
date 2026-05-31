'use client';

import { useEffect, useState } from 'react';
import { imageFiles, site } from '@/lib/content';
import { seoLocations, seoServices } from '@/lib/seo-service-data';
import { servicesText, type Lang } from '@/lib/pages-i18n';

const serviceImages = [imageFiles.atHome, imageFiles.family, imageFiles.corporate, imageFiles.beauty];
const serviceHrefs = ['/services/medsestra-na-dom/almaty/','/services/family-care/almaty/','/services/corporate-care/almaty/','/services/beauty-wellness-iv/almaty/'];

const cards = {
  RU: [['Медсестра на дом','Уколы, перевязки, снятие швов, контроль состояния и регулярные визиты.'],['Забота о родителях','Регулярные визиты, базовый контроль, сопровождение и короткая обратная связь семье.'],['Медсестра в офис','Выезд медсестры, wellness-дни, поддержка сотрудников и руководителей.'],['Beauty & Wellness IV','Капельницы красоты, восстановление, энергия и hydration.']],
  KZ: [['Үйге медбике','Укол, таңу, тігіс алу, жағдайды бақылау және тұрақты визиттер.'],['Ата-анаға күтім','Тұрақты визиттер, негізгі бақылау, сүйемелдеу және отбасыға қысқа есеп.'],['Кеңсеге медбике','Кеңсеге медбике шығуы, wellness күндері және қызметкерлерге қолдау.'],['Beauty & Wellness IV','Сұлулық тамшылары, қалпына келу, энергия және hydration.']],
  EN: [['Nurse at home','Injections, dressings, stitch removal, condition checks and regular visits.'],['Family Care','Regular visits, basic monitoring, support and short family feedback.'],['Corporate Care','Office nurse visits, wellness days, support for employees and executives.'],['Beauty & Wellness IV','Beauty drips, recovery, energy and hydration.']]
};

export function ServicesClient() {
  const [lang, setLang] = useState<Lang>('RU');
  const t = servicesText[lang];
  const locations = seoLocations.filter((location) => location.slug === 'almaty' || location.parentSlug === 'almaty');

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
      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#EAF6FB] to-white" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">{t.badge}</p>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#071827] md:text-7xl lg:text-8xl">{t.h1}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">{t.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">{t.whatsapp}</a><a href="/prices/" className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{t.prices}</a></div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">{cards[lang].map(([title, text], index) => <a key={title} href={serviceHrefs[index]} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[#DDE8EE] transition hover:-translate-y-1 hover:shadow-xl"><picture><source media="(max-width: 768px)" srcSet={serviceImages[index].mobile} /><img src={serviceImages[index].desktop} alt={title} className="h-72 w-full object-cover object-right" /></picture><div className="p-6"><h2 className="text-2xl font-black tracking-[-0.04em] text-[#071827]">{title}</h2><p className="mt-4 leading-7 text-[#071827]/62">{text}</p></div></a>)}</div></section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.all}</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.choose}</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[#071827]/62">{t.chooseText}</p><div className="mt-10 grid gap-4 md:grid-cols-3">{seoServices.map((service) => <a key={service.slug} href={`/services/${service.slug}/almaty/`} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7] transition hover:-translate-y-1"><h3 className="text-2xl font-black tracking-[-0.04em] text-[#071827]">{lang === 'RU' ? service.titleRu : lang === 'KZ' ? service.titleKz : service.titleEn}</h3><p className="mt-4 text-sm leading-6 text-[#071827]/58">{lang === 'RU' ? service.shortRu : lang === 'KZ' ? service.descriptionKz : service.descriptionEn}</p></a>)}</div></div></section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.zones}</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.zonesH}</h2><div className="mt-10 grid gap-4 md:grid-cols-4">{locations.map((location) => <a key={location.slug} href={`/services/medsestra-na-dom/${location.slug}/`} className="rounded-[1.6rem] bg-white p-5 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{lang === 'KZ' && location.nameKz ? location.nameKz : location.nameRu}</h3></a>)}</div></div></section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">{t.booking}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.bookingH}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">{t.bookingText}</p></div><div className="rounded-[2rem] bg-white p-6 text-[#071827] shadow-xl"><a href={`https://wa.me/${site.whatsapp}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a><a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a><a href={site.emailHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.email}</a></div></div></section>
    </>
  );
}
