import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Медсестра на дом Алматы | Уколы, перевязки, капельницы | Medsestra.kz',
  description: 'Медсестра на дом в Алматы: уколы, перевязки, капельницы, снятие швов, Family Care, Corporate Care и Recovery IV. Русский, қазақша, English.',
  keywords: [
    'медсестра на дом Алматы',
    'вызвать медсестру на дом Алматы',
    'уколы на дому Алматы',
    'капельница на дому Алматы',
    'перевязка на дому Алматы',
    'снятие швов на дому Алматы',
    'капельница от похмелья Алматы',
    'үйге медбике Алматы',
    'nurse at home Almaty',
    'home nursing Almaty'
  ],
  alternates: {
    canonical: '/services/medsestra-na-dom/almaty/'
  },
  openGraph: {
    title: 'Медсестра на дом Алматы | Medsestra.kz',
    description: 'Nurse at home in Almaty: injections, dressings, IV, family care, corporate care and recovery IV.',
    url: '/services/medsestra-na-dom/almaty/',
    siteName: 'Medsestra.kz',
    type: 'website'
  }
};

const districts = [
  { name: 'Медеуский район', slug: 'medeuskiy', keywords: 'Медеу, Самал, Достык, Горный Гигант' },
  { name: 'Бостандыкский район', slug: 'bostandyk', keywords: 'Бостандык, Орбита, Атакент, КазГУ' },
  { name: 'Алмалинский район', slug: 'almaly', keywords: 'Алмалы, центр, Абая, Толе би' },
  { name: 'Ауэзовский район', slug: 'auezov', keywords: 'Ауэзов, Саина, Мамыр, Аксай' },
  { name: 'Наурызбайский район', slug: 'nauryzbay', keywords: 'Наурызбай, Калкаман, Шугыла' },
  { name: 'Турксибский район', slug: 'turksib', keywords: 'Турксиб, аэропорт, Жас Канат' },
  { name: 'Жетысуский район', slug: 'zhetysu', keywords: 'Жетысу, Рыскулова, Сейфуллина' },
  { name: 'Алатауский район', slug: 'alatau', keywords: 'Алатау, Нуркент, Алгабас' }
];

const procedures = [
  { title: 'Уколы на дому Алматы', text: 'Внутримышечные и другие инъекции выполняются только при наличии назначения и понятной схемы.' },
  { title: 'Перевязка на дому Алматы', text: 'Аккуратная перевязка, стерильные материалы и спокойный визит без лишнего стресса.' },
  { title: 'Капельница на дому Алматы', text: 'Капельницы выполняются при показаниях, после уточнения состояния и назначения.' },
  { title: 'Снятие швов на дому Алматы', text: 'Послеоперационный уход, снятие швов и базовое наблюдение по согласованному времени.' },
  { title: 'Family Care Алматы', text: 'Регулярная забота о родителях: визиты, сопровождение и короткий отчёт семье.' },
  { title: 'Recovery IV Алматы', text: 'Деликатное восстановление после вечеринки или интенсивного ритма в рамках wellness-направления.' }
];

const faqs = [
  {
    q: 'Сколько стоит медсестра на дом в Алматы?',
    a: 'Стоимость зависит от услуги, района, времени визита и срочности. Базовые цены указаны на странице цен, а финальная стоимость подтверждается до визита.'
  },
  {
    q: 'Можно ли вызвать медсестру срочно?',
    a: 'Да, срочный выезд возможен при наличии свободного специалиста. В WhatsApp достаточно указать район, услугу и желаемое время.'
  },
  {
    q: 'Работаете ли вы по районам Алматы?',
    a: 'Да. Структура SEO и сервиса строится по районам Алматы: Медеуский, Бостандыкский, Алмалинский, Ауэзовский, Наурызбайский, Турксибский, Жетысуский и Алатауский.'
  },
  {
    q: 'Какие языки поддерживает сервис?',
    a: 'Основной язык сайта — русский. Также предусмотрены казахский и английский блоки для удобства пользователей и SEO.'
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Medsestra.kz — медсестра на дом Алматы',
  url: 'https://medsestra-kz.vercel.app/services/medsestra-na-dom/almaty/',
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Almaty',
    addressCountry: 'KZ'
  },
  areaServed: ['Almaty', ...districts.map((district) => district.name)],
  medicalSpecialty: ['Nursing', 'HomeHealthCare'],
  availableLanguage: ['ru', 'kk', 'en'],
  description: 'Nurse at home in Almaty: injections, dressings, IV therapy, family care, corporate care and recovery IV.'
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

export default function AlmatyMedsestraNaDomPage() {
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
              Almaty SEO landing · RU / KZ / EN
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl lg:text-8xl">
              Медсестра на дом Алматы
            </h1>
            <p className="mt-4 text-base font-semibold text-[#071827]/45">Medsestra na dom Almaty</p>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">
              Вызов медсестры на дом в Алматы для инъекций, перевязок, капельниц, снятия швов, регулярного ухода, Family Care, Corporate Care и wellness-восстановления. Страница построена как основная городская SEO-страница, от которой дальше идут районы и микрорайоны Алматы.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Здравствуйте, хочу вызвать медсестру на дом в Алматы')}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">Вызвать через WhatsApp</a>
              <a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">RU</p><h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">Вызвать медсестру на дом в Алматы</h2><p className="mt-4 leading-7 text-[#071827]/62">Основной запрос для русскоязычных клиентов в Алматы.</p></div>
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">KZ</p><h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">Алматыда үйге медбике шақыру</h2><p className="mt-1 text-sm font-semibold text-[#071827]/45">Almatyda uyge medbike shaqyru</p><p className="mt-4 leading-7 text-[#071827]/62">Алматы қаласында үй жағдайында медбике қызметін ұйымдастыру.</p></div>
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7]"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">EN</p><h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">Nurse at home in Almaty</h2><p className="mt-4 leading-7 text-[#071827]/62">Private home nursing and care coordination for residents, families and companies in Almaty.</p></div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Услуги в Алматы</p><h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Что можно организовать на дому?</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {procedures.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-2xl font-black tracking-[-0.04em]">{item.title}</h3><p className="mt-4 leading-7 text-[#071827]/62">{item.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">Районы Алматы</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Следующий уровень SEO — районы и микрорайоны</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {districts.map((district) => (
              <div key={district.slug} className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10">
                <h3 className="text-2xl font-black tracking-[-0.04em]">{district.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{district.keywords}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#23A6D5]">URL: /{district.slug}/</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">FAQ</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Частые вопросы</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]"><h3 className="text-xl font-black tracking-[-0.03em]">{item.q}</h3><p className="mt-4 leading-7 text-[#071827]/62">{item.a}</p></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
