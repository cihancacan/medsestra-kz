import { Header } from '@/components/Header';
import { pillars } from '@/lib/content';

export default function ServicesPage() {
  return (
    <main className="bg-brand-beige">
      <Header />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-32">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Medsestra.kz</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-brand-navy md:text-7xl">Services</h1>
        <div className="mt-12 space-y-16">
          {pillars.map((pillar) => (
            <section id={pillar.key === 'at-home' ? 'soins-domicile' : pillar.key === 'beauty' ? 'beauty-wellness' : `${pillar.key}-care`} key={pillar.key} className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-premium md:grid-cols-2 md:p-10">
              <picture>
                <source media="(max-width: 768px)" srcSet={pillar.image.mobile} />
                <img src={pillar.image.desktop} alt={pillar.title} className="h-full min-h-[360px] rounded-[1.5rem] object-cover" />
              </picture>
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-semibold text-brand-navy">{pillar.title}</h2>
                <p className="mt-3 text-2xl font-medium text-brand-blue">{pillar.ru}</p>
                <p className="text-brand-navy/50">{pillar.translit}</p>
                <p className="mt-6 text-lg leading-8 text-brand-navy/70">{pillar.text}</p>
                <a href="https://wa.me/77000000000" className="mt-8 w-fit rounded-full bg-brand-navy px-7 py-4 font-semibold text-white">Réserver</a>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
