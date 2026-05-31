import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { pillars, prices, steps, trustItems, zones, site } from '@/lib/content';
import { seoLocations, seoServices } from '@/lib/seo-service-data';

export const metadata: Metadata = {
  title: 'Medsestra.kz | Медсестра на дом в Алматы | Уколы, капельницы, уход',
  description: 'Medsestra.kz — медсестра на дом в Алматы: уколы, капельницы, перевязки, снятие швов, Family Care, Corporate Care, Beauty & Wellness IV и Recovery IV. Проверенные медсёстры, контроль качества, запись через WhatsApp.',
  keywords: [
    'медсестра на дом Алматы',
    'вызвать медсестру на дом Алматы',
    'уколы на дому Алматы',
    'капельница на дому Алматы',
    'перевязка на дому Алматы',
    'снятие швов на дому Алматы',
    'уход за пожилыми Алматы',
    'капельница от похмелья Алматы',
    'үйге медбике Алматы',
    'nurse at home Almaty'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Medsestra.kz | Медсестра на дом в Алматы',
    description: 'Организованный выезд медсестры на дом: проверенные специалисты, понятная запись, контроль качества и поддержка пациента.',
    url: '/',
    siteName: 'Medsestra.kz',
    type: 'website'
  }
};

const serviceLinks = seoServices.slice(0, 9);
const locationLinks = seoLocations.filter((location) => location.slug === 'almaty' || location.parentSlug === 'almaty').slice(0, 18);

