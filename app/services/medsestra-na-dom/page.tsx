import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { site } from '@/lib/content';
import { seoLocations, seoServices } from '@/lib/seo-service-data';

export const metadata: Metadata = {
  title: 'Медсестра на дом в Казахстане | Уколы, капельницы, перевязки | Medsestra.kz',
  description: 'Медсестра на дом в Казахстане: уколы, капельницы, перевязки, снятие швов, уход за родителями, корпоративный уход и wellness IV. Проверенные медсёстры, контроль качества, запись через WhatsApp.',
  keywords: [
    'медсестра на дом', 'вызвать медсестру на дом', 'медсестра на дом Казахстан', 'уколы на дому', 'капельница на дому', 'перевязка на дому', 'снятие швов на дому', 'уход за пожилыми на дому', 'үйге медбике шақыру', 'үйде укол салу', 'nurse at home Kazakhstan', 'home nursing Kazakhstan'
  ],
  alternates: { canonical: '/services/medsestra-na-dom/' },
  openGraph: {
    title: 'Медсестра на дом в Казахстане | Medsestra.kz',
    description: 'Организованный выезд медсестры на дом: проверенные специалисты, понятная запись, контроль качества и поддержка пациента.',
    url: '/services/medsestra-na-dom/',
    siteName: 'Medsestra.kz',
    type: 'website'
  }
};

const mainServices = seoServices.filter((service) => ['medsestra-na-dom', 'ukoly-na-dom', 'kapelnitsa-na-dom', 'perevyazka-na-dom', 'snyatie-shvov-na-dom', 'family-care', 'corporate-care', 'beauty-wellness-iv', 'recovery-iv'].includes(service.slug));
const mainLocations = seoLocations.filter((location) => location.slug === 'almaty' || location.parentSlug === 'almaty');

const benefits = [
  { title: 'Медсёстры проходят отбор', text: 'Мы проверяем документы, опыт, аккуратность, качество общения и способность работать спокойно с пациентом дома.' },
  { title: 'Один понятный контакт', text: 'Пациент или семья пишет в WhatsApp, уточняет услугу, район, удобное время и получает подтверждение визита.' },
  { title: 'Контроль качества', text: 'Medsestra.kz не оставляет пациента один на один с частным объявлением. Мы организуем процесс и следим за уровнем сервиса.' },
  { title: 'Дом, семья и офис', text: 'Работаем с частными пациентами, пожилыми родителями, семьями, компаниями, офисами и wellness-запросами.' }
];

const steps = [
  ['1', 'Вы выбираете услугу', 'Медсестра на дом, укол, капельница, перевязка, снятие швов, Family Care, Corporate Care или wellness IV.'],
  ['2', 'Пишите в WhatsApp', 'Указываете город, район, желаемое время и контакт. На первом этапе не нужно отправлять чувствительные медицинские данные.'],
  ['3', 'Мы подтверждаем визит', 'Уточняем детали, стоимость, возможность выезда и подбираем медсестру под формат услуги.'],
  ['4', 'Медсестра приезжает', 'Специалист выполняет визит аккуратно, спокойно и с соблюдением правил ухода на дому.']
];

const faq = [
  { q: 'Как вызвать медсестру на дом?', a: 'Напишите в WhatsApp или позвоните. Достаточно указать город, район, нужную услугу и удобное время. Мы подтвердим детали до визита.' },
  { q: 'Кто приезжает к пациенту?', a: 'На визит приезжает выбранная медсестра. Мы проверяем документы, опыт, аккуратность и качество коммуникации.' },
  { q: 'Какие услуги можно получить на дому?', a: 'Доступны уколы, перевязки, снятие швов, капельницы при показаниях, уход за пожилыми, Family Care, корпоративный уход и wellness-направление.' },
  { q: 'Можно ли вызвать медсестру для родителей?', a: 'Да. Для семей предусмотрен формат Family Care: регулярные визиты, помощь в организации ухода и короткая обратная связь семье.' },
  { q: 'Работаете ли вы с офисами?', a: 'Да. Corporate Care подходит для компаний, руководителей и команд: выезд медсестры, wellness-дни и организованный медицинский сервис.' },
  { q: 'На каких языках можно обратиться?', a: 'Основной язык — русский. Также поддерживаются казахский и английский для пациентов, семей и корпоративных клиентов.' }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Medsestra.kz',
  url: 'https://medsestra.kz/services/medsestra-na-dom/',
  telephone: site.phone,
  email: site.email,
  areaServed: ['Kazakhstan', 'Almaty', 'Almaty Region'],
  medicalSpecialty: ['Nursing', 'HomeHealthCare'],
  availableLanguage: ['ru', 'kk', 'en'],
  description: 'Медсестра на дом в Казахстане: уколы, капельницы, перевязки, снятие швов, Family Care, Corporate Care и wellness IV.'
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
};

