import { CTA } from '@/components/CTA';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PillarCard } from '@/components/PillarCard';
import { pillars, prices, steps, trustItems, zones } from '@/lib/content';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">4 направления</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy md:text-5xl">
            Медицинский и wellness-сервис для дома, семьи, офиса и премиального восстановления.
          </h2>
          <p className="mt-3 text-brand-navy/50">Meditsinskiy i wellness-servis dlya doma, semyi, ofisa i vosstanovleniya.</p>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => <PillarCard key={pillar.key} pillar={pillar} />)}
        </div>
      </section>

      <section className="bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Доверие</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy">Почему это выглядит серьёзно с первого визита</h2>
            <p className="mt-3 text-brand-navy/50">Pochemu eto vyglyadit seryozno s pervogo vizita</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-brand-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-brand-navy/45">{item.translit}</p>
                <p className="mt-4 leading-7 text-brand-navy/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Как это работает</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy">Запись без сложного медицинского кабинета</h2>
            <p className="mt-4 text-lg leading-8 text-brand-navy/70">На старте Medsestra.kz собирает только минимальные данные для организации заявки: контакт, район, услуга, время и выбранная формула.</p>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft font-semibold text-brand-navy">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy">{step.title}</h3>
                    <p className="mt-2 leading-7 text-brand-navy/65">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Цены</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy">Стартовые тарифы</h2>
              <p className="mt-4 max-w-2xl text-brand-navy/65">Цены будут централизованы в Supabase, чтобы менять их один раз и отображать на всех страницах.</p>
            </div>
            <a href="/prices/" className="rounded-full bg-brand-navy px-6 py-3 font-semibold text-white">Все цены</a>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {prices.map((item) => (
              <div key={item.service} className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">{item.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-brand-navy">{item.service}</h3>
                <p className="mt-1 text-sm text-brand-navy/45">{item.translit}</p>
                <p className="mt-5 text-2xl font-semibold text-brand-navy">{item.price}</p>
                <p className="mt-2 text-sm text-brand-navy/55">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-[2rem] bg-white p-8 shadow-premium md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Локальное SEO</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy">Алматы и ближайшие зоны обслуживания</h2>
          <p className="mt-3 text-brand-navy/50">Almaty i blizhayshiye zony obsluzhivaniya</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {zones.map((zone) => <span key={zone} className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-navy">{zone}</span>)}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
