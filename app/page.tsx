import { CTA } from '@/components/CTA';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PillarCard } from '@/components/PillarCard';
import { pillars, prices } from '@/lib/content';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Services</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy md:text-5xl">
            Une plateforme premium pour les soins, la famille, les bureaux et le wellness.
          </h2>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => <PillarCard key={pillar.key} pillar={pillar} />)}
        </div>
      </section>

      <section className="bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Prix</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy">Tarifs de départ</h2>
              <p className="mt-4 max-w-2xl text-brand-navy/65">Les prix seront centralisés dans Supabase plus tard. Pour l’instant, cette base permet d’aller vite.</p>
            </div>
            <a href="/prices/" className="rounded-full bg-brand-navy px-6 py-3 font-semibold text-white">Page prix</a>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {prices.map((item) => (
              <div key={item.service} className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-brand-navy">{item.service}</h3>
                <p className="mt-1 text-brand-blue">{item.ru}</p>
                <p className="mt-5 text-2xl font-semibold text-brand-navy">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
