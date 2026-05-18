import { CTA } from '@/components/CTA';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { pillars, prices, steps, trustItems, zones } from '@/lib/content';

export default function HomePage() {
  const mainPillar = pillars[0];
  const otherPillars = pillars.slice(1);

  return (
    <main className="bg-[#F8F1E8]">
      <Header />
      <Hero />

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-8 h-px w-24 bg-brand-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-ink/45">Medsestra.kz</p>
              <h2 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-brand-ink md:text-7xl">
                Не просто вызов. Частный медицинский сервис.
              </h2>
              <p className="mt-4 text-brand-ink/45">Ne prosto vyzov. Chastnyy meditsinskiy servis.</p>
            </div>
            <p className="max-w-2xl text-xl leading-9 text-brand-ink/62">
              Мы строим Medsestra.kz как спокойный premium-сервис: понятная запись, проверенные специалисты, аккуратный выезд на дом, семейные программы и корпоративное сопровождение без ощущения “доски объявлений”.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-brand-ink shadow-luxury lg:grid-cols-[1.08fr_0.92fr]">
            <picture>
              <source media="(max-width: 768px)" srcSet={mainPillar.image.mobile} />
              <img src={mainPillar.image.desktop} alt={mainPillar.eyebrow} className="h-[520px] w-full object-cover lg:h-full" />
            </picture>
            <div className="flex flex-col justify-center p-8 text-white md:p-14 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-blue">Signature service</p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">{mainPillar.eyebrow}</h2>
              <p className="mt-3 text-white/45">{mainPillar.translit}</p>
              <p className="mt-8 text-lg leading-8 text-white/72">{mainPillar.text}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {mainPillar.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white/82">{bullet}</div>
                ))}
              </div>
              <a href="/services/" className="mt-10 w-fit rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-brand-ink">
                Смотреть услуги
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 bg-white/55">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-blue">Programs</p>
              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-brand-ink md:text-7xl">Для семьи, офиса и wellness</h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-brand-ink/58">Три направления, которые дают проекту премиальный и масштабируемый формат.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {otherPillars.map((pillar) => (
              <a key={pillar.key} href={pillar.href} className="group overflow-hidden rounded-[2rem] bg-[#F8F1E8] shadow-sm transition hover:-translate-y-1 hover:shadow-luxury">
                <picture>
                  <source media="(max-width: 768px)" srcSet={pillar.image.mobile} />
                  <img src={pillar.image.desktop} alt={pillar.eyebrow} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
                </picture>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-blue">{pillar.title}</p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-ink">{pillar.eyebrow}</h3>
                  <p className="mt-1 text-sm text-brand-ink/42">{pillar.translit}</p>
                  <p className="mt-5 leading-7 text-brand-ink/62">{pillar.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-blue">Trust architecture</p>
              <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-brand-ink md:text-7xl">Доверие до звонка</h2>
              <p className="mt-6 text-lg leading-8 text-brand-ink/58">Главная задача дизайна — снять тревогу: клиент должен почувствовать чистоту, порядок, контроль и высокий уровень сервиса.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-brand-ink/8 bg-white/70 p-7 shadow-sm backdrop-blur">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-brand-ink/42">{item.translit}</p>
                  <p className="mt-5 leading-7 text-brand-ink/62">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 bg-brand-ink text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-blue">Journey</p>
              <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">Три шага до визита</h2>
              <p className="mt-6 text-lg leading-8 text-white/62">Без сложных медицинских анкет на старте. Только информация, нужная для организации заявки.</p>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[2rem] border border-white/10 bg-white/7 p-7">
                  <div className="flex gap-5">
                    <span className="text-4xl font-semibold tracking-[-0.05em] text-brand-gold">0{index + 1}</span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                      <p className="mt-3 leading-7 text-white/62">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 bg-white/55">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-blue">Цены</p>
              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-brand-ink md:text-7xl">Стартовые тарифы</h2>
            </div>
            <a href="/prices/" className="w-fit rounded-full bg-brand-ink px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-luxury">Все цены</a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {prices.map((item) => (
              <div key={item.service} className="rounded-[2rem] bg-[#F8F1E8] p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">{item.category}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-brand-ink">{item.service}</h3>
                <p className="mt-1 text-sm text-brand-ink/42">{item.translit}</p>
                <p className="mt-7 text-3xl font-semibold text-brand-ink">{item.price}</p>
                <p className="mt-2 text-sm text-brand-ink/55">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white/75 p-8 shadow-luxury md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-blue">Локальное SEO</p>
          <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-brand-ink md:text-7xl">Алматы и ближайшие зоны</h2>
          <p className="mt-4 text-brand-ink/45">Almaty i blizhayshiye zony</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {zones.map((zone) => <span key={zone} className="rounded-full border border-brand-ink/8 bg-[#F8F1E8] px-4 py-2 text-sm font-semibold text-brand-ink/72">{zone}</span>)}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
