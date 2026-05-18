import { Header } from '@/components/Header';
import { pillars, site } from '@/lib/content';

function sectionId(key: string) {
  if (key === 'at-home') return 'soins-domicile';
  if (key === 'beauty') return 'beauty-wellness';
  return `${key}-care`;
}

export default function ServicesPage() {
  return (
    <main className="bg-brand-beige">
      <Header />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-32">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Услуги</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-brand-navy md:text-7xl">Все направления Medsestra.kz</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-navy/70">
          Русская версия является основной. Ниже — четыре ключевых направления сервиса для Алматы: уход на дому, Family Care, Corporate Care и Beauty & Wellness IV.
        </p>
        <div className="mt-12 space-y-16">
          {pillars.map((pillar, index) => (
            <section id={sectionId(pillar.key)} key={pillar.key} className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-premium md:grid-cols-2 md:p-10">
              <picture className={index % 2 === 1 ? 'md:order-2' : ''}>
                <source media="(max-width: 768px)" srcSet={pillar.image.mobile} />
                <img src={pillar.image.desktop} alt={pillar.eyebrow} className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover" />
              </picture>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">{pillar.title}</p>
                <h2 className="mt-4 text-4xl font-semibold text-brand-navy">{pillar.headline}</h2>
                <p className="mt-3 text-2xl font-medium text-brand-blue">{pillar.eyebrow}</p>
                <p className="text-brand-navy/50">{pillar.translit}</p>
                <p className="mt-6 text-lg leading-8 text-brand-navy/70">{pillar.text}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {pillar.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-2xl bg-brand-soft px-4 py-3 text-sm font-semibold text-brand-navy">{bullet}</div>
                  ))}
                </div>
                <a href={`https://wa.me/${site.whatsapp}`} className="mt-8 w-fit rounded-full bg-brand-navy px-7 py-4 font-semibold text-white">Записаться</a>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