export default function MedsestraNaDomPage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section id="ru" className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-[#EAF6FB] to-white" />
        <div className="absolute -right-24 top-20 h-[560px] w-[560px] rounded-full bg-[#8ED8F8]/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">Медицинский уход на дому</p>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl lg:text-8xl">Медсестра на дом в Казахстане</h1>
            <p className="mt-4 text-base font-semibold text-[#071827]/45">Medsestra na dom v Kazakhstane</p>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">Medsestra.kz организует выезд медсестры на дом для пациентов, семей, пожилых родителей, офисов и wellness-запросов. Мы работаем как единая компания: отбираем медсестёр, проверяем документы, контролируем качество визита и остаёмся на связи до завершения услуги.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Здравствуйте, хочу вызвать медсестру на дом')}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">Записаться в WhatsApp</a>
              <a href="/services/medsestra-na-dom/almaty/" className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">Медсестра в Алматы</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {benefits.map((item) => <div key={item.title} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]"><h2 className="text-2xl font-black tracking-[-0.04em]">{item.title}</h2><p className="mt-4 leading-7 text-[#071827]/62">{item.text}</p></div>)}
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Услуги на дому</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Что можно организовать?</h2><p className="mt-6 text-lg leading-8 text-[#071827]/62">Выберите нужный формат ухода. Каждая страница ведёт на городскую версию для Алматы и дальше на районы и область.</p></div>
          <div className="grid gap-4 md:grid-cols-2">
            {mainServices.map((service) => <a key={service.slug} href={`/services/${service.slug}/almaty/`} className="rounded-[1.7rem] bg-[#F5FBFE] p-5 ring-1 ring-[#D7EEF7] transition hover:-translate-y-1 hover:bg-[#EAF6FB]"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#1677A8]">{service.titleEn}</p><h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">{service.titleRu}</h3><p className="mt-1 text-sm font-semibold text-[#071827]/45">{service.translitRu}</p><p className="mt-4 text-sm leading-6 text-[#071827]/58">{service.shortRu}</p></a>)}
          </div>
        </div>
      </section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">Как проходит запись</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Понятный путь для пациента</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {steps.map(([num, title, text]) => <div key={title} className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#071827]">{num}</div><h3 className="text-2xl font-black tracking-[-0.04em]">{title}</h3><p className="mt-4 leading-7 text-white/62">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Алматы и область</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Выберите город, район или зону</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#071827]/62">Сейчас структура сайта подготовлена для Алматы, районов Алматы и ближайших городов Алматинской области. Это помогает пациенту быстро перейти на страницу своей зоны.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {mainLocations.map((location) => <a key={location.slug} href={`/services/medsestra-na-dom/${location.slug}/`} className="rounded-[1.6rem] bg-[#F5FBFE] p-5 ring-1 ring-[#D7EEF7] transition hover:-translate-y-1 hover:bg-[#EAF6FB]"><h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{location.nameRu}</h3>{location.nameKz && <p className="mt-1 text-sm font-semibold text-[#071827]/45">{location.nameKz}</p>}</a>)}
          </div>
        </div>
      </section>

      <section id="languages" className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Языки обслуживания</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Русский, қазақша и English</h2></div><div className="grid gap-3 sm:grid-cols-3"><div className="rounded-[1.5rem] bg-white p-5 ring-1 ring-[#D7EEF7]"><p className="text-xs font-black text-[#1677A8]">RU</p><h3 className="mt-2 text-xl font-black">Русский</h3><p className="mt-2 text-sm text-[#071827]/55">Основной язык</p></div><div className="rounded-[1.5rem] bg-white p-5 ring-1 ring-[#D7EEF7]"><p className="text-xs font-black text-[#1677A8]">KZ</p><h3 className="mt-2 text-xl font-black">Қазақша</h3><p className="mt-2 text-sm text-[#071827]/55">Поддерживается</p></div><div className="rounded-[1.5rem] bg-white p-5 ring-1 ring-[#D7EEF7]"><p className="text-xs font-black text-[#1677A8]">EN</p><h3 className="mt-2 text-xl font-black">English</h3><p className="mt-2 text-sm text-[#071827]/55">Supported</p></div></div></div></section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">FAQ</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Частые вопросы</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">{faq.map((item) => <div key={item.q} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em]">{item.q}</h3><p className="mt-4 leading-7 text-[#071827]/62">{item.a}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">Запись</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Нужна медсестра на дом?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">Напишите в WhatsApp или позвоните. Мы уточним услугу, район, время и подтвердим визит.</p></div><div className="rounded-[2rem] bg-white p-6 text-[#071827] shadow-xl"><a href={`https://wa.me/${site.whatsapp}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a><a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a><a href={site.emailHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.email}</a></div></div></section>
    </main>
  );
}
