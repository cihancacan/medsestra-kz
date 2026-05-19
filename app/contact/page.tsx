import { Header } from '@/components/Header';
import { pillars, site, zones } from '@/lib/content';

const timeSlots = ['Aujourd’hui', 'Demain', 'Cette semaine', 'Urgent'];

export default function ContactPage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />

      <section className="relative overflow-hidden bg-white px-5 pb-14 pt-32 md:px-8 md:pb-20 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#EAF6FB] to-white" />
        <div className="absolute -right-20 top-20 h-[520px] w-[520px] rounded-full bg-[#8ED8F8]/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">
              Contact & réservation
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#071827] md:text-7xl lg:text-8xl">
              Организовать визит медсестры
            </h1>
            <p className="mt-4 text-base font-medium text-[#071827]/45">Organizovat vizit medsestry</p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">
              Écrivez sur WhatsApp, appelez ou laissez une demande simple. Nous confirmons uniquement les informations nécessaires : service, zone, créneau et contact.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">
                WhatsApp
              </a>
              <a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">
                {site.phone}
              </a>
            </div>
          </div>

          <div className="rounded-[2.4rem] bg-white p-6 shadow-2xl ring-1 ring-[#D7EEF7] md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Contact direct</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#071827]">Un seul point d’entrée</h2>
            <div className="mt-6 grid gap-3">
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a>
              <a href={site.phoneHref} className="rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827] ring-1 ring-[#D7EEF7]">{site.phone}</a>
              <a href={site.emailHref} className="rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827] ring-1 ring-[#D7EEF7]">{site.email}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Demande rapide</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Préparer le message WhatsApp
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#071827]/62">
              La demande reste volontairement simple. Aucune donnée médicale sensible n’est demandée dans cette première étape.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-[2.4rem] bg-white p-5 shadow-xl ring-1 ring-[#DDE8EE] md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">1. Choisir un service</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {pillars.map((pillar) => (
                  <a
                    key={pillar.key}
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Здравствуйте, хочу записаться: ${pillar.eyebrow}`)}`}
                    className="rounded-[1.5rem] bg-[#F5FBFE] p-5 ring-1 ring-[#D7EEF7] transition hover:-translate-y-1 hover:bg-[#EAF6FB]"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1677A8]">{pillar.title}</p>
                    <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#071827]">{pillar.eyebrow}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#071827]/45">{pillar.translit}</p>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-[#071827] p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#23A6D5]">Recovery IV</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">Восстановление после вечеринки</h3>
                <p className="mt-1 text-sm font-semibold text-white/45">Vosstanovlenie posle vecherinki</p>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Здравствуйте, хочу записаться: Recovery IV / восстановление после вечеринки')}`}
                  className="mt-4 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#071827]"
                >
                  Demander Recovery IV
                </a>
              </div>
            </div>

            <div className="rounded-[2.4rem] bg-white p-5 shadow-xl ring-1 ring-[#DDE8EE] md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">2. Zone & créneau</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#071827]">Informations utiles</h3>
              <p className="mt-3 leading-7 text-[#071827]/62">
                Vous pouvez envoyer ces éléments directement dans WhatsApp pour accélérer la confirmation.
              </p>

              <div className="mt-6">
                <p className="text-sm font-black text-[#071827]">Créneau souhaité</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <span key={slot} className="rounded-full bg-[#F5FBFE] px-4 py-2 text-sm font-black text-[#071827] ring-1 ring-[#D7EEF7]">{slot}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-black text-[#071827]">Zones principales</p>
                <div className="mt-3 flex max-h-44 flex-wrap gap-2 overflow-hidden">
                  {zones.slice(0, 14).map((zone) => (
                    <span key={zone} className="rounded-full bg-[#EAF6FB] px-4 py-2 text-sm font-black text-[#1677A8]">{zone}</span>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Здравствуйте, хочу оставить заявку. Услуга: / Район: / Удобное время: / Имя:')}`}
                className="mt-8 block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white shadow-xl"
              >
                Envoyer une demande simple
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Ce que nous demandons</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Le minimum pour organiser le service.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {['Nom et téléphone', 'Service souhaité', 'Zone / quartier', 'Créneau préféré'].map((item) => (
              <div key={item} className="rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg font-black text-[#1677A8] shadow-sm">✓</div>
                <h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
