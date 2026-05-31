'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/content';
import { pricesText, type Lang } from '@/lib/pages-i18n';

const groups = {
  RU: [
    ['Медсестра на дом', [['Уколы на дому','от 8 000 ₸','По назначению врача'],['Перевязка на дому','от 12 000 ₸','Стерильные материалы'],['Снятие швов','от 12 000 ₸','После уточнения ситуации'],['Капельница на дому','от 18 000 ₸','При медицинских показаниях']]],
    ['Семейный уход', [['Стартовый семейный уход','от 149 000 ₸ / месяц','Базовый формат сопровождения'],['Расширенный семейный уход','от 249 000 ₸ / месяц','Больше визитов и приоритет']]],
    ['Корпоративный уход', [['День заботы о здоровье','по запросу','Для команды или офиса'],['Корпоративная медсестра','по запросу','По графику компании']]],
    ['Капельницы красоты и восстановления', [['Витаминная капельница','от 30 000 ₸','После оценки специалиста'],['Капельница для сияния','от 35 000 ₸','Формат красоты и восстановления'],['Капельница восстановления','от 35 000 ₸','Восстановление после вечеринки']]]
  ],
  KZ: [
    ['Үйге медбике', [['Үйде укол салу','8 000 ₸ бастап','Дәрігер тағайындауы бойынша'],['Үйде таңу жасау','12 000 ₸ бастап','Стерильді материалдар'],['Тігіс алу','12 000 ₸ бастап','Жағдай нақтыланғаннан кейін'],['Үйде тамшылату','18 000 ₸ бастап','Медициналық көрсетілім бойынша']]],
    ['Отбасылық күтім', [['Бастапқы отбасылық күтім','149 000 ₸ / ай бастап','Базалық сүйемелдеу форматы'],['Кеңейтілген отбасылық күтім','249 000 ₸ / ай бастап','Көбірек визит және басымдық']]],
    ['Корпоративтік күтім', [['Денсаулық күні','сұраныс бойынша','Команда немесе кеңсе үшін'],['Корпоративтік медбике','сұраныс бойынша','Компания кестесі бойынша']]],
    ['Сұлулық және қалпына келтіру тамшылары', [['Витаминді тамшылату','30 000 ₸ бастап','Маман бағалауынан кейін'],['Сұлулық тамшысы','35 000 ₸ бастап','Сұлулық және қалпына келу форматы'],['Қалпына келтіру тамшысы','35 000 ₸ бастап','Кештен кейін қалпына келу']]]
  ],
  EN: [
    ['Nurse at home', [['Home injections','from 8,000 ₸','With medical prescription'],['Home dressing','from 12,000 ₸','Sterile materials'],['Stitch removal','from 12,000 ₸','After situation review'],['IV drip at home','from 18,000 ₸','When medically appropriate']]],
    ['Family care', [['Family care start','from 149,000 ₸ / month','Basic support format'],['Family care plus','from 249,000 ₸ / month','More visits and priority']]],
    ['Corporate care', [['Health day','on request','For team or office'],['Corporate nurse','on request','According to company schedule']]],
    ['Beauty and recovery IV', [['Vitamin IV','from 30,000 ₸','After specialist assessment'],['Glow IV','from 35,000 ₸','Beauty and recovery format'],['Recovery IV','from 35,000 ₸','After-party recovery']]]
  ]
};

export function PricesClient() {
  const [lang, setLang] = useState<Lang>('RU');
  const t = pricesText[lang];
  useEffect(() => {
    const saved = window.localStorage.getItem('medsestra_lang') as Lang | null;
    if (saved === 'RU' || saved === 'KZ' || saved === 'EN') setLang(saved);
    const onLang = (event: Event) => { const next = (event as CustomEvent<Lang>).detail; if (next === 'RU' || next === 'KZ' || next === 'EN') setLang(next); };
    window.addEventListener('medsestra-language-change', onLang);
    return () => window.removeEventListener('medsestra-language-change', onLang);
  }, []);

  return <>
    <section className="relative overflow-hidden bg-white px-5 pb-14 pt-32 md:px-8 md:pb-20 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#EAF6FB] to-white" />
      <div className="relative mx-auto max-w-7xl"><div className="max-w-4xl">
        <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">{t.badge}</p>
        <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#071827] md:text-7xl lg:text-8xl">{t.h1}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">{t.lead}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">{t.cta}</a><a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{site.phone}</a></div>
      </div></div>
    </section>
    <section className="bg-white px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl space-y-10">{groups[lang].map(([title, items]) => <section key={title as string} className="overflow-hidden rounded-[2.4rem] bg-white shadow-xl ring-1 ring-[#DDE8EE]"><div className="grid lg:grid-cols-[0.75fr_1.25fr]"><div className="bg-[#071827] p-7 text-white md:p-10"><h2 className="text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-5xl">{title as string}</h2></div><div className="divide-y divide-[#E2EEF4] bg-white">{(items as string[][]).map(([service, price, note]) => <div key={service} className="grid gap-4 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-7"><div><h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{service}</h3><p className="mt-1 text-sm font-semibold text-[#071827]/50">{note}</p></div><p className="rounded-2xl bg-[#F5FBFE] px-4 py-3 text-left text-xl font-black text-[#1677A8] ring-1 ring-[#D7EEF7] md:text-right">{price}</p></div>)}</div></div></section>)}</div></section>
    <section className="bg-[#EAF6FB] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.badge}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.h1}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#071827]/62">{t.note}</p></div><div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-[#D7EEF7]"><a href={`https://wa.me/${site.whatsapp}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a><a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a><a href={site.emailHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.email}</a></div></div></section>
  </>;
}
