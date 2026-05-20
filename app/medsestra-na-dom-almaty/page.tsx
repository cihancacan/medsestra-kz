import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { imageFiles, site, zones } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Медсестра на дом Алматы — уколы, капельницы, перевязки | Medsestra.kz',
  description: 'Медсестра на дом в Алматы: уколы по назначению врача, капельницы, перевязки, снятие швов и уход на дому. Запись через WhatsApp или по телефону.',
  alternates: {
    canonical: '/medsestra-na-dom-almaty/',
    languages: {
      ru: '/medsestra-na-dom-almaty/',
      kk: '/kz/uyge-medbikeni-shakyru-almaty/',
      en: '/en/nurse-at-home-almaty/'
    }
  },
  openGraph: {
    title: 'Медсестра на дом Алматы — Medsestra.kz',
    description: 'Уход на дому, уколы, капельницы, перевязки и снятие швов в Алматы. Быстрая запись через WhatsApp.',
    url: 'https://medsestra.kz/medsestra-na-dom-almaty/',
    images: ['/images/athome.jpg'],
    locale: 'ru_KZ',
    type: 'website'
  }
};

const services = [
  { title: 'Уколы на дому', translit: 'Ukoly na domu', text: 'Внутримышечные и подкожные инъекции по назначению врача.' },
  { title: 'Капельница на дому', translit: 'Kapelnitsa na domu', text: 'Организация капельницы при наличии назначения и после уточнения деталей.' },
  { title: 'Перевязка на дому', translit: 'Perevyazka na domu', text: 'Аккуратная перевязка с соблюдением стерильности и базового протокола.' },
  { title: 'Снятие швов', translit: 'Snyatie shvov', text: 'Выезд специалиста для снятия швов после предварительного уточнения.' }
];

const steps = [
  { title: 'Напишите или позвоните', text: 'Укажите услугу, район Алматы, удобное время и контактный номер.' },
  { title: 'Мы уточняем детали', text: 'Подтверждаем формат визита, ориентировочную стоимость и необходимость материалов.' },
  { title: 'Медсестра приезжает', text: 'Специалист приезжает по адресу и выполняет услугу в согласованное время.' }
];

const faq = [
  {
    q: 'Можно ли вызвать медсестру на дом в Алматы срочно?',
    a: 'Да, срочный выезд возможен при наличии свободного специалиста. Время и стоимость подтверждаются через WhatsApp или по телефону.'
  },
  {
    q: 'Какие услуги делает медсестра на дому?',
    a: 'Чаще всего запрашивают уколы, капельницы, перевязки, снятие швов и базовый уход на дому. Часть услуг выполняется только при наличии назначения врача.'
  },
  {
    q: 'Нужно ли отправлять медицинские документы заранее?',
    a: 'На первом этапе мы запрашиваем только минимальную информацию для организации визита: услугу, район, время и контакт. Медицинские детали уточняются аккуратно и только при необходимости.'
  },
  {
    q: 'В каких районах Алматы работает сервис?',
    a: 'Мы ориентируемся на Алматы и основные районы города: Медеу, Бостандык, Алмалы, Ауэзов, Турксиб, Жетысу, Алатау и Наурызбай.'
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://medsestra.kz/#medicalbusiness',
      name: 'Medsestra.kz',
      url: 'https://medsestra.kz/medsestra-na-dom-almaty/',
      telephone: site.phone,
      email: site.email,
      image: 'https://medsestra.kz/images/athome.jpg',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Алматы',
        addressCountry: 'KZ'
      },
      areaServed: ['Алматы', 'Медеу', 'Бостандык', 'Алмалы', 'Ауэзов', 'Турксиб', 'Жетысу', 'Алатау', 'Наурызбай'],
      medicalSpecialty: 'Nursing'
    },
    {
      '@type': 'Service',
      '@id': 'https://medsestra.kz/medsestra-na-dom-almaty/#service',
      name: 'Медсестра на дом в Алматы',
      serviceType: 'Home nursing service',
      provider: { '@id': 'https://medsestra.kz/#medicalbusiness' },
      areaServed: { '@type': 'City', name: 'Алматы' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'KZT',
        availability: 'https://schema.org/InStock',
        url: 'https://medsestra.kz/medsestra-na-dom-almaty/'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://medsestra.kz/medsestra-na-dom-almaty/#faq',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }
  ]
};

export default function NurseAtHomeAlmatyPage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-gradient-to-b from-[#EAF6FB] to-white" />
        <div className="absolute -right-24 top-16 h-[560px] w-[560px] rounded-full bg-[#8ED8F8]/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">
              SEO Almaty · Home Nursing
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#071827] md:text-7xl lg:text-8xl">
              Медсестра на дом в Алматы
            </h1>
            <p className="mt-4 text-base font-semibold text-[#071827]/45">Medsestra na dom v Almaty</p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#071827]/66 md:text-xl md:leading-9">
              Уколы, капельницы, перевязки, снятие швов и базовый уход на дому в Алматы. Быстрая запись через WhatsApp, понятное подтверждение услуги и аккуратный выезд специалиста.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Здравствуйте, хочу вызвать медсестру на дом в Алматы')}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">
                Вызвать медсестру
              </a>
              <a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">
                {site.phone}
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.4rem] bg-[#071827] shadow-2xl">
            <picture>
              <source media="(max-width: 768px)" srcSet={imageFiles.atHome.mobile} />
              <img src={imageFiles.atHome.desktop} alt="Медсестра на дом в Алматы" className="h-[520px] w-full object-cover object-right md:h-[680px]" />
            </picture>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Services à domicile</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Что можно организовать на дому
            </h2>
            <p className="mt-4 text-base font-semibold text-[#071827]/45">Chto mozhno organizovat na domu</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#DDE8EE]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF6FB] text-xl font-black text-[#1677A8]">✓</div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-[#071827]">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-[#071827]/45">{item.translit}</p>
                <p className="mt-4 leading-7 text-[#071827]/62">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Process</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Как проходит вызов</h2>
            <p className="mt-4 text-base font-semibold text-[#071827]/45">Kak prokhodit vyzov</p>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
                <div className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#071827] font-black text-white">0{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.03em] text-[#071827]">{step.title}</h3>
                    <p className="mt-2 leading-7 text-[#071827]/62">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">Almaty local SEO</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Районы Алматы, где востребована медсестра на дом
            </h2>
            <p className="mt-4 text-sm font-semibold text-white/45">Rayony Almaty, gde vostrebovana medsestra na dom</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {zones.slice(0, 18).map((zone) => (
              <span key={zone} className="rounded-full bg-white/8 px-4 py-2 text-sm font-black text-white ring-1 ring-white/10">{zone}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">FAQ</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Вопросы перед вызовом</h2>
            <p className="mt-4 text-base font-semibold text-[#071827]/45">Voprosy pered vyzovom</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.q} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
                <h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{item.q}</h3>
                <p className="mt-4 leading-7 text-[#071827]/62">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF6FB] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Réservation</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Нужна медсестра на дом в Алматы?
            </h2>
            <p className="mt-4 text-base font-semibold text-[#071827]/45">Nuzhna medsestra na dom v Almaty?</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#071827]/62">
              Напишите в WhatsApp или позвоните. Мы уточним услугу, район, удобное время и подтвердим визит.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-[#D7EEF7]">
            <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Здравствуйте, хочу вызвать медсестру на дом в Алматы')}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a>
            <a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a>
            <a href="/services/" className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">Voir les services</a>
          </div>
        </div>
      </section>
    </main>
  );
}
