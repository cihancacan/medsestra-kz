import { CTA } from '@/components/CTA';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { pillars, prices, steps, trustItems, zones, site } from '@/lib/content';

export default function HomePage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <Hero />

      <section id="about" className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">À propos</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">
                Une plateforme simple pour organiser un soin à domicile.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">
              Medsestra.kz est pensé comme une application de service : choix rapide, contact direct, suivi clair et parcours rassurant pour les familles, les entreprises et les clients wellness à Almaty.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-black text-[#1677A8] shadow-sm">✓</div>
                <h3 className="text-xl font-black tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#071827]/42">{item.translit}</p>
                <p className="mt-4 leading-7 text-[#071827]/62">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">Services</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Choisissez votre besoin</h2>
            </div>
            <a href="/services/" className="w-fit rounded-2xl bg-[#071827] px-6 py-4 font-bold text-white shadow-xl">Tous les services</a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <a key={pillar.key} href={pillar.href} className="group overflow-hidden rounded-[2.2rem] bg-white shadow-sm ring-1 ring-[#DDE8EE] transition hover:-translate-y-1 hover:shadow-2xl">
                <picture>
                  <source media="(max-width: 768px)" srcSet={pillar.image.mobile} />
                  <img src={pillar.image.desktop} alt={pillar.eyebrow} className="h-72 w-full object-cover object-right transition duration-700 group-hover:scale-105" />
                </picture>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">{pillar.title}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]">{pillar.eyebrow}</h3>
                  <p className="mt-1 text-sm font-medium text-[#071827]/42">{pillar.translit}</p>
                  <p className="mt-4 leading-7 text-[#071827]/62">{pillar.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">Process</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Réserver en 3 étapes</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#071827]/62">
              Le parcours doit rester simple : pas de friction, pas de formulaire médical lourd, juste les informations nécessaires pour organiser le service.
            </p>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
                <div className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#071827] font-black text-white">0{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-2 leading-7 text-[#071827]/62">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#23A6D5]">Prix</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] md:text-6xl">Tarifs de départ</h2>
            </div>
            <a href="/prices/" className="w-fit rounded-2xl bg-white px-6 py-4 font-bold text-[#071827]">Voir la page prix</a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {prices.map((item) => (
              <div key={item.service} className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#23A6D5]">{item.category}</p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">{item.service}</h3>
                <p className="mt-1 text-sm font-medium text-white/42">{item.translit}</p>
                <p className="mt-7 text-3xl font-black">{item.price}</p>
                <p className="mt-2 text-sm text-white/55">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] bg-[#F5FBFE] p-7 ring-1 ring-[#D7EEF7] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">Zones</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Almaty et alentours</h2>
              <p className="mt-4 text-[#071827]/52">Almaty i blizhayshiye zony</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {zones.map((zone) => <span key={zone} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#071827] shadow-sm">{zone}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#EAF6FB] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1677A8]">Contact</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">Besoin d’un passage à domicile ?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#071827]/62">
              Écrivez sur WhatsApp, appelez directement ou envoyez un email. Le même numéro fonctionne pour les appels classiques et WhatsApp.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-[#D7EEF7]">
            <a href={`https://wa.me/${site.whatsapp}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a>
            <a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a>
            <a href={site.emailHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.email}</a>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
