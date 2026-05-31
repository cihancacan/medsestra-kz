import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Медсестра на дом в Казахстане | Medsestra.kz',
  description: 'Медсестра на дом в Казахстане: уколы, перевязки, капельницы, снятие швов, Family Care и корпоративный уход. Русский, қазақша и English.',
  keywords: [
    'медсестра на дом',
    'медсестра на дом Казахстан',
    'вызвать медсестру на дом',
    'уколы на дому Казахстан',
    'капельница на дому Казахстан',
    'үйге медбике',
    'үйге медбике шақыру',
    'nurse at home Kazakhstan',
    'home nursing Kazakhstan'
  ],
  alternates: {
    canonical: '/services/medsestra-na-dom/'
  },
  openGraph: {
    title: 'Медсестра на дом в Казахстане | Medsestra.kz',
    description: 'Private nurse care at home in Kazakhstan: home nursing, family care, corporate care and wellness IV.',
    url: '/services/medsestra-na-dom/',
    siteName: 'Medsestra.kz',
    type: 'website'
  }
};

const cities = [
  { name: 'Алматы', href: '/services/medsestra-na-dom/almaty/', status: 'Активная страница' },
  { name: 'Астана', href: '#', status: 'Скоро' },
  { name: 'Шымкент', href: '#', status: 'Скоро' },
  { name: 'Караганда', href: '#', status: 'Скоро' },
  { name: 'Атырау', href: '#', status: 'Скоро' },
  { name: 'Актау', href: '#', status: 'Скоро' }
];

const services = [
  'Уколы на дому по назначению врача',
  'Перевязки и уход после процедур',
  'Снятие швов на дому',
  'Капельница на дому при медицинских показаниях',
  'Family Care для родителей и пожилых людей',
  'Corporate Care для офисов и руководителей',
  'Beauty & Wellness IV и Recovery IV'
];

const faqs = [
  {
    q: 'Можно ли вызвать медсестру на дом через WhatsApp?',
    a: 'Да. На первом этапе достаточно написать в WhatsApp, указать город, район, услугу и удобное время. Мы не просим чувствительные медицинские данные в первом сообщении.'
  },
  {
    q: 'Какие услуги доступны на дому?',
    a: 'Основные услуги: уколы, перевязки, снятие швов, капельницы при показаниях, регулярный уход, Family Care, Corporate Care и wellness-направление.'
  },
  {
    q: 'В каких городах будет работать Medsestra.kz?',
    a: 'Стартовая структура строится для Алматы, затем будет масштабироваться на Астану, Шымкент, Караганду, Атырау, Актау и другие крупные города Казахстана.'
  },
  {
    q: 'Это медицинская клиника?',
    a: 'Medsestra.kz позиционируется как сервис организации ухода и выезда специалиста. Конкретные медицинские действия выполняются по правилам, показаниям и назначению врача, когда это требуется.'
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Medsestra.kz',
  url: 'https://medsestra-kz.vercel.app/services/medsestra-na-dom/',
  telephone: site.phone,
  email: site.email,
  areaServed: ['Kazakhstan', 'Almaty', 'Astana', 'Shymkent'],
  medicalSpecialty: ['Nursing', 'HomeHealthCare'],
  availableLanguage: ['ru', 'kk', 'en'],
  description: 'Nurse at home service in Kazakhstan: injections, dressings, IV, family care, corporate care and wellness recovery.',
  sameAs: ['https://medsestra.kz']
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a
    }
  }))
};

export default function MedsestraNaDomPage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-[#EAF6FB] to-white" />
        <div className="absolute -right-24 top-20 h-[560px] w-[560px] rounded-full bg-[#8ED8F8]/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">
              SEO service hub · RU / KZ / EN
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl lg:text-8xl">
              Медсестра на дом в Казахстане
            </h1>
            <p className="mt-4 text-base font-semibold text-[#071827]/45">Medsestra na dom v Kazakhstane</p>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">
              Medsestra.kz — современная структура для организации выезда медсестры на дом в крупных городах Казахстана. Сервис построен для частных клиентов, семей, пожилых родителей, офисов и wellness-запросов: уколы, перевязки, капельницы, снятие швов, Family Care, Corporate Care и Recovery IV.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">Написать в WhatsApp</a>
              <a href="/services/medsestra-na-dom/almaty/" className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">Страница Алматы</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">RU</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">Медсестра на дом</h2>
            <p className="mt-4 leading-7 text-[#071827]/62">Основная русская версия страницы для поиска по Казахстану и городам.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">KZ</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">Үйге медбике шақыру</h2>
            <p className="mt-1 text-sm font-semibold text-[#071827]/45">Uyge medbike shaqyru</p>
            <p className="mt-4 leading-7 text-[#071827]/62">Қазақстанның ірі қалаларында үйге медбике шақыруға арналған заманауи қызмет құрылымы.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">EN</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">Nurse at home</h2>
            <p className="mt-4 leading-7 text-[#071827]/62">Home nursing, family care, corporate care and wellness support across major cities in Kazakhstan.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Service principal</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Что входит в услугу медсестры на дом?</h2>
            <p className="mt-5 text-lg leading-8 text-[#071827]/62">Страница сделана как SEO-хаб: она объясняет услугу в целом, а затем направляет пользователя на страницы городов, районов и конкретных процедур.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {services.map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-[#F5FBFE] p-5 font-black text-[#071827] ring-1 ring-[#D7EEF7]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">Города Казахстана</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Структура для масштабирования по крупным городам</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {cities.map((city) => (
              <a key={city.name} href={city.href} className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10 transition hover:bg-white/12">
                <h3 className="text-3xl font-black tracking-[-0.04em]">{city.name}</h3>
                <p className="mt-3 text-sm font-black text-[#23A6D5]">{city.status}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">FAQ</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Вопросы по услуге</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
                <h3 className="text-xl font-black tracking-[-0.03em]">{item.q}</h3>
                <p className="mt-4 leading-7 text-[#071827]/62">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
