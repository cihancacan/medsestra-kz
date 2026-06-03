'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/content';
import { type Lang } from '@/lib/pages-i18n';

const text = {
  RU: {
    badge: 'Corporate Care for Executives & Teams',
    h1: 'Корпоративная медицинская поддержка для руководителей и команд',
    lead: 'Когда компания заботится о своих сотрудниках, они отвечают большей энергией, вовлечённостью и лояльностью. Medsestra.kz помогает создать премиальный сервис заботы о здоровье для руководителей, менеджеров, сотрудников и их семей.',
    cta: 'Запросить корпоративное предложение',
    call: 'Позвонить',
    why: 'Почему это важно',
    whyH: 'Сильная команда начинается с ощущения заботы.',
    whyText: 'Сотрудник, который чувствует поддержку компании не только на работе, но и в важных бытовых и семейных ситуациях, спокойнее, увереннее и продуктивнее. Это не просто медицинская услуга — это понятный жест уважения к людям, которые создают результат компании.',
    offers: 'Форматы программы',
    offersH: 'Уход на дому, в офисе или для семьи',
    quote: 'Стоимость рассчитывается индивидуально',
    quoteText: 'Мы не публикуем фиксированную цену, потому что каждая компания отличается: количество сотрудников, уровень доступа, частота визитов, зоны обслуживания и формат отчётности подбираются отдельно. После короткой встречи мы готовим понятное коммерческое предложение.',
    process: 'Как начать',
    finalH: 'Создайте преимущество, которое сотрудники действительно почувствуют.',
    finalText: 'Medsestra.kz может стать корпоративным сервисом заботы для ваших кадров, менеджеров и ключевых сотрудников — с возможностью доступа для их семьи, визитов на дом и выездов в офис.'
  },
  KZ: {
    badge: 'Басшылар мен командаларға корпоративтік күтім',
    h1: 'Басшылар мен командаларға корпоративтік медициналық қолдау',
    lead: 'Компания өз қызметкерлеріне қамқорлық жасаса, олар оны жақсы энергиямен, адалдықпен және жоғары қатысумен қайтарады. Medsestra.kz басшыларға, менеджерлерге, қызметкерлерге және олардың отбасыларына премиум медициналық күтім сервисін құруға көмектеседі.',
    cta: 'Корпоративтік ұсыныс сұрау',
    call: 'Қоңырау шалу',
    why: 'Неге бұл маңызды',
    whyH: 'Күшті команда қамқорлық сезімінен басталады.',
    whyText: 'Қызметкер компанияның қолдауын жұмыста ғана емес, маңызды тұрмыстық және отбасылық жағдайларда да сезінсе, ол сабырлы, сенімді және өнімдірек болады. Бұл жай медициналық қызмет емес — бұл нәтиже жасайтын адамдарға нақты құрмет белгісі.',
    offers: 'Бағдарлама форматтары',
    offersH: 'Үйде, кеңседе немесе отбасы үшін күтім',
    quote: 'Құны жеке есептеледі',
    quoteText: 'Біз бекітілген бағаны сайтта жарияламаймыз, өйткені әр компания әртүрлі: қызметкерлер саны, қол жеткізу деңгейі, визит жиілігі, қызмет көрсету аймақтары және есеп беру форматы бөлек таңдалады. Қысқа кездесуден кейін біз түсінікті коммерциялық ұсыныс дайындаймыз.',
    process: 'Қалай бастау керек',
    finalH: 'Қызметкерлер шынымен сезінетін артықшылық жасаңыз.',
    finalText: 'Medsestra.kz сіздің басшыларыңызға, менеджерлеріңізге және негізгі қызметкерлеріңізге арналған корпоративтік күтім сервисіне айнала алады — отбасыға қол жеткізу, үйге визит және кеңсеге шығу мүмкіндігімен.'
  },
  EN: {
    badge: 'Corporate Care for Executives & Teams',
    h1: 'Corporate medical support for executives and teams',
    lead: 'When a company takes care of its people, employees give back stronger energy, loyalty and commitment. Medsestra.kz helps companies create a premium health support service for executives, managers, employees and their families.',
    cta: 'Request a corporate proposal',
    call: 'Call',
    why: 'Why it matters',
    whyH: 'A strong team starts with feeling cared for.',
    whyText: 'When employees feel that the company supports them not only at work, but also in personal and family situations, they feel calmer, more confident and more productive. This is not just a medical service — it is a clear gesture of respect toward the people who create the company’s results.',
    offers: 'Program formats',
    offersH: 'Care at home, at the office or for the family',
    quote: 'Pricing is prepared individually',
    quoteText: 'We do not publish a fixed price because every company is different: number of employees, access level, visit frequency, service areas and reporting format are selected individually. After a short meeting, we prepare a clear corporate proposal.',
    process: 'How to start',
    finalH: 'Create a benefit employees will truly feel.',
    finalText: 'Medsestra.kz can become a corporate care service for your executives, managers and key employees — with family access, home visits and office nurse visits.'
  }
};

