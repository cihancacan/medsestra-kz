import { Header } from '@/components/Header';
import { prices } from '@/lib/content';

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="mx-auto max-w-5xl px-5 pb-20 pt-32">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Цены / Tseny</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-brand-navy md:text-7xl">Цены Medsestra.kz</h1>
        <p className="mt-6 text-lg leading-8 text-brand-navy/70">
          Стартовые тарифы. Итоговая стоимость зависит от услуги, района, времени визита, срочности и выбранной формулы.
        </p>
        <div className="mt-10 overflow-hidden rounded-[2rem] bg-white shadow-premium">
          {prices.map((item, index) => (
            <div key={item.service} className={`grid gap-3 p-6 md:grid-cols-[1fr_1fr_auto] md:items-center ${index !== 0 ? 'border-t border-brand-navy/10' : ''}`}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">{item.category}</p>
                <h2 className="mt-2 text-xl font-semibold text-brand-navy">{item.service}</h2>
                <p className="text-sm text-brand-navy/50">{item.translit}</p>
              </div>
              <p className="text-brand-navy/60">{item.note}</p>
              <p className="text-2xl font-semibold text-brand-navy">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