const homepageFaq = [
  {
    q: 'Как вызвать медсестру на дом в Алматы?',
    a: 'Напишите в WhatsApp или позвоните. Достаточно указать услугу, район, удобное время и имя для связи. Мы подтверждаем детали до визита.'
  },
  {
    q: 'Кто приезжает к пациенту?',
    a: 'На визит приезжает выбранная медсестра. Мы проверяем документы, опыт, аккуратность и качество общения.'
  },
  {
    q: 'Какие услуги доступны на дому?',
    a: 'Доступны уколы, перевязки, снятие швов, капельницы по показаниям, Family Care, Corporate Care, Beauty & Wellness IV и Recovery IV.'
  },
  {
    q: 'Это сервис объявлений?',
    a: 'Нет. Medsestra.kz позиционируется как организованная компания медсестёр с отбором специалистов, контролем качества и единым контактом для пациента.'
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Medsestra.kz',
  url: 'https://medsestra.kz/',
  telephone: site.phone,
  email: site.email,
  areaServed: ['Almaty', 'Almaty Region', ...locationLinks.map((location) => location.nameRu)],
  medicalSpecialty: ['Nursing', 'HomeHealthCare'],
  availableLanguage: ['ru', 'kk', 'en'],
  description: 'Медсестра на дом в Алматы: уколы, капельницы, перевязки, снятие швов, Family Care, Corporate Care, Beauty & Wellness IV и Recovery IV.'
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFaq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
};

export default function HomePage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />

      <section id="about" className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">О Medsestra.kz</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">
                Медсестра на дом как понятный премиальный сервис.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">
              Medsestra.kz создан для пациентов, семей и компаний, которым нужен аккуратный медицинский уход на дому без хаоса. Мы отбираем медсестёр, проверяем документы, контролируем качество визита и остаёмся на связи до завершения услуги.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-black text-[#1677A8] shadow-sm">✓</div>
                <h3 className="text-xl font-black tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#071827]/42">{item.translit}</p>
                <p className="mt-4 leading-7 text-[#071827]/62">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">Услуги</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Выберите нужный уход</h2>
            </div>
            <a href="/services/" className="w-fit rounded-2xl bg-[#071827] px-6 py-4 font-bold text-white shadow-xl">Все услуги</a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <a key={pillar.key} href={pillar.href} className="group overflow-hidden rounded-[2.2rem] bg-white shadow-sm ring-1 ring-[#DDE8EE] transition hover:-translate-y-1 hover:shadow-2xl">
                <picture>
                  <source media="(max-width: 768px)" srcSet={pillar.image.mobile} />
                  <img src={pillar.image.desktop} alt={pillar.eyebrow} className={`h-72 w-full object-cover transition duration-700 group-hover:scale-105 ${index > 0 ? 'object-[right_66%] md:object-right' : 'object-right'}`} />
                </picture>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">{pillar.title}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]">{pillar.eyebrow}</h3>
                  <p className="mt-1 text-sm font-medium text-[#071827]/42">{pillar.translit}</p>
                  <p className="mt-4 leading-7 text-[#071827]/62">{pillar.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">Запись</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Как проходит визит</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#071827]/62">
              Пациенту не нужно разбираться в сложных формах. Мы уточняем только то, что нужно для организации визита: услуга, район, время и контакт.
            </p>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
                <div className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#071827] font-black text-white">0{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-2 leading-7 text-[#071827]/62">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">SEO услуги</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Найдите услугу в своём районе</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#071827]/62">Эти страницы помогают пациентам быстро перейти к нужной услуге: медсестра на дом, уколы, капельницы, перевязки, снятие швов, Family Care, Corporate Care и Recovery IV.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {serviceLinks.map((service) => (
              <a key={service.slug} href={`/services/${service.slug}/almaty/`} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7] transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">{service.titleEn}</p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#071827]">{service.titleRu}</h3>
                <p className="mt-1 text-sm font-semibold text-[#071827]/45">{service.translitRu}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#23A6D5]">Цены</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Стартовые тарифы</h2>
            </div>
            <a href="/prices/" className="w-fit rounded-2xl bg-white px-6 py-4 font-bold text-[#071827]">Открыть цены</a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {prices.map((item) => (
              <div key={item.service} className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#23A6D5]">{item.category}</p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">{item.service}</h3>
                <p className="mt-1 text-sm font-medium text-white/42">{item.translit}</p>
                <p className="mt-7 text-3xl font-black">{item.price}</p>
                <p className="mt-2 text-sm text-white/55">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] bg-[#F5FBFE] p-7 ring-1 ring-[#D7EEF7] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">Алматы и область</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Город, районы и ближайшие зоны</h2>
              <p className="mt-4 text-[#071827]/52">Almaty i blizhayshiye zony</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {locationLinks.map((location) => <a key={location.slug} href={`/services/medsestra-na-dom/${location.slug}/`} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#071827] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#EAF6FB]">{location.nameRu}</a>)}
              {zones.slice(0, 6).map((zone) => <span key={zone} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#071827] shadow-sm">{zone}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="languages" className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Языки обслуживания</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Русский, қазақша и English</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-white p-5 ring-1 ring-[#D7EEF7]"><p className="text-xs font-black text-[#1677A8]">RU</p><h3 className="mt-2 text-xl font-black">Русский</h3><p className="mt-2 text-sm text-[#071827]/55">Основной язык</p></div>
            <div className="rounded-[1.5rem] bg-white p-5 ring-1 ring-[#D7EEF7]"><p className="text-xs font-black text-[#1677A8]">KZ</p><h3 className="mt-2 text-xl font-black">Қазақша</h3><p className="mt-2 text-sm text-[#071827]/55">Поддерживается</p></div>
            <div className="rounded-[1.5rem] bg-white p-5 ring-1 ring-[#D7EEF7]"><p className="text-xs font-black text-[#1677A8]">EN</p><h3 className="mt-2 text-xl font-black">English</h3><p className="mt-2 text-sm text-[#071827]/55">Supported</p></div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">FAQ</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Частые вопросы</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {homepageFaq.map((item) => <div key={item.q} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em]">{item.q}</h3><p className="mt-4 leading-7 text-[#071827]/62">{item.a}</p></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#EAF6FB] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">Контакты</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Нужен визит медсестры?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#071827]/62">Напишите в WhatsApp, позвоните или отправьте email. Один номер работает для обычного звонка и WhatsApp.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-[#D7EEF7]">
            <a href={`https://wa.me/${site.whatsapp}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a>
            <a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a>
            <a href={site.emailHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.email}</a>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
