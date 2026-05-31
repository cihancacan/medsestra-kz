import { Header } from '@/components/Header';
import { pillars, site } from '@/lib/content';
import { seoLocations, seoServices } from '@/lib/seo-service-data';

function sectionId(key: string) {
  if (key === 'at-home') return 'soins-domicile';
  if (key === 'beauty') return 'beauty-wellness';
  return `${key}-care`;
}

const extraWellness = ['Recovery IV', 'Hydration IV', 'Energy boost', 'After party recovery'];
const mainLocations = seoLocations.filter((location) => location.slug === 'almaty' || location.parentSlug === 'almaty');

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />

      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#EAF6FB] to-white" />
        <div className="absolute -right-20 top-24 h-[520px] w-[520px] rounded-full bg-[#8ED8F8]/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">
              Услуги Medsestra.kz
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#071827] md:text-7xl lg:text-8xl">
              Медицинский уход на дому
            </h1>
            <p className="mt-4 text-base font-medium text-[#071827]/45">Meditsinskiy ukhod na domu</p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">
              Medsestra.kz организует выезд медсестры, уход на дому, поддержку семьи, корпоративный уход и wellness-направление. Мы работаем как единая компания: отбираем медсестёр, проверяем документы и контролируем качество визита.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">
                Написать в WhatsApp
              </a>
              <a href="/prices/" className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">
                Посмотреть цены
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <a key={pillar.key} href={`#${sectionId(pillar.key)}`} className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-[#DDE8EE] transition hover:-translate-y-1 hover:shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">{pillar.title}</p>
                <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#071827]">{pillar.eyebrow}</h2>
                <p className="mt-1 text-sm font-semibold text-[#071827]/45">{pillar.translit}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl space-y-20">
          {pillars.map((pillar, index) => (
            <section id={sectionId(pillar.key)} key={pillar.key} className="grid overflow-hidden rounded-[2.4rem] bg-[#F5FBFE] shadow-xl ring-1 ring-[#D7EEF7] lg:grid-cols-2">
              <picture className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <source media="(max-width: 768px)" srcSet={pillar.image.mobile} />
                <img src={pillar.image.desktop} alt={pillar.eyebrow} className="h-[420px] w-full object-cover object-right md:h-[560px] lg:h-full" />
              </picture>

              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{pillar.title}</p>
                <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#071827] md:text-6xl">{pillar.headline}</h2>
                <p className="mt-4 text-2xl font-black text-[#1677A8]">{pillar.eyebrow}</p>
                <p className="mt-1 text-sm font-semibold text-[#071827]/45">{pillar.translit}</p>
                <p className="mt-6 text-lg leading-8 text-[#071827]/64">{pillar.text}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {pillar.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{bullet}</div>
                  ))}
                </div>

                {pillar.key === 'beauty' && (
                  <div className="mt-6 rounded-[1.5rem] bg-white p-5 ring-1 ring-[#DDE8EE]">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">Recovery IV discret</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#071827]">Восстановление после вечеринки</h3>
                    <p className="mt-1 text-sm font-semibold text-[#071827]/45">Vosstanovlenie posle vecherinki</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {extraWellness.map((item) => <span key={item} className="rounded-full bg-[#EAF6FB] px-3 py-2 text-xs font-black text-[#1677A8]">{item}</span>)}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Здравствуйте, хочу записаться: ${pillar.eyebrow}`)}`} className="rounded-2xl bg-[#071827] px-6 py-4 text-center font-black text-white shadow-xl">Записаться</a>
                  <a href="/prices/" className="rounded-2xl bg-white px-6 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">Цены</a>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Все направления</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Выберите услугу и город</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#071827]/62">Эти страницы помогают пациенту быстро найти нужную услугу в своём районе и сразу перейти к записи.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {seoServices.map((service) => (
              <a key={service.slug} href={`/services/${service.slug}/almaty/`} className="rounded-[2rem] bg-white p-6 ring-1 ring-[#D7EEF7] transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">{service.titleEn}</p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#071827]">{service.titleRu}</h3>
                <p className="mt-1 text-sm font-semibold text-[#071827]/45">{service.translitRu}</p>
                <p className="mt-4 text-sm leading-6 text-[#071827]/58">{service.shortRu}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Алматы и область</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Зоны обслуживания</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {mainLocations.map((location) => (
              <a key={location.slug} href={`/services/medsestra-na-dom/${location.slug}/`} className="rounded-[1.6rem] bg-[#F5FBFE] p-5 ring-1 ring-[#D7EEF7] transition hover:-translate-y-1 hover:bg-[#EAF6FB]">
                <h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{location.nameRu}</h3>
                {location.nameKz && <p className="mt-1 text-sm font-semibold text-[#071827]/45">{location.nameKz}</p>}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">Запись</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Нужна медсестра на дом?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">Напишите в WhatsApp или позвоните. Мы уточним услугу, район, время и подтвердим визит.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 text-[#071827] shadow-xl">
            <a href={`https://wa.me/${site.whatsapp}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a>
            <a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a>
            <a href={site.emailHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.email}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