const benefits = {
  RU: [
    ['Больше энергии в команде', 'Забота о здоровье снижает стресс и помогает сотрудникам быстрее возвращаться в рабочий ритм.'],
    ['Сильнее лояльность', 'Сотрудники ценят компании, которые заботятся не только о KPI, но и о людях.'],
    ['Поддержка семьи', 'Возможность использовать сервис для семьи делает benefit гораздо более ценным.'],
    ['Премиальный имидж работодателя', 'Такой сервис усиливает HR-бренд и помогает удерживать сильных сотрудников.']
  ],
  KZ: [
    ['Командада энергия көбірек', 'Денсаулыққа қамқорлық стрессті азайтып, қызметкерлерге жұмыс ырғағына тезірек оралуға көмектеседі.'],
    ['Адалдық күшейеді', 'Қызметкерлер тек көрсеткіштерге емес, адамдарға да мән беретін компанияны бағалайды.'],
    ['Отбасына қолдау', 'Сервисті отбасы үшін қолдану мүмкіндігі бұл артықшылықты әлдеқайда құнды етеді.'],
    ['Премиум жұмыс беруші имиджі', 'Мұндай сервис HR брендті күшейтеді және мықты қызметкерлерді сақтауға көмектеседі.']
  ],
  EN: [
    ['More energy in the team', 'Health support reduces stress and helps employees return to their work rhythm faster.'],
    ['Stronger loyalty', 'Employees value companies that care not only about KPIs, but also about people.'],
    ['Family support', 'The option to use the service for family members makes the benefit much more valuable.'],
    ['Premium employer image', 'This service strengthens the HR brand and helps retain strong employees.']
  ]
};

const formats = {
  RU: [
    ['Executive Home Care', 'Визиты медсестры на дом для руководителей, менеджеров, экспатов и членов семьи.'],
    ['Office Nurse Visit', 'Плановые визиты медсестры в офис, дни здоровья и поддержка команды на месте.'],
    ['Family Access', 'Возможность распространить доступ на супругов, детей или родителей сотрудников.'],
    ['Corporate Health Desk', 'Приоритетный WhatsApp-канал для организации визитов, вопросов и координации.']
  ],
  KZ: [
    ['Басшыларға үйдегі күтім', 'Басшылар, менеджерлер, экспаттар және отбасы мүшелері үшін үйге медбике визиті.'],
    ['Кеңседегі медбике визиті', 'Кеңсеге жоспарлы медбике визиттері, денсаулық күндері және командаға қолдау.'],
    ['Отбасылық қолжетімділік', 'Қолжетімділікті қызметкерлердің жұбайына, балаларына немесе ата-анасына кеңейту мүмкіндігі.'],
    ['Корпоративтік денсаулық арнасы', 'Визиттерді, сұрақтарды және үйлестіруді ұйымдастыру үшін басым WhatsApp арнасы.']
  ],
  EN: [
    ['Executive Home Care', 'Nurse visits at home for executives, managers, expats and family members.'],
    ['Office Nurse Visit', 'Scheduled nurse visits at the office, health days and on-site team support.'],
    ['Family Access', 'Possibility to extend access to spouses, children or parents of employees.'],
    ['Corporate Health Desk', 'Priority WhatsApp channel for visits, questions and coordination.']
  ]
};

const steps = {
  RU: [['01', 'Короткая встреча', 'Мы уточняем формат компании, количество сотрудников и ожидания HR.'], ['02', 'Предложение на заказ', 'Готовим программу без публичной цены: доступ, лимиты, зоны и формат отчётности.'], ['03', 'Пилот или контракт', 'Можно начать с пилота, а затем перейти на постоянный корпоративный доступ.']],
  KZ: [['01', 'Қысқа кездесу', 'Компания форматын, қызметкерлер санын және HR күтулерін нақтылаймыз.'], ['02', 'Жеке ұсыныс', 'Қоғамдық баға көрсетпей, қолжетімділік, лимиттер, аймақтар және есеп форматын дайындаймыз.'], ['03', 'Пилот немесе келісімшарт', 'Алдымен пилоттан бастап, кейін тұрақты корпоративтік қолжетімділікке өтуге болады.']],
  EN: [['01', 'Short meeting', 'We clarify the company format, employee scope and HR expectations.'], ['02', 'Tailored proposal', 'We prepare a program without public pricing: access, limits, areas and reporting format.'], ['03', 'Pilot or contract', 'You can start with a pilot and then move to permanent corporate access.']]
};

export function CorporateClient() {
  const [lang, setLang] = useState<Lang>('RU');
  const t = text[lang];

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
        <div className="absolute inset-x-0 top-0 h-[620px] bg-gradient-to-b from-[#EAF6FB] to-white" />
        <div className="absolute -right-24 top-16 h-[520px] w-[520px] rounded-full bg-[#8ED8F8]/24 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">{t.badge}</p>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#071827] md:text-7xl lg:text-8xl">{t.h1}</h1>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">{t.lead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">{t.cta}</a>
              <a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{t.call}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.why}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.whyH}</h2><p className="mt-6 text-lg leading-8 text-[#071827]/62">{t.whyText}</p></div>
          <div className="grid gap-4 md:grid-cols-2">{benefits[lang].map(([title, body]) => <div key={title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-2xl font-black tracking-[-0.04em] text-[#071827]">{title}</h3><p className="mt-4 leading-7 text-[#071827]/62">{body}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.offers}</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.offersH}</h2><div className="mt-10 grid gap-4 md:grid-cols-4">{formats[lang].map(([title, body]) => <div key={title} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-2xl font-black tracking-[-0.04em] text-[#071827]">{title}</h3><p className="mt-4 leading-7 text-[#071827]/62">{body}</p></div>)}</div></div>
      </section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">{t.quote}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.quote}</h2><p className="mt-6 text-lg leading-8 text-white/62">{t.quoteText}</p></div>
          <div className="grid gap-4">{steps[lang].map(([num, title, body]) => <div key={title} className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10"><p className="text-sm font-black text-[#23A6D5]">{num}</p><h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">{title}</h3><p className="mt-3 leading-7 text-white/62">{body}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-[#EAF6FB] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{t.process}</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{t.finalH}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#071827]/62">{t.finalText}</p></div>
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-[#D7EEF7]"><a href={`https://wa.me/${site.whatsapp}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">{t.cta}</a><a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a><a href={site.emailHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.email}</a></div>
        </div>
      </section>
    </>
  );
}
